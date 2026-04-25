---
bootcamp: techscrum-devops
bootcampName: TechScrum DevOps 项目实训营
role: programmer
roleName: 程序员/工程师
painPoint: overseas
painPointName: 澳洲求职/Sponsor 通道
format: hero
formatName: 课程详情页 hero
size: 1792x1024
displaySize: 1920x900
model: gpt-image-2
mode: Instant
lang: zh
version: 1
title: TechScrum DevOps 实训营（澳洲技能稀缺 hero）
ctaText: ""
tags: [hero, 详情页, DevOps, 澳洲求职]
---

# Programmer × 澳洲求职 × 课程详情页 Hero

> 模型：`gpt-image-2` · 模式：**Instant** · 比例 16:9

## 这张想表达什么

详情页 hero 克制美学。视觉锚点：**Pipeline 流程图静物 + 一份带 ✓ 印章的简历**——象征"做完这个项目，简历就有真东西"。
不喊口号，让画面说"这门课产出的是写得进简历的项目经验"。

## 海报上的中文文字

> 用法 A（推荐）：**0 字纯氛围图**，前端用真 H1 叠在左半边
> 用法 B：极简一行 headline + 角标

- **极简 headline（仅用法 B）**：7 周做完 1 个真商业 DevOps 项目
- **角标（仅用法 B）**：JR Academy · TechScrum DevOps 项目实训营

## 完整 Prompt

### 用法 A — 0 字纯氛围图

```
Model: gpt-image-2.
Aspect ratio: 16:9. Image size: 1792×1024 px. Mode: Instant.

Horizontal 16:9 editorial minimalist hero banner for a DevOps Bootcamp landing page.

Right 45% of canvas: a desk still-life on warm wooden surface. Modern open laptop showing an abstract 3-stage pipeline labeled "Build" "Test" "Deploy" with a small green checkmark at the end (sharp focus, labels small and suggestive). Printed paper resume beside it with a small red ink stamp reading "Project Done" in dry serif (slightly out of focus). Half-full coffee mug. A pen. Soft warm window light from upper-right at low angle, long gentle shadows leftward. Photo-realistic premium magazine still-life, shallow depth of field, slight film grain, golden-hour mood. Text must be sharp and beautifully composed.

Left 55% of canvas (≈ 985px wide): intentionally empty — subtle gradient wash from #FFF1E7 (top) to slightly warmer cream (bottom), hint of warm light spill from the right. This zone will be overlaid with H1 by the frontend, so it MUST stay clean — no objects, no text, no patterns. This is a strict layout constraint.

Color palette: #FFF1E7 / #10162F / #FFB800 / #FF5757 / #444.

NO text overlay anywhere on the image. No watermarks. No logos. No people. No emojis. No futuristic/sci-fi aesthetic. No real AWS/Azure/HashiCorp brand marks. Pipeline node labels are simple text-only — no AWS/Azure/Jenkins icons.
```

### 用法 B — 带极简 headline

```
[复制用法 A 全部内容，然后追加：]

Add bottom-left text overlay, 60px from canvas edge,
heavy bold Chinese sans-serif (思源黑体 Heavy style for Chinese characters)
mixed with bold geometric sans-serif for digits,
color #10162F, with generous letter spacing, in 1 line, reading:
"7 周做完 1 个真商业 DevOps 项目"

Add bottom-right corner, 40px from edge, tiny flat single-line text, color #444, reading:
"JR Academy · TechScrum DevOps 项目实训营"

Text must be sharp and beautifully composed. Simplified Chinese only for the Chinese characters.
The numbers "7" and "1" must render as Arabic numerals.
The English "DevOps" must spell exactly.
Flat solid color, no stroke, no outline, no shadow on text.
```

## 备用变体

### v2 — 不带 resume，纯 pipeline
> 删掉 resume + 印章段，换成：`a notebook with handwritten labels "Plan · Build · Test · Deploy · Monitor" beside the laptop`. 视觉更纯 DevOps 流程。

### v3 — 通用版（不带痛点叙事）
> 跟用法 A 完全相同，可作为本 bootcamp 详情页**默认 hero** 复用，不绑定任何痛点。

### v4 — 切监控视角
> Pipeline 换成 abstract Grafana-style dashboard with 3 mini line charts (no real numbers, no real Grafana branding). 强调"7 周也学会监控 + 告警"。

## 出图 tips

- **关键检查**：左半边是否真的留空。模型容易把 still-life 铺满 → 强调 `LEFT 55% must be EMPTY background only, this is a strict constraint`
- **印章不能太大**：否则会盖住 resume 内容，append `the red ink stamp must be small, occupying less than 15% of the resume area`
- **diagram 节点不要画品牌图**：append `pipeline nodes are simple rounded rectangles only, no AWS / Azure / Jenkins icons`
- **如果整体太冷**：append `overall warm color temperature, golden-hour mood, 4500K white balance`
