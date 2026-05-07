# Bootcamp Slide Design 规范（老师上手版）

这是 JR Academy 所有 Bootcamp Slide Deck 的统一设计规范。**复制 `ai-adoption-bootcamp/src/styles/theme.ts` 和 `ai-adoption-bootcamp/src/components/ui.tsx` 作为起点，不要从零造。**

---

## 🚨 硬性要求（不可妥协，违反会被打回）

| # | 要求 | 不可改 |
|---|------|--------|
| 1 | **画布固定 1920×1080（16:9）** | `<Slide>` 容器写死 `width: 1920, height: 1080`，SlideEngine 自动 scale 到屏幕。**禁止把 slide 容器改成 `100vw/100vh` 或别的比例**（4:3、9:16 都不行）。 |
| 2 | **内容用绝对像素，不用 vw/vh/百分比** | 因为画布是固定 1920×1080 被缩放，写 `vw` 在投影时会失真。字号、间距、宽度全部写 `px`。唯一例外是 `<Title>` 用 `clamp()`（已封装好）。 |
| 3 | **只能用 inline style** | 禁止 `styled-components`、`Tailwind`、`CSS Modules`、`@mui/material`、`antd` 等 UI 库。整个 deck 只引 `react` + `framer-motion` 两个运行时依赖。 |
| 4 | **Neo-Brutalism 视觉风格** | 所有卡片/按钮：黑色 3px 边框 + 偏移阴影 `6px 6px 0 #000`；hover 阴影消失 + 位移；**禁止圆角**（`border-radius: 0`）。 |
| 5 | **配色不超过 4 种主色** | JR 品牌色 `red / warmBg / dark` 必须保留，再加最多 1-2 个主题色（如 AI 课用 `indigo / teal`）。禁止彩虹屎调色。 |
| 6 | **字体只用 3 种** | 标题 `Bricolage Grotesque`、正文 `DM Sans`、数据/标签 `Space Mono`。中文 fallback 自动走 `Noto Sans SC`。**不要再引第四种字体**。 |
| 7 | **第一张是 Cover，最后一张是 CTA** | Cover：深色背景 + JR Logo + 大标题；CTA：深色背景 + 行动按钮 + 联系方式/二维码。中间内容 slide 在浅色（`warmBg / white`）和深色之间交替，避免视觉疲劳。 |
| 8 | **Slide 文件命名 `S01_Cover.tsx`、`S02_Problem.tsx`** | 两位数序号 + 下划线 + 描述。**禁止 `Slide1.tsx` / `cover-slide.tsx`** 这种乱命名 —— 翻页顺序靠文件名排序。 |

> **新手验收口诀**：浏览器全屏看 = 整张 slide 居中、无白边、无变形；缩窗口 = 整体等比缩小不裁剪。任何一条不满足说明 ratio 写错了。

---

## 5 分钟上手（复制粘贴起步）

```bash
# 1. 复制现有 bootcamp 作为模板
cp -r curriculum/ai-adoption-bootcamp curriculum/your-bootcamp
cd curriculum/your-bootcamp

# 2. 改 vite.config.ts 的 base 路径
# base: '/curriculum/your-bootcamp/'

# 3. 改 package.json 的 name 字段

# 4. 安装并启动
bun install
bun run dev   # http://localhost:5173/

# 5. 删 src/components/slides/S0*.tsx 里你不要的，按编号新建
```

**做完别忘**：在 `.github/workflows/deploy.yml` 加一段 `Build your-bootcamp` 步骤，否则推到 main 也不会上线（详见 `curriculum/CLAUDE.md` 强制规则 1）。

---

## 技术栈（只允许这些）

```
React 19 + TypeScript + Vite 8
framer-motion           # 动画
inline style            # 所有样式
bun                     # 包管理
```

**禁止用**：Next.js、styled-components、Tailwind、CSS Modules、Material UI、Ant Design、Chakra、Redux/Zustand、React Router、Axios、任何 CSS-in-JS 库。**只引 5 个 npm 包**（react, react-dom, framer-motion + 2 个 devDep 类型包）。

