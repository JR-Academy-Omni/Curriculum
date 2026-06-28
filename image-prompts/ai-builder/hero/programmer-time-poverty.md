---
bootcamp: ai-builder
bootcampName: Vibe Coding 大师课
role: programmer
roleName: 程序员/工程师
painPoint: time-poverty
painPointName: 时间不够用（重复活儿吃掉一半时间）
format: hero
formatName: 课程详情页 hero
size: 1792x1024
displaySize: 1920x900
model: gpt-image-2
mode: Instant
lang: zh
version: 1
title: Vibe Coding 大师课（PRD 到上线 hero · 5-step pipeline）
ctaText: ""
tags: [hero, 详情页, 极简, pipeline]
---

# Programmer × 时间不够用 × Hero

## 完整 Prompt

### 用法 A — 0 字纯氛围

```
Horizontal 16:9 hero banner (1792×1024), editorial minimalist style.

Right 45% of canvas: a clean flat-design horizontal pipeline diagram on cream background.
Five rounded rectangle nodes connected left to right by simple thin arrows.
Each node uses a different muted color (left to right: soft peach, warm orange, indigo, teal, soft green).
Inside each node, a small label in dark text:
"PRD"
"Skill"
"Agent"
"Test"
"Ship"
A small AI cursor sparkle icon hovers above the third node.
Soft drop shadow under each node, minimalist editorial design, plenty of breathing room.

Left 55% of canvas: completely empty — calm gradient wash from off-white #FFF1E7 (top) to slightly warmer cream (bottom). MUST stay clean for frontend H1 overlay.

Premium editorial design, soft ambient light. Labels must spell exactly: PRD, Skill, Agent, Test, Ship. The label "PRD" must be three uppercase letters. No watermark. No logos. No people. No real flags.
```

### 用法 B — 带极简 headline

```
[复制用法 A，然后追加：]

Bottom-left text overlay, 60px from canvas edge, heavy bold Chinese sans-serif (思源黑体 Heavy style), color #10162F, 1 line:
"从 PRD 到上线 · 113 节课 · 5 个项目"

Bottom-right corner, 40px from edge, tiny text in #444:
"JR Academy · Vibe Coding 大师课"

Sharp text. Flat solid color. Numbers "113" and "5" must be Arabic numerals.
```

## 备用变体

### v2 — 三工具 logo-less badges
> 右侧把 5 节点 pipeline 换成 3 个圆角徽章并排："Claude Code" / "Cursor" / "Codex"，每个徽章下方一个小小的检查标记 ✓，强调三工具一起教。

### v3 — agent.md 抽象元素
> 右侧换成"一张打开的极简笔记本图层，上面一段 markdown 文字 # agent.md，下方几行 - tool: ... 列表（缩略不读取）"，更技术圈调调。

## 出图 tips

- **左 55% 必须空**：append `the entire left 55% of the canvas must remain empty, only the soft cream gradient — absolutely no text, no decoration, no shape on the left side`
- **5 节点的 label 必须按顺序**：append `the five labels from left to right must be exactly: PRD, Skill, Agent, Test, Ship — in this order`
- **如果 "Skill" 和 "Test" 互换位置**：换 v2 三工具 badges 版本，节点更简单
- **不要画键盘 / 显示器**：hero 用法 A 必须**完全无人物 / 无设备**，否则左侧空白被破坏
