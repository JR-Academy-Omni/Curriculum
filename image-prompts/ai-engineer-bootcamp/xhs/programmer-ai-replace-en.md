---
bootcamp: ai-engineer-bootcamp
bootcampName: AI Engineer Bootcamp
role: programmer
roleName: Developers / Engineers
painPoint: ai-replace
painPointName: AI replacement anxiety
format: xhs
formatName: Instagram / LinkedIn Post
size: 1024x1792
displaySize: 1080x1350
model: gpt-image-2
mode: Thinking
lang: en
version: 1
title: Don't compete with AI. Engineer with it.
ctaText: Comment "AI" for the syllabus
tags: [developer, ai-replace, RAG, AI-Engineer, career-pivot]
---

# Developer × AI Replacement Anxiety × Instagram / LinkedIn Post

> Model: `gpt-image-2` · Mode: **Thinking recommended** · Aspect ratio 4:5

## Why this works for English audiences

"35-year-old anxiety" is a Chinese-internet pain point that doesn't translate — age discrimination is illegal in most English-speaking markets and the narrative falls flat. The universal English-language hook for the same demographic is **AI replacement anxiety**: every senior dev on LinkedIn is privately worried their stack is obsolete. This poster speaks to that without fear-mongering — frames it as agency, not victimhood.

## Text on the poster (verify these exactly after generation)

- **Headline (2 lines)**: Don't compete with AI. / Engineer with it.
- **Subheadline**: 8 years of writing CRUD won't future-proof you anymore.
- **Bullets**:
  - ✓ 96 lessons · 7 production-grade projects
  - ✓ Context Engineering · RAG · Agent · Eval
  - ✓ 18 weeks · weekly 1-on-1 review
- **CTA**: Comment "AI" for the syllabus
- **Brand tag**: JR Academy · AI Engineer Bootcamp

## Full Prompt (gpt-image-2 optimized — copy directly)

```
Model: gpt-image-2.
Aspect ratio: 4:5. Image size: 1024×1792 px. Mode: Thinking.

A vertical 4:5 lifestyle-tech poster in editorial Instagram / LinkedIn post style,
featuring a senior software developer working at a home desk at night with two monitors,
shown in three-quarter back view (we see profile and screens, never a full front face).
The left monitor shows a Python code editor with visible "import langchain" and "from openai import OpenAI"
lines; the right monitor shows a chat interface where a user is iterating with an AI agent.
A warm desk lamp casts amber glow from camera-left, the rest of the room dim and out of focus.
On the desk: an open notebook with handwritten notes, a half-full coffee mug, scattered books, a mechanical keyboard.
Photo-realistic, slight film grain, candid iPhone night photo, natural skin texture,
neutral focused expression, slightly imperfect framing.

Composition: top 60% is the photo scene above; bottom 40% is a clean off-white text card
with a thin 2px black top border. Generous breathing room between text blocks.
The text card sits on a flat #FFF1E7 background, no gradients.

Place at the top of the text card, extra-large heavy bold sans-serif typography
(Bricolage Grotesque or Inter Black style), color #10162F, tight letter spacing,
in 2 lines, reading:
"Don't compete with AI."
"Engineer with it."

Just below, medium-weight sans-serif (DM Sans Medium style), color #444, in one line, reading:
"8 years of writing CRUD won't future-proof you anymore"

Three bullet lines, equal font size, medium weight, color #10162F,
each preceded by a "✓" mark in #FF5757, reading:
"✓ 96 lessons · 7 production-grade projects"
"✓ Context Engineering · RAG · Agent · Eval"
"✓ 18 weeks · weekly 1-on-1 review"

Bottom CTA strip, solid #FF5757 background, white bold sans-serif, reading:
"Comment AI for the syllabus"

Bottom-right corner, tiny flat single-line text, color #10162F, reading:
"JR Academy · AI Engineer Bootcamp"

Text must be sharp and beautifully composed.
All text in flat solid color. No stroke, no outline, no shadow on text.
Consistent font size for all bullet lines.
Use straight ASCII apostrophes and quotation marks (not smart quotes).

Color palette: #FFF1E7 (background), #10162F (text), #FF5757 (CTA accent), #FFB800 (lamp glow only).
Editorial photo on top, clean flat card on bottom. Slight film grain on photo only, crisp text.

No watermark. No graphic logos. No fake brand marks. No emojis embedded in image.
No Chinese text. No exaggerated facial expression.
Do not show the full face — keep three-quarter back view only.
No age references in the visual or text.
```

## Variants

### v2 — Sharper, layoff-adjacent (for the LinkedIn audience that's seen layoffs)
> Headline: **"AI didn't take your job." / "The dev who learned AI did."**
> Subheadline: **"Pivot before your stack becomes legacy."**

### v3 — Calmer, agency-focused
> Headline: **"Stop being scared of AI." / "Learn to ship with it."**
> Subheadline: **"From CRUD to Context Engineering — 18 weeks."**
> Tone: less aggressive, more constructive. Best for senior IC audiences.

### v4 — No human in frame (avoid face risk)
> Replace the visual block entirely with:
> ```
> A top-down flatlay of a developer's desk at night:
> mechanical keyboard, laptop showing terminal with Python + LangChain code,
> a notebook with handwritten labels "Context · RAG · Agent · Eval",
> a half-full coffee mug, glasses on a stack of tech books.
> Warm desk lamp light from top-left, slight film grain,
> photo-realistic iPhone overhead shot.
> ```

## Generation tips

- **First check after output**: Both headline lines present, all 3 bullets, CTA strip rendered red, no awkward apostrophe rendering on "Don't"
- **If "Don't" renders weird**: the apostrophe sometimes glitches. Restate as `the word "Don't" must use a straight ASCII apostrophe character`, or fall back to v2/v3 which avoid contractions
- **If split awkwardly**: Two-pass approach — first generate visual + headline only, then "now add the subtitle, three bullets, and CTA below"
- **If aspect ratio drifts**: restate `Aspect ratio: 4:5. This must be a vertical 4:5 image, NOT square.`
- **Switch to Thinking mode** for this 5-block layout — Instant accuracy is noticeably lower with this much text
