# AI Engineer W2 · Tokens, Context Windows & Cache Efficiency

37 页讲座课件，90 分钟。讲课用中文，术语用英文。每个模块都按 Test → Teach → Test 走：先让学生预测数字，再跑命令看真实结果，最后换个情境再考一次。

所有实验都用学生已经装好的 **Claude Code / Codex**，不需要 API key。生产案例就是 Claude Code / Codex 本身：稳定前缀、`/compact`、CLAUDE.md 记忆、prompt caching。

```bash
bun install --frozen-lockfile
bun run dev
bun run build
```

方向键或空格翻页；F 全屏；V 开关摄像头；`?page=N` 定位。

- `OUTLINE.md`：课程大纲、每个模块的节奏、课后资料。
- `lab/README.md`：学生用的命令速查和实验步骤；`lab/ttft.py` 用来测 TTFT。
- `src/App.tsx`：页面顺序；`src/data/`：命令、前测、面试题。
