import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

// ⚠️ 本期 W3 / W4 排期对调：本周上 W4，下周上 W3「这是不是一门好生意 · Prove the Business」
const NEXT = [
	'先审证据：每个数字都要能指回来源，没有来源的写 unavailable',
	'算两套贡献：收入减可变现金成本 vs 再扣掉你自己的时间',
	'自下而上算市场：从可触达名单推，不用宏观 TAM 糊弄自己',
	'同伴压力测试：你的赚钱算式被别人逐条挑一遍',
	'裁决：continue / revise / stop —— 白纸黑字写下来',
];

export default function S24_NextWeek() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="§6 · 下周"
					tagBg={colors.purple}
					title="下周：这到底是不是一门好生意"
					sub="今天我们把东西做出来了。下周我们冷静地算一算，它到底值不值得做下去。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 22 }}>
					<div style={{ background: colors.white, border, boxShadow: shadow, padding: '20px 22px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 1.5, color: '#888', marginBottom: 14 }}>
							下周现场会做这五件事
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
						<div style={{ fontFamily: fonts.heading, fontSize: 22, fontWeight: 900, color: colors.yellow, marginBottom: 12 }}>
							来之前先准备好
						</div>
						<div style={{ fontSize: 16.5, lineHeight: 1.6 }}>
							<div style={{ marginBottom: 10 }}>
								<b>· 你手上所有的真实数字</b>
								<br />
								<span style={{ color: '#b9c2cc' }}>报过的价、成交过的单、问过的客户、竞品页面截图</span>
							</div>
							<div style={{ marginBottom: 10 }}>
								<b>· 你每周能投入的真实小时数</b>
								<br />
								<span style={{ color: '#b9c2cc' }}>写实际的，不是理想的</span>
							</div>
							<div>
								<b>· 一个你最怕被问的问题</b>
								<br />
								<span style={{ color: '#b9c2cc' }}>下周就是拿来问的地方</span>
							</div>
						</div>
					</div>
				</div>

				<Punchline bg={colors.red}>
					顺序提醒：<u>本期 W3 和 W4 调了个个儿。</u>今天先做出来，下周再验证它值不值得做——所以这周做的东西，下周可能被自己否掉，那是好事。
				</Punchline>
			</Body>
		</Slide>
	);
}
