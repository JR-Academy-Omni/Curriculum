---
bootcamp: techscrum-devops
bootcampName: TechScrum DevOps 项目实训营
role: programmer
roleName: 程序员/工程师
painPoint: overseas
painPointName: 澳洲求职/Sponsor 通道
format: wechat-cover
formatName: 朋友圈/视频号封面
size: 1024x1792
displaySize: 1080x1260
model: gpt-image-2
mode: Instant
lang: zh
version: 1
title: 不会 Terraform 的人，在澳洲已经被淘汰
ctaText: ""
tags: [DevOps, Terraform, 澳洲求职, 朋友圈]
---

# Programmer × 澳洲求职 × 朋友圈/视频号封面

> 模型：`gpt-image-2` · 模式：**Instant** · 比例 3:4 (输出后裁到 1080×1260)

## 这张想表达什么

冲击大字报。一句话：在澳洲做后端却不会 IaC，已经掉队。
不喊口号，用断言式标题让人停下来。

## 海报上的中文文字

- **超大标题（2 行）**：
  - 不会 Terraform 的
  - 已经被淘汰
- **副标题**：澳洲 90% 雇主在找会写 IaC 的人
- **角标**：JR Academy · TechScrum DevOps 项目实训营

## 完整 Prompt

```
Model: gpt-image-2.
Aspect ratio: 3:4. Image size: 1024×1792 px. Mode: Instant.

Vertical bold poster, will be cropped to 1080×1260 for WeChat Moments.

Background: pure flat dark navy #10162F. No photographic elements. No texture.

Centered upper half, in 2 lines, extra-large heavy bold Chinese sans-serif (思源黑体 Heavy style), tight letter spacing, no stroke, no shadow:

Line 1 in #FFF1E7 (off-white):
"不会 Terraform 的"

Line 2 in #FF5757 (red), slightly larger:
"已经被淘汰"

A subtle 2px horizontal #FF5757 line below Line 2, half canvas width, centered, 60px below the text.

Lower portion, smaller medium-bold Chinese sans-serif (思源黑体 Bold style), color #FFF1E7, in 1 line, centered, reading:
"澳洲 90% 雇主在找会写 IaC 的人"

Bottom-right corner, tiny flat single-line text, color #FFF1E7 at 60% opacity, reading:
"JR Academy · TechScrum DevOps 项目实训营"

Sharp text. Flat solid color. Numbers "90%" must render as digit-9 digit-0 percent-sign attached. The English word "Terraform" must spell exactly. The English abbreviation "IaC" must render as capital-I lower-a capital-C, exactly as shown.

Text must be sharp and beautifully composed. Simplified Chinese only for the Chinese segments. No emojis. No bullet points. No graphic logos. No watermark.
```

## 备用变体

### v2 — 反差视角
> Line 1: **「在国内你写 if-else」**
> Line 2: **「在澳洲你写 IaC」**
> 副标题：**「同样 6 年经验，差 50K 澳元」**

### v3 — 冷数据
> Line 1: **「澳洲 DevOps 缺口」**
> Line 2: **「12000+ 岗位」**
> 副标题：**「每月新发 800+ JD，没人接」**

### v4 — 反问
> Line 1: **「写 5 年代码」**
> Line 2: **「还在按按钮部署？」**
> 副标题：**「7 周补完 IaC + CI/CD」**

## 出图 tips

- "Terraform" 偶尔被模型拆成 "Terra form"，append `the word "Terraform" must render as a single connected word, no space`
- "90%" 必须 Arabic 数字，append `"90%" must render as Arabic digits with the percent sign attached`
- "IaC" 大小写要对，append `"IaC" must render as uppercase-I lowercase-a uppercase-C exactly`
- 如果背景太死板：append `subtle vignette in the corners, otherwise keep flat navy`
