---
bootcamp: ai-builder
bootcampName: Vibe Coding 大师课
role: programmer
roleName: 程序员/工程师
painPoint: age-35
painPointName: 35 岁焦虑
format: xhs
formatName: 小红书种草
size: 1024x1792
displaySize: 1242x1660
model: gpt-image-2
mode: Thinking
lang: zh
version: 1
title: 35 岁不卷代码量，卷的是 AI 协作能力
ctaText: 评论区扣"提升"领大纲
tags: [程序员, 35岁, AI协作, Claude Code, Skills, 大师课]
---

# 程序员 × 35 岁焦虑 × 小红书种草

> 模型：`gpt-image-2` · 模式：**Thinking** · 比例 3:4

## 这张想表达什么

不是"35 岁逃离 996 去澳洲"（那是 web-code-bootcamp 的角度），是**老程序员在国内不需要换国家，需要换工具**。
35 岁拼不过 25 岁的代码量和体力，但**用 AI 把架构能力放大 5 倍**这件事，年轻人没你做得好——你有 PRD 经验，会读懂业务，知道架构边界。会用 Claude Code 写 Skills、会写 agent.md、会 orchestrate sub-agent，是 35 岁这一代人独有的优势。

## 海报上的中文文字

- **大标题**：35 岁不卷代码量
- **副标题**：卷的是 AI 协作能力
- **正文 bullet**：
  - ✓ 把 8 年架构经验装进 agent.md
  - ✓ Skills 让你的工程方法论可复用
  - ✓ Sub-agent orchestration · 老兵专属手艺
- **CTA**：评论区扣 "提升" 领大纲
- **角标**：JR Academy · Vibe Coding 大师课

## 完整 Prompt

```
Model: gpt-image-2.
Aspect ratio: 3:4. Image size: 1024×1792 px. Mode: Thinking.

A vertical 3:4 lifestyle-tech poster in 小红书 editorial photo style,
featuring a programmer in his mid-30s, three-quarter back view (we never see full face),
sitting at a clean home office desk in afternoon light.
On the desk: a single laptop showing a markdown file with a visible "# agent.md" heading
and a few short bullet lines below (rendered as small abstract dashes, not readable text).
A second small monitor shows a simple flowchart of three boxes labeled "plan", "build", "review"
connected by arrows. A small wooden ruler, a thick paperback architecture book lying flat,
a stainless steel coffee cup. Subtle warm window light from camera-right, soft shadows.
Photo-realistic candid iPhone shot, slight film grain, slightly imperfect framing.
Calm, focused mood — not anxious, not heroic. Quiet competence.

Composition: top 60% photo scene; bottom 40% clean text card with 2px black top border, on flat #FFF1E7 background.

Place at the top of the text card, extra-large heavy bold Chinese sans-serif (思源黑体 Heavy style),
color #10162F, generous letter spacing, in 1 line, reading:
"35 岁不卷代码量"

Just below, slightly smaller heavy bold Chinese sans-serif, color #FF5757, in 1 line, reading:
"卷的是 AI 协作能力"

Three bullet lines, equal font size, medium bold, color #10162F,
each preceded by a "✓" mark in #FF5757, reading:
"✓ 把 8 年架构经验装进 agent.md"
"✓ Skills 让你的工程方法论可复用"
"✓ Sub-agent orchestration · 老兵专属手艺"

Bottom CTA strip, solid #FF5757 background, white bold Chinese sans-serif, reading:
"评论区扣 提升 领大纲"

Bottom-right corner, tiny flat single-line text, color #10162F, reading:
"JR Academy · Vibe Coding 大师课"

Text must be sharp and beautifully composed. Simplified Chinese only for headline and bullets.
All text in flat solid color. No stroke, no outline, no shadow on text.
The English terms "agent.md", "Skills", "Sub-agent orchestration" must render exactly with lowercase / capitalized as written.
The number "35" and "8" must be Arabic numerals.

Color palette: #FFF1E7 (background), #10162F (text), #FF5757 (accent), #FFB800 (window light).

No watermark. No graphic logos. No real product / company / IDE branding.
No fake brand marks. No emojis embedded in image. No traditional Chinese.
Do not show full face. The age "35" must not appear on the laptop screen or any visible object — only in the text card.
```

## 备用变体

### v2 — 师傅带徒弟
> 视觉换成"两只手在桌上"：左边是 mid-30s 那只戴婚戒的手在敲键盘，右边是 mid-20s 那只手在抄笔记。中间一台 laptop 屏幕显示 agent.md。强调"AI 让你能带徒弟，而不是被徒弟换掉"。
> 标题改成 **「35 岁的活法：AI 替你带新人」**

### v3 — 同代人对照
> 大标题：**「同样 35 岁」**
> 副标题：**「他还在写 CRUD · 他在 review AI 写的 PR」**

### v4 — 年龄是优势
> 大标题：**「8 年经验在 AI 时代翻 5 倍」**
> 副标题：**「不是被替代，是被放大」**

## 出图 tips

- **核心检查**：bullet 第一条 "8 年架构经验装进 agent.md" 中 "agent.md" 的英文小写点格式特别容易错，single out: append `"agent.md" must render as lowercase letters with a single dot, exactly as 'agent.md'`
- **避免年轻态人物**：模型默认画 25 岁年轻人，必须强化 `mid-30s, calm posture, slight stubble visible from three-quarter back, no hoodie` 关键词
- **不要 hyperbolic 焦虑感**：标题 "不卷代码量" 反 35 岁焦虑叙事，画面**不要**用昏暗光 / 凌乱桌子，要 clean / quiet / confident
- **如果"卷"字渲染错**：append `the character "卷" (juǎn) must be standard simplified Chinese, meaning 'compete/grind'`
