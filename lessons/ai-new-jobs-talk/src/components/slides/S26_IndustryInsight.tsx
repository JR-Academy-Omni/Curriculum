import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, colors, fonts, border, shadowSm } from '../ui';

const INSIGHTS = [
	{
		icon: '🏥',
		label: '医生 / 临床',
		old: '看病、诊断、写病历',
		now: 'Healthcare AI Integrator',
		bridge: '不离开医院 → 学 AI 工作流和合规',
	},
	{
		icon: '🏦',
		label: '银行家 / 风控',
		old: '审贷、反洗钱、做模型',
		now: 'AI Compliance Expert',
		bridge: '不离开银行 → 学 EU AI Act / MAS / DORA',
	},
	{
		icon: '🌾',
		label: '农艺师 / 农场',
		old: '田间管理、产量优化',
		now: 'Digital Agronomist',
		bridge: '不离开农业 → 学 IoT 传感 + 精准农业 AI',
	},
	{
		icon: '🎓',
		label: '教师 / 教培',
		old: '设计课程、考核',
		now: 'AI Education Designer',
		bridge: '不离开教育 → 学 自适应辅导 + AI 评估',
	},
	{
		icon: '🔍',
		label: 'SEO / 内容',
		old: '关键词 / 反向链接',
		now: 'GEO Specialist',
		bridge: '不离开营销 → 学 Schema / Entity / LLM 搜索',
	},
];

export default function S26_IndustryInsight() {
	return (
		<Slide bg={colors.industryBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 28, width: '100%' }}
				>
					<div style={{
						display: 'inline-block', padding: '6px 14px', background: colors.industryCyan,
						color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 12,
					}}>CHAPTER 3 · 关键洞察</div>
					<Title size="48px">行业垂直岗的 <span style={{ color: colors.industryCyan }}>"原地升级"</span> 法则</Title>
					<p style={{ fontSize: 18, color: '#444', marginTop: 8 }}>
						不必转去硅谷 / 不必从头学工程 —— 在你原本的行业里，AI 给你一个升级口。
					</p>
				</motion.div>
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{ visible: { transition: { staggerChildren: 0.13, delayChildren: 0.3 } } }}
					style={{ width: '100%' }}
				>
					<Grid cols={5} gap={14}>
						{INSIGHTS.map((i, idx) => (
							<motion.div
								key={i.label}
								variants={{
									hidden: { opacity: 0, y: 24, scale: 0.94 },
									visible: { opacity: 1, y: 0, scale: 1 },
								}}
								transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
								style={{
									background: colors.white, border, boxShadow: shadowSm,
									padding: 16, minHeight: 340, display: 'flex', flexDirection: 'column',
								}}
							>
								<motion.div
									initial={{ scale: 0, rotate: -12 }}
									animate={{ scale: 1, rotate: 0 }}
									transition={{ duration: 0.5, delay: 0.45 + idx * 0.13, type: 'spring', stiffness: 280, damping: 14 }}
									style={{ fontSize: 40, marginBottom: 8 }}
								>{i.icon}</motion.div>
								<div style={{ fontSize: 16, fontWeight: 900, marginBottom: 12, lineHeight: 1.2 }}>{i.label}</div>
								<div style={{ fontFamily: fonts.mono, fontSize: 10, color: '#888', letterSpacing: 1, marginBottom: 4 }}>从</div>
								<div style={{ fontSize: 13, color: '#444', marginBottom: 10, lineHeight: 1.4 }}>{i.old}</div>
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.3, delay: 0.6 + idx * 0.13 }}
									style={{ fontFamily: fonts.mono, fontSize: 10, color: colors.industryCyan, letterSpacing: 1, marginBottom: 4 }}
								>到 ↓</motion.div>
								<motion.div
									initial={{ opacity: 0, y: 8 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.4, delay: 0.7 + idx * 0.13 }}
									style={{ fontSize: 14, fontWeight: 700, color: colors.industryCyan, marginBottom: 12, lineHeight: 1.3 }}
								>{i.now}</motion.div>
								<div style={{
									marginTop: 'auto', padding: 8, background: colors.dark, color: colors.yellow,
									fontSize: 11, lineHeight: 1.4,
								}}>{i.bridge}</div>
							</motion.div>
						))}
					</Grid>
				</motion.div>
			</Inner>
		</Slide>
	);
}
