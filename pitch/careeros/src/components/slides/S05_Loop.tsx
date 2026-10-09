import { AnimatedGroup } from '../deck';
import { Page, P, colors, fonts } from '../pitch';

const stages = [
	{ en: 'Assess', c: colors.red, do: 'Drop in a resume PDF and a job description; the AI maps current state, goal and gaps, quoting the source', out: 'A sourced picture of strengths, constraints and gaps' },
	{ en: 'Plan', c: colors.orange, do: 'A plan built from the gaps and weekly hours; once confirmed it goes into the calendar (.ics)', out: 'A confirmed direction and weekly tasks' },
	{ en: 'Act', c: colors.yellow, do: 'Tasks done in a real project with local Claude Code or Codex, guided by an AI tutor', out: 'Real output, test runs and blocker notes' },
	{ en: 'Prove', c: colors.green, do: 'Pick evidence, explain it, pin a version; AI checks it, then a person reviews', out: 'Pinned evidence and scoped skill claims' },
	{ en: 'Connect', c: colors.blue, do: 'Match must-haves against evidence; draft resume bullets, cover letters and referral messages', out: 'Grounded application materials and a log' },
	{ en: 'Grow ↺', c: colors.purple, do: 'Log outcomes and feedback; the AI finds the bottleneck and loops back to Assess or Plan', out: 'Decisions for the next loop' },
];

export default function S05_Loop() {
	return (
		<Page tag="04 · Product" title="A continuous career loop, not a course" subtitle="A Career Profile switcher and six stage tabs sit at the top of the app. Every stage leaves a result you can check; courses appear only when a gap calls for them." accent={colors.orange} source="Product demo, Oct 2026">
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 14, height: '100%' }}>
				{stages.map((s, i) => (
					<AnimatedGroup key={s.en} delay={.1 + i * .07} style={{ display: 'flex' }}>
						<div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 18, overflow: 'hidden' }}>
							<div style={{ background: s.c, padding: '14px 14px 12px', borderBottom: `2px solid ${colors.dark}` }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700 }}>0{i + 1}</div>
								<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 34, lineHeight: 1.05 }}>{s.en}</div>
							</div>
							<div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: '#7a716a' }}>In the chat</div>
								<P style={{ fontSize: 18 }}>{s.do}</P>
								<div style={{ marginTop: 'auto', fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: '#7a716a' }}>Leaves behind</div>
								<P style={{ fontSize: 18, fontWeight: 700, color: colors.dark }}>{s.out}</P>
							</div>
						</div>
					</AnimatedGroup>
				))}
			</div>
		</Page>
	);
}
