terraform {
  required_version = ">= 1.0.11"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.41"
    }
    random = {
      source  = "hashicorp/random"
      version = "~> 3.0"
    }
  }
}
