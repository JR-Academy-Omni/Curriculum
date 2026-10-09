import { AnimatedGroup } from '../deck';
import { Page, P, colors, fonts } from '../pitch';

const stats = [
	{ n: '32%', vs: 'vs 49% all industries', t: 'Share of Australian IT employers that recruited, 2025–26', src: 'JSA', c: colors.red },
	{ n: '16%', vs: 'lowest in recent years', t: 'IT employers expecting to add staff in the next 3 months', src: 'JSA', c: colors.orange },
	{ n: '~34%', vs: '20+ applicants per role', t: 'Recruiting IT employers that received 20 or more applications', src: 'JSA', c: colors.blue },
	{ n: '+60.4%', vs: 'yet only 2.1% of ads', t: 'YoY growth in SEEK job ads mentioning AI skills (13.5% of ICT ads)', src: 'SEEK', c: colors.purple },
];

export default function S03_Problem() {
	return (
		<Page tag="02 · The problem" title="Hiring has no shortage of applicants. It lacks trusted matches." subtitle="Government and SEEK data point the same way: fewer roles, more competition, and employers struggling to tell who can actually do the work. SEEK applications per job ad hit a record high in the same period." accent={colors.blue} source="JSA REOS Spotlight, 24 Sep 2026; SEEK Employment Report – July 2026 (June data); both accessed 9 Oct 2026">
			<div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', gap: 22, height: '100%' }}>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
					{stats.map((s, i) => (
						<AnimatedGroup key={s.n} delay={.12 + i * .08}>
							<div style={{ background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 18, padding: '18px 20px', boxShadow: `7px 7px 0 ${s.c}`, minHeight: 236 }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: '#7a716a' }}>{s.src}</div>
								<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 64, marginTop: 10, lineHeight: 1 }}>{s.n}</div>
								<div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, marginTop: 6 }}>{s.vs}</div>
								<P style={{ fontSize: 19, marginTop: 10 }}>{s.t}</P>
							</div>
						</AnimatedGroup>
					))}
				</div>
				<AnimatedGroup delay={.5} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
					<div style={{ background: '#effbe9', border: `2px solid ${colors.dark}`, borderRadius: 18, padding: '16px 20px' }}>
						<div style={{ fontWeight: 800, fontSize: 21 }}>Market signal</div>
						<P style={{ fontSize: 19, marginTop: 6 }}>JSA finds that IT hiring difficulty comes mostly from <b>technical skill mismatch or candidate oversupply</b>, not a lack of applicants. Job seekers need more than another course: they need proof of ability an employer can read and trust.</P>
					</div>
					<div style={{ background: '#fff4ec', border: `2px solid ${colors.dark}`, borderRadius: 18, padding: '16px 20px' }}>
						<div style={{ fontWeight: 800, fontSize: 21 }}>Our thesis</div>
						<P style={{ fontSize: 19, marginTop: 6 }}>Candidates who can show evidence that is <b>sourced, versioned and reviewed by a person</b> will stand out in a crowded pool. CareerOS's impact will be validated with pilot data.</P>
					</div>
				</AnimatedGroup>
			</div>
		</Page>
	);
}