---

## 配色板

```typescript
// src/styles/theme.ts
export const colors = {
  red: '#ff5757',       // JR 品牌主色
  dark: '#10162f',      // 深色背景、按钮
  yellow: '#FFDE59',    // 强调、高亮
  green: '#7ED957',     // 成功、数据
  blue: '#38B6FF',      // 信息、链接
  purple: '#CB6CE6',    // 装饰
  orange: '#FF914D',    // 警告、次要强调
  warmBg: '#fff1e7',    // 默认浅色背景 ← JR 品牌背景
  darkBg: '#1a1a2e',    // 深色 slide 背景
  white: '#ffffff',
  black: '#000000',
  indigo: '#6366f1',    // AI/Tech 主题
  teal: '#10b981',      // AI/Tech 辅助
};
```

**用法**：Cover 用 `dark/black`；内容 slide 用 `warmBg/white`；CTA 用 `dark`；浅深交替不要连续 3 张同色。

---

## 字体

```typescript
export const fonts = {
  heading: '"Bricolage Grotesque", "Noto Sans SC", sans-serif',
  body: '"DM Sans", "Noto Sans SC", sans-serif',
  mono: '"Space Mono", monospace',
};
```

`index.html` 必须引入：
```html
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=DM+Sans:wght@400;500;600;700&family=Space+Mono:wght@400;700&family=Noto+Sans+SC:wght@400;500;700;900&display=swap" rel="stylesheet" />
```

| 用途 | 字号 | 字重 |
|------|------|------|
| 大标题（Cover/段标题）| `clamp(36px, 5vw, 64px)` | 900 |
| 副标题 | `clamp(16px, 2vw, 22px)` | 500 |
| 正文 | 14-16px | 400-500 |
| 标签 / Badge（mono）| 12-14px | 700 |
| 数据大字（统计页）| 36-56px | 900 |

---

## 现成 UI 组件（直接 import，不要重写）

从 `src/components/ui.tsx`：

### 布局
- `<Slide bg={color}>` — slide 容器（**已写死 1920×1080，别改**）
- `<Inner center>` — 内容居中容器
- `<Inner split>` + `<Half>` — 左右分栏
- `<Grid cols={3}>` — 网格

### 文字
- `<Title>` / `<Title white>` — 大标题
- `<Subtitle>` — 副标题
- `<Highlight color={bg}>` — 纯色背景高亮（如黄底强调词）
- `<BulletList items={[...]}>` — 带 `→` 前缀列表
- `<Tag bg={color}>` — 小标签 badge

### 卡片
- `<Card>` — 大卡片（3px 边框 + 6px 阴影 + hover 动画）
- `<CardSm>` — 小卡片（2px 边框 + 4px 阴影）

### 动画
- `<Stagger>` + `<StaggerItem>` — 子元素依次出现（0.08s stagger）
- `<Divider center>` — 标题下装饰横线

---

## 5 种 Slide 模式（直接套用）

### 1. Cover（封面，第 1 张）
深色背景 + 倾斜色块装饰 + JR Logo badge + 大号标题 + 黄色高亮关键词 + 副标题（borderLeft）+ 底部 mono 标签行。

### 2. 数据统计 Slide
`warmBg` 背景 + `<Inner center>` + `<Title>` + `<Divider center>` + `<Stagger>` 包 3-4 个 `<Card>`（每张大数字 56px / 标题 / 灰色说明）。

### 3. 左右对比 Slide
`white` 背景 + `<Inner split>` + 两个 `<Half>`：左半 `<Title> + <Divider> + 说明 + <Tag>`；右半多个 `<Card>` 堆叠 或 `<BulletList>`。

### 4. 网格卡片 Slide
浅色背景 + `<Inner center>` + `<Title>` + `<Divider center>` + `<Stagger>` 包 3-4 列 `<CardSm>`（emoji + 标题 + 内容）。

### 5. CTA 结尾（最后一张）
`dark` 背景 + 旋转圆圈装饰（infinite rotate）+ 大号标题 + 高亮关键词 + 半透明白色副标题 + 按钮组（黄色主按钮 + 白色边框次按钮）+ 底部数据指标行。

