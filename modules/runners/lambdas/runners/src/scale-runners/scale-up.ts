import { listEC2Runners, createRunner, RunnerInputParameters } from './runners';
import { createOctoClient, createGithubAppAuth, createGithubInstallationAuth } from './gh-auth';
import yn from 'yn';
import { Octokit } from '@octokit/rest';

export interface ActionRequestMessage {
  id: number;
  eventType: 'check_run' | 'workflow_job';
  repositoryName: string;
  repositoryOwner: string;
  installationId: number;
}

export const scaleUp = async (eventSource: string, payload: ActionRequestMessage): Promise<void> => {
  if (eventSource !== 'aws:sqs') throw Error('Cannot handle non-SQS events!');
  const enableOrgLevel = yn(process.env.ENABLE_ORGANIZATION_RUNNERS, { default: true });
  const maximumRunners = parseInt(process.env.RUNNERS_MAXIMUM_COUNT || '3');
  const minimumRunners = parseInt(process.env.RUNNERS_MINIMUM_COUNT || '1');
  const runnerExtraLabels = process.env.RUNNER_EXTRA_LABELS;
  const runnerGroup = process.env.RUNNER_GROUP_NAME;
  const environment = process.env.ENVIRONMENT;
  const ghesBaseUrl = process.env.GHES_URL;

  console.info(`Received ${payload.eventType} from ${payload.repositoryOwner}/${payload.repositoryName}`);

  let ghesApiUrl = '';
  if (ghesBaseUrl) {
    ghesApiUrl = `${ghesBaseUrl}/api/v3`;
  }

  let installationId = payload.installationId;
  if (installationId == 0) {
    const ghAuth = await createGithubAppAuth(undefined, ghesApiUrl);
    const githubClient = await createOctoClient(ghAuth.token, ghesApiUrl);
    installationId = enableOrgLevel
      ? (
          await githubClient.apps.getOrgInstallation({
            org: payload.repositoryOwner,
          })
        ).data.id
      : (
          await githubClient.apps.getRepoInstallation({
            owner: payload.repositoryOwner,
            repo: payload.repositoryName,
          })
        ).data.id;
  }

  const ghAuth = await createGithubInstallationAuth(installationId, ghesApiUrl);
  const githubInstallationClient = await createOctoClient(ghAuth.token, ghesApiUrl);
  const runnerType = enableOrgLevel ? 'Org' : 'Repo';
  const runnerOwner = enableOrgLevel ? payload.repositoryOwner : `${payload.repositoryOwner}/${payload.repositoryName}`;

  const isQueued = await getJobStatus(githubInstallationClient, payload);
  if (isQueued) {
    const currentRunners = await listEC2Runners({
      environment,
      runnerType,
      runnerOwner,
    });
    console.info(`${runnerType} ${runnerOwner} has ${currentRunners.length}/${maximumRunners} runners`);
    console.info(`Minimum Runner count is ${minimumRunners}`);

    if (currentRunners.length < maximumRunners) {
      // create token
      const registrationToken = enableOrgLevel
        ? await githubInstallationClient.actions.createRegistrationTokenForOrg({ org: payload.repositoryOwner })
        : await githubInstallationClient.actions.createRegistrationTokenForRepo({
            owner: payload.repositoryOwner,
            repo: payload.repositoryName,
          });
      const token = registrationToken.data.token;

      const labelsArgument = runnerExtraLabels !== undefined ? `--labels ${runnerExtraLabels}` : '';
      const runnerGroupArgument = runnerGroup !== undefined ? ` --runnergroup ${runnerGroup}` : '';
      const configBaseUrl = ghesBaseUrl ? ghesBaseUrl : 'https://github.com';
      for (let i = currentRunners.length; i < minimumRunners; i++) {
        console.info(`Attempting to launch a new runner`);
        await createRunnerLoop({
          environment,
          runnerServiceConfig: enableOrgLevel
              // eslint-disable-next-line max-len
              ? `--url ${configBaseUrl}/${payload.repositoryOwner} --token ${token} ${labelsArgument}${runnerGroupArgument}`
              : `--url ${configBaseUrl}/${payload.repositoryOwner}/${payload.repositoryName} ` +
              `--token ${token} ${labelsArgument}`,
          runnerOwner,
          runnerType,
        });
      }

    } else {
      console.warn('No runner created: maximum number of runners reached.');
    }
  }
};

async function getJobStatus(githubInstallationClient: Octokit, payload: ActionRequestMessage): Promise<boolean> {
  let isQueued = false;
  if (payload.eventType === 'workflow_job') {
    const jobForWorkflowRun = await githubInstallationClient.actions.getJobForWorkflowRun({
      job_id: payload.id,
      owner: payload.repositoryOwner,
      repo: payload.repositoryName,
    });
    isQueued = jobForWorkflowRun.data.status === 'queued';
  } else if (payload.eventType === 'check_run') {
    const checkRun = await githubInstallationClient.checks.get({
      check_run_id: payload.id,
      owner: payload.repositoryOwner,
      repo: payload.repositoryName,
    });
    isQueued = checkRun.data.status === 'queued';
  } else {
    throw Error(`Event ${payload.eventType} is not supported`);
  }
  console.info(`Job ${payload.id} is ${isQueued ? 'queued' : 'not queued'}`);
  return isQueued;
}

export async function createRunnerLoop(runnerParameters: RunnerInputParameters): Promise<void> {
  const launchTemplateNames = process.env.LAUNCH_TEMPLATE_NAME?.split(',') as string[];
  let launched = false;
  for (let i = 0; i < launchTemplateNames.length; i++) {
    console.info(`Attempt '${i}' to launch instance using ${launchTemplateNames[i]}.`);
    try {
      await createRunner(runnerParameters, launchTemplateNames[i]);
      launched = true;
      break;
    } catch (error) {
      console.warn(`Attempt '${i}' to launch instance using ${launchTemplateNames[i]} FAILED.`);
      console.error(error);
    }
  }
  if (launched == false) {
    throw Error('All launch templates failed');
  }
}
