# OPC First Dollar 学生 Skill

`opc-first-dollar` 帮你准备并执行第一笔真实收入冲刺。它会整理合格潜客、销售 Pipeline、访谈问题、Proposal 和异议记录，但不会替你群发消息或伪造成交。

## 安装到 Codex

1. 下载并解压课程提供的 Skill 包。
2. 把 `opc-founder-os` 和 `opc-first-dollar` 两个完整文件夹复制到 `~/.codex/skills/`。
3. 重新打开 Codex或新建任务。
4. 输入：`运行 $opc-first-dollar，先检查我的 Offer 和合格潜客标准，只生成待我审批的外联草稿。`

两个 Skill 必须读取同一个 Founder Workspace，避免客户、Offer 和证据状态各写一份。

## 使用前准备

- 当前客户证据和明确的目标人群；
- Offer 的价格、范围、不包含内容与交付时间；
- 你有权限联系的潜客来源；
- 可由你本人控制的真实收款方式；
- 课程要求的脱敏证据保存位置。

不要把客户银行卡号、完整银行账户、支付密钥、登录凭证或不必要的个人信息交给 AI。

## 推荐使用顺序

1. 让 Skill 审查 Offer 是否能被准确报价和交付。
2. 为每位潜客写出可观察的合格理由，不把“认识这个人”当成资格。
3. 让 Skill 生成个性化消息草稿；你逐条检查收件人、内容、权限和合规性后亲自发送。
4. 把真实回复和通话笔记脱敏后带回，由 Skill 更新 Pipeline 和异议记录。
5. 成交后把可回读的脱敏支付引用登记到 `PAYMENT-EVIDENCE.md`，由课程 reviewer 验收。

最终工作区应包含 `FIRST-DOLLAR-PLAN.md`、`SALES-PIPELINE.md`、`OBJECTION-LOG.md` 和 `PAYMENT-EVIDENCE.md`。支付文件只保存脱敏引用和验收结论，不保存银行卡号、账户凭证或支付密钥。

## 什么才算过关

- `drafted`：只有名单、消息、Proposal 或付款页草稿；
- `executed`：有真实发送、回复、通话或 Proposal 证据，但付款尚未验收；
- `verified`：reviewer 已确认一笔来自真实客户、对应真实 Offer、成功且未退款的付款。

未支付发票、测试付款、自己付款、友情转账、退款交易、AI 生成的回复或截图都不能证明第一笔收入。没有成交时，如实保留 Pipeline、异议和下一轮 `continue`、`revise` 或 `stop` 决策。
