import { AnimatedGroup } from '../deck';
import { Page, Card, KindTag, H3, P, colors } from '../pitch';
import type { Kind } from '../pitch';

const cols: { kind?: Kind; c: string; h: string; items: string[] }[] = [
	{ c: colors.green, h: 'Learners already have an agent', items: ['Local AI coding tools such as Claude Code and Codex read code, run tests and edit files inside the user\'s own project', 'SEEK: job-ad mentions of Agentic AI and of AI Ethics & Governance more than doubled in a year'] },
	{ kind: 'built', c: colors.blue, h: 'Evidence can come from the real workspace', items: ['CareerOS already runs on local Claude Code: tasks run read-only, and CareerOS runs the tests itself and records the exit code and commit', 'No screenshots, no uploads: diffs, tests and versions are linked automatically'] },
	{ kind: 'hyp', c: colors.purple, h: '"Did you really do this?" is harder to answer', items: ['AI makes resumes, portfolios and code easier to generate, so employers need evidence that is sourced, versioned and reviewed by a person', 'The pilot will measure it directly: how much faster recruiters understand and verify an evidence profile than a traditional project write-up'] },
];

export default function S04_WhyNow() {
	return (
		<Page tag="03 · Why now" title="An agent now sits on every job seeker's computer" subtitle="What once needed a self-built cloud coding environment now runs on the learner's own machine. We only build the layer above the agent: standards, tasks, evidence and review." accent={colors.purple} source="SEEK Employment Report – July 2026; product demo, Oct 2026">
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
				{cols.map((col, i) => (
					<AnimatedGroup key={col.h} delay={.15 + i * .12} style={{ display: 'flex' }}>
						<Card accent={col.c} style={{ flex: 1 }}>
							{col.kind ? <KindTag kind={col.kind} /> : <KindTag kind="fact" text="Market data" />}
							<H3 style={{ marginTop: 14 }}>{col.h}</H3>
							<div style={{ display: 'grid', gap: 14, marginTop: 16 }}>
								{col.items.map(t => <P key={t} style={{ fontSize: 19, paddingLeft: 14, borderLeft: `4px solid ${col.c}` }}>{t}</P>)}
							</div>
						</Card>
					</AnimatedGroup>
				))}
			</div>
			<AnimatedGroup delay={.55}>
				<div style={{ marginTop: 22, background: colors.dark, color: colors.white, borderRadius: 18, padding: '16px 22px', fontSize: 21, lineHeight: 1.45 }}>
					Our choice: <b style={{ color: colors.yellow }}>no in-house agent and no hosted cloud runtime</b>. We invest in the Career Harness above the agent: role standards, tasks, evidence rules and human review.
				</div>
			</AnimatedGroup>
		</Page>
	);
}
