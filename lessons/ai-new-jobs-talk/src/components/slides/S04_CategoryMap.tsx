import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, CountUp, colors, fonts, border, shadow } from '../ui';

const CATEGORIES = [
	{
		key: 'tech',
		label: '技术岗',
		labelEn: 'Technical',
		count: 15,
		bg: colors.techBg,
		dot: colors.techPurple,
		examples: ['AI Engineer', 'FDE', 'AI Agent Developer', 'Vibe Coder', 'Robotics AI', 'Synthetic Data Eng', '+9 个'],
	},
	{
		key: 'gov',
		label: '治理管理岗',
		labelEn: 'Governance',
		count: 6,
		bg: colors.govBg,
		dot: colors.govOrange,
		examples: ['AI Adoption Specialist', 'AI PM', 'AI Ethics Officer', '+3 个'],
	},
	{
		key: 'industry',
		label: '行业垂直岗',
		labelEn: 'Industry',
		count: 5,
		bg: colors.industryBg,
		dot: colors.industryCyan,
		examples: ['GEO Specialist', 'AI Finance Compliance', 'AI Sales Engineer', '+2 个'],
	},
];

export default function S04_CategoryMap() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 32, textAlign: 'center', width: '100%' }}
				>
					<Title size="64px">26 个新岗位 · <span style={{ color: colors.red }}>3 大分类</span></Title>
					<p style={{ fontSize: 22, color: '#555', marginTop: 12 }}>
						60 分钟内我们会过完这 26 个新岗位 + 5 个正在消失的岗位 + 一个 AI Adoption 实战案例。
					</p>
				</motion.div>
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{ visible: { transition: { staggerChildren: 0.18, delayChildren: 0.25 } } }}
					style={{ width: '100%' }}
				>
					<Grid cols={3} gap={24}>
						{CATEGORIES.map((c, idx) => (
							<motion.div
								key={c.key}
								variants={{
									hidden: { opacity: 0, y: 40, scale: 0.92 },
									visible: { opacity: 1, y: 0, scale: 1 },
								}}
								transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
								style={{
									border, background: c.bg, boxShadow: shadow,
									padding: 32, minHeight: 360,
								}}
							>
								<div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
									<motion.div
										initial={{ scale: 0 }}
										animate={{ scale: 1 }}
										transition={{ duration: 0.4, delay: 0.4 + idx * 0.18, type: 'spring', stiffness: 300, damping: 14 }}
										style={{ width: 18, height: 18, background: c.dot, border: `2px solid ${colors.black}` }}
									/>
									<span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: '#444', letterSpacing: 2 }}>
										{c.labelEn.toUpperCase()}
									</span>
								</div>
								<div style={{ fontSize: 36, fontWeight: 900, marginBottom: 8 }}>{c.label}</div>
								<motion.div
									initial={{ scale: 0.3, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{ duration: 0.5, delay: 0.5 + idx * 0.18, type: 'spring', stiffness: 200, damping: 12 }}
									style={{
										fontFamily: fonts.mono, fontSize: 88, fontWeight: 700, color: c.dot,
										lineHeight: 1, marginBottom: 20,
									}}
								>
									<CountUp value={c.count} duration={1.2} />
									<span style={{ fontSize: 32, color: '#666', marginLeft: 8 }}>个</span>
								</motion.div>
								<div style={{ fontSize: 15, color: '#333', lineHeight: 1.8 }}>
									{c.examples.map((ex, i) => (
										<motion.div
											key={i}
											initial={{ opacity: 0, x: -10 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ duration: 0.3, delay: 0.85 + idx * 0.18 + i * 0.06 }}
										>· {ex}</motion.div>
									))}
								</div>
							</motion.div>
						))}
					</Grid>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 20, scale: 0.95 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					transition={{ duration: 0.5, delay: 1.5, type: 'spring', stiffness: 200, damping: 14 }}
					style={{ marginTop: 32, textAlign: 'center', width: '100%' }}
				>
					<span style={{
						display: 'inline-block', padding: '12px 24px', background: colors.dark, color: colors.white,
						fontSize: 18, fontWeight: 700,
					}}>
						先聊一聊 <span style={{ color: colors.yellow }}>正在消失的岗位</span> · 才看得懂出现的
					</span>
				</motion.div>
			</Inner>
		</Slide>
	);
}
