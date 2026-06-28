---
bootcamp: ai-builder
bootcampName: Vibe Coding 大师课
role: pm-manager
roleName: 产品/技术经理
painPoint: ai-fomo
painPointName: AI FOMO（团队都在用就你没用）
format: xhs
formatName: 小红书种草
size: 1024x1792
displaySize: 1242x1660
model: gpt-image-2
mode: Thinking
lang: zh
version: 1
title: 团队用 Cursor 干活，你还在写需求 PPT
ctaText: 评论区扣"管理"领大纲
tags: [PM, 技术经理, AI FOMO, Cursor, MCP, 大师课]
---

# 技术 Manager / PM × AI FOMO × 小红书种草

> 模型：`gpt-image-2` · 模式：**Thinking** · 比例 3:4

## 这张想表达什么

不是"PM 不懂 AI 被替代"（那是 ai-essentials 的角度），是**懂技术的 PM / Tech Lead 看着自己组员用 Claude Code + Cursor 一周内交付，自己签字时一脸懵**。
角色：研发经理 / Tech Lead / 技术 PM，自己 5 年前还写过代码，现在主要做评审 / 立项。下属用 MCP 把 Jira + Confluence + Figma 串起来，AI 直接生成 PRD draft。Manager 第一次发现"我审的东西已经看不懂工具链了"。卖的是**重新写代码 + 学会现代 AI 工程**这件事——你不需要被淘汰，你需要补课。

## 海报上的中文文字

- **大标题**：团队用 Cursor 干活
- **副标题**：你还在写需求 PPT
- **正文 bullet**：
  - ✓ MCP 串起 Jira / Figma / Notion
  - ✓ Sub-agent 替你审 PR · 跑测试
  - ✓ 4 个月补完工程一线手感
- **CTA**：评论区扣 "管理" 领大纲
- **角标**：JR Academy · Vibe Coding 大师课

## 完整 Prompt

```
Model: gpt-image-2.
Aspect ratio: 3:4. Image size: 1024×1792 px. Mode: Thinking.

A vertical 3:4 lifestyle-tech poster in 小红书 editorial photo style,
featuring a programming manager in mid-to-late 30s, three-quarter back view,
sitting at a glass meeting-room table in mid-afternoon office light.
On the table: a closed laptop and a stack of printed slide deck pages with title
"Q3 Planning - Draft v7" visible on the top page.
Behind the manager, a frosted glass wall — beyond it, two younger team members
visible as soft silhouettes, one pointing at a large monitor that shows
fast-flowing AI coding terminal output (text blurred / out of focus).
The manager looks at his closed laptop with a neutral, slightly contemplative expression,
right hand resting on the slide deck pages.
Photo-realistic candid office shot, slight film grain, natural daylight from window-left,
slightly imperfect framing, shallow depth of field.

Composition: top 60% photo scene; bottom 40% clean text card with 2px black top border, on flat #FFF1E7 background.

Place at the top of the text card, extra-large heavy bold Chinese sans-serif (思源黑体 Heavy style),
color #10162F, generous letter spacing, in 1 line, reading:
"团队用 Cursor 干活"

Just below, slightly smaller heavy bold Chinese sans-serif, color #FF5757, in 1 line, reading:
"你还在写需求 PPT"

Three bullet lines, equal font size, medium bold, color #10162F,
each preceded by a "✓" mark in #FF5757, reading:
"✓ MCP 串起 Jira / Figma / Notion"
"✓ Sub-agent 替你审 PR · 跑测试"
"✓ 4 个月补完工程一线手感"

Bottom CTA strip, solid #FF5757 background, white bold Chinese sans-serif, reading:
"评论区扣 管理 领大纲"

Bottom-right corner, tiny flat single-line text, color #10162F, reading:
"JR Academy · Vibe Coding 大师课"

Text must be sharp and beautifully composed. Simplified Chinese only for headline and bullets.
All text in flat solid color. No stroke, no outline, no shadow on text.
The English terms "Cursor", "MCP", "Jira", "Figma", "Notion", "Sub-agent", "PR", "PPT" must render exactly with correct capitalization.

Color palette: #FFF1E7 (background), #10162F (text), #FF5757 (accent), #FFB800 (window light).

No watermark. No graphic logos. No real Atlassian / Figma / Notion / Anthropic logos visible on screens.
The slide deck cover and laptop must show only generic placeholder text — no real product branding.
No fake brand marks. No emojis. No traditional Chinese.
Do not show full face. Younger team members must remain blurred silhouettes through frosted glass.
```

## 备用变体

### v2 — 数据视角
> 大标题：**「团队 sprint 跑到第 3 周」**
> 副标题：**「你的 PRD 还在 v7」**
> bullet 第一条改成 **「✓ 让 AI 一次写出 PRD v1 直接交付」**

### v3 — 不上人，纯桌面对比
> Flatlay top-down：左半边一摞印的 PPT 草稿 + 红笔批注 + 咖啡渍，右半边一台笔记本屏显 Cursor terminal + agent.md 列表 + 一杯热咖啡。中间一根细分割线。

### v4 — 反向自嘲
> 大标题：**「我是 Tech Lead」**
> 副标题：**「我的下属比我会用 AI」**

## 出图 tips

- **核心检查**：bullet 第一条 `MCP 串起 Jira / Figma / Notion` —— 4 个英文 + 中文，最容易出错。append `the line "MCP 串起 Jira / Figma / Notion" must render with English terms "MCP", "Jira", "Figma", "Notion" exactly with correct capitalization`
- **避免画出真实 logo**：模型默认会画 Jira / Figma / Notion 的真实 logo，必须显式 append `do not render any official Atlassian, Figma, or Notion brand logos — text only`
- **如果年轻 silhouette 看着像在斗争**：换成 v3 flatlay 版本，移除人物
- **slide title "Q3 Planning - Draft v7" 容易出错**：append `the slide cover title must read exactly "Q3 Planning - Draft v7" — with hyphen and lowercase 'v'`
- **Thinking mode 必开**：5 段文字 + 7 个英文术语
