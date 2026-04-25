---
bootcamp: it-career-support
bootcampName: IT Career Coaching Bootcamp
role: career-changer
roleName: 转行/求职者
painPoint: overseas
painPointName: 海外求职
format: xhs
formatName: 小红书种草
size: 1024x1792
displaySize: 1242x1660
model: gpt-image-2
mode: Thinking
lang: zh
version: 1
title: 投了 200 份没回复，差的不是简历是面试
ctaText: 评论区扣"模面"领大纲
tags: [澳洲求职, 留学生, mock-interview, behavioral, 求职辅导]
---

# Career Changer × 海外求职 × 小红书种草

> 模型：`gpt-image-2` · 模式：**Thinking** · 比例 3:4

## 这张想表达什么

it-career-support 区别于 web-code-bootcamp：那门是教技术 + 项目，这门是**专门解决求职环节卡壳**。
留学生最痛的不是不会代码，是**面试一上去就卡**：behavioral 不会答、tech round 紧张、HR call 报价错位。
锚点：**7 次 mock interview + 2 次薪资谈判演练 + 21 节 AI 求职专题**。

## 海报上的中文文字

- **大标题**：投 200 份没回复
- **副标题**：差的不是简历，是面试
- **正文 bullet**：
  - ✓ 7 次 mock interview · 真实招聘官打分
  - ✓ STAR 行为面试 + 系统设计 + leetcode
  - ✓ 21 节 AI 求职 · 用 AI 改简历模面 Offer
- **CTA**：评论区扣 "模面" 领大纲
- **角标**：JR Academy · IT Career Coaching

## 完整 Prompt

```
Vertical 3:4 poster (1024×1792), editorial photo style for 小红书 lifestyle-tech post.

Top 60%: a candid iPhone-style photo on a quiet desk at night. Top-down three-quarter view of a notebook open with handwritten "STAR" letters circled in red ink, a half-empty mug of coffee, a pair of headphones, and a smartphone screen-side down. Beside the notebook a small printed page with bullet lines (illegible). Warm desk lamp from camera-left, slight film grain, shallow depth of field, focus on the notebook. Off-white background tones #FFF1E7. Slightly imperfect composition.

Bottom 40%: clean off-white card on background #FFF1E7 with a thin 1px black inner border.

Place upper-card center, extra-large heavy bold Chinese sans-serif (思源黑体 Heavy style), color #10162F, with generous letter spacing, 1 line, reading:
"投 200 份没回复"

Text must be sharp and beautifully composed. Simplified Chinese only. Flat solid color. No stroke. No shadow on text.

Below the title, medium-bold Chinese sans-serif, color #FF5757, 1 line, reading:
"差的不是简历，是面试"

Text must be sharp and beautifully composed.

Three checkmark "✓" marks in #FF5757, followed by Chinese text in #10162F, consistent font size, evenly spaced, each on its own line, reading:
"✓ 7 次 mock interview 真实打分"
"✓ STAR 行为面试 + 系统设计"
"✓ 21 节 AI 求职专题"

Text must be sharp and beautifully composed.

Bottom CTA strip, solid #FF5757 background, white bold Chinese text, 1 line, reading:
"评论区扣 模面 领大纲"

Bottom-right corner, tiny flat text in #10162F:
"JR Academy · IT Career Coaching"

Color palette: #FFF1E7 background, #10162F primary text, #FF5757 accent.
Numbers "200", "7", "21" must render as Arabic numerals exactly. The English "STAR", "mock", "interview", "AI" must spell exactly as written.

No watermark. No graphic logos. No fake brand marks. No real company names. No real student faces. No emojis embedded in image. Simplified Chinese only.
```

## 备用变体

### v2 — 数字冲击
> 大标题：**「7 次 mock」**
> 副标题：**「打分到你不再紧张为止」**

### v3 — 反问开场
> 大标题：**「为什么 leetcode 刷了 300 题还过不了？」**
> 副标题：**「问题在 behavioral round」**

### v4 — Offer 落点
> 大标题：**「Offer 来的那天」**
> 副标题：**「我对薪资谈判已经演练过 2 次」**

## 出图 tips

- **STAR 字母**：append `the four letters "S T A R" must be clearly handwritten and circled, not blurred`
- **数字"200"完整**：append `the number "200" must render with no leading zero, exactly`
- **不要画招聘官的脸**：模型偶尔会塞个真人 — append `no faces, no people in the photo`
- **iPhone 候选感**：写实生活流要有"随手拍"的不完美感，避免摆拍感
