# Technology logo provenance

2026-11-01. Official marks used only to identify technologies in teaching, not endorsements or partnerships. Assets retain original colors/aspect ratio; no tracing or invented logos.

- `nodejs.svg`: https://nodejs.org/static/logos/nodejsHex.svg
- `nginx.svg`: https://nginx.org/img/nginx_logo.svg

Docker official logo kit: https://www.docker.com/static/Docker-Logos-1.zip
Brand guidance: https://www.docker.com/company/newsroom/media-resources/
Node trademark guidance: https://nodejs.org/en/about/branding/

AWS architecture icons official package: https://d1.awsstatic.com/onedam/marketing-channels/website/public/shared/architecture-icon-release/Icon-package_07312026.5846e92413caa21490223536cc97f1269e44fa92.zip
Official use page: https://aws.amazon.com/architecture/icons/

- `react.svg`: unchanged logo geometry extracted from https://react.dev/ official inline SVG; currentColor resolved from official `.text-brand` CSS rgb(8 126 164), #087ea4.
- `docker.svg`: official kit member `docker-logos/SVG/docker-mark-ocean-blue.svg`, Ocean Blue symbol.
- `aws.svg`: official package member `Architecture-Group-Icons_07312026/AWS-Cloud-logo_32.svg`.
- `ecs.svg`: official package member `Architecture-Service-Icons_07312026/Arch_Containers/64/Arch_Amazon-Elastic-Container-Service_64.svg`.
- `fargate.svg`: official package member `Architecture-Service-Icons_07312026/Arch_Containers/64/Arch_AWS-Fargate_64.svg`.
- `ec2.svg`: official package member `Architecture-Service-Icons_07312026/Arch_Compute/64/Arch_Amazon-EC2_64.svg`.
- `lambda.svg`: official package member `Architecture-Service-Icons_07312026/Arch_Compute/64/Arch_AWS-Lambda_64.svg`.
- `alb.svg`: official package member `Architecture-Service-Icons_07312026/Arch_Networking-Content-Delivery/64/Arch_Elastic-Load-Balancing_64.svg`.
- `vpc.svg`: official package member `Architecture-Service-Icons_07312026/Arch_Networking-Content-Delivery/64/Arch_Amazon-Virtual-Private-Cloud_64.svg`.
- `route53.svg`: official package member `Architecture-Service-Icons_07312026/Arch_Networking-Content-Delivery/64/Arch_Amazon-Route-53_64.svg`.
- `cloudfront.svg`: official package member `Architecture-Service-Icons_07312026/Arch_Networking-Content-Delivery/64/Arch_Amazon-CloudFront_64.svg`.
- `acm.svg`: official package member `Architecture-Service-Icons_07312026/Arch_Security-Identity/64/Arch_AWS-Certificate-Manager_64.svg`.
- `rds.svg`: official package member `Architecture-Service-Icons_07312026/Arch_Databases/64/Arch_Amazon-RDS_64.svg`.
- `s3.svg`: official package member `Architecture-Service-Icons_07312026/Arch_Storage/64/Arch_Amazon-Simple-Storage-Service_64.svg`.
- `iam.svg`: official package member `Architecture-Service-Icons_07312026/Arch_Security-Identity/64/Arch_AWS-Identity-and-Access-Management_64.svg`.
- `secrets.svg`: official package member `Architecture-Service-Icons_07312026/Arch_Security-Identity/64/Arch_AWS-Secrets-Manager_64.svg`.
- `cloudwatch.svg`: official package member `Architecture-Service-Icons_07312026/Arch_Management-Tools/64/Arch_Amazon-CloudWatch_64.svg`.
- `sqs.svg`: official package member `Architecture-Service-Icons_07312026/Arch_Application-Integration/64/Arch_Amazon-Simple-Queue-Service_64.svg`.
- `elasticache.svg`: official package member `Architecture-Service-Icons_07312026/Arch_Databases/64/Arch_Amazon-ElastiCache_64.svg`.

## Integration and usage

`TechnologyLogoStrip({diagramId})` returns a self-contained HTML logo row. Parent may supply `style` or explicit `technologies` keys. It uses original diagram IDs rather than changing page numbers. `TechnologyMark({label,x,y,size,diagramId})` is an SVG child; retain existing node labels. Call `technologyForLabel` before replacing a conceptual glyph.

