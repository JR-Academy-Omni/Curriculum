# gpt-image-2 写 prompt 终极指南

> **本仓库所有 prompt 必须按本指南写法。** 不再用 gpt-image-1 / 4o image / DALL-E 3 的旧写法。

- 适用模型：**`gpt-image-2`**（OpenAI ChatGPT Images 2.0）
- 模型发布：2026-04-21
- 信息更新：2026-04-25（基于 OpenAI 官方公告 + 多家 review）

---

## 1. gpt-image-2 是什么 · 不是什么

### ✅ 它是
- OpenAI 的**第三代**图片模型（继 DALL-E 3 → gpt-image-1 / 1.5 → gpt-image-2）
- **第一个原生带 reasoning（"Thinking"）的图片模型** —— 它会先"想"再画
- 一个能把**中文 / 日韩 / 印地语**写到~99% 准确的模型
- 能一次性出**最多 8 张前后连贯**图（同人物、同物件、同色板）的模型
- 在 Image Arena 一发布就 +242 分领跑（史上最大领先）

### ❌ 它不是
- 不是 DALL-E 3（已被替换）
- 不是 gpt-image-1（已被替换，但 API 仍可调老版本）
- 不是 Midjourney —— **电影感 / 胶片感 / 镜头细节** 控制力不如 MJ
- 不是 Nano Banana —— 比它贵，但质量更高
- 不是万能 logo 复刻器 —— 品牌 logo 仍要后期合成

---

## 2. 关键参数（写 prompt 必须显式指定）

### 2.1 模型 & 尺寸 & 比例

| 参数 | 值 | 备注 |
|------|------|------|
| API model | `gpt-image-2` | 写在 prompt 开头第一行作为标签（写不写都行，但便于识别） |
| 最大分辨率 | 2560×1440（2K，experimental） | 一般用不到，1024 系列最稳 |
| 标准尺寸 | `1024×1024` / `1792×1024` / `1024×1792` | 平台 API 推荐 |
| 比例范围 | **3:1 到 1:3** | 超出会被裁切或报错 |
| 单次出图数 | 1–8 | n=1 最快，n>1 需 Thinking 才有连贯性 |

### 2.2 我们三种格式 → gpt-image-2 参数

| 我们的 format | 我们写的尺寸 | 实际下到 gpt-image-2 用什么尺寸 | 比例描述 |
|--------------|-------------|----------------------------|---------|
| `xhs` | 1242×1660 | **1024×1792**（3:4 竖版，最接近） | aspect ratio 3:4 |
| `wechat-cover` | 1080×1260 | **1024×1792** 出图后裁/缩到 1080×1260 | aspect ratio approx 4:5 |
| `hero` | 1920×900 | **1792×1024**（接近 16:9） | aspect ratio 16:9 |

> **铁律**：**每个 prompt 必须显式写一行 `Aspect ratio: X:Y.`**（在 prompt 前 50 词内出现），否则模型默认 1:1 出方图。

### 2.3 两种调用模式

| Mode | 谁能用 | 速度 | 适用 | 我们怎么用 |
|------|-------|------|------|-----------|
| **Instant** | 所有 ChatGPT 用户（含免费） | 快（~3-5s） | 单图、快速试错 | 大部分场景默认 |
| **Thinking** | Plus / Pro / Business / Enterprise | 慢（15-30s） | 多图连贯、复杂排版、长文字、需 web search | xhs 长文案 + 多 bullet 时用 |

> 在 ChatGPT 网页端：右下角模式选择器切「Thinking」。
> 我们的 xhs 格式（5 段文字）建议**直接用 Thinking mode**，准确率显著高。

---

## 3. ⚡ 五条铁律（违反了大概率出错图）

### 铁律 1：前 50 词承担 80% 的权重

模型对 prompt 的**首 50 词权重最高**。把最重要的东西放最前面：

