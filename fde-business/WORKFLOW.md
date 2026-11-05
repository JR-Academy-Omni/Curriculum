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

## Production boundary

Not executed: Training creation, six Module creations, Program / Syllabus creation, sixteen Lesson creations, payment/enrolment binding, production sync, commit, push, CI or deployment.

Before a later approved sync: read current production state, preserve it, reconcile local source, show the complete create/update diff, confirm required teacher/city/cohort fields, and use the existing admin workflow. Afterwards download/read back to verify mappings and content. Keep `/fde/business` for catalogue links after commercial registration; a new Training slug does not rename the public sales route.

## Source notes

GST arithmetic reference: ATO Small Business, https://smallbusiness.taxsuperandyou.gov.au/goods-and-services-tax/calculating-gst-on-purchases . Only explicitly standard-taxable GST-inclusive amounts are divided by 11 in the reference check. Unknown tax status, tax-credit eligibility, approval and payment remain finance decisions. No ABNs or bank details are invented.
