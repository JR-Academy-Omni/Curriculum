# AI Engineer W3 · Context Engineering: Selection, Assembly & Lifecycle · QA

## 状态

Local / 未部署 · 2026-10-14 本地验证（精简版，21 页）

## 检查记录

- **构建结果**：`tsc -b && vite build` 通过（讲师机无 bun，用已安装的 `node_modules` 跑 `npm run build`；未改动 `bun.lock` 和 `package.json`）。
- **登记及资源检查**：`python3 scripts/check-talk-decks.py --base main` 为 OK；`--engine-inventory` 报告本课件 `template-match`。
- **浏览器逐页**：21 / 21 页在 1600×900 的打印视图里逐页测量，四道复习题的答案全部点开后，没有文字超出画布，最低的内容在 y = 762（画布高 900）。没有无圆角的带边框容器。
- **内容目视核验**：在打印视图里截图看过 10 页（2、4、5、6、7、9、10、13、14、17，复习题为答案展开状态）。其余 11 页（1、3、8、11、12、15、16、18–21）只做了布局测量，没有截图目视；它们和看过的页面用的是同一套行和卡片组件。
- **三档视口（`bun run qa:deck`）**：**未执行**。讲师机没有 bun / Playwright。
- **带动画的真实放映**：**未目视**。检查时浏览器面板处于隐藏状态，放映视图的入场动画不播放；需讲师在可见窗口里从头翻一遍。
- **外网阻断与字体**：未做「冷缓存 + 断外网」实测。
- **讲师备注 / 打印**：备注 21 条，与页数一致；P 打印视图渲染 21 页。N 键显示和浏览器另存 PDF 本版未重新实测。
- **reduced-motion**：未单独实测系统设置切换。
- **线上回读**：未部署。

## 运行时偏离模板

无。引擎文件未修改，`engine-manifest.json` 与模板 2.0.0 一致。

内容层补充（`slides/_shared.tsx`）：`PartFrame`、`Rows`、`TermCards`、`Quiz`、`Chat`、`Mark`、`TermPill`、`Punch`、`SourceLine`、`RevealButton`。`Mark` 用圆角色块代替模板的直角 `Highlight`（硬规则 4）。

## 缺口与负责人

| 缺口 | 负责人 |
|---|---|
| 在可见浏览器里带动画完整翻一遍，逐个点开四道复习题；重点看没有截图的 11 页 | Jessie |
| 对照那两页课程描述截图，确认术语没有遗漏（本次是按旧 PRD 的术语清单做的） | Jessie |
| `bun run qa:deck` 三档视口截图 + 目视核验 | 有 Playwright 环境的同事 / Jessie |
| 21 页讲 90 分钟，平均每页四分钟多，试讲一次确认节奏 | Jessie |
| commit、push、部署与线上回读 | 待用户授权 |
