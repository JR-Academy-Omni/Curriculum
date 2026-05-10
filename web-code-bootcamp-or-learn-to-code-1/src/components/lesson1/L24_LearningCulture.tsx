import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

const RULES = [
	{
		k: 'Code Review · 红线',
		c: colors.red,
		items: [
			'每个 PR 必须经过 tutor review 才合并',
			'Naming convention · Clean code · S.O.L.I.D 不达标 = 打回',
			'禁止 AI 一把梭后不读代码 · 必须能讲清每一行',
		],
	},
	{
		k: 'Tutor++ · 团队协作',
		c: colors.indigo,
		items: [
			'Tutor + TA Review 组合 · 每周固定 office hours',
			'Pair Programming · 高级学员带 junior',
			'Tutorial Tutor / Pioneer Tutor / Elite Tutor 三档晋升',
		],
	},
	{
		k: 'Communication · 不只是技术',
		c: colors.green,
		items: [
			'每节课后 30 min 复盘 + 提问',
			'群里问题 24h 内必有人回 · 不许"等"',
			'Communication = Not just Human · 也包括跟 AI 沟通',
		],
	},
	{
		k: 'AI Coding · 用法纪律',
		c: colors.orange,
		items: [
			'AI 是 partner 不是 ghostwriter · 你管 AI · 不能 AI 管你',
			'Vibe Coding 必须能解释每个 prompt 为什么这么写',
			'禁止把 AI 输出直接 commit 不读 · diff 一定要看完',
		],
	},
];

export default function L24_LearningCulture() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1500, padding: '32px 48px' }}>
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 22 }}
				>
					<div style={{
						display: 'inline-block', padding: '6px 14px',
						background: colors.red, color: colors.white,
						fontFamily: fonts.mono, fontSize: 17, fontWeight: 900, letterSpacing: 2,
						border, boxShadow: shadowSm, marginBottom: 12,
					}}>
						LEARNING CULTURE · 4 RULES
					</div>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 64, fontWeight: 900,
						letterSpacing: -2, lineHeight: 1, color: colors.black,
					}}>
						6 个月里我们 <span style={{ color: colors.red }}>共同遵守</span> 的 4 条文化
					</h2>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
					{RULES.map((r, i) => (
						<motion.div
							key={r.k}
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: 0.2 + i * 0.08 }}
							style={{
								background: colors.white, border, boxShadow: shadowSm,
								padding: '20px 22px', borderLeft: `10px solid ${r.c}`,
							}}
						>
							<div style={{
								fontFamily: fonts.heading, fontSize: 22, fontWeight: 900,
								color: colors.black, lineHeight: 1.15, letterSpacing: -0.4, marginBottom: 12,
							}}>
								{r.k}
							</div>
							<ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
								{r.items.map((it) => (
									<li key={it} style={{
										display: 'flex', alignItems: 'flex-start', gap: 10,
										fontFamily: fonts.body, fontSize: 18, color: '#333',
										fontWeight: 600, lineHeight: 1.5,
									}}>
										<span style={{ color: r.c, fontWeight: 900, fontSize: 18, lineHeight: 1, marginTop: -1, flexShrink: 0 }}>→</span>
										<span>{it}</span>
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.9 }}
					style={{
						marginTop: 18, padding: '14px 22px',
						background: colors.dark, color: colors.white,
						border, boxShadow: `6px 6px 0 ${colors.yellow}`,
						fontFamily: fonts.heading, fontSize: 20, fontWeight: 900,
						letterSpacing: -0.3, lineHeight: 1.4, textAlign: 'center',
					}}
				>
					不是"我教你" · 是 <span style={{ background: colors.yellow, color: colors.black, padding: '0 8px', border: `2px solid ${colors.black}` }}>我们 30 个人 + 18 个 tutor</span> 一起把 6 个月走完
				</motion.div>
			</div>
		</Slide>
	);
}
