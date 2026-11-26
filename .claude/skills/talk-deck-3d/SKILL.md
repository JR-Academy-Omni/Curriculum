---
name: talk-deck-3d
description: "制作 3D 动态版 HTML 演示稿：公司介绍、招生宣讲、发布会、招商路演、对外展示。含 3D 地球封面、立体卡片墙、滚动 Logo 墙、世界地图、工作流图、看板动画、手机模型。用户说「做 3D 版 PPT」「公司介绍那种效果」「做得酷一点」时使用。课程课件默认仍用 talk-deck（W12）。"
---

# Talk Deck 3D

基准成品：匠人学院公司介绍（23 页，2026-11-26 已上线 https://australiaitgroup.github.io/presentation/company-intro/ ），owner 看过本地版后评价“非常好非常喜欢”。
源码在主仓库 `presentations/company-intro/`（独立仓库 `australiaitgroup/presentation`）。本 Skill 的 `assets/` 是它在 2026-11-26 的快照。

## 什么时候用哪一个

- 对外展示、公司介绍、宣讲、路演，或 owner 点名要 3D／酷炫 → 本 Skill。
- 课程课件、讲座教学页 → `talk-deck`（W12 设计），不套本 Skill。

## 起步

1. 引擎照 `talk-deck`：从 `lessons/_template/` 复制 `SlideEngine`、`CameraBubble`、`ui`、`theme`、`presentation.css`，不改。1600×900，`?page=N`。
2. 视觉用 JR Craft：把 `jr-academy-brand/tokens/jr-craft.css` 原样放 `src/styles/`，字体放 `src/assets/fonts/jr-craft/`。装 `@fontsource-variable/noto-sans-sc`。
3. 复制 `assets/core/`：`kit.tsx`、`Globe.tsx`、`CoverScene.tsx` → `src/components/`；`deck.css`、`depth.css` → `src/styles/`。`main.tsx` 依次引入 `jr-craft.css`、`presentation.css`、`deck.css`、`depth.css`。
4. `index.html` 必须带模板的样式重置（`*{margin:0;padding:0;box-sizing:border-box}`）。
5. 有地球或地图时跑 `scripts/gen-geo.mjs` 生成 `src/data/land.ts`、`worldmap.ts`。
6. 从 `assets/pages/` 挑页面改内容。页面里的人名、公司、数字、图片路径都是公司介绍那份的，**逐项替换并重新核实**。各页怎么用、17 种 3D 表现形式清单见 [references/recipes.md](references/recipes.md)。

## 流程

1. **先看内容，再做效果。** 旧版存在就逐页看一遍（线上实际画面），列出过时、缺失、对外有风险的内容。
2. **事实以官网现行内容为准**，抓页面文字、图片、数据；本地代码可能落后。官网自己口径不一致的数字，向 owner 确认或不放，不自行挑大的。
3. 写 PRD（页面清单、内容来源、待确认项）。
4. 做页面 → 本地构建 → `scripts/shoot-deck.mjs` 逐页截图 → **亲眼看图**。脚本通过不等于好看。
5. 在 `README.md` 记每页数据来源和抓取日期。

## 节奏

- 深色（night）页用于封面、地图、工作流、产品实机；其余用暖白或浅色底，交替出现。
- 每页一个主视觉动作。封面最重：星空 + 透视网格地面 + 地球 + 环绕卡片 + 口号铭牌。
- 要体现规模：用滚动墙，层数要够（雇主 Logo 墙 owner 要 12 层，6 层大卡被否），每层速度不同、相邻反向。
- 要快速介绍一组产品：用 3D 旋转展台 + 固定产品清单。网址和状态逐个打开核实（域名可能只是占位页，正式站在另一个域名）。
- 要体现研发能力：列各端 + 真实应用截图放进 3D 手机模型。
- 要讲方法或产品流程：一张工作流图，节点轮流抬起，写清每步做什么、拿到什么；流动虚线一张图只有一段。
- 人：头像墙逐个弹出并轻微浮动。城市／影响力：世界地图 + 各地现场照片轮换。

## 文字与字体（owner 反馈，直接照做）

- 标题和正文统一 `DM Sans + Noto Sans SC`（`deck.css` 覆盖 `--jc-font-heading`、`--jc-font-body`）。原标题字体混苹方被打回为“难看”。
- **文字不用红色。** 重点词用 `.marker` 黄色荧光底；眉题用灰色，深色页用黄色。
- 品牌口号「学 AI 来匠人」只用官方字标图，不用字体重排、不改色；放深色底时垫一块白色立体铭牌（`.slab`）。

## 内容红线

- 不编数字、客户、评价、合作关系。owner 口头给的口径照用，记进 PRD，并指出与官网不一致处。
- 机构名称用正式全称（例：澳洲各城市是中国**总领事馆**，大使馆在堪培拉）；关系用有据的词（「支持单位」不升级成「合办」）。国徽、第三方徽章、合作称呼提醒 owner 确认授权；没有官方徽章不自造。
- 产品状态要有依据：App 用 `https://itunes.apple.com/lookup?id=…` 核在架版本；查不到的端不写「已上线」。
- 不放含个人信息的截图（Offer 信、邮件、签证信息、测试账号名）。有人脸的照片提醒确认授权。
- 页面上不写「示例」「虚构」或工程说明。

## 踩过的坑

| 现象 | 原因与做法 |
|---|---|
| 中文字体没生效，显示苹方 | fontsource 的家族名是 `Noto Sans SC Variable`，字体栈必须写全。用 CDP `CSS.getPlatformFontsForNode` 查实际字体 |
| 无头 Chrome 截图全黑 | `--screenshot` + 虚拟时间播不完翻页动画。用 `shoot-deck.mjs` 真实停留 |
| 整页超出画布 | 缺 `box-sizing` 重置 |
| 深色页右上角 Logo 看不见 | `Page night` 自带反白 Logo，`deck.css` 隐藏引擎的深色版 |
| 手机竖屏箭头压内容、圆点压页码 | `deck.css` 竖屏隐藏箭头和圆点，靠滑动翻页 |
| 旧链接是 `#页码` | `main.tsx` 里转成 `?page=N`，已分享链接不能失效 |
| 地球上大陆“缺一块” | 视角转到太平洋了。`Globe.tsx` 的中心经度对准要展示的地区 |
| `vite preview` 改了源码画面不变 | 它读 `dist/`，要重新构建 |
| 截 3D 网站只拿到黑屏或“设备无法显示” | 无头 Chrome 关了 GPU；改用 `--use-angle=metal --enable-gpu --ignore-gpu-blocklist`，并多等几秒 |
| macOS 截图文件名读不到 | 时间里 “pm” 前是特殊空格，用通配符 |

## 动画与可用性

- 3D 全部用 CSS transform 和 2D canvas，不引入 three.js；不依赖外网资源，图片全部下载到项目里。
- 每个 JS 动画都要判断 `prefers-reduced-motion`，停在信息完整的静态画面。
- 信息不能只在轮播高亮时才看得到（要考虑打印和单张截图）。
- 低配电脑流畅度、手机、打印没测就明说。

## 交付与发布

制作课件不等于授权发布。先读目标仓库的 workflow：公司介绍仓库 push main 即部署。未明确要求发布时只做本地提交。其余按 `talk-deck` 的交付与 Git 边界执行（登记目录、不生成 PPTX、PDF 只从同一 HTML 打印）。
