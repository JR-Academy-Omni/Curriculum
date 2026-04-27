# 三种格式规范（Format Specs）

> 同一个海报概念在三种格式下，**构图、文字密度、视觉语言完全不同**，不能简单复用。

---

## 1. 小红书种草（`xhs`）

### 基本参数
- **尺寸**: `1242×1660`（3:4 竖版，小红书原生比例）
- **风格变体**: A. 写实生活流
- **平台关键词**: `小红书 lifestyle-tech style, Xiaohongshu post`

### 构图分区

```
┌─────────────────────────────┐ ← 1242 宽
│                             │
│                             │
│   VISUAL ZONE (60%)         │ ← 主视觉：场景、人物、物件
│   - 真人 + 真书桌 / 显示器   │   1242 × 996px
│   - iPhone 偏文艺风格        │
│   - 关键道具引视线           │
│                             │
│                             │
├─────────────────────────────┤
│  TEXT CARD ZONE (40%)       │ ← 文字卡：白底黑字
│                             │   1242 × 664px
│  📍 大标题（超大）           │
│     副标题                   │
│  ✓ bullet 1                 │
│  ✓ bullet 2                 │
│  ✓ bullet 3                 │
│  CTA                        │
│  品牌角标                    │
└─────────────────────────────┘
```

### 文字密度上限
- 大标题：1 行 ≤ 14 字
- 副标题：1 行 ≤ 18 字
- Bullet：3 条，每条 ≤ 14 字
- CTA：1 行 ≤ 12 字
- 总段落数：≤ 5

### 调性
- **第一人称、有故事感**：「我学了 XX」「第 N 周我开始 XX」
- **不喊口号**：不要"实现财富自由"、"拥抱 AI 时代"
- **生活质感**：场景里要有可识别的真物件（笔记本、咖啡、书、显示器）

### 关键 prompt 片段（复制到所有 xhs prompt）

```
Create a vertical 3:4 poster (1242x1660), 小红书 (Xiaohongshu) lifestyle-tech post style.

Top 60% (visual zone): {photo scene description},
Photo-realistic, slight film grain, like an iPhone candid photo,
warm natural lighting, slightly imperfect composition.

Bottom 40% (text card zone): clean off-white background (#FFF1E7),
{text overlay}.
```

---

## 2. 朋友圈 / 视频号封面（`wechat-cover`）

### 基本参数
- **尺寸**: `1080×1260`（接近朋友圈 1:1.17，视频号 9:16 通用安全区）
- **风格变体**: C. 冲突大字报流
- **平台关键词**: `WeChat Moments cover style, single dominant visual`

### 构图分区

```
┌──────────────────────────┐ ← 1080 宽
│                          │
│                          │
│   DOMINANT VISUAL        │ ← 单一强冲突视觉
│   (full bleed 70%+)      │   人脸特写 / 手部 / 物件
│                          │   高反差 + 戏剧光
│                          │
│  ┌─────────────────┐     │
│  │ 一行大标题       │ ← 文字直接叠在画面上
│  │ 一行副标题       │   黑底白字 / 白底黑字 / 红字
│  └─────────────────┘     │
│           品牌角标        │
└──────────────────────────┘
```

### 文字密度上限
- 标题：1 行 ≤ 10 字（要超大、超粗）
- 副标题：1 行 ≤ 16 字（可省略）
- **不要 bullet、不要 CTA**
- 总段落数：≤ 2

### 调性
- **冲突感**：标题要让人停下来
- **单点视觉**：一张脸、一只手、一个物件，不要堆元素
- **黑白红高对比**：少用中间色

### 关键 prompt 片段

```
Create a vertical 9:11 poster (1080x1260), WeChat Moments / 视频号 cover style.

Full-bleed bold dominant visual: {single subject close-up},
high contrast, dramatic side lighting, editorial poster mood.

Large overlapping typography (Chinese):
- Centered, extra-large heavy bold sans-serif (思源黑体 Heavy style),
  {hex color}, "{大标题，≤ 10 字}"
- Below, smaller white text on dark band: "{副标题，≤ 16 字}"

Bottom-right tiny tag: "{brand mark}"
```

