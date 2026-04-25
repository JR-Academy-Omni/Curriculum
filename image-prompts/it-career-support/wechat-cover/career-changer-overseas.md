---
bootcamp: it-career-support
bootcampName: IT Career Coaching Bootcamp
role: career-changer
roleName: 转行/求职者
painPoint: overseas
painPointName: 海外求职
format: wechat-cover
formatName: 朋友圈/视频号封面
size: 1024x1792
displaySize: 1080x1260
model: gpt-image-2
mode: Instant
lang: zh
version: 1
title: 简历不是问题，面试才是
ctaText: ""
tags: [澳洲求职, mock-interview, behavioral, 朋友圈, 视频号]
---

# Career Changer × 海外求职 × 朋友圈/视频号封面

> 模型：`gpt-image-2` · 模式：**Instant** · 比例 ~4:5

## 这张想表达什么

朋友圈大字报：单点冲击。让"投了简历没回复"的留学生停下来认领自己的真问题 — **不是简历不好，是面试还没准备**。

## 海报上的中文文字

- **超大标题（2 行）**：
  - 简历不是问题
  - 面试才是
- **副标题（1 行）**：7 次 mock interview · 真实打分
- **角标**：JR Academy · IT Career Coaching

## 完整 Prompt

```
Vertical poster 1024×1792 (will crop to 1080×1260), editorial bold poster style.

Background: pure flat dark navy #10162F. No photographic elements. No gradients.

Centered upper half, in 2 lines, extra-large heavy bold Chinese sans-serif (思源黑体 Heavy style), tight letter spacing.

Line 1 in #FFF1E7 (off-white), reading:
"简历不是问题"

Text must be sharp and beautifully composed. Simplified Chinese only. Flat solid color. No stroke. No shadow on text.

Line 2 in #FF5757 (red), reading:
"面试才是"

Text must be sharp and beautifully composed.

A subtle 2px horizontal red #FF5757 line below Line 2, half canvas width, centered.

Lower portion, smaller medium-bold Chinese sans-serif (思源黑体 Bold style), color #FFF1E7, 1 line, centered, reading:
"7 次 mock interview · 真实打分"

Text must be sharp and beautifully composed.

Bottom-right corner, tiny flat single-line text, color #FFF1E7:
"JR Academy · IT Career Coaching"

Color palette: #10162F background, #FFF1E7 primary text, #FF5757 accent.
Numbers "7" must render as Arabic numeral exactly. The English "mock", "interview" must spell exactly as written.

No watermark. No logos. No emojis. No bullet points. No CTA buttons. No URL.
```

## 备用变体

### v2 — 数据封面
> Line 1：**「7 次模面」**（巨大）
> Line 2：**「直到你不再紧张」**

### v3 — 反问
> Line 1：**「投了 200 份」**
> Line 2：**「为什么没回复？」**
> 副标题：**「问题在你面试还没准备」**

## 出图 tips

- **两行字色差铁律**：append `Line 1 in off-white and Line 2 in red must be clearly distinguishable, do not blur together`
- **"mock interview"**：模型偶尔英文字距错乱 — append `the words "mock interview" must render as two separate English words with one space`
