import { AnimatedGroup } from '../deck';
import { Page, KindTag, Todo, P, colors, fonts } from '../pitch';
import type { Kind } from '../pitch';

const rows: { layer: string; what: string; price: string; kind: Kind }[] = [
	{ layer: 'Explore', what: 'Light assessment, direction finding, sample tasks', price: 'Free or low-cost (capped AI usage)', kind: 'tbd' },
	{ layer: '30 days series', what: 'A planned 30 days; build something small on your own machine each day', price: 'A$69 + GST per series, one-off', kind: 'fact' },
	{ layer: 'JR membership', what: 'Existing BASIC / PLUS / PREMIUM benefits (CertMaster, AI Tutor, 1:1 and more)', price: 'A$8 · A$19.90 · A$88 / month', kind: 'fact' },
	{ layer: 'CareerOS subscription', what: 'Career Profile, six stages, skills, local evidence', price: 'Priced during pilot', kind: 'tbd' },
	{ layer: 'JR model credits', what: 'For learners without local Claude Code or Codex', price: 'Free allowance + plans, priced during pilot', kind: 'tbd' },
	{ layer: 'Guided Mission / evidence services', what: 'Stage plans, mentor review, skill demos and portfolio curation', price: 'Charged per stage, priced during pilot', kind: 'tbd' },
	{ layer: 'Employers / institutions', what: 'Learner-consented review and talent discovery', price: 'Phase 5, demand to be validated first', kind: 'hyp' },
];

export default function S12_Business() {
	return (
		<Page tag="11 · Business model" title="Pay for the software, and for process and review" subtitle="30 days and membership already generate revenue; CareerOS subscription and service tiers will be priced in the pilot. We charge for process and review, never for job guarantees." accent={colors.green} source="Current prices from the JR Academy website and app, as of Oct 2026">
			<div style={{ display: 'grid', gridTemplateColumns: '1.45fr .55fr', gap: 22, height: '100%' }}>
				<AnimatedGroup delay={.12}>
					<div style={{ background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 20, overflow: 'hidden' }}>
						{rows.map((r, i) => (
							<div key={r.layer} style={{ display: 'grid', gridTemplateColumns: '220px 1fr 310px', gap: 14, alignItems: 'center', padding: '10px 16px', borderTop: i ? '1.5px solid #e8dfd6' : 'none', background: r.kind === 'fact' ? '#f2fbec' : undefined }}>
								<div style={{ fontWeight: 800, fontSize: 19 }}>{r.layer}</div>
								<div style={{ fontSize: 17, lineHeight: 1.35, color: '#3d3833' }}>{r.what}</div>
								<div style={{ display: 'flex', gap: 8, alignItems: 'center' }}><KindTag kind={r.kind} text={r.kind === 'fact' ? 'Current' : undefined} /><span style={{ fontSize: 16, lineHeight: 1.3 }}>{r.price}</span></div>
							</div>
						))}
					</div>
				</AnimatedGroup>
				<AnimatedGroup delay={.3} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
					<div style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 15 }}>Unit economics</div>
					{['Gross margin', 'CAC', 'LTV', 'Paying members', '30 days copies sold', 'Mentor cost per completed loop'].map(t => <Todo key={t} style={{ fontSize: 17 }}>{t}</Todo>)}
					<P style={{ fontSize: 16, color: '#7a716a' }}>Principle: validate bounded stage services first, then set long-term subscription pricing.</P>
				</AnimatedGroup>
			</div>
		</Page>
	);
}
