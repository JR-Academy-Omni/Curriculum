---
name: opc-shipping-review
description: Turn a solo founder's current business evidence, offer, and open work into one evidence-linked weekly increment, then review what was actually finished and accepted. Use when prioritizing a backlog, defining done, checking delivery, or learning from a missed week; do not use plans, AI drafts, deploy attempts, or founder self-assessment as proof that work shipped, was published, or was accepted by a customer.
---

# OPC Shipping Review

Choose one useful increment that fits the founder's real capacity, make its finish line inspectable, and preserve what the week taught. Shipping means passing the declared human acceptance check, not producing a convincing progress summary.

## Establish the current truth

Read `BUSINESS-SOT.md`, `OFFER.md`, `CUSTOMER-EVIDENCE.md`, the current product or delivery artifact, and the existing backlog and reviews when present. Keep source facts separate from founder interpretation and AI suggestions.

Before prioritizing, record:

- the current target customer, problem, offer, included scope, exclusions, and promised delivery;
- real customer behaviours, commitments, objections, deadlines, and acceptance criteria, with evidence references;
- delivery, privacy, safety, legal, platform, cash, and founder-capacity constraints;
- work already completed, attempted, blocked, abandoned, or awaiting a real external decision;
- unknowns that could change the priority.

Use `unavailable` for missing facts. Do not infer customer value from enthusiasm, an AI role-play, a draft, an unverified screenshot, or the founder's preferred feature. If the source files disagree, surface the conflict before making a plan.

## Turn inputs into an evidence-linked backlog

Create or update `BACKLOG.md` without deleting historical outcomes. Every open item must state:

- the specific customer or delivery outcome it could change;
- the evidence, commitment, risk, or unknown that created it;
- the smallest observable result it could produce;
- customer value if it succeeds and the consequence of delaying it;
- risk or uncertainty reduced, including the cost of being wrong;
- founder time, cash, dependencies, deadline, reversibility, and required human action;
- status, owner, and evidence needed to call it complete.

Prioritize commitments, safety or compliance blockers, acceptance failures, and tests of expensive assumptions before speculative features or cosmetic polish. Compare items using the recorded facts rather than a universal scoring formula. When two items are close, prefer the one that creates stronger decision evidence sooner, is easier to reverse, and fits current capacity.

Label unsupported ideas as hypotheses. Move work to `later` or `stop` when it has no current customer, delivery, risk, or evidence purpose. Never invent numeric scores, urgency, deadlines, dependencies, or customer impact merely to force a ranking.

## Commit to one weekly increment

Select one coherent increment, not a list of unrelated tasks. It should advance a real customer outcome, satisfy an existing commitment, remove a critical delivery risk, or test the next expensive assumption.

For the increment, record in `BACKLOG.md`:

1. the outcome and why it outranks the alternatives;
2. the evidence or obligation it traces to;
3. included work and an explicit stop-doing list;
4. founder-time and cash ceilings based on real availability;
5. dependencies, decision owners, checkpoints, and stop conditions;
6. AI-assisted preparation versus founder-only, customer-only, reviewer-only, or qualified-professional actions;
7. a Definition of Done and the required acceptance evidence;
8. the next decision if it passes, fails, or remains inconclusive.

Split the increment only enough to expose dependencies and checkpoints. Do not fill the week with extra work after the smallest valuable increment is defined.

## Write a Definition of Done that can fail

The Definition of Done must describe observable checks, not activity words such as “worked on”, “improved”, “mostly complete”, or “ready”. Include as applicable:

- the exact artifact, behaviour, customer deliverable, or experiment boundary;
- functional and content checks;
- scope and exclusion checks against `OFFER.md`;
- privacy, safety, compliance, accessibility, or platform checks;
- the real environment or delivery context to inspect;
- the named human who accepts each check and the evidence they must inspect;
- known exclusions or follow-up items that do not block this increment.

A test result proves only what that test inspected. A local build does not prove deployment; an upload does not prove publication; publication does not prove customer receipt; receipt does not prove customer acceptance. Preserve these states separately.

## Keep execution human-controlled

AI may organize the backlog, draft artifacts, propose acceptance checks, analyze returned evidence, and assist with implementation that the student has authorized. AI must not:

- contact a customer, send or schedule a message, accept terms, spend money, create a live campaign, publish, deploy, or change a production system without explicit authorization for that action;
- claim that an artifact was delivered, a release was published, a customer viewed or accepted work, or a test passed without inspectable evidence from the responsible system or person;
- impersonate a customer or reviewer, approve its own output, manufacture a quote or status, or treat simulated feedback as external evidence;
- quietly expand scope, overwrite a prior commitment, or rewrite a failed Definition of Done after seeing the result.

The student or named operator performs and confirms external actions. The customer, course reviewer, or other named accountable human performs acceptance when the Definition of Done assigns it to them.

## Inspect the result and preserve the miss

Create or append a dated entry to `WEEKLY-REVIEW.md`. Do not rewrite previous entries. Record:

- the committed increment and original Definition of Done;
- what was actually attempted, completed, delivered, published, accepted, rejected, or not started;
- evidence references for every completed acceptance check;
- customer feedback, defects, blockers, scope changes, and contradictory signals;
- founder time and cash actually used when available;
- work that created value, reduced risk, created no decision evidence, or should stop;
- one decision: `continue`, `revise`, or `stop`, with the next owner and action.

When the increment misses, do not award partial completion by changing the finish line. Identify whether the cause was evidence quality, oversized scope, dependency, capacity, execution, acceptance design, or a changed external fact. Separate the cause supported by evidence from guesses, retain useful completed pieces, and reduce or reroute the next increment instead of hiding the failure.

## Exit states

- `drafted`: the evidence-linked backlog, weekly increment, original Definition of Done, human owner, and acceptance plan exist, but execution or acceptance evidence is missing.
- `executed`: authorized work was actually performed and inspectable execution evidence exists, but one or more required human acceptance checks remain incomplete or failed.
- `verified`: the named human reviewer inspected every required acceptance check and its evidence, confirmed the increment against the unchanged Definition of Done, and the dated review records the result.

Never advance a state because files exist, automated checks ran, or the founder says the week felt productive. End by stating the actual state, missing evidence, accountable owner, and next smallest action.
