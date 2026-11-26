import { DeckFrame, Panel, AnimatedGroup, colors } from '../kit';

const starts = [
	{ k: 'A', who: '已经做软件开发或数据工程', how: '下一个项目里，争取参与需求讨论，自己负责一个功能从设计到上线，再跟进使用反馈。', gain: '一段既有技术取舍、又和使用方一起解决问题的经历' },
	{ k: 'B', who: '来自产品、BA、实施或技术咨询', how: '从熟悉的业务里选一个具体环节，亲手做成可试用的工具：接一个数据源，写一个接口，部署一个版本，处理一轮真实反馈。', gain: '看清业务经验能用在哪，工程上还缺什么' },
	{ k: 'C', who: '还在读书或刚毕业', how: '关注符合资格的 FDE、FDSE 实习和应届岗位；选项目时，看有没有机会写代码、接触真实用户、参与测试和上线。', gain: '一段能讲清「谁在用」的项目经历' },
];

export default function S16_ThreeStarts() {
	return <DeckFrame tag="05 · 2027 年怎么入行" title="按你刚才打的字母，下一段经历这样补" accent={colors.purple}>
		<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 8 }}>
			{starts.map((s, i) => <AnimatedGroup key={s.k} delay={.15 + i * .12} style={{ display: 'flex' }}>
				<Panel bg={i === 1 ? colors.yellow : colors.white} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
					<div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}><span style={{ fontSize: 64, fontWeight: 900, color: colors.red, lineHeight: 1 }}>{s.k}</span><span style={{ fontSize: 25, fontWeight: 900, lineHeight: 1.3 }}>{s.who}</span></div>
					<div style={{ fontSize: 22, lineHeight: 1.55 }}>{s.how}</div>
					<div style={{ marginTop: 'auto', background: colors.dark, color: colors.white, borderRadius: 14, padding: '12px 16px', fontSize: 20, lineHeight: 1.45, fontWeight: 700 }}>你会得到：{s.gain}</div>
				</Panel>
			</AnimatedGroup>)}
		</div>
	</DeckFrame>;
}
