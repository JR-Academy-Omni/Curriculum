---
bootcamp: ai-engineer-bootcamp
bootcampName: AI Engineer Bootcamp
role: programmer
roleName: 程序员/工程师
painPoint: age-35
painPointName: 35 岁焦虑
format: hero
formatName: 课程详情页 hero
size: 1792x1024
displaySize: 1920x900
model: gpt-image-2
mode: Instant
version: 2
title: AI Engineer Bootcamp（极简 hero）
ctaText: ""
tags: [hero, 详情页, 极简, 程序员]
---

# 程序员 × 35 岁焦虑 × 课程详情页 hero

> 模型：`gpt-image-2` · 模式：**Instant 即可** · 比例 16:9

## 这张想表达什么

详情页 hero 是"邀请进来"的那扇门，不是"叫卖"的那张海报。
左半边留空给前端 H1（"AI Engineer Bootcamp"），右半边一个有质感的物件锚点视觉。
不渲染焦虑、不喊口号，让看到的人感到「这门课是认真做的」。

## 海报上的中文文字

> 用法 A（推荐）：**0 字纯氛围图**，前端用真 H1 叠在左半边
> 用法 B：极简一行 headline + 角标

- **极简 headline（仅用法 B）**：从代码工程师，到 AI 工程师
- **角标（仅用法 B）**：JR Academy

## 完整 Prompt（gpt-image-2 优化版）

### 用法 A — 0 字纯氛围图（推荐）

```
Model: gpt-image-2.
Aspect ratio: 16:9. Image size: 1792×1024 px. Mode: Instant.

A horizontal 16:9 editorial minimalist hero banner for a Bootcamp landing page,
featuring a still-life arrangement on the right 45% of the canvas:
an open black moleskine notebook with handwritten diagram of nodes and arrows
labeled "Context", "RAG", "Agent", "Eval" (small handwriting, partially visible),
a half-full ceramic coffee mug with steam catching light,
a pair of glasses folded on the notebook,
a small mechanical keyboard partially in frame at the right edge.
Soft warm window light from upper-right at low angle, casting long gentle shadows
leftward into the negative space. Photo-realistic premium magazine still-life,
shallow depth of field, slight film grain.

Composition: left 55% of the canvas (≈ 1056px wide) is intentionally empty —
just a calm subtle gradient wash from off-white #FFF1E7 (top) to slightly warmer cream (bottom),
with a hint of warm light spill from the right-side window.
This left zone will later be overlaid with H1 typography by the frontend,
so it MUST stay clean — no objects, no text, no patterns there.
Right 45% holds the still-life with generous breathing room.

Color palette: #FFF1E7 (background), #10162F (deep shadows / notebook),
#FFB800 (warm window light hint), #444 (subtle handwriting tone on notebook).
Editorial photography, soft natural light, professional studio composition,
muted warm color temperature, golden hour mood.

NO text overlay anywhere on the image. No watermarks. No logos. No people.
No emojis. No screens or monitors or laptops in frame.
No saturated colors — keep palette muted and warm.
No futuristic / sci-fi aesthetic — keep it grounded and human.
The LEFT 55% must remain empty background only — no objects allowed there.
```

### 用法 B — 带极简 headline

```
[复制用法 A 的全部内容，然后追加：]

Add bottom-left text overlay, 60px from canvas edge,
geometric bold sans-serif (Bricolage Grotesque style), color #10162F,
with generous letter spacing, reading:
"从代码工程师，到 AI 工程师"

Add bottom-right corner, 40px from edge, tiny flat single-line text, color #444, reading:
"JR Academy · AI Engineer Bootcamp"

Text must be sharp and beautifully composed. Simplified Chinese only for the headline,
English-only for the brand tag. Flat solid color, no stroke, no outline, no shadow on text.

Update LAYOUT note: even with this overlay text, keep the upper-left area clean
so frontend can still overlay H1 there if needed.
```

## 备用变体

### v2 — 抽象代码视觉（不带物件）
> 把 STILL-LIFE 段整段替换为：
> ```
> An abstract close-up of an open laptop screen showing softly out-of-focus
> Python code with subtle bokeh, the screen glow as the only light source,
> a hand barely visible at the edge resting on the keyboard.
> ```
> 适合更"技术感"的 hero，但稍微多一点 AI 味，谨慎用。

### v3 — 城市夜景剪影
> STILL-LIFE 段替换为：
> ```
> A silhouette of a man with glasses looking out a window at a softly-lit
> city skyline at dusk, his back to camera, holding a coffee cup.
> The window reflects the warm room interior subtly.
> ```
> 适合"35 岁城市感"叙事，但出图人形容易翻车，谨慎用。

### v4 — 同款 Bootcamp 通用底图（不专属 35 岁）
> 把 handwritten labels 改为英文：`labeled "Foundation", "RAG", "Agent", "Eval"`
> 这样可以给整个 ai-engineer-bootcamp 详情页 hero 共用，不绑定单一痛点。

## 出图 tips

- **首要检查**：左半边是否真的留空了 —— 如果模型把视觉填满，加一句 `LEFT 55% must be EMPTY background only, do not place any object in the left half. This is a strict constraint.`
- **如果右侧物件太杂乱**：把 STILL-LIFE 物件减到 2 个（笔记本 + 咖啡）
- **如果整体偏冷**：追加 `overall warm color temperature, golden hour mood, 4500K white balance`
- **如果 frontend 叠 H1 后对比度不够**：前端给文字加微暗色描边/阴影，不要污染 prompt
- **比例不对（出成方图）**：在 prompt 第一行强调 `Aspect ratio: 16:9. This must be a horizontal 16:9 image, NOT square, NOT vertical.`

## 前端使用建议

```html
<!-- 用法 A（图无字，前端叠 H1） -->
<section class="hero" style="background-image: url('hero/programmer-age-35-v1.png');
  background-position: right center; background-size: cover;">
  <div class="hero-content"> <!-- 占左 50% -->
    <h1>AI Engineer Bootcamp</h1>
    <p>12 周技术 + 12 周 P3，从写代码到 AI 工程师</p>
    <a class="cta">免费咨询</a>
  </div>
</section>
```
