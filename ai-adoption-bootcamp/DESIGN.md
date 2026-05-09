# AI Adoption Specialist Bootcamp — Design Spec

> 8 周·企业 AI 落地·从工具到组织级采纳
> 视觉系统所属：**入门 / 大众线**

本文档定义本课程的视觉主色与海报/Slide/页面应用规范。色卡来源：`curriculum/CLAUDE.md`、`curriculum/DESIGN.md`（JR 品牌四色 + Neo-Brutalism 风格）。

---

## 主题色

| 属性 | 值 |
|---|---|
| **主色 (primary)** | `#FF914D` |
| **色名** | JR 橙 |
| **主色上文字色** | `#000000` |

### 选色理由

企业职员的「职场暖色」——比 Essentials 的黄多一份成熟感，但不至于像红那么强势。

### 色卡

```
█████████████████████████  #FF914D  (JR 橙)
```

> 在 HTML/Slide 里使用时，以变量形式声明：`--theme-primary: #FF914D;`

---

## 与同系/相邻课程的区分

为避免海报放在一起认错，本课主色与下列课程明确区隔：

| 相邻课程 | 主色 | 区分点 |
|---|---|---|
| AI Essentials Bootcamp | `#FFDE59` | 前置入门课，黄色 |
| AI Programming | `#FF7B5A` | 同入门带的偏红版本 |
| AI Solo Founder | `#D7263D` | 更深的红，避免混淆 |

---

## 辅助色 / 强调色

主色 + JR 品牌四色（黑 `#000` / 白 `#FFFFFF` / 暖背景 `#fff1e7` / JR 深色 `#10162F`）作为基础。其余强调色按下表使用：

| 用途 | 色值 | 备注 |
|---|---|---|
| 强调/CTA | `#10162F` | 深夜蓝沉稳压色 |
| 数据/数字 | `#000000` |  |
| 成功状态 | `#7ED957` | JR 绿 |

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

- [ ] `public/outline.json` 顶层加 `themeColor: "#FF914D"` 字段
- [ ] `public/curriculum.html` 的 banner / H1 区域使用主色
- [ ] `public/poster.html`（如有）的封面色块改为主色
- [ ] Slide Deck 封面 slide bg 改为主色
- [ ] `curriculum/posters.html` 卡片的描边/底色匹配主色
- [ ] xhs-poster / mp-article / bootcamp-video 三个 skill 在生成时读取 `themeColor` 字段
