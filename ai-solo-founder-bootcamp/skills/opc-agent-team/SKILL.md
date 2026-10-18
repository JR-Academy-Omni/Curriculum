---
name: opc-agent-team
description: Design a minimal, permission-safe AI agent setup for a solo founder and run the first inspectable scheduled task. Use when defining an AI employee role, writing its job instructions, selecting a scheduling mechanism, limiting tool access, or reviewing an agent's first output.
---

# OPC Agent Team

## Read first

Read `BUSINESS-SOT.md` and the workspace evidence policy. Refuse to design agents for an undefined business or to request unnecessary access to email, customer data, finance, contracts, identity records, or an employer's systems.

## Design the minimum team

Start with one role. Add another only when the first role has produced a reviewed output and the responsibilities cannot safely stay together.

Create `AGENT-TEAM.md`. For each role record:

- mission and the Business SoT field it serves;
- allowed input sources and explicitly forbidden data;
- allowed tools, smallest permission scope, and revocation path;
- required output schema and destination;
- actions that always require human approval;
- trigger, timezone, expected runtime, and cost ceiling;
- failure notification, retry limit, review owner, and stop condition.

Prefer one useful agent over a simulated company. Give the human founder final accountability for publishing, outreach, payments, legal, tax, hiring, and customer commitments.

## Run and inspect

Select one low-risk task connected to customer research. Prefer public-source monitoring, source-list preparation, or interview-question drafting. Do not scrape behind login walls, bypass access controls, impersonate users, auto-contact people, or infer willingness to pay from comments.

Before scheduling, run the task manually with synthetic or redacted data. Test one deliberate failure such as a missing source, ambiguous timezone, inaccessible page, or output that attempts an external action. The safe result must stop or return `unavailable`, not invent a value.

Create an `AUTOMATION-LOG.md` row containing timestamp and timezone, task version, input reference, output reference, run result, human corrections, runtime, observed cost if available, retry decision, and whether the schedule remains enabled.

When scheduled execution depends on a local computer, state what happens during sleep or shutdown. When it runs in a cloud service, state which account owns it, how to disable it, and where the audit history can be inspected.

## Exit

Mark the setup `executed` only after one task actually runs. Mark it `verified` only after the student inspects the output, records the review, proves the disable or revocation path, and a required reviewer accepts the evidence. End with five real people to approach for customer interviews; never simulate their answers.
