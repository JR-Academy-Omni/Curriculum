import { AnimatedGroup } from '../deck';
import { Page, Todo, P, colors, fonts } from '../pitch';

const uses = [
	['Automatic evidence path', 'Make task → evidence → review work with real learners', 'G-01'],
	['Mentor feedback efficiency', 'Rubrics, rotas, timing; the AI check cuts mentor prep work', 'G-02 · G-04'],
	['Role standards and content', 'Calibrate each market on ≥10 dated job descriptions; second track', 'G-03'],
	['Quality and trust validation', 'External recruiter review trials; privacy and share revocation', 'G-03'],
	['Desktop release', 'Signing, notarisation, auto-update, Windows acceptance, live accounts and billing', 'G-01'],
];

export default function S17_Ask() {
	return (
		<Page tag="16 · The ask" title="What we are raising, and the gates it pays for" subtitle="Every use of funds maps to a gate we can verify, not to a launch date." accent={colors.red} source="Company plan, Oct 2026">
			<div style={{ display: 'grid', gridTemplateColumns: '.7fr 1.3fr', gap: 24, height: '100%' }}>
				<AnimatedGroup delay={.12} style={{ display: 'flex' }}>
					<div style={{ flex: 1, background: colors.dark, color: colors.white, borderRadius: 22, padding: '22px 24px', boxShadow: '8px 8px 0 rgba(255,87,87,.6)', display: 'grid', gap: 14, alignContent: 'start' }}>
						<div><div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: colors.yellow }}>Raise</div><div style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 56, lineHeight: 1.1, marginTop: 4 }}>A$1M</div></div>
						{[['Round and valuation', 'round, valuation or terms'], ['Runway', 'months of runway after the raise'], ['18-month milestones', 'gates and metrics to reach']].map(([h, t]) => (
							<div key={h}><div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: colors.yellow }}>{h}</div><Todo style={{ marginTop: 6, fontSize: 17 }}>{t}</Todo></div>
						))}
					</div>
				</AnimatedGroup>
				<AnimatedGroup delay={.28}>
					<div style={{ background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 20, overflow: 'hidden' }}>
						<div style={{ display: 'grid', gridTemplateColumns: '210px 1fr 130px 140px', gap: 12, padding: '10px 16px', background: '#fff1e7', fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, borderBottom: `2px solid ${colors.dark}` }}><span>Use of funds</span><span>What it does</span><span>Gate</span><span>Share</span></div>
						{uses.map(([a, b, g]) => (
							<div key={a} style={{ display: 'grid', gridTemplateColumns: '210px 1fr 130px 140px', gap: 12, alignItems: 'center', padding: '12px 16px', borderTop: '1.5px solid #e8dfd6' }}>
								<span style={{ fontWeight: 800, fontSize: 19 }}>{a}</span><span style={{ fontSize: 17, color: '#3d3833', lineHeight: 1.35 }}>{b}</span><span style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700 }}>{g}</span><Todo style={{ fontSize: 14 }}>share</Todo>
							</div>
						))}
					</div>
					<P style={{ fontSize: 17, marginTop: 12, color: '#7a716a' }}>Deliberately not funded: leaderboards, complex multi-agent orchestration, a large employer back office. First make one track's loop solid.</P>
				</AnimatedGroup>
			</div>
		</Page>
	);
}
