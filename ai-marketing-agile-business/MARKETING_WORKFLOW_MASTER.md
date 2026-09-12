# Marketing Workflow Master

状态 / Status: `ready_for_inputs`

## 单一输入 / Source of truth

- 课程事实：`public/outline.json`
- 用户证据：`PERSONAS.md` 与 `PERSONAS-INIT-REPORT.md`
- 漏斗边界：`FUNNEL_PLAN.md`
- 推广方向：`PROMOTION_PLAN.md`
- 执行节奏：`EXECUTION_TIMELINE.md`
- 审批与缺口：`MARKETING_WORKFLOW_GAP_AUDIT.md`、`AUDIT_LOG.md`

任何营销内容不得覆盖课程 SoT，也不得把待确认的价格、日期、讲师或结果写成事实。

## 执行流水线

| Gate | 输入 | AI 可以做 | 人必须确认 | 输出 |
|---|---|---|---|---|
| G0 Offer | 课程大纲、价格与日期 | 整理卖点与 FAQ | 价格、条款、名额 | Approved Offer Brief |
| G1 Persona | 脱敏真实记录 | 提取原话、问题、异议 | 证据是否代表目标用户 | Validated Persona Notes |
| G2 Master | Offer + Persona | 起草一份主内容 | 事实、语气、承诺 | Approved Master Content |
| G3 Variants | Approved Master | 改写平台版本 | 平台、CTA、敏感信息 | Channel Variants |
| G4 Design | Brand Source of Truth | 生成设计方向与尺寸版本 | Logo、人物、产品、文字 | Approved Visual Assets |
| G5 Publish | 已批准资产 | 组装排程请求 | 品牌、平台、账号、时间 | Provider receipt |
| G6 Review | 真实平台数据 | 汇总表现与建议 | 继续、修改或停止 | Weekly Review |

## 最小责任表

| 责任 | Owner |
|---|---|
| 课程事实与教学承诺 | 待指定 Course Owner |
| 价格、条款和报名链路 | 待指定 Business Owner |
| 品牌与视觉批准 | 待指定 Brand Approver |
| 社媒账号与发布批准 | 待指定 Channel Owner |
| 数据与周报 | 待指定 Measurement Owner |

同一资产只能有一个最终批准人。AI 不得成为批准人。

## Definition of Done

只有在源文件、审批记录、最终资产、平台目标和结果回读都存在时，任务才算完成。草稿、上传成功、排程请求或 `PENDING` 均不等于公开发布。

## English handoff

The workflow uses six gates from approved offer and evidence-backed persona through master content, channel variants, design QA, provider publication and weekly review. AI drafts and checks; named humans approve facts, brand, account targets and release decisions.
