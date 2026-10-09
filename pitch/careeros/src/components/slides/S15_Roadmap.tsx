import { AnimatedGroup } from '../deck';
import { Page, P, colors, fonts } from '../pitch';

const phases = [
	['Phase 0', 'Scope and feasibility', '2026 Q4', 'Role standards, mentor capacity, automatic-evidence proof, signing, live accounts', 'G-01', colors.red],
	['Phase 1', 'Thin-product pilot', 'After tech proof', 'One track, one evidence source, human feedback', 'G-02 · G-03', colors.orange],
	['Phase 2', '90-day service test', '2027 Q1', 'Stage plans, course links, job-search feedback', 'G-04', colors.yellow],
	['Phase 3', 'Cross-product links', 'After the loop is proven', 'Identity, entitlements, P3 and Jobpin sync', 'Real usage', colors.green],
	['Phase 4', 'Second career track', 'After track 1 review', 'BA, DA, DevOps or an in-job path', 'Own mentors', colors.blue],
	['Phase 5', 'Employers', 'After repeat demand', 'Consented talent discovery', 'Employer usage', colors.purple],
];
const gates = [['G-01 Feasibility', 'Can real candidate evidence form without repeated uploads?'], ['G-02 User value', 'Do learners start more easily, get feedback and know the next step?'], ['G-03 Trust value', 'Is the verified scope accurate, and do learners and reviewers accept it?'], ['G-04 Economics', 'Can an acceptable price cover service and tech costs?']];

export default function S15_Roadmap() {
	return (
		<Page tag="14 · Roadmap" title="Driven by gates, not calendar promises" subtitle="Every phase has a gate we can verify: pass it and we invest more; miss it and we narrow scope. Funds are released gate by gate, which keeps risk contained." accent={colors.orange} source="Company plan, Oct 2026">
			<div style={{ display: 'grid', gridTemplateColumns: '1.35fr .65fr', gap: 22, height: '100%' }}>
				<div style={{ display: 'grid', gap: 9 }}>
					{phases.map(([p, n, w, t, g, c], i) => (
						<AnimatedGroup key={p as string} delay={.08 + i * .06}>
							<div style={{ display: 'grid', gridTemplateColumns: '112px 220px 1fr 150px', gap: 12, alignItems: 'center', background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 14, padding: '8px 14px', borderLeft: `12px solid ${c}` }}>
								<span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 16 }}>{p}</span>
								<div><div style={{ fontWeight: 800, fontSize: 19 }}>{n}</div><div style={{ fontSize: 15, color: '#7a716a' }}>{w}</div></div>
								<div style={{ fontSize: 17, lineHeight: 1.35, color: '#3d3833' }}>{t}</div>
								<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700 }}>{g}</div>
							</div>
						</AnimatedGroup>
					))}
				</div>
				<AnimatedGroup delay={.45} style={{ display: 'flex' }}>
					<div style={{ flex: 1, background: colors.dark, color: colors.white, borderRadius: 22, padding: '18px 20px', boxShadow: '8px 8px 0 rgba(255,222,89,.9)' }}>
						<div style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 26 }}>Four gates</div>
						<div style={{ display: 'grid', gap: 12, marginTop: 12 }}>
							{gates.map(([h, t]) => <div key={h}><div style={{ fontWeight: 800, fontSize: 19, color: colors.yellow }}>{h}</div><div style={{ fontSize: 17, lineHeight: 1.4 }}>{t}</div></div>)}
						</div>
						<P style={{ fontSize: 16, color: '#c9c9d3', marginTop: 12 }}>Pilot targets: 7-day loop activation ≥60%, week-4 loop ≥50%, automatic evidence coverage ≥80%, 90% of first reviews within 2 business days.</P>
					</div>
				</AnimatedGroup>
			</div>
		</Page>
	);
}
