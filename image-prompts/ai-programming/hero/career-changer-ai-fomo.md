---
bootcamp: ai-programming
bootcampName: 人人都能学的 AI Coding 实战课
role: career-changer
roleName: 转行/求职者
painPoint: ai-fomo
painPointName: AI FOMO（不会编程怕被新职业淘汰）
format: hero
formatName: 课程详情页 hero
size: 1792x1024
displaySize: 1920x900
model: gpt-image-2
mode: Instant
lang: zh
version: 1
title: 人人都能学的 AI Coding 实战课（4-Phase 进度环 hero · 零基础到上线）
ctaText: ""
tags: [hero, 详情页, 4-Phase, 零基础]
---

# Career Changer × AI FOMO × 课程详情页 hero

> 模型：`gpt-image-2` · 模式：**Instant** · 比例 16:9

## 这张想表达什么

详情页 hero。视觉锚点用**4 个进度环 + 阶段标签**，对应课程真实的 4 个 Phase：
- Phase 0 = 工具准备
- Phase 1 = 产品设计 PRD
- Phase 2 = AI 编程实战
- Phase 3 = AI 功能进阶

让访问者一眼看到课程结构清晰、有节奏，不是"看 100 节录播"那种漂浮课。

## 完整 Prompt

### 用法 A — 0 字纯氛围

```
Horizontal 16:9 hero banner (1792×1024), editorial minimalist style.

Right 45% of canvas: a clean flat-design row of four progress circles on warm cream background. Each circle is approximately equal size, connected left-to-right by thin solid lines. Each circle has a number inside (1-4 in Arabic numerals) and a small label below.

Circle 1 (warm yellow #FFB800): big "0" inside, label below: "工具准备"
Circle 2 (soft sage green): big "1" inside, label below: "产品设计"
Circle 3 (indigo blue): big "2" inside, label below: "编程实战"
Circle 4 (coral red #FF5757): big "3" inside, label below: "AI 进阶"

Above the circles, a small thin label reading "Phase 0 → Phase 3", in dark gray #444 monospace style.

Each circle has a soft drop shadow. Numbers are heavy bold sans-serif inside circles.

Left 55% of canvas: completely empty — calm gradient wash from off-white #FFF1E7 (top) to slightly warmer cream (bottom). MUST stay clean — no objects, no text in left half.

Premium editorial design, soft ambient light. Numbers must render as Arabic numerals exactly: 0, 1, 2, 3. The Phase labels must spell exactly: "工具准备", "产品设计", "编程实战", "AI 进阶". The header label must read "Phase 0 → Phase 3" with the arrow as a thin right-pointing arrow character.

No watermark. No real brand logos. No people. No code text visible.
```

### 用法 B — 带极简 headline

```
[复制用法 A，然后追加：]

Bottom-left text overlay, 60px from canvas edge, heavy bold Chinese sans-serif (思源黑体 Heavy style), color #10162F, 1 line:
"零基础 · 4 个 Phase · 一个能上线的产品"

Bottom-right corner, 40px from edge, tiny text in #444:
"JR Academy · 人人都能学的 AI Coding 实战课"

Text must be sharp and beautifully composed. Simplified Chinese only. Flat solid color.
```

## 出图 tips

- **左空白铁律**：append `LEFT 55% must stay completely empty for frontend H1 overlay — no circles, no text bleeding into left half`
- **数字 0-3 顺序**：append `the four numbers must read 0, 1, 2, 3 from left to right, no skipping`
- **如果颜色顺序不对**：append `circle colors must be: yellow, sage green, indigo blue, coral red, in this exact left-to-right order`
- **如果出现 Phase 4**：append `there are exactly four circles, no fifth circle`
