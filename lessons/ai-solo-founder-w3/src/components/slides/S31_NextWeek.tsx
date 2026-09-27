import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline, SourceNote } from '../DeckTable';

// CH7 · 下周预告 —— W5 立起你的品牌门面
// ⚠️ 本期 W3/W4 已对调（W4 于 08-16 先上）。按 cohort-01/STATE.md 排期，W3 之后是 W5（08-30）。
// ⚠️ W4 那节已经把品牌规范 / logo / 网页讲过一轮，W5 的具体切入点待 Lightman 确认（见 README 未决项 4）。
const NEXT = [
	'把今天定下来的形态和价格，变成客户能看懂的一句话',
	'品牌那一套：名字、颜色、字体、口气，一次定死',
	'一个能发出去的网页 —— 别人点开就知道你卖什么、多少钱',
	'W4 已经动过手的同学：这次是把它对齐到今天的裁决结果',
];

export default function S31_NextWeek() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="§8 · 下周"
					tagBg={colors.purple}
					title="下周：让客户找得到你、看得懂你"
					sub="今天你把「值不值得做」算清楚了。下周把它立到外面去，让不认识你的人也能看明白。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 22 }}>
					<div style={{ background: colors.white, border, boxShadow: shadow, padding: '20px 22px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 1.5, color: '#888', marginBottom: 14 }}>
							下周现场会做这几件事
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
							{NEXT.map((n, i) => (
								<div key={n} style={{ display: 'flex', gap: 11, alignItems: 'flex-start' }}>
									<span
										style={{
											fontFamily: fonts.mono,
											fontSize: 13,
											fontWeight: 700,
											background: colors.black,
											color: colors.white,
											padding: '2px 8px',
											marginTop: 2,
											flexShrink: 0,
										}}
									>
										{i + 1}
									</span>
									<span style={{ fontSize: 16.5, lineHeight: 1.45 }}>{n}</span>
								</div>
							))}
						</div>
					</div>

					<div style={{ background: colors.dark, border, boxShadow: shadow, padding: '20px 22px', color: colors.white }}>
						<div style={{ fontFamily: fonts.heading, fontSize: 22, fontWeight: 900, color: colors.yellow, marginBottom: 12 }}>来之前先准备好</div>
						<div style={{ fontSize: 16.5, lineHeight: 1.6 }}>
							<div style={{ marginBottom: 10 }}>
								<b>· 那份写完的一页报告</b>
								<br />
								<span style={{ color: '#b9c2cc' }}>下周所有的对外文案，都从它生出来</span>
							</div>
							<div style={{ marginBottom: 10 }}>
								<b>· 你的形态、价格、那一句话</b>
								<br />
								<span style={{ color: '#b9c2cc' }}>没定下来的，下周做出来的东西全要返工</span>
							</div>
							<div>
								<b>· 三个你觉得好看的同行页面</b>
								<br />
								<span style={{ color: '#b9c2cc' }}>存截图，说得出你到底喜欢它哪一点</span>
							</div>
						</div>
					</div>
				</div>

				<Punchline bg={colors.red}>
					提醒：<u>今天写「换」的同学，下周之前要把方向重新锁一遍。</u>拿着旧方向去做品牌和网页，做完就得推倒重来。
				</Punchline>

				<SourceNote>
					排期来源：<b>cohort-01/STATE.md</b>（本期 W3 与 W4 对调，W4 已于 08-16 先上；W3 之后为 W5「立起你的品牌门面」）；主题来源 <b>COURSE_REDESIGN.md</b> W5 条目。
					<b style={{ fontFamily: fonts.body, marginLeft: 6 }}>⚠️ W4 那节已提前讲过品牌与网页，W5 的具体切入点以讲师课前公布为准。</b>
				</SourceNote>
			</Body>
		</Slide>
	);
}
