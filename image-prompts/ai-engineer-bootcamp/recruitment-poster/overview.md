---
bootcamp: ai-engineer-bootcamp
bootcampName: AI Engineer Bootcamp
role: general
format: recruitment-poster
formatName: 招生海报 / 全景图
size: 1024x1536
displaySize: 1024x1536
model: gpt-image-2
mode: Thinking
lang: zh
version: 1
styleName: GitHub Tech Zine
title: AI Engineer Bootcamp · GitHub Tech Zine
ctaText: 扫码了解第五期课程大纲
tags: [招生海报, GitHub Tech Zine, ai-engineer-bootcamp]
---

# AI Engineer Bootcamp · 招生海报（GitHub Tech Zine）

> 模型：`gpt-image-2` · 模式：**Thinking** · 比例 2:3 · 1024×1536

## 这张想表达什么

AI Engineer Bootcamp 第五期升级海报。一张图把 12 周技术 + 12 周 P3 项目实战、286 节课、68 个 Lab、10 个 Phase、Multi-Agent / Memory / Harness Engineering 三大升级模块讲完，让有编程基础的开发者一眼判断"这是给我的"。

签名风格 **GitHub Tech Zine** —— 取 GitHub README 的 neo-brutalist 排版 + monospace + 1px 黑边 + 米色纸感，技术感同时不失人味。

## 海报上的中文文字

逐字列出，gpt-image-2 渲染时不要让模型自由发挥：

- ① 顶栏左：`JR ACADEMY · VOL 005`
- ① 顶栏中：`AI ENGINEER BOOTCAMP`
- ① 顶栏右：`2026 · 05`
- ② 面包屑：`JiangRen-Academy / AI-Engineer-Bootcamp`
- ② 状态徽章：`★ 第五期招生中` + `UPGRADED`
- ③ Hero EN：`AI ENGINEER` / `BOOTCAMP`
- ③ 中文副标：`从 RAG 到生产级 AI Agent System`（"RAG" 用 #FFB800 黄）
- ③ Vol badge：`VOL. 005`
- ④ 黄条：`12 周技术课程 + 12 周 P3 项目实战`
- ④ 右侧 mono：`BUILD AI SYSTEMS / THAT MATTER.`
- ⑤ 区块标签：`▶ 第五期重点升级模块` + `HIGHLIGHT`
- ⑤ 卡 1：`MULTI-AGENT` / `多智能体协作系统设计` / `协作 · 规划 · 决策 · 执行`
- ⑤ 卡 2：`MEMORY` / `短期 / 长期记忆机制构建` / `短期记忆 · 长期记忆 · 检索增强`
- ⑤ 卡 3：`HARNESS ENGINEERING` / `生产级 AI 系统架构与运行框架` / `编排 · 工具链 · 监控 · 评估`
- ⑥ 数字条：`286 LESSONS / 系统化课程`、`68 LABS / 互动实战`、`10 PHASES / 全栈能力体系`、`7+1 PROJECTS / 课程项目 + P3 项目`
- ⑦ 受众标签：`适合人群` + `FOR WHO`
- ⑦ 4 personas：
  - `软件工程师` / `提升 AI 工程能力`
  - `DevOps / SRE` / `转向 AI Infra / LLM Ops`
  - `Data / ML Engineer` / `补全工程化落地能力`
  - `AI 创业者` / `打造可落地的 AI 产品`
- ⑦ 插图标注：`MARS RESEARCH LAB · UNIT 01`
- ⑧ CTA：`扫码了解` + `第五期课程大纲 / 名额咨询` + `把 AI 能力做成真正可上线的产品系统`
- ⑨ 页脚左：`JR Academy` + `Empower Engineers. Build The Future.`
- ⑨ 页脚右：`#005 · AI ENGINEER BOOTCAMP`

## 完整 Prompt

