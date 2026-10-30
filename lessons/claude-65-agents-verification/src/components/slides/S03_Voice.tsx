import { DeckFrame, AnimatedGroup, Panel, Label, colors, fonts } from '../deck';
import { muted, Takeaway } from '../lesson';

// 左侧按 2026-10-11 语音对话记录的意思改写（讲师要求），不是逐字原话
export default function S03_Voice() {
	const rules = ['方向：国家十五五规划支持，年均增长 ≥10%', '数据源：中央、部委、赛迪、官方媒体', '不采信：自媒体、股吧、雪球', '挑公司看五项：主营、前三、技术、供需、替代进口', 'AI 只做事实匹配，判断权留给人'];
	return (
		<DeckFrame tag="01 · 先画图，再让 AI 动手" title="一开始，我只是说了一段话" subtitle="我不会写程序。我做的第一件事，是对着手机说清楚：我想怎样挑一家好公司来投资。" accent={colors.blue}>
			<div style={{ display: 'flex', flexDirection: 'column', gap: 18, height: '100%' }}>
			<div style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 30, flex: 1, minHeight: 0 }}>
				<AnimatedGroup delay={.15} style={{ display: 'flex' }}><Panel style={{ flex: 1 }}>
					<Label bg={colors.blue} color={colors.dark}>10 月 11 日 · 我最初说的想法</Label>
					<div style={{ fontSize: 23, lineHeight: 1.65, marginTop: 20, color: muted }}>
						「我想找到值得投资的好公司。先看大环境：国家往哪些方向使劲，我们就去那些方向里找。AI 的任务是帮我搜，从政府各部门、官方媒体这些地方，找出未来几年每年能增长 10% 以上的行业。然后在这些行业里挑公司，看五件事：主营业务在不在这个行业里，是不是行业前三，技术是不是领先，产品是不是供不应求，能不能替代进口产品。这些资料全部交给 AI 去收集，你能做到吗？」
					</div>
				</Panel></AnimatedGroup>
				<AnimatedGroup delay={.3} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
					<Panel bg={colors.dark} style={{ flex: 1, color: colors.white }}>
						<Label bg={colors.yellow} color={colors.dark}>AI 整理成的规则</Label>
						<div style={{ display: 'grid', gap: 14, marginTop: 20 }}>
							{rules.map((r, i) => <div key={r} style={{ fontSize: 22, fontWeight: 700, paddingBottom: 10, borderBottom: `3px solid ${[colors.red, colors.blue, colors.green, colors.yellow, colors.purple][i]}` }}>{r}</div>)}
						</div>
					</Panel>
					<div style={{ fontFamily: fonts.body, fontSize: 19, color: muted }}>AI 还顺手纠正了一处口误：「赛维信创」应为「赛迪」。</div>
				</AnimatedGroup>
			</div>
			<div><Takeaway>先说出来，让 AI 把话整理成条目</Takeaway></div>
			</div>
		</DeckFrame>
	);
}
