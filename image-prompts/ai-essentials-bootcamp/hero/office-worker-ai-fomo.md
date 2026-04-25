---
bootcamp: ai-essentials-bootcamp
bootcampName: AI Essentials Bootcamp
role: office-worker
roleName: 普通职场人（HR/财务/销售/教师/运营）
painPoint: ai-fomo
painPointName: AI FOMO（全公司都在用就我没用）
format: hero
formatName: 课程详情页 hero
size: 1792x1024
displaySize: 1920x900
model: gpt-image-2
mode: Instant
lang: zh
version: 1
title: AI Essentials Bootcamp（office-worker hero · 4 元素公式）
ctaText: ""
tags: [hero, office, prompt-formula]
---

# Office Worker × AI FOMO × 课程详情页 hero

> 模型：`gpt-image-2` · 模式：**Instant** · 比例 16:9

## 这张想表达什么

ai-essentials hero 视觉用 **4 元素 prompt 公式**（角色 / 任务 / 格式 / 约束）—— 这是课程招牌图，也是非技术受众第一眼就能理解的"AI 用法"。

## 完整 Prompt

### 用法 A — 0 字纯氛围

```
Horizontal 16:9 hero banner (1792×1024), editorial minimalist style.

Right 45% of canvas: a clean flat-design illustration of 4 stacked horizontal cards on cream background, each card labeled in small dark text in this order top to bottom:
"角色"
"任务"
"格式"
"约束"
Each card has an underline in different soft tone (muted blue, warm cream, indigo, peach). Soft drop shadow. Minimalist editorial design.

Left 55% of canvas: completely empty — calm gradient wash from off-white #FFF1E7 (top) to slightly warmer cream (bottom). MUST stay clean — no objects, no text.

Premium editorial design, soft ambient light, professional infographic feel. The Chinese labels "角色", "任务", "格式", "约束" must spell exactly. No watermark. No logos. No people.
```

### 用法 B — 带极简 headline

```
[复制用法 A，然后追加：]

Bottom-left text overlay, 60px from canvas edge, heavy bold Chinese sans-serif (思源黑体 Heavy style), color #10162F, 1 line:
"4 元素，从打开浏览器到工作里直接用"

Bottom-right corner, 40px from edge, tiny text in #444:
"JR Academy · AI Essentials Bootcamp"

Sharp text. Simplified Chinese. Flat solid color.
```

## 备用变体

### v2 — 时钟视觉
> 替换右侧 cards 为：`a flat-design clock face showing "30 min" highlighted as a wedge, with small text "every day" beside it. Cream background, minimalist editorial.`

### v3 — 4 周进度环
> 替换右侧为：`four colored circles (green / teal / indigo / orange) labeled inside "Week 1 / Week 2 / Week 3 / Week 4" with small descriptions below each: "从零", "公式", "工作", "进阶"`.

## 出图 tips

- **左空白铁律**：append `LEFT 55% must be empty background only, no cards in left half`
- **labels 拼写**：append `the Chinese characters 角色 任务 格式 约束 must render correctly`
- **如果 cards 太像 UI 截图**：append `flat illustrated cards, NOT screenshots of real software`
