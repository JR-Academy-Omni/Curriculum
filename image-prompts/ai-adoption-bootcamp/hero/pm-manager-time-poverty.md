---
bootcamp: ai-adoption-bootcamp
bootcampName: AI Adoption Specialist Bootcamp
role: pm-manager
roleName: 部门经理 / Director / Change Lead
painPoint: time-poverty
painPointName: 每个会都讨论 AI 没结论
format: hero
formatName: 课程详情页 hero
size: 1792x1024
displaySize: 1920x900
model: gpt-image-2
mode: Instant
lang: zh
version: 1
title: 8 周输出时间轴 hero（每周交付物）
ctaText: ""
tags: [hero, 8周, 时间轴, deliverable]
---

# PM/Manager × Time Poverty × 课程详情页 hero

## 这张想表达什么

hero 用法 A 给前端 H1 留空。右侧画一张 8 周时间轴：每周一个圆圈节点 + 一个交付物 chip（评估报告 / 工具选型 / Pilot 计划 / 培训方案 / 治理框架 / ROI 报告 / 互审 / Demo Day）。视觉传递：会议讨论换成有 deadline 的输出，每周强制交一段。

## 完整 Prompt

### 用法 A — 0 字纯氛围

```
Horizontal 16:9 hero banner (1792×1024), editorial minimalist style.

Right 45% of canvas: a clean flat-design 8-week horizontal timeline on cream background.

Eight numbered circle nodes in a row, evenly spaced, connected by a thin horizontal line. Each circle filled cream with a 1px dark grey border, containing a small Arabic numeral from 1 to 8. The 8th circle is filled solid red #FF5757 with a small white "8" inside.

Below each circle, a tiny chip-style deliverable label in dark grey #444, written vertically with one short label per circle, in order from left to right: "Maturity", "Tool Select", "Pilot", "Training", "Governance", "ROI", "Peer Review", "Demo Day". Each chip rounded with a 1px grey border, soft drop shadow.

A small red chevron arrow points from circle 8 to a bigger card on the far right labeled tiny "完整 AI 采纳方案" — a rounded rectangle in cream with a 1px red border.

Premium consulting-deck feel.

Left 55% of canvas: completely empty — calm gradient wash from off-white #FFF1E7 (top) to slightly warmer cream (bottom). MUST stay clean for frontend H1 overlay.

The labels must spell exactly: "Maturity", "Tool Select", "Pilot", "Training", "Governance", "ROI", "Peer Review", "Demo Day", "完整 AI 采纳方案". The digits 1 through 8 must be Arabic numerals.

No watermark. No logos. No people. No emojis. No real company names. No real product UI. No photographic elements.
```

### 用法 B — 带极简 headline

```
[复制用法 A，然后追加：]

Bottom-left text overlay, 60px from canvas edge, heavy bold Chinese sans-serif (思源黑体 Heavy style), color #10162F, 1 line:
"8 周从讨论到交付"

Bottom-right corner, 40px from edge, tiny text in #444:
"JR Academy · AI Adoption Specialist Bootcamp"

Text must be sharp and beautifully composed. Flat solid color. The digit "8" must be Arabic numeral.
```

## 备用变体

### v2 — Phase 折叠图
> 替换为：`a 4-section horizontal phase strip labeled small from left to right: "Phase 1 · Tools", "Phase 2 · Scenarios", "Phase 3 · Adoption", "Phase 4 · Capstone". Each section in cream with 1px grey border, the 4th section highlighted red #FF5757 with a small chip "Demo Day" attached`

### v3 — 周报时间轴
> 替换为：`8 small horizontal bars stacked vertically, each labeled "Week 1" through "Week 8" in dark grey, with a small red checkmark on each bar's right edge. Cream background.`

### v4 — 输出物堆叠
> 替换为：`a vertical stack of 6 small documents labeled tiny: "成熟度报告", "工具选型矩阵", "Pilot 计划", "治理框架", "ROI 计算", "Demo Day Deck". The bottom document highlighted red #FF5757 with a small star`

## 出图 tips

- **左 55% 必须空白**：append `LEFT 55% of canvas must be empty cream background only`
- **8 个圆圈数字 1-8**：append `there must be exactly 8 circle nodes with Arabic numerals 1, 2, 3, 4, 5, 6, 7, 8 in order from left to right`
- **第 8 个圆圈红填充**：append `only the 8th circle should be filled solid red #FF5757; circles 1 through 7 are cream with grey borders`
- **chip 拼写**：append `the deliverable chips must spell exactly: "Maturity", "Tool Select", "Pilot", "Training", "Governance", "ROI", "Peer Review", "Demo Day"`
- **不要真品牌**：append `do not invent or render any company logo, software UI, or product brand mark`
