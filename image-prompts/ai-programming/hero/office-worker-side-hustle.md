---
bootcamp: ai-programming
bootcampName: 人人都能学的 AI Coding 实战课
role: office-worker
roleName: 普通职场人（HR/财务/销售/教师/运营）
painPoint: side-hustle
painPointName: 副业增长（用 AI 做产品赚第二份收入）
format: hero
formatName: 课程详情页 hero
size: 1792x1024
displaySize: 1920x900
model: gpt-image-2
mode: Instant
lang: zh
version: 1
title: 人人都能学的 AI Coding 实战课（5 周建站 hero · 想法→产品时间轴）
ctaText: ""
tags: [hero, 详情页, 5周, 想法-产品]
---

# Office Worker × Side Hustle × 课程详情页 hero

> 模型：`gpt-image-2` · 模式：**Instant** · 比例 16:9

## 这张想表达什么

详情页 hero。视觉锚点用**一个简洁的"想法→产品"时间轴**：左边是手写 idea 便利贴，右边一步步演化成线框图、网页 preview，最后是浏览器 URL。
不喊口号，让访问者一眼看到这门课最核心的承诺：**5 周从想法到能访问的产品**。

## 完整 Prompt

### 用法 A — 0 字纯氛围

```
Horizontal 16:9 hero banner (1792×1024), editorial minimalist style.

Right 45% of canvas: a clean flat-design horizontal evolution sequence on warm cream background. Five small frames connected left to right by thin arrows:
Frame 1: a yellow sticky note with handwritten "💡 idea" (the bulb is drawn, not emoji-rendered).
Frame 2: a notebook page with rough wireframe boxes labeled "首页", "登录".
Frame 3: a laptop window outline showing a hero section layout placeholder.
Frame 4: a finished webpage preview rendered cleanly, generic blog-style layout.
Frame 5: a browser address bar showing "yoursite.com" in clean text.
Each frame uses a different muted color background (left to right: warm yellow, soft sage, pale blue, peach, light coral). Soft drop shadow.

Left 55% of canvas: completely empty — calm gradient wash from off-white #FFF1E7 (top) to slightly warmer cream (bottom). MUST stay clean — no objects, no text in left half.

Premium editorial design, soft ambient warm light. Labels must spell exactly: "首页", "登录", "yoursite.com". The handwritten label inside Frame 1 must read "idea" in lowercase Latin letters (the bulb is a small line drawing, not a real emoji).

No watermark. No real brand logos. No people. No code text visible.
```

### 用法 B — 带极简 headline

```
[复制用法 A，然后追加：]

Bottom-left text overlay, 60px from canvas edge, heavy bold Chinese sans-serif (思源黑体 Heavy style), color #10162F, 1 line:
"5 周 · 从想法到能访问的产品"

Bottom-right corner, 40px from edge, tiny text in #444:
"JR Academy · 人人都能学的 AI Coding 实战课"

Text must be sharp and beautifully composed. Simplified Chinese only. Flat solid color.
```

## 出图 tips

- **左空白铁律**：append `LEFT 55% must stay completely empty for frontend H1 overlay`
- **5 帧顺序**：append `the five frames must align horizontally left-to-right in chronological order`
- **如果 "yoursite.com" 拼错**：append `the URL must be exactly "yoursite.com" all lowercase ASCII`
- **如果 idea bulb 变成 emoji**：append `the bulb in Frame 1 is a hand-drawn line illustration, not an emoji character`
