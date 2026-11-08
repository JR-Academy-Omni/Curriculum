# AGENTS.md — 练习规则（Codex 每次都要遵守）

1. 先读 `config/business.md`，再读这次任务的 `tasks/<任务>/TASK.md`，严格按任务卡做。
2. 产出写到 `output/<今天日期>/<任务>/`。任务卡要求「记住上一次」时，才写 `state/`。
3. 不改 `config/`、`tasks/`、`practice-data/`。
4. 结束前必须写回执 `output/<今天日期>/<任务>/status.json`：
   ```json
   { "task": "01-daily-brief", "date": "2026-11-08", "status": "done", "reason": "一句话说明", "evidence": ["来源 URL"] }
   ```
   `status` 只能是三种之一：
   - `done`：做完了，满足任务卡的完成判据
   - `skipped`：按规则不该做（例如没有新内容、没有变化）
   - `needs-human`：卡住了，要人判断，reason 写清卡在哪
5. **宁可交回一句「我没做，因为 X」，也不要交回一个猜着做完的结果。** 不编造数据、引用、价格和客户信息。网上查到的事实附来源 URL。
6. 不对外发布、不发邮件、不付款。对外的东西只写草稿。
