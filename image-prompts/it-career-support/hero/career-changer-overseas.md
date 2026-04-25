---
bootcamp: it-career-support
bootcampName: IT Career Coaching Bootcamp
role: career-changer
roleName: 转行/求职者
painPoint: overseas
painPointName: 海外求职
format: hero
formatName: 课程详情页 hero
size: 1792x1024
displaySize: 1920x900
model: gpt-image-2
mode: Instant
lang: zh
version: 1
title: IT Career Coaching Bootcamp（求职漏斗 hero）
ctaText: ""
tags: [hero, 求职漏斗, 留学生, mock]
---

# Career Changer × 海外求职 × 课程详情页 hero

> 模型：`gpt-image-2` · 模式：**Instant** · 比例 16:9

## 这张想表达什么

课程详情页 hero — 用一张极简的"求职漏斗"信息图体现 12 周从简历到 Offer 的全周期辅导。
左 55% 留白给前端 H1，右 45% 是漏斗示意，让人扫一眼就知道**这门课覆盖求职全程**。

## 完整 Prompt

### 用法 A — 0 字纯氛围

```
Horizontal 16:9 hero banner (1792×1024), editorial minimalist style.

Right 45% of canvas: a clean flat-design vertical funnel infographic on cream background #FFF1E7. Five horizontal stages stacked top-to-bottom, each progressively narrower, connected by thin tapered lines, like a funnel. Each stage is a soft rounded rectangle in a different muted color (top to bottom: soft cream, peach, warm coral, soft red, deep navy). Inside each stage, a small dark Chinese label, medium weight, reading top-to-bottom:
"简历"
"投递"
"面试"
"谈判"
"Offer"

Each label must spell exactly as written. Soft drop shadow under each stage. Premium editorial design, soft ambient light, professional infographic feel.

Left 55% of canvas: completely empty — calm gradient wash from off-white #FFF1E7 (top) to slightly warmer cream (bottom). MUST stay clean for frontend H1 overlay.

Color palette: #FFF1E7 (background), #10162F (text), #FF5757 (accent in lower funnel stages).

No watermark. No logos. No people. No emojis. No traditional Chinese — simplified only.
```

### 用法 B — 带极简 headline

```
[复制用法 A，然后追加：]

Bottom-left text overlay, 60px from canvas edge, heavy bold Chinese sans-serif (思源黑体 Heavy style), color #10162F, 1 line:
"12 周走完求职全程 · 7 次 mock + 2 次薪资谈判"

Text must be sharp and beautifully composed. Simplified Chinese only. Flat solid color.

Bottom-right corner, 40px from edge, tiny text in #444:
"JR Academy · IT Career Coaching"
```

## 备用变体

### v2 — 12 周时间轴
> 替换漏斗为：`a horizontal timeline with 12 small rounded markers labeled "Wk1" through "Wk12", with five vertical icons positioned along it: a document (Wk2), a magnifying glass (Wk5), a microphone (Wk7), a handshake (Wk10), a briefcase (Wk12). Cream background, minimalist.`

### v3 — 三维度同心圆
> 替换为：`three concentric rings labeled "D1 认知", "D2 求职", "D3 成长" rotating outward, soft pastel colors. Center small dark circle reading "你". Cream background.`

### v4 — 简历 + 招聘官 split
> 替换为：`a split layout — left half shows a stylized resume document with bullet lines and a green check mark; right half shows a small abstract head silhouette with three thought bubble cards. Connected by a thin red arrow. Cream background.`

## 出图 tips

- **左空白铁律**：append `LEFT 55% must be empty background only — no decorative elements, no shapes, no text`
- **5 个漏斗 label 必须准**：append `the five labels must spell exactly: 简历, 投递, 面试, 谈判, Offer (the last is the English word "Offer")`
- **漏斗形状变形**：模型偶尔画成圆锥或倒梯形 — append `the funnel must be vertical with 5 distinct horizontal stages, each progressively narrower, connected by tapered lines`