✅ **正确顺序**（前 50 词内）：
1. 模型/格式声明（"Aspect ratio 3:4 vertical poster"）
2. 主题 / 主体（"Chinese male programmer mid-30s"）
3. 风格基调（"photo-realistic, slight film grain, candid iPhone shot"）
4. **海报上要出现的核心标题文字**（"with large red Chinese text 35岁前端"）

❌ **错误**：先写 200 字背景故事，最后才说"哦对了画一个程序员"

### 铁律 2：用结构公式，不用关键词堆

OpenAI 官方推荐的结构（按这个顺序写）：

```
[Style/Medium] + [Subject] + [Environment/Setting] + [Lighting] + [Composition] + [Technical Specs]
```

✅ 范例：
> Editorial photo-realistic poster (Style/Medium) of a Chinese programmer mid-30s (Subject) sitting at a home desk at night with dual monitors (Environment), warm desk lamp from camera-left casting amber glow (Lighting), three-quarter back view with shallow depth of field, generous negative space at top (Composition), aspect ratio 3:4, 1024×1792, sharp focus, slight film grain (Technical Specs).

❌ 错误（关键词堆）：
> programmer, 35yo, monitors, code, ChatGPT, glasses, hoodie, dark, night, masterpiece, 8K, ultra realistic, best quality

### 铁律 3：文字必须用直接引号 + 提前指令

gpt-image-2 文字准确率高，但**前提是你得告诉它要写什么字**。

✅ 正确写法：
```
Place large bold red Chinese text reading "35岁前端，开始学 RAG"
in the upper third of the canvas. Place smaller dark gray Chinese subtitle
reading "写了 8 年代码，第一次怕被 AI 替代" directly below.
Text must be sharp and beautifully composed.
```

铁则：
- **每段中文用 `"..."` 包起来**（直接引号，不用「」「」斜体等）
- **每段单独成一句**说明：在哪里 + 什么色 + 多大 + 写什么
- **每行字数 ≤ 14**（中文）—— 超过容易被模型自己折行
- 每段加一句 `Text must be sharp and beautifully composed.`（**官方实测可提升准确率到 95%+**）

### 铁律 4：每个 prompt 必须显式写比例

```
Aspect ratio: 3:4. Image size: 1024×1792.
```

写在 prompt 前 50 词内。**不写默认 1:1**。

### 铁律 5：用电影语言，不用形容词清单

模型理解"导演级"语言比形容词清单好得多。

✅ 电影语言：
> "Lit by a single warm desk lamp from camera-left, with deep shadows falling across the right side of the desk. Shallow depth of field, focus on the keyboard, monitors slightly out of focus."

❌ 形容词清单：
> "beautiful, 8K, ultra detailed, masterpiece, best quality, dramatic lighting, cinematic"

> ⚠️ **从 Midjourney / DALL-E 3 时代沿袭的"魔法关键词"（masterpiece、8K、ultra realistic、best quality）在 gpt-image-2 上几乎无效，反而稀释信号。删掉。**

---

## 4. 标准 prompt 骨架（本仓库所有 prompt 复用）

```
[META — 写在最前 50 词内]
Create a {orientation} {ratio} poster for {platform_style}.
Aspect ratio: {X:Y}. Image size: {W×H}px.
Mode: {Instant / Thinking}.

[STRUCTURE FORMULA — 按顺序展开]
Style/Medium: {photo-realistic / editorial minimalist / bold poster / ...}
Subject: {主体描述 — 人物 / 物件 / 场景}
Environment: {主体所在的环境}
Lighting: {光源方向 / 色温 / 强度}
Composition: {构图分区 + 留白比例}
Technical: {景深 / 颗粒感 / 焦点 / 镜头感}

[TEXT OVERLAY — 用引号锁字]
Place {position} {size keyword} bold {script} text in {hex color}, reading:
"{exact text 1}"

Place {position} {size keyword} {script} subtitle in {hex color}, reading:
"{exact text 2}"

[Optional bullet block]
Three short lines, each preceded by a "✓" mark, in {hex color}:
"✓ {bullet 1, ≤ 14 chars}"
"✓ {bullet 2, ≤ 14 chars}"
"✓ {bullet 3, ≤ 14 chars}"

[Optional CTA]
Bottom CTA strip, solid {hex} background, white bold text reading:
"{≤ 12 chars CTA}"

[Optional brand mark]
Bottom-right corner, tiny flat text reading "{brand}", color {hex}.

Text must be sharp and beautifully composed. All text in simplified Chinese only.

[STYLE PALETTE]
Color palette: {#hex1} (primary), {#hex2} (accent), {#hex3} (background).
{One sentence about overall mood / film stock / time of day}.

[NEGATIVE CONSTRAINTS]
No watermark. No cartoon style. No graphic logos. No fake brand marks.
No emojis embedded in image. No text overlay other than what's specified above.
No traditional Chinese — simplified only. No gradients on text. No outline/stroke on text.
```

