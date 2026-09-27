import { DeckFrame, Panel, Label, AnimatedGroup, colors, fonts } from '../deck';

export default function S03_ColdStart() {
	return <DeckFrame tag="00–08 MIN · COLD START" title="如果今晚开始投递，你会怎么介绍自己？" accent={colors.yellow}>
		<AnimatedGroup delay={.16} style={{ display: 'flex', height: '100%' }}>
			<Panel style={{ flex: 1, padding: '28px 34px 30px', display: 'grid', gridTemplateRows: 'auto 1fr auto', gap: 22, boxShadow: `12px 12px 0 ${colors.yellow}` }}>
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
					<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 25 }}>投递前，先写下两句能被追问的话</div>
					<Label bg={colors.dark}>2-MINUTE CHECK</Label>
				</div>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 88px 1fr', alignItems: 'stretch', gap: 18 }}>
					<div style={{ border: `2px solid ${colors.dark}`, borderRadius: 18, background: '#e9f6ff', padding: '26px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
						<Label bg={colors.blue}>01 · ROLE</Label>
						<div style={{ fontFamily: fonts.heading, fontSize: 38, fontWeight: 900, lineHeight: 1.22, marginTop: 24 }}>你准备搜索什么岗位名称？</div>
						<div style={{ fontSize: 21, color: '#3f4a59', lineHeight: 1.45, marginTop: 19 }}>Applied AI、Agent、FDE、Platform / Eval，岗位不同，能力叙事也不同。</div>
					</div>
					<div style={{ display: 'grid', placeItems: 'center' }}>
						<div style={{ width: 62, height: 62, borderRadius: '50%', background: colors.yellow, border: `2px solid ${colors.dark}`, display: 'grid', placeItems: 'center', fontSize: 31, fontWeight: 900 }}>→</div>
					</div>
					<div style={{ border: `2px solid ${colors.dark}`, borderRadius: 18, background: colors.dark, color: colors.white, padding: '26px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
						<Label bg={colors.yellow} color={colors.black}>02 · EVIDENCE</Label>
						<div style={{ fontFamily: fonts.heading, fontSize: 38, fontWeight: 900, lineHeight: 1.22, marginTop: 24 }}>你拿什么工程证据证明能力？</div>
						<div style={{ fontSize: 21, color: '#dfe5f2', lineHeight: 1.45, marginTop: 19 }}>架构决策、评估结果、失败诊断和上线边界，比“做过 chatbot”更可信。</div>
					</div>
				</div>
				<div style={{ borderTop: `2px solid ${colors.dark}`, paddingTop: 18, display: 'flex', justifyContent: 'center', fontSize: 23, fontWeight: 900 }}>
					<span>岗位名称决定你强调什么</span><span style={{ color: colors.red, margin: '0 18px' }}>×</span><span>项目证据决定别人是否相信</span>
				</div>
			</Panel>
		</AnimatedGroup>
	</DeckFrame>;
}
