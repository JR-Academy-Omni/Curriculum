import { DeckFrame, Panel, Label, AnimatedGroup, colors } from '../kit';

const items = [
	['美国 10 月的数据', '经济不好又成了美国裁员的第一原因；10 月因为 AI 被裁的人，是今年最少的一个月。'],
	['澳洲央行怎么看', 'AI 还没有让大批人失业，但最容易被 AI 做掉的那些工作，已经开始变了。'],
	['借 AI 的名义', '有的公司其实是在降成本、转外包，对外却说成「因为 AI」。'],
];

export default function C05_NotAllAI() {
	return <DeckFrame tag="01 · AI 和裁员" title="但不是每一刀，都该算在 AI 头上" subtitle="看裁员新闻，先分清：是 AI 真的做了这份工作，还是 AI 成了理由。">
		<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
			{items.map(([k, d], i) => <AnimatedGroup key={k} delay={.15 + i * .1} style={{ display: 'flex' }}>
				<Panel style={{ flex: 1 }}><Label>{k}</Label><div style={{ fontSize: 25, lineHeight: 1.5, marginTop: 16 }}>{d}</div></Panel>
			</AnimatedGroup>)}
		</div>
		<AnimatedGroup delay={.5} style={{ marginTop: 32 }}>
			<Panel bg={colors.yellow} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
				<div><Label>被替掉的</Label><div style={{ fontSize: 28, fontWeight: 900, lineHeight: 1.35, marginTop: 12 }}>重复、流程固定的环节</div></div>
				<div><Label bg={colors.red}>缺人的</Label><div style={{ fontSize: 28, fontWeight: 900, lineHeight: 1.35, marginTop: 12 }}>能把 AI 真正落进业务的岗位</div></div>
			</Panel>
		</AnimatedGroup>
		<div style={{ fontSize: 16, color: '#514c48', marginTop: 16 }}>来源：Challenger, Gray & Christmas 2026 年 10 月报告；Insurance Journal（2026-11-12）</div>
	</DeckFrame>;
}
