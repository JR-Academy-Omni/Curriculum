---
name: opc-customer-acquisition
description: Design and evaluate a narrow, evidence-based customer-acquisition experiment for a solo founder using a reachable ICP, authorized prospect sources, human-approved outreach, real replies, conversion evidence, and explicit stop rules. Use for channel selection, prospect qualification, outreach drafts, follow-up, pipeline diagnosis, or small acquisition tests; never use it to mass-message, scrape prohibited data, or invent engagement.
---

# OPC Customer Acquisition

## Define an ICP that can be checked

Read the verified customer evidence, current offer, exclusions, capacity, and sales history. Define one acquisition segment with:

- observable inclusion criteria;
- disqualifiers and people who must not be contacted;
- problem trigger or recent event;
- buyer, user, and decision roles;
- reachable source and permitted contact route;
- reason the current offer is relevant now.

Do not use adjectives such as “innovative”, “busy”, or “high intent” unless a source provides an observable proxy. A large list is not an ICP.

## Select one channel hypothesis

Create `ACQUISITION-EXPERIMENT.md` with the ICP, channel, source, value hypothesis, message angle, unit of work, sprint window, delivery capacity, evidence fields, success threshold, safety ceiling, and stop rule. Choose a channel because the ICP already uses or permits it—not because it is fashionable or easy to automate.

Compare channels on reachability, trust, permission, feedback speed, founder effort, cash cost, platform dependence, and delivery capacity. Test one primary channel and one message hypothesis at a time. Record every major change so results remain interpretable.

## Build an authorized source list

Create or update `PROSPECT-SOURCE.md` and `SALES-PIPELINE.md`. For each anonymized prospect, record source, source date, inclusion evidence, exclusion check, permitted contact route, status, last real event, next action, due date, and evidence reference.

Use only data the student is authorized to access and use for this purpose. Do not bypass access controls, purchase opaque lists, scrape against site or platform rules, enrich sensitive attributes, infer protected characteristics, or retain unnecessary personal data. Do not treat a public profile as automatic permission for commercial messaging.

Follow applicable privacy, electronic-message, consumer, and platform requirements. Respect consent, sender identification, opt-out, suppression lists, purpose limits, and deletion requests. If the legal basis, consent, or platform permission is uncertain, pause that contact and request human review; the Skill does not provide legal clearance.

## Keep outreach under human approval

AI may qualify user-supplied candidates, research approved sources, draft personalized messages, identify likely objections, and prepare follow-ups. The student must approve the exact recipient, channel, message, and send time, then perform or explicitly authorize the external action.

Never:

- bulk-send generic AI copy or split one mass campaign into nominally “personalized” messages;
- contact someone who opted out, was excluded, or lacks a permitted contact route;
- hide sender identity, use deceptive subject lines, fabricate familiarity, or create false urgency;
- autonomously continue a conversation, make promises, book commitments, or agree to commercial terms;
- fabricate delivery, opens, replies, referrals, meetings, proposals, purchases, or screenshots.

Use low volume first. Personalization must come from relevant, permitted facts and connect the observed situation to the offer; it is not inserting a first name into a template.

## Record real funnel evidence

Use explicit stages backed by observable events:

- `qualified`: inclusion and exclusion checks recorded;
- `approved`: student approved the exact outreach;
- `sent`: send evidence exists;
- `delivered`: provider evidence exists, if available;
- `replied`: a real reply is referenced;
- `qualified-reply`: the reply confirms a problem, role, or relevant next step;
- `meeting`: a real meeting occurred, not merely a calendar placeholder;
- `proposal`: an actual proposal was sent;
- `won` or `lost`: the commercial outcome and evidence are recorded.

Track counts and rates with their denominators. Keep unknown delivery or open status as `unknown`; do not convert missing data to zero. Separate positive replies, neutral replies, objections, opt-outs, bounces, abuse reports, and no reply. AI-written responses and role-play never enter the funnel.

## Diagnose before scaling

Review source quality, qualification, deliverability, message relevance, trust, offer fit, follow-up, and response handling separately. Use exact replies and counter-evidence, not a flattering summary.

Define thresholds before sending. A valid small experiment includes:

- a maximum approved-contact count or spend;
- a minimum observation window appropriate to the channel;
- a harm stop for opt-outs, complaints, policy warnings, or unexpected privacy risk;
- a quality stop when the source repeatedly yields ineligible prospects;
- a performance decision of `continue`, `revise`, or `stop` based on real funnel evidence.

Stop immediately at the harm ceiling. At the normal review point, do not scale merely because one person replied, and do not declare the channel dead from an under-sized or undelivered test. Change one major variable per next experiment and document why.

## Exit

Use only these states:

- `drafted`: ICP, source, messages, and experiment plan exist, but no approved outreach has been sent;
- `executed`: real sends and resulting evidence are logged through the planned review point;
- `verified`: an authorized reviewer confirms the source permissions, evidence references, funnel arithmetic, compliance handling, and written decision.

Finish with actual counts, denominators, reply categories, conversion events, spend and founder time where known, privacy or platform incidents, contradictory evidence, and the next experiment. Never mark `verified` from a generated report alone.
