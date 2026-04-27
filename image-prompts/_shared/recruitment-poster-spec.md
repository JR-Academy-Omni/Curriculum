# 招生海报 / 全景图（`recruitment-poster`）

> 第 4 种格式。一张图把整个 bootcamp **讲完**：定位 + 数据 + 模块 + 受众 + CTA。
> 用途：详情页头图、招生主图、朋友圈大图、A3 喷墨打印、官网首屏、合作渠道分发素材。

---

## 基本参数

- **尺寸**: `1024×1536`（2:3 竖版，gpt-image-2 原生比例）
- **风格变体**: 不属于 A/B/C —— 每个 bootcamp 独立 **签名风格**（GitHub Tech Zine / Vector Lab Notebook / Risograph Workbook 等，详见 [`style-lineage.md`](style-lineage.md)）
- **平台关键词**: `dense info-graphic recruitment poster, single page summary, brand-recognizable signature style`
- **模型模式**: gpt-image-2 **Thinking** 模式（Instant 模式渲染密集中文 + 多区块极易翻车）

---

## 构图分区（9-block anatomy，所有 bootcamp 共享骨架）

```
┌──────────────────────────────────────────────────────┐ 1024 宽
│  ① TOP NAV BAR (44px)                                 │
│  ────────────────────────────────────────────────────  │
│  ② BREADCRUMB / 招生状态徽章                           │
│                                                       │
│  ③ HERO TITLE BLOCK                                   │
│      Bootcamp Name (EN, ultra-bold, ~140pt)           │
│      中文副标题 (yellow accent on key word)            │
│                                                       │
│  ④ SUBTITLE STRIP (yellow #FFD93D bar)                │
│      "X 周课程 + Y 周项目实战"                        │
│                                                       │
│  ⑤ HIGHLIGHT SECTION (3 dark navy cards)              │
│  ┌──────────┬──────────┬──────────┐                  │
│  │ MODULE 1 │ MODULE 2 │ MODULE 3 │                  │
│  │ 图标插画  │ 图标插画  │ 图标插画  │                  │
│  │ 4-tag 列  │ 4-tag 列  │ 4-tag 列  │                  │
│  └──────────┴──────────┴──────────┘                  │
│                                                       │
│  ⑥ STATS STRIP (4 columns, 1px black borders)         │
│  │ N Lessons │ N Labs │ N Phases │ N Projects │      │
│                                                       │
│  ⑦ AUDIENCE SECTION                                   │
│  ┌────┬────┬────┬────┐ + signature illustration       │
│  │ 软工│DevOps│Data│创业│   (per-bootcamp visual mark)  │
│  └────┴────┴────┴────┘                               │
│                                                       │
│  ⑧ CTA BLOCK (QR + 扫码 + yellow tagline)              │
│                                                       │
│  ⑨ FOOTER (JR text-tag · tagline · #edition)           │
└──────────────────────────────────────────────────────┘ 1536 高
```

每个 bootcamp 的 prompt 都按上面 ①→⑨ 顺序写，**只换签名风格 + 数据 + 中文文字**，骨架和品牌色不变。

---

## 文字密度上限

招生海报是密度最高的格式，故上限明显高于 xhs / wechat-cover：

| 区块 | 字数限制 |
|------|---------|
| ③ Hero EN 大标题 | ≤ 22 字符（拆 2 行可以） |
| ③ 中文副标题 | ≤ 18 字 |
| ④ Subtitle strip | ≤ 24 字 |
| ⑤ 每张 module 卡 EN 标题 | ≤ 18 字符 |
| ⑤ 每张卡中文小标题 | ≤ 14 字 |
| ⑤ 每张卡 4-tag 列（点分隔） | 每 tag ≤ 5 字 |
| ⑥ 数字 | 1-4 位 |
| ⑥ 数字下方标签 EN | ≤ 8 字符 |
| ⑥ 数字下方中文 | ≤ 8 字 |
| ⑦ persona 标题 | ≤ 8 字 |
| ⑦ persona 副标 | ≤ 14 字 |
| ⑧ CTA 主行 | ≤ 18 字 |
| 总段落数 | 25-35 段（包括所有 tag / 数字 / 标签） |

**铁律**：每段中文都用引号 `"..."` 单独成行写进 `[TEXT]` 段，**不要**让模型自由发挥任何文字。

---

## 调性

- **信息密度优先**：海报存在的目的是"一张图讲清楚整个 bootcamp"
- **签名风格主导视觉**：每个 bootcamp 一眼能区分（看 [`style-lineage.md`](style-lineage.md)）
- **品牌色硬约束**：不管什么签名风格，必须能看到 `#FF5757` / `#10162F` / `#FFF1E7` / `#FFB800` 中的至少 3 个
- **无承诺话术**：CTA 用"扫码了解课程大纲" / "1v1 求职辅导"，禁用"100% 上岸 / 包就业 / 保证年薪"等（详见 brand-style.md 红线）
- **不画 logo**：右下角用文字 tag `JR Academy · {Bootcamp}`

---

## 关键 prompt 片段（每张 recruitment-poster prompt 复用）

