# AI Engineer W2 · Tokens, Context Windows & Cache Efficiency · QA

## 状态

Local / Build 通过 / 未部署（2026-10-06，模板 2.0 迁移后）

## 检查记录

- **构建结果**：`tsc -b && vite build` 通过（讲师机无 bun，依赖用 `npm install --no-package-lock` 安装，未改动 `bun.lock`；`bun.lock` 由模板按 `create-talk-deck.py` 的规则替换 slug 生成）。
- **登记及资源检查**：`python3 scripts/check-talk-decks.py --engine-inventory` → `template-match`；`--base main` 结果见下方「缺口」。
- **浏览器逐页**：37 / 37 页逐页检查（所有「看答案」按钮展开后），文字均在 1600×900 画布内；第 33 页一个折行的高亮词被检测为宽框，属行内元素折行，非溢出（已给高亮加 `box-decoration-break: clone`）。
- **三档视口（`bun run qa:deck`）**：**未执行**。讲师机没有 bun / Playwright / Chromium；需在有 Playwright 的机器上补跑并附截图。
- **内容、图表、Logo 目视核验**：Logo 为模板随附 `logo-zh-full.svg`；逐页截图目视核验**未完成**（检查时浏览器窗口处于隐藏状态，只做了布局测量）。
- **外网阻断与字体**：开发服务器加载时无任何外部请求，字体文件 23 个全部本地提供；未做「冷缓存 + 断外网」实测。
- **讲师备注 / 打印**：N 显示当前页备注（第 9 页对应第 9 条）；P 打印视图 37 页，「返回课件」回到原页。浏览器另存 PDF 未实测。
- **reduced-motion**：模板 `MotionConfig reducedMotion="user"`，未单独实测。
- **控制台**：无错误。
- **线上回读**：未部署。

## 运行时偏离模板

无。引擎文件（`SlideEngine` / `ui` / `CameraBubble` / `deck` / `theme` / `presentation.css` / `main`）逐字复制自 `lessons/_template`，`engine-manifest.json` 与模板 2.0.0 一致。

内容层补充：`slides/_shared.tsx` 的 `Mark` 用圆角色块代替模板的直角 `Highlight`（硬规则 4），只在内容层使用，不改引擎。

## 缺口与负责人

| 缺口 | 负责人 |
|---|---|
| `.github/workflows/deploy.yml` 加入本课件 build / copy 步骤（作者账号无 `workflow` 权限） | Maintainer |
| `bun run qa:deck` 三档视口截图 + 目视核验 | 有 Playwright 环境的同事 / Jessie |
| 课前在讲师机完整跑一遍 Claude Code 命令，核对输出字段 | Jessie |
| Codex 命令实测（讲师机未安装 Codex） | Jessie / 助教 |
| 部署后线上回读，卡片改为「已部署」 | Maintainer + Jessie |
