# AI Engineer W5 · RAG Quality, Testing & Controlled Improvement

35 页理论课课件，90 分钟，线上互动只用聊天框。讲课用中文，术语用英文。页面给学生看：一页一件事。第 2 页是目录，全课分七个部分（开场、四类失败、Golden case、读报告、单变量实验、五个旋钮、后续地图），第 2–7 部分开始前回到目录。开场先放 W1–W12 足迹地图，再做四道重要概念测试。本课不布置作业。例子和数字全部来自老师的 reference RAG（`carekind-reference-rag`）真实运行。

```bash
bun install --frozen-lockfile   # 或 npm install --no-package-lock
bun run dev
bun run build
```

方向键或空格翻页；F 全屏；V 摄像头；N 讲师备注；P 打印视图；`?page=N` 定位。引擎与 `lessons/_template` 一致，见 `engine-manifest.json`。

- `PRD.md`：课程定位、学习目标、节奏表、35 页逐页规格（讲师 Jessie）。
- `RUNSHEET.md`：讲师流程、答案速查、数据来源。
- `WORKSHEET.md`：讲义（失败判定规则、golden case 字段、指标对照、两个本地模型的对比、六组实验全表、面试检查、开发者加餐）。
- `SOURCE_MAP.md`：逐页来源。
- `QA.md`：验收记录。
- `src/App.tsx`：页面顺序；`src/data/`：环节划分、目录（`sections.ts`）、足迹地图（`footprint.ts`）、讲师备注。
- `src/components/slides/_shared.tsx`：内容层共用零件（从 W4 复制，文末是 W5 新增：证据块、实验前后对比表、修好 / 新坏的题、数据来源行）。
