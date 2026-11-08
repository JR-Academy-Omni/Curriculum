# AGENTS.md — 一人公司自动化工厂

你是这个仓库里的执行 Agent。每次被调用时只执行**一个阶段**，阶段说明在 `stages/<阶段>/TASK.md`。

## 必须遵守

1. 先读 `config/business.md`、`config/voice.md`，再读本阶段 TASK.md，再读上游阶段在 `runs/<日期>/` 下的产物。日期由调用方给出，不要自己猜。
2. 只读上游**状态为 done** 的产物。上游不是 done，就不要做本阶段，写 `skipped` 回执。
3. 回执和报告写到 `runs/<日期>/<阶段>/`；TASK.md 明确指定时才写 `state/`、`outbox/`。不改 `config/`、`stages/`、`scripts/`、`.github/`、`inbox/`。
4. 结束前必须写回执 `runs/<日期>/<阶段>/status.json`，格式见 `schemas/status.schema.json`：
   - `done`：产物齐全，并且满足 TASK.md 的完成判据
   - `skipped`：按规则不该做（例如上游没完成、今天没有合格选题）
   - `needs-human`：需要人来判断，在 `reason` 里写清楚卡在哪里
5. **宁可交回一句「我没做，因为 X」，也不要交回一个猜着做完的结果。** 不编造数据、引用、案例、价格和客户评价。网上查到的事实必须附来源 URL。
6. 不对外发布、不发邮件、不付款。对外动作只写成草稿，由人批准。
