# 品牌风格基底（Brand Style）

> 所有 prompt **必须**遵循这份基底，避免不同 bootcamp 风格漂移、品牌不一致。
> 模型相关的写法规范见 [`gpt-image-2-guide.md`](gpt-image-2-guide.md)。

---

## 配色

### 主色板（Hex 必须直接写进 prompt）

| 用途 | Hex | 关键词 |
|------|-----|--------|
| 主红 | `#FF5757` | 强调、CTA、品牌点缀 |
| 深蓝黑 | `#10162F` | 文字、背景对比 |
| 米白 | `#FFF1E7` | 主背景、留白 |
| 暖黄 | `#FFB800` | 次强调（仅必要时） |

### 辅助灰阶
- 正文灰：`#444`
- 浅灰描边：`#DDD`
- 浅灰底：`#F5F0EA`

> **铁律**：写 prompt 时**直接写 hex** `#FF5757`，不要写 "red"。模型对 "red" 的理解是 #E60012 番茄红，会偏品牌色。

---

## 字体感觉

> ChatGPT 的图片模型并不能真的指定字体名，但你可以**描述字体气质**让它选对。

| 用途 | 描述（写进 prompt） |
|------|-------------------|
| 中文大标题 | `heavy bold Chinese sans-serif, 思源黑体 Heavy / 苹方 Bold style` |
| 中文正文 | `clean Chinese sans-serif, 苹方 Regular style` |
| 英文标题 | `bold geometric sans-serif, Bricolage Grotesque style` |
| 数字 / 代号 | `monospace, Space Mono style` |

**禁忌**：
- ❌ 衬线宋体（除非品牌专门要"权威感"）
- ❌ 手写体 / 卡通体
- ❌ 描边镂空字（廉价感）

---

## Logo / 品牌角标

> **不要让模型画 logo**。模型画 logo 等于乱来。

**正确做法**：
```
Bottom-right corner: small flat tag with text "JR Academy · AI Engineer Bootcamp",
in #10162F on #FFF1E7 background, no graphic logo, just clean text in a thin border.
```

**禁忌**：
- ❌ `add JR Academy logo` —— 会画一个完全不像的塑料 logo
- ❌ `with company branding` —— 含糊，必出彩虹渐变 emoji
- ❌ 任何"watermark"字眼 —— 会强制把字打成半透明

---

## 视觉语言

### 总基调（所有 bootcamp 通用）
- **真实 / 不悬浮**：照片质感优先于插画
- **有人味**：场景里出现真人 / 真物件 / 真书桌，不要"科技概念图"
- **冷静中带烟火**：基色冷（深蓝黑），点缀色暖（红 / 黄）
- **Neo-Brutalism 余味**：黑边 + 偏移阴影，但**只在文字卡片上用**，不要给整张图加描边

### 三种风格变体（按场景选）

**A. 写实生活流**（小红书最常用）
```
Photo-realistic, slight film grain, like an iPhone candid photo,
warm desk lamp / natural window light,
slightly imperfect composition (off-center is fine).
```

**B. 极简编辑流**（hero 最常用）
```
Editorial minimalist, lots of negative space, subtle gradient background,
single anchor object or silhouette, brand color accent.
```

**C. 冲突大字报流**（朋友圈封面最常用）
```
Bold poster style, single dominant subject (face / hand / object),
high contrast, dramatic light, large overlapping Chinese typography.
```

---

## 已知坑与对策（gpt-image-2）

### 中文渲染

| 症状 | 对策 |
|------|------|
| 错字 / 缺字 | 把那段中文用引号单独成行；减少同图中文段数 ≤ 5 段 |
| 字偏小看不清 | 字号关键词从 "large" → "extra large" / "huge headline" |
| 字挤一起 | 显式说 `with generous letter spacing and line height` |
| 繁体出来 | 显式说 `simplified Chinese only` |
| 字带描边/阴影 | 显式说 `flat solid color, no stroke, no shadow` |

### 真人脸

| 症状 | 对策 |
|------|------|
| 塑料感 / AI 一眼味 | 加 `candid iPhone photo, slight grain, natural skin texture` |
| 五官诡异 | 让人侧身 / 背身 / 只露手 / 只露半脸；避免正面大特写 |
| 表情夸张 | 显式说 `neutral focused expression, not exaggerated` |

### 排版

| 症状 | 对策 |
|------|------|
| 文字盖在主体上看不清 | 把文字单独放进 `clean white card / dark band` 区块 |
| 整体太满 | 显式说 `30% negative space, breathing room` |
| 颜色偏离品牌 | 把 hex 写在每段文字描述里，不只在 style 段 |

---

## 红线（合规）

不要在 prompt 里出现下列承诺类话术：

| ❌ 禁止 | ✅ 替代说法 |
|--------|------------|
| "100% 上岸" | "上岸率高 / 高就业率" |
| "保证年薪 30W" | "毕业生平均薪资 / 学员晒过 offer" |
| "包就业 / 包推荐" | "1v1 求职辅导 / 内推机会" |
| "学不会退全款" | "学习保障机制" |
| "全网最低价 / 全网第一" | "性价比 / 高口碑" |
| 具体公司名 + offer 截图 | 用马赛克 / 模糊处理，或写 "FAANG offer" 这类泛指 |

---

## Prompt 结构模板（所有 prompt 复用）

```
[FORMAT]
Create a {orientation} {ratio} poster ({size}px), {platform_style}.

[LAYOUT]
Top X%: {visual zone}.
Bottom Y%: {text card zone}.

[VISUAL]
{Scene subject} in {environment}, {lighting}, {camera style},
{specific details about what's in the frame}.

[TEXT OVERLAY] (Chinese, must render exactly as written)
- Top zone, {size keyword} bold {font_family}, {hex color}:
  "{exact Chinese line 1}"
- Below, {size keyword} {font_family}, {hex color}:
  "{exact Chinese line 2}"
- Bottom card, three lines (each ≤ 14 chars):
  "✓ {bullet 1}"
  "✓ {bullet 2}"
  "✓ {bullet 3}"
- Bottom-right corner small tag: "{brand mark}"

[STYLE]
Color palette: {#hex1} / {#hex2} / {#hex3}.
{Style variant A/B/C keywords}.
{Specific details about texture, grain, lighting mood}.

[NEGATIVE]
No watermarks. No graphic logos. No fake brand marks.
No English text overlay (unless specified). No emojis in image.
Simplified Chinese only. Flat solid colors, no gradients on text.
```
