---
name: talk-deck
description: "把一个讲座/课程主题做成网页版 PPT（React 19 + Vite + framer-motion 的 SPA deck，部署到 jracademy.ai/curriculum/lessons/{slug}/）。沿用 1600×900 SlideEngine、一文件一页、真实数据与 JR Register B 圆角课程视觉。Use when user wants to build a web slide deck / 网页版讲座 / 在线 PPT for a talk, lecture, or bootcamp topic; all presentation requests use this HTML-first workflow."
---

# /talk-deck — 网页版讲座 PPT 生成器

所有 PPT、讲座、课程课件和演示稿必须先制作 HTML 在线版，统一使用 Talk Deck；禁止生成或交付 `.pptx`，不得推荐或转交 Canva 作为替代。PDF 仅从已验证的同一 HTML 打印生成。

本文 `curriculum/` 前缀表示 Curriculum 仓库根目录；单独 clone 本仓库时省略该前缀。新课件唯一脚手架是 `lessons/_template/`，参考课件仅用于观察内容构图。

起点（按这个顺序）：
- **`curriculum/lessons/_template/`** — 内部脚手架（引擎单一来源 + 占位骨架）。**AI 在 monorepo 内起新 deck 一律从这里拷**（见「标准工作流」第 3 步，离线、含 `{{SLUG}}` 占位符），不要从某个具体 deck 拷，避免引擎 bug 漂移。
- **公开模板 repo `JR-Academy-AI/talk-deck`**（github.com/JR-Academy-AI/talk-deck，MIT，2026-05-29 上线）— 给**老师**用的对外版（同一套引擎 + 摄像头 + 匠人 logo，base 改相对路径、占位符填好可直接 build）。老师 `npx degit JR-Academy-AI/talk-deck my-talk` 或 GitHub "Use this template"，配 Claude Code/Cursor 照仓库内 `CLAUDE.md` 改内容。该外部模板是独立发布副本，当前版本一致性尚未验证；本仓库只以 `_template` 和 engine-manifest 为准，不从外部副本复制运行时。
- `curriculum/lessons/ai-new-jobs-talk/` — 38 页完整黄金范本，要看"成品长啥样 / 数据驱动页怎么写"时读它。
- `curriculum/lessons/ai-engineer-cohort-05-final/` — 当前课程视觉黄金范本。优先参考其 `DeckFrame`、网格纸画布、marker underline、圆角主面板、克制描边、品牌色偏移阴影与高密度中文排版；岗位页、系统图、事故诊断和逐周路线均已做多视口 QA。
- `curriculum/lessons/vibe-coding/` — Slidev (slides.md) 轻量替代范式（见文末「何时用 Slidev」）。

## 使用方法

```
/talk-deck ai-new-jobs-talk "AI 催生了哪些新岗位？" "60min / ~38页"
/talk-deck claude-code-intro "用 Claude Code 做项目"
```

---

## 🚨 硬性规则（先读，违反就重做）

