import { DeckFrame, Panel, Label, NumberBadge, AnimatedGroup, colors } from '../kit';

const qs = ['谁在用它？', '你亲手解决了什么？', '上线之后，你怎么知道它做得好不好？'];
const poll = [['A', '开发／数据'], ['B', 'BA／产品／咨询'], ['C', '在读／应届']];

export default function S02_ThreeQuestions() {
	return <DeckFrame tag="开场" title="拿你做过的一个项目，回答三个问题" subtitle="这三个问题，串起了 FDE 每天最核心的工作。">
		<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
			{qs.map((q, i) => <AnimatedGroup key={q} delay={.15 + i * .1} style={{ display: 'flex' }}>
				<Panel bg={i === 2 ? colors.yellow : colors.white} style={{ flex: 1, minHeight: 210 }}>
					<NumberBadge bg={i === 2 ? colors.white : colors.yellow}>{i + 1}</NumberBadge>
					<div style={{ fontSize: 36, fontWeight: 900, lineHeight: 1.3, marginTop: 22 }}>{q}</div>
				</Panel>
			</AnimatedGroup>)}
		</div>
		<AnimatedGroup delay={.5} style={{ marginTop: 34 }}>
			<Panel bg={colors.dark} style={{ color: colors.white, display: 'grid', gridTemplateColumns: '1fr 2.4fr', gap: 24, alignItems: 'center' }}>
				<div><Label bg={colors.yellow} color={colors.dark}>在聊天区打一个字母</Label><div style={{ fontSize: 26, fontWeight: 800, marginTop: 14 }}>你现在是哪种背景？</div></div>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
					{poll.map(([k, v]) => <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'rgba(255,255,255,.08)', borderRadius: 16, padding: '14px 18px' }}>
						<span style={{ fontSize: 40, fontWeight: 900, color: colors.yellow }}>{k}</span><span style={{ fontSize: 24, fontWeight: 700 }}>{v}</span>
					</div>)}
				</div>
			</Panel>
		</AnimatedGroup>
	</DeckFrame>;
}
