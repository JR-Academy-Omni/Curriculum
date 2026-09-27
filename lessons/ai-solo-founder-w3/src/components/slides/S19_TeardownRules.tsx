import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline, SourceNote } from '../DeckTable';

// CH4 · outline L09 step ④ LIVE —— 现场拆 3-4 个学员 idea（Stan 主刀）
const LAYERS = [
	{
		n: '第一层',
		h: '赚钱算式',
		c: colors.blue,
		qs: ['一单多少钱？', '一个月几单？', '这些单从哪来？', '扣掉你自己的时间还剩多少？'],
	},
	{
		n: '第二层',
		h: '形态',
		c: colors.orange,
		qs: ['客户买的是工具还是结果？', '为什么是这个形态不是另一个？', '你的定价对得上这个形态吗？'],
	},
	{
		n: '第三层',
		h: '结构性风险',
		c: colors.red,
		qs: ['什么情况下这门生意会死？', '这件事是你能解开的吗？', '如果解不开，你打算怎么绕？'],
	},
];

export default function S19_TeardownRules() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="§5 · 现场拆 · 35 min"
					tagBg={colors.red}
					title="上台 3 分钟，然后被追问到只剩骨头"
					sub="今天最难受也最值钱的一段。被问倒不丢人——在这里被问倒，总好过在客户面前被问倒。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 0.85fr) minmax(0, 2fr)', gap: 20 }}>
					{/* 左：上台的人怎么讲 */}
					<div style={{ background: colors.dark, border, boxShadow: shadow, padding: '18px 20px', color: colors.white, minWidth: 0 }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.yellow, letterSpacing: 1.5, marginBottom: 12 }}>
							上台的人 · 3 分钟只讲三句
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
							{[
								{ k: '我要卖给谁', v: '具体到一类人，不是「中小企业」' },
								{ k: '我卖什么、收多少钱', v: '一句话说完形态和价格' },
								{ k: '我凭什么觉得有人买', v: '拿证据说话，L2 以上的' },
							].map((x, i) => (
								<div key={x.k}>
									<div style={{ fontSize: 18, fontWeight: 800, color: colors.yellow }}>
										{i + 1} · {x.k}
									</div>
									<div style={{ fontSize: 15, color: '#b9c2cc', marginTop: 3, lineHeight: 1.45 }}>{x.v}</div>
								</div>
							))}
						</div>
						<div style={{ marginTop: 16, paddingTop: 14, borderTop: '2px solid #55606d', fontSize: 15, lineHeight: 1.5, color: '#c8d0d8' }}>
							<b style={{ color: colors.red }}>不要做的：</b>讲情怀、讲行业前景、讲你花了多少心血。
							<b style={{ color: colors.white }}>那三分钟只够讲事实。</b>
						</div>
					</div>

					{/* 右：三层追问 */}
					<div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 0 }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 1.5, color: '#888' }}>
							然后是三层追问 —— 每一层答不上来，就停在那一层
						</div>
						{LAYERS.map((l, i) => (
							<motion.div
								key={l.n}
								initial={{ opacity: 0, x: 18 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.35, delay: 0.2 + i * 0.14 }}
								style={{ background: colors.white, border, boxShadow: shadow, display: 'grid', gridTemplateColumns: '150px minmax(0, 1fr)' }}
							>
								<div
									style={{
										background: l.c,
										color: colors.white,
										padding: '14px 16px',
										borderRight: '3px solid #000',
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'center',
									}}
								>
									<div style={{ fontFamily: fonts.mono, fontSize: 12.5, letterSpacing: 1, opacity: 0.9 }}>{l.n}</div>
									<div style={{ fontFamily: fonts.heading, fontSize: 23, fontWeight: 900 }}>{l.h}</div>
								</div>
								<div style={{ padding: '12px 16px', display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', minWidth: 0 }}>
									{l.qs.map((q) => (
										<span key={q} style={{ fontSize: 15.5, border: '2px solid #000', background: '#fdf5ee', padding: '5px 11px' }}>
											{q}
										</span>
									))}
								</div>
							</motion.div>
						))}
					</div>
				</div>

				<Punchline bg={colors.dark}>
					<b style={{ color: colors.yellow }}>台下的人不许走神。</b>
					<u>同样这十几个问题，等一下会原封不动地问到你的 idea 上。</u>下一页就是你的答题卡。
				</Punchline>

				<SourceNote>
					来源：<b>outline.json · L09 step ④</b>「抽 3-4 个学员上台讲 3 分钟 idea，Stan 按赚钱算式 / 形态 / 结构性风险三层连续追问」。
					各层的具体问题为本 deck 按该三层结构展开。
				</SourceNote>
			</Body>
		</Slide>
	);
}