```
Model: gpt-image-2.
Aspect ratio: 2:3. Image size: 1024x1536. Mode: Thinking.

Create a 1024x1536 portrait print poster — a dense single-page recruitment
poster summarizing an entire JR Academy bootcamp.

GLOBAL STYLE
- Signature style: {STYLE NAME, e.g. "GitHub Tech Zine"}
- Style DNA: {1-line description from style-lineage.md}
- Brand color absorption (mandatory, at least 3 of):
  #FF5757 (alert red) · #10162F (ink navy) · #FFF1E7 (paper cream) ·
  #FFB800 (accent yellow)
- Typography: bold geometric sans-serif (Bricolage Grotesque style) for
  English headlines; heavy bold Chinese sans-serif (思源黑体 Heavy style)
  for Chinese headlines; monospace (Space Mono style) for labels/numbers.
- Single 1px solid black strokes on cards; no drop shadows; no gradients.

LAYOUT — 9 blocks top to bottom (full bleed, see anatomy)
1. Top nav bar (44px tall, black bottom border)
   - Left: small GitHub-style mark + monospace text "JR ACADEMY · {EDITION}"
   - Center: black pill containing "{BOOTCAMP NAME EN}" in white mono
   - Right: monospace "{YEAR · MONTH}" + hatched diagonal corner mark

2. Breadcrumb row (mono, GitHub-style)
   - Left: "  JiangRen-Academy / {slug}"
   - Right: thin black-bordered box "★ {招生状态}" with red star + red text "UPGRADED" or "NEW"

3. Hero title block
   - Two stacked lines, ultra-bold black:
     "{BOOTCAMP NAME LINE 1}" / "{BOOTCAMP NAME LINE 2}"
   - To the right: small "+" mark, dotted connector, black square badge with
     edition number + tiny red dot
   - Below: large Chinese headline "{中文副标题}" with one keyword in #FFB800

4. Subtitle strip
   - Yellow #FFB800 filled bar (no border) containing black text:
     "{X 周课程 + Y 周实战}"
   - Right side: small mono "{2-line English caption}"

5. Highlight section (3 dark navy #0E1530 cards in a row)
   - Black tab label top-left: "▶ {章节标题}" + mono "HIGHLIGHT"
   - Each card: 1px black border, small red triangle bottom-right
   - Top label white uppercase: "{MODULE 1}" | "{MODULE 2}" | "{MODULE 3}"
   - Chinese subtitle in light gray below
   - Center: signature-style flat illustration matching the module
   - Bottom dot-separated tags in white: "{tag1 · tag2 · tag3 · tag4}"

6. Stats strip (white, top + bottom black borders)
   - Four columns separated by thin vertical rules
   - Each column: yellow line icon + huge number + EN label + Chinese label
     "{N1} LESSONS · {N2} LABS · {N3} PHASES · {N4} PROJECTS"

7. Audience section
   - Red tab label "适合人群" + mono "FOR WHO"
   - Four persona columns: yellow line icon + Chinese role + 1-line value prop
   - Right side: signature-style flat illustration unique to this bootcamp

8. CTA block (bottom-left)
   - Square QR code placeholder (black modules, white quiet zone)
   - Right of it: small "扫码了解" then yellow bar with black text "{CTA HEADLINE}"
   - Below: one Chinese closing line

9. Footer (black top border)
   - Left: small text-only mark "JR Academy" + mono "Empower Engineers. Build The Future."
   - Right: mono "#{edition} · {BOOTCAMP NAME EN}"

DECORATIVE DETAILS (sprinkle, don't overdo, signature-style appropriate)
- Tiny "+" cross marks at random grid intersections
- 1-2 small empty dotted-outline squares as alignment marks
- Hatched diagonal stripes only in top-right corner mark

NEGATIVE
- No photographic elements, no 3D, no neon glow, no drop shadows
- No emoji, no stock-illustration faces, no fake logos
- Do not invent extra text beyond the strings specified in [TEXT] section
- Simplified Chinese only, no traditional characters
```

> 每个 bootcamp 在 `GLOBAL STYLE` + `DECORATIVE DETAILS` 段填入自己的签名风格 DNA。LAYOUT 1-9 的骨架不动。

---

## 与其他三种格式的对比

| 维度 | xhs | wechat-cover | hero | **recruitment-poster** |
|------|-----|--------------|------|-----------------------|
| 尺寸 | 1242×1660 | 1080×1260 | 1920×900 | **1024×1536** |
| 文字段落 | ≤ 5 | ≤ 2 | 0–1 | **25–35** |
| 视觉占比 | 60% | 70%+ | 100% | **30%（70% 信息）** |
| 风格变体 | A 写实 | C 大字报 | B 极简 | **签名风格（13 选 1）** |
| 调性 | 共情、有故事 | 冲击、单点 | 质感、克制 | **信息密度、严谨、可识别** |
| 主用途 | 小红书种草 | 朋友圈封面 | 详情页 hero | **招生主图 / 全景介绍** |

---

## 出图 tips

| 症状 | 对策 |
|------|------|
| 文字段太多模型乱填 | 把每段中文都写进 `[TEXT]` 引号里；删掉模糊的"about" |
| 9 个区块挤一起 | 显式 `top-to-bottom 9 sections with visible spacing between them` |
| 签名风格不到位 | DNA 描述要具体（如 "halftone grain, blueprint paper, hatched marks"），别只说风格名 |
| 品牌色丢失 | 在每段 [TEXT] 描述里都重复 hex，不只在 [STYLE] 段 |
| 图标全是机器人 | 显式说 `flat single-line geometric icons, no character mascots` |
| 出现承诺话术 | 在 [NEGATIVE] 段加 `no guarantee phrases like "100%" or "guaranteed"` |
