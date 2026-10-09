import { AnimatedGroup } from '../deck';
import { Page, P, colors, fonts } from '../pitch';

// Problem → answer map: the AI-era shifts and the problem we hit ourselves, each tied to the slide that shows our answer.
const rows = [
	{ c: colors.red, problem: 'Knowledge is no longer scarce', why: 'AI explains any topic for free; a course that sells knowledge is easy to replace.', answer: 'We don\'t sell knowledge: CareerOS runs the whole loop, Assess → Grow, with a built-in AI tutor.', see: 'Slide 6' },
	{ c: colors.orange, problem: 'The usual signals are cheap', why: 'AI writes resumes and demo projects; applications per ad hit a record high. Employers can\'t tell who did the work.', answer: 'Evidence from the real workspace (diffs, tests, commits), versioned, AI-checked, then reviewed by a person.', see: 'Slides 7, 9' },
	{ c: colors.blue, problem: 'Work now means working with agents', why: 'Job ads mentioning AI skills grew 60% in a year. Employers want people who ship real work with an agent.', answer: 'Learners do real tasks with their own Claude Code or Codex, so practice is the skill being hired.', see: 'Slides 4, 8' },
	{ c: colors.purple, problem: 'Our own model stopped scaling', why: 'One-off courses end before the job outcome; mentor-heavy teaching is costly. Course sales are under pressure.', answer: 'A continuous product: AI tutor first, paid human review, revenue from software and review, never job guarantees.', see: 'Slide 13' },
];

export default function S04b_ProblemAnswer() {
	return (
		<Page tag="04 · Problem → answer" title="What AI changed, and how CareerOS answers it" subtitle="Three shifts in learning and hiring, plus the problem we hit ourselves, each mapped to the product." accent={colors.red} source="SEEK Employment Report – July 2026; company data, Oct 2026">
			<div style={{ background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 20, overflow: 'hidden' }}>
				<div style={{ display: 'grid', gridTemplateColumns: '300px 1fr 1fr 110px', gap: 18, padding: '12px 20px', background: '#fff1e7', fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, borderBottom: `2px solid ${colors.dark}` }}>
					<span>The problem</span><span>Why it matters</span><span>How CareerOS answers</span><span>See</span>
				</div>
				{rows.map((r, i) => (
					<AnimatedGroup key={r.problem} delay={.12 + i * .1}>
						<div style={{ display: 'grid', gridTemplateColumns: '300px 1fr 1fr 110px', gap: 18, alignItems: 'center', padding: '12px 20px', borderTop: i ? '1.5px solid #e8dfd6' : undefined, borderLeft: `10px solid ${r.c}` }}>
							<span style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 22, lineHeight: 1.2 }}>{r.problem}</span>
							<P style={{ fontSize: 18 }}>{r.why}</P>
							<P style={{ fontSize: 18, color: colors.dark, fontWeight: 600 }}>{r.answer}</P>
							<span style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: '#7a716a' }}>{r.see}</span>
						</div>
					</AnimatedGroup>
				))}
			</div>
		</Page>
	);
}
