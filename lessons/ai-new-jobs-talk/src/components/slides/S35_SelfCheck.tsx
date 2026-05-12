import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, assetPath, colors, fonts, border, shadow } from '../ui';

const STEPS = [
	{
		no: '01',
		q: '你现在的岗位<br />在 78 个岗位里吗？',
		action: '访问 /career-impact-map · 搜你的 title',
	},
	{
		no: '02',
		q: '它的 AI 风险评级<br />是 High / Medium / Low？',
		action: '看 riskLevel 字段 · 同时看 growthPotential',
	},
	{
		no: '03',
		q: '它对应的<br />transitionRole 是哪个？',
		action: '页面给了你转型目标 + 学习路径建议',
	},
];

export default function S35_SelfCheck() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 36, width: '100%' }}
				>
					<div style={{
						display: 'inline-block', padding: '6px 14px', background: colors.red,
						color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 12,
					}}>CHAPTER 5 · 现在轮到你了</div>
					<Title size="60px">三问自检 · <span style={{ color: colors.red }}>你站在哪里</span>？</Title>
				</motion.div>
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{ visible: { transition: { staggerChildren: 0.18, delayChildren: 0.25 } } }}
					style={{ width: '100%', marginBottom: 28 }}
				>
					<Grid cols={3} gap={24}>
						{STEPS.map((s, idx) => (
							<motion.div
								key={s.no}
								variants={{
									hidden: { opacity: 0, y: 30, scale: 0.94 },
									visible: { opacity: 1, y: 0, scale: 1 },
								}}
								transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
								style={{
									background: colors.white, border, boxShadow: shadow,
									padding: 32, minHeight: 280,
								}}
							>
								<motion.div
									initial={{ scale: 0.3, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{ duration: 0.5, delay: 0.4 + idx * 0.18, type: 'spring', stiffness: 220, damping: 14 }}
									style={{
										fontFamily: fonts.mono, fontSize: 64, fontWeight: 700,
										color: colors.red, lineHeight: 1, marginBottom: 20,
									}}
								>{s.no}</motion.div>
								<div
									style={{ fontSize: 24, fontWeight: 900, lineHeight: 1.3, marginBottom: 24 }}
									dangerouslySetInnerHTML={{ __html: s.q }}
								/>
								<div style={{
									padding: '12px 16px', background: colors.dark, color: colors.yellow,
									fontFamily: fonts.mono, fontSize: 13, lineHeight: 1.5,
								}}>→ {s.action}</div>
							</motion.div>
						))}
					</Grid>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.92, y: 20 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 1.1, type: 'spring', stiffness: 200, damping: 14 }}
					style={{
						padding: '20px 28px', background: colors.black, color: colors.white, width: '100%',
						display: 'flex', justifyContent: 'space-between', alignItems: 'center',
					}}
				>
					<div>
						<div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.yellow, letterSpacing: 2, marginBottom: 4 }}>SCAN / VISIT</div>
						<div style={{ fontSize: 22, fontWeight: 700 }}>jiangren.com.au/career-impact-map</div>
					</div>
					<motion.div
						initial={{ scale: 0, rotate: -10 }}
						animate={{ scale: 1, rotate: 0 }}
						transition={{ duration: 0.5, delay: 1.4, type: 'spring', stiffness: 250, damping: 14 }}
						style={{
							width: 100, height: 100, background: colors.warmBg, border: '3px solid #000',
							boxShadow: '4px 4px 0 rgba(255,222,89,0.6)', overflow: 'hidden',
						}}
					>
						<img
							src={assetPath('images/diagnostic/hero-telescope.png')}
							alt="看清你的位置"
							style={{ width: '100%', height: '100%', objectFit: 'cover' }}
						/>
					</motion.div>
				</motion.div>
			</Inner>
		</Slide>
	);
}
