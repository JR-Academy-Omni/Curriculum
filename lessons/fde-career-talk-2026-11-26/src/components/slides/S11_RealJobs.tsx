import { DeckFrame, Panel, Label, AnimatedGroup, colors } from '../kit';

const jobs = [
	{ logo: 'logos/fis.png', title: 'Forward Deployed Engineer', company: 'FIS', place: 'Melbourne, VIC · Hybrid' },
	{ logo: 'logos/nab.png', title: 'Senior Consultant, AI Engineer', company: 'NAB', place: 'Melbourne, VIC' },
	{ logo: 'logos/sap.png', title: 'Business AI Architect', company: 'SAP', place: 'Southbank, VIC · Hybrid' },
];

export default function S11_RealJobs() {
	return <DeckFrame tag="03 · 岗位地图" title="墨尔本 LinkedIn 上的三个岗位" subtitle="都面向客户和业务，但写代码的比重差很多。" accent={colors.blue}>
		<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
			{jobs.map((j, i) => <AnimatedGroup key={j.title} delay={.15 + i * .12} style={{ display: 'flex' }}>
				<Panel style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
					<div style={{ height: 70, display: 'flex', alignItems: 'center' }}><img src={j.logo} alt={j.company} style={{ maxHeight: 64, maxWidth: 160, objectFit: 'contain' }} /></div>
					<div style={{ fontSize: 30, fontWeight: 900, lineHeight: 1.25 }}>{j.title}</div>
					<div style={{ fontSize: 22, fontWeight: 700 }}>{j.company}</div>
					<div style={{ marginTop: 'auto' }}><Label bg={colors.white} color={colors.dark}>{j.place}</Label></div>
				</Panel>
			</AnimatedGroup>)}
		</div>
		<AnimatedGroup delay={.55} style={{ marginTop: 30 }}>
			<Panel bg={colors.yellow}><div style={{ fontSize: 25, lineHeight: 1.5, fontWeight: 700 }}>点开 JD，先看三件事：每周写多少代码、同时对接几家客户、上线后谁负责维护。名称里有没有 FDE，反而不那么重要。</div></Panel>
		</AnimatedGroup>
		<div style={{ fontSize: 16, color: '#514c48', marginTop: 16 }}>来源：LinkedIn 职位搜索 · 墨尔本 · 2026-09</div>
	</DeckFrame>;
}
