# Changelog

## [0.26.0](https://github.com/philips-labs/terraform-aws-github-runner/compare/v0.25.2...v0.26.0) (2021-12-03)


### Features

* Add hooks for prebuilt images (AMI), including amazon linux packer example ([#1444](https://github.com/philips-labs/terraform-aws-github-runner/issues/1444)) ([060daac](https://github.com/philips-labs/terraform-aws-github-runner/commit/060daac3568cd36f8b203d3f77f736df7aefb223))


### Bug Fixes

* add runners binaries bucket as terraform output ([5809fee](https://github.com/philips-labs/terraform-aws-github-runner/commit/5809fee194bcf7a8a1291efbb63df441b31779bb))

### [0.25.2](https://github.com/philips-labs/terraform-aws-github-runner/compare/v0.25.1...v0.25.2) (2021-12-01)


### Bug Fixes

* add logging context to runner lambda ([#1399](https://github.com/philips-labs/terraform-aws-github-runner/issues/1399)) ([0ba0930](https://github.com/philips-labs/terraform-aws-github-runner/commit/0ba09303072e58f12abd93ddd1599573d7ffafb0))
* **logging:** Add context to webhook logs ([#1401](https://github.com/philips-labs/terraform-aws-github-runner/issues/1401)) ([8094576](https://github.com/philips-labs/terraform-aws-github-runner/commit/80945761f997498d5f6ff2755db4eb506e7d5890))

### [0.25.1](https://github.com/philips-labs/terraform-aws-github-runner/compare/v0.25.0...v0.25.1) (2021-11-18)


### Bug Fixes

* Add required providers to module ssm ([#1423](https://github.com/philips-labs/terraform-aws-github-runner/issues/1423)) ([5b68b7b](https://github.com/philips-labs/terraform-aws-github-runner/commit/5b68b7b8bfc5308353e6ff69e129b356779d0be5))

## [0.25.0](https://github.com/philips-labs/terraform-aws-github-runner/compare/v0.24.0...v0.25.0) (2021-11-18)


### Features

* Add option to configure concurrent running scale up lambda ([#1415](https://github.com/philips-labs/terraform-aws-github-runner/issues/1415)) ([23ee630](https://github.com/philips-labs/terraform-aws-github-runner/commit/23ee6303d58640cb02fe7d71e71fc7960e30f48a))


### Bug Fixes

* clean up non used variables in examples ([#1416](https://github.com/philips-labs/terraform-aws-github-runner/issues/1416)) ([fe65a5f](https://github.com/philips-labs/terraform-aws-github-runner/commit/fe65a5f05184b6b5534c3b0b5fee3cdfbce7be78))

## [0.24.0](https://github.com/philips-labs/terraform-aws-github-runner/compare/v0.23.1...v0.24.0) (2021-11-09)


### Features

* support single line for app private key ([#1368](https://github.com/philips-labs/terraform-aws-github-runner/issues/1368)) ([14183ac](https://github.com/philips-labs/terraform-aws-github-runner/commit/14183aca4fe097350de165030e227d8dd0cb6630))


### Bug Fixes

* update return codes, no error code for job that are ignored ([#1381](https://github.com/philips-labs/terraform-aws-github-runner/issues/1381)) ([f9f705f](https://github.com/philips-labs/terraform-aws-github-runner/commit/f9f705f4a736be8d50727970e216830780142d27))

### [0.23.1](https://github.com/philips-labs/terraform-aws-github-runner/compare/v0.23.0...v0.23.1) (2021-11-04)


### Bug Fixes

* configurable metadata options for runners ([#1377](https://github.com/philips-labs/terraform-aws-github-runner/issues/1377)) ([f37df23](https://github.com/philips-labs/terraform-aws-github-runner/commit/f37df239a991b0d5ad6a2972ef3c9759b03b9f6f))

## [0.23.0](https://github.com/philips-labs/terraform-aws-github-runner/compare/v0.22.0...v0.23.0) (2021-11-04)


### Features

* add option to format logging in JSON for lambdas ([#1228](https://github.com/philips-labs/terraform-aws-github-runner/issues/1228)) ([a250b96](https://github.com/philips-labs/terraform-aws-github-runner/commit/a250b96b58c91e35ad64e3cbd8c00c3aa4475900))
* add option to specify SSE config for dist bucket ([#1324](https://github.com/philips-labs/terraform-aws-github-runner/issues/1324)) ([ae84302](https://github.com/philips-labs/terraform-aws-github-runner/commit/ae84302b284f9a076418b27426330913cf909822))


### Bug Fixes

* reducing verbosity of role and profile ([#1358](https://github.com/philips-labs/terraform-aws-github-runner/issues/1358)) ([922ef99](https://github.com/philips-labs/terraform-aws-github-runner/commit/922ef99be52f8d780ec711f33e1f6c447dbedffd))

## [0.22.0](https://github.com/philips-labs/terraform-aws-github-runner/compare/v0.21.1...v0.22.0) (2021-11-01)


### Features

* adding message retention seconds ([#1354](https://github.com/philips-labs/terraform-aws-github-runner/issues/1354)) ([a19929f](https://github.com/philips-labs/terraform-aws-github-runner/commit/a19929f8467c448dfb893b5aa4565c6e53a5ef2f))
* adding var for tags for ec2s ([#1357](https://github.com/philips-labs/terraform-aws-github-runner/issues/1357)) ([31cf02d](https://github.com/philips-labs/terraform-aws-github-runner/commit/31cf02d831114e687ff3f614c768b9374f49045c))


### Bug Fixes

* add validation to distribution_bucket_name variable ([#1356](https://github.com/philips-labs/terraform-aws-github-runner/issues/1356)) ([6522317](https://github.com/philips-labs/terraform-aws-github-runner/commit/6522317c5097ee49aee3c1c8926f72c6bd054e51))

### [0.21.1](https://github.com/philips-labs/terraform-aws-github-runner/compare/v0.21.0...v0.21.1) (2021-10-21)


### Bug Fixes

* **logging:** Adjusting scale logging messages and levels ([#1286](https://github.com/philips-labs/terraform-aws-github-runner/issues/1286)) ([665e1a6](https://github.com/philips-labs/terraform-aws-github-runner/commit/665e1a6aa30610584b863c99bb5dc4509c0f11df))
* **logging:** Adjusting webhook logs and levels ([#1287](https://github.com/philips-labs/terraform-aws-github-runner/issues/1287)) ([9df5fb8](https://github.com/philips-labs/terraform-aws-github-runner/commit/9df5fb88fee5b8a9428afe90ce13a0680d50471f))
* Update launch template to use metadata service v2 ([#1278](https://github.com/philips-labs/terraform-aws-github-runner/issues/1278)) ([ef16287](https://github.com/philips-labs/terraform-aws-github-runner/commit/ef1628747ec0305311a32f623dc7de64692eec40))

## [0.21.0](https://github.com/philips-labs/terraform-aws-github-runner/compare/v0.20.1...v0.21.0) (2021-10-11)


### Features

* Ignore github managed labels and add check disable option ([#1244](https://github.com/philips-labs/terraform-aws-github-runner/issues/1244)) ([859fa38](https://github.com/philips-labs/terraform-aws-github-runner/commit/859fa381570ec9ab1de586f7b3ccb6bc51b47b27))
* remove unused app client since SSH key is used to secure app authorization ([#1223](https://github.com/philips-labs/terraform-aws-github-runner/issues/1223)) ([4cb5cf1](https://github.com/philips-labs/terraform-aws-github-runner/commit/4cb5cf17c37fd22b540c93c61a7c15b42d4e42e1))
* upgrade Terraform version of module 1.0.x ([#1254](https://github.com/philips-labs/terraform-aws-github-runner/issues/1254)) ([2a817dc](https://github.com/philips-labs/terraform-aws-github-runner/commit/2a817dcaf96c189ab05e3f629bf3e17a539728d6))

### [0.20.1](https://github.com/philips-labs/terraform-aws-github-runner/compare/v0.20.0...v0.20.1) (2021-10-07)


### Bug Fixes

* Upgrade lambda runtime to node 14.x ([#1203](https://github.com/philips-labs/terraform-aws-github-runner/issues/1203)) ([570949a](https://github.com/philips-labs/terraform-aws-github-runner/commit/570949a55a1b2f702e1d58c74533ddc86174ef8d))
* **webhook:** remove node fetch ([ca14ac5](https://github.com/philips-labs/terraform-aws-github-runner/commit/ca14ac51b4f824b76fa50ac4608e935702fde628))
* **webhook:** replace node-fetch by axios [#1247](https://github.com/philips-labs/terraform-aws-github-runner/issues/1247) ([80fff4b](https://github.com/philips-labs/terraform-aws-github-runner/commit/80fff4b8e2902d0347acc53d56843da507c60330))
* added more detailed logging for scaling up and down ([#1222](https://github.com/philips-labs/terraform-aws-github-runner/issues/1222)) ([9aa7456](https://github.com/philips-labs/terraform-aws-github-runner/commit/9aa7456bb16bc3e75e71eb67cd098cd49b305094))

## [0.20.0](https://github.com/philips-labs/terraform-aws-github-runner/compare/v0.19.1...v0.20.0) (2021-10-01)


### Features

* Add option to disable SSL verification support for GitHub Enterprise Server ([#1216](https://github.com/philips-labs/terraform-aws-github-runner/issues/1216)) ([3c3ef19](https://github.com/philips-labs/terraform-aws-github-runner/commit/3c3ef19b176811d96f3fa821aadb10576847fb72)), closes [#1207](https://github.com/philips-labs/terraform-aws-github-runner/issues/1207)

### [0.19.1](https://github.com/philips-labs/terraform-aws-github-runner/compare/v0.19.0...v0.19.1) (2021-09-30)


### Bug Fixes

* `instance_types` from a Set to a List, so instance order preference is preserved ([#1154](https://github.com/philips-labs/terraform-aws-github-runner/issues/1154)) ([150d227](https://github.com/philips-labs/terraform-aws-github-runner/commit/150d227c99d517366b9304663a6fdc55b0bb8475))

## [0.19.0](https://github.com/philips-labs/terraform-aws-github-runner/compare/v0.18.1...v0.19.0) (2021-09-30)


### Features

* **scale-down:** Update Owner Logic ([#1065](https://github.com/philips-labs/terraform-aws-github-runner/issues/1065)) ([ba2536b](https://github.com/philips-labs/terraform-aws-github-runner/commit/ba2536bbf7bc7a98180b25d8703ef6edc25bc2b7)), closes [#2](https://github.com/philips-labs/terraform-aws-github-runner/issues/2)


### Bug Fixes

* explicit set region for downloading runner distribution from S3 ([#1204](https://github.com/philips-labs/terraform-aws-github-runner/issues/1204)) ([439fb1b](https://github.com/philips-labs/terraform-aws-github-runner/commit/439fb1bb5b0b7b024476b41ac57436af1aa30dae))
* upgrade jest  ([#1219](https://github.com/philips-labs/terraform-aws-github-runner/issues/1219)) ([c8b8139](https://github.com/philips-labs/terraform-aws-github-runner/commit/c8b813948c973fd9157ae19f7ed3a04781d2211a))
* use dynamic block to ignore null market opts ([#1202](https://github.com/philips-labs/terraform-aws-github-runner/issues/1202)) ([df9bd78](https://github.com/philips-labs/terraform-aws-github-runner/commit/df9bd785619c9ce8ca2eef1d9b9631271eaa9763))
* use dynamic block to ignore null market opts ([#1202](https://github.com/philips-labs/terraform-aws-github-runner/issues/1202)) ([06a5598](https://github.com/philips-labs/terraform-aws-github-runner/commit/06a5598210e98f036593f97f74488aae1cf179da))
* **logging:** Additional Logging ([#1135](https://github.com/philips-labs/terraform-aws-github-runner/issues/1135)) ([f7f194d](https://github.com/philips-labs/terraform-aws-github-runner/commit/f7f194d00090013ec28215f1939ddff5823be7ff))
* **scale-down:** Clearing cache between runs ([#1164](https://github.com/philips-labs/terraform-aws-github-runner/issues/1164)) ([e72227b](https://github.com/philips-labs/terraform-aws-github-runner/commit/e72227bd8c5d76f14c42119e17eae5762c247f85))

### [0.18.1](https://github.com/philips-labs/terraform-aws-github-runner/compare/v0.18.0...v0.18.1) (2021-08-26)


### Bug Fixes

* webhook labels for `workflow_job` ([#1133](https://github.com/philips-labs/terraform-aws-github-runner/issues/1133)) ([4b39fb9](https://github.com/philips-labs/terraform-aws-github-runner/commit/4b39fb9db523ad7b7ec47adf6c698323d17faed3))

## [0.18.0](https://github.com/philips-labs/terraform-aws-github-runner/compare/v0.17.0...v0.18.0) (2021-08-19)


### Features

* add format checking for lambdas in CI ([#899](https://github.com/philips-labs/terraform-aws-github-runner/issues/899)) ([#1080](https://github.com/philips-labs/terraform-aws-github-runner/issues/1080)) ([ae9c277](https://github.com/philips-labs/terraform-aws-github-runner/commit/ae9c2777ee27c7d984feff12c6d58edd1ef26c74))
* add option to overwrite / disable egress [#748](https://github.com/philips-labs/terraform-aws-github-runner/issues/748) ([#1112](https://github.com/philips-labs/terraform-aws-github-runner/issues/1112)) ([9c2548d](https://github.com/philips-labs/terraform-aws-github-runner/commit/9c2548d3380252efbb402fe15dcacf28f883a56d))


### Bug Fixes

* replace depcrated 'request' dependency by 'node-fetch' ([#903](https://github.com/philips-labs/terraform-aws-github-runner/issues/903)) ([#1082](https://github.com/philips-labs/terraform-aws-github-runner/issues/1082)) ([fb51756](https://github.com/philips-labs/terraform-aws-github-runner/commit/fb51756730ac902ff0148b362464922aea9f6d6d))

## [0.17.0](https://github.com/philips-labs/terraform-aws-github-runner/compare/v0.16.0...v0.17.0) (2021-08-06)


### Features

* Adding support for new workflow_job event. ([#1019](https://github.com/philips-labs/terraform-aws-github-runner/issues/1019)) ([a74e10b](https://github.com/philips-labs/terraform-aws-github-runner/commit/a74e10b625413e948703f5d3a6f61b9a98c31b66))

## [0.16.0](https://github.com/philips-labs/terraform-aws-github-runner/compare/v0.15.1...v0.16.0) (2021-08-05)


### Features

* make delay of webhook event configurable ([#990](https://github.com/philips-labs/terraform-aws-github-runner/issues/990)) ([92a0d8a](https://github.com/philips-labs/terraform-aws-github-runner/commit/92a0d8a94b145c3e2fdcfa120907c17228583d93))
* Store lambda secrets paramaters in Paramater Store ([#941](https://github.com/philips-labs/terraform-aws-github-runner/issues/941)) ([c6badbf](https://github.com/philips-labs/terraform-aws-github-runner/commit/c6badbf9e1cf6bbcdd6a9841b1f342ef5fbd1ed3)), closes [#871](https://github.com/philips-labs/terraform-aws-github-runner/issues/871) [#898](https://github.com/philips-labs/terraform-aws-github-runner/issues/898) [#738](https://github.com/philips-labs/terraform-aws-github-runner/issues/738) [#902](https://github.com/philips-labs/terraform-aws-github-runner/issues/902) [#738](https://github.com/philips-labs/terraform-aws-github-runner/issues/738) [#905](https://github.com/philips-labs/terraform-aws-github-runner/issues/905) [#906](https://github.com/philips-labs/terraform-aws-github-runner/issues/906) [#904](https://github.com/philips-labs/terraform-aws-github-runner/issues/904) [#1](https://github.com/philips-labs/terraform-aws-github-runner/issues/1) [#752](https://github.com/philips-labs/terraform-aws-github-runner/issues/752) [#909](https://github.com/philips-labs/terraform-aws-github-runner/issues/909) [#752](https://github.com/philips-labs/terraform-aws-github-runner/issues/752) [#908](https://github.com/philips-labs/terraform-aws-github-runner/issues/908) [#752](https://github.com/philips-labs/terraform-aws-github-runner/issues/752) [#887](https://github.com/philips-labs/terraform-aws-github-runner/issues/887) [#752](https://github.com/philips-labs/terraform-aws-github-runner/issues/752) [#885](https://github.com/philips-labs/terraform-aws-github-runner/issues/885) [#752](https://github.com/philips-labs/terraform-aws-github-runner/issues/752) [#889](https://github.com/philips-labs/terraform-aws-github-runner/issues/889) [#752](https://github.com/philips-labs/terraform-aws-github-runner/issues/752) [#892](https://github.com/philips-labs/terraform-aws-github-runner/issues/892) [#752](https://github.com/philips-labs/terraform-aws-github-runner/issues/752) [#907](https://github.com/philips-labs/terraform-aws-github-runner/issues/907) [#752](https://github.com/philips-labs/terraform-aws-github-runner/issues/752) [#864](https://github.com/philips-labs/terraform-aws-github-runner/issues/864) [#918](https://github.com/philips-labs/terraform-aws-github-runner/issues/918)


### Bug Fixes

* change module exports and upgrade vercel to latest release ([#1005](https://github.com/philips-labs/terraform-aws-github-runner/issues/1005)) ([f8f8981](https://github.com/philips-labs/terraform-aws-github-runner/commit/f8f8981332929619402aad161ce2a1feb61842ce))
* reduce permission required for session manager ([#1018](https://github.com/philips-labs/terraform-aws-github-runner/issues/1018)) ([09476eb](https://github.com/philips-labs/terraform-aws-github-runner/commit/09476eb609699d8b5eb4e1e438e13c5bfa234084))

### [0.15.1](https://github.com/philips-labs/terraform-aws-github-runner/compare/v0.15.0...v0.15.1) (2021-07-13)


### Bug Fixes

* apply patch for broken scale up lambda [#980](https://github.com/philips-labs/terraform-aws-github-runner/issues/980) ([b957e26](https://github.com/philips-labs/terraform-aws-github-runner/commit/b957e263b6dbc3d299eab3236b479b9113b1fecb))

## [0.15.0](https://github.com/philips-labs/terraform-aws-github-runner/compare/v0.14.0...v0.15.0) (2021-07-07)


### Features

* Added support for white listing of repositories ([#915](https://github.com/philips-labs/terraform-aws-github-runner/issues/915)) ([b1f451a](https://github.com/philips-labs/terraform-aws-github-runner/commit/b1f451a0bddf8606b443c5150e939e7628645ccf))

## [0.14.0](https://github.com/philips-labs/terraform-aws-github-runner/compare/v0.13.1...v0.14.0) (2021-06-17)


### Features

* support multiple instance types ([#898](https://github.com/philips-labs/terraform-aws-github-runner/issues/898)) ([c996f73](https://github.com/philips-labs/terraform-aws-github-runner/commit/c996f731efbfd4c3bdda4195fba48e346812e108))


### Bug Fixes

* scale down runners ([#905](https://github.com/philips-labs/terraform-aws-github-runner/issues/905)) ([f024cda](https://github.com/philips-labs/terraform-aws-github-runner/commit/f024cda9b08fb3ab39d2cca0cafe61512af38f0d))
* **scale:** Refactor Runner Type and Owner ([#871](https://github.com/philips-labs/terraform-aws-github-runner/issues/871)) ([83dd263](https://github.com/philips-labs/terraform-aws-github-runner/commit/83dd263c3b01566fd7f980ffde34e0fd2dc25e81))

### [0.13.1](https://github.com/philips-labs/terraform-aws-github-runner/compare/v0.13.0...v0.13.1) (2021-06-01)


### Bug Fixes

* .gitignore for 'secrets.auto.tfvars' ([38d7df0](https://github.com/philips-labs/terraform-aws-github-runner/commit/38d7df0f86581ea3a1f64b2673707cd0427eb8e3))
* Add some essential dependecies on ubuntu example ([0079d16](https://github.com/philips-labs/terraform-aws-github-runner/commit/0079d16b809fbb7391353e97bce429e295973dd5))
* fail to download wrong tag of lambda ([#840](https://github.com/philips-labs/terraform-aws-github-runner/issues/840)) ([1112ca8](https://github.com/philips-labs/terraform-aws-github-runner/commit/1112ca8bb2da87cfe93fea17a8070fac8bd3598b))
* increase runner sync lambda memory setting and upgrade npm dependencies ([#844](https://github.com/philips-labs/terraform-aws-github-runner/issues/844)) ([b9e36e9](https://github.com/philips-labs/terraform-aws-github-runner/commit/b9e36e9393c932b71817adefba411e420ba3aa65))
* revert dependency updates on runner module ([#784](https://github.com/philips-labs/terraform-aws-github-runner/issues/784)) ([76cdbe3](https://github.com/philips-labs/terraform-aws-github-runner/commit/76cdbe3605269ca64e532b1f850de727ad85658f))
* ubuntu example runner_log_files variable ([5b3fc5b](https://github.com/philips-labs/terraform-aws-github-runner/commit/5b3fc5b59242224ef3662c0bbf61f3346d880c5e))
* ubuntu example to log syslog instead of messages ([#785](https://github.com/philips-labs/terraform-aws-github-runner/issues/785)) ([fb3e5d2](https://github.com/philips-labs/terraform-aws-github-runner/commit/fb3e5d28a018e55bb0cef1697173c8aa70bf8a42))
* Update ubuntu example with assume_role comment ([2478daf](https://github.com/philips-labs/terraform-aws-github-runner/commit/2478daf7efb41da343a157b4001801704d25a648))
* upgrade runner module to support upgrade octokit auth-app ([#786](https://github.com/philips-labs/terraform-aws-github-runner/issues/786)) ([e110318](https://github.com/philips-labs/terraform-aws-github-runner/commit/e110318d5c06d073f6af0d410c06d6d48eed0724))
* **docs:** fix variable name create_service_linked_role_spot in readme ([#750](https://github.com/philips-labs/terraform-aws-github-runner/issues/750)) ([42b0427](https://github.com/philips-labs/terraform-aws-github-runner/commit/42b0427dd0bc25251a160033a3f1d78f6f386d5d)), closes [#736](https://github.com/philips-labs/terraform-aws-github-runner/issues/736)

## [0.13.0](https://github.com/philips-labs/terraform-aws-github-runner/compare/v0.12.0...v0.13.0) (2021-03-28)


### Features

* Allow setting the market_options runners module to disable spot instances ([#657](https://github.com/philips-labs/terraform-aws-github-runner/issues/657)) ([7487643](https://github.com/philips-labs/terraform-aws-github-runner/commit/74876432f6d59325567d470c5637e2b99abefea8))

## [0.12.0](https://github.com/philips-labs/terraform-aws-github-runner/compare/v0.11.0...v0.12.0) (2021-03-09)


### Features

* **syncer:** account access control for distribution cache bucket ([#585](https://github.com/philips-labs/terraform-aws-github-runner/issues/585)) ([05c1c11](https://github.com/philips-labs/terraform-aws-github-runner/commit/05c1c11a6797a650814cea29871f5b5e40d6245a))


### Bug Fixes

* Pass runner_group_name to runner module ([#603](https://github.com/philips-labs/terraform-aws-github-runner/issues/603)) ([54070b3](https://github.com/philips-labs/terraform-aws-github-runner/commit/54070b3feec2602c9017112c98f0a669ea5f06cd))

## [0.11.0] - 2021-03-01

### Added

- feat: Tag Volume Resources (#570)
- feat: Retrieve installation id automatically if not present (triggered by ordinary webhook) (#515)

### Fixed

- fix(bucket): Adds bucket policy #536
- fix: Upgrade vpc to 2.2.0 and pre-commit terraform hooks (#538)
- fix(lint): Clean up lint (#534)

## [0.10.0] - 2021-01-27

### Added

- Support runner groups (#496)

## [0.9.1] - 2021-01-22

### Fixed

- fix(ghes): Corrects preview option #482 @mcaulifn @samuelb

## [0.9.0] - 2021-01-21

### Added

- Add support for GitHub Enterprise Server (GHES) #412, #481, #467 @mcaulifn @jonico
- Allow configuring additional security groups #392 @surminus

### Changed

- Log groups per type of logging #476
- Copy directory *after* installing zip #444 @masterful
- Update ubuntu example with rootless docker and non privileged user #433
- Changed strategy in scaling. Previous the module scaled by checking for any queued workflow for the repo initiation the check_run event. Now the module scales only if the correlated check_run is still in queued state. #423

### Fixed

- Fix missing permissions for CloudWatch Agent #445 @bennettp123
- Swap scale up/scale down timeout description #468 @jonico
- Fix for invalid configuration #466 @jonico
- Add ssm:GetParameter to runner-ssm-parameters #446 @bennettp123  
- Replace crypto #429
- Scale up lambda deprecated attribute #410

### Migrations

Changes related to logging groups introduced via #476 will destroy existing logging group in AWS cloudwatch for runners log. In case you would like to keep the logging ensure you remove the log group from the state before running an apply

```bash
export RESOURCE=$(terraform state list | grep "aws_cloudwatch_log_group.runner")
terraform state rm $RESOURCE
```

## [0.8.1] - 2020-12-08

### Changed

- Policy is missing for streaming logs to cloudwatch #388

## [0.8.0] - 2020-12-08

### Changed

- Examples upgraded to Terraform 13  (#372)
### Added

- Streaming runner logs to cloudwatch #375

## [0.7.0] - 2020-12-04

### Changed

- Small clarifications in the README #368 @lrytz

### Added

- Allow operator to pass in a list of managed IAM policy ARNs for the runner role #361 @jpalomaki
- expand options for sourcing lambda to include S3 #292 @eky5006 

## [0.6.0] - 2020-10-10

### Added

- Only allow tagging and termination of runner instances #201 @jpalomaki 

### Fixed

- Fix pagination with listing self-hosted runners #202 @HenryNguyen5 


## [0.5.0] - 2020-08-25

### Added

- feat: Manage log groups via module. When upgrading you have to import the log groups by AWS into your state. See below the example commands for the default example.

```bash
terraform import module.runners.module.runner_binaries.aws_cloudwatch_log_group.syncer "/aws/lambda/default-syncer"
terraform import module.runners.module.runners.aws_cloudwatch_log_group.scale_up "/aws/lambda/default-scale-up"
terraform import module.runners.module.runners.aws_cloudwatch_log_group.scale_down "/aws/lambda/default-scale-down"
terraform import module.runners.module.webhook.aws_cloudwatch_log_group.webhook "/aws/lambda/default-webhook"
```
- feat: Expose ami-filters and user-data template file location to users to allow use of custom AMIs

- feat: Added option to binaries syncer to upgrade to pre-releases, preventing any auto-updating on startup. Option `runner_allow_prerelease_binaries` is disabled by default. (#141, #165) @sjagoe

- feat: SSM policies are by default disabled, set `enable_ssm_on_runners` to `true` to enable access to the runner instances via SSM. (#143) @HenryNguyen5

- feat: Log full sqs event (#147) @HenryNguyen5

## [0.4.0] - 2020-08-10

### Added

- feat: idle runners #113

## [0.3.0] - 2020-08-06

### Added

- feat: Add support for ARM64 runners #102 @bdruth
- feat: added variables in the root module to allow passing in pre and and post install #45 @jaydenrasmussen

### Updated

- fix: Build script not entering all the module directories (#103) @alonsohki
- fix: Remove Orphan AWS runners (#79)
- fix: documentation for downloading lambdas (#78) @@bendavies
- fix: Rename variable and fix variables descriptions (#75) @bendavies @leoblanc

## [0.2.0] - 2020-06-15

### Added

- #34 encrypt secrets via KMS (#37)

## [0.1.0] - 2020-05-25

### Added

- #30 - Add parameter to terraform to set max number of runners (#31)

### Updated

- #17 - adding tests for syncer (#33)
- #20 #21 - Improve docs, add readme, add hook generate terraform docs

## [0.0.1] - 2020-05-19

### Added

- First release.

[unreleased]: https://github.com/philips-labs/terraform-aws-github-runner/compare/v0.11.0..HEAD
[0.11.0]: https://github.com/philips-labs/terraform-aws-github-runner/releases/tag/v0.10.0..v00.11.0
[0.10.0]: https://github.com/philips-labs/terraform-aws-github-runner/releases/tag/v0.9.1..v00.10.0
[0.9.1]: https://github.com/philips-labs/terraform-aws-github-runner/releases/tag/v0.9.0..v0.9.1
[0.9.0]: https://github.com/philips-labs/terraform-aws-github-runner/releases/tag/v0.8.1..v0.9.0
[0.8.1]: https://github.com/philips-labs/terraform-aws-github-runner/releases/tag/v0.9.0..v0.8.1
[0.8.0]: https://github.com/philips-labs/terraform-aws-github-runner/releases/tag/v0.7.0..v0.9.0
[0.7.0]: https://github.com/philips-labs/terraform-aws-github-runner/releases/tag/v0.6.0..v0.7.0
[0.6.0]: https://github.com/philips-labs/terraform-aws-github-runner/releases/tag/v0.5.0..v0.6.0
[0.5.0]: https://github.com/philips-labs/terraform-aws-github-runner/releases/tag/v0.4.0..v0.5.0
[0.4.0]: https://github.com/philips-labs/terraform-aws-github-runner/releases/tag/v0.3.0..v0.4.0
[0.3.0]: https://github.com/philips-labs/terraform-aws-github-runner/releases/tag/v0.2.0..v0.3.0
[0.2.0]: https://github.com/philips-labs/terraform-aws-github-runner/releases/tag/v0.1.0..v0.2.0
[0.1.0]: https://github.com/philips-labs/terraform-aws-github-runner/releases/tag/v0.0.1..v0.1.0
[0.0.1]: https://github.com/philips-labs/terraform-aws-github-runner/releases/tag/v0.0.1
