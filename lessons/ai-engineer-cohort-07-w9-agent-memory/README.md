# AI Engineer W9 · L133 Agent Memory & State Management

44 页理论课课件，90 分钟：开场 + 第 1 部分 9 分钟，第 2 部分 14，第 3 部分 17（含约 6 分钟缓冲），其余每部分 10。讲课用中文，术语用英文。没有 code demo，页面上的 JSON 和记录都是示意。线上互动只用聊天框（六道检查题，点“看答案”）。

一句话主线：**Context window 不是 Memory，vector store 也不是。** 记下来之前先问：谁确认的、给谁看、留多久、怎么删。

例子全部用 Claude Code（学员都用过），不用课程大纲里的 CareKind 场景；规则一样：Agent 提议，代码和人决定。未经确认的 transcript、未 review 的代码、推断或网页内容不能写成事实。W9 实践课（L119）只用 task / session state；长期 Memory 在 W10 实践课（C7P10）实现，这两门实践课用 CareKind 场景。Mem0、Zep、LangMem 等只作为实现案例。

```bash
npm install --no-package-lock   # 或 bun install --frozen-lockfile
npm run dev
npm run build
```

方向键或空格翻页；F 全屏；V 摄像头；N 讲师备注；P 打印视图；`?page=N` 定位。引擎与 W7、W8 课件一致。

- `SPEAKER_NOTES.md`：每页讲解要点和累计时间。`src/data/notes.ts` 由它生成：`python scripts/gen_notes.py`。
- `src/components/slides/P0`–`P8`：每个部分一个文件，每页一个导出的组件；`_parts.tsx` 沿用 W8。

## 结构

| 部分 | 时间 | 页 |
|---|---|---|
| 开场 + 1 State 与 Memory | 9′ | 1–7 |
| 2 Task state、Session state、Working memory、压缩方式、事实 vs 摘要、Session 结束 | 14′ | 8–14 |
| 3 Episodic、Semantic、Procedural（preference 归入 semantic） | 17′ | 15–20 |
| 4 读写策略（write policy 六个检查、read policy） | 10′ | 21–24 |
| 5 Scope 与权限 | 10′ | 25–28 |
| 6 TTL、retention、更正、删除、consent | 10′ | 29–33 |
| 7 冲突、过期、provenance、memory poisoning | 10′ | 34–38 |
| 8 Coding Agent Memory 架构、现成实现、面试 | 10′ | 39–44 |

## 待核对

- 第 41 页各实现的功能描述按 2026 年中的了解写成，讲课前对一下官方文档。
- 第 32 页 APP 条款（3、11、12、13）只作依据提示，不是法律意见。
- 第 37 页：OWASP Agentic AI Threats and Mitigations 把 Memory Poisoning 列为 T1。
- 第 10、14、43 页用到的 Claude Code 命令（/model、/permissions、/compact、/clear、/resume、/rewind、/context）按讲课时的版本核对一下。
