import { AnimatedGroup } from '../deck';
import { Page, Shot, KindTag, P, colors, fonts } from '../pitch';

export default function S09_SkillsAnd30Days() {
	return (
		<Page tag="09 · Extensibility" title="Skills layer + 30 days series: add data, not code" subtitle="New capabilities, roles and markets are added as data. The same resume analysis uses different criteria for a graduate engineer and a senior analyst." accent={colors.purple} source="Real product screenshots, UI in Chinese · Oct 2026; 30 days price is the current price">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
				<AnimatedGroup delay={.15}>
					<Shot src="skills.png" width={600} caption={<><b>Skills:</b> capability × variant (role family × level × market) × knowledge pack. The router picks the most specific variant and says so in the chat when it falls back to the generic one.</>} />
					<div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 10 }}>
						<KindTag kind="built" text="First 12 JR skills" /><KindTag kind="tbd" text="Online knowledge packs" />
					</div>
				</AnimatedGroup>
				<AnimatedGroup delay={.3}>
					<Shot src="thirty-days.png" width={600} caption={<><b>30 days:</b> Day 1 is done directly in local Claude Code, with the tutor on the right speaking first and guiding step by step.</>} />
					<div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '6px 14px', marginTop: 8, alignItems: 'baseline' }}>
						<span style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 26 }}>A$69</span><P style={{ fontSize: 18 }}>+ GST, one-off purchase per series; "30 Days of AI" on sale now</P>
						<span style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 26 }}>+4</span><P style={{ fontSize: 18 }}>in preparation: DevOps, enterprise AI automation, your first app, AI knowledge base</P>
					</div>
				</AnimatedGroup>
			</div>
		</Page>
	);
}