1. **先写 PRD，再写代码**。`PRD.md` 必须含「整体节奏表（时间/章节/页数）」+「逐页 slide-by-slide spec」，在当前任务确认 PRD；用户已授权明确方案或修订范围时继续执行，不重复索要确认。（项目级 PRD-first 规则）
2. **数据零编造**。所有薪资/增长率/雇主/案例必须来自 `research/*.md` 或可引用源。缺字段就 **omit / 显示「数据不足」**，绝不用别国数据或估算补位。野生数据点必标 `sourceUrl`。
3. **设计语言锁死 JR Register B 课程视觉**：暖色网格纸、品牌四色、少量结构边框与无模糊偏移阴影。不要退回满屏方盒子的旧 Neo-Brutalism，也不混入 Anthropic 暖色系或通用 SaaS 卡片风。一个 deck 一套体系。
4. **禁止直角 UI 容器**。主面板、信息卡、流程节点、标签、按钮、引用框统一使用圆角；默认主面板 `22–24px`、卡片 `16–20px`、标签 `7–10px`、胶囊 `999px`。坐标轴、连接线、表格分隔线、代码字符边界等技术表达可以是直线，但承载内容的闭合容器不能是直角矩形。
5. **一文件一页**。每页一个 `src/components/slides/Xnn_Name.tsx`，禁止把多页塞进一个文件。
6. **设计画布固定 1600×900**，所有尺寸写绝对 px（由 SlideEngine 整体 scale 适配视口），不要写响应式断点。
7. **引擎文件只拷贝、不重写**。`SlideEngine.tsx` / `ui.tsx` / `CameraBubble.tsx` / `theme.ts` / `main.tsx` 是测过的运行时代码（含摄像头权限、流释放、键盘/触摸/滚轮、缩放等浏览器坑），**逐字从 `_template` 拷过去**，绝不"照描述重新实现"。要改引擎 → 改 `_template` 再同步。每次新写的只有内容层：`App.tsx` / `slides/*` / `data/*` / `PRD.md` / `research/*`。

---

## 技术栈（锁死）

| 项 | 选择 |
|---|---|
| 框架 | React 19 + TypeScript |
| 构建 | Vite 8（`@vitejs/plugin-react`） |
| 动画 | `framer-motion` ^12（唯一动画库） |
| 样式 | **inline style + `theme.ts` 令牌**，无 Tailwind / 无 CSS 框架 |
| 字体 | 本地 Fontsource 字体包，经 Vite 打包；生产课件不依赖远程字体服务 |
| 包管理 | bun（`bun.lock`） |
| 部署 | build → `dist/`，`base` 指向子路径 |

`package.json` scripts 固定：`dev` / `build`（`tsc -b && vite build`）/ `preview`。

`vite.config.ts` 的 `base` 必须按 slug 设子路径：
```ts
base: process.env.NODE_ENV === 'production' ? '/curriculum/lessons/{slug}/' : '/',
```

---

## 目录结构（照抄）

```
lessons/{slug}/
├── PRD.md                      # 节奏表 + 逐页 spec（先于代码）
├── research/                   # {us,cn,au,sg}-*.md 等原始数据源
├── index.html                  # 本地字体由 main.tsx 引入 + #root + 全局 reset，body 黑底 overflow:hidden
├── vite.config.ts              # base = /curriculum/lessons/{slug}/
├── public/                     # jr-logo.png 等静态资源（用 assetPath() 引）
└── src/
    ├── main.tsx                # createRoot → <App/>
    ├── App.tsx                 # import 所有 slide，<SlideEngine> 内按章节顺序排列
    ├── styles/theme.ts         # colors / fonts / border / shadow 令牌
    ├── components/
    │   ├── SlideEngine.tsx     # 放映引擎（照抄，见下）
    │   ├── ui.tsx              # 复用基元 + 动画 variants
    │   ├── slides/Xnn_*.tsx    # 一页一个组件
    │   └── (可选) DeepJobSlide.tsx 等数据驱动的「模板页」组件
    └── data/*.ts               # 真实数据 + TS interface（schema 注明数据来源 + 缺失策略）
```

---

## SlideEngine（仅复制 lessons/_template 的版本）

核心契约，改的时候别破坏：
- `DESIGN_WIDTH=1600 / DESIGN_HEIGHT=900`，`useSlideScale()` 取 `min(vw/W, vh/H)` 整体缩放，画布居中黑底。
- `children` 是 slide 数组，`current` 受控；切页 `AnimatePresence mode="wait"`，进/出 `x: ±80 + opacity`。
- 导航：← → ↑ ↓ Space 翻页，`F` 全屏，`V` 开关演讲者摄像头（见下；用 `V` 而非 `C`，避开 ⌘C/Ctrl+C 复制冲突，且监听已排除修饰键）；触摸横扫 >50px；滚轮带 700ms 节流。
- URL 同步 `?page=N`（1-based），`replaceState` + `popstate`，方便直接跳页 / 录播定位。
- 顶部进度条 + 右下 `NN / NN`（Space Mono, `mixBlendMode:difference`）+ 底部圆点导航 + 左右箭头按钮。
- 右上固定半透明品牌 logo（跟随画布一起 scale，`pointerEvents:none`）。

