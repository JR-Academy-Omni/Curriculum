---
bootcamp: techscrum-devops
bootcampName: TechScrum DevOps 项目实训营
role: programmer
roleName: 程序员/工程师
painPoint: side-hustle
painPointName: 副业/自动化变现
format: hero
formatName: 课程详情页 hero
size: 1792x1024
displaySize: 1920x900
model: gpt-image-2
mode: Instant
lang: zh
version: 1
title: TechScrum DevOps 实训营（副业变现 hero · pipeline + invoice）
ctaText: ""
tags: [hero, 副业, IaC, pipeline]
---

# Programmer × 副业 × 课程详情页 Hero

> 模型：`gpt-image-2` · 模式：**Instant** · 比例 16:9

## 这张想表达什么

详情页 hero 克制美学。视觉锚点：**一份发票 + 一个绿色 ✓ 的 pipeline 截图**——无声地说"这套技能是能开发票的"。
不喊副业口号，让画面替它说。

## 海报上的中文文字

> 用法 A（推荐）：**0 字纯氛围图**，前端用真 H1 叠在左半边
> 用法 B：极简一行 headline + 角标

- **极简 headline（仅用法 B）**：把基建变成可开发票的技能
- **角标（仅用法 B）**：JR Academy · TechScrum DevOps 项目实训营

## 完整 Prompt

### 用法 A — 0 字纯氛围图

```
Model: gpt-image-2.
Aspect ratio: 16:9. Image size: 1792×1024 px. Mode: Instant.

Horizontal 16:9 editorial minimalist hero banner for a DevOps Bootcamp landing page.

Right 45% of canvas: a desk still-life on warm wooden surface. A printed paper invoice slightly tilted, showing a clean line item "DevOps Infrastructure Setup — AUD 2,000" in dark serif (small, suggestive only — no client name, no date). Beside it: a modern open laptop showing an abstract pipeline run UI with three completed stages and a single green checkmark at the end (sharp focus). Half-full coffee mug. A pen. A small office plant on the far edge. Soft warm window light from upper-right at low angle, long gentle shadows leftward. Photo-realistic premium magazine still-life, shallow depth of field, slight film grain, golden-hour mood. Text must be sharp and beautifully composed.

Left 55% of canvas (≈ 985px wide): intentionally empty — subtle gradient wash from #FFF1E7 (top) to slightly warmer cream (bottom), hint of warm light spill from the right. This zone will be overlaid with H1 by the frontend, so it MUST stay clean — no objects, no text, no patterns. This is a strict layout constraint.

Color palette: #FFF1E7 / #10162F / #FFB800 / #4FB477 / #444.

NO text overlay anywhere on the image except the small invoice line item. No watermarks. No logos. No people. No emojis. No futuristic/sci-fi aesthetic. The invoice must show ONLY the line item and "AUD 2,000" — no client name, no ABN, no date.
```

### 用法 B — 带极简 headline

```
[复制用法 A 全部内容，然后追加：]

Add bottom-left text overlay, 60px from canvas edge,
heavy bold Chinese sans-serif (思源黑体 Heavy style), color #10162F,
with generous letter spacing, in 1 line, reading:
"把基建变成可开发票的技能"

Add bottom-right corner, 40px from edge, tiny flat single-line text, color #444, reading:
"JR Academy · TechScrum DevOps 项目实训营"

Text must be sharp and beautifully composed. Simplified Chinese only.
Flat solid color, no stroke, no outline, no shadow on text.
```

## 备用变体

### v2 — Headline 切现金流叙事
> headline 换成 **「基建副业 · 一个项目顶一个月加班费」**

### v3 — 通用版（不带副业叙事）
> 删掉 invoice，换成 `a notebook with handwritten labels "Plan · Build · Deploy · Monitor · Sell" beside the laptop`. 视觉更通用。

## 出图 tips

- **关键检查**：左半边必须留空，append `LEFT 55% must remain EMPTY background only — no objects, no text, no diagram`
- **invoice 不能详细**：禁出现真实客户名 / ABN / 日期，append `the invoice must show ONLY a single line item and the AUD 2,000 figure — no client name, no ABN, no dates`
- **绿色 ✓**：偶尔被画成红色或灰色，append `the small checkmark must be in #4FB477 green color, indicating success`
- **如果整体太冷**：append `overall warm color temperature, golden-hour mood, 4500K white balance`