---

## 5. 中文渲染专项（gpt-image-2 强项 + 坑）

### ✅ gpt-image-2 中文已经很强
- 标题、副标题、bullet：**95%+ 第一次就对**
- 简体 / 繁体 / 日韩字符都支持
- 颜色、粗细、位置：模型理解很好

### ⚠️ 仍然存在的坑

| 症状 | 原因 | 对策 |
|------|------|------|
| 中文字偶尔变形 / 错字 | 字数超过 14 字 / 一张图字段超过 5 段 | 拆分文字、单独一句锁字 |
| 出来繁体 | 没显式说 simplified | 加 `simplified Chinese only` |
| 标点丢失 / 错误标点 | 模型对中文标点不稳 | 不用复杂标点（。、""），用空格或换行 |
| 字体气质偏离 | 没说字体 | 写 `bold heavy Chinese sans-serif, 思源黑体 Heavy style` |
| 字大小不统一 | 没写"统一字号" | 显式说 `consistent font size for all bullets` |
| 字加了奇怪描边/阴影 | 模型自由发挥 | 显式 `flat solid color, no stroke, no outline, no shadow on text` |

### 📋 一段中文文字的标准写法（复制即用）

```
Place [position] [size] bold [script] [color] text, reading:
"中文内容 ≤14字"

Text must be sharp and beautifully composed.
Simplified Chinese only. Flat solid color. No stroke or shadow on text.
```

具体例子：
```
Place upper-third center, extra-large heavy bold Chinese sans-serif (思源黑体 Heavy style),
color #FF5757, with generous letter spacing, reading:
"35岁前端，开始学 RAG"

Text must be sharp and beautifully composed. Simplified Chinese only.
Flat solid color. No stroke. No outline. No shadow on text.
```

---

## 6. Reasoning（Thinking）模式：什么时候用

### 用 Thinking 的场景
- ✅ **xhs 长文案**（标题 + 副标 + 3 bullet + CTA = 5 段）
- ✅ **多图一致性**（同一系列 3 张连贯海报）
- ✅ **复杂排版**（左右分栏、多图层、特殊版式）
- ✅ **需要 web search**（比如 prompt 里说"按今天的 OpenAI 官网风格"）

### 用 Instant 的场景
- ✅ **wechat-cover 大字报**（只有 1 行标题）
- ✅ **hero 极简图**（0-1 行字）
- ✅ **快速试错 / 改 v2/v3 变体**

### 切换方式
- ChatGPT 网页 / 桌面端：右下角模式选择器
- API：`reasoning_effort: "low" | "medium" | "high"`（high = Thinking）

---

## 7. 常见错误对照（Migration from old habits）

