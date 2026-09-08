# AI Engineer Bootcamp — Visual Direction

> Cohort 7 · 2026-08-25
> 课程结构：理论 12 周 + 实践 13 周；CareKind production Agent 贯穿项目
> 当前主视觉：`public/posters/assets/cohort-7-production-system-v3.png`
> 主视觉 SHA256：`39279a1aa670af6e70a118f47e9d50f424bf7ff5334af8a1ac3d5aaa3b1033fe`

## 1. 核心视觉概念

**Editorial Systems Maquette · Production Architecture**

画面不是“AI 光球”或紫色玻璃塔，而是一座可读的工程建筑模型：暖白工作室承载信息，石墨黑金属表现系统边界，半透明外壳展示内部结构，珊瑚机械闸门对应控制与人工确认。五层实体模块表现从 Foundation 到 Production 的能力累积。

视觉必须支持本期核心叙事：**从第一周开始，在同一个 CareKind repository 中逐层搭建 production Agent。**

## 2. 两种视觉 Register

| Register | 使用范围 | 视觉规则 |
|---|---|---|
| **A · 精致软风（默认）** | 官网、课程大纲、招生页、Cohort 7 主海报、社交媒体主视觉 | 奶油底、1px 暖灰边、18–34px 圆角、柔和多层阴影、紫/珊瑚渐变、真实 3D 技术栈 |
| **B · Campaign Impact（仅按需）** | 旧海报实验、zine、活动冲击物料、明确指定的 deck | 3px 黑框、硬阴影、方角或小圆角、高对比色块 |

第七期主视觉统一使用 Register A。旧版 V1–V7 仅作为 Archive，不得继续充当 Current。

## 3. 色彩系统

| Token | 色值 | 用途 |
|---|---|---|
| Ink | `#10162B` | 主标题、正文深色 |
| Cream | `#FFF9F2` | 页面主背景 |
| Paper | `#FFFDF9` | 卡片与内容面 |
| Lavender | `#EEE9FF` | AI 区域、理论轨道、浅层背景 |
| Violet | `#705CFF` | AI 标志、主 CTA、理论线 |
| Violet Dark | `#5141C9` | 深色文字与 hover |
| Coral | `#FF715B` | 实践线、转化 CTA、重点数字 |
| Peach | `#FFF0E6` | 实践区浅背景 |
| Warm Line | `rgba(87,70,130,.14)` | 1px 边框 |

JR 红 `#FF5757` 仍是品牌资产色，但在 Cohort 7 页面中不做 30% 大面积色块；主视觉以紫色 AI 光谱和珊瑚行动色构成。

## 4. 构图与组件

- 官方 Logo：只使用 `public/posters/assets/jr-academy-logo-zh.svg`，不得用文字模拟 Logo。
- Hero：左侧价值主张，右侧或满幅使用 `cohort-7-production-system-v3.png`。
- 卡片：18–28px 圆角、1px 低对比边、柔和阴影；hover 最多上移 3px。
- 标签：pill 形；理论用 Violet，实践用 Coral。
- 背景：允许低透明网格、柔光与玻璃层；禁止赛博黑底和高饱和霓虹堆叠。
- 3D 主图：必须无文字、无 Logo、无人物；所有课程文字由 HTML/CSS 排版覆盖。禁止通用机器人、AI 大脑、发光球体、紫色玻璃托盘塔和赛博朋克霓虹。

## 5. 排版

- 中文：`Noto Sans SC` / `PingFang SC` / system sans-serif。
- 英文与数字：`Inter`。
- 标题紧凑、字重 850–920，正文控制在 16–19px。
- 不用衬线体制造“高级感”；高级感来自层级、留白和材质克制。

## 6. 主海报规格

- 主版：1242×1660（3:4）。
- 首屏信息顺序：官方 Logo → Cohort 07 → “从 0 搭建 Production Agent” → 双 Live → 13 周 CareKind → 25 场/45h/1 项目。
- 技术路径只保留一行：`ADLC → UI → Voice → RAG → MCP → Agent → Memory → Harness → Routing → Evals`。
- 禁止放未核实的薪资、Offer、就业保证、开班日期、价格和报名人数。

## 7. AI 出图 Prompt

```text
Create a sophisticated editorial key visual showing one production-grade AI agent system
as a precise five-layer architectural cutaway model. Use matte warm-white ceramic,
graphite anodized metal, smoked acrylic, visible conduits, checkpoints and small coral
mechanical approval gates. Place the model on the right of a warm ivory studio backdrop,
leaving the left 48 percent quiet for HTML typography. Calm directional daylight,
Swiss editorial restraint, tactile and credible. Portrait 3:4. No text, logos, people,
robots, brains, glowing orbs, circular glass trays, neon cyberpunk or purple fantasy tower.
```

## 8. 验收清单

- [x] 课程页使用 Register A。
- [x] 官方 Logo 与无字 3D stack 已纳入公共资产。
- [x] `cohort-7.html` 与主海报去除 Neo-Brutalism。
- [x] 1242×1660 PNG 与 HTML 主海报一致。
- [x] 桌面 1440px 与手机 390px 无横向溢出。
- [ ] 公网课程页、总览页、主海报和图片资产均可读（部署后回读）。
