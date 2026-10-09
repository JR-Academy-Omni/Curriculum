import { AnimatedGroup } from '../deck';
import { assetPath } from '../ui';
import { Page, Card, Todo, H3, P, KindTag, colors } from '../pitch';

const roles = [
	['Founder / CEO', 'Product direction; owns CareerOS', 'name, background, track record (with consent)', colors.red],
	['Tech lead', 'Desktop, Harness, backend control plane', 'person and background', colors.blue],
	['Teaching / role-standards lead', 'Competency models, tasks, content sign-off', 'person and background', colors.yellow],
	['Mentor and career services lead', 'Review rubrics, capacity, calibration', 'person, mentor count', colors.green],
];

export default function S16_Team() {
	return (
		<Page tag="15 · Team" title="Team" subtitle="Four accountable leads deliver CareerOS, backed by a team that has operated in Australia and Chengdu for years." accent={colors.red} source="Company data; team size as of May 2026">
			<div style={{ display: 'grid', gridTemplateColumns: '1.3fr .7fr', gap: 22, height: '100%' }}>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
					{roles.map(([h, t, todo, c], i) => (
						<AnimatedGroup key={h} delay={.1 + i * .08} style={{ display: 'flex' }}>
							<Card accent={c} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
								<H3 style={{ fontSize: 25 }}>{h}</H3>
								<P style={{ fontSize: 18 }}>{t}</P>
								<div style={{ marginTop: 'auto' }}><Todo style={{ fontSize: 16 }}>{todo}</Todo></div>
							</Card>
						</AnimatedGroup>
					))}
				</div>
				<AnimatedGroup delay={.45} style={{ display: 'grid', gap: 16 }}>
					<Card accent={colors.orange}>
						<KindTag kind="claim" />
						<H3 style={{ marginTop: 8, fontSize: 24 }}>Current operating team</H3>
						<P style={{ fontSize: 18, marginTop: 6 }}>12 full-time staff + 3 interns (May 2026) across Chengdu, Melbourne and Brisbane, covering academic operations, social media, course advising, marketing and operations.</P>
						<div style={{ marginTop: 8 }}><Todo style={{ fontSize: 15 }}>current headcount and engineering team</Todo></div>
					</Card>
					<Card accent={colors.purple}>
						<div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
							<img src={assetPath('brand/claude-certified-services-partner.svg')} alt="Claude Certified Services Partner" style={{ width: 64, height: 64, flexShrink: 0 }} />
							<P style={{ fontSize: 17 }}>Claude Certified Services Partner (Anthropic Claude Partner Network)</P>
						</div>
						<H3 style={{ fontSize: 22, marginTop: 12 }}>Advisers and partners</H3>
						<P style={{ fontSize: 17, marginTop: 6 }}>Industry advisers, partner employers and university partners (named publicly only with their consent).</P>
						<div style={{ marginTop: 8 }}><Todo style={{ fontSize: 15 }}>list of advisers and partners</Todo></div>
					</Card>
				</AnimatedGroup>
			</div>
		</Page>
	);
}
