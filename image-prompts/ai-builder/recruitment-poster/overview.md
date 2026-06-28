---
bootcamp: ai-builder
bootcampName: Vibe Coding 大师课
role: general
format: recruitment-poster
formatName: 招生海报 / 全景图
size: 1024x1536
displaySize: 1024x1536
model: gpt-image-2
mode: Thinking
lang: zh
version: 1
styleName: Cursor IDE Splashscreen
title: Vibe Coding 大师课 · Cursor IDE Splashscreen
ctaText: 扫码看大纲 + 第三期日程
tags: [招生海报, Cursor IDE Splashscreen, ai-builder]
---

# Vibe Coding 大师课 · 招生海报（Cursor IDE Splashscreen）

> 模型：`gpt-image-2` · 模式：**Thinking** · 比例 2:3 · 1024×1536

## 这张想表达什么

用 Claude Code、Cursor、Codex 做全栈开发。从 PRD 到 Skills/MCP/Agent 到部署上线。给**有编程基础**的开发者：从"能写功能"升级到"会造工具链"。

签名风格 **Cursor IDE Splashscreen** —— 整张海报像把 Cursor 的启动画面 + 编辑器 chrome 当作底版，暗色背景 + 语法高亮配色 + tab/status bar + terminal block，开发者看到立刻有家的感觉。

## 海报上的中文文字

- ① 顶栏左：`JR ACADEMY · COURSE 004`
- ① 顶栏中：`VIBE CODING BOOTCAMP`
- ① 顶栏右：`EDITION 003`
- ② 面包屑：`JiangRen-Academy / AI-Builder · Vibe Coding`
- ② 状态徽章：`★ 第三期招生中` + `UPGRADED`
- ③ Hero EN：`VIBE` / `CODING`
- ③ 中文副标：`从「会写代码」到「会造工具链」`（"造工具链" 用 #FFB800）
- ④ 黄条：`12 周课 + 39 Lab + 22 节直播 · 113 节系统化课程`
- ④ 右侧 mono：`SHIP MORE / WITH AI.`
- ⑤ 区块标签：`▶ 4 个核心阶段` + `HIGHLIGHT`
- ⑤ 卡 1：`PRD ＆ VIBE` / `Cursor + Claude Code + Codex 入门` / `PRD · 任务拆 · 上下文 · Review`
- ⑤ 卡 2：`SKILLS ＆ MCP` / `造工具链 + Agent 架构` / `Skills · MCP · Hooks · Plugins`
- ⑤ 卡 3：`SHIP IT` / `多模型精调 + 全栈交付` / `Prompt · Eval · Deploy · Monitor`
- ⑥ 数字条：`113 LESSONS / 系统化课程`、`39 LABS / 互动实战`、`22 LIVE / 直播课`、`63 HOURS / 总学时`
- ⑦ 受众标签：`适合人群` + `FOR WHO`
- ⑦ 4 personas：
  - `软件工程师` / `把日常工作丢给 Agent`
  - `全栈 / 独立开发` / `一个人交付一个产品`
  - `DevOps / SRE` / `把 runbook 写成 Skill`
  - `技术 Leader` / `带团队全员上 AI`
- ⑦ 插图标注：`build.ts · saved · main * · LF · UTF-8`
- ⑧ CTA：`扫码看大纲` + `第三期开课日程 / 名额咨询` + `把 Cursor 当成你的第二大脑`
- ⑨ 页脚左：`JR Academy` + `Empower Engineers. Build The Future.`
- ⑨ 页脚右：`#004 · VIBE CODING BOOTCAMP`

## 完整 Prompt

