# AUD pricing and design revision · Local

Owner confirmed AUD on 2026-10-22. Source: `public/outline.json`, program.promoTuition=899, program.tuition=1099, _meta.currency=AUD. The same JSON is copied into the website bundle. Exact price labels are A$899 and A$1,099; taxes and early-bird cutoff remain unconfirmed.

- Browser checked custom page at 1440, 390 and 320px: 5 lessons, both price labels, no horizontal overflow, no uncaught page errors.
- Expanded lesson 5, opened actual full website prototype and clicked its isolated consultation button; feedback displayed.
- Poster 1242×1660: rendered from `poster-template.html`, actual official local SVG logo, actual website screenshot, no clipping (scrollHeight=clientHeight=1660).
- Actual desktop/mobile screenshots inspected. Evidence: main workspace `artifacts/enterprise-ai-aud-design-20261022/`.
- No full lint/typecheck/build/test, no commit/push, no CI or deployment in this revision.
- Complete MP4 and real scheduled run remain unverified; this revision does not claim a complete course Demo.

Reproduce deterministically: run `render.py`, capture the actual prototype's main element at 1080px into `public/assets/website-preview.png`, then capture `#poster` in `public/poster.html` at 1242px into `public/poster.png`. Copy public files except internal.html into the website course-previews bundle. Runtime preview uses the existing Next development server only.
