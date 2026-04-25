---
bootcamp: ai-engineer-bootcamp
bootcampName: AI Engineer Bootcamp
role: pm-manager
roleName: 产品/运营/管理岗
painPoint: ai-replace
painPointName: AI 替代焦虑
format: hero
formatName: 课程详情页 hero
size: 1792x1024
displaySize: 1920x900
model: gpt-image-2
mode: Instant
lang: zh
version: 1
title: AI Engineer Bootcamp（PM 视角 hero · Context 金字塔）
ctaText: ""
tags: [hero, 详情页, PM, Context Pyramid]
---

# PM × AI 替代焦虑 × 课程详情页 hero

> 模型：`gpt-image-2` · 模式：**Instant** · 比例 16:9

## 这张想表达什么

PM 视角 hero 用**Context 4 层金字塔**作为视觉锚点 —— 这是课程的招牌图，也是 PM 看一眼能"哦，原来 AI 工程是这样设计"的入口。
左半边留空给前端 H1。

## 海报上的中文文字

> 用法 A（推荐）：**0 字纯氛围图**
> 用法 B：极简一行 headline + 角标

- **极简 headline（仅用法 B）**：context 设计，是 PM 该懂的 AI 工程
- **角标（仅用法 B）**：JR Academy · AI Engineer Bootcamp

## 完整 Prompt（短版）

### 用法 A — 0 字纯氛围

```
Horizontal 16:9 hero banner (1792×1024), editorial minimalist style.

Right 45% of the canvas: a clean flat-design illustration of a 4-layer pyramid.
From bottom to top, each layer labeled in small dark text:
"System Context" / "Retrieved Context" / "Memory Context" / "Task Context".
The pyramid uses muted colors: dark navy base #10162F, ascending through soft cream and warm tones, top layer in red #FF5757. Soft ambient light, slight depth.

Left 55% of canvas: completely empty — calm gradient wash from off-white #FFF1E7 (top) to slightly warmer cream (bottom). This area will be overlaid with H1 by frontend, so it MUST stay clean — no objects, no text.

Sharp clean illustration, premium editorial feel, professional design. The English labels must spell exactly: System Context, Retrieved Context, Memory Context, Task Context. No watermark. No logos. No people. No emojis.
```

### 用法 B — 带极简 headline

```
[复制用法 A，然后追加：]

Add bottom-left text overlay, 60px from canvas edge, heavy bold Chinese sans-serif mixed with English, color #10162F, in one line:
"context 设计，是 PM 该懂的 AI 工程"

Add bottom-right corner, 40px from edge, tiny text in #444:
"JR Academy · AI Engineer Bootcamp"

Sharp text. Flat solid color. No shadow on text.
```

## 备用变体

### v2 — ReAct loop 替代 Context pyramid
> Right 45% 视觉换成 ReAct 循环：`a flat circular diagram with 4 nodes labeled "Plan", "Tool", "Observation", "Reflect" connected by arrows in a loop, on cream background.`

### v3 — Three SDKs 视觉
> Right 45% 换成：`three vertical terminal columns side by side on a dark surface, each labeled at top: "OpenAI", "Claude", "Google ADK", with abstract code lines in each. Cool tech editorial.`

## 出图 tips

- **核心**：标签拼写必须对（Context / System / Retrieved / Memory / Task）—— 出图后逐字核
- **如果 pyramid 倒置**：image-2 偶尔倒画，加 `the pyramid base is wider at the bottom, narrower at the top`
- **如果整体偏冷**：append `warm color temperature, soft natural light from upper-right`
- **左侧留空铁律**：append `LEFT 55% must be empty background only, no diagram or objects allowed in left half`