| 旧习惯（gpt-image-1 / DALL-E 3 时代） | gpt-image-2 正确做法 |
|----------------------------------|------------------|
| `8K, masterpiece, best quality, ultra realistic` | 删掉。这些词在 image-2 上无效 |
| 关键词堆：`programmer, code, dark, glasses, ...` | 用完整自然句：`A Chinese programmer in his mid-30s sitting at...` |
| 不写 aspect ratio，靠模型猜 | 显式 `Aspect ratio: 3:4. Image size: 1024×1792.` |
| 中文文字直接塞进描述里："写'35岁'" | 用直接引号 + 单独一句：`reading: "35岁前端"` |
| `add JR Academy logo` | `corner tag with text "JR Academy"` |
| 把所有重点放最后压轴 | 前 50 词放最重要的：subject + style + 主标题文字 |
| `--ar 3:4` (Midjourney 语法) | gpt-image-2 不认 MJ flag，用自然语言 `Aspect ratio: 3:4` |
| `((emphasis))` (Stable Diffusion 语法) | gpt-image-2 不认权重括号，删掉 |

---

## 8. 出图后必检清单

每张 ChatGPT 出来的图，按这 6 条**逐条**检查：

- [ ] **比例对吗？**（是 3:4 / 16:9 / 9:11，不是被画成方图？）
- [ ] **每段中文都准确吗？**（错字 / 漏字 / 多字 / 折行错位？）
- [ ] **品牌色对吗？**（#FF5757 不是 tomato red、#10162F 不是普通黑）
- [ ] **文字位置对吗？**（标题在顶 / bullet 在卡里 / CTA 在底？）
- [ ] **没有"AI 一眼味"吗？**（塑料感人脸、彩虹绒毛、6 根手指、假 logo？）
- [ ] **角标对吗？**（"JR Academy · {Bootcamp Name}" 是否完整、位置对）

任何一条不过 → 用「备用变体 v2/v3」或微调对应那段重出。

---

## 9. 当模型死活出不对怎么办

按这个顺序救：

1. **拆分**：把一段 prompt 拆成多段，每段处理一件事（一段写画面，一段写文字 1，一段写文字 2…）
2. **缩短**：删掉所有形容词清单、所有"masterpiece/8K"垃圾词，只保留信息
3. **提前**：把出错的元素移到 prompt 开头前 50 词
4. **强化**：在出错段落末尾加 `This must be exactly as described.`
5. **降级**：把人脸改成"侧身/背身/只露手"，把复杂场景改成"flatlay top-down shot"
6. **切 Thinking**：如果用的是 Instant，切到 Thinking 重试
7. **改对话**：在 ChatGPT 里基于上一张图直接说"把标题改成 'XXX'，其它不变" —— image-2 的 conversational edit 是它的强项

---

## 10. 本仓库 prompt 文件的标准头部（强制）

每个 `.md` 文件的英文 prompt 部分，必须以这一段开头：

```
Model: gpt-image-2
Aspect ratio: {X:Y}.
Image size: {W×H}px.
Mode: {Instant / Thinking}.
```

这四行**必须在 prompt 前 4 行**，确保前 50 词权重内出现。

---

## 11. 引用 / 参考资料

- [OpenAI 官方公告: Introducing ChatGPT Images 2.0](https://openai.com/index/introducing-chatgpt-images-2-0/) (2026-04-21)
- [Build Fast with AI: Full Developer Breakdown](https://www.buildfastwithai.com/blogs/chatgpt-images-2-0-gpt-image-2-2026)
- [The New Stack: OpenAI now "thinks" before it draws](https://thenewstack.io/chatgpt-images-20-openai/)
- [PixVerse: Prompt Guide and Use Cases](https://pixverse.ai/en/blog/gpt-image-2-review-and-prompt-guide)
- [TechCrunch: New Images 2.0 model surprisingly good at text](https://techcrunch.com/2026/04/21/chatgpts-new-images-2-0-model-is-surprisingly-good-at-generating-text/)

---

## 12. 本指南维护

- **谁能改**：写 prompt 的人发现新规律就更新（feedback 累计 5 次以上稳定的规律才进 §3-§9）
- **怎么改**：直接编辑本文件，git commit 即可
- **不写什么**：
  - 不写 OpenAI API 调用代码（这不是 SDK 文档）
  - 不写"如何申请 API 密钥"（这不是入门教程）
  - 不写具体某张海报的内容（那是 prompt 文件的事）
