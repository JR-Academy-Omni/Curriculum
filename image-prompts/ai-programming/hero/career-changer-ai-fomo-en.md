---
bootcamp: ai-programming
bootcampName: 人人都能学的 AI Coding 实战课
role: career-changer
roleName: Career changers / Job seekers
painPoint: ai-fomo
painPointName: AI FOMO (afraid of missing the AI wave without coding skills)
format: hero
formatName: Course detail hero
size: 1792x1024
displaySize: 1920x900
model: gpt-image-2
mode: Instant
lang: en
version: 1
title: 人人都能学的 AI Coding 实战课 (engineer-vs-creator track hero, EN)
ctaText: ""
tags: [hero, career-changer, ai-fomo, two-track, EN]
---

# Career Changer × AI FOMO × Hero (EN)

## What this poster says

Detail-page hero. Visual anchor: a clean **two-track diagram** comparing the long Engineer Track (18 months) with the short Creator Track (5 weeks). Lets visitors see the proposition in 1 second: this isn't another bootcamp promising you'll become an engineer — it's a different track entirely.

## Full Prompt

### Use case A — Pure ambient

```
Horizontal 16:9 hero banner (1792×1024), editorial minimalist style.

Right 50% of canvas: a clean flat-design two-row diagram on warm cream background.

Top row labeled "Engineer Track — 18 months" in dark navy #10162F. Below the label, a long horizontal track of small icon nodes connected by thin lines: "Python" → "DSA" → "Frameworks" → "Leetcode" → "Interview" → "Offer". Track color is faded gray-blue. The track stretches across the full row width.

Bottom row labeled "Creator Track — 5 weeks" in coral red #FF5757. Below the label, a short horizontal track of just three nodes connected by thin lines: a sticky note "Idea" → an "AI Coding" badge → a webpage with a green "Live" dot. Track color is bright coral and sage. The short track only occupies the left third of the row width — making it visibly shorter than the engineer track above.

Each node is a small rounded rectangle with a soft drop shadow, label inside in clean sans-serif.

Left 50% of canvas: completely empty — calm gradient wash from off-white #FFF1E7 (top) to slightly warmer cream (bottom). MUST stay clean — no diagram, no text in left half.

Premium editorial design, soft ambient light. Track labels must spell exactly: "Engineer Track — 18 months", "Creator Track — 5 weeks". Node labels must spell exactly: "Python", "DSA", "Frameworks", "Leetcode", "Interview", "Offer", "Idea", "AI Coding", "Live".

No watermark. No real brand logos. No people. No code text visible.
```

### Use case B — With minimal headline

```
[Copy Use case A above, then append:]

Bottom-left text overlay, 60px from canvas edge, geometric bold sans-serif (Bricolage Grotesque style), color #10162F, 1 line:
"Two tracks. One ships in 5 weeks."

Bottom-right corner, 40px from edge, tiny text in #444:
"JR Academy · 人人都能学的 AI Coding 实战课"

Text must be sharp and beautifully composed. Flat solid color.
```

## Generation tips

- **Left-empty rule**: append `LEFT 50% must stay completely empty for frontend H1 overlay — no diagram, no nodes bleeding into left half`
- **Track length comparison**: append `the Creator Track must visibly be SHORTER than the Engineer Track above it, only occupying about 1/3 width while engineer track spans full width`
- If em-dash renders wrong: append `the em-dash in "Engineer Track — 18 months" must be a long em-dash (—) not a hyphen`
- If extra nodes appear: append `Engineer Track has exactly 6 nodes; Creator Track has exactly 3 nodes`