## 演讲者摄像头圆圈（录播露脸 · `CameraBubble.tsx`）

录播引流场景常要右下角露脸（对标 Slidev 的 Camera View）。React deck 自带组件，比 Slidev 更可控：
- `src/components/CameraBubble.tsx` —— `getUserMedia` → 圆形 `<video>` 浮层，**按 `V` 开关**（监听排除 ⌘/Ctrl/Alt，不抢复制粘贴）、可拖动、镜像、JR Neo-Brutalism 粗黑边 + 偏移硬阴影。
- 已在 `SlideEngine` 顶层 `<CameraBubble />` 渲染；它 `position: fixed` 固定在视口，**不跟 1600×900 画布一起 scale**（像 OBS 摄像头），开关/拖动不影响翻页。
- 摄像头流在关闭 / 组件卸载时会 `stop()`，无权限时红色提示一闪而过。

> 录播追求更好画质/构图时，仍可用 **OBS / Screen Studio** 录任意 deck；`CameraBubble` 是"零外部软件、浏览器内直接露脸"的轻量选项。

## ui.tsx（复用基元，新页优先用这些而不是裸 div）

布局：`Slide`（整页底色容器，默认 `colors.warmBg`）、`Inner`（90% 宽 maxWidth 1400，`center`/`split` 变体）、`Half`。标准课程内容页优先使用模板内的 `DeckFrame`，它已经统一章节标识、标题层级、marker underline、网格纸背景和画布装饰。
排版：`Title`（Bricolage 900，默认 64px）、`Subtitle`、`Highlight`（色块底标重点）、`Tag`。
动画/数据可视化：`CountUp`（rAF easeOutCubic 数字滚动）、`GrowBar`（条形图增长）、variants `springIn` / `slideFromLeft` / `slideFromRight`。
资源：`assetPath('jr-logo.png')` —— 用 `import.meta.env.BASE_URL` 拼 public 路径，dev/prod 都对。

`components/deck.tsx` 提供课程页视觉组合：
- `DeckFrame`：标准页头与统一画布。
- `Panel`：主教学对象，默认 22px 圆角和品牌色偏移阴影。
- `Label` / `NumberBadge`：章节标签与步骤编号。
- `AnimatedGroup`：统一入场节奏。
- `RoleFocusSlide`：岗位职责与面试追问的双栏版式。

优先复用这些组合，不要每页重新手写标题、背景、卡片和动画。只有内容关系确实不同才新增页面级布局。

> 新页里反复出现 ≥3 次的视觉模式 → 抽进 `ui.tsx` 或做成数据驱动模板组件（参考 `lessons/ai-new-jobs-talk/src/components/DeepJobSlide.tsx`），不要复制粘贴 style 链。

---

## theme.ts — JR Register B 课程设计令牌

```ts
export const colors = {
  red: '#ff5757', yellow: '#FFDE59', green: '#7ED957', blue: '#38B6FF',
  purple: '#CB6CE6', orange: '#FF914D', dark: '#10162f', warmBg: '#fff1e7',
  white: '#ffffff', black: '#000000', indigo: '#6366f1', /* …按需扩展分类色 */
} as const;
export const fonts = {
  heading: '"Bricolage Grotesque", "Noto Sans SC", sans-serif',
  body:    '"DM Sans", "Noto Sans SC", sans-serif',
  mono:    '"Space Mono", monospace',
} as const;
export const border   = `3px solid ${colors.black}`;
export const shadow   = `6px 6px 0px ${colors.black}`;
export const shadowSm = `4px 4px 0px ${colors.black}`;
export const radii = { panel: 24, card: 18, label: 8, pill: 999 } as const;
```

