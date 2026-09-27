# Vibe Coding 大师课 · 第四节 deck — 从 PRD 到 Production

网页版讲座 slides（React 19 + Vite + framer-motion，JR Neo-Brutalism）。20 页，120 min 动手工作坊。

- 主题：`PRD + CLAUDE.md + tokens.css → Scaffold → GitHub → Actions ↘ Pages / Vercel`
- 内容 SoT / 逐页 spec：`PRD.md`
- 系列：Vibe Coding 大师课 L1（AI OS + SoT）→ L2（PRD + ADLC）→ L3（Design System）→ **L4（交付链路）**

## 本地跑

```bash
bun install
bun run dev      # 浏览器走查：← → 翻页 · F 全屏 · V 开摄像头 · ?page=N 跳页
bun run build    # tsc -b && vite build → dist/
```

## 目录

- `src/App.tsx` — 按章节 import + 排列 20 页
- `src/components/slides/L4P00..L4P19_*.tsx` — 一文件一页
- 引擎文件（`SlideEngine` / `CameraBubble` / `ui` / `theme` / `main`）与 `_template` 逐字一致，**只拷不改**

线上：https://jracademy.ai/curriculum/lessons/vibe-coding-master-l4/
