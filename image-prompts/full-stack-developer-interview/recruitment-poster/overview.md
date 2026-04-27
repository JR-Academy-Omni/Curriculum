---
bootcamp: full-stack-developer-interview
bootcampName: 手撕全栈面试题班 Full-stack Developer Interview
role: general
format: recruitment-poster
formatName: 招生海报 / 全景图
size: 1024x1536
displaySize: 1024x1536
model: gpt-image-2
mode: Thinking
lang: zh
version: 1
styleName: Algorithm Card Deck
title: 手撕全栈面试题班 · Algorithm Card Deck
ctaText: 扫码看 9 大模块 + 89 个 Lab
tags: [招生海报, Algorithm Card Deck, full-stack-developer-interview]
---

# 手撕全栈面试题班 · 招生海报（Algorithm Card Deck）

> 模型：`gpt-image-2` · 模式：**Thinking** · 比例 2:3 · 1024×1536

## 这张想表达什么

针对全栈开发求职者的面试突击班。150 节课、89 个 Lab、9 大模块（往期录播 + 求职策略 + 面试核心 + 前端高频 + 后端高频 + 系统设计 + AI 编程面试 + 算法白板 + 模拟面试）。版本 7.0，2026 更新。

签名风格 **Algorithm Card Deck** —— 整张海报像一副 LeetCode 主题的扑克牌 + 复杂度卡片 + 终端 prompt。把 9 个模块画成 9 张面试题卡，配 O(n) / O(log n) 复杂度标记和 suit-style corner marks，让刷题求职者一眼"这是为我准备的"。

## 海报上的中文文字

- ① 顶栏左：`JR ACADEMY · COURSE 012`
- ① 顶栏中：`FULL-STACK INTERVIEW`
- ① 顶栏右：`v7.0 · 2026`
- ② 面包屑（终端 prompt）：`$ jr-academy run interview --bootcamp full-stack`
- ② 状态徽章：`★ 第 7 版上线` + `INTERVIEW READY`
- ③ Hero EN：`INTERVIEW` / `BOOTCAMP`
- ③ 中文副标：`手撕高频题 · 系统设计 · AI 编程面试一次打通`（"打通" 用 #FFB800）
- ④ 黄条：`9 大模块 · 150 节课 · 89 个 Lab · CTO 亲授`
- ④ 右侧 mono：`O(STUDY) → / O(OFFER).`
- ⑤ 区块标签：`▶ 三大冲刺方向` + `HIGHLIGHT`
- ⑤ 卡 1：`FRONT + BACK` / `前后端高频突击 · 自学 + Lab` / `JS · React · API · DB`
- ⑤ 卡 2：`SYSTEM DESIGN` / `中大型系统从 0 设计` / `Scale · Cache · Queue · Trade-off`
- ⑤ 卡 3：`AI + ALGO` / `AI 编程面试 + 白板算法` / `Prompt · Eval · DP · Graph`
- ⑥ 数字条：`150 LESSONS / 系统化课程`、`89 LABS / 互动实战`、`9 MODULES / 突击模块`、`COMPLEXITY: O(NEXT_OFFER)`
- ⑦ 受众标签：`适合人群` + `FOR WHO`
- ⑦ 4 personas：
  - `准备面试的开发` / `刷题但缺套路`
  - `转行进 Tech` / `第一次面试技术岗`
  - `想跳槽的资深` / `打磨系统设计 + 谈薪`
  - `应届毕业` / `毕业窗口拿 Offer`
- ⑦ 插图标注：`STARTER HAND · 5 CARDS · 9 MODULES TOTAL`
- ⑧ CTA：`扫码看大纲` + `9 大模块 + 89 个 Lab 详情` + `Stan Luo (CTO, Jobpin AI) 亲授 + 模拟面试`
- ⑨ 页脚左：`JR Academy` + `Empower Engineers. Ace The Interview.`
- ⑨ 页脚右：`#012 · FULL-STACK INTERVIEW · v7.0`

## 完整 Prompt