Generic queues/caches must not be marked SQS/ElastiCache without teaching that named implementation. Docker is mapped only to diagram ID32 or labels explicitly naming Docker, not ECS/Fargate or generic containers. ELB identifies the service family, while the ALB label identifies the subtype. AWS-Cloud-logo is the official architecture group icon.

Node guidance: https://nodejs.org/en/about/branding/ and OpenJS trademark policy. Nginx source: https://nginx.org/img/nginx_logo.svg . React geometry remains unchanged; official CSS color is made self-contained. Docker remains Ocean Blue and at least24px at native canvas size. No stretching, invented vendor marks, affiliation or certification claims. Rights and testing details stay internal.

## Local checks

- `acm.svg` · 2084 bytes · SHA-256 `ec7c5df9ea77015288adcc2cb7c84395c04361c3b0e5f05c68da99e10e6c54da`
- `alb.svg` · 1833 bytes · SHA-256 `eaaf3465e26d6e7cfae47d2da7bb8d727fe1bd3a118ed06614349e07039f8caa`
- `aws.svg` · 6364 bytes · SHA-256 `63d73df1aac59dab323df732f82e196e359fb7b6370c0ca8e51e7b897cd350be`
- `cloudfront.svg` · 3819 bytes · SHA-256 `664919982792a69058077eaf39240afd320bbcbd082d36a9148184ec32708cd5`
- `cloudwatch.svg` · 4292 bytes · SHA-256 `a84b5b88172ab39170eaa6154345332d755758a37cda6a5580981cf679e01c0b`
- `docker.svg` · 1225 bytes · SHA-256 `0fd7f9164de13672bb1708ac7cc401ed439eb938ffa7358d5cb278e107904687`
- `ec2.svg` · 1969 bytes · SHA-256 `5a7a0cef7a9f44ccdd544564ce9076abec3024090be0d6454504c49d149ce9ec`
- `ecs.svg` · 2357 bytes · SHA-256 `768688ef725e0e02c5817b218d2cb9dda45c1b76921872f607253da91d881552`
- `elasticache.svg` · 4909 bytes · SHA-256 `d7f3d85f54a818a33d0772c56688cdd0453558295a39ec9894f4d107ea7ebef5`
- `fargate.svg` · 3003 bytes · SHA-256 `003cc5280deebfdd044db0a393be0cd7c35fd376013dd72950d7e5b60c7c1917`
- `iam.svg` · 2027 bytes · SHA-256 `3135793557c065d0481a3985ccc0574b36278d56a2e2c5d59107d0d28f51b827`
- `lambda.svg` · 1810 bytes · SHA-256 `5818c80cd8e7d08891a2492c7694f472ca914fb3a99d9ef8e597db0b37ad7f13`
- `nginx.svg` · 10689 bytes · SHA-256 `9bd543826050ee506dd234f03fbbe972444bb20d9d4854ba7b0e1cf71ef28f07`
- `nodejs.svg` · 2113 bytes · SHA-256 `e4c8de546b2462ad9497679c55609701144ffacd8e18ac17a7f7f7b795de9fe7`
- `rds.svg` · 2520 bytes · SHA-256 `1b24caf4baf274a12164053f05bf0cba331f4d5e30fdd4164000702c1ec192a6`
- `react.svg` · 375 bytes · SHA-256 `1c73dc02901d2521e6a04f378447b6326069e2fb53adbd5b98eda8af67c889d5`
- `route53.svg` · 6663 bytes · SHA-256 `24c50725731048a342c329ad400a08e820b5832af04e5890a7b93d7f39e7fc56`
- `s3.svg` · 2010 bytes · SHA-256 `b92c5101cc6565dd12df37655802279f8fba0c719279f62f93106d26750b36c6`
- `secrets.svg` · 2931 bytes · SHA-256 `c3941b75fe0ad1181696c1dbbd5f9d1fe4561879e195b1e68bb6dc35a99da6b3`
- `sqs.svg` · 6056 bytes · SHA-256 `bbab2545dccba2e11aff74e42c7f8078a9051b14b16114e539da1c4b09bdbdcd`
- `vpc.svg` · 3565 bytes · SHA-256 `4a2c292527ce28a95d9038ab7e6be818751ffef0a91aabb5de2e61045150a98d`
