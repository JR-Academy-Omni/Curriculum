---
bootcamp: ai-engineer-bootcamp
bootcampName: AI Engineer Bootcamp
role: programmer
roleName: 程序员/工程师
painPoint: ai-replace
painPointName: AI 替代焦虑
format: wechat-cover
formatName: 朋友圈/视频号封面
size: 1024x1792
displaySize: 1080x1260
model: gpt-image-2
mode: Instant
lang: zh
version: 1
title: 同事用 AI 干掉了我一周的活
ctaText: ""
tags: [程序员, AI替代, 朋友圈, 视频号]
---

# 程序员 × AI 替代焦虑 × 朋友圈/视频号封面

> 模型：`gpt-image-2` · 模式：**Instant** · 比例 ~4:5

## 这张想表达什么

朋友圈封面只能放一句。不讲未来焦虑，讲**昨天发生的事**：身边的同事用 AI 把你一周的活半天做完了。
这句话比"35 岁焦虑"更新鲜、更具体、更扎人，是当下职场真实在发生的事。

## 海报上的中文文字

- **超大标题**：同事用 AI 干掉了我一周的活
- **副标题**：再不学，下个被优化的就是你
- **角标**：JR Academy · AI Engineer Bootcamp

> ⚠️ 朋友圈封面**禁止 bullet 和 CTA**。

## 完整 Prompt

```
Model: gpt-image-2.
Aspect ratio: 9:11 (close to 4:5). Image size: 1024×1792 px (will be cropped to 1080×1260).
Mode: Instant.

A vertical bold poster for WeChat Moments / 视频号 cover,
featuring a close-up of a laptop screen showing a fast-flowing AI agent conversation —
on the left side of the screen, a chat interface where a user has typed a feature request,
on the right side, generated code blocks streaming downward.
The screen is the only light source, casting a cool blue-white glow into a dark room.
A pair of hands resting on the keyboard at the bottom edge of frame, slightly out of focus,
with subtle tension in the fingers — pause-and-realize moment.
Cinematic editorial poster mood, slight film grain,
high contrast between cool screen glow and dark navy #10162F background.

Composition: laptop and hands occupy the lower 45%,
large overlapping Chinese typography fills upper 50%.

Place centered upper half, extra-large heavy bold Chinese sans-serif
(思源黑体 Heavy style), tight letter spacing,
in 2 lines split for impact:
Line 1 in #FFF1E7 (off-white):
"同事用 AI"
Line 2 in #FF5757 (red):
"干掉了我一周的活"

Below the headline, smaller medium-bold Chinese sans-serif (思源黑体 Bold style),
color #FFF1E7, in one line, reading:
"再不学，下个被优化的就是你"

Bottom-right corner, tiny flat single-line text, color #FFF1E7, reading:
"JR Academy · AI Engineer Bootcamp"

Text must be sharp and beautifully composed. Simplified Chinese only.
All text in flat solid color. No stroke, no outline, no shadow on text.

Color palette: #10162F (dominant dark), #FF5757 (Line 2 red),
#FFF1E7 (Line 1 / subtitle / tag). Cool blue-white screen glow as accent.
Cinematic dramatic lighting. Crisp typography on cinematic photo.

No watermark. No graphic logos. No fake brand marks. No emojis embedded in image.
No bullet points. No CTA buttons. No URL.
Do NOT show face — only the screen and partial hands.
```

## 备用变体

### v2 — 更柔和（疑问句）
> 标题：**「身边同事都在用 AI，你还在写 if-else？」**
> 副标题：**「Production 级 AI 工程，18 周教完」**

### v3 — 数字直击
> 标题：**「他用 AI · 1 天 · 我用手 · 1 周」**
> 副标题：**「差距还在拉大」**

### v4 — 全黑红字极简（最稳）
> 删掉所有视觉，背景纯 #10162F，标题红字 + 副标白字居中。最低翻车率。

## 出图 tips

- **检查核心字**：「干掉了我」5 个字必须完整、不错字、不变形
- **如果手画得诡异**：删掉 hands 描述，只保留屏幕画面
- **如果两行红白颜色辨识度低**：append `the red second line must clearly stand out from the white first line, with clear contrast`
