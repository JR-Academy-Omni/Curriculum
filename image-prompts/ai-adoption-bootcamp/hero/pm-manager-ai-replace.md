---
bootcamp: ai-adoption-bootcamp
bootcampName: AI Adoption Specialist Bootcamp
role: pm-manager
roleName: 部门经理 / Director / Change Lead
painPoint: ai-replace
painPointName: 被会带团队用 AI 的 manager 替代
format: hero
formatName: 课程详情页 hero
size: 1792x1024
displaySize: 1920x900
model: gpt-image-2
mode: Instant
lang: zh
version: 1
title: AI Champion 组织图 hero（org chart 上的红星节点）
ctaText: ""
tags: [hero, AI-Champion, 组织, manager]
---

# PM/Manager × AI 替代 × 课程详情页 hero

## 这张想表达什么

hero 用法 A 给前端 H1 留空。右侧画一张企业组织图：1 个 manager 节点、3 个团队节点，其中一个团队节点上有红星标"AI Champion"，旁边一个小卡片写"ADKAR · 培训 · 治理"。视觉传递：会用 AI 不够，要在组织里激活 Champion + 推变革管理才是 manager 的护城河。

## 完整 Prompt

### 用法 A — 0 字纯氛围

```
Horizontal 16:9 hero banner (1792×1024), editorial minimalist style.

Right 45% of canvas: a clean flat-design organizational diagram on cream background.

A single manager node at top — a rounded rectangle in solid red #FF5757 with tiny white text reading "Manager". Three thin lines drop down to three smaller team-member nodes, each a rounded rectangle in cream with a 1px dark grey border, labeled tiny in dark grey #444 from left to right: "Team A", "Team B", "Team C". A small red star sits on the upper-right corner of the "Team B" node, and a tiny chip-style label beside it reads "AI Champion" in red.

To the right of the org chart, a vertical strip of three small chip cards stacked, each rounded with a 1px grey border, labeled tiny: "ADKAR", "Training", "Governance". A thin red #FF5757 connector line links the manager node to this stack.

Soft drop shadows under each node and chip. Premium consulting-deck feel.

Left 55% of canvas: completely empty — calm gradient wash from off-white #FFF1E7 (top) to slightly warmer cream (bottom). MUST stay clean for frontend H1 overlay.

The labels must spell exactly: "Manager", "Team A", "Team B", "Team C", "AI Champion", "ADKAR", "Training", "Governance".

No watermark. No logos. No people. No emojis. No real company names. No real product UI. No photographic elements.
```

### 用法 B — 带极简 headline

```
[复制用法 A，然后追加：]

Bottom-left text overlay, 60px from canvas edge, heavy bold Chinese sans-serif (思源黑体 Heavy style), color #10162F, 1 line:
"会带 AI 落地的 manager 不会被替代"

Bottom-right corner, 40px from edge, tiny text in #444:
"JR Academy · AI Adoption Specialist Bootcamp"

Text must be sharp and beautifully composed. Flat solid color. The English "AI", "manager" must spell as written.
```

## 备用变体

### v2 — 替代关系对比
> 替换为：`two stacked rectangles side by side. Left labeled small "Manager · 不会带 AI", with a faded grey downward arrow next to it. Right labeled solid red "Manager · 带 AI Champion", with a small upward arrow. Cream background, premium editorial.`

### v3 — ADKAR 阶梯
> 替换为：`a 5-step horizontal arrow chain labeled small from left to right: "A · Awareness", "D · Desire", "K · Knowledge", "A · Ability", "R · Reinforcement". Last arrow tip in red #FF5757`

### v4 — 7 模块图
> 替换为：`seven small rounded chip cards arranged in a 3-3-1 layered stack, each labeled tiny: "Maturity", "Tools", "Pilot", "Training", "Governance", "Adoption", "ROI". The "Training" chip highlighted red #FF5757`

## 出图 tips

- **左 55% 必须空白**：append `LEFT 55% of canvas must be empty cream background only`
- **org chart 拓扑**：append `the org chart must show exactly 1 manager node at top connected by lines to exactly 3 team nodes below, no extra nodes`
- **红星位置**：append `the small red star must clearly sit on the upper-right corner of the "Team B" node, not on the manager node`
- **chip 拼写**：append `the chips must spell exactly: "ADKAR", "Training", "Governance", "AI Champion"`
- **不要画真品牌**：append `do not invent or render any company logo or software UI`
