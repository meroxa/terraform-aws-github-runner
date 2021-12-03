cd /home/$USER_NAME
mkdir actions-runner && cd actions-runner

TOKEN=$(curl -f -X PUT "http://169.254.169.254/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 180")
REGION=$(curl -f -H "X-aws-ec2-metadata-token: $TOKEN" -v http://169.254.169.254/latest/dynamic/instance-identity/document | jq -r .region)

aws s3 cp ${s3_location_runner_distribution} actions-runner.tar.gz --region $REGION
tar xzf ./actions-runner.tar.gz
rm -rf actions-runner.tar.gz

${arm_patch}

INSTANCE_ID=$(curl -f -H "X-aws-ec2-metadata-token: $TOKEN" -v http://169.254.169.254/latest/meta-data/instance-id)

echo wait for configuration
while [[ $(aws ssm get-parameters --names ${environment}-$INSTANCE_ID --with-decryption --region $REGION | jq -r ".Parameters | .[0] | .Value") == null ]]; do
    echo Waiting for configuration ...
    sleep 1
done
CONFIG=$(aws ssm get-parameters --names ${environment}-$INSTANCE_ID --with-decryption --region $REGION | jq -r ".Parameters | .[0] | .Value")
aws ssm delete-parameter --name ${environment}-$INSTANCE_ID --region $REGION

export RUNNER_ALLOW_RUNASROOT=1
os_id=$(awk -F= '/^ID/{print $2}' /etc/os-release)
if [[ "$os_id" =~ ^ubuntu.* ]]; then
    ./bin/installdependencies.sh
fi

./config.sh --ephemeral --unattended --name $INSTANCE_ID --work "_work" $CONFIG

chown -R $USER_NAME:$USER_NAME .
OVERWRITE_SERVICE_USER=${run_as_root_user}
SERVICE_USER=$${OVERWRITE_SERVICE_USER:-$USER_NAME}

./svc.sh install $SERVICE_USER
