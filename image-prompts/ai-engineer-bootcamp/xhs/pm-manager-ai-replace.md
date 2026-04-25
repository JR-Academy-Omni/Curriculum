---
bootcamp: ai-engineer-bootcamp
bootcampName: AI Engineer Bootcamp
role: pm-manager
roleName: 产品/运营/管理岗
painPoint: ai-replace
painPointName: AI 替代焦虑
format: xhs
formatName: 小红书种草
size: 1024x1792
displaySize: 1242x1660
model: gpt-image-2
mode: Thinking
lang: zh
version: 1
title: 57% 的 agent 翻车，不是模型问题
ctaText: 评论区扣"AI"领大纲
tags: [PM, AI替代, Context Engineering, Gartner, 工程化]
---

# PM × AI 替代焦虑 × 小红书种草

> 模型：`gpt-image-2` · 模式：**Thinking** · 比例 3:4

## 这张想表达什么

PM 焦虑的不是"不会写代码"，是"我懂业务、不懂为什么 agent 用不起来"。
**Gartner 2026 数据**：57% 的 agent 失败不是 model 问题，是 **context 设计**问题 —— 而 context 设计就是 PM 该懂的事。把 PM 拉进 AI 工程的视角，不是替代是升维。

## 海报上的中文文字

- **大标题**：57% 的 agent 翻车
- **副标题**：不是模型问题，是 context 没设计好
- **正文 bullet**：
  - ✓ Phase 2 · 18 节 Context Engineering 专题
  - ✓ 4 层 Context 架构（System / Retrieved / Memory / Task）
  - ✓ PM 看得懂 · 工程师抢着学
- **CTA**：评论区扣 "AI" 领大纲
- **角标**：JR Academy · AI Engineer Bootcamp

## 完整 Prompt（短版，可直接复制）

```
Vertical 3:4 poster (1024×1792), editorial photo style.

Top 60%: a clean flat-design illustration of a 4-layer pyramid on a cream background.
From bottom to top, each layer labeled in small black text:
"System Context" / "Retrieved Context" / "Memory Context" / "Task Context".
The pyramid uses muted blues and warm cream tones. Soft drop shadow.

Bottom 40%: clean off-white card on background #FFF1E7, with these texts.

Large bold Chinese title in #10162F:
"57% 的 agent 翻车"

Bold Chinese subtitle in #FF5757:
"不是模型问题，是 context 没设计好"

Three checkmarks "✓" in #FF5757 followed by Chinese text in #10162F:
"✓ Phase 2 · 18 节 Context Engineering 专题"
"✓ 4 层 Context 架构 System Retrieved Memory Task"
"✓ PM 看得懂 · 工程师抢着学"

Red CTA strip #FF5757 with white text:
"评论区扣 AI 领大纲"

Small text bottom-right #10162F: "JR Academy · AI Engineer Bootcamp"

Simplified Chinese only. Sharp text, flat solid color, no shadow on text.
The number "57%" must render exactly. The English words Context, System, Retrieved, Memory, Task must spell correctly. No watermark. No logos.
```

## 备用变体

### v2 — 反问句（PM 视角）
> 大标题：**「PM 学 AI，不是为了替代工程师」**
> 副标题：**「是为了不被懂 AI 的 PM 替代」**

### v3 — 数字震撼
> 大标题：**「57%」**（巨大）
> 副标题：**「Gartner 2026：57% 的 agent 失败是 context 设计问题」**

### v4 — 视觉用 ReAct loop（不是 pyramid）
> Top 60% 视觉换成：`a flat circular flow diagram with four nodes labeled "Plan", "Tool", "Observation", "Reflect" connected by arrows in a loop, on cream background, minimalist editorial style.`

## 出图 tips

- **核心检查**：「57%」百分号是否完整
- **如果 pyramid 出错**（层级混乱）：v4 换 ReAct loop，更稳定
- **bullet 中英混排**：image-2 通常处理得好，但 Context Engineering 偶尔会拼成 Cotext，加 `the term "Context Engineering" must spell exactly C-O-N-T-E-X-T`
