import { DeckFrame, Panel, Label, AnimatedGroup, colors } from '../kit';

const cards = [
	{ logo: 'logos/openai.png', org: 'OpenAI · Sydney', role: 'Forward Deployed Engineer', req: '五年以上工程或技术部署经验，其中包含面向客户的工作', tag: '有经验的工程岗' },
	{ logo: 'logos/palantir.png', org: 'Palantir · 澳洲政府方向', role: 'FDSE 实习', req: '面向预计 2027 年毕业的候选人；要求编程能力；设有澳洲安全审查条件', tag: '有明确资格的实习' },
];

export default function S15_TwoEntrances() {
	return <DeckFrame tag="05 · 2027 年怎么入行" title="同在悉尼，两个完全不同的入口" subtitle="看机会时，先读清职级、申请条件和实际职责，再挑适合自己的入口。" accent={colors.purple}>
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
			{cards.map((c, i) => <AnimatedGroup key={c.org} delay={.15 + i * .15} style={{ display: 'flex' }}>
				<Panel style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><img src={c.logo} alt="" style={{ height: 52, maxWidth: 170, objectFit: 'contain' }} /><Label bg={i ? colors.yellow : colors.dark} color={i ? colors.dark : colors.white}>{c.tag}</Label></div>
					<div style={{ fontSize: 22, fontWeight: 700, color: '#514c48' }}>{c.org}</div>
					<div style={{ fontSize: 34, fontWeight: 900 }}>{c.role}</div>
					<div style={{ fontSize: 24, lineHeight: 1.5 }}>{c.req}</div>
				</Panel>
			</AnimatedGroup>)}
		</div>
		<AnimatedGroup delay={.5} style={{ marginTop: 28 }}>
			<Panel bg="#f4f1ec"><Label bg="#8a847c">澳洲常见的额外条件</Label><div style={{ fontSize: 22, lineHeight: 1.55, marginTop: 10 }}>政府和国防项目常要求公民身份或安全许可（如 NV1）；金融客户有监管和隐私法的要求。具体以各 JD 为准。</div></Panel>
		</AnimatedGroup>
	</DeckFrame>;
}
