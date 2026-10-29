import { AnimatedGroup } from '../deck';
import { Page, P, colors, fonts } from '../pitch';

const principles = ['Market-backward', 'Outcome-first', 'Mission-driven', 'Evidence-based', 'Human-verified', 'Continuous Feedback'];
const loop: [string, string][] = [['Sense', 'Take in market signals continuously'], ['Assess', 'Understand current state and constraints'], ['Position', 'Define who to become'], ['Gap', 'Gaps in skills, evidence, communication, positioning, network'], ['Mission', 'Turn gaps into time-boxed actions'], ['Evidence & Verify', 'Real output + human review'], ['Opportunity & Feedback', 'Opportunities and market feedback flow back']];
const map = [['Assess', 'Sense + Assess'], ['Plan', 'Position + Gap + Mission'], ['Act', 'Mission execution'], ['Prove', 'Evidence & Verify'], ['Connect', 'Opportunity'], ['Grow ↺', 'Feedback → reassess']];

export default function A01_Methodology() {
	return (
		<Page tag="Appendix A1 · Methodology" title="We measure distance to a real career outcome, not how much was learned" titleSize={44} accent={colors.green} source="JR Academy Career OS methodology, Oct 2026">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, height: '100%' }}>
				<AnimatedGroup delay={.12}>
					<div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
						{principles.map((p, i) => <span key={p} style={{ background: [colors.red, colors.orange, colors.yellow, colors.green, colors.blue, colors.purple][i], border: `2px solid ${colors.dark}`, borderRadius: 999, padding: '6px 14px', fontWeight: 800, fontSize: 18 }}>{p}</span>)}
					</div>
					<div style={{ display: 'grid', gap: 8, marginTop: 18 }}>
						{loop.map(([h, t], i) => <div key={h} style={{ display: 'grid', gridTemplateColumns: '40px 230px 1fr', alignItems: 'center', gap: 10 }}><span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 16 }}>{i + 1}</span><span style={{ fontWeight: 800, fontSize: 19 }}>{h}</span><span style={{ fontSize: 17, color: '#3d3833' }}>{t}</span></div>)}
					</div>
				</AnimatedGroup>
				<AnimatedGroup delay={.28}>
					<div style={{ background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 20, padding: '16px 20px' }}>
						<div style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 15 }}>Product stage ↔ methodology</div>
						{map.map(([a, b]) => <div key={a} style={{ display: 'grid', gridTemplateColumns: '170px 1fr', gap: 12, padding: '9px 0', borderTop: '1.5px solid #e8dfd6', fontSize: 18 }}><b>{a}</b><span>{b}</span></div>)}
					</div>
					<P style={{ fontSize: 17, marginTop: 14 }}>Not every gap is a learning gap. Someone with work but no clear account of their contribution starts with explanation and review; courses are recommended only for skill gaps.</P>
				</AnimatedGroup>
			</div>
		</Page>
	);
}
