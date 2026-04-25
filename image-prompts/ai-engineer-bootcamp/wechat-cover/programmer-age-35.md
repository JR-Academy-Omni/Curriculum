---
bootcamp: ai-engineer-bootcamp
bootcampName: AI Engineer Bootcamp
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
version: 2
title: 35岁，重新写代码
ctaText: ""
tags: [程序员, 35岁, 朋友圈, 视频号]
---

# 程序员 × 35 岁焦虑 × 朋友圈/视频号封面

> 模型：`gpt-image-2` · 模式：**Instant 即可**（仅 2 段文字）· 比例 ~4:5

## 这张想表达什么

朋友圈封面只有半秒被看到。不讲故事、不卖卖点，**一句话戳穿**。
"35 岁，重新写代码"是一个动作宣告 —— 不焦虑、不悲情，决绝。
配图只用一只手 + 一个键盘，让眼睛只盯文字。

## 海报上的中文文字（出图后必须逐条检查）

- **超大标题**：35岁，重新写代码
- **副标题**：从 CRUD 到 AI Engineer
- **角标**：JR Academy · AI Engineer Bootcamp

> ⚠️ 朋友圈封面**禁止 bullet 和 CTA**，文字越少冲击越强。

## 完整 Prompt（gpt-image-2 优化版，可直接复制）

```
Model: gpt-image-2.
Aspect ratio: 9:11 (close to 4:5). Image size: 1024×1792 px (will be cropped to 1080×1260).
Mode: Instant.

A vertical bold poster for WeChat Moments / 视频号 cover,
featuring a close-up of a man's mature hands resting on a black mechanical keyboard,
shot from a slightly low angle with shallow depth of field.
The hands are mid-30s, slight wrinkles, no rings, hovering over the keys
as if pausing before typing — a moment of decision.
Background is a dark out-of-focus home office at night,
warm amber #FFB800 light source from the upper-left, deep cool shadows on the right.
The keycaps catch a tiny rim light. Cinematic editorial poster mood,
slight film grain, high contrast between warm-lit hands and dark navy #10162F background.

Composition: hands occupy the lower 40%, large overlapping Chinese typography fills upper 50%.

Place centered upper third, extra-large heavy bold Chinese sans-serif
(思源黑体 Heavy style), color #FF5757, with slight letter spacing,
occupying about 70% of the canvas width, reading:
"35岁，重新写代码"

Directly below the headline, smaller medium-bold Chinese sans-serif
(思源黑体 Bold style), color #FFF1E7 (off-white), reading:
"从 CRUD 到 AI Engineer"

Bottom-right corner, tiny flat single-line text, color #FFF1E7, reading:
"JR Academy · AI Engineer Bootcamp"

Text must be sharp and beautifully composed. Simplified Chinese only.
All text in flat solid color. No stroke, no outline, no shadow on text.

Color palette: #10162F (dominant dark background), #FF5757 (headline accent),
#FFF1E7 (subtitle and tag), #FFB800 (warm light hint only on hands).
Cinematic dramatic lighting. Crisp typography on cinematic photo.

No watermark. No graphic logos. No fake brand marks. No emojis embedded in image.
No English text other than the brand tag. No bullet points. No CTA buttons.
No URL. Do NOT show the man's face — only the hands. No traditional Chinese.
```

## 备用变体

### v2 — 更柔和的"开始"语气
> 标题改成：**「35 岁，开始学 AI」**
> 副标题改成：**「8 年代码经验，是底气不是包袱」**
> Lighting 描述换成：`soft warm window light from upper-right, less dramatic contrast`

### v3 — 用产品视角而非个人视角
> 把视觉段整段换成：
> ```
> A close-up of a laptop screen at slight angle: left half shows Python + LangChain code,
> right half shows an Agent conversation interface. The screen is the only light source,
> casting a soft glow into the dark room. Photo-realistic, shallow depth of field.
> ```
> 文字保持。适合面向「想转 AI」但还没决定的中立读者。

### v4 — 全黑 + 红字极简（最低翻车率）
> 把整段视觉描述删除，换成：
> ```
> Pure flat dark navy #10162F background. No photographic elements.
> A subtle thin 2px red #FF5757 horizontal line below the subtitle for accent.
> ```
> 视觉零内容，文字最大化。**强对比、最稳、最快出图**，适合不想冒真人/真物件翻车风险时。

## 出图 tips

- **关键检查**：「重新写代码」这 5 个字是否完整 —— image-2 偶尔会把"代"画成奇怪字，加 `the character "代" must be standard simplified Chinese form` 补救
- **如果手画得诡异**（多手指 / 错位）：把视觉描述改成 `a black mechanical keyboard with subtle backlight, no hands visible, focused on the keys`
- **如果文字被画面盖住看不清**：在 TEXT 段末尾加 `add a subtle 30% opacity dark band behind the headline for readability`
- **如果出图饱和度低**：补一句 `the red #FF5757 should pop vividly against the dark navy background`
- **不需要切 Thinking**：本格式只有 2 段文字，Instant 已经能 95%+ 一次出对
