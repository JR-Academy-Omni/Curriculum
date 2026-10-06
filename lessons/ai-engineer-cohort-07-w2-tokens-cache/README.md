# AI Engineer W2 · Tokens, Context Windows & Cache Efficiency

37 页讲座课件，90 分钟。讲课用中文，术语用英文。每个模块都按 Test → Teach → Test 走：先让学生预测数字，再跑命令看真实结果，最后换个情境再考一次。

所有实验都用学生已经装好的 **Claude Code / Codex**，不需要 API key。生产案例就是 Claude Code / Codex 本身：稳定前缀、`/compact`、CLAUDE.md 记忆、prompt caching。

```bash
bun install --frozen-lockfile
bun run dev
bun run build
```

方向键或空格翻页；F 全屏；V 摄像头；N 讲师备注；P 打印视图；`?page=N` 定位。引擎与 `lessons/_template`（2.0.0）一致，见 `engine-manifest.json`。

- `PRD.md`：学习目标、节奏表、37 页逐页规格（讲师 Jessie）。
- `RUNSHEET.md` / `WORKSHEET.md` / `SOURCE_MAP.md` / `QA.md`：讲师流程、学员工作单、来源表、验收记录。
- `OUTLINE.md`：课程大纲与课后资料清单。
- `lab/GUIDE.md`：学生用的命令速查和实验步骤；`lab/ttft.py` 用来测 TTFT。
- `src/App.tsx`：页面顺序；`src/data/`：命令、前测、面试题、讲师备注（`notes.ts`）。
