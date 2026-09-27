import { Slide, colors, fonts } from '../ui';
import { Body, SlideHead, DeckTable, Punchline } from '../DeckTable';

const T = (s: string) => <span style={{ fontFamily: fonts.mono, fontWeight: 700 }}>{s}</span>;

export default function S04_TodayRundown() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="180 分钟怎么走"
					tagBg={colors.green}
					title="三段动手 + 一段中场交流 + 一段验收"
					sub="全程带着电脑。今天没有一段是只听不做的。"
				/>
				<DeckTable
					fontSize={19}
					cellPad="11px 15px"
					cols={[
						{ label: '时段', w: '160px' },
						{ label: '环节', w: '1.25fr' },
						{ label: '当场产出', w: '1.35fr' },
					]}
					rowBg={[undefined, undefined, undefined, undefined, '#FFF6D6', '#f2f2f2', undefined, undefined, undefined]}
					rows={[
						[T('14:00–14:10'), '开场：上周收口 → 今天的过关线', '把 SoT 打开，说清一个卡点'],
						[T('14:10–14:30'), '① 四条 agent 路线现场选型', '每人定一条主线并写下理由'],
						[T('14:30–14:55'), '② 装上 + 接权限', 'agent 读得到你真实的数据源'],
						[T('14:55–15:20'), '③ 写 agent 的工作说明书', '一份能存进 memory 的 JD'],
						[<b>{T('15:20–15:50')}</b>, <b>Founder Exchange · 中场交流 + 首次组队</b>, <b>一条有效反馈 + 一个 3–4 人小组 + 组内契约</b>],
						[T('15:50–16:00'), '休息', '—'],
						[T('16:00–16:35'), '④ Agent Schedule 工作坊 · 案例 ①②③', '竞品监控 / SEO 周报 / 财务月报配通'],
						[T('16:35–16:50'), '⑤ 案例 ④⑤ + 跨平台定时机制对照', '选定一条关机也能跑的排程通道'],
						[T('16:50–17:00'), '⑥ 验收 + 失败模式 + 本周作业', '给自己最可能踩的两个坑加兜底'],
					]}
				/>
				<Punchline bg={colors.dark}>
					中场那 30 分钟<span style={{ color: colors.yellow }}>老师不讲，你们讲</span>——今天还要在那一段里把组建起来。
				</Punchline>
			</Body>
		</Slide>
	);
}
