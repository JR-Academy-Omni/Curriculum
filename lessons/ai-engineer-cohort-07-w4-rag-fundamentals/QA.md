# AI Engineer W4 · RAG Fundamentals · QA

## 状态

Local / 未部署 · 2026-10-19 本地验证（30 页；讲师审阅中）

## 检查记录

- **构建结果**：`tsc -b && vite build` 通过（讲师机没有 bun，用 `npm install --no-package-lock` 装依赖后跑 `npm run build`；未改动 `bun.lock` 和 `package.json`）。
- **登记及资源检查**：`python3 scripts/check-talk-decks.py --slug ai-engineer-cohort-07-w4-rag-fundamentals` 为 OK；`--engine-inventory` 报告本课件 `template-match`。`--base main` 看不到未跟踪的新目录，所以用 `--slug` 跑。
- **浏览器逐页**：30 / 30 页在 1600×900 的打印视图里逐页测量，四处「看答案」全部点开后，没有文字超出画布，最低的内容在 y = 806（第 4 页，画布高 900）。
- **内容目视核验**：最初 23 页版本全部截图看过；之后新增或改动的第 3、4、6、7 页、目录（第 2 页）和一张过渡页（第 12 页）截图看过，其余过渡页与第 12 页同一组件。答案为展开状态。检查时浏览器面板处于隐藏状态，入场动画不播放，截图前在页面里把 framer-motion 的 `skipAnimations` 打开，看到的是动画结束后的样子。
- **放映视图**：打印视图渲染 30 页；控制台无报错。
- **三档视口（`bun run qa:deck`）**：**未执行**。讲师机没有 bun / Playwright。
- **带动画的真实放映**：**未目视**，原因同上。
- **外网阻断与字体**：未做「冷缓存 + 断外网」实测。
- **讲师备注 / 打印**：备注 30 条，与页数一致；P 打印视图渲染 30 页。N 键显示和浏览器另存 PDF 没有实测。
- **reduced-motion**：未单独实测系统设置切换。
- **线上回读**：未部署。

## 运行时偏离模板

无。引擎文件未修改，`engine-manifest.json` 与模板一致。

内容层（`slides/_shared.tsx`）从 W3 复制后扩展：新增 `Flow`、`Side`、`Chunk`、`Bubble`、`Agenda`、`SectionCover`；`Rows` 支持 `dim` / `hot`；`Quiz` 可指定环节和标题。灰显用 framer-motion 的 `animate.opacity`，不用 `style.opacity`，因为后者会被入场动画覆盖。

## 缺口与负责人

| 缺口 | 负责人 |
|---|---|
| 在可见浏览器里带动画完整翻一遍，逐个点开四处答案 | Jessie |
| `bun run qa:deck` 三档视口截图 + 目视核验 | 有 Playwright 环境的同事 / Jessie |
| 30 页（含 7 张过渡页）讲 82 分钟，试讲一次确认节奏 | Jessie |
| commit / push / 部署 | 等讲师授权 |