---

## SlideEngine 翻页操作（学员侧）

| 操作 | 快捷键 |
|------|--------|
| 下一页 | `→` / `↓` / `Space` / 滚轮 / 触摸左滑 |
| 上一页 | `←` / `↑` / 触摸右滑 |
| 全屏 | `F` |
| 跳转 | 点击底部导航点 |

Progress bar 颜色可主题化（`company-intro` 用 `red`，AI Adoption 用 `indigo`）。

---

## 文件结构（必须严格按这个）

```
your-bootcamp/
├── package.json            # 只有 5 个依赖
├── index.html              # 引 Google Fonts
├── vite.config.ts          # base: '/curriculum/your-bootcamp/'
├── tsconfig.json
├── tsconfig.app.json
├── public/
│   ├── outline.json        # 🔑 课程数据源（phases/lessons/steps）
│   ├── curriculum.html     # 课程概览静态页
│   ├── phase1.html ...     # 各 Phase 详情
│   ├── styles.css          # 静态页共享样式
│   └── images/
├── src/
│   ├── main.tsx
│   ├── App.tsx             # SlideEngine + 所有 slides 组装
│   ├── styles/theme.ts     # 颜色、字体、常量
│   └── components/
│       ├── SlideEngine.tsx # 翻页引擎（复制不改）
│       ├── ui.tsx          # 共享 UI 组件
│       └── slides/
│           ├── S01_Cover.tsx
│           ├── S02_Problem.tsx
│           ├── S03_...
│           └── S99_CTA.tsx
└── bun.lock
```

---

## ✅ 提交前自查 Checklist

- [ ] `<Slide>` 容器是 1920×1080（没动过）
- [ ] 所有字号、间距、宽度用 `px`，没有滥用 `vw/vh/%`
- [ ] 第一张是 Cover（深色背景 + JR Logo），最后一张是 CTA
- [ ] 配色 ≤ 4 种主色，浅深交替不连续 3 张同色
- [ ] 所有卡片有 `border: 3px solid #000` + 偏移阴影
- [ ] hover 效果：阴影消失 + `translate(4px, 4px)`
- [ ] 标题用 `clamp()` 响应式字号
- [ ] 数据/标签用 `Space Mono` 字体
- [ ] Slide 文件名是 `S01_xxx.tsx` 格式（两位数序号）
- [ ] `index.html` 引了 Google Fonts 4 个字体族
- [ ] `vite.config.ts` 的 `base` 路径正确
- [ ] `.github/workflows/deploy.yml` 加了 build + assemble 步骤
- [ ] `curriculum/posters.html` 注册了课程海报（marketing 强制）
- [ ] 浏览器全屏 + 缩窗口都不变形

---

## 部署

```
push 到 main 分支
  ↓
GitHub Actions 跑 deploy.yml
  ↓
bun run build 每个 bootcamp
  ↓
组装到 _site/<bootcamp>/
  ↓
SCP 到 nginx 服务器
  ↓
线上 https://jiangren.com.au/curriculum/<bootcamp>/
```

**部署前必做**：在 `deploy.yml` 加 `Build your-bootcamp` 步骤 + `Assemble output` 加 `cp -r your-bootcamp/dist/* _site/your-bootcamp/`，否则线上 404。

---

## 参考实现（直接抄）

| 项目 | 用途 |
|------|------|
| `presentations/company-intro/` | 最干净的模板，theme.ts + ui.tsx + SlideEngine.tsx 全套 |
| `curriculum/ai-adoption-bootcamp/` | 完整 Bootcamp 范例（slides + 静态 HTML 页） |
| `curriculum/ai-engineer-bootcamp/` | 12 周长课程范例 |

**问题排查**：投影变形 → 检查 `<Slide>` 是不是被改成了百分比/vw；字体走系统默认 → 检查 `index.html` 的 Google Fonts 链接是否正确；hover 不动 → 检查是否漏掉 framer-motion 的 `whileHover`。
