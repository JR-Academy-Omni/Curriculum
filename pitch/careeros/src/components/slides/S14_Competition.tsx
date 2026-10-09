import { AnimatedGroup } from '../deck';
import { Page, colors, fonts } from '../pitch';

const cols = ['Bootcamps', 'AI job tools', 'AI agents', 'Job boards', 'CareerOS'];
const rows: [string, string[]][] = [
	['Starts from career goal', ['Partly', 'Partly', 'No', 'Partly', 'Yes']],
	['Work in real workspace', ['Rare', 'No', 'Yes', 'No', 'Yes, via local agent']],
	['Versioned skill evidence', ['Certificates', 'No', 'No', 'No', 'Yes (observed)']],
	['Human review', ['Partly (TAs)', 'No', 'No', 'No', 'Next phase']],
	['Role × level × market', ['Partly', 'Partly', 'No', 'Job data', 'Skills layer, AU first']],
	['Chinese-speaking focus', ['Few', 'Few', 'Generic', 'Generic', 'Yes']],
];

export default function S14_Competition() {
	return (
		<Page tag="13 · Competition" title="We don't compete with agents. We use them." subtitle="Typical capabilities by category. Others own either the learning end or the applying end; CareerOS puts learning, doing, proving and connecting on one evidence trail." accent={colors.purple} source="Team summary by product category, Oct 2026">
			<AnimatedGroup delay={.15}>
				<div style={{ background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 20, overflow: 'hidden' }}>
					<div style={{ display: 'grid', gridTemplateColumns: '300px repeat(4, 1fr) 1.25fr', background: colors.dark, color: colors.white }}>
						<div style={{ padding: '12px 16px', fontFamily: fonts.mono, fontSize: 15, fontWeight: 700 }}>Capability</div>
						{cols.map((c, i) => <div key={c} style={{ padding: '12px 12px', fontWeight: 800, fontSize: 18, background: i === 4 ? colors.red : undefined }}>{c}</div>)}
					</div>
					{rows.map(([h, vals]) => (
						<div key={h} style={{ display: 'grid', gridTemplateColumns: '300px repeat(4, 1fr) 1.25fr', borderTop: '1.5px solid #e8dfd6', alignItems: 'center' }}>
							<div style={{ padding: '13px 16px', fontWeight: 800, fontSize: 19 }}>{h}</div>
							{vals.map((v, i) => <div key={i} style={{ padding: '13px 12px', fontSize: 18, color: i === 4 ? colors.dark : '#5c554f', fontWeight: i === 4 ? 800 : 500, background: i === 4 ? '#fff4ec' : undefined, height: '100%', display: 'flex', alignItems: 'center' }}>{v}</div>)}
						</div>
					))}
				</div>
			</AnimatedGroup>
			<div style={{ fontSize: 19, lineHeight: 1.45, marginTop: 16, color: '#3d3833' }}><b>The biggest risk</b> is an AI vendor or job board building its own "career agent". Our answer: standards, evidence rules, mentors and employer ties don't commoditise with the models.</div>
		</Page>
	);
}
