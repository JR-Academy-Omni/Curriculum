---
bootcamp: techscrum-devops
bootcampName: TechScrum DevOps 项目实训营
role: programmer
roleName: 程序员/工程师
painPoint: overseas
painPointName: 澳洲求职/Sponsor 通道
format: xhs
formatName: 小红书种草
size: 1024x1792
displaySize: 1242x1660
model: gpt-image-2
mode: Thinking
lang: zh
version: 1
title: 在澳洲，会写 Terraform 的人比会写 React 的人贵 30%
ctaText: 评论区扣"DevOps"领大纲
tags: [澳洲求职, DevOps, Terraform, EKS, Sponsor]
---

# Programmer × 澳洲求职 × 小红书种草

> 模型：`gpt-image-2` · 模式：**Thinking** · 比例 3:4

## 这张想表达什么

DevOps 在澳洲长期上 Skill Shortage List，运维转 DevOps / 后端转 DevOps 比纯做 React 容易拿 Sponsor 也容易加薪。
区别于全栈班"4000+ 留学生上岸"的桥梁叙事，这条卖**技能稀缺性**：会 Terraform / EKS 在澳洲就是抢手货，不需要内卷。
画面：DevOps 控制台界面 + 一杯咖啡 + 笔记本写着 "tfstate / pipeline / vault"。

## 海报上的中文文字

- **大标题**：会写 Terraform 的人
- **副标题**：在澳洲比会写 React 的人贵 30%
- **正文 bullet**：
  - ✓ 7 周做完 1 个真商业项目
  - ✓ Terraform · EKS · AKS · Prometheus · Grafana
  - ✓ 导师 Amazon 9 年 SRE 手把手带
- **CTA**：评论区扣 "DevOps" 领大纲
- **角标**：JR Academy · TechScrum DevOps 项目实训营

## 完整 Prompt

```
Model: gpt-image-2.
Aspect ratio: 3:4. Image size: 1024×1792 px. Mode: Thinking.

Vertical 3:4 lifestyle-tech poster, 小红书 editorial photo style.

Top 60%: a top-down flatlay on a warm wooden desk. A laptop showing an abstract Terraform plan output with green "+ create" lines and gray arrows (text suggestive, not legible). A small open notebook with handwritten labels in dark ink: "tfstate", "pipeline", "vault", "EKS". A flat white coffee mug. A pair of glasses. A pen. Soft afternoon window light upper-right, slight film grain. No human face. Text must be sharp and beautifully composed.

Bottom 40% (text card): clean off-white card on flat #FFF1E7 background, thin 2px black top border.

Extra-large heavy bold Chinese sans-serif (思源黑体 Heavy), color #10162F, generous letter spacing, 1 line:
"会写 Terraform 的人"

Just below, medium-bold Chinese sans-serif in #FF5757, 1 line:
"在澳洲比会写 React 的人贵 30%"

Three bullet lines, medium bold, color #10162F, each preceded by a "✓" in #FF5757:
"✓ 7 周做完 1 个真商业项目"
"✓ Terraform · EKS · AKS · Prometheus · Grafana"
"✓ 导师 Amazon 9 年 SRE 手把手带"

Bottom CTA strip, solid #FF5757, white bold Chinese sans-serif:
"评论区扣 DevOps 领大纲"

Bottom-right corner, tiny flat text in #10162F:
"JR Academy · TechScrum DevOps 项目实训营"

Text must be sharp and beautifully composed. Simplified Chinese only. Tool names "Terraform" "React" "EKS" "AKS" "Prometheus" "Grafana" "SRE" "DevOps" must spell exactly. Numbers "7" "1" "9" "30%" must be Arabic numerals. Flat solid color, no stroke, no shadow on text.

Color palette: #FFF1E7 / #10162F / #FF5757 / #FFB800.

No watermark. No graphic logos. No fake AWS/Azure/HashiCorp brand marks. No emojis. No human face. No specific salary numbers beyond the "30%" comparative figure.
```

## 备用变体

### v2 — 数据冲击
> 大标题：**「90% 澳洲雇主」**
> 副标题：**「在等会写 IaC 的工程师」**

### v3 — 反卷视角
> 大标题：**「不卷算法、不卷前端」**
> 副标题：**「会 Terraform 就够吃 5 年」**

### v4 — 学员视角
> 大标题：**「我是后端，转 DevOps 第 7 周」**
> 副标题：**「拿到第一个 sponsor 面试」**

## 出图 tips

- **关键检查**：bullet 第二条 "Terraform · EKS · AKS · Prometheus · Grafana" 不能拼错，append `tool names must be spelled exactly as written: Terraform EKS AKS Prometheus Grafana`
- **Terraform plan 抽象化**：模型容易把 plan 输出画得太具体（出现真公司域名）→ append `plan output should be abstract symbols and arrows, no real domain names or AWS account IDs`
- **30% 数字**：偶尔被画成"30 percent"或"3 0%"，append `the figure "30%" must render as digit-3 digit-0 percent-sign, attached`
- **不上人脸**：flatlay 视角最稳，避免人脸翻车
