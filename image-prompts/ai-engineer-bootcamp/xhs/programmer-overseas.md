---
bootcamp: ai-engineer-bootcamp
bootcampName: AI Engineer Bootcamp
role: programmer
roleName: 程序员/工程师
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
title: 在职程序员申 sponsor，比转码人快 6 个月
ctaText: 评论区扣"sponsor"领大纲
tags: [程序员, 海外, sponsor, 远程, 在职]
---

# 程序员 × 海外求职 × 小红书种草

> 模型：`gpt-image-2` · 模式：**Thinking** · 比例 3:4

## 这张想表达什么

区别于 career-changer-overseas（转码视角），这条针对**已有 5+ 年经验的在职程序员**：他们想出海，但担心比 fresh grad 转码慢。
真实情况：JD 显示 AI Engineer 岗位偏好"工程经验扎实 + AI 栈补齐"，老程序员补 18 周比 fresh grad 转码节省 6+ 月。

## 海报上的中文文字

- **大标题**：在职程序员申 sponsor
- **副标题**：比转码人快 6 个月，因为工程底子在
- **正文 bullet**：
  - ✓ AI Engineer JD 偏好工程经验 + AI 栈
  - ✓ 18 周补 Context · RAG · Agent · Eval
  - ✓ 92% JD 覆盖率（基于 15 个真实 JD）
- **CTA**：评论区扣 "sponsor" 领大纲
- **角标**：JR Academy · AI Engineer Bootcamp

## 完整 Prompt

```
Vertical 3:4 poster (1024×1792), editorial photo style.

Top 60%: an overhead flatlay on a clean wood desk in warm morning light. Items: a passport (closed, no visible country logo or text), a laptop (closed, plain dark surface), a leather notebook with handwritten labels "Context · RAG · Agent · Eval", a ceramic coffee mug, a fountain pen. Photo-realistic, slight film grain, calm studio mood.

Bottom 40%: clean off-white card on background #FFF1E7.

Large bold Chinese title in #10162F, 1 line:
"在职程序员申 sponsor"

Bold Chinese subtitle in #FF5757, 1 line:
"比转码人快 6 个月，因为工程底子在"

Three checkmarks "✓" in #FF5757 followed by Chinese text in #10162F:
"✓ AI Engineer JD 偏好工程经验 + AI 栈"
"✓ 18 周补 Context · RAG · Agent · Eval"
"✓ 92% JD 覆盖率（基于 15 个真实 JD）"

Red CTA strip #FF5757 with white text:
"评论区扣 sponsor 领大纲"

Small text bottom-right #10162F: "JR Academy · AI Engineer Bootcamp"

Sharp text. Flat solid color. Simplified Chinese for headline / subtitle / bullets except the English words sponsor / JD / Context / RAG / Agent / Eval which must spell exactly. Numbers "6", "18", "92%", "15" must render as Arabic numerals.

No watermark. No real country logo on passport. No real company logo. No fake brand marks.
```

## 备用变体

### v2 — 远程视角（不一定移民，先 remote）
> 大标题：**「老程序员要的不是转码，是 remote」**
> 副标题：**「AI Engineer 是 remote 友好度最高的岗位」**

### v3 — 数据帧
> 大标题：**「92%」**
> 副标题：**「老程序员补完 AI 栈，JD 匹配度 92%」**

## 出图 tips

- **passport 必须无国籍标识**：append `passport must be plain dark cover with no logo, emblem, or country name visible`
- **bullet 中数字"15 个真实 JD"**：偶尔模型会渲染成"十五"，append `the number "15" must be Arabic numeral, not Chinese character`
