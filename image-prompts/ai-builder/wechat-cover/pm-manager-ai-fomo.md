---
bootcamp: ai-builder
bootcampName: Vibe Coding 提升班
role: pm-manager
roleName: 产品/技术经理
painPoint: ai-fomo
painPointName: AI FOMO（团队都在用就你没用）
format: wechat-cover
formatName: 朋友圈/视频号封面
size: 1024x1792
displaySize: 1080x1260
model: gpt-image-2
mode: Instant
lang: zh
version: 1
title: 你审的 PR · 你看不懂
ctaText: ""
tags: [PM, 技术经理, AI FOMO, 朋友圈]
---

# Tech Manager × AI FOMO × 朋友圈/视频号封面

## 海报上的中文文字

- **超大标题（2 行）**：
  - 你审的 PR
  - 你看不懂
- **副标题**：组员靠 Claude Code · 你靠 Google
- **角标**：JR Academy · Vibe Coding 提升班

## 完整 Prompt

```
Vertical poster 1024×1792 (will crop to 1080×1260), editorial bold style.

Background: pure flat dark navy #10162F. No photographic elements. No texture.

Centered upper half, in 2 lines, extra-large heavy bold Chinese sans-serif (思源黑体 Heavy style), tight letter spacing.

Line 1 in #FFF1E7 (off-white):
"你审的 PR"

Line 2 in #FF5757 (red), much larger than Line 1:
"你看不懂"

A subtle 2px horizontal red #FF5757 line below Line 2, half canvas width, centered.

Lower portion, smaller medium-bold Chinese sans-serif (思源黑体 Bold style), color #FFF1E7, 1 line, centered:
"组员靠 Claude Code · 你靠 Google"

Bottom-right corner, tiny flat single-line text, color #FFF1E7:
"JR Academy · Vibe Coding 提升班"

Sharp text. Flat solid color. No stroke, no outline, no shadow on text.
The letters "PR" must be two uppercase English letters. "Claude Code" and "Google" must render exactly with correct capitalization.

No watermark. No logos. No emojis. No bullet points. No CTA buttons. No URL.
```

## 备用变体

### v2 — 反着夸自己
> Line 1: **「你不是不行」**
> Line 2: **「你只是没补课」**

### v3 — 数据冲击
> Line 1: **「3 个组员」**
> Line 2: **「干完你 1 个 sprint」**

### v4 — 自嘲版
> Line 1: **「Tech Lead」**
> Line 2: **「Tech Behind」**

## 出图 tips

- **"PR" 必须是两个大写字母**：append `the letters "PR" must be exactly two uppercase English characters: P and R`
- **副标题 "Claude Code · Google" 中点容易变成 "."**：append `the separator between "Claude Code" and "Google" must be a middle-dot character (·, U+00B7)`
- **如果 "审的" 渲染错**：append `the character "审" (shěn, meaning 'review') must be standard simplified Chinese`
