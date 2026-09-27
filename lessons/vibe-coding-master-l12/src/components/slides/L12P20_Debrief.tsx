import { ActBadge, Page, Head, colors, fonts, border, shadowSm } from '../deck';

// P20 · 讲评：你挂在哪个时点
// 🔴 明写「不判规矩好坏」，并说理由 —— 一判好坏，整个框架当场退化成
//    「老师觉得哪些规矩值得挂」，学员回去就不用了（蓝图 §9.3）。
export default function L12P20_Debrief() {
	return (
		<Page>
			<ActBadge act={5} mode="互动" />
			<Head>讲评规则</Head>

			<div style={{ flex: 1, display: 'flex', gap: 26, minHeight: 0 }}>
				<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
					<div style={{ border, background: colors.white, boxShadow: shadowSm, padding: '22px 26px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 14, letterSpacing: 2, color: colors.teal, marginBottom: 14 }}>
							我只问两个问题
						</div>
						{['你挂在哪个时点、为什么', '你的 matcher 宽了会怎样'].map((q, i) => (
							<div key={q} style={{ display: 'flex', gap: 13, alignItems: 'center', marginBottom: i === 0 ? 12 : 0 }}>
								<span style={{
									fontFamily: fonts.heading, fontSize: 30, fontWeight: 900, color: colors.teal, lineHeight: 1,
								}}>
									{i + 1}
								</span>
								<span style={{ fontSize: 25, fontWeight: 700 }}>{q}</span>
							</div>
						))}
					</div>

					<div style={{
						border: `4px solid ${colors.red}`, background: 'rgba(255,87,87,0.07)',
						padding: '22px 26px', flex: 1,
					}}>
						<div style={{
							fontFamily: fonts.heading, fontSize: 32, fontWeight: 900, color: colors.red, marginBottom: 14, lineHeight: 1.25,
						}}>
							我不评价你那条规矩
							<br />
							该不该挂。
						</div>
						<div style={{ fontSize: 20, lineHeight: 1.65, color: '#444' }}>
							一判好坏，这整个框架当场就退化成「老师觉得哪些规矩值得挂」，
							<b>你回去就不用了。</b>
						</div>
					</div>
				</div>

				<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 14, letterSpacing: 2, color: '#888' }}>
						最该被听见的两类人
					</div>
					{[
						{
							who: '时点选了 Stop 的',
							why: '他多半在做 L6 铁律的兑现 —— 让它测试不过就没法说完成。全班该听见。',
							hot: false,
						},
						{
							who: '判据写不成一行 if 的',
							why: '让他说一句「我这条为什么写不出来」。他撞到的正是今天的收口，而且他没糊弄自己。',
							hot: true,
						},
					].map((p) => (
						<div key={p.who} style={{
							border: p.hot ? `4px solid ${colors.black}` : border,
							background: p.hot ? colors.yellow : colors.white,
							boxShadow: shadowSm, padding: '20px 24px', flex: 1,
							display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12,
						}}>
							<div style={{ fontSize: 27, fontWeight: 900, lineHeight: 1.3 }}>
								{p.hot && <span style={{ color: colors.red }}>⭐ </span>}{p.who}
							</div>
							<div style={{ fontSize: 19, lineHeight: 1.6, color: p.hot ? '#333' : '#555' }}>{p.why}</div>
						</div>
					))}
				</div>
			</div>
		</Page>
	);
}
