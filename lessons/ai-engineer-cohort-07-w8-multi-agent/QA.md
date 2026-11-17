# W8 · 验收记录

## 已验证（2026-11-18）

- `bun run build` 等价的 `npm run build`（`tsc -b && vite build`）通过。
- 47 页逐页检查溢出：脚本检查每页元素是否超出 1600×900 画布、代码框和表格是否被截断。第 23 页代码框原来被截 17px，已把字号从 19 改为 17，复查通过。抽查第 16、22、23、30 页截图。
- `notes.ts` 由 `SPEAKER_NOTES.md` 生成，47 节对 47 页（脚本会断言数量一致）。
- demo：`uv run pytest` 14 项全部通过（不调 API）。
- demo 用到的 SDK 绑定都在已安装的 `anthropic` 2.6.0 里确认过：`agents.create(multiagent=...)`、`sessions.create(budget=...)`、`sessions.threads`、`agent.custom_tool_use.session_thread_id`、`session.thread_created.agent_name`、`user.custom_tool_result.is_error`。

## 尚未验证

1. **demo 从未对真实 API 运行过。** 讲师决定课前自己跑。需要验证：
   - `setup_agents.py` 能创建 environment 和 4 个 Agent（账号要开通 `multiagent_20261001`；没有时报 `Extra inputs are not permitted`）。
   - Agent 只有 custom tools、没有 `agent_toolset` 时可以正常创建和运行。
   - 主线程（协调者）自己的 custom tool 调用里 `session_thread_id` 是 `None` 还是主线程 ID。`handover.py` 两种都按协调者处理，但如果是主线程 ID，`names` 里查不到，也会落到协调者，结果一样。
   - 协调者真的按 prompt 一位住户派一个 drafter、只派一个 checker。
   - `sessions.retrieve().usage` 里 `list_cost` 的字段形状（`handover.py` 按 `{amount, currency}` 读）。
   - 一次 team 运行的实际费用在 3 美元预算以内。
2. **第 43 页没有数字。** 跑 `eval_compare.py --yes` 后填入中位数，或者保留“待实测”。
3. **第 23 页**：Agent SDK 里主 Agent 派活用的内置工具名没有写在页面上（本地 SDK 包里查不到），只展示了 `agents=` 配置。课前如需演示 SDK 版，按 https://code.claude.com/docs/en/agent-sdk 核对。
4. 第 18 页说 Opus 5.5 advisor 的建议对客户端是 redacted：来自文档，未在 demo 里观察过。
5. 计时没有排练过。大纲给的时间没有缓冲。