```
Model: gpt-image-2.
Aspect ratio: 2:3. Image size: 1024x1536. Mode: Thinking.

Create a 1024x1536 portrait print poster — a dense single-page recruitment
poster summarizing JR Academy's AI Engineer Bootcamp.

GLOBAL STYLE
- Signature style: GitHub Tech Zine
- Style DNA: neo-brutalist, monospace + bold sans, hatched diagonal corner
  marks, single 1px solid black strokes on every card, flat single-line
  geometric tech icons (single line weight, no shading), faint 4mm grid
  texture on paper background
- Brand colors (mandatory, all four present):
  Background #FFF1E7 (paper cream)
  Ink #10162F (deep navy black)
  Accent yellow #FFB800
  Alert red #FF5757
- Typography: bold geometric sans-serif (Bricolage Grotesque style) for
  English headlines (~140pt for hero); IBM Plex Mono / Space Mono style for
  all labels and data; heavy bold Chinese sans-serif (思源黑体 Heavy style)
  for Chinese; uppercase tracking +40 on all English mono labels
- Highlight cards: dark navy #0E1530 fill, white text, small red triangle
  in bottom-right corner of each card

LAYOUT — 9 blocks top to bottom (full bleed)

1. TOP NAV BAR (44px tall, black bottom border)
   - Left: small GitHub octocat-style mark + monospace "JR ACADEMY · VOL 005"
   - Center: black pill containing "AI ENGINEER BOOTCAMP" in white mono
   - Right: monospace "2026 · 05" + hatched diagonal-line corner mark

2. BREADCRUMB ROW
   - Left mono "  JiangRen-Academy / AI-Engineer-Bootcamp"
   - Right: thin black-bordered box "★ 第五期招生中" with red star, then red text "UPGRADED"

3. HERO TITLE BLOCK
   - Two stacked lines, ultra-bold black ~140pt:
     "AI ENGINEER" / "BOOTCAMP"
   - Right of "BOOTCAMP": small "+" mark, dotted connector, black square
     badge "VOL. / 005" with tiny red dot top-right
   - Below title: large Chinese line "从 RAG 到生产级 AI Agent System"
     where "RAG" is colored #FFB800, rest is #10162F

4. SUBTITLE STRIP
   - Yellow #FFB800 filled bar (no border) containing black text:
     "12 周技术课程 + 12 周 P3 项目实战"
   - To its right, small two-line mono caption: "BUILD AI SYSTEMS / THAT MATTER."

5. HIGHLIGHT SECTION
   - Black tab label top-left: "▶ 第五期重点升级模块"  + small mono "HIGHLIGHT"
   - Three equal dark navy #0E1530 cards in a row, each with:
     * 1px black border, small red triangle in bottom-right corner
     * Top label uppercase white: "MULTI-AGENT" | "MEMORY" | "HARNESS ENGINEERING"
     * Chinese subtitle in light gray:
       "多智能体协作系统设计" | "短期 / 长期记忆机制构建" | "生产级 AI 系统架构与运行框架"
     * Center: flat yellow + white single-line illustration —
       card 1: hub-and-spoke network of 5 user nodes around a central robot icon
       card 2: half-brain half-circuit on top of a stacked database cylinder
       card 3: a browser window containing a hierarchy/flow diagram with </> tag
     * Bottom row dot-separated tags in white:
       "协作 · 规划 · 决策 · 执行" | "短期记忆 · 长期记忆 · 检索增强" | "编排 · 工具链 · 监控 · 评估"

6. STATS STRIP (white, top + bottom black borders)
   Four equal columns separated by thin vertical rules, each yellow line icon
   + huge number + EN label + Chinese label:
   - ▶ play icon | 286 | LESSONS | 系统化课程
   - flask icon  | 68  | LABS    | 互动实战
   - stack icon  | 10  | PHASES  | 全栈能力体系
   - </> icon    | 7+1 | PROJECTS| 课程项目 + P3 项目

7. AUDIENCE SECTION
   - Red tab label "适合人群" + mono "FOR WHO"
   - Four persona columns, each yellow line icon + Chinese role + one-line desc:
     * laptop with </> → "软件工程师" / "提升 AI 工程能力"
     * stacked cylinders → "DevOps / SRE" / "转向 AI Infra / LLM Ops"
     * line chart → "Data / ML Engineer" / "补全工程化落地能力"
     * rocket → "AI 创业者" / "打造可落地的 AI 产品"
   - Right of personas: flat single-line illustration of a small two-story
     research lab building labeled "LAB 01" with antenna, satellite dish,
     small red planet, yellow-lit windows; caption below in mono:
     "MARS RESEARCH LAB · UNIT 01"

8. CTA BLOCK (bottom-left)
   - Square QR code placeholder (black modules, white quiet zone)
   - Right of it: small "扫码了解", then yellow #FFB800 highlight bar with
     black text "第五期课程大纲 / 名额咨询", then small Chinese line:
     "把 AI 能力做成真正可上线的产品系统"

9. FOOTER (black top border)
   - Left: small text-only mark "JR Academy" + mono tagline
     "Empower Engineers. Build The Future."
   - Right: mono "#005 · AI ENGINEER BOOTCAMP"

DECORATIVE DETAILS (sprinkle, don't overdo)
- Tiny "+" cross marks at random grid intersections
- 1-2 small empty dotted-outline squares as alignment marks
- Hatched diagonal stripes only inside the top-right corner mark

NEGATIVE
- No photographic elements, no 3D, no gradients, no glow, no drop shadows
- No emoji, no stock-illustration faces, no sci-fi neon, no fake company logos
- Do not invent text beyond strings specified above
- Simplified Chinese only, no traditional characters
- No guarantee phrases ("100%", "保证", "包就业") anywhere
```

## 备用变体

### v2 — Print-shop ink-stamp（更怀旧的工业感）

> 把 GLOBAL STYLE 的 "neo-brutalist, hatched marks" 替换为：
> `risograph print + ink-stamped highlights, slight color misregistration,
> deeper grain, ink-stamp red and yellow imperfections`，
> 其余 9 个 LAYOUT 区块保持不变。出来的版本更有手工 zine 感，适合朋友圈 / 招生群发。

## 出图 tips

- **中文 "RAG" 上色**：在 [TEXT] 段把 "RAG" 显式标 `colored #FFB800`，否则模型会全黑
- **3 张卡的图标**：模型常常画机器人脸 → 显式 `flat single-line geometric icons, no character mascots, no faces`
- **STATS 数字**：写 `huge` 关键词，否则数字会被英文 LABEL 抢视觉
- **MARS LAB 插图**：模型容易画太详细 → 显式 `simple two-story flat outline building, single line weight`
- **页脚 footer**：要求模型把 footer 字号缩到 ~10pt mono，否则会盖大标题
