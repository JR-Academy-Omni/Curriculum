# Visual reference verification

2026-09-30: user explicitly requested the style of the live page:
https://jracademy.ai/curriculum/lessons/melbourne-ai-startup-showcase-networking/editions/2026-09/?page=8

A real Chromium session returned HTTP 200 and displayed a 39-slide presentation. Slide 8 is “把项目带出来，把连接带回去”, an AI Circle page. The local showcase data is an earlier 22-slide version whose slide 8 is KSUG.AI; the local scene is not the latest visual reference.

The live page matches `curriculum/.claude/skills/talk-deck/SKILL.md` and the `_template/src/components/deck.tsx` DeckFrame: 1600×900 warm grid paper, left cropped yellow ring, lower-right yellow arc, black heavy heading with a yellow marker underline, monospace kicker with a short accent stripe, white rounded panels with 2px dark border and 9px yellow offset shadow. Small labels and red numbered items supply emphasis.

The resume event now applies these frame tokens throughout its 18 slides. Slide 15 uses two white rounded panels, a marker title, a green Resume Hot Seat label, red numbered items and a restrained yellow conclusion strip. It retains the user-provided diagnostic content. The prior large yellow title panel with blue offset shadow has been replaced.

## Cover typography verification

The user supplied the live showcase cover on 2026-09-30. Chrome CDP `CSS.getPlatformFontsForNode` confirms both previous resume and showcase Chinese titles resolve to `NotoSansSC-Thin_Black`. The reference cover uses 83px / 900, -3px tracking, 1.22 line-height and #10162f; the earlier resume title used 86px, normal tracking and #000. The reference also loads genuine Bricolage Grotesque, DM Sans and Space Mono, which were previously missing in the resume page. The cover now uses the reference title parameters, a lower-line marker and the reference left-title/right-dark-panel composition with the resume event content. Browser evidence is in `/private/tmp/deck-cover-fonts/`.
