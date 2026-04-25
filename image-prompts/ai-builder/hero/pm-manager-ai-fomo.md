---
bootcamp: ai-builder
bootcampName: Vibe Coding 提升班
role: pm-manager
roleName: 产品/技术经理
painPoint: ai-fomo
painPointName: AI FOMO（团队都在用就你没用）
format: hero
formatName: 课程详情页 hero
size: 1792x1024
displaySize: 1920x900
model: gpt-image-2
mode: Instant
lang: zh
version: 1
title: Vibe Coding 提升班（MCP 串联 hero · 工具链汇流）
ctaText: ""
tags: [hero, 详情页, MCP, 工具链]
---

# Tech Manager × AI FOMO × Hero

## 完整 Prompt

### 用法 A — 0 字纯氛围

```
Horizontal 16:9 hero banner (1792×1024), editorial minimalist style.

Right 45% of canvas: a flat-design illustration showing "MCP" as the central hub.
Center: a rounded square hub labeled "MCP" in dark navy text, soft drop shadow.
From the hub, four thin curved connector lines radiate outward to four small rounded badge tiles
arranged around it (top-right, right, bottom-right, bottom). Each tile contains only a generic abstract icon (no real branding):
- Tile 1: a small kanban-style three-column icon
- Tile 2: a small frame / canvas icon
- Tile 3: a small page-with-lines icon
- Tile 4: a small terminal-prompt icon
Each tile uses a different muted accent color (soft orange, teal, indigo, peach).
Overall premium editorial, plenty of breathing room, soft drop shadows.

Left 55% of canvas: completely empty — calm gradient wash from off-white #FFF1E7 (top) to slightly warmer cream (bottom). MUST stay clean for frontend H1 overlay.

Premium editorial design, soft ambient light. The label "MCP" must render as three uppercase English letters. No watermark. No logos. No real Atlassian / Figma / Notion / Slack branding. No people. No real flags.
```

### 用法 B — 带极简 headline

```
[复制用法 A，然后追加：]

Bottom-left text overlay, 60px from canvas edge, heavy bold Chinese sans-serif (思源黑体 Heavy style), color #10162F, 1 line:
"MCP 把工具串成一条流水线"

Bottom-right corner, 40px from edge, tiny text in #444:
"JR Academy · Vibe Coding 提升班"

Sharp text. Flat solid color. "MCP" must be three uppercase English letters.
```

## 备用变体

### v2 — 三主角并排（不用 MCP hub）
> 右侧换成三个并排圆角徽章："Claude Code" / "Cursor" / "Codex CLI"，每个徽章下方一条细线连接到一个共享的小圆点 "ship"，强调"三工具一个目标"。

### v3 — orchestration 树状图
> 右侧画一个 main agent 在最上方，下方 3 个 sub-agent 并排，sub-agent 之间有细线串联，强调"指挥官视角"。

## 出图 tips

- **左 55% 必须空**
- **MCP 是 3 个大写字母**：append `"MCP" must be three uppercase English letters M-C-P, no Chinese translation, no other characters`
- **不要画真实工具 logo**：模型容易画 Jira/Figma 真 logo，append `the four surrounding tile icons must be generic abstract shapes only — absolutely no real Atlassian, Figma, Notion, GitHub, Slack, or any recognizable brand iconography`
- **如果 hub 看起来太复杂**：换 v2 三 badge 版本，构图更克制
