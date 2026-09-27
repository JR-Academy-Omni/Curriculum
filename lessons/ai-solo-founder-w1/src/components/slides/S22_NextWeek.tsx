import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const TASKS = [
	['5', '位目标用户', '问最近一次真实经历，不推销你的方案'],
	['3', '个真实案例', '记录场景、现有做法、时间和损失'],
	['3', '种现有替代', '包括软件、人工、外包和“不处理”'],
	['$', '一条付费证据', '过去花过什么、谁管预算、是否愿意试点或付费'],
];

export default function S22_NextWeek() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead tag="本周验证 Sprint" tagBg={colors.green} title="带着 SoT 去找证据，再把证据带回 AI OS" sub="不要只问“你会买吗”。优先问过去怎么处理、已经花过什么，再提出具体试用或报价。" />
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 15 }}>
					{TASKS.map(([value, title, body]) => <div key={title} style={{ border, boxShadow: shadow, background: colors.warmBg, padding: '21px 18px', minHeight: 230 }}><div style={{ fontFamily: fonts.heading, fontSize: 54, lineHeight: 1, fontWeight: 950, color: colors.red }}>{value}</div><div style={{ marginTop: 9, fontSize: 22, fontWeight: 900 }}>{title}</div><div style={{ marginTop: 13, borderTop: '2px solid #111', paddingTop: 11, fontSize: 16, lineHeight: 1.45 }}>{body}</div></div>)}
				</div>
				<Punchline bg={colors.dark}>下周带回：<span style={{ color: colors.yellow }}>证据记录、更新后的 SoT、同一任务重跑后的结果，以及继续 / 修改 / 停止的决定。</span></Punchline>
			</Body>
		</Slide>
	);
}
