---
bootcamp: ai-builder
bootcampName: Vibe Coding 大师课
role: career-changer
roleName: Career changers / Job seekers
painPoint: ai-fomo
painPointName: AI FOMO (junior devs catching up)
format: xhs
formatName: Instagram / LinkedIn Post
size: 1024x1792
displaySize: 1080x1350
model: gpt-image-2
mode: Thinking
lang: en
version: 1
title: New grads who learned AI coding got hired. The rest are still applying.
ctaText: Comment "BUILD" for the syllabus
tags: [career-changer, ai-fomo, junior-dev, Cursor, Claude-Code, MCP]
---

# Career Changer / Junior Dev × AI FOMO × Instagram / LinkedIn Post (EN)

> Model: `gpt-image-2` · Mode: **Thinking** · Aspect ratio 4:5

## Why this works for English audiences

Different from career-changer × ai-fomo on web-code-bootcamp ("AI didn't kill coding jobs, it killed those who couldn't ship"). That one is about full-stack employability. **This one is specifically the AI-coding-skill divide for new grads / junior devs**: bootcamp grads who learned Vibe Coding (Claude Code, Cursor, Codex CLI workflows) are landing roles, while those who only learned 2022-era CRUD-with-leetcode are still cold-applying. Anchor: "It's not that you can code. It's that you can ship 5x with AI." The proof is concrete tooling literacy — agent.md, Skills, Sub-agents, MCP — table stakes for 2026 hiring.

## Text on the poster

- **Headline (2 lines)**: New grads who learned AI coding got hired / The rest are still applying
- **Subheadline**: The 2026 junior dev knows agent.md before they know LeetCode.
- **Bullets**:
  - ✓ Claude Code · Cursor · Codex CLI — the modern junior toolkit
  - ✓ Skills · MCP · Sub-agents · 5 ship-able portfolio projects
  - ✓ 113 lessons · 4 months · ship before you apply
- **CTA**: Comment "BUILD" for the syllabus
- **Brand tag**: JR Academy · Vibe Coding 大师课

## Full Prompt

```
Model: gpt-image-2.
Aspect ratio: 4:5. Image size: 1024×1792 px. Mode: Thinking.

A vertical 4:5 lifestyle-tech poster in editorial Instagram / LinkedIn post style,
featuring a junior developer at a small home desk in late afternoon natural light.
Three-quarter back view, never showing full face, slightly relaxed posture.
On the desk: a single laptop showing a clean conversational AI coding terminal — text streaming in green and white, with a small visible header "claude code" in lowercase.
Beside the laptop: a closed paperback algorithm book lying flat with a thin red bookmark sticking out, partially covered by an open spiral notebook showing hand-sketched product wireframes (three small UI rectangles).
A half-full glass of water, a mechanical keyboard, soft overhead daylight from camera-right.
Photo-realistic candid iPhone shot, slight film grain, slightly imperfect framing.
Mood: focused, optimistic, mid-build — not anxious.

Composition: top 60% photo scene; bottom 40% clean text card with 2px black top border, on flat #FFF1E7 background.

Place at the top of the text card, extra-large heavy bold sans-serif typography (Bricolage Grotesque or Inter Black style), color #10162F, tight letter spacing, in 2 lines, reading:
"New grads who learned AI coding got hired"
"The rest are still applying"

Just below, medium-weight sans-serif (DM Sans Medium style), color #444, in one line, reading:
"The 2026 junior dev knows agent.md before they know LeetCode."

Three bullet lines, equal font size, medium weight, color #10162F, each preceded by a "✓" mark in #FF5757, reading:
"✓ Claude Code · Cursor · Codex CLI — the modern junior toolkit"
"✓ Skills · MCP · Sub-agents · 5 ship-able portfolio projects"
"✓ 113 lessons · 4 months · ship before you apply"

Bottom CTA strip, solid #FF5757 background, white bold sans-serif, reading:
"Comment BUILD for the syllabus"

Bottom-right corner, tiny flat single-line text, color #10162F, reading:
"JR Academy · Vibe Coding 大师课"

Text must be sharp and beautifully composed.
All text in flat solid color. No stroke, no outline, no shadow on text. Consistent font size for all bullet lines.
The technical terms "Claude Code", "Cursor", "Codex CLI", "Skills", "MCP", "Sub-agents", "agent.md", "LeetCode" must render exactly with correct capitalization and lowercase as written.

Color palette: #FFF1E7 (background), #10162F (text), #FF5757 (accent), #FFB800 (afternoon glow).

No watermark. No graphic logos. No real Anthropic / Cursor / OpenAI / GitHub / LeetCode branding visible on screens. The algorithm book cover must be plain — no real publisher branding. No fake brand marks. No emojis. No Chinese text in the photo zone.
Do not show full face. The terminal text must be abstract placeholder — no readable code or real prompts.
```

## Variants

### v2 — Direct contrast
> Headline: **"Bootcamp grad shipped 5 SaaS"** / **"CS grad shipped 5 LeetCodes"**
> ⚠️ Subheadline: **"Guess who got hired."**

### v3 — Numbers + reality check
> Headline: **"500 cold applications"** / **"or 1 shipped product?"**
> Subheadline: **"Hiring managers know the difference."**

### v4 — Toolkit flex (no human)
> Replace photo with top-down flatlay: a wooden desk with five small paper cards laid out in a row labeled "Claude Code", "Cursor", "Codex", "MCP", "agent.md", a laptop in background closed.

## Generation tips

- **Headline length**: Line 1 is long ("New grads who learned AI coding got hired") — append `Line 1 must fit on a single line, do not break — reduce font size if needed but keep on one line`
- **"agent.md" lowercase + dot**: append `"agent.md" must include a literal period between 'agent' and 'md', all lowercase`
- **"LeetCode" capitalization**: append `"LeetCode" must render with capital L, lowercase 'eet', capital C, lowercase 'ode' — exactly that camel case`
- **Three bullet lines parity**: append `the three bullet lines must be exactly equal font size — no line larger than the others`
- **Mood must NOT be anxious**: append `subject's posture and lighting must convey focused calm — NOT desperation, panic, or overwhelm`
- **Thinking mode required**: long headlines + 8 technical terms + 5 text segments
