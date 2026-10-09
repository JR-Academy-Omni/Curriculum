import { AnimatedGroup } from '../deck';
import { Page, KindTag, H3, colors } from '../pitch';
import type { Kind } from '../pitch';

const cols: { kind: Kind; tag?: string; h: string; c: string; items: string[] }[] = [
	{ kind: 'built', h: 'Built and demo-ready today', c: colors.blue, items: [
		'The full six-stage loop, driven by chat, running on the learner\'s local Claude Code',
		'Upload a resume (PDF/DOCX) and a job description; the AI proposes with source quotes, finds gaps, plans and exports a calendar',
		'Task workbench, command recording, pinned-version evidence, AI check, PDF portfolio',
		'A proactive AI tutor; skills routed by role × level × market',
		'First track, Junior SWE: 10 competencies, 12 tasks and a practice project',
	] },
	{ kind: 'partial', tag: 'Launch prep', h: 'Before the first paid cohort', c: colors.yellow, items: [
		'macOS installer signing, notarisation and auto-update',
		'Live acceptance of JR accounts, purchases and model credits',
		'Final content-owner sign-off on competencies and role standards; role facts cover Australia first',
	] },
	{ kind: 'tbd', h: 'Next phase', c: '#e4ddd6', items: [
		'Human mentor review, P3 projects, an employer-side demo',
		'Talent Passport sharing (with expiry and revocation)',
		'Windows / Linux versions',
		'First paid pilot of 20–30 learners: retention, payment and job-search feedback data',
	] },
];

export default function S10_Status() {
	return (
		<Page tag="10 · Status" title="What is built, and what comes next" subtitle="The core product loop can be demonstrated end to end on a real local agent. It is not yet open to paying users; real user data starts with the first pilot." accent={colors.red} source="Product demo and acceptance records, as of Oct 2026">
			<div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr 1fr', gap: 20, height: '100%' }}>
				{cols.map((col, i) => (
					<AnimatedGroup key={col.h} delay={.12 + i * .12} style={{ display: 'flex' }}>
						<div style={{ flex: 1, background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 20, borderTop: `10px solid ${col.c}`, padding: '16px 18px' }}>
							<KindTag kind={col.kind} text={col.tag} />
							<H3 style={{ marginTop: 10, fontSize: 24 }}>{col.h}</H3>
							<div style={{ display: 'grid', gap: 10, marginTop: 12 }}>
								{col.items.map(t => <div key={t} style={{ fontSize: 18, lineHeight: 1.4, color: '#3d3833', paddingLeft: 12, borderLeft: `4px solid ${col.c}` }}>{t}</div>)}
							</div>
						</div>
					</AnimatedGroup>
				))}
			</div>
		</Page>
	);
}