---

## 3. 课程详情页 hero（`hero`）

### 基本参数
- **尺寸**: `1920×900`（16:9 偏扁，常见 hero 比例）
- **风格变体**: B. 极简编辑流
- **平台关键词**: `editorial hero banner, marketing landing page`

### 构图分区

```
┌─────────────────────────────────────────────────────────┐ ← 1920 宽
│                                                          │
│                                                          │
│  LEFT 50%: NEGATIVE SPACE     RIGHT 50%: ANCHOR VISUAL   │
│  (前端会叠真标题)              (抽象 / 数据 / 物件)       │
│                                                          │
│  ⚠️ 留给前端文字的安全区        - 编辑流构图              │
│                                - 不要满屏元素             │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### 两种用法

**用法 A：图上不带字**（推荐，前端叠真 H1）
- 整张图就是一个氛围背景
- 主体偏右 30%，左侧留空给前端 overlay
- 适用：详情页、Bootcamp 介绍页 hero

**用法 B：图上带极简标题**（适用：营销邮件、社交分享卡）
- 极简一行 headline + 品牌角标
- 不放副标题、不放 bullet

### 文字密度上限
- 用法 A：**0 字**（纯图）
- 用法 B：1 行 headline ≤ 14 字 + 1 个品牌角标

### 调性
- **质感优先**：细腻光影 / 微妙渐变 / 有故事的物件
- **不喊**：营销味降到最低，让人愿意停留
- **留白**：≥ 30% 画面留给负空间

### 关键 prompt 片段

```
Create a horizontal 16:9 hero banner (1920x900), editorial minimalist style.

Right-side anchor (≈ 40% width): {abstract or photo subject},
soft natural light, subtle gradient background, lots of negative space.

Left-side: keep mostly empty (≥ 50% negative space) — this area will be
overlaid with H1 by the frontend.

[OPTIONAL TEXT, only for用法B]:
Bottom-left small heading, geometric sans-serif (Bricolage Grotesque style),
{hex color}, "{≤ 14 字 headline}".
Bottom-right tiny tag: "{brand mark}".

