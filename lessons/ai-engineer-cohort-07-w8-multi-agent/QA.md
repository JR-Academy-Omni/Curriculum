# W8 · 验收记录

## 已验证（2026-11-18）

- `bun run build` 等价的 `npm run build`（`tsc -b && vite build`）通过。
- 当时 47 页逐页检查溢出：脚本检查每页元素是否超出 1600×900 画布、代码框和表格是否被截断。SDK 示意页（现第 18 页）代码框原来被截 17px，已把字号从 19 改为 17，复查通过。
- 2026-11-18 讲师要求去掉与 W7 重复的内容：删掉“接上 W7”、第 1 部分封面、四级阶梯、哪些事不交给 Agent、检查点 1 共 5 页，换成第 3、4 页两页回顾（`S03_W7Recap`、`S03b_OneMoreLevel`），共 44 页。之后的页码整体减 3，时间整体提前 3 分钟；RUNSHEET、PRD、SOURCE_MAP、SPEAKER_NOTES 已同步。文件名里的序号没有改，所以文件名和页码不再一致（例如第 38 页是 `S43_Eval.tsx`）。
- 同日讲师要求补充六个主题，新增 6 页，共 50 页：协调开销（`S12b_Overhead`，后来删掉，见下）、发消息还是共享黑板（`S20b_Communication`，第 14 页）、BDI / Contract Net / Blackboard（`S20c_ClassicMAS`，第 15 页）、按子任务选模型和预算（`S30b_ModelRouting`，第 26 页）、错误累积（`S39b_Compounding`，第 34 页）、讲师的 Harness Engineering Framework 作例子（`S46b_HarnessFramework`，第 42 页）。收尾页加了这个框架和 mcp-simplr.au。各部分时间仍在大纲范围内，靠压缩已有页的时间（每种模式约 2 分钟）。重复工作和互相矛盾原来就有（第 31、33 页）。
- 同日讲师认为五种模式每种一页太细：删掉 Sequential、Specialization、Escalation / advisor、Dynamic workflow 四页，内容并进模式对照表（`S20_PatternMap`，现第 12 页，加了 CareKind 一列），只保留 fan-out 一页（`S16_FanOut`，第 13 页），共 46 页。第 3 部分 12 分钟，之后整体提前 3 分钟，结尾缓冲约 6 分钟。上面两条里的页码已改成现在的页码。
- 同日讲师指出派活契约和 W7 的交接单是同一件事：第 6 部分的契约、差的派活 vs 好的派活、传引用三页合成一页（`S34_Contract`，第 30 页，按 W7 交接单的字段和卡片格式），删掉 `S35_BadVsGood`、`S36_ArtifactRef`，共 44 页。第 6 部分 7 分钟，之后整体提前 3 分钟，结尾缓冲约 9 分钟。上面几条里的页码已改成现在的页码。
- 同日讲师要求把所有失败模式放进同一部分：协调开销（`S12b_Overhead`）从第 2 部分移到第 7 部分（在错误累积之后）；失败总表（第 33 页，后来改为七种，错误累积和协调开销各加一行并指向细讲页）的最右一列改为“怎么解决”，收进原来汇总页里重复和矛盾的处理规则；汇总页（第 31 页）只留正常汇总，重复、矛盾、缺回报指向第 7 部分。第 7 部分封面改为“失败模式与上线以后”，17 分钟；第 2 部分 8 分钟。页数不变，上面几条里的页码已改成现在的页码。
- 同日讲师认为协调开销那页和前面重复：删掉 `S12b_Overhead`，七种失败总表（第 33 页）里协调开销一行改为指向第 13 页（合并成大块）、第 30 页（传引用）、第 38 页（单 Agent 基线实测），判断方法写进讲师备注。错误累积（第 34 页）保留，因为“怎么一步步传下去”只有这一页讲。共 43 页，第 7 部分 15 分钟，结尾缓冲约 11 分钟。
- 讲师更正：收尾页的 mcp-simplr.au 和 Harness Engineering Framework 不属于课程内容，只是讲师推广自己的服务。已从“接下来”表里移出，放到单独的白框“课外 · 讲师自己的项目（不属于课程内容）”，描述改用讲师自己的说法。
- `notes.ts` 由 `SPEAKER_NOTES.md` 生成，43 节对 43 页（脚本会断言数量一致）。
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
2. **第 38 页没有数字。** 跑 `eval_compare.py --yes` 后填入中位数，或者保留“待实测”。
3. **第 18 页**：Agent SDK 里主 Agent 派活用的内置工具名没有写在页面上（本地 SDK 包里查不到），只展示了 `agents=` 配置。课前如需演示 SDK 版，按 https://code.claude.com/docs/en/agent-sdk 核对。
4. 第 12 页（advisor 一行）说 Opus 5.5 advisor 的建议对客户端是 redacted：来自文档，未在 demo 里观察过。
5. 计时没有排练过。按 RUNSHEET 结尾约有 11 分钟缓冲。
