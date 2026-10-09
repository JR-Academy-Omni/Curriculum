import { AnimatedGroup } from '../deck';
import { Page, Shot, Crop, colors, fonts } from '../pitch';

const tiers = [
	['Self-reported', 'The learner\'s own account', '#e4ddd6'],
	['Observed', 'Tests, diffs, commits recorded by CareerOS', colors.blue],
	['AI check', 'Describes the version; never raises the tier', colors.purple],
	['Human review', 'Mentor, versioned rubric (next phase)', colors.green],
];

export default function S08_DemoActProve() {
	return (
		<Page tag="07 · DEMO ②" title="Real projects, checkable evidence" subtitle="Local Claude Code (read-only) in the centre; the AI tutor guides from real events and never does the work." accent={colors.green} source="Real product screenshots, UI in Chinese · demo profile (fictional person; some AI replies scripted for the demo) · Oct 2026">
			<div style={{ display: 'grid', gridTemplateColumns: '620px 1fr', gap: 30 }}>
				<AnimatedGroup delay={.15}><Shot src="act-tutor.png" width={620} caption={<><b>Act:</b> Task 1 runs in local Claude Code; the tutor cites its basis ("last activity 9 Oct, 01:36"). Pinned versions v1 / v2 are append-only.</>} /></AnimatedGroup>
				<AnimatedGroup delay={.3} style={{ display: 'grid', gap: 14, alignContent: 'start' }}>
					<Crop src="prove.png" width={700} region={{ x: 315, y: 180, w: 650, h: 250 }} caption={<><b>Prove (detail):</b> the AI check goes item by item against the test record and says "insufficient evidence" where it is.</>} />
					<div style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 15 }}>Evidence tiers: never interchangeable; no skill claim before human review</div>
					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
						{tiers.map(([h, t, c]) => (
							<div key={h} style={{ background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 14, padding: '8px 10px', borderTop: `8px solid ${c}` }}>
								<div style={{ fontWeight: 800, fontSize: 18 }}>{h}</div>
								<div style={{ fontSize: 15.5, lineHeight: 1.35, color: '#3d3833' }}>{t}</div>
							</div>
						))}
					</div>
				</AnimatedGroup>
			</div>
		</Page>
	);
}
