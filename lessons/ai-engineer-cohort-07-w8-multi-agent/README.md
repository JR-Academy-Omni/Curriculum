# AI Engineer W8 · Multi-Agent Architectures · CCAR-F Alignment

43 页理论课课件，90 分钟（和 W7 重复的内容压成第 3、4 页回顾，开场和第 1 部分共 7 分钟；第 3 部分五种模式合成一张表，12 分钟；第 6 部分派活契约按 W7 交接单的格式合成一页，7 分钟；所有失败模式（包括原来第 2 部分的协调开销）集中到第 7 部分：第 2 部分 8 分钟，第 7 部分 15 分钟；第 4、5、8 部分按大纲 15/10/5 分钟，结尾留约 11 分钟缓冲），线上互动只用聊天框。讲课用中文，术语用英文。一句话主线：**先证明一个 Agent 不够，再拆。**

例子是 CareKind 交班：六位合成住户，一个班次。AI 只写 Draft，不确认、不作临床判断、不判断事件是否需要上报。对齐 Claude Certified Architect – Foundations 的 Agentic Architecture & Orchestration。本课不布置作业。

```bash
bun install --frozen-lockfile   # 或 npm install --no-package-lock
bun run dev
bun run build
```

方向键或空格翻页；F 全屏；V 摄像头；N 讲师备注；P 打印视图；`?page=N` 定位。引擎与 W7 课件一致，见 `engine-manifest.json`。

- `PRD.md`：课程定位、学习目标、节奏。
- `RUNSHEET.md`：讲师流程、逐页时间、时间紧时的删减、答案速查、demo 出问题怎么办、被问到时怎么答。
- `SPEAKER_SCRIPT.md`：逐页口播稿，排练用，比 SPEAKER_NOTES 完整。
- `SPEAKER_NOTES.md`：每页讲解要点。`src/data/notes.ts` 由它生成：`python scripts/gen_notes.py`。
- `WORKSHEET.md`：讲义（拆分判断清单、委派契约模板）。
- `SOURCE_MAP.md`：每页的来源，API 信息核对于 2026-11-18。
- `QA.md`：验收记录和尚未验证的项目。
- `src/components/slides/_parts.tsx`：沿用 W7 的内容层零件；`_pattern.tsx` 是 fan-out 那页（第 13 页）的版式。

## demo

代码已公开收录在本课 `public/demo-code/`，并随课件部署；线上可直接查看文件或下载完整 ZIP。运行在 Claude Managed Agents（beta）上：

```text
 handover.py (our process)             Managed Agents session (Anthropic)
  opens session, budget $3   ───────►  Shift lead thread (coordinator, Sonnet 5.5)
  reads event stream         ◄───────    ├─ Note drafter thread × resident
  answers custom tool calls  ◄───────    ├─ Policy checker thread × 1
  15-min wall-clock deadline             └─ advisor consultations (Opus 5.5)
          │
          ▼
 carekind.py Backend: permission per caller, confirmed facts only,
                      idempotent drafts, RN flags, audit.jsonl
```

第 22 页是同一张图的中文版。改一边时另一边也要改。
