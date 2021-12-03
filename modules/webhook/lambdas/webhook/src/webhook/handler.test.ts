import { handle } from './handler';
import { mocked } from 'ts-jest/utils';
import { Webhooks } from '@octokit/webhooks';
import { getParameterValue } from '../ssm';
import { sendActionRequest } from '../sqs';
import workflowjob_event from '../../test/resources/github_workflowjob_event.json';
import checkrun_event from '../../test/resources/github_check_run_event.json';
import nock from 'nock';

jest.mock('../sqs');
jest.mock('../ssm');

const GITHUB_APP_WEBHOOK_SECRET = 'TEST_SECRET';

const secret = 'TEST_SECRET';
const webhooks = new Webhooks({
  secret: secret,
});

describe('handler', () => {
  let originalError: Console['error'];

  beforeEach(() => {
    nock.disableNetConnect();
    process.env.REPOSITORY_WHITE_LIST = '[]';
    originalError = console.error;
    console.error = jest.fn();
    jest.clearAllMocks();
    jest.resetAllMocks();

    const mockedGet = mocked(getParameterValue);
    mockedGet.mockResolvedValueOnce(GITHUB_APP_WEBHOOK_SECRET);
  });

  afterEach(() => {
    console.error = originalError;
  });

  it('returns 500 if no signature available', async () => {
    const resp = await handle({}, '');
    expect(resp.statusCode).toBe(500);
  });

  it('returns 401 if signature is invalid', async () => {
    const resp = await handle({ 'X-Hub-Signature': 'bbb' }, 'aaaa');
    expect(resp.statusCode).toBe(401);
  });

  describe('Test for workflowjob event: ', () => {
    beforeEach(() => {
      process.env.DISABLE_CHECK_WORKFLOW_JOB_LABELS = 'false';
    });
    it('handles workflow job events', async () => {
      const event = JSON.stringify(workflowjob_event);
      const resp = await handle(
        { 'X-Hub-Signature': await webhooks.sign(event), 'X-GitHub-Event': 'workflow_job' },
        event,
      );
      expect(resp.statusCode).toBe(201);
      expect(sendActionRequest).toBeCalled();
    });

    it('does not handle other events', async () => {
      const event = JSON.stringify(workflowjob_event);
      const resp = await handle({ 'X-Hub-Signature': await webhooks.sign(event), 'X-GitHub-Event': 'push' }, event);
      expect(resp.statusCode).toBe(202);
      expect(sendActionRequest).not.toBeCalled();
    });

    it('does not handle workflow_job events with actions other than queued (action = started)', async () => {
      const event = JSON.stringify({ ...workflowjob_event, action: 'started' });
      const resp = await handle(
        { 'X-Hub-Signature': await webhooks.sign(event), 'X-GitHub-Event': 'workflow_job' },
        event,
      );
      expect(resp.statusCode).toBe(201);
      expect(sendActionRequest).not.toBeCalled();
    });

    it('does not handle workflow_job events with actions other than queued (action = completed)', async () => {
      const event = JSON.stringify({ ...workflowjob_event, action: 'completed' });
      const resp = await handle(
        { 'X-Hub-Signature': await webhooks.sign(event), 'X-GitHub-Event': 'workflow_job' },
        event,
      );
      expect(resp.statusCode).toBe(201);
      expect(sendActionRequest).not.toBeCalled();
    });

    it('does not handle workflow_job events from unlisted repositories', async () => {
      const event = JSON.stringify(workflowjob_event);
      process.env.REPOSITORY_WHITE_LIST = '["NotCodertocat/Hello-World"]';
      const resp = await handle(
        { 'X-Hub-Signature': await webhooks.sign(event), 'X-GitHub-Event': 'workflow_job' },
        event,
      );
      expect(resp.statusCode).toBe(403);
      expect(sendActionRequest).not.toBeCalled();
    });

    it('handles workflow_job events from whitelisted repositories', async () => {
      const event = JSON.stringify(workflowjob_event);
      process.env.REPOSITORY_WHITE_LIST = '["philips-labs/terraform-aws-github-runner"]';
      const resp = await handle(
        { 'X-Hub-Signature': await webhooks.sign(event), 'X-GitHub-Event': 'workflow_job' },
        event,
      );
      expect(resp.statusCode).toBe(201);
      expect(sendActionRequest).toBeCalled();
    });

    it('Check runner labels (test)', async () => {
      process.env.RUNNER_LABELS = '["test"]';
      const event = JSON.stringify({
        ...workflowjob_event,
        workflow_job: {
          ...workflowjob_event.workflow_job,
          labels: ['self-hosted', 'test'],
        },
      });
      const resp = await handle(
        { 'X-Hub-Signature': await webhooks.sign(event), 'X-GitHub-Event': 'workflow_job' },
        event,
      );
      expect(resp.statusCode).toBe(201);
      expect(sendActionRequest).toBeCalled();
    });

    it('Check runner labels (test)', async () => {
      process.env.RUNNER_LABELS = '["test"]';
      const event = JSON.stringify({
        ...workflowjob_event,
        workflow_job: {
          ...workflowjob_event.workflow_job,
          labels: ['self-hosted', 'test'],
        },
      });
      const resp = await handle(
        { 'X-Hub-Signature': await webhooks.sign(event), 'X-GitHub-Event': 'workflow_job' },
        event,
      );
      expect(resp.statusCode).toBe(201);
      expect(sendActionRequest).toBeCalled();
    });

    it('Check runner a self hosted runner will run a job marked with only self-hosted', async () => {
      process.env.RUNNER_LABELS = '["test", "test2"]';
      const event = JSON.stringify({
        ...workflowjob_event,
        workflow_job: {
          ...workflowjob_event.workflow_job,
          labels: ['self-hosted'],
        },
      });
      const resp = await handle(
        { 'X-Hub-Signature': await webhooks.sign(event), 'X-GitHub-Event': 'workflow_job' },
        event,
      );
      expect(resp.statusCode).toBe(201);
      expect(sendActionRequest).toBeCalled();
    });

    it('Check runner labels for a strict job (2 labels should match)', async () => {
      process.env.RUNNER_LABELS = '["test", "test2"]';
      const event = JSON.stringify({
        ...workflowjob_event,
        workflow_job: {
          ...workflowjob_event.workflow_job,
          labels: ['self-hosted', 'linux', 'test', 'test2'],
        },
      });
      const resp = await handle(
        { 'X-Hub-Signature': await webhooks.sign(event), 'X-GitHub-Event': 'workflow_job' },
        event,
      );
      expect(resp.statusCode).toBe(201);
      expect(sendActionRequest).toBeCalled();
    });

    it('Check event is accepted for disabled workflow check', async () => {
      process.env.DISABLE_CHECK_WORKFLOW_JOB_LABELS = 'true';
      process.env.RUNNER_LABELS = '["test", "no-check"]';
      const event = JSON.stringify({
        ...workflowjob_event,
        workflow_job: {
          ...workflowjob_event.workflow_job,
          labels: ['self-hosted', 'linux', 'test', 'test2'],
        },
      });
      const resp = await handle(
        { 'X-Hub-Signature': await webhooks.sign(event), 'X-GitHub-Event': 'workflow_job' },
        event,
      );
      expect(resp.statusCode).toBe(201);
      expect(sendActionRequest).toBeCalled();
    });
    it('Check not allowed runner label is declined', async () => {
      process.env.RUNNER_LABELS = '["test"]';
      const event = JSON.stringify({
        ...workflowjob_event,
        workflow_job: {
          ...workflowjob_event.workflow_job,
          labels: ['self-hosted', 'linux', 'not_allowed'],
        },
      });
      const resp = await handle(
        { 'X-Hub-Signature': await webhooks.sign(event), 'X-GitHub-Event': 'workflow_job' },
        event,
      );
      expect(resp.statusCode).toBe(202);
      expect(sendActionRequest).not.toBeCalled();
    });
  });

  describe('Test for check_run event (legacy): ', () => {
    it('handles check_run events', async () => {
      const event = JSON.stringify(checkrun_event);
      const resp = await handle(
        { 'X-Hub-Signature': await webhooks.sign(event), 'X-GitHub-Event': 'check_run' },
        event,
      );
      expect(resp.statusCode).toBe(201);
      expect(sendActionRequest).toBeCalled();
    });

    it('does not handle check_run events with actions other than queued (action = started)', async () => {
      const event = JSON.stringify({ ...checkrun_event, action: 'started' });
      const resp = await handle(
        { 'X-Hub-Signature': await webhooks.sign(event), 'X-GitHub-Event': 'check_run' },
        event,
      );
      expect(resp.statusCode).toBe(201);
      expect(sendActionRequest).not.toBeCalled();
    });

    it('does not handle check_run events with actions other than queued (action = completed)', async () => {
      const event = JSON.stringify({ ...checkrun_event, action: 'completed' });
      const resp = await handle(
        { 'X-Hub-Signature': await webhooks.sign(event), 'X-GitHub-Event': 'check_run' },
        event,
      );
      expect(resp.statusCode).toBe(201);
      expect(sendActionRequest).not.toBeCalled();
    });

    it('does not handle check_run events from unlisted repositories', async () => {
      const event = JSON.stringify(checkrun_event);
      process.env.REPOSITORY_WHITE_LIST = '["NotCodertocat/Hello-World"]';
      const resp = await handle(
        { 'X-Hub-Signature': await webhooks.sign(event), 'X-GitHub-Event': 'check_run' },
        event,
      );
      expect(resp.statusCode).toBe(403);
      expect(sendActionRequest).not.toBeCalled();
    });

    it('handles check_run events from whitelisted repositories', async () => {
      const event = JSON.stringify(checkrun_event);
      process.env.REPOSITORY_WHITE_LIST = '["Codertocat/Hello-World"]';
      const resp = await handle(
        { 'X-Hub-Signature': await webhooks.sign(event), 'X-GitHub-Event': 'check_run' },
        event,
      );
      expect(resp.statusCode).toBe(201);
      expect(sendActionRequest).toBeCalled();
    });
  });
});
