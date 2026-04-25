---
bootcamp: techscrum-devops
bootcampName: TechScrum DevOps 项目实训营
role: programmer
roleName: 程序员/工程师
painPoint: side-hustle
painPointName: 副业/自动化变现
format: xhs
formatName: 小红书种草
size: 1024x1792
displaySize: 1242x1660
model: gpt-image-2
mode: Thinking
lang: zh
version: 1
title: 我把客户的部署流程从 6 小时降到 12 分钟，一单赚 2000 澳元
ctaText: 评论区扣"副业"领大纲
tags: [DevOps, 副业, freelance, IaC, Terraform]
---

# Programmer × 副业 × 小红书种草

> 模型：`gpt-image-2` · 模式：**Thinking** · 比例 3:4

## 这张想表达什么

写代码 5 年的人，最大的副业方向不是写新业务、是给中小公司做"基础设施改造"。
本地小公司还在靠 SSH 手动部署、没监控、tfstate 在 Dropbox——给他们做一次 Terraform 化 / GitHub Actions 化，3 天就能交付，单价 1500-3000 澳元。
DevOps 班教的就是把这套流程跑通的能力。

## 海报上的中文文字

- **大标题**：从 6 小时部署
- **副标题**：到 12 分钟一键发版 · 一单 2000 澳元
- **正文 bullet**：
  - ✓ 7 周学完 IaC + CI/CD + 监控
  - ✓ 接的就是中小公司的"基建改造"
  - ✓ 一周 1-2 个项目 · 不耽误正职
- **CTA**：评论区扣 "副业" 领大纲
- **角标**：JR Academy · TechScrum DevOps 项目实训营

## 完整 Prompt

```
Model: gpt-image-2.
Aspect ratio: 3:4. Image size: 1024×1792 px. Mode: Thinking.

Vertical 3:4 lifestyle-tech poster, 小红书 editorial photo style.

Top 60%: a flat-design infographic on warm cream background. Two stacked rows separated by a downward arrow.
- Top row: a small clock icon with label "6h" in heavy bold dark digits, beside a stack of 6 gray lego-block manual SSH steps with tiny gear icons.
- Bottom row: a small clock icon with label "12m" in heavy bold red digits, beside a single clean green pipeline arrow.
Below: a small invoice paper card showing "AUD 2,000" in clean monospace, with a small green check beside it.
Minimalist editorial design, soft drop shadow. Text must be sharp and beautifully composed.

Bottom 40% (text card): clean off-white card on flat #FFF1E7, thin 2px black top border.

Extra-large heavy bold Chinese sans-serif (思源黑体 Heavy), color #10162F, generous letter spacing, 1 line:
"从 6 小时部署"

Just below, medium-bold Chinese sans-serif in #FF5757, 1 line:
"到 12 分钟一键发版 · 一单 2000 澳元"

Three bullet lines, medium bold, color #10162F, each preceded by a "✓" in #FF5757:
"✓ 7 周学完 IaC + CI/CD + 监控"
"✓ 接的就是中小公司的基建改造"
"✓ 一周 1 至 2 个项目 不耽误正职"

Bottom CTA strip, solid #FF5757, white bold Chinese sans-serif:
"评论区扣 副业 领大纲"

Bottom-right corner, tiny flat text in #10162F:
"JR Academy · TechScrum DevOps 项目实训营"

Text must be sharp and beautifully composed. Simplified Chinese only. Numerals "6" "12" "2000" "1" "2" "7" must be Arabic. "AUD" "h" "m" "IaC" "CI/CD" must spell exactly. Flat solid color, no stroke, no shadow on text.

Color palette: #FFF1E7 / #10162F / #FF5757 / #FFB800.

No watermark. No graphic logos. No fake AWS/GitHub/HashiCorp brand marks. No emojis. No real client name on the invoice.
```

## 备用变体

### v2 — 学员故事
> 大标题：**「我接的第 3 个客户」**
> 副标题：**「3 天交付 · 拿到 3000 AUD」**

### v3 — 反内卷
> 大标题：**「不接外包写 CRUD」**
> 副标题：**「只接基建改造 · 1500 AUD 起步」**

### v4 — 数据冲击
> 大标题：**「澳洲中小公司」**
> 副标题：**「90% 还没上 IaC，蓝海太香」**

## 出图 tips

- **价格不能太具体**：发票上只写 "AUD 2,000"，不要带客户名 / 项目名 / 日期
- **6h / 12m 数字要对**：append `the labels "6h" and "12m" must render exactly: digit-6 letter-h, digit-1 digit-2 letter-m`
- **infographic 不要太密**：append `top half infographic should occupy ≈ 70% of the visual zone, with breathing room around each element`
- **AUD 2000**：偶尔被画成 USD，append `the currency code must be "AUD" exactly, three uppercase letters`
