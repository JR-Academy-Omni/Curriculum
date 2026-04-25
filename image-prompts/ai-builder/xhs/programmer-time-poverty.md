---
bootcamp: ai-builder
bootcampName: Vibe Coding 提升班
role: programmer
roleName: 程序员/工程师
painPoint: time-poverty
painPointName: 时间不够用（重复活儿吃掉一半时间）
format: xhs
formatName: 小红书种草
size: 1024x1792
displaySize: 1242x1660
model: gpt-image-2
mode: Thinking
lang: zh
version: 1
title: 一周写不完的活，用 Claude Code 半天搞定
ctaText: 评论区扣"提速"领大纲
tags: [程序员, 提速, Claude Code, Cursor, Codex, MCP]
---

# 程序员 × 时间不够用 × 小红书种草

> 模型：`gpt-image-2` · 模式：**Thinking** · 比例 3:4

## 这张想表达什么

不是"35 岁焦虑"，不是"AI 替代"，是**老程序员每天被重复活儿吃掉一半时间**这件事。
角色：在职 5-8 年的工程师，写惯了 boilerplate / CRUD / 单测 / PR 描述，第一次发现 Claude Code + agent.md 让自己一晚上把"一周的活"做完。卖的是"提升班"——你已经会写代码，缺的是把 AI 用成第二双手的方法。

## 海报上的中文文字

- **大标题**：一周写不完的活
- **副标题**：用 Claude Code 半天搞定
- **正文 bullet**：
  - ✓ Claude Code · Cursor · Codex CLI
  - ✓ Skills · MCP · Sub-agent 全套架构
  - ✓ PRD 到上线 · 113 节课 · 5 实战项目
- **CTA**：评论区扣 "提速" 领大纲
- **角标**：JR Academy · Vibe Coding 提升班

## 完整 Prompt

```
Model: gpt-image-2.
Aspect ratio: 3:4. Image size: 1024×1792 px. Mode: Thinking.

A vertical 3:4 lifestyle-tech poster in 小红书 editorial photo style,
featuring a programmer at home desk late at night, three-quarter back view, never showing full face.
On the desk: a 14-inch laptop split into two terminal panes —
the left pane shows a long traditional code editor with many open tabs,
the right pane shows a clean conversational AI coding terminal with green and white text streaming a long output.
A handwritten sticky note on the bezel reads "PRD → ship in one night" in lowercase English.
A second monitor above shows a kanban with 12 task cards, 8 of them already marked done in green.
Half-empty mug, mechanical keyboard, soft warm desk lamp from camera-left, slight film grain.
Photo-realistic candid iPhone night shot, slightly imperfect framing.

Composition: top 60% photo scene; bottom 40% clean text card with 2px black top border, on flat #FFF1E7 background.

Place at the top of the text card, extra-large heavy bold Chinese sans-serif (思源黑体 Heavy style),
color #10162F, generous letter spacing, in 1 line, reading:
"一周写不完的活"

Just below, slightly smaller heavy bold Chinese sans-serif, color #FF5757, in 1 line, reading:
"用 Claude Code 半天搞定"

Three bullet lines, equal font size, medium bold, color #10162F,
each preceded by a "✓" mark in #FF5757, reading:
"✓ Claude Code · Cursor · Codex CLI"
"✓ Skills · MCP · Sub-agent 全套架构"
"✓ PRD 到上线 · 113 节课 · 5 实战项目"

Bottom CTA strip, solid #FF5757 background, white bold Chinese sans-serif, reading:
"评论区扣 提速 领大纲"

Bottom-right corner, tiny flat single-line text, color #10162F, reading:
"JR Academy · Vibe Coding 提升班"

Text must be sharp and beautifully composed. Simplified Chinese only.
All text in flat solid color. No stroke, no outline, no shadow on text.
The English terms "Claude Code", "Cursor", "Codex CLI", "Skills", "MCP", "Sub-agent", "PRD" must render exactly.

Color palette: #FFF1E7 (background), #10162F (text), #FF5757 (accent), #FFB800 (lamp glow).

No watermark. No graphic logos. No real Anthropic / Cursor / OpenAI / GitHub branding.
No fake brand marks. No emojis. No traditional Chinese.
Do not show full face. The kanban cards must contain only abstract task labels, no real product names.
```

## 备用变体

### v2 — 时间数据冲击
> 大标题：**「写代码 30%」**
> 副标题：**「写 PR / 文档 / 测试 70%」**
> bullet 第一条改成：**「✓ 把 70% 的时间还给真问题」**

### v3 — 工具叙事（不上人）
> 视觉换成 flatlay：一张白桌子，左边 5 张手写的便条贴着 PRD / Test / Deploy / Docs / Review，右边一台笔记本屏幕显示 agent.md + 一行命令把所有 todo 划掉，中间一支半空的咖啡。

### v4 — 场景反差
> 时间从「凌晨」换到「下午 3 点」—— 表达"提速 = 准点下班"，标题改成 **「下班前完成本周 sprint」**

## 出图 tips

- **核心检查**：bullet 第二条 `Skills · MCP · Sub-agent` 三个英文 + 中点的渲染最容易出问题，把这一行单独再说一次：append `the line "Skills · MCP · Sub-agent 全套架构" must render with three middle-dots "·" between English terms`
- **如果 kanban 看起来太抽象/假**：把 kanban 简化成"3 列纯白卡片，绿色 √ 标记"，删掉具体数字 12/8
- **PRD 这三个字母容易被画成中文"产品需求文档"**：append `"PRD" must render as three uppercase English letters, not translated`
- **Thinking mode 必开**：5 段文字 + 3 个英文术语 bullet，Instant mode 准确率掉 30%
