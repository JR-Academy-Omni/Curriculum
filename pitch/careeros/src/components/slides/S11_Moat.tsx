import { AnimatedGroup } from '../deck';
import { Page, Card, KindTag, Todo, H3, P, colors } from '../pitch';
import type { Kind } from '../pitch';

const items: { h: string; t: string; kind: Kind; tag?: string; todo?: string; c: string }[] = [
	{ h: 'Career Harness', t: 'Standards, tasks and practice projects by role × level × market, plus evidence rules. Models can be swapped; this layer is ours.', kind: 'built', tag: 'Built', c: colors.yellow },
	{ h: 'JR content', t: 'Courses, labs, 30 days and interview data feed tasks and skills directly.', kind: 'partial', tag: 'Integrating', todo: 'courses / labs / write-ups', c: colors.red },
	{ h: 'Mentors and P3', t: 'Human review is a trust step AI struggles to replace; P3 adds real team work and contribution records.', kind: 'tbd', tag: 'Next phase', todo: 'mentors, weekly hours', c: colors.green },
	{ h: 'Employer network', t: 'Meetups, university festivals and company events feed the Connect stage.', kind: 'tbd', tag: 'Next phase', todo: 'partner employers', c: colors.blue },
	{ h: 'Community', t: 'Chinese-speaking job seekers worldwide: taught in Chinese, interviewing in English.', kind: 'claim', todo: 'community size', c: colors.purple },
	{ h: 'Knowledge packs', t: 'Methods are open; knowledge stays on our backend, checked per member. Monthly updates keep criteria fresh.', kind: 'hyp', c: colors.orange },
];

export default function S11_Moat() {
	return (
		<Page tag="11 · Why us" title="Vendors supply the agent. We supply the trust." subtitle="The stronger the models, the scarcer the answer to 'who defines good enough, and who vouches for it'. Standards, evidence and people come from years of teaching and employer relationships." accent={colors.yellow} source="Company data, as of Oct 2026">
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: '1fr 1fr', gap: 18, height: '100%' }}>
				{items.map((it, i) => (
					<AnimatedGroup key={it.h} delay={.1 + i * .06} style={{ display: 'flex' }}>
						<Card accent={it.c} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
							<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}><H3 style={{ fontSize: 24 }}>{it.h}</H3><KindTag kind={it.kind} text={it.tag} /></div>
							<P style={{ fontSize: 18 }}>{it.t}</P>
							{it.todo && <div style={{ marginTop: 'auto' }}><Todo style={{ fontSize: 16 }}>{it.todo}</Todo></div>}
						</Card>
					</AnimatedGroup>
				))}
			</div>
		</Page>
	);
}
