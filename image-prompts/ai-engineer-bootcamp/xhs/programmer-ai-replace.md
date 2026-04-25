---
bootcamp: ai-engineer-bootcamp
bootcampName: AI Engineer Bootcamp
role: programmer
roleName: 程序员/工程师
painPoint: ai-replace
painPointName: AI 替代焦虑
format: xhs
formatName: 小红书种草
size: 1024x1792
displaySize: 1242x1660
model: gpt-image-2
mode: Thinking
lang: zh
version: 1
title: 不是 AI 抢饭碗，是会用 AI 的人在抢
ctaText: 评论区扣"AI"领大纲
tags: [程序员, AI替代, RAG, Agent, 工程化]
---

# 程序员 × AI 替代焦虑 × 小红书种草

> 模型：`gpt-image-2` · 模式：**Thinking** · 比例 3:4

## 这张想表达什么

不卖年龄焦虑，卖**职位卡位**的紧迫感。同事已经在用 AI Agent 做事，不是"明天 AI 替代你"，是"今天身边那个会用 AI 的同事在替代你"。
角色定位：在职程序员，看到队友拿 ChatGPT 一个下午做完自己一周的活，第一次坐不住。

## 海报上的中文文字

- **大标题**：不是 AI 抢饭碗
- **副标题**：是身边会用 AI 的人在抢
- **正文 bullet**：
  - ✓ Context Engineering · RAG · Agent · Eval
  - ✓ 7 个 Production 项目能放简历
  - ✓ 96 节课 · 18 周 · 每周作业批改
- **CTA**：评论区扣 "AI" 领大纲
- **角标**：JR Academy · AI Engineer Bootcamp

## 完整 Prompt

```
Model: gpt-image-2.
Aspect ratio: 3:4. Image size: 1024×1792 px. Mode: Thinking.

A vertical 3:4 lifestyle-tech poster in 小红书 editorial photo style,
featuring a Chinese male programmer in his late-20s to mid-30s, glasses, plain dark T-shirt,
sitting at an open-plan office desk in late afternoon light, three-quarter back view,
glancing sideways at a colleague's screen across the row.
The colleague's screen (out of focus, partial view) shows a fast-flowing AI agent conversation
generating code blocks. Our subject's own monitor still shows a traditional code editor.
A subtle tension in his posture — interested, slightly unsettled, focused.
Photo-realistic candid office shot, slight film grain, natural office lighting,
soft shadows, slightly imperfect framing.

Composition: top 60% is the office scene; bottom 40% is a clean off-white text card
with a thin 2px black top border, on a flat #FFF1E7 background.

Place at the top of the text card, extra-large heavy bold Chinese sans-serif
(思源黑体 Heavy style), color #10162F, generous letter spacing, in 1 line, reading:
"不是 AI 抢饭碗"

Just below, slightly smaller heavy bold Chinese sans-serif, color #FF5757, in 1 line, reading:
"是身边会用 AI 的人在抢"

Three bullet lines, equal font size, medium bold, color #10162F,
each preceded by a "✓" mark in #FF5757, reading:
"✓ Context Engineering · RAG · Agent · Eval"
"✓ 7 个 Production 项目能放简历"
"✓ 96 节课 · 18 周 · 每周作业批改"

Bottom CTA strip, solid #FF5757 background, white bold Chinese sans-serif, reading:
"评论区扣 AI 领大纲"

Bottom-right corner, tiny flat single-line text, color #10162F, reading:
"JR Academy · AI Engineer Bootcamp"

Text must be sharp and beautifully composed. Simplified Chinese only.
All text in flat solid color. No stroke, no outline, no shadow on text.
Consistent font size for all bullet lines.

Color palette: #FFF1E7 (background), #10162F (text), #FF5757 (accent), #FFB800 (window light).
Editorial photo on top, clean flat card on bottom. Slight film grain on photo only.

No watermark. No graphic logos. No fake brand marks. No emojis embedded in image.
No English text other than what is specified above. No traditional Chinese.
Do not show full face — keep three-quarter back view only.
No age numbers visible anywhere in the image.
```

## 备用变体

### v2 — 更直接的"差距"叙事
> 大标题：**「同事用 AI 半天做完我一周的活」**
> 副标题：**「不学，下个被优化的就是你」**

### v3 — 工具叙事（不上人）
> 视觉换成两台并排显示器特写：左屏老式编辑器，右屏 Cursor + ChatGPT 在生成代码，中间一杯凉了的咖啡。

### v4 — 数字冲击
> 大标题：**「7 倍效率差」**
> 副标题：**「会 AI 工程的人，正在拉开代差」**

## 出图 tips

- **核心检查**：「身边会用 AI 的人在抢」这一行红字是否完整 + 颜色对
- **如果 office 场景太杂乱**：把 colleague 段删掉，改成单人焦点 `solo developer at desk, only one screen visible, looking off-camera with focused expression`
- **bullet 中的英文（Context Engineering / RAG / Agent / Eval）出错率高**：在 prompt 末尾加 `the English terms "Context Engineering", "RAG", "Agent", "Eval" must render exactly with correct spelling`
