---
bootcamp: ai-engineer-bootcamp
bootcampName: AI Engineer Bootcamp
role: programmer
roleName: 程序员/工程师
painPoint: ai-replace
painPointName: AI 替代焦虑
format: hero
formatName: 课程详情页 hero
size: 1792x1024
displaySize: 1920x900
model: gpt-image-2
mode: Instant
lang: zh
version: 1
title: AI Engineer Bootcamp（AI 替代叙事 hero）
ctaText: ""
tags: [hero, 详情页, AI替代, 程序员]
---

# 程序员 × AI 替代焦虑 × 课程详情页 hero

> 模型：`gpt-image-2` · 模式：**Instant** · 比例 16:9

## 这张想表达什么

详情页 hero 的"AI 替代焦虑"叙事版。和 age-35 hero 同款克制美学，但视觉锚点换成**两个时代的工具对比**：旧式纸质代码笔记 + 新型 Agent 流程图共存于同一桌面，象征"不是替代，而是叠加"。
不喊口号，让画面说"这门课是教你怎么把新工具叠到自己身上"。

## 海报上的中文文字

> 用法 A（推荐）：**0 字纯氛围图**，前端用真 H1 叠在左半边
> 用法 B：极简一行 headline + 角标

- **极简 headline（仅用法 B）**：会用 AI 的程序员，正在拉开代差
- **角标（仅用法 B）**：JR Academy · AI Engineer Bootcamp

## 完整 Prompt

### 用法 A — 0 字纯氛围图

```
Model: gpt-image-2.
Aspect ratio: 16:9. Image size: 1792×1024 px. Mode: Instant.

A horizontal 16:9 editorial minimalist hero banner for a Bootcamp landing page,
featuring a still-life on the right 45% of the canvas:
on the left part of the still-life zone, an open old-school programmer's reference book
showing typeset Python algorithm pages (slightly out of focus);
on the right part, a modern open laptop showing a clean Agent flow diagram
with nodes labeled "Plan", "Tool", "Memory", "Reflect" connected by arrows (sharp focus).
A half-full coffee mug between them. A pair of glasses. A pen on the book.
The two technologies coexist, no conflict — just side-by-side evolution.
Soft warm window light from upper-right at low angle, casting long gentle shadows
leftward into the negative space. Photo-realistic premium magazine still-life,
shallow depth of field, slight film grain.

Composition: left 55% of canvas (≈ 985px wide) is intentionally empty —
calm subtle gradient wash from off-white #FFF1E7 (top) to slightly warmer cream (bottom),
with a hint of warm light spill from the right.
This left zone will be overlaid with H1 typography by the frontend,
so it MUST stay clean — no objects, no text, no patterns.
Right 45% holds the dual-era still-life with generous breathing room.

Color palette: #FFF1E7 (background), #10162F (book typography / shadows),
#FFB800 (warm window light), #444 (subtle handwriting / labels on diagram).
Editorial photography, soft natural light, professional studio composition,
muted warm color temperature, golden hour mood.

NO text overlay anywhere on the image. No watermarks. No logos. No people.
No emojis. No saturated colors. No futuristic / sci-fi aesthetic.
The LEFT 55% must remain empty background only — no objects allowed there.
This is a strict layout constraint.
```

### 用法 B — 带极简 headline

```
[复制用法 A 全部内容，然后追加：]

Add bottom-left text overlay, 60px from canvas edge,
geometric bold sans-serif (Bricolage Grotesque style for English mix),
mixed with heavy bold Chinese sans-serif (思源黑体 Heavy style for Chinese),
color #10162F, with generous letter spacing, in 1 line, reading:
"会用 AI 的程序员，正在拉开代差"

Add bottom-right corner, 40px from edge, tiny flat single-line text, color #444, reading:
"JR Academy · AI Engineer Bootcamp"

Text must be sharp and beautifully composed. Simplified Chinese only.
Flat solid color, no stroke, no outline, no shadow on text.
```

## 备用变体

### v2 — 不带书，只用现代 stack
> 删掉 reference book 段，换成：`a laptop showing the Agent flow diagram and a notebook with handwritten labels "Context · RAG · Agent · Eval"`. 视觉更聚焦"现代 AI 工程"。

### v3 — 通用版（不带痛点叙事）
> 跟 programmer-age-35/hero 用法 A 完全相同。可作为本 bootcamp 详情页**默认 hero**复用，不绑定任何痛点。

## 出图 tips

- **关键检查**：左半边是否真的留空。模型容易把 still-life 铺满 → 强调 `LEFT 55% must be EMPTY background only, this is a strict constraint`
- **如果两个物件混淆**（书和笔记本糊在一起）：拉开距离 `with clear visual separation between the book and the laptop, both on the same desk surface`
- **如果整体太冷**：append `overall warm color temperature, golden hour mood, 4500K white balance`
