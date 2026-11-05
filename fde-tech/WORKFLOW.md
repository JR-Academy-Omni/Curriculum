# FDE Tech curriculum workflow

Canonical course slug: `fde-tech`. Existing sales URL: `/program-course/fde-tech` (unchanged).

## Authoring and local preview

1. Edit `public/outline.json`: six modules, ten weeks, twenty lessons, thirty tasks, three case packets, reference reasoning and official reading mapping.
2. Run `python3 scripts/build.py --web-root <frontend-checkout> --skills-data-root <skills-data-checkout>` from this course directory. This builds learning material, all HTML pages, a small sales projection and the SDM CourseDetail export. No network or database writes.
3. Run `python3 scripts/verify.py` and `python3 public/reference.py`.
4. Preview through `python3 scripts/preview.py`; the course pages have noindex and no analytics. The sales page and `/bootcamp` use the frontend development server.
5. Review the local source/export with the Skills Data Manager parser and field builder. A missing production Training means a creation plan, not an update and not a zero diff.

## Production boundary

Not executed: creating Training, six Modules, Program, Syllabus or twenty Lessons; assigning database IDs; registration/payment; deployment or CI.

Before production creation: read and back up current production state, reconcile the local course, show the full diff and obtain explicit sync approval. Confirm teacher IDs, city, dated cohort and pricing applicability through the existing admin workflow. Do not invent those fields. Existing names are Lightman, Joe 韭神, Jason and Roy; they do not establish a per-week teacher allocation.

The source has only local keys until actual IDs are returned. The small approved-course catalogue entry links to `/program-course/fde-tech`, so later Training registration does not rename the sales URL. Existing non-FDE courses keep their `/program-course/{slug}` routes.

## Scope and evidence

The three client case packets and planning baselines are authored teaching inputs. They are not ANZ, Woolworths or IAG customer records. Public company analyses stay on the sales page and do not imply client relationships. The runnable reference covers deterministic retrieval permissions, approval freshness, idempotency and policy-version routing; it does not call a model or establish production reliability.

No automatic AI grading, certification, P3 entitlement or employment service is promised. Peer/facilitator review is a course design, and exact staffing/support remains a commercial scheduling decision.
