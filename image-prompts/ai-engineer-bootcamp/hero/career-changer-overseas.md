---
bootcamp: ai-engineer-bootcamp
bootcampName: AI Engineer Bootcamp
role: career-changer
roleName: 转行/求职者
painPoint: overseas
painPointName: 海外求职
format: hero
formatName: 课程详情页 hero
size: 1792x1024
displaySize: 1920x900
model: gpt-image-2
mode: Instant
lang: zh
version: 1
title: AI Engineer Bootcamp（澳洲海外叙事 hero）
ctaText: ""
tags: [hero, 详情页, 海外, Sponsor]
---

# 转行求职 × 海外求职 × 课程详情页 hero

> 模型：`gpt-image-2` · 模式：**Instant** · 比例 16:9

## 这张想表达什么

针对中文站详情页的"海外求职"叙事 hero。视觉锚点是**澳洲清晨场景**：一杯 flat white、一份 contract、窗外是 Melbourne 街景。质感很 editorial，传递"这是真能上岸的赛道"。
左半边留给前端 H1（"匠人 AI Engineer Bootcamp"或"在墨尔本拿 Sponsor"）。

## 海报上的中文文字

> 用法 A（推荐）：**0 字纯氛围图**
> 用法 B：极简一行 headline + 角标

- **极简 headline（仅用法 B）**：在墨尔本，AI Engineer 是 Sponsor 最快通道
- **角标（仅用法 B）**：JR Academy · AI Engineer Bootcamp

## 完整 Prompt

### 用法 A — 0 字纯氛围图

```
Model: gpt-image-2.
Aspect ratio: 16:9. Image size: 1792×1024 px. Mode: Instant.

A horizontal 16:9 editorial minimalist hero banner for a Bootcamp landing page,
featuring a still-life on the right 45% of the canvas:
a clean café table by a window with morning Melbourne light streaming in.
On the table: a flat white coffee with subtle latte art,
an open leather notebook with handwritten labels "Context · RAG · Agent · Eval",
a folded laptop, a pair of glasses on the notebook.
Through the soft-bokeh window: a hint of Melbourne tram and brick buildings (very abstract,
no recognizable landmarks). Warm autumn morning light from the right.
Photo-realistic premium magazine still-life, shallow depth of field, slight film grain.

Composition: left 55% of canvas (≈ 985px wide) is intentionally empty —
calm subtle gradient wash from off-white #FFF1E7 (top) to slightly warmer cream (bottom),
with a hint of warm morning light spill from the right.
This left zone will be overlaid with H1 typography by the frontend,
so it MUST stay clean — no objects, no text, no patterns.

Color palette: #FFF1E7 (background), #10162F (notebook / shadows),
#FFB800 (warm morning light), #444 (handwritten labels on notebook).
Editorial photography, soft natural light, professional studio composition,
muted warm color temperature, golden hour Melbourne morning mood.

NO text overlay anywhere on the image. No watermarks. No logos. No people.
No emojis. No real Australian landmarks (no Flinders Street, no Opera House —
keep the window view abstract).
The LEFT 55% must remain empty background only — no objects allowed there.
This is a strict layout constraint.
```

### 用法 B — 带极简 headline

```
[复制用法 A 全部内容，然后追加：]

Add bottom-left text overlay, 60px from canvas edge,
heavy bold Chinese sans-serif (思源黑体 Heavy style for Chinese)
mixed with geometric bold sans-serif (Bricolage Grotesque style for English),
color #10162F, with generous letter spacing, in 1 line, reading:
"在墨尔本，AI Engineer 是 Sponsor 最快通道"

Add bottom-right corner, 40px from edge, tiny flat single-line text, color #444, reading:
"JR Academy · AI Engineer Bootcamp"

Text must be sharp and beautifully composed.
Mixed Chinese + English ("AI Engineer", "Sponsor") must render correctly.
Flat solid color, no stroke, no outline, no shadow on text.
```

## 备用变体

### v2 — 室内办公场景
> 把 café 场景换成：现代办公室一角，落地窗，简约木桌，窗外 generic 城市景。更"刚入职"质感。

### v3 — 通用版
> 删掉所有 Melbourne / 澳洲暗示，只剩干净书桌静物 → 跟 programmer-age-35/hero 复用同一张图。

## 出图 tips

- **合规**：不要出现具体的澳洲地标（Opera House / Flinders / Harbour Bridge）—— prompt 已 negative
- **如果咖啡杯偏 Starbucks logo**：append `coffee mug should be plain ceramic with no logos or text`
- **如果整体偏冷**：append `golden hour warm light, 4500K white balance, autumn morning mood`
