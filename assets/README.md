# curriculum/assets — shared brand assets

Canonical brand assets for all `curriculum/{workshop|bootcamp}/` projects. Copy into your project's `public/` when you need to use them (each workshop deploys its own static `public/` folder, so symlinks won't survive deploy).

## Files

| File | What | Dimensions | Usage |
|------|------|------------|-------|
| `jr-academy-logo.png` | Official 匠人学院 / JR ACADEMY full lockup — black on transparent | 2992×706 (~4.24:1) | Slide covers, headers, footers. Resize to 36-64px tall. |

## How to use in a workshop

```bash
# From workshop root, e.g. curriculum/claude-cowork-workshop/
cp ../assets/jr-academy-logo.png public/jr-logo.png

# In your HTML:
# <img src="./jr-logo.png" alt="JR Academy" style="height:40px;width:auto">
```

## When to add a new asset here

Anything you'd want to reuse across multiple bootcamps/workshops:
- Logo variants (white, mono, icon-only)
- Brand stamps / seals
- Standard backdrop images / patterns
- Speaker headshots if recurring

Keep specs in this README so the next person doesn't have to re-measure.