```
Model: gpt-image-2.
Aspect ratio: 2:3. Image size: 1024x1536. Mode: Thinking.

Create a 1024x1536 portrait print poster — a single-page recruitment poster
styled as a Cursor IDE splashscreen / editor chrome, summarizing JR Academy's
Vibe Coding Bootcamp.

GLOBAL STYLE
- Signature style: Cursor IDE Splashscreen
- Style DNA: dark IDE chrome (background #1e1e1e mixed with brand navy
  #10162F gradient block); top tab bar with active/inactive tabs; left
  activity bar with vertical icons; right side panel; bottom status bar with
  branch / encoding / line:col info; syntax-highlight palette inside content
  blocks (cyan strings, magenta keywords, yellow numbers); subtle
  glassmorphism on highlight cards; blinking caret indicators
- Brand colors (must be present even in dark theme):
  Background base #10162F (deep navy IDE-dark)
  Foreground text mostly #FFF1E7 (cream)
  Accent yellow #FFB800 for highlights / numbers
  Alert red #FF5757 for "diff removed" lines and the UPGRADED badge
  Syntax cyan accent for "string" tokens
- Typography: monospace dominant (Space Mono / JetBrains Mono style) — even
  the Chinese should be a clean Chinese sans-serif (思源黑体 Bold) but
  English headlines stay monospace bold
- Highlight cards: dark glass panels with 1px subtle border (rgba navy),
  inner glow soft, syntax-highlighted code snippets visible

LAYOUT — 9 blocks, structured AS IDE LAYERS (top to bottom)

1. TOP NAV BAR (treats as IDE title bar, 36px, dark navy)
   - Left: small Cursor-app-logo-style hexagon mark + mono "JR ACADEMY · COURSE 004"
   - Center: title bar text "VIBE CODING BOOTCAMP" in monospace cream
   - Right: mono "EDITION 003" + window control circles (red/yellow/green dots)

2. EDITOR TAB BAR (28px, slightly lighter band)
   - Left tabs: active tab "  bootcamp.tsx ●" then inactive "  README.md" then "  curriculum.json"
   - Right of tabs: monospace "  JiangRen-Academy / AI-Builder · Vibe Coding"
   - Far right: thin yellow-bordered chip "★ 第三期招生中" with red "UPGRADED" text

3. HERO TITLE BLOCK (looks like a giant editor heading)
   - Two stacked lines, ultra-bold cream with subtle cyan underglow:
     "VIBE" / "CODING"
   - To the right inside a code-block frame: cursor caret blinking + line
     numbers 1-3 visible, with a monospace snippet:
       1  type Edition = "003";
       2  // upgraded
       3  await ship();
     ("Edition" magenta, "003" yellow, "// upgraded" green)
   - Below: large Chinese "从「会写代码」到「会造工具链」"
     where "造工具链" is colored #FFB800

4. SUBTITLE STRIP (like a yellow inline highlight in code)
   - Yellow #FFB800 highlight band with dark navy text:
     "12 周课 + 39 Lab + 22 节直播 · 113 节系统化课程"
   - Right: small two-line mono "SHIP MORE / WITH AI."

5. HIGHLIGHT SECTION (3 dark glass panels with code-block aesthetic)
   - Dark tab label top-left: "▶ 4 个核心阶段" + small mono "HIGHLIGHT"
   - Three panels each with:
     * Top label monospace cream uppercase: "PRD & VIBE" | "SKILLS & MCP" | "SHIP IT"
     * Chinese subtitle in lighter gray:
       "Cursor + Claude Code + Codex 入门"
       "造工具链 + Agent 架构"
       "多模型精调 + 全栈交付"
     * Center: minimal flat icon —
       card 1: chat bubble pointing into a code-bracket symbol
       card 2: gear inside curly braces with MCP socket lines
       card 3: rocket inside a terminal prompt $ block
     * Bottom monospace tags (cream on dark):
       "PRD · 任务拆 · 上下文 · Review"
       "Skills · MCP · Hooks · Plugins"
       "Prompt · Eval · Deploy · Monitor"
     * Subtle red triangle in bottom-right of each (like a "git diff" marker)

6. STATS STRIP (looks like an integrated terminal block, monospace)
   Four columns separated by vertical rules, in dark IDE block styling:
   - ▶ icon | 113 | LESSONS | 系统化课程
   - flask  | 39  | LABS    | 互动实战
   - radio  | 22  | LIVE    | 直播课
   - clock  | 63  | HOURS   | 总学时

7. AUDIENCE SECTION
   - Red tab label "适合人群" + mono "FOR WHO"
   - Four persona columns, neon-cyan line icons + Chinese role + value:
     * laptop with </> → "软件工程师" / "把日常工作丢给 Agent"
     * person with rocket → "全栈 / 独立开发" / "一个人交付一个产品"
     * cylinder + gear → "DevOps / SRE" / "把 runbook 写成 Skill"
     * org chart → "技术 Leader" / "带团队全员上 AI"
   - Right of personas: a tilted IDE editor mock-window with 4 tabs and code
     snippet visible, caption monospace cream:
     "build.ts · saved · main * · LF · UTF-8"

8. CTA BLOCK (bottom-left, looks like a command palette popup)
   - Square QR placeholder (white modules on dark)
   - Right: small "扫码看大纲", then yellow #FFB800 highlight band with
     dark navy text "第三期开课日程 / 名额咨询", then closing line:
     "把 Cursor 当成你的第二大脑"

9. STATUS BAR (24px, IDE-bottom-style, dark navy)
   - Left: Git branch icon + monospace "main * · JR Academy"
   - Right: mono "Ln 2026 Col 04 · Spaces: 2 · UTF-8 · LF · #004 · VIBE CODING"

DECORATIVE DETAILS
- Tiny syntax-highlighted code lines as background watermark (5% opacity)
- Caret blink markers (▮) at strategic places
- Subtle horizontal scan lines on glass panels
- File-tree icons in left margin (very faint)

NEGATIVE
- No light theme — must be dark
- No fake VS Code logo / Cursor logo (just hexagon abstraction)
- No 3D rendering of laptops / no marketing photos
- No emoji except text-style ▶ ★
- Do not invent text beyond strings specified
- Simplified Chinese only
- No guarantee phrases anywhere
```

## 备用变体

### v2 — Terminal Cyberdeck（更黑客风）

> 把 IDE chrome 换成纯终端美学：black bg + green phosphor monospace + ASCII art borders + retro CRT scanlines。
> 适合发 dev 圈 / Hacker News 截图风。

## 出图 tips

- **代码块要看清**：显式说 `code snippet must be readable, syntax-highlighted, line numbers visible`，否则会糊成噪点
- **Cursor logo**：模型不知道 Cursor 真 logo → 用 `abstract hexagon mark` 替代
- **状态栏 Git info**：`main *` 这种符号要写进 [TEXT] 段
- **不要画 IDE 截图**：明确 `IDE chrome ELEMENTS reused as poster layout, NOT a screenshot of an editor`
- **暗色 + 品牌色冲突**：背景 #10162F 已经深，红黄就要够亮才能跳出来
