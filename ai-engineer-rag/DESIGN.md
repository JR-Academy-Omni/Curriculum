# AI Engineer 入门 — Design Spec

> 37 节视频 + 25 个 Lab + 5 节 AI Tutor·从会用到能构建
> 视觉系统所属：**工程 / 技术线**

本文档定义本课程的视觉主色与海报/Slide/页面应用规范。色卡来源：`curriculum/CLAUDE.md`、`curriculum/DESIGN.md`（JR 品牌四色 + Neo-Brutalism 风格）。

---

## 🎨 AI 出图 Prompt（市场 / 产品 copy & paste）

把下面这一整段粘贴给 Claude / GPT / Midjourney / DALL-E / Nano Banana 等任何 AI 模型，它就会按本课主题色出图。也可以在 `curriculum/theme-colors.html` 总览页一键复制。

```
设计任务：为「AI Engineer 入门」做配图 / 海报 / banner / 封面图。
课程定位：37 节视频 + 25 个 Lab + 5 节 AI Tutor·从会用到能构建（工程 / 技术线）

═══ 主题色（必须严格执行）═══
主色：#38B6FF（天蓝）
主色上的文字色：#000000
主色应占画面 ≥ 30%，用作大色块、标题底色或主背景

═══ 视觉风格 ═══
Neo-Brutalism 极简扁平：
- 所有元素 3px 纯黑（#000）边框
- 卡片 / 按钮 / 标签带 6px×6px 黑色硬阴影（box-shadow: 6px 6px 0 #000）
- 不要渐变、不要发光、不要拟物质感、不要 3D
- 转折硬朗、留白干脆、对比强烈

═══ 配色规则（搭配主色用）═══
JR 品牌四色（永远可用）：黑 #000000 / 白 #FFFFFF / 暖背景 #fff1e7 / 深色 #10162F

辅助色（只在指定场景用）：
- 代码高亮：#10162F
- 成功状态：#7ED957
- 警告/注意：#FF914D

═══ 严格避开的色 ═══
下列是其他课程的主色，海报放在一起会混淆品牌识别，本课禁止大面积使用：
- AI Engineer Bootcamp：#FF5757（旗舰直播版）
- AI Builder：#6366F1（进阶 Vibe Coding，靛蓝偏紫）
- OpenClaw Bootcamp：#2563EB（OpenClaw 蓝，更深）

═══ 字体 ═══
- 标题：粗体无衬线（Bricolage Grotesque / 思源黑体 Heavy）
- 中文正文：思源黑体 / 苹方
- 数字 / 数据：Space Mono / DM Sans
- 标题字号至少是正文的 3 倍

═══ 输出 ═══
- 如果是 Midjourney / DALL-E / Imagen / Nano Banana：直接出 PNG，画幅 3:4（小红书）或 9:16（视频号/抖音）
- 如果是 Claude / GPT 写 HTML：用 inline style，符合上述 Neo-Brutalism 规范，可直接 puppeteer 渲染
- 如果是 SVG：扁平矢量，路径全部带 stroke="#000" stroke-width="3"

```

---

## 主题色

| 属性 | 值 |
|---|---|
| **主色 (primary)** | `#38B6FF` |
| **色名** | 天蓝 |
| **主色上文字色** | `#000000` |

### 选色理由

AI Engineer 旗舰的「轻量自学版」。蓝色比红色更冷静，符合「视频+Lab 自学」的产品形态。

### 色卡

```
█████████████████████████  #38B6FF  (天蓝)
```

> 在 HTML/Slide 里使用时，以变量形式声明：`--theme-primary: #38B6FF;`

---

## 与同系/相邻课程的区分

为避免海报放在一起认错，本课主色与下列课程明确区隔：

| 相邻课程 | 主色 | 区分点 |
|---|---|---|
| AI Engineer Bootcamp | `#FF5757` | 旗舰直播版 |
| AI Builder | `#6366F1` | 进阶 Vibe Coding，靛蓝偏紫 |
| OpenClaw Bootcamp | `#2563EB` | OpenClaw 蓝，更深 |

---

## 辅助色 / 强调色

主色 + JR 品牌四色（黑 `#000` / 白 `#FFFFFF` / 暖背景 `#fff1e7` / JR 深色 `#10162F`）作为基础。其余强调色按下表使用：

| 用途 | 色值 | 备注 |
|---|---|---|
| 代码高亮 | `#10162F` |  |
| 成功状态 | `#7ED957` |  |
| 警告/注意 | `#FF914D` |  |

---

## 应用范围

| 触点 | 主色用法 |
|---|---|
| 小红书海报 (1242×1660) | 大块背景 / 标题 Highlight 块 |
| 朋友圈封面 | 标题底色 |
| MP 公众号文章封面 | 大色块 + 标题文字底色 |
| 视频号 / 抖音封面 (1080×1920) | 标题底色 |
| Slide Deck 章节封面 | `<Slide bg={theme.primary}>` |
| `public/curriculum.html` 顶部 banner | 整条 banner 背景 |
| 课程卡片 hover 描边 | `border: 3px solid {primary}` |
| 标签 / Tag | `<Tag bg={primary}>` |
| 数据图表主柱 | bar / line 主色 |

### Neo-Brutalism 默认外框

不论主色是什么，沿用 JR 品牌的 Neo-Brutalism 框架：

```css
border: 3px solid #000;
box-shadow: 6px 6px 0 #000;
/* hover: */
box-shadow: none;
transform: translate(6px, 6px);
```

---

## 禁忌

- ❌ 不要把主色用在正文长段落（仅用于标题 / 强调 / 标签 / 色块）
- ❌ 不要在主色背景上叠加另一个高饱和色（除非是已声明的强调对比色）
- ❌ 不要换成接近的色相（如把本课的橙改成 Adoption 的橙），保持课程识别度
- ❌ 海报不要让主色占比 < 20%，否则识别度归零
- ❌ 不要在同一张海报里同时使用本课主色和「相邻课程主色」——会让两节课看起来是同一节

---

## 落地检查清单

- [x] `public/outline.json` 顶层 `themeColor` 字段（已写入）
- [ ] `public/curriculum.html` 的 banner / H1 区域使用主色
- [ ] `public/poster.html`（如有）的封面色块改为主色
- [ ] Slide Deck 封面 slide bg 改为主色
- [ ] `curriculum/posters.html` 卡片的描边/底色匹配主色
- [ ] xhs-poster / mp-article / bootcamp-video 三个 skill 在生成时读取 `themeColor` 字段
