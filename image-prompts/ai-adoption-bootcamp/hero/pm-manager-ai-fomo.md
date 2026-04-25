---
bootcamp: ai-adoption-bootcamp
bootcampName: AI Adoption Specialist Bootcamp
role: pm-manager
roleName: 部门经理 / Director / Change Lead
painPoint: ai-fomo
painPointName: AI FOMO（公司在用 AI 但没人推得动）
format: hero
formatName: 课程详情页 hero
size: 1792x1024
displaySize: 1920x900
model: gpt-image-2
mode: Instant
lang: zh
version: 1
title: AI 采纳 8 周路线图 hero（成熟度阶梯 + ROI 仪表盘）
ctaText: ""
tags: [hero, AI采纳, 路线图, 8周]
---

# PM/Manager × AI FOMO × 课程详情页 hero

## 这张想表达什么

hero 用法 A 给前端 H1 留空。右侧画一张企业 AI 采纳的"路线图 + 仪表盘"组合图：4 个阶段的成熟度阶梯（试点 → 部署 → 治理 → 规模化）+ 一块小 ROI 仪表盘。配色克制，不喊口号，让人愿意停下来看。

## 完整 Prompt

### 用法 A — 0 字纯氛围

```
Horizontal 16:9 hero banner (1792×1024), editorial minimalist style.

Right 45% of canvas: a clean flat-design infographic on cream background combining two elements stacked vertically.

Top element — a 4-step staircase diagram, ascending from left to right, each step taller than the last. Each step labeled small in dark grey #444 from bottom to top: "Pilot", "部署 Deploy", "治理 Govern", "规模化 Scale". A small flag in red #FF5757 sits on the top step labeled tiny "ROI". Soft drop shadow under the staircase.

Bottom element — a small editorial-style dashboard card with three KPI tiles in a row, each rounded rectangle in cream with a 1px grey border. Tiles labeled small in dark grey: "成熟度", "采用率", "ROI". Each tile has a tiny upward sparkline trend below the label. Soft drop shadow under the card.

A thin red #FF5757 connector line links the staircase to the dashboard.

Premium consulting-deck feel. Clean, calm, professional.

Left 55% of canvas: completely empty — calm gradient wash from off-white #FFF1E7 (top) to slightly warmer cream (bottom). MUST stay clean for frontend H1 overlay.

The labels must spell exactly: "Pilot", "部署 Deploy", "治理 Govern", "规模化 Scale", "ROI", "成熟度", "采用率". The chip "ROI" on the flag must be uppercase English letters.

No watermark. No logos. No people. No emojis. No real company names. No real product UI. No photographic elements.
```

### 用法 B — 带极简 headline

```
[复制用法 A，然后追加：]

Bottom-left text overlay, 60px from canvas edge, heavy bold Chinese sans-serif (思源黑体 Heavy style), color #10162F, 1 line:
"从 Pilot 到 Scale 的 8 周"

Bottom-right corner, 40px from edge, tiny text in #444:
"JR Academy · AI Adoption Specialist Bootcamp"

Text must be sharp and beautifully composed. Flat solid color. The number "8" must be an Arabic numeral. The English "Pilot", "Scale" must spell as written with capital initial letters.
```

## 备用变体

### v2 — ADKAR 阶梯
> 替换 staircase 为：`a 5-step horizontal arrow chain labeled small from left to right: "A · Awareness", "D · Desire", "K · Knowledge", "A · Ability", "R · Reinforcement". Last arrow tip in red #FF5757. Cream background.`

### v3 — 成熟度 2x2 矩阵
> 替换 staircase 为：`a clean 2x2 maturity matrix on cream, axes labeled small "readiness" and "ambition", four quadrants labeled tiny "Explore", "Pilot", "Deploy", "Scale" with the top-right quadrant filled solid red #FF5757`

### v4 — 7 模块卡片排
> 替换为：`seven small chip cards arranged in a horizontal row, each labeled small: "Maturity", "Tools", "Pilot", "Training", "Governance", "Adoption", "ROI". The 7th card highlighted red #FF5757. Cream background.`

## 出图 tips

- **左 55% 必须空白**：append `LEFT 55% of canvas must be empty cream background only — no icons, no text, no decoration`
- **阶梯方向**：append `the staircase must clearly ascend from lower-left to upper-right, each step visibly taller than the one before`
- **"ROI" 大写**：append `"ROI" on the flag must be uppercase English letters, no Chinese variant`
- **chip 拼写**：append `the staircase labels must spell exactly: "Pilot", "部署 Deploy", "治理 Govern", "规模化 Scale" — each label combining one Chinese word and one English word with a single space between`
- **不要画真品牌**：append `do not invent or render any company logo, software UI, or product brand mark`
