---
name: talk-deck
description: "把一个讲座/课程主题做成网页版 PPT（React 19 + Vite + framer-motion 的 SPA deck，部署到 jiangren.com.au/curriculum/lessons/{slug}/）。沿用 lessons/ai-new-jobs-talk 范式：1600×900 固定画布 SlideEngine + 一文件一页 slide 组件 + theme.ts 设计令牌 + data/*.ts 真实数据（绝不编造）+ JR Neo-Brutalism 设计语言。Use when user wants to build a web slide deck / 网页版讲座 / 在线 PPT for a talk, lecture, or bootcamp topic — NOT for static lesson HTML (use lesson-design) or xiaohongshu posters (use xhs-poster)."
argument-hint: "[slug] [讲座标题] [可选：时长/页数预算]"
---

# /talk-deck — 网页版讲座 PPT 生成器

把一个主题做成**可现场放映 + 可录播引流**的网页版 slides。技术栈与目录结构锁死，照抄 `curriculum/lessons/ai-new-jobs-talk` 这套范式即可，不要自创新框架。

起点（按这个顺序）：
- **`curriculum/lessons/_template/`** — 内部脚手架（引擎单一来源 + 占位骨架）。**AI 在 monorepo 内起新 deck 一律从这里拷**（见「标准工作流」第 3 步，离线、含 `{{SLUG}}` 占位符），不要从某个具体 deck 拷，避免引擎 bug 漂移。
- **公开模板 repo `JR-Academy-AI/talk-deck`**（github.com/JR-Academy-AI/talk-deck，MIT，2026-05-29 上线）— 给**老师**用的对外版（同一套引擎 + 摄像头 + 匠人 logo，base 改相对路径、占位符填好可直接 build）。老师 `npx degit JR-Academy-AI/talk-deck my-talk` 或 GitHub "Use this template"，配 Claude Code/Cursor 照仓库内 `CLAUDE.md` 改内容。引擎与 `_template` 保持一致，改引擎两边同步。
- `curriculum/lessons/ai-new-jobs-talk/` — 38 页完整黄金范本，要看"成品长啥样 / 数据驱动页怎么写"时读它。
- `curriculum/lessons/vibe-coding/` — Slidev (slides.md) 轻量替代范式（见文末「何时用 Slidev」）。

## 使用方法

```
/talk-deck ai-new-jobs-talk "AI 催生了哪些新岗位？" "60min / ~38页"
/talk-deck claude-code-intro "用 Claude Code 做项目"
```

---

## 🚨 硬性规则（先读，违反就重做）

1. **先写 PRD，再写代码**。`PRD.md` 必须含「整体节奏表（时间/章节/页数）」+「逐页 slide-by-slide spec」，让 Lightman sign-off 后才开 src。（项目级 PRD-first 规则）
2. **数据零编造**。所有薪资/增长率/雇主/案例必须来自 `research/*.md` 或可引用源。缺字段就 **omit / 显示「数据不足」**，绝不用别国数据或估算补位。野生数据点必标 `sourceUrl`。
3. **设计语言锁死 JR Neo-Brutalism**（黑 3px 边框 + 偏移硬阴影 + 品牌四色），不混入 Anthropic 暖色系或别的体系。一个 deck 一套体系。
4. **一文件一页**。每页一个 `src/components/slides/Xnn_Name.tsx`，禁止把多页塞进一个文件。
5. **设计画布固定 1600×900**，所有尺寸写绝对 px（由 SlideEngine 整体 scale 适配视口），不要写响应式断点。
6. **引擎文件只拷贝、不重写**。`SlideEngine.tsx` / `ui.tsx` / `CameraBubble.tsx` / `theme.ts` / `main.tsx` 是测过的运行时代码（含摄像头权限、流释放、键盘/触摸/滚轮、缩放等浏览器坑），**逐字从 `_template` 拷过去**，绝不"照描述重新实现"。要改引擎 → 改 `_template` 再同步。每次新写的只有内容层：`App.tsx` / `slides/*` / `data/*` / `PRD.md` / `research/*`。

---

## 技术栈（锁死）

| 项 | 选择 |
|---|---|
| 框架 | React 19 + TypeScript |
| 构建 | Vite 8（`@vitejs/plugin-react`） |
| 动画 | `framer-motion` ^12（唯一动画库） |
| 样式 | **inline style + `theme.ts` 令牌**，无 Tailwind / 无 CSS 框架 |
| 字体 | Google Fonts，`index.html` 里 `<link>` 引入 |
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
├── index.html                  # Google Fonts <link> + #root + 全局 reset，body 黑底 overflow:hidden
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

## SlideEngine（直接复制 ai-new-jobs-talk 版，按需改 logo/品牌色）

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

布局：`Slide`（整页底色容器，默认 `colors.warmBg`）、`Inner`（90% 宽 maxWidth 1400，`center`/`split` 变体）、`Half`。
排版：`Title`（Bricolage 900，默认 64px）、`Subtitle`、`Highlight`（色块底标重点）、`Tag`。
动画/数据可视化：`CountUp`（rAF easeOutCubic 数字滚动）、`GrowBar`（条形图增长）、variants `springIn` / `slideFromLeft` / `slideFromRight`。
资源：`assetPath('jr-logo.png')` —— 用 `import.meta.env.BASE_URL` 拼 public 路径，dev/prod 都对。

> 新页里反复出现 ≥3 次的视觉模式 → 抽进 `ui.tsx` 或做成数据驱动模板组件（参考 `DeepJobSlide.tsx`），不要复制粘贴 style 链。

---

## theme.ts — JR Neo-Brutalism 设计令牌

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
```

设计要点：黑 3px 边框 + 偏移硬阴影（无模糊）、品牌饱和色块、`warmBg` 暖底（不要纯白）、巨字标题、英文职位/公司名保留 + 正文地道中文。重点用 `Highlight` 色块或 `Tag` 标，不用渐变、不用柔和 SaaS 风。

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

1. **PRD**：写 `PRD.md`——业务背景 + 学习目标 + 节奏表（时间/章节/时长/页数）+ 逐页 spec。等 sign-off。
2. **research**：把每个数据点落到 `research/*.md`，标源。无源的论点删掉或降级为「观点」。
3. **scaffold**：`cp -R lessons/_template lessons/{slug}` → 全局替换占位符 `{{SLUG}}` / `{{TITLE}}`（`package.json` / `vite.config.ts` / `index.html`）→ `bun install`。引擎文件已随模板拷好，**不要重写**（见硬规则 6）。
4. **data**：把 research 提炼进 `data/*.ts`（带 interface + 缺失策略）。
5. **slides**：逐页写 `slides/Xnn_*.tsx`，同构页用模板组件。
6. **register**：在 `App.tsx` 按章节 import + 排列。
7. **verify**：`bun run dev` 走查每页（键盘翻页 + `?page=N`）→ `bun run build` 确认 tsc 通过。
8. **deploy**：build 出 `dist/`，部署到 `jiangren.com.au/curriculum/lessons/{slug}/`（检查 base 子路径资源 404）。

---

## 何时用 Slidev 替代（slides.md）

纯文字/代码、不需要精细动画与定制视觉的内部分享，用 `lessons/vibe-coding` 那套：`slides.md` + `style.css`（Slidev / markdown 驱动），成本低。
**对外讲座 / 引流素材 / 要数据可视化和品牌感的** → 一律用上面的 React deck 范式。
