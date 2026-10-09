import { AnimatedGroup } from '../deck';
import { Page, Card, Todo, H3, P, KindTag, colors, fonts } from '../pitch';

const channels = [
	['Learners and alumni', 'People who bought a course and trust JR', 'total learners'],
	['JR members', 'BASIC / PLUS / PREMIUM subscribers', 'paying members'],
	['30 days and CertMaster', 'New users from low-cost products', 'buyers, last 12 months'],
	['Xiaohongshu and WeChat', 'Chinese-language content (multi-account)', 'followers and monthly reach'],
	['Events / orientation festivals', 'Students and newcomers in Australian cities', 'events per year and attendance'],
];

export default function S13_GTM() {
	return (
		<Page tag="13 · Go-to-market" title="Start with people who already trust JR Academy" subtitle="The first track serves one group: learners with coding basics aiming for graduate or junior developer roles, many of them native Chinese speakers who interview in English. Start small with capacity first, then add tracks and markets." accent={colors.blue} source="Company data, as of Oct 2026">
			<div style={{ display: 'grid', gridTemplateColumns: '1.2fr .8fr', gap: 24, height: '100%' }}>
				<AnimatedGroup delay={.12}>
					<div style={{ background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 20, overflow: 'hidden' }}>
						<div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr 1fr', gap: 12, padding: '10px 16px', background: colors.dark, color: colors.white, fontFamily: fonts.mono, fontSize: 15, fontWeight: 700 }}><span>Channel</span><span>Who it reaches</span><span>Scale</span></div>
						{channels.map(([a, b, c]) => (
							<div key={a} style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr 1fr', gap: 12, alignItems: 'center', padding: '11px 16px', borderTop: '1.5px solid #e8dfd6' }}>
								<span style={{ fontWeight: 800, fontSize: 19 }}>{a}</span><span style={{ fontSize: 17, color: '#3d3833' }}>{b}</span><Todo style={{ fontSize: 15 }}>{c}</Todo>
							</div>
						))}
					</div>
				</AnimatedGroup>
				<AnimatedGroup delay={.3} style={{ display: 'grid', gap: 14 }}>
					<Card accent={colors.yellow}>
						<div style={{ display: 'flex', gap: 8 }}><KindTag kind="tbd" text="First-cohort plan" /></div>
						<H3 style={{ marginTop: 8, fontSize: 24 }}>First pilot: 20–30 learners</H3>
						<P style={{ fontSize: 18, marginTop: 6 }}>One track, one evidence source, one task set. Seats are set by actual mentor hours before recruiting and selling.</P>
					</Card>
					<Card accent={colors.purple}>
						<H3 style={{ fontSize: 24 }}>Australia first, built for many markets</H3>
						<P style={{ fontSize: 18, marginTop: 6 }}>Profiles support AU, NZ, SG, CN, HK, US, GB and CA. Role facts cover Australia first; each new market is calibrated against at least 10 dated job descriptions before launch.</P>
					</Card>
				</AnimatedGroup>
			</div>
		</Page>
	);
}
