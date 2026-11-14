# FDE Business workflow

Course key: `fde-business`. Existing sales URL: `/fde/business`, unchanged.

## Local authoring and review

1. Edit `public/outline.json`: 8 weeks, 6 modules, 16 lessons, 30 role-selectable automation tasks and 3 client briefs.
2. Run `python3 scripts/build.py --web-root <web-checkout> --skills-data-root <skills-data-checkout>`. It generates full lesson material, all reading pages, SDM CourseDetail and two frontend projections. It performs no network or database writes.
3. Run `python3 scripts/verify.py` and `python3 public/reference.py`. Verify source/projection/export hashes and all local links.
4. Preview the sales site and catalogue on the existing frontend development server. Run `python3 scripts/preview.py` to serve both FDE curriculum trees on loopback port 8020, with noindex on success/error responses and root robots disallow.
5. Validate the authoring source with SDM `getOutline` / `listBootcamps`, the export with `getCourseDetail`, and all lesson mappings with `buildLocalLessonFields`. No production IDs are fabricated.

## Confirmed scope and open scheduling

Confirmed: regular A$3,850 / preorder A$3,500 / early bird A$3,650, eight-week plan, independent Business course. Prior business/product/project experience is relevant; independent AI application development is not required. Use AI assistants/Codex to prepare outputs, check them, connect workflows and explain the solution. No n8n dependency.

Lesson durations are proposed authoring time allocations (120-minute Workshop, 180-minute independent practice), not a confirmed contact-hour promise. Sales copy keeps weekly contact hours, cohort date and session times subject to confirmation. No per-week teacher allocation, class size, response-time SLA, automatic AI grading, certificate, employment or salary guarantee is added.

Thirty tasks are a role-selectable collection combined across eight weeks, not thirty complete independent projects everyone is promised to finish. Three authored client briefs cover finance, customer follow-up and employee onboarding; none is a real company client record. Reference records, forecasts and outputs stay within teaching context.

## Production configuration

On 2026-11-14, after owner approval, the existing Training was completed and one first-intake Program, one Syllabus, six Modules, 16 Lessons and one PricingOption were created through the authenticated admin API. Full lesson material and all links were read back. The final comparison across the three courses found zero differences in the approved fields. Exact resource identities are retained in `production-bindings.json`.

Registration is open at the confirmed preorder price with `registrationOnly=true`. Dates, weekly time slots and teacher allocation remain unconfirmed. No real order, payment or student enrolment was created for verification. The website registration entrance is released separately through its GitHub Actions workflow; source/configuration commits do not themselves establish a successful web release.

Future syncs must first download current production, preserve its bindings, review differences and obtain approval under the repository rules. The canonical sales URL remains `/program-course/fde-business`. No existing route is renamed.

## Source notes

GST arithmetic reference: ATO Small Business, https://smallbusiness.taxsuperandyou.gov.au/goods-and-services-tax/calculating-gst-on-purchases . Only explicitly standard-taxable GST-inclusive amounts are divided by 11 in the reference check. Unknown tax status, tax-credit eligibility, approval and payment remain finance decisions. No ABNs or bank details are invented.
