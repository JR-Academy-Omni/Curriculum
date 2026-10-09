import { AnimatedGroup } from '../deck';
import { assetPath } from '../ui';
import { Page, Card, H3, P, KindTag, colors, fonts } from '../pitch';

const roles = [
	['Lightman Wang · Founder / CEO', 'Founder of JR Academy. Owns CareerOS product direction and leads delivery.', 'Lightman', colors.red],
	['Product & engineering', 'Desktop app, Career Harness, backend control plane', 'Lightman with the JR Academy team', colors.blue],
	['Teaching & role standards', 'Competency models, tasks, content sign-off', 'JR Academy teaching team', colors.yellow],
	['Mentors & career services', 'Review rubrics, capacity, calibration', 'JR Academy mentor network', colors.green],
];

export default function S16_Team() {
	return (
		<Page tag="15 · Team" title="Team" subtitle="Led by founder Lightman Wang, backed by the JR Academy team that has operated in Australia and Chengdu for years." accent={colors.red} source="Company data; team size as of May 2026">
			<div style={{ display: 'grid', gridTemplateColumns: '1.3fr .7fr', gap: 22, height: '100%' }}>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
					{roles.map(([h, t, todo, c], i) => (
						<AnimatedGroup key={h} delay={.1 + i * .08} style={{ display: 'flex' }}>
							<Card accent={c} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
								<H3 style={{ fontSize: 25 }}>{h}</H3>
								<P style={{ fontSize: 18 }}>{t}</P>
								<div style={{ marginTop: 'auto', fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: '#7a716a' }}>Led by: {todo}</div>
							</Card>
						</AnimatedGroup>
					))}
				</div>
				<AnimatedGroup delay={.45} style={{ display: 'grid', gap: 16 }}>
					<Card accent={colors.orange}>
						<KindTag kind="claim" />
						<H3 style={{ marginTop: 8, fontSize: 24 }}>Current operating team</H3>
						<P style={{ fontSize: 18, marginTop: 6 }}>12 full-time staff + 3 interns (May 2026) across Chengdu, Melbourne and Brisbane, covering academic operations, social media, course advising, marketing and operations.</P>
					</Card>
					<Card accent={colors.purple}>
						<div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
							<img src={assetPath('brand/claude-certified-services-partner.svg')} alt="Claude Certified Services Partner" style={{ width: 64, height: 64, flexShrink: 0 }} />
							<P style={{ fontSize: 17 }}>Claude Certified Services Partner (Anthropic Claude Partner Network)</P>
						</div>
						<H3 style={{ fontSize: 22, marginTop: 12 }}>Advisers and partners</H3>
						<P style={{ fontSize: 17, marginTop: 6 }}>Industry advisers, partner employers and university partners (named publicly only with their consent).</P>
					</Card>
				</AnimatedGroup>
			</div>
		</Page>
	);
}
