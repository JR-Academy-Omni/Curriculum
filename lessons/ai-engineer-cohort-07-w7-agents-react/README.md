# AI Engineer W7 · Agents 基础 + The ReAct Framework

53 页理论课课件，90 分钟（内容 80 分钟 + 缓冲 10 分钟），线上互动只用聊天框。讲课用中文，术语用英文。一句话主线：**把循环交给模型，把边界留给代码。**全课分八个部分：谁决定下一步、ReAct、Claude Agent SDK、State、循环怎么停、出错了怎么办、副作用审批与约束、框架怎么选。沿用 W6 的退款客服例子和类比（前台客服派工单给后台窗口）。本课不布置作业。

```bash
bun install --frozen-lockfile
bun run dev
bun run build
```

方向键或空格翻页；F 全屏；V 摄像头；N 讲师备注；P 打印视图；`?page=N` 定位。引擎与 `lessons/_template` 一致，见 `engine-manifest.json`。

- `PRD.md`：课程定位、学习目标、与大纲的时间差异、节奏表、53 页逐页规格（讲师 Harris）。
- `RUNSHEET.md`：讲师流程、逐页时间、时间紧时的删减、答案速查、demo 出问题怎么办、被问到时怎么答。
- `SPEAKER_NOTES.md`：每页讲解要点和六个现场演示的时机。`src/data/notes.ts` 由它生成（按 N 显示），两边一起改。
- `WORKSHEET.md`：讲义（含 LLM 防御式编程清单、交接单模板）。
- `SOURCE_MAP.md`：逐页来源，框架信息核对于 2026-11。
- `QA.md`：验收记录和尚未验证的项目。
- `demo/`：课堂现场运行的退款客服 Agent（合成数据，退款和邮件只返回 `simulated`），含 67 项测试。不部署，运行方法见 `demo/README.md`。
- `src/components/slides/_parts.tsx`：内容层共用零件（页框、代码框、表格、复习题、LIVE 页）。

## demo 架构

第 25 页是同一张图的中文版。改一边时另一边也要改。

```text
 You in the terminal                      Claude API
   │ --order A4096   ▲ approve y/n           ▲
   ▼                 │                       │ model decides next step
┌─────────────────────────────────┐          │
│ agent.py process                │          │
│  settings.py  reads .env        │  SDK   ┌─┴──────────────────┐
│  run_agent ────────────────────────────► │ Claude CLI         │
│  Printer + Trace ◄── messages ─────────  │ (bundled with SDK) │
│                                 │        │ runs the agent loop│
│  make_gate hook ◄── before each tool ──  │                    │
│   ├ LoopDetector   (guards.py)  │        └─┬──────────────────┘
│   └ policy_gate    (guards.py)  │          │ allowed tool calls
│                                 │          │ (MCP over stdio)
│  build_handoff on early exit    │          ▼
└───────────────┬─────────────────┘ ┌──────────────────────────────┐
                │                   │ refund_server.py process     │
                │                   │  validate_args  (guards.py)  │
                │                   │  with_retry     (errors.py)  │
                │                   │  desk.py: tools, final checks│
                │                   └───────┬──────────────────────┘
                ▼                           ▼
     ┌─────────────────────────────────────────────────┐
     │ Shared data                                     │
     │  data/orders.json    read-only synthetic orders │
     │  runtime/            ledger, approvals,         │
     │                      task state, traces         │
     └─────────────────────────────────────────────────┘
```

- `agent.py` 和 MCP server 是两个进程，账本和审批靠文件共享。所以 `--resume` 拿不回内存里的东西。
- `01_control.py` 不经过这套：它直接调 `desk.py`，只有 `once` 和 `react` 两种模式通过 `llm.py` 调 Claude。
- API key 只放在 `demo/.env`（已在 `.gitignore`），不要提交或发给别人。分发 `demo/` 时去掉 `.env`、`.venv/` 和 `runtime/`。