设计要点：浅色页优先使用暖色网格纸背景、黄色 marker underline、圆角白色主面板与品牌色偏移阴影。黑色结构线控制在 `2px` 为主，少数主视觉可用 `3px`；一屏只强调少量主教学对象，不让每个小元素都变成粗黑框。标题建议 48–62px，正文 20–27px，高密度页最低 17px；先拆页或改布局，再缩字。品牌饱和色用于信息分组，`warmBg` 暖底不要改成纯白。重点用 marker underline、圆角 `Label` 或少量色块，不用渐变、不用柔和 SaaS 风。

课程页的典型构图：
- 概念页：一个主命题配一张系统关系图或一个主面板。
- 岗位页：左侧职责和交付，右侧真实面试追问；正文要解释具体工作，不只堆英文能力词。
- 路线页：总览一页，详细内容按 3–6 个阶段拆页；每阶段写“课堂做什么”和“交付证据”。
- 高密度页：用颜色、字号和留白建立层级，卡片数量本身不能成为视觉结构。

视觉验收时搜索所有闭合内容容器的 `border`：只要它承担卡片、节点、按钮、标签或面板职责，就必须同时有合适的 `borderRadius`。不得只修改共享 `Card`，却在 slide 内继续手写无圆角的 `div` 卡片。

---

## slide 命名约定

`{前缀}{两位序号}{_PascalCaseName}.tsx`，序号决定章节归属，便于插页：
- `S01`–`Snn` 主线页；章节封面用 `C01_*Cover` / `Z01_*Cover` 等不同前缀分组。
- 转场页在主页后加 `b`：`S06_AIEngineer` → `S06b_AIEngineerTransition`。
- App.tsx 里按章节用注释分块 import + 排列（`{/* CH 2 · Tech Jobs */}`），顺序即放映顺序。

每个 slide 组件：`export default function Xnn_Name()`，根用 `<Slide bg={...}><Inner>…</Inner></Slide>`，元素用 `motion.*` + 递增 `delay`（0.15→0.3→…）做依次入场。

---

## data/*.ts — 数据纪律

- 每类数据一个文件 + 显式 TS `interface`，schema 注释写明**数据来源文件**和**缺失策略**。
- 可选字段（薪资/雇主/洞察）`?:`，没数据就不填；渲染层负责显示「数据不足 / 暂无该国数据」（参考 `DeepJobSlide` 的 `RegionCard` 空态）。
- 数据驱动的同构页（如 23 个岗位）→ 写一个模板组件吃 data，不要手写 23 个文件。

---

## 标准工作流

1. **PRD**：写 `PRD.md`——业务背景 + 学习目标 + 节奏表（时间/章节/时长/页数）+ 逐页 spec。依据当前任务中已确认的方案执行。
2. **research**：把每个数据点落到 `research/*.md`，标源。无源的论点删掉或降级为「观点」。
3. **scaffold**：`cp -R lessons/_template lessons/{slug}` → 全局替换占位符 `{{SLUG}}` / `{{TITLE}}`（`package.json` / `vite.config.ts` / `index.html`）→ `bun install`。引擎文件已随模板拷好，**不要重写**（见硬规则 6）。
4. **data**：把 research 提炼进 `data/*.ts`（带 interface + 缺失策略）。
5. **slides**：逐页写 `slides/Xnn_*.tsx`，同构页用模板组件。
6. **register**：在 `App.tsx` 按章节 import + 排列。
7. **verify**：`bun run dev` 走查每页（键盘翻页 + `?page=N`）→ `bun run build` 确认 tsc 通过。
8. **catalog**：新增、重做、迁移或显著更新 deck 时，必须在同一次修改中登记 `curriculum/lessons.html`，同步 `CHANGELOG.md`。每份独立 deck 一张卡，包含标题与课次（系列课明确写 W1 / W2 / W3 等）、形态/技术栈、讲师、时长、页数、跨课映射、线上入口和已有 PRD / runsheet / 源码链接；未部署也登记为 Local / Draft，替换的旧课件保留 Legacy。
9. **deploy**：build 出 `dist/`，部署到 `jracademy.ai/curriculum/lessons/{slug}/`，同时发布更新后的 `lessons.html`；Vite / Slidev 项目核对 `.github/workflows/deploy.yml` 的 build 与产物复制步骤。
10. **public read-back**：部署后在 `https://jracademy.ai/curriculum/lessons.html` 实际核对该卡片，从其线上入口打开课件，检查页数、封面和子路径资源。部署成功且线上课件核验后，将卡片状态改为「已部署」，发布并回读列表；清除「部署后 / 待部署」等过期文案。只部署 deck、只修改本地登记或只收到 HTTP 200 都不能声称线上列表已完成。

