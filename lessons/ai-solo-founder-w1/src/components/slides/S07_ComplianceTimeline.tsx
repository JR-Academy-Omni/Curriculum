import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { Body, SlideHead } from '../DeckTable';

// 「创业公司早知道」B1 · 什么时候需要什么 —— 来源：../../ai-solo-founder-bootcamp/public/outline.json
//   L01 [W0·Pre-work] …… + ABN 预备 + 创业身份采集
//   L26 [W7] 收到第一笔钱 / L27 [W7·自学] 收款与合规收尾：Stripe / Lemonsqueezy 深度配置 + 5 份法律文件挂上线
//   L45 [W13] 把钱从税务局拿回来（现场 ① Sole trader vs Pty Ltd 决策树）/ L46 [W13·自学] ABN / TFN / GST / BAS 实操
// 🚨 本页只讲「课程什么时候教什么」，不含任何法律 / 税务意见，不引任何法条。

const STAGES = [
	{
		when: '现在',
		tag: 'PRE-WORK',
		title: '把资料准备好',
		bg: '#FFF6D6',
		lines: [
			'课前 pre-work 已经让你做 **ABN 预备**（L01）——把要用的资料先收齐',
			'这一步是**准备**，不是让你现在就去注册什么',
		],
	},
	{
		when: 'W7',
		tag: '第 7 周 · 约 6 周后',
		title: '收到第一笔钱',
		bg: '#FFE9E4',
		lines: [
			'现场就是去卖（L26），过关物是**第一笔真实付款到账**',
			'配套自学 L27：**Stripe / Lemonsqueezy 深度配置 + 5 份法律文件挂上线**',
			'也就是说：**W7 你就需要一条能收款的通道**',
		],
	},
	{
		when: 'W13',
		tag: '第 13 周 · 约 3 个月后',
		title: '结构与税务才系统讲',
		bg: '#D9F2E4',
		lines: [
			'现场 L45 ⭐持牌 CPA：**Sole trader vs Pty Ltd 决策树** + PSI + RDTI',
			'自学 L46：**ABN / TFN / GST / BAS 实操**',
			'这是全课唯一系统讲结构与税务的一周',
		],
	},
];

function renderLine(s: string, i: number) {
	const parts = s.split('**');
	return (
		<li key={i} style={{ marginBottom: 6, lineHeight: 1.5 }}>
			<span style={{ color: colors.red, fontWeight: 800 }}>→ </span>
			{parts.map((p, j) => (j % 2 === 1 ? <b key={j}>{p}</b> : <span key={j}>{p}</span>))}
		</li>
	);
}

export default function S07_ComplianceTimeline() {
	return (
		<Slide bg={colors.white}>
			<Body style={{ padding: '36px 60px 30px' }}>
				<SlideHead
					tag="§1.5 · 创业公司早知道"
					tagBg={colors.blue}
					title="什么时候需要什么 —— 收钱在 W7，结构和税务在 W13"
					titleSize="clamp(26px, 2.4vw, 38px)"
					sub="先把课程自己的时间线摆出来，你才知道哪些事不能等课程。"
				/>

				{/* gap 32 是给中间那个 → 留的位置：箭头完整落在缝里，不会被下一张卡盖掉一半 */}
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32 }}>
					{STAGES.map((s, i) => (
						<motion.div
							key={s.when}
							initial={{ opacity: 0, y: 18 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: 0.12 + i * 0.14 }}
							style={{ border, boxShadow: shadowSm, background: s.bg, padding: '16px 18px', position: 'relative' }}
						>
							<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 1 }}>{s.tag}</div>
							<div style={{ display: 'flex', alignItems: 'baseline', gap: 10, margin: '4px 0 10px' }}>
								<span style={{ fontFamily: fonts.heading, fontSize: 40, fontWeight: 900, lineHeight: 1 }}>{s.when}</span>
								<span style={{ fontSize: 20, fontWeight: 800 }}>{s.title}</span>
							</div>
							<ul style={{ listStyle: 'none', fontSize: 17 }}>{s.lines.map(renderLine)}</ul>
							{i < STAGES.length - 1 ? (
								<div
									style={{
										position: 'absolute',
										right: -32,
										width: 32,
										textAlign: 'center',
										top: '50%',
										transform: 'translateY(-50%)',
										fontSize: 26,
										fontWeight: 900,
										zIndex: 2,
									}}
								>
									→
								</div>
							) : null}
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.6 }}
					style={{
						marginTop: 18,
						border,
						boxShadow: shadow,
						background: colors.dark,
						color: colors.white,
						padding: '16px 22px',
					}}
				>
					<div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: colors.yellow, marginBottom: 6 }}>
						⚠️ 这里有个 6 周的错位，现在就要跟你说清楚
					</div>
					<div style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.5 }}>
						<b style={{ background: colors.red, padding: '0 8px' }}>W7 就要收钱，但结构和税务要到 W13 才系统讲。</b>
						<span style={{ display: 'block', marginTop: 8, fontSize: 20, fontWeight: 600 }}>
							如果你打算在 W7 之前就去注册公司 / 做结构决定 —— <u>不要等这门课</u>，自己去找持牌 CPA 问。这门课的 W13 帮不到那个时间点的你。
						</span>
					</div>
				</motion.div>

				<div
					style={{
						marginTop: 12,
						padding: '9px 14px',
						background: '#f2f2f2',
						border: '2px solid #000',
						fontFamily: fonts.mono,
						fontSize: 13,
						lineHeight: 1.55,
						color: '#333',
					}}
				>
					本页只说明<b>课程什么时候讲什么</b>（出处：outline.json 的 L01 / L26 / L27 / L45 / L46）。
					<b>不是法律或税务建议</b> —— 具体怎么做请咨询持牌 CPA / 相关专业人士。
				</div>
			</Body>
		</Slide>
	);
}
