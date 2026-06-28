---
bootcamp: ai-builder
bootcampName: Vibe Coding 大师课
role: programmer
roleName: Developers / Engineers
painPoint: side-hustle
painPointName: Side hustle / Second income
format: xhs
formatName: Instagram / LinkedIn Post
size: 1024x1792
displaySize: 1080x1350
model: gpt-image-2
mode: Thinking
lang: en
version: 1
title: Ship a SaaS this weekend. Not a side project.
ctaText: Comment "BUILD" for the syllabus
tags: [developer, side-hustle, build-in-public, Claude-Code, MCP, Skills]
---

# Developer × Side Hustle × Instagram / LinkedIn Post (EN)

> Model: `gpt-image-2` · Mode: **Thinking** · Aspect ratio 4:5

## Why this works for English audiences

`#buildinpublic` is the dominant aesthetic for English-speaking devs on LinkedIn / Twitter / IG. The promise here isn't "learn to code with AI" (too late, audience is past that) — it's **"you can ship a real SaaS in a weekend now, here's the playbook"**. Anchor the credibility with concrete tooling: Claude Code + Skills + MCP + Codex CLI = ship-ready stack. This is positioned as the upgrade path for devs who already know how to code but haven't yet learned the AI-coding workflow.

## Text on the poster

- **Headline (2 lines)**: Ship a SaaS this weekend / Not a side project
- **Subheadline**: Claude Code + Skills + MCP. The full ship-ready stack.
- **Bullets**:
  - ✓ 5 production projects you fork into your own product
  - ✓ Skills · MCP · Sub-agents · agent.md templates
  - ✓ 113 lessons · ship in week 4, polish in week 12
- **CTA**: Comment "BUILD" for the syllabus
- **Brand tag**: JR Academy · Vibe Coding 大师课

## Full Prompt

```
Model: gpt-image-2.
Aspect ratio: 4:5. Image size: 1024×1792 px. Mode: Thinking.

A vertical 4:5 lifestyle-tech poster in editorial Instagram / LinkedIn post style,
featuring a developer at a small home studio at night.
Three-quarter back view (we see profile and screens, never a full front face).
The laptop screen on the left shows a clean conversational AI coding terminal with green and white text streaming code blocks, the visible header reads "agent.md loaded" in lowercase.
A second monitor on the right shows a simple SaaS pricing-tier landing page mockup with three rounded cards labeled "Starter / Pro / Team" — generic, no real brand.
On the desk: an open notebook with hand-sketched product wireframes, a half-full cold-brew bottle, a mechanical keyboard, a small "ship it" sticker on the laptop bezel.
Photo-realistic, slight film grain, candid iPhone night photo, warm desk lamp from camera-left.

Composition: top 60% photo scene; bottom 40% clean text card with 2px black top border, on flat #FFF1E7 background.

Place at the top of the text card, extra-large heavy bold sans-serif typography (Bricolage Grotesque or Inter Black style), color #10162F, tight letter spacing, in 2 lines, reading:
"Ship a SaaS this weekend"
"Not a side project"

Just below, medium-weight sans-serif (DM Sans Medium style), color #444, in one line, reading:
"Claude Code + Skills + MCP. The full ship-ready stack."

Three bullet lines, equal font size, medium weight, color #10162F, each preceded by a "✓" mark in #FF5757, reading:
"✓ 5 production projects you fork into your own product"
"✓ Skills · MCP · Sub-agents · agent.md templates"
"✓ 113 lessons · ship in week 4, polish in week 12"

Bottom CTA strip, solid #FF5757 background, white bold sans-serif, reading:
"Comment BUILD for the syllabus"

Bottom-right corner, tiny flat single-line text, color #10162F, reading:
"JR Academy · Vibe Coding 大师课"

Text must be sharp and beautifully composed.
All text in flat solid color. No stroke, no outline, no shadow on text.
Consistent font size for all bullet lines.
The technical terms "Claude Code", "Skills", "MCP", "Sub-agents", "agent.md", "Codex CLI" must render exactly with correct capitalization. Use straight ASCII apostrophes, not smart quotes.

Color palette: #FFF1E7 (background), #10162F (text), #FF5757 (accent), #FFB800 (lamp glow).

No watermark. No graphic logos. No real Anthropic / Cursor / OpenAI / Stripe / Vercel branding visible on screens. No fake brand marks. No emojis embedded in image. No Chinese text in the photo zone.
Do not show full face. The pricing card values must be abstract placeholder text only — no real currency amounts.
```

## Variants

### v2 — Indie hacker tone
> Headline: **"Stop chasing raises." / "Start shipping AI products."**
> Subheadline: **"Claude Code + Skills + MCP — your weekend ship stack."**

### v3 — Quiet brag
> Headline: **"My weekend project" / "outearns my day job"**
> Subheadline: **"This is what shipped it."**

### v4 — No human, illustration mode (lowest risk)
> Replace photo block with: a flat off-white scene of a single laptop on a desk, screen glowing, a small thought-bubble showing 5 stacked product icons floating up — a chat, a card, a chart, a settings gear, a lock. Switches the whole poster to illustration mode.

## Generation tips

- **Critical**: keep "Skills · MCP · Sub-agents · agent.md" as one bullet — model often splits it. append `bullet 2 must be a single line containing exactly: "✓ Skills · MCP · Sub-agents · agent.md templates"`
- **"agent.md" lowercase + dot**: append `"agent.md" must render as lowercase with a literal period between 'agent' and 'md'`
- **"ship it" sticker**: if model renders as "shipit" without space, drop the sticker — replace with a small abstract green checkmark on bezel
- **Pricing tiers must be generic**: append `the pricing card labels must be exactly "Starter", "Pro", "Team" — no real brand, no real currency amounts visible`
- **Thinking mode required**: 5 text blocks + 6 technical terms — Instant accuracy drops 30%
