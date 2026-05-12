import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, colors, fonts, border, shadow } from '../ui';

const CRITERIA = [
	{ no: '01', title: '有公开雇主 JD', desc: '不是 LinkedIn 上的营销 title。每个岗位都能找到 OpenAI / Anthropic / 大企业的公开招聘页。' },
	{ no: '02', title: '有可验证薪资', desc: 'Levels.fyi、各国劳动统计局、公司公开 salary band；不引用模糊的"行业平均"。' },
	{ no: '03', title: '2023 年之前不存在', desc: '或者存在但 2023 年前的岗位描述和现在不是同一个东西（例：Prompt Engineer 2022 还在打 NLP 标签）。' },
];

export default function S03_WhyDifferent() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 32 }}
				>
					<Title size="64px">为什么这次盘点<span style={{ color: colors.red }}>不一样</span>？</Title>
					<p style={{ fontSize: 22, color: '#555', marginTop: 12 }}>
						市面上"10 大未来职业"清单一抓一大把 —— 我们做了三件他们没做的事。
					</p>
				</motion.div>
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{ visible: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } } }}
					style={{ width: '100%' }}
				>
					<Grid cols={3} gap={24}>
						{CRITERIA.map(c => (
							<motion.div
								key={c.no}
								variants={{
									hidden: { opacity: 0, y: 30, scale: 0.94 },
									visible: { opacity: 1, y: 0, scale: 1 },
								}}
								transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
								style={{
									border, background: colors.white, boxShadow: shadow,
									padding: 32, minHeight: 280,
								}}
							>
								<motion.div
									initial={{ scale: 0.3, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{ duration: 0.5, delay: 0.35 + CRITERIA.indexOf(c) * 0.18, type: 'spring', stiffness: 220, damping: 14 }}
									style={{
										fontFamily: fonts.mono, fontSize: 56, fontWeight: 700,
										color: colors.red, lineHeight: 1, marginBottom: 16,
									}}
								>{c.no}</motion.div>
								<div style={{ fontSize: 28, fontWeight: 900, marginBottom: 12 }}>{c.title}</div>
								<div style={{ fontSize: 17, lineHeight: 1.65, color: '#333' }}>{c.desc}</div>
							</motion.div>
						))}
					</Grid>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 1.1 }}
					style={{
						marginTop: 36, padding: '16px 24px', background: colors.dark, color: colors.yellow,
						fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, letterSpacing: 2, textAlign: 'center', width: '100%',
					}}
				>
					JR Academy 内部 18 个月持续追踪研究 · 数据截至 2026-05
				</motion.div>
			</Inner>
		</Slide>
	);
}