---

**发布范围以用户指令为准**：用户要求「只更新 / 提交代码、不部署」时，只完成本地修改、验证、登记与 commit，不 push、不触发发布流水线、不上传生产。未发布的新修订标为 Local / 待部署，并保留已上线版本的真实状态；不得为满足上述 deploy / public read-back 步骤擅自发布。

## 何时用 Slidev 替代（slides.md）

纯文字/代码、不需要精细动画与定制视觉的内部分享，用 `lessons/vibe-coding` 那套：`slides.md` + `style.css`（Slidev / markdown 驱动），成本低。
**对外讲座 / 引流素材 / 要数据可视化和品牌感的** → 一律用上面的 React deck 范式。

## 制作与验收工具

- 新课件用 `python3 scripts/create-talk-deck.py SLUG --title 标题 --instructor 讲师 --minutes 120`，只写新目录与 Local 登记，不发布；生成后完善 PRD、讲稿、工作单、来源表和 notes。
- 配套模板随 `lessons/_template/` 提供：`PRD.md`、`RUNSHEET.md`、`WORKSHEET.md`、`SOURCE_MAP.md`、`QA.md`。教学信息未确定时标待确认，不伪造时间、来源或验收。
- `bun run check:decks` 检查卡片结构；`python3 scripts/check-talk-decks.py --base REF` 检查该次变更的课件登记、入口、配套资料与部署配置。按用户要求，仅本地执行，不配置或触发 CI。
- `bun run qa:deck -- --url URL --output-dir ABS_PATH` 逐页、三档视口检查资源失败、控制台错误和文本裁切，生成截图与 JSON。页数从引擎 DOM 读取，不手填。机器检查后仍要目视核对文字、图表、顺序、Logo和内容来源。用户交付截图输出到 Downloads，内部报告放 `out/qa`。
- 模板 `engine-manifest.json` 记录引擎文件哈希。更新模板后运行 `python3 scripts/check-talk-decks.py --write-template-manifest`；已有课件用 `--engine-inventory` 报告一致/历史版本/漂移/未登记，不批量覆盖它们。新课件必须携带相同 manifest；确有运行时扩展须在 QA 中记录，并更新其实际文件哈希，不能假称仍与模板一致。
- 字体由本地 npm 包打包，授课前验证冷缓存断外网仍能加载课件；这不等于离线部署服务或缓存可供完全断网使用。
- 模板提供 N 讲师备注、P 全页打印、V 摄像头；备注从 `src/data/notes.ts` 按页读取。打印使用同一 React/HTML 内容，一页一张1600×900，PDF由浏览器另存到 Downloads。配合 reduced-motion 不播放入场动画；互动演示的打印状态需逐页审核。
- 登记结构与自动检查通过后仍按用户授权决定 commit、push、部署。main 会触发生产，要求不部署时只推非 main 分支。
