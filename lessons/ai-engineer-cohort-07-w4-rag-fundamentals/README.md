# AI Engineer W4 · RAG Fundamentals

30 页理论课课件，90 分钟，线上互动。讲课用中文，术语用英文。页面给学生看：一页一件事，几行「大白话 → 术语」。第 2 页是目录，全课分八个部分（开场、定位、离线、在线、组装作答、兜底、排错、后续地图），每部分开始前回到目录。开场是一道架构分层测试和一道 W3 连线复习。本课不布置作业。例子都用 CareKind 的虚构探视政策。

```bash
bun install --frozen-lockfile
bun run dev
bun run build
```

方向键或空格翻页；F 全屏；V 摄像头；N 讲师备注；P 打印视图；`?page=N` 定位。引擎与 `lessons/_template` 一致，见 `engine-manifest.json`。

- `PRD.md`：课程定位、学习目标、节奏表、30 页逐页规格（讲师 Jessie）。
- `RUNSHEET.md`：讲师流程、答案速查。
- `WORKSHEET.md`：讲义（课上不讲的完整 contract 字段、failure taxonomy、面试检查）。
- `SOURCE_MAP.md` / `research/sources.md`：来源表与核对记录。
- `QA.md`：验收记录。
- `src/App.tsx`：页面顺序；`src/data/`：环节划分、目录（`sections.ts`）、讲师备注。
- `src/components/slides/_shared.tsx`：内容层共用零件（从 W3 复制后扩展：页框、「大白话 → 术语」行、术语卡片、复习题、流程、对照卡、chunk）。
