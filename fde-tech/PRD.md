# FDE Tech · Course and catalogue integration

## Product

Existing formal name: FDE 企业 AI 交付进阶训练班. Existing public sales path: `/fde/training`. Course identifier `fde-tech` is an authoring/catalogue key; it does not migrate the sales URL.

Audience: employed engineers who can independently build, run, debug and explain an AI application. Missing a specific tool can be addressed with self-study; the main programme is not an AI Engineering foundation course.

Approved commercial facts: ten weeks; three-hour weekly workshop; approximately three to five hours outside class. Regular A$4,800; first-cohort preorder A$4,400; early bird A$4,600. No invented dated deadlines, cohort sizes, guaranteed job/salary, live-client access or automatic grading.

## Result and training path

Input: three client briefs with distinct goals, records, stakeholders, ceilings, access rules and change cards. Operations: investigate, compare architectures, cost and scope, implement, evaluate, present, renegotiate, plan a pilot and hand over. Output: a runnable engineering project plus a defensible proposal, evidence and operating handover.

The source has six modules and twenty ordered lessons: ten 180-minute Workshops and ten 240-minute Assignments (reading/preparation included in that independent-practice allowance). This is seventy planned hours; optional foundational preparation is additional. Each week has English exercise prompts and knowledge checks, delivery artefacts, review criteria and linked official reading. Thirty engineering tasks are integrated pieces of the case work, not thirty independent full projects.

The completed reference delivery pack includes architecture, interface contract, scope, a A$21,600 assumed build estimate against a A$24,000 ceiling, recurring cost assumptions, capacity sensitivity, acceptance matrix, pilot plan and runbook. Its deterministic control implementation checks permissions, source version, approval freshness, duplicate actions and policy routing. It does not establish model quality or real client results.

## Single source and projections

`public/outline.json` → `scripts/build.py` →
- all twenty lessons’ distinct sales descriptions and full learning material;
- curriculum, module, weekly, case and outcome pages;
- `exports/fde-tech.json` and isolated skills-data `training-outlines/fde-tech.json` in SDM CourseDetail shape;
- frontend `src/content/fdeTechCourse.generated.json` for sales copy, schedules, tasks, name, prices and catalogue facts.

The translation files no longer maintain parallel copies of Tech schedule, curriculum, task catalogue or sales presentation. The generated projection includes the SHA-256 of its authoring source.

## Catalogue

Reuse the existing approved custom-course inventory integration. Both SSR and the same-origin GET catalogue use it. Entries obey type, level, search and whitelist filters; undated courses do not invent a start-window match. Remote records take ownership as soon as the slug is registered, avoiding duplication. Pagination may span the remote tail and several approved entries and must not drop or repeat an entry.

All catalogue card, comparison and recommendation links resolve `fde-tech` to `/fde/training`; every other existing course keeps its existing URL. No enrolment or payment is inferred from an approved inventory card.

## Local versus production workflow

Local review uses the actual web components and catalogue GET route, an explicitly isolated read-only snapshot of public course data, the canonical SDM parsing/lesson field-building functions and the generated curriculum pages. Only GET/OPTIONS are accepted by the local snapshot server. No auth cookies, user records or model provider are involved.

Production public slug lookup returned 404 during this task. The planned creation graph is one Training, six Modules, one Program draft, one Syllabus and twenty Lessons. No production ID is fabricated. Actual teacher/city/date bindings, active pricing applicability, controlled creation, read-back and deployment remain separate authorised operations; the user requested local only.

## Curriculum review applicability

- Each reused platform InteractiveLab must be a standalone Lesson. This course currently uses authored engineering projects, not platform InteractiveLabs, so there are no hidden Lab refs or made-up Lab routes.
- Every lesson has steps, learningMaterial, an English knowledge check, case assignment, artefacts and a review rubric. Kanban task definitions exist in source; no automated Kanban import or AI grader is claimed.
- Phase review uses evidence plus correction of critical failures. Automatic gating, certificate issuance and P3 services are not part of this confirmed offering.
- No GA or indexing on Curriculum; generated HTML has noindex/nofollow and the local server also applies response headers and root robots disallow. Existing release assembly applies the repository-wide noindex enforcement.
- Registry and future static assembly include the course. The workflow file was edited only; no workflow was triggered.

## Sales proof: Proposal and review

The Tech sales page keeps `/fde/training`. Its first content sections show the training method, outcomes, a complete Knowledge Access Proposal with first-draft and revised versions, review reasoning and faculty, before the career chart and weekly schedule. Business retains its existing independent sequence.

The proposal reader is inline and requires no registration or download. Ten chapters cover the requested decision, discovery assumptions, alternatives, scope changes, architecture, budget, operating economics, acceptance, pilot decisions and handover. Six review points link to the revised chapters. The case is authored course material; it is not a client engagement, student result or a review performed by a named mentor. Planning assumptions and measured outcomes remain distinct within the document.

Public review copy describes preparation, presentation, questioning and revision. It introduces no unconfirmed review count, response-time SLA, class size, mentor assignment or employment promise. The canonical content is `salesPresentation.<locale>.proposalShowcase` in `public/outline.json`; `scripts/build.py` generates the website projection. Temporary browser evidence belongs under the website checkout's `tmp/`.

## 2026-11-05 · Teaching progression and competency review

The ten English competency names in `salesPresentation.*.capabilities` describe learner capabilities rather than internal course operations. Evidence review distinguishes facilitator-led work, guided work, independent work and adaptation to changed conditions; it is not automatic scoring or certification.

Weeks 1–2 use Service Operations for facilitator demonstrations and student participation. Weeks 3–4 use Knowledge Access for guided discovery, data/permission controls and reliability evaluation. Weeks 5–10 use Purchasing Controls as the principal delivery project, with existing service-event fixtures for integration/recovery checks. Each week records the client decision, work, output and review evidence. Preserve full-cost budgeting, architecture alternatives, stakeholder negotiation and independent handover. Official tool workshops support current work; basic tool use remains self-study. All-English delivery has been discussed but is not a confirmed service promise. A higher Tech price is under discussion; existing prices remain until the owner confirms amounts and promotion tiers.

Owner confirmed revised pricing on 2026-11-05: regular AUD4800, first-cohort preorder AUD4400, early bird AUD4600. This replaces the previous discussion about unconfirmed amounts. No dated deadline is inferred. Local only.
