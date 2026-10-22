# 官网 Custom Page 发布准备

日期：2026-10-22。owner 已明确授权部署，并要求独立 Custom Page。

- 官网入口：`https://jiangren.com.au/program-course/enterprise-ai-automation-bootcamp`。
- 英文入口：`https://jiangren.com.au/en/program-course/enterprise-ai-automation-bootcamp`。
- 完整静态大纲与示例：官网 `public/course-previews/enterprise-ai-automation-bootcamp/`，随同一官网镜像发布。
- 来源：本目录 `public/outline.json`；网站价格直接从该 JSON 投影读取，不创建第二套定价。
- 官网沿用 Register A、语义 token、共享 Button、导航和 next-intl。
- 没有正式班次／币种确认，报名保持禁用，不创建真实订单或擅自同步商业记录。
- 已确认既有远端 Mac Studio runner，不在 owner 当前 MacBook 运行 CI/build。
- Curriculum 源提交使用 `[skip ci]`，不触发旧的全量静态站发布。网页与课程素材统一由官网既有 GitHub Actions 验证和部署。
- 部署与线上回读尚未完成；完整成果 Demo 仍缺 MP4 与真实定时触发证据。