Color palette: {#hex} / {#hex} / {#hex}.
No emojis. No graphic logos. No watermarks.
Subtle, premium, editorial feel.
```

---

## 4. 招生海报 / 全景图（`recruitment-poster`）

> 整张图把整个 bootcamp 讲清楚 —— 定位 + 数据 + 模块 + 受众 + CTA。详细规范见独立文档 [`recruitment-poster-spec.md`](recruitment-poster-spec.md)。

### 基本参数
- **尺寸**: `1024×1536`（2:3 竖版，gpt-image-2 原生比例）
- **风格变体**: 不属于 A/B/C —— 每个 bootcamp 独立**签名风格**（13 种已用：GitHub Tech Zine / Vector Lab Notebook / Risograph Workbook / Cursor IDE Splashscreen / 80s Computer Manual / Swiss Corporate Memo / Excel Dashboard Print / Boarding Pass Itinerary / Subway Map Diagram / CI/CD Blueprint / Browser DevTools Inspector / Algorithm Card Deck / Open-Source Manifesto Zine），详见 [`style-lineage.md`](style-lineage.md)
- **平台关键词**: `dense info-graphic recruitment poster, single page summary`
- **gpt-image-2 模式**: **Thinking** 模式（Instant 模式渲染密集中文 + 多区块极易翻车）

### 构图分区（9-block anatomy，所有 bootcamp 共享骨架）

```
┌────────────────────────────────────────┐ 1024 宽
│  ① TOP NAV BAR                          │
│  ② BREADCRUMB / 招生状态徽章             │
│  ③ HERO TITLE BLOCK                     │
│  ④ SUBTITLE STRIP (yellow #FFB800 bar)  │
│  ⑤ HIGHLIGHT SECTION (3 cards)          │
│  ⑥ STATS STRIP (4 columns)              │
│  ⑦ AUDIENCE SECTION (4 personas + 插画) │
│  ⑧ CTA BLOCK (QR + 黄条 tagline)        │
│  ⑨ FOOTER                               │
└────────────────────────────────────────┘ 1536 高
```

### 文字密度上限
- 段落总数：25-35 段（包括所有 tag、数字、标签）
- Hero EN 大标题：≤ 22 字符
- 中文副标：≤ 18 字
- Subtitle strip：≤ 24 字
- 每张 module 卡 EN 标题：≤ 18 字符
- 每张卡中文小标题：≤ 14 字
- 4-tag 列：每 tag ≤ 5 字
- 数字：1-4 位
- persona 标题：≤ 8 字 / 副标 ≤ 14 字

### 调性
- **信息密度优先**：海报存在的目的是"一张图讲清楚整个 bootcamp"
- **签名风格主导视觉**：每个 bootcamp 一眼能区分
- **品牌色硬约束**：必须能看到 `#FF5757` / `#10162F` / `#FFF1E7` / `#FFB800` 中的至少 3 个
- **无承诺话术**：CTA 用"扫码了解课程大纲" / "1v1 求职辅导"
- **不画 logo**：右下角文字 tag `JR Academy · {Bootcamp}`

### 关键 prompt 片段

> 完整骨架在 [`recruitment-poster-spec.md`](recruitment-poster-spec.md)，每个 bootcamp 在 `GLOBAL STYLE` + `DECORATIVE DETAILS` 段填入自己的签名风格 DNA，LAYOUT 1-9 的骨架不动。

```
Model: gpt-image-2.
Aspect ratio: 2:3. Image size: 1024x1536. Mode: Thinking.

Create a 1024x1536 portrait print poster — a dense single-page recruitment
poster summarizing an entire JR Academy bootcamp.

GLOBAL STYLE
- Signature style: {STYLE NAME}
- Style DNA: {1-line description}
- Brand colors (mandatory, at least 3 of):
  #FF5757 · #10162F · #FFF1E7 · #FFB800
... (LAYOUT 1-9 + DECORATIVE + NEGATIVE — see recruitment-poster-spec.md)
```

---

## 四格式对比速查

| 维度 | xhs | wechat-cover | hero | recruitment-poster |
|------|-----|--------------|------|-------------------|
| 尺寸 | 1242×1660 | 1080×1260 | 1920×900 | **1024×1536** |
| 比例 | 3:4 竖 | ~9:11 竖 | 16:9 横 | **2:3 竖** |
| 文字段落 | ≤ 5 | ≤ 2 | 0–1 | **25-35** |
| 视觉占比 | 60% | 70%+ | 100%（含留白） | **30%（70% 信息）** |
| 风格变体 | A 写实生活 | C 冲突大字报 | B 极简编辑 | **签名风格（13 选 1）** |
| 调性 | 真实、有故事 | 冲击、单点 | 质感、克制 | **信息密度、严谨、可识别** |
| 主用途 | 小红书种草 | 朋友圈、视频号封面 | 详情页 hero、邮件头图 | **招生主图、全景介绍** |

---

## 同概念的三种格式如何区分

> 同一个角色×痛点组合（比如 programmer × age-35），三种格式**绝对不能用一样的 prompt 改个尺寸**。

举例 —— 「35 岁程序员 × age-35」三种格式的核心差异：

| | xhs | wechat-cover | hero |
|---|-----|--------------|------|
| **画面主体** | 程序员 + 双显示器 + 夜晚书桌 | 一只敲键盘的手特写 | 抽象的代码光影 + 一杯咖啡 |
| **文字** | 故事开场 + 3 bullet 卖点 + CTA | 一句"35 岁，重新写代码" | 0 字 / 或仅"AI Engineer" |
| **情绪** | 共情、有温度 | 冲击、决绝 | 质感、克制、邀请 |
| **CTA** | "评论区扣 'AI'" | 无 | 无 |

记住：**xhs 是一个朋友在跟你聊她的转型故事，wechat-cover 是一面墙上的海报让你停下来，hero 是一扇微微打开的门请你进来。**
