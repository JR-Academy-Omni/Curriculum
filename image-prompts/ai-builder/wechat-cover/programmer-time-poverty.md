---
bootcamp: ai-builder
bootcampName: Vibe Coding 大师课
role: programmer
roleName: 程序员/工程师
painPoint: time-poverty
painPointName: 时间不够用（重复活儿吃掉一半时间）
format: wechat-cover
formatName: 朋友圈/视频号封面
size: 1024x1792
displaySize: 1080x1260
model: gpt-image-2
mode: Instant
lang: zh
version: 1
title: 一晚上 · 干完一周
ctaText: ""
tags: [程序员, 提速, Claude Code, 朋友圈]
---

# Programmer × 时间不够用 × 朋友圈/视频号封面

## 海报上的中文文字

- **超大标题（2 行）**：
  - 一晚上
  - 干完一周
- **副标题**：Claude Code · Cursor · Codex · MCP · Sub-agent
- **角标**：JR Academy · Vibe Coding 大师课

## 完整 Prompt

```
Vertical poster 1024×1792 (will crop to 1080×1260), editorial bold style.

Background: pure flat dark navy #10162F. No photographic elements. No texture.

Centered upper half, in 2 lines, extra-large heavy bold Chinese sans-serif (思源黑体 Heavy style), tight letter spacing:

Line 1 in #FFF1E7 (off-white):
"一晚上"

Line 2 in #FF5757 (red), much larger than Line 1:
"干完一周"

A subtle 2px horizontal red #FF5757 line below Line 2, half canvas width, centered.

Lower portion, smaller medium-bold sans-serif (Inter Medium / 思源黑体 Bold style), color #FFF1E7, 1 line, centered, with thin middle-dot separators:
"Claude Code · Cursor · Codex · MCP · Sub-agent"

Bottom-right corner, tiny flat single-line text, color #FFF1E7:
"JR Academy · Vibe Coding 大师课"

Sharp text. Flat solid color. No stroke, no outline, no shadow on text. Simplified Chinese only for headline. The English tool names "Claude Code", "Cursor", "Codex", "MCP", "Sub-agent" must render exactly with correct capitalization.

No watermark. No logos. No emojis. No bullet points. No CTA buttons. No URL. No photographic elements.
```

## 备用变体

### v2 — 数字冲击
> Line 1: **「113 节课」**
> Line 2: **「干完十年的活」**

### v3 — 命令行调调
> 把背景换成 #10162F 上一排终端样式的 cursor 提示符，标题保持，副标题换成：**「$ claude code "ship it" — done」**

### v4 — 反讽职场
> Line 1: **「同事还在加班」**
> Line 2: **「我已经下班」**
> 副标题保持工具列表

## 出图 tips

- **"一晚上 / 干完一周" 字号差**：Line 2 必须明显大于 Line 1（视觉强调"一周"），否则失去对比力
- **"·" 中点容易变成英文 "."**：append `the separators between tool names must be middle-dot characters (U+00B7), not periods`
- **如果 "Codex" 出错变成 "Code"**：在 prompt 末尾加 `"Codex" must render as five letters: C-O-D-E-X`
