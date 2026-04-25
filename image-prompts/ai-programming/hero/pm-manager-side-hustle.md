---
bootcamp: ai-programming
bootcampName: 人人都能学的 AI Coding 实战课
role: pm-manager
roleName: 产品/运营/管理岗
painPoint: side-hustle
painPointName: 副业增长（PM 自己 ship 不用求开发）
format: hero
formatName: 课程详情页 hero
size: 1792x1024
displaySize: 1920x900
model: gpt-image-2
mode: Instant
lang: zh
version: 1
title: 人人都能学的 AI Coding 实战课（PM 副业 hero · MVP stack badges）
ctaText: ""
tags: [hero, 详情页, PM, MVP-stack]
---

# PM Manager × Side Hustle × 课程详情页 hero

> 模型：`gpt-image-2` · 模式：**Instant** · 比例 16:9

## 这张想表达什么

详情页 hero。视觉锚点用**MVP 完整技术栈 5 个 badge**——告诉 PM：你做的不是 demo，是真正能用的产品。
- 前端页面 / 后台 CMS / 用户系统 / 数据库 / 部署上线

让访问者一眼看到课程交付的不是"hello world"，是**完整产品的所有组件**。

## 完整 Prompt

### 用法 A — 0 字纯氛围

```
Horizontal 16:9 hero banner (1792×1024), editorial minimalist style.

Right 45% of canvas: a clean flat-design grid of 5 rounded rectangle badges arranged in a tight row on warm cream background. Each badge is approximately 240×80 px size, with a small icon on the left and Chinese text on the right.

Badge 1 (warm yellow background): icon of a window outline, label "前端页面"
Badge 2 (sage green background): icon of a settings gear, label "后台 CMS"
Badge 3 (indigo blue background): icon of a person silhouette, label "用户系统"
Badge 4 (coral red #FF5757 background): icon of stacked database disks, label "数据库"
Badge 5 (peach orange background): icon of a cloud with up-arrow, label "部署上线"

Each badge has a soft drop shadow and clean rounded corners. Labels in heavy bold Chinese sans-serif, color #10162F dark navy.

Above the badges, a small thin label reading "Full MVP Stack", in dark gray #444 monospace style.

Left 55% of canvas: completely empty — calm gradient wash from off-white #FFF1E7 (top) to slightly warmer cream (bottom). MUST stay clean — no badges, no text in left half.

Premium editorial design, soft ambient light. Labels must spell exactly: "前端页面", "后台 CMS", "用户系统", "数据库", "部署上线". The header label must read "Full MVP Stack" in English exactly.

No watermark. No real brand logos. No people. No code text visible.
```

### 用法 B — 带极简 headline

```
[复制用法 A，然后追加：]

Bottom-left text overlay, 60px from canvas edge, heavy bold Chinese sans-serif (思源黑体 Heavy style), color #10162F, 1 line:
"PM 自己 ship · 5 周交付完整产品"

Bottom-right corner, 40px from edge, tiny text in #444:
"JR Academy · 人人都能学的 AI Coding 实战课"

Text must be sharp and beautifully composed. Simplified Chinese only. Flat solid color.
```

## 出图 tips

- **左空白铁律**：append `LEFT 55% must stay completely empty for frontend H1 overlay — no badges, no text bleeding into left half`
- **5 badge 顺序**：append `the five badges must align in this exact order left-to-right: 前端页面, 后台 CMS, 用户系统, 数据库, 部署上线`
- **如果只画了 4 或 6 个**：append `there must be exactly 5 badges, no more, no less`
- **如果颜色对不上**：append `badge colors must be: yellow, sage, indigo, coral red, peach, in this exact order`
