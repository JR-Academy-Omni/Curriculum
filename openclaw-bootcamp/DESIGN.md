# OpenClaw 4 周个人 AI 助手 Bootcamp — Design Spec

> OpenClaw·个人定制·从工具到日常
> 视觉系统所属：**合作品牌线（OpenClaw）**

本文档定义本课程的视觉主色与海报/Slide/页面应用规范。色卡来源：`curriculum/CLAUDE.md`、`curriculum/DESIGN.md`（JR 品牌四色 + Neo-Brutalism 风格）。

> ⚠️ **待核对**：此色为占位值，需要从 OpenClaw 官方 logo / 现有海报 (`curriculum/quest-posters.html`、`curriculum/posters.html`) 抓取真实品牌色后替换。

---

## 主题色

| 属性 | 值 |
|---|---|
| **主色 (primary)** | `#2563EB` |
| **色名** | OpenClaw 蓝 |
| **主色上文字色** | `#FFFFFF` |

### 选色理由

OpenClaw 自有品牌主色（待核对官方 logo 色，当前为占位）。和 Anthropic Cowork 系列拉开，避免联名混淆。

### 色卡

```
█████████████████████████  #2563EB  (OpenClaw 蓝)
```

> 在 HTML/Slide 里使用时，以变量形式声明：`--theme-primary: #2563EB;`

---

## 与同系/相邻课程的区分

为避免海报放在一起认错，本课主色与下列课程明确区隔：

| 相邻课程 | 主色 | 区分点 |
|---|---|---|
| OpenClaw Workshop | `#60A5FA` | 4 小时入门版 |
| Claude Cowork Workshop | `#D97757` | Anthropic 珊瑚 |
| AI Engineer 入门 (RAG) | `#38B6FF` | 天蓝，更亮 |

---

## 辅助色 / 强调色

主色 + JR 品牌四色（黑 `#000` / 白 `#FFFFFF` / 暖背景 `#fff1e7` / JR 深色 `#10162F`）作为基础。其余强调色按下表使用：

| 用途 | 色值 | 备注 |
|---|---|---|
| CTA | `#FFDE59` |  |
| Plugin / Skill 标签 | `#CB6CE6` |  |
| 数据 | `#10162F` |  |

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
- ❌ 不要在同一张海报里同时使用本课主色和"相邻课程主色"——会让两节课看起来是同一节

---

## 落地检查清单

- [ ] `public/outline.json` 顶层加 `themeColor: "#2563EB"` 字段
- [ ] `public/curriculum.html` 的 banner / H1 区域使用主色
- [ ] `public/poster.html`（如有）的封面色块改为主色
- [ ] Slide Deck 封面 slide bg 改为主色
- [ ] `curriculum/posters.html` 卡片的描边/底色匹配主色
- [ ] xhs-poster / mp-article / bootcamp-video 三个 skill 在生成时读取 `themeColor` 字段
