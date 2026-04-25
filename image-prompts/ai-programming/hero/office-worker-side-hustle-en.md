---
bootcamp: ai-programming
bootcampName: 人人都能学的 AI Coding 实战课
role: office-worker
roleName: Office workers (HR / Finance / Sales / Teachers / Ops)
painPoint: side-hustle
painPointName: Side hustle / Second income
format: hero
formatName: Course detail hero
size: 1792x1024
displaySize: 1920x900
model: gpt-image-2
mode: Instant
lang: en
version: 1
title: 人人都能学的 AI Coding 实战课 (lunch-break ship hero, EN)
ctaText: ""
tags: [hero, office-worker, side-hustle, EN]
---

# Office Worker × Side Hustle × Hero (EN)

## What this poster says

Detail-page hero. Visual anchor: an office desk corner during lunch — half-eaten lunch box, a clean laptop showing a finished webpage preview labeled "yoursite.com — Live", a sticky note with "shipped" written on it. Tells the story without text: this is the office worker's side product, made on lunch breaks.

## Full Prompt

### Use case A — Pure ambient

```
Horizontal 16:9 hero banner (1792×1024), editorial minimalist style.

Right 45% of canvas: a still-life photo of an office desk corner at midday. On the desk: a half-eaten salad bowl pushed slightly to the back, a closed water bottle, a clean laptop open at a slight angle showing a finished webpage preview — the webpage has a hero section, a tagline, a CTA button, and a small green dot in the browser tab indicating "Live". Beside the laptop, a small yellow sticky note with the single handwritten word "shipped" in lowercase. Soft natural daylight from camera-right, slight film grain, premium magazine still-life mood, shallow depth of field with focus on the laptop screen.

Left 55% of canvas: completely empty — calm gradient wash from off-white #FFF1E7 (top) to slightly warmer cream (bottom). MUST stay clean — no objects, no text in left half.

The webpage preview on the laptop should look like a generic clean blog or product landing page, not any specific real brand. The browser tab "Live" indicator must be a small green circle. The sticky note must read exactly "shipped" in handwritten lowercase ASCII.

Premium editorial design. No watermark. No real brand logos. No people. No code text on the screen.
```

### Use case B — With minimal headline

```
[Copy Use case A above, then append:]

Bottom-left text overlay, 60px from canvas edge, geometric bold sans-serif (Bricolage Grotesque style), color #10162F, 1 line:
"5 weeks. Lunch breaks only. One live product."

Bottom-right corner, 40px from edge, tiny text in #444:
"JR Academy · 人人都能学的 AI Coding 实战课"

Text must be sharp and beautifully composed. Flat solid color.
```

## Generation tips

- **Left-empty rule**: append `LEFT 55% must stay completely empty for frontend H1 overlay — no objects, no desk extending into left half`
- **Sticky note word**: append `the sticky note must read exactly "shipped" in lowercase handwritten letters`
- If laptop shows code: append `the laptop screen must show a finished webpage preview, NOT code, NOT a code editor`
- If the live dot is missing: append `the browser tab on the laptop screen must include a small green dot with the label "Live" near it`
