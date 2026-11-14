# FDE Tech curriculum workflow

Canonical course slug: `fde-tech`. Existing sales URL: `/program-course/fde-tech` (unchanged).

## Authoring and local preview

1. Edit `public/outline.json`: six modules, ten weeks, twenty lessons, thirty tasks, three case packets, reference reasoning and official reading mapping.
2. Run `python3 scripts/build.py --web-root <frontend-checkout> --skills-data-root <skills-data-checkout>` from this course directory. This builds learning material, all HTML pages, a small sales projection and the SDM CourseDetail export. No network or database writes.
3. Run `python3 scripts/verify.py` and `python3 public/reference.py`.
4. Preview through `python3 scripts/preview.py`; the course pages have noindex and no analytics. The sales page and `/bootcamp` use the frontend development server.
5. Review the local source/export with the Skills Data Manager parser and field builder. A missing production Training means a creation plan, not an update and not a zero diff.

## Production configuration

On 2026-11-14, after owner approval, the existing Training was completed and one first-intake Program, one Syllabus, six Modules, 20 Lessons and one PricingOption were created through the authenticated admin API. Full lesson material and all links were read back. The final comparison across the three courses found zero differences in the approved fields. Exact resource identities are retained in `production-bindings.json`.

Registration is open at the confirmed preorder price with `registrationOnly=true`. Dates, weekly time slots and teacher allocation remain unconfirmed. No real order, payment or student enrolment was created for verification. The website registration entrance is released separately through its GitHub Actions workflow; source/configuration commits do not themselves establish a successful web release.

Future syncs must first download current production, preserve its bindings, review differences and obtain approval under the repository rules. The canonical sales URL remains `/program-course/fde-tech`. No existing route is renamed.

## Scope and evidence

The three client case packets and planning baselines are authored teaching inputs. They are not ANZ, Woolworths or IAG customer records. Public company analyses stay on the sales page and do not imply client relationships. The runnable reference covers deterministic retrieval permissions, approval freshness, idempotency and policy-version routing; it does not call a model or establish production reliability.

No automatic AI grading, certification, P3 entitlement or employment service is promised. Peer/facilitator review is a course design, and exact staffing/support remains a commercial scheduling decision.
