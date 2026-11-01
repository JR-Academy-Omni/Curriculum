# 来源与制作边界

2026-11-01。课程判断和学习目标来自本次 owner 对话及已确认 PRD；护理材料由本订阅会话人工编写为课程任务，不是真实患者、真实学生成果或 AI 执行记录。课程练习应用为本课新增，不宣称复用既有 CareKind 后端。技术行为由 lab/server.py 实现；与各组原项目接口无自动兼容承诺。

## 官方资料

- MDN HTTP overview: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview
- MDN HTTP status: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status
- MDN CORS: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS
- AWS service choice: https://docs.aws.amazon.com/decision-guides/
- ECS load balancing: https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-load-balancing.html
- ECS networking: https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security-network.html
- IAM: https://aws.amazon.com/iam/resources/best-practices/
- S3 overview: https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html
- RDS overview: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html
- Secrets Manager: https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html
- CloudWatch: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html
- AWS Budgets: https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html
- Docker overview: https://docs.docker.com/get-started/docker-overview/

## 事实边界

AWS 拓扑是教学设计；本任务无 AWS 资源、账号控制台或收费调用。网络、IAM、CORS 用概念图与官方资料解释；本地实操仅声称真实 HTTP、SQLite、会话隔离与应用角色检查。日志是本地练习真实处理记录，不伪称 CloudWatch。无薪资、就业、真实护理判断或学员通过率数据。

## 技术栈补充官方资料（2026-11-01）

- React Learn: https://react.dev/learn
- Node.js Introduction: https://nodejs.org/learn/getting-started/introduction-to-nodejs
- Nginx Beginners Guide: https://nginx.org/en/docs/beginners_guide.html
- Vite Why: https://vite.dev/guide/why.html

React是UI库；Node是JavaScript运行时；Nginx可服务静态资源与代理请求。JS可在浏览器与Node等不同环境运行，前端开发工具使用Node不等于客户端页面在Node执行。React服务器渲染与Next.js等场景需按实际执行位置判断。


## Infrastructure as Code

- Terraform: https://developer.hashicorp.com/terraform/intro
- CloudFormation: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html

配置可版本管理，Terraform的Write/Plan/Apply和CloudFormation模板/Change set用于资源管理。教学不运行任何命令或创建资源；Terraform State的敏感值与访问控制写入讲师说明，不把源码版本回退当成业务数据恢复。


## CI/CD设计与搭配

- GitHub Actions: https://docs.github.com/en/actions/get-started/understand-github-actions
- GitHub environments: https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/manage-environments
- Docker GitHub Actions: https://docs.docker.com/build/ci/github-actions/

CI检查、版本交付与真实部署是不同结果。GitHub环境规则可用性取决于仓库可见性与套餐，课程不承诺所有账号具有审批功能。本次只写课件和讲义，没有新增或执行真实workflow、runner或部署。

- GitHub Actions OIDC（短期云身份与信任边界）：https://docs.github.com/en/actions/concepts/security/openid-connect


## Firewall

- Security Group: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html
- Network ACL: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html
- WAF: https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html

SG stateful、allow-only；NACL subnet/stateless/ordered allow-deny；WAF检查HTTP(S)。本课不变更实际网络。

- SQS Visibility timeout: https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html
- SQS At-least-once delivery: https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues-at-least-once-delivery.html
