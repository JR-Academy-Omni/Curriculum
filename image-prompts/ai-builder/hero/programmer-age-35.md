---
bootcamp: ai-builder
bootcampName: Vibe Coding 大师课
role: programmer
roleName: 程序员/工程师
painPoint: age-35
painPointName: 35 岁焦虑
format: hero
formatName: 课程详情页 hero
size: 1792x1024
displaySize: 1920x900
model: gpt-image-2
mode: Instant
lang: zh
version: 1
title: Vibe Coding 大师课（agent.md 抽象 hero · 老兵层级）
ctaText: ""
tags: [hero, 详情页, agent.md, 极简]
---

# Programmer × 35 岁 × Hero

## 完整 Prompt

### 用法 A — 0 字纯氛围

```
Horizontal 16:9 hero banner (1792×1024), editorial minimalist style.

Right 40% of canvas: a flat-design illustration of an opened minimalist notebook lying slightly tilted.
The visible left page shows a clean markdown header "# agent.md" in dark navy text,
with three short lines below it formatted as YAML-like list items, rendered as soft gray dashes
(do not render readable instructions — just abstract visual texture suggesting structure).
A single thin red bookmark ribbon hangs out the bottom of the notebook.
Beside the notebook, a small flat circular badge with the number "8" inside, in soft warm orange,
suggesting "8 years of experience". Soft drop shadow under notebook, premium editorial design.

Left 60% of canvas: completely empty — calm gradient wash from off-white #FFF1E7 (top) to slightly warmer cream (bottom). MUST stay clean for frontend H1 overlay.

Premium editorial design, soft ambient warm light. The text "# agent.md" must render exactly with a hash, lowercase letters, and a single dot. The number "8" must be an Arabic numeral. No watermark. No logos. No people. No real publisher branding on the notebook.
```

### 用法 B — 带极简 headline

```
[复制用法 A，然后追加：]

Bottom-left text overlay, 60px from canvas edge, heavy bold Chinese sans-serif (思源黑体 Heavy style), color #10162F, 1 line:
"老兵的下一站 · 不写更多代码 · 写更好的 agent.md"

Bottom-right corner, 40px from edge, tiny text in #444:
"JR Academy · Vibe Coding 大师课"

Sharp text. Flat solid color. "agent.md" must render exactly.
```

## 备用变体

### v2 — 工具链 badges
> 右侧把笔记本换成三个圆角徽章并排："Claude Code" / "Cursor" / "Codex"，每个徽章上方一个小小的"年份徽章" 5y / 8y / 10y，强调"老兵升级版"。

### v3 — orchestration 流程
> 右侧画一个简化的 orchestration diagram：一个大的"主 agent" 圆圈，下方分出 3 个小的"sub-agent" 圆圈，主圆圈旁边一个小小的人形 silhouette，强调"你是指挥不是码工"。

## 出图 tips

- **左 60% 必须空**：append `the entire left 60% of the canvas must remain empty — no text, no decoration, no shape, only soft cream gradient`
- **"# agent.md" 三件套**：hash、lowercase、单点，最容易被画错，append `the literal string '# agent.md' must contain a hash sign, a space, lowercase letters 'agent', a literal period, and lowercase letters 'md'`
- **"8" 的 badge 别变成抽象图案**：append `the number "8" inside the badge must be a clearly readable Arabic numeral 8, not a stylized infinity or other symbol`
- **不要画键盘 / 显示器 / 程序员**：hero 必须**完全无人物 / 无设备**，否则破坏左侧空白
