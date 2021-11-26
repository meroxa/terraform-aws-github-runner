#!/bin/bash -e
exec > >(tee /var/log/user-data.log | logger -t user-data -s 2>/dev/console) 2>&1

${pre_install}

yum update -y
yum install -y curl jq git

%{ if enable_cloudwatch_agent ~}
yum install amazon-cloudwatch-agent -y
amazon-cloudwatch-agent-ctl -a fetch-config -m ec2 -s -c ssm:${ssm_key_cloudwatch_agent_config}
%{ endif ~}

%{ if enable_meroxa_platform ~}
# install Go
wget -c https://golang.org/dl/go1.17.2.linux-amd64.tar.gz
tar -C /usr/local -xvzf go1.17.2.linux-amd64.tar.gz

# install Docker
amazon-linux-extras install docker
service docker start
usermod -a -G docker ec2-user

# install Minikube
curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 \
  && install minikube-linux-amd64 /usr/local/bin/minikube

# install Helm
wget -c https://get.helm.sh/helm-v3.7.1-linux-amd64.tar.gz \
  && tar -zxvf helm-v3.0.0-linux-amd64.tar.gz \
mv linux-amd64/helm /usr/local/bin/helm

# install Terraform
yum install -y yum-utils
yum-config-manager --add-repo https://rpm.releases.hashicorp.com/AmazonLinux/hashicorp.repo
yum -y install terraform

# install Candy (This is needed for Logan to function end-to-end)
go install github.com/owenthereal/candy/cmd/candy@latest
mkdir -p /usr/lib/systemd/resolved.conf.d
cat<<EOF | sudo tee /usr/lib/systemd/resolved.conf.d/01-candy.conf > /dev/null
[Resolve]
DNS=127.0.0.1:25353
Domains=test
EOF
sudo systemctl restart systemd-resolved # Restart systemd-resolved

# start 2 clusters
%{ endif ~}

## Install docker
#amazon-linux-extras install docker
#service docker start
#usermod -a -G docker ec2-user



USER_NAME=ec2-user
${install_config_runner}

${post_install}

./svc.sh start
