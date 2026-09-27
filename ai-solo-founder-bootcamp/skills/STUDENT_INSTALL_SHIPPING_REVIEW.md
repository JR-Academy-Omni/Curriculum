# OPC 每周交付复盘学生 Skill

`opc-shipping-review` 把客户证据、当前 Offer 和未完成事项收敛成一个本周能验收的增量。它不会因为生成了文件、测试通过或上传成功，就替你宣称已经交付、发布或获得客户接受。

## 安装到 Codex

1. 从课程学习页面下载并解压 Skill 包。
2. 把 `opc-founder-os` 和 `opc-shipping-review` 两个完整文件夹复制到 `~/.codex/skills/`。
3. 重新打开 Codex，或新建一个任务。
4. 输入：`运行 $opc-shipping-review，先审计我的 Business SoT、Offer、客户证据和 Backlog，再帮我选出一个本周可由真人验收的增量。`

两个 Skill 应读取同一个 Founder Workspace，避免客户、Offer、Backlog 和完成状态各写一套。

## 使用前准备

- `BUSINESS-SOT.md`：当前客户、问题、商业判断和证据状态；
- `OFFER.md`：范围、不包含内容、承诺和验收方式；
- `CUSTOMER-EVIDENCE.md`：真实客户行为、异议、承诺及来源；
- 已有产品或交付物，以及真实运行环境的检查入口；
- 现有 `BACKLOG.md`、以往 `WEEKLY-REVIEW.md` 和你本周真实可用的时间、现金与依赖。

缺失信息应写成 `unavailable`。AI 模拟反馈、Founder 的个人偏好、未回读截图或“感觉客户会喜欢”都不能代替客户价值证据。

## 推荐使用顺序

1. 让 Skill 找出来源冲突、未兑现承诺、验收失败、关键风险和待验证假设。
2. 把每个待办连接到客户价值、证据来源、风险、成本、依赖和可观察结果。
3. 只选一个连贯的单周增量，同时写清 included、stop-doing、预算和停止条件。
4. 在执行前确定 Definition of Done：检查什么、在哪里检查、由谁验收、保留什么证据。
5. 由你批准并完成真实外部动作；把系统回读、客户反馈或 reviewer 结论带回 Workspace。
6. 让 Skill 追加本周复盘，保留未完成和失败原因，再做 `continue`、`revise` 或 `stop` 决策。

## 两个课程产出

1. `BACKLOG.md`：证据关联的待办、排序理由、本周唯一增量、Definition of Done、人工负责人和停止事项。
2. `WEEKLY-REVIEW.md`：原始承诺、真实执行结果、验收证据、失败原因、浪费与下一步决策；每周追加，不覆盖历史。

## 什么才算过关

- `drafted`：计划和验收标准齐全，但还没有真实执行或人工验收证据；
- `executed`：已发生获授权的真实执行且证据可检查，但人工验收尚未全部通过；
- `verified`：指定真人逐项检查未被事后修改的 Definition of Done，并把结论写入本周复盘。

本地构建不等于上线，上传不等于发布，发布不等于客户收到，客户收到也不等于接受。Codex 可以帮助准备和分析，但未经明确授权不得自动外联、上线、花钱或改变生产环境，也不能扮演客户或 reviewer 给自己验收。
