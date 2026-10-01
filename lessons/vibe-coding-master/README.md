# Vibe Coding 大师课 · 第一节课

40 页 React SlideEngine Deck，支持独立演示和 JR Classroom iframe 两种运行模式。

## 2026-10-01 · 新版 Talk Deck 视觉（Local）

40 页统一采用新版课程模板的网格纸、圆角面板、marker underline 与品牌色错位阴影，第 6 页重排为双栏记忆循环图解。内容与页序保持一致。模板视觉基元逐字同步，课件专用视觉组合在 `src/components/courseUi.tsx`；现有翻页、摄像头和 Classroom Bridge 保留。详见 `DESIGN.md`。本次视觉改版尚未部署。

## 本地演示

```bash
bun install
bun run dev
```

独立模式保留键盘、触摸、滚轮、页码、圆点导航、摄像头和全屏能力。

## Classroom Release 构建

```bash
CLASSROOM_RELEASE_ID=2026-07-17.1 \
CLASSROOM_RELEASE_BASE=/decks/vibe-coding-master-l1/2026-07-17.1/ \
bun run build:classroom
```

构建结果位于 `dist/`：

- `index.html` 与 hash 静态资源是独立 Deck Bundle；
- `manifest.json` 固定 `deckId`、`releaseId`、Bridge 版本和 40 个 slide identity；
- `scripts/verify-classroom-manifest.mjs` 在构建后检查 Manifest 契约。

Classroom Shell 加载时附带 `mode=classroom`、`deckId`、`releaseId` 和
`parentOrigin`。该模式禁用 Deck 自己的翻页输入和导航，只接受通过 origin、
iframe source、Bridge 版本与 Release identity 四重校验的 `postMessage`。

## 关键文件

- `classroom.config.ts`：不可变 Deck identity 和 Slide 数；
- `src/classroomBridge.ts`：Shell/Deck Bridge v1；
- `src/components/SlideEngine.tsx`：standalone/classroom 双模式；
- `vite.config.ts`：Release base 与 Manifest 输出。