```
Model: gpt-image-2.
Aspect ratio: 2:3. Image size: 1024x1536. Mode: Thinking.

Create a 1024x1536 portrait print poster — a single-page recruitment poster
styled as a LeetCode-meets-playing-card deck, summarizing JR Academy's
Full-Stack Developer Interview Bootcamp.

GLOBAL STYLE
- Signature style: Algorithm Card Deck
- Style DNA: playing-card aesthetic crossed with terminal prompt — every
  highlight card looks like a poker card with suit-style corner marks
  (replace suits with terminal symbols: $ / # / { } / </> ); large
  complexity tags O(n) / O(log n) / O(1) in monospace; subtle card-edge
  rounded corners with thin shadow; problem-set table-of-contents
  typography; terminal $ prompt at top
- Brand colors (mandatory):
  Background #FFF1E7 (cream paper / felt-table feel)
  Ink #10162F (deep navy as card ink)
  Accent yellow #FFB800 (highlighted complexity / one keyword)
  Alert red #FF5757 (red suit-style corner mark + UPGRADED badge)
- Typography: monospace dominant (Space Mono / JetBrains Mono); bold
  geometric sans-serif (Bricolage Grotesque) for English headlines; 思源黑体
  Bold for Chinese; complexity notations O(n) etc. always monospace
- Highlight cards: cream cards with rounded corners (8px), subtle 1px navy
  border, suit-style corner marks (top-left + bottom-right rotated), card
  number in top-left

LAYOUT — 9 blocks top to bottom

1. TOP NAV BAR (44px, navy bottom border)
   - Left: small terminal-prompt "$" icon + mono "JR ACADEMY · COURSE 012"
   - Center: navy pill "FULL-STACK INTERVIEW" in cream mono
   - Right: mono "v7.0 · 2026" + small playing-card-style corner mark

2. TERMINAL PROMPT ROW (replaces breadcrumb)
   - Left mono in cream-on-navy strip: "$ jr-academy run interview --bootcamp full-stack"
   - Right: thin navy-bordered box "★ 第 7 版上线" + red text "INTERVIEW READY"

3. HERO TITLE BLOCK
   - Two stacked lines, ultra-bold navy left-aligned:
     "INTERVIEW" / "BOOTCAMP"
   - Right of title: a flat illustration of 5 fanned-out playing cards each
     with monospace symbols ($, #, { }, </>, *) and complexity tags on the
     edges (O(n), O(log n))
   - Below: large Chinese line "手撕高频题 · 系统设计 · AI 编程面试一次打通"
     where "打通" is colored #FFB800

4. SUBTITLE STRIP
   - Yellow #FFB800 filled bar (clean rectangle) with navy text:
     "9 大模块 · 150 节课 · 89 个 Lab · CTO 亲授"
   - Right: small two-line mono "O(STUDY) → / O(OFFER)."

5. HIGHLIGHT SECTION (3 playing-card style panels)
   - Black tab label top-left: "▶ 三大冲刺方向" + small mono "HIGHLIGHT"
   - Three equal cream cards with rounded corners + 1px navy border, each:
     * Top-left corner: large mono symbol ($ / { } / </>) + complexity tag
       "O(n)" | "O(log n)" | "O(1)" stacked below
     * Bottom-right corner: same symbol + complexity tag rotated 180°
     * Top label uppercase navy: "FRONT + BACK" | "SYSTEM DESIGN" | "AI + ALGO"
     * Chinese subtitle below in navy:
       "前后端高频突击 · 自学 + Lab"
       "中大型系统从 0 设计"
       "AI 编程面试 + 白板算法"
     * Center: minimal flat illustration —
       card 1: stacked tabs (前端) + DB cylinder (后端) connected by API arrow
       card 2: a large hexagonal node with sub-nodes (cache / queue / DB)
       card 3: a chess board half + AI brain half
     * Bottom monospace dot-separated tags in navy:
       "JS · React · API · DB"
       "Scale · Cache · Queue · Trade-off"
       "Prompt · Eval · DP · Graph"
     * Tiny red triangle in card bottom-right (in addition to card-suit mark)

6. STATS STRIP (looks like a problem-set statistics bar)
   Four columns separated by thin vertical rules, monospace:
   - book icon | 150 | LESSONS | 系统化课程
   - flask | 89 | LABS | 互动实战
   - layered cube | 9 | MODULES | 突击模块
   - sigma symbol | O(NEXT_OFFER) | COMPLEXITY | (no Chinese — meta joke)

7. AUDIENCE SECTION
   - Red tab label "适合人群" + mono "FOR WHO"
   - Four persona columns, navy line icons + Chinese role + value:
     * laptop with </> → "准备面试的开发" / "刷题但缺套路"
     * arrow turning → "转行进 Tech" / "第一次面试技术岗"
     * arrow up → "想跳槽的资深" / "打磨系统设计 + 谈薪"
     * graduation cap → "应届毕业" / "毕业窗口拿 Offer"
   - Right of personas: a fanned hand of 5 playing cards (different suits/
     complexity) with caption mono:
     "STARTER HAND · 5 CARDS · 9 MODULES TOTAL"

8. CTA BLOCK (bottom-left, framed like a deal-card area on green felt)
   - Square QR placeholder
   - Right: small "扫码看大纲", then yellow #FFB800 bar with navy text
     "9 大模块 + 89 个 Lab 详情", then closing line:
     "Stan Luo (CTO, Jobpin AI) 亲授 + 模拟面试"

9. FOOTER (navy top border, looks like a card-deck box label)
   - Left: text mark "JR Academy" + mono "Empower Engineers. Ace The Interview."
   - Right: mono "#012 · FULL-STACK INTERVIEW · v7.0"

DECORATIVE DETAILS
- Subtle felt-table texture on background (very faint diagonal weave)
- Card-suit corner marks rotated 180° on bottom-right (classic playing card)
- 1-2 small floating "?" cards as if mid-shuffle
- Tiny "+1 OFFER" stack indicator near corner

NEGATIVE
- No real LeetCode / HackerRank / Codeforces logos
- No casino imagery (no chips / dice / cards spread on table)
- No emoji
- No 3D rendering of cards
- No glow / chrome
- Do not invent text beyond strings specified
- Simplified Chinese only
- No guarantee phrases anywhere ("100% offer" etc.)
```

## 备用变体

### v2 — Periodic Table of Interview Topics（更"知识图谱"感）

> 把 deck 风换成元素周期表：每个模块 = 一个元素方块（symbol + atomic number + 中文名 + 复杂度）。
> 适合给系统设计 / 算法导师社群发，气质从"游戏感"切到"知识体系感"。

## 出图 tips

- **suit 改 mono symbol**：禁止画真扑克牌花色（♠♥♦♣），用 `monospace symbols $ # { } </>` 代替
- **complexity tags**：O(n) / O(log n) 必须用真 mono 写，否则模型会用 italic
- **不要画绿色赌桌**：明确 `cream paper background, NOT green felt casino table`
- **不要"O(1) = bug-free"营销话**：避免 ML 圈套话，保持冷静技术调
- **"COMPLEXITY: O(NEXT_OFFER)" 这一格无中文**：在 [TEXT] 显式说明这格不要中文标签
