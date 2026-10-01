# Vibe Coding L1 · Talk Deck visual migration

2026-10-01. User-authorised redesign of the existing 40-page course, using the current internal Talk Deck course style. Content, order, page identities, public URL and Classroom bridge remain unchanged. This is a visual migration, not a new lesson plan.

## Visual contract

1600 × 900 canvas; warm 48px grid paper; deep ink typography; marker underline; rounded 18px cards and 24px teaching panels; restrained 1.5–2px outlines; yellow/coral offset shadows. Fonts and colours use the template tokens. Official logo remains the original public SVG.

The template ui/theme/deck files are copied verbatim. courseUi is a content-layer composition for this existing course; SlideEngine, CameraBubble, main, classroomBridge and route configuration are retained. All active slide components use the same visual composition, including hand-written flow nodes and quiz options.

## Page specification

All 40 slide titles/order are authoritative in classroom.config.ts. Cover uses an editorial split composition; page 6 uses a memory reset loop with two evidence panels; remaining concept, flow, roadmap, exercise and quiz pages retain all existing text and diagrams with the unified canvas, title treatment and rounded containers.

## Verification

Build and manifest verification; all 40 pages at desktop and mobile viewport sizes; URL page 6 direct entry, refresh and keyboard navigation; Classroom bridge checks. Deployment status is recorded separately from local verification.

## Local verification record · 2026-10-01

- `bun run build:classroom`: TypeScript, production bundle and 40-slide manifest passed.
- Existing Classroom QA: 120 DOM/Bridge checks across 1366×768, 1440×900 and 1920×1080.
- Standalone QA: 120 page/viewport checks at 1600×900, 1366×768 and 390×844, no browser runtime errors; page 6 refresh and previous-page navigation passed.
- Additional text-leaf boundary check across all 40 pages found three dense roadmap pages. Phase 1 now uses two columns; Phase 3/4 spacing was adjusted. Recheck found no text outside the design canvas.
- Full desktop screenshots were inspected; affected pages rechecked after animations settled. Camera hardware capture and production deployment were not exercised.
