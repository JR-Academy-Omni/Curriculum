import { DeckFrame, AnimatedGroup, Label, colors, fonts } from '../deck';

const groups = [
	{
		code: '01 · UNDERSTAND',
		title: '输入与智能',
		note: '系统理解谁、什么任务，以及依据什么回答',
		accent: colors.blue,
		items: [
			['01', 'Product', colors.yellow],
			['02', 'Model', colors.green],
			['03', 'Context', colors.blue],
			['04', 'Knowledge / RAG', colors.purple],
		],
	},
	{
		code: '02 · ACT',
		title: '执行与状态',
		note: '系统如何行动、暂停、恢复并记住必要信息',
		accent: colors.orange,
		items: [
			['05', 'Tools / MCP', colors.orange],
			['06', 'Agent', colors.red],
			['07', 'Memory', colors.blue],
		],
	},
	{
		code: '03 · CONTROL',
		title: '控制与证据',
		note: '系统怎样限制风险、证明质量并决定是否发布',
		accent: colors.green,
		items: [
			['08', 'Harness', colors.yellow],
			['09', 'Evaluation', colors.green],
			['10', 'Governance', colors.purple],
		],
	},
] as const;

export default function S05_SystemMap() {
	return <DeckFrame
		tag="AI ENGINEERING SYSTEM MAP"
		title="十层能力共同决定系统能否发布"
		subtitle="模型只是其中一层。三组能力必须共同工作，最后才能做 Release Decision。"
		accent={colors.purple}
		titleSize={54}
	>
		<AnimatedGroup delay={.1} style={{ height: '100%', display: 'flex' }}>
			<div style={{
				flex: 1,
				display: 'grid',
				gridTemplateColumns: '1fr 225px',
				gap: 22,
				padding: 22,
				background: 'rgba(255,255,255,.94)',
				border: `2px solid ${colors.dark}`,
				borderRadius: 24,
				boxShadow: `12px 12px 0 ${colors.yellow}`,
			}}>
				<div style={{ display: 'grid', gridTemplateRows: 'repeat(3,1fr)', gap: 14 }}>
					{groups.map((group, groupIndex) => <AnimatedGroup key={group.code} delay={.16 + groupIndex * .12}>
						<div style={{ height: '100%', display: 'grid', gridTemplateColumns: '210px 1fr', border: `2px solid ${colors.dark}`, borderRadius: 16, overflow: 'hidden', background: '#fff' }}>
							<div style={{ padding: '15px 17px', background: `${group.accent}28`, borderRight: `2px solid ${colors.dark}`, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, color: '#5c5860' }}>{group.code}</div>
								<div style={{ fontFamily: fonts.heading, fontSize: 25, fontWeight: 900, marginTop: 6 }}>{group.title}</div>
								<div style={{ fontSize: 14, lineHeight: 1.3, color: '#5b5750', marginTop: 5 }}>{group.note}</div>
							</div>
							<div style={{ display: 'grid', gridTemplateColumns: `repeat(${group.items.length},1fr)`, gap: 10, alignItems: 'stretch', padding: 10 }}>
								{group.items.map(item => <div key={item[1]} style={{ background: item[2], borderRadius: 11, padding: '11px 12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minWidth: 0 }}>
									<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 900 }}>{item[0]}</span>
									<span style={{ fontSize: group.items.length === 4 ? 17 : 20, fontWeight: 900, lineHeight: 1.08 }}>{item[1]}</span>
								</div>)}
							</div>
						</div>
					</AnimatedGroup>)}
				</div>
				<div style={{ display: 'grid', gridTemplateRows: 'auto 1fr auto', alignItems: 'center', gap: 16 }}>
					<Label bg={colors.dark}>GO / NO-GO</Label>
					<div style={{ position: 'relative', height: '100%', display: 'grid', placeItems: 'center' }}>
						<div aria-hidden style={{ position: 'absolute', left: -23, top: '50%', width: 44, height: 44, marginTop: -22, borderRadius: '50%', background: colors.yellow, border: `2px solid ${colors.dark}`, display: 'grid', placeItems: 'center', fontSize: 24, fontWeight: 900 }}>→</div>
						<div style={{ width: '100%', height: '100%', minHeight: 250, background: colors.dark, color: colors.white, borderRadius: 19, padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'center', boxShadow: `8px 8px 0 ${colors.green}` }}>
							<span style={{ fontFamily: fonts.mono, color: colors.yellow, fontSize: 14, fontWeight: 900 }}>SYSTEM OUTPUT</span>
							<strong style={{ fontFamily: fonts.heading, fontSize: 33, lineHeight: 1.05, marginTop: 18 }}>Release<br/>Decision</strong>
							<span style={{ fontSize: 17, lineHeight: 1.4, color: '#dfe5f2', marginTop: 20 }}>不是“Demo 能跑”，而是有证据地决定发布、限制或停止。</span>
						</div>
					</div>
					<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 900, textAlign: 'center' }}>QUALITY · RISK · VALUE</div>
				</div>
			</div>
		</AnimatedGroup>
	</DeckFrame>;
}
