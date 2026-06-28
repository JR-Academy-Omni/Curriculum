---
bootcamp: ai-builder
bootcampName: Vibe Coding 大师课
role: programmer
roleName: 程序员/工程师
painPoint: age-35
painPointName: 35 岁焦虑
format: wechat-cover
formatName: 朋友圈/视频号封面
size: 1024x1792
displaySize: 1080x1260
model: gpt-image-2
mode: Instant
lang: zh
version: 1
title: 经验 × AI = 代差
ctaText: ""
tags: [程序员, 35岁, AI协作, 朋友圈]
---

# Programmer × 35 岁 × 朋友圈/视频号封面

## 海报上的中文文字

- **超大标题（公式式 2 行）**：
  - 经验 × AI
  - = 代差
- **副标题**：8 年架构经验，装进一份 agent.md
- **角标**：JR Academy · Vibe Coding 大师课

## 完整 Prompt

```
Vertical poster 1024×1792 (will crop to 1080×1260), editorial bold style.

Background: pure flat dark navy #10162F. No photographic elements.

Centered upper half, in 2 lines, extra-large heavy bold Chinese sans-serif (思源黑体 Heavy style), tight letter spacing.

Line 1 in #FFF1E7 (off-white), with "×" rendered as a multiplication sign character (U+00D7):
"经验 × AI"

Line 2 in #FF5757 (red), much larger than Line 1, with "=" as a standard equal sign:
"= 代差"

A subtle 2px horizontal red #FF5757 line below Line 2, half canvas width, centered.

Lower portion, smaller medium-bold Chinese sans-serif (思源黑体 Bold style), color #FFF1E7, 1 line, centered:
"8 年架构经验 · 装进一份 agent.md"

Bottom-right corner, tiny flat single-line text, color #FFF1E7:
"JR Academy · Vibe Coding 大师课"

Sharp text. Flat solid color. No stroke, no outline, no shadow on text.
The number "8" must be an Arabic numeral. The "×" must be a multiplication sign (×, U+00D7), not the letter X.
The "=" must be a standard ASCII equal sign. "agent.md" must render as lowercase letters with a single dot.

No watermark. No logos. No emojis. No bullet points. No CTA buttons.
```

## 备用变体

### v2 — 反讽
> Line 1: **「25 岁卷代码」**
> Line 2: **「35 岁卷 AI」**

### v3 — 时间换层级
> Line 1: **「不熬夜了」**
> Line 2: **「Claude 替我熬」**

### v4 — 自嘲
> Line 1: **「老程序员」**
> Line 2: **「老司机带 AI」**

## 出图 tips

- **"×" 不要被画成字母 X**：append `the multiplication sign "×" must be Unicode U+00D7, distinctly rounder and centered, NOT the letter X`
- **"= 代差" 必须显著大于 "经验 × AI"**：突出"代差"两个字的视觉爆破
- **如果 "代差" 写错（容易被改成 "差距"）**：append `the two characters "代差" mean 'generational gap' — must be exactly these two characters, not "差距" or "代沟"`
- **agent.md 在 dark navy 上偶尔被画成 "agent md" 缺点**：append `"agent.md" must include a literal period between 'agent' and 'md'`
