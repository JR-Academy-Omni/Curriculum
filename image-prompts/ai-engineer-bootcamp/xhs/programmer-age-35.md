---
bootcamp: ai-engineer-bootcamp
bootcampName: AI Engineer Bootcamp
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
version: 2
title: 35岁前端，开始学 RAG
ctaText: 评论区扣"AI"领大纲
tags: [程序员, 35岁, RAG, AI Engineer, 转型]
---

# 程序员 × 35 岁焦虑 × 小红书种草

> 模型：`gpt-image-2` · 模式：**Thinking 推荐**（5 段中文长文案）· 比例 3:4

## 这张想表达什么

写过 8 年代码的老程序员，第一次感到"会写代码"不是终点。不喊口号、不卖焦虑，用一个夜晚书桌的真实场景 + 三行干货，给同龄人一个"我也试试"的入口。

## 海报上的中文文字（出图后必须逐条检查）

- **大标题**：35岁前端，开始学 RAG
- **副标题**：写了 8 年代码，第一次怕被 AI 替代
- **正文 bullet**：
  - ✓ 96 节课 · 7 个实战项目能放简历
  - ✓ 18 周陪跑 · 每周作业 1v1 批改
  - ✓ 不是 prompt 玩具，是 production 工程
- **CTA**：评论区扣 "AI" 领大纲
- **角标**：JR Academy · AI Engineer Bootcamp

## 完整 Prompt（gpt-image-2 优化版，可直接复制）

```
Model: gpt-image-2.
Aspect ratio: 3:4. Image size: 1024×1792 px. Mode: Thinking.

A vertical 3:4 lifestyle-tech poster in 小红书 (Xiaohongshu) editorial photo style,
featuring a Chinese male programmer in his mid-30s with glasses and a dark hoodie,
shown in three-quarter back view (we see profile and his screens, never a full front face),
sitting at a home desk at night with two monitors —
the left monitor shows a Python code editor, the right shows a chat interface like ChatGPT.
A warm desk lamp casts amber glow from camera-left, the rest of the room dim and out of focus.
On the desk: an open notebook with handwritten notes, a half-full coffee mug, scattered books, a mechanical keyboard.
Photo-realistic, slight film grain, candid iPhone night photo, natural skin texture,
neutral focused expression, slightly imperfect framing.

Composition: top 60% is the photo scene above; bottom 40% is a clean off-white text card
with a thin 2px black top border. Generous breathing room between text blocks.
The text card sits on a flat #FFF1E7 background, no gradients.

Place at the top of the text card, extra-large heavy bold Chinese sans-serif
(思源黑体 Heavy style), color #10162F, generous letter spacing, reading:
"35岁前端，开始学 RAG"

Just below, medium Chinese sans-serif (苹方 Regular style), color #444, reading:
"写了 8 年代码，第一次怕被 AI 替代"

Three bullet lines, equal font size, medium bold, color #10162F,
each preceded by a "✓" mark in #FF5757, reading:
"✓ 96 节课 · 7 个实战项目能放简历"
"✓ 18 周陪跑 · 每周作业 1v1 批改"
"✓ 不是 prompt 玩具，是 production 工程"

Bottom CTA strip, solid #FF5757 background, white bold Chinese sans-serif, reading:
"评论区扣 AI 领大纲"

Bottom-right corner, tiny flat single-line text, color #10162F, reading:
"JR Academy · AI Engineer Bootcamp"

Text must be sharp and beautifully composed. Simplified Chinese only.
All text in flat solid color. No stroke, no outline, no shadow on text.
Consistent font size for all bullet lines.

Color palette: #FFF1E7 (background), #10162F (text), #FF5757 (CTA accent), #FFB800 (lamp glow only).
Editorial photo on top, clean flat card on bottom. Slight film grain on photo only, crisp text.

No watermark. No graphic logos. No fake brand marks. No emojis embedded in image.
No English text other than what is specified above. No traditional Chinese.
No exaggerated facial expression. Do not show full face — keep three-quarter back view only.
```

## 备用变体

### v2 — 标题更尖锐（被裁视角）
> 大标题改成：**「被裁第 7 天，我学了 AI 工程」**
> 副标题改成：**「8 年前端，没想到 35 岁要重新学」**
> 视觉调暗一档，desk lamp 改 cool blue 而不是 warm amber。

### v3 — 受众放宽到 30+
> 大标题改成：**「30+ 程序员的第二曲线」**
> 副标题改成：**「不学 AI 工程，迟早被 AI 替代」**
> CTA 改成：**「主页置顶领大纲」**

### v4 — 不上人脸（避免真人脸翻车）
> 把第一段「A vertical 3:4 lifestyle-tech poster ... slightly imperfect framing.」
> 整段替换为：
> ```
> A vertical 3:4 lifestyle-tech poster in 小红书 editorial photo style,
> top-down flatlay shot of a programmer's desk at night:
> mechanical keyboard, an open laptop showing terminal with Python code,
> a notebook with handwritten labels "Context · RAG · Agent",
> a half-full coffee mug, glasses on a stack of tech books.
> Warm desk lamp light from top-left corner, slight film grain,
> photo-realistic iPhone overhead shot.
> ```

## 出图 tips

- **首要检查**：3 行 bullet 是否完整、CTA 红条是否出来、`RAG` 三个字母没被画歪
- **如果文字段过多模型乱位**：拆成两次出图 —— 第一次只出 visual + 大标题，第二次基于上一张说"加上副标题和 3 个 bullet 和 CTA"（image-2 conversational edit 是强项）
- **如果出图比例偏离**：在 prompt 第一行重申 `Aspect ratio: 3:4. This must be a vertical 3:4 image.`
- **如果模型出了 8K / masterpiece 风格的过度修图感**：在 NEGATIVE 末尾加 `Avoid over-processed AI aesthetic. Keep it grounded and editorial.`
- **如果用 Instant 模式效果差**：直接切 Thinking，长文案场景下 Thinking 准确率显著高
