import { motion } from 'framer-motion';
import { Slide, Inner, Title, colors, fonts, border, shadow } from '../ui';

const OUTSIDE = [
	{ tag: 'JD', text: 'Figure AI / Tesla Optimus 等公司 careers 页公开招 Robotics-AI' },
	{ tag: 'JD', text: 'OpenAI / Anthropic / Cohere / Databricks 都在大规模招 AI Sales Engineer' },
	{ tag: '$$', text: 'Levelsio 等单人开发者公开 $1M+ ARR · Vibe Coder 模式被验证' },
	{ tag: 'Money', text: 'Scale AI 2024 被 Meta 注资 $14.3B · Synthetic Data 团队扩招' },
];

const INSIDE_CN = [
	{ icon: '❌', text: '中文搜索几乎搜不到系统盘点' },
	{ icon: '❌', text: '招聘平台还没新建对应类目' },
	{ icon: '❌', text: '培训机构没出对应课程' },
	{ icon: '✅', text: '所以 —— 你比 99% 中文世界的人早一年看到' },
];

export default function S33_WhyMissing() {
	return (
		<Slide bg="#fef9d9">
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 24, width: '100%' }}
				>
					<div style={{
						display: 'inline-block', padding: '6px 14px', background: colors.black,
						color: colors.yellow, fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 12,
					}}>CHAPTER 4 · 为什么单独讲</div>
					<Title size="50px">
						为什么这 4 个 <span style={{ background: colors.yellow, padding: '0 12px' }}>我特意拎出来</span>？
					</Title>
				</motion.div>

				<div style={{ display: 'flex', gap: 24, width: '100%', flex: 1 }}>
					<motion.div
						initial={{ opacity: 0, x: -24 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
						style={{ flex: 1, background: colors.white, border, boxShadow: shadow, padding: 28 }}
					>
						<div style={{
							fontFamily: fonts.mono, fontSize: 13, color: colors.red, letterSpacing: 2, marginBottom: 8,
						}}>SIGNAL OUTSIDE · 海外信号已经很强</div>
						<div style={{ fontSize: 24, fontWeight: 900, marginBottom: 18, color: colors.dark }}>
							雇主 / 资本 / 收入都在说"它来了"
						</div>
						<motion.div
							initial="hidden"
							animate="visible"
							variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } } }}
						>
							{OUTSIDE.map(item => (
								<motion.div
									key={item.text}
									variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } }}
									transition={{ duration: 0.35 }}
									style={{ display: 'flex', gap: 10, marginBottom: 14, alignItems: 'flex-start' }}
								>
									<span style={{
										padding: '3px 8px', background: colors.red, color: colors.white,
										fontFamily: fonts.mono, fontSize: 10, fontWeight: 700, flexShrink: 0,
										minWidth: 50, textAlign: 'center',
									}}>{item.tag}</span>
									<span style={{ fontSize: 14, lineHeight: 1.55, color: '#222' }}>{item.text}</span>
								</motion.div>
							))}
						</motion.div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 24 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
						style={{ flex: 1, background: colors.dark, border, boxShadow: shadow, padding: 28 }}
					>
						<div style={{
							fontFamily: fonts.mono, fontSize: 13, color: colors.yellow, letterSpacing: 2, marginBottom: 8,
						}}>SILENCE INSIDE · 中文圈还很安静</div>
						<div style={{ fontSize: 24, fontWeight: 900, marginBottom: 18, color: colors.white }}>
							这就是<span style={{ color: colors.yellow }}>信息差红利</span>
						</div>
						<motion.div
							initial="hidden"
							animate="visible"
							variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.7 } } }}
						>
							{INSIDE_CN.map(item => (
								<motion.div
									key={item.text}
									variants={{ hidden: { opacity: 0, x: 12 }, visible: { opacity: 1, x: 0 } }}
									transition={{ duration: 0.35 }}
									style={{ display: 'flex', gap: 12, marginBottom: 14, alignItems: 'flex-start' }}
								>
									<span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
									<span style={{ fontSize: 14, lineHeight: 1.55, color: 'rgba(255,255,255,0.92)' }}>{item.text}</span>
								</motion.div>
							))}
						</motion.div>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 1.4 }}
					style={{
						marginTop: 20, padding: '16px 24px', background: colors.black, color: colors.white,
						width: '100%', textAlign: 'center',
					}}
				>
					<span style={{ fontSize: 20, fontWeight: 700, letterSpacing: 0.5 }}>
						23 个岗位中文圈已经卷起来了 · 这 4 个 ——
					</span>
					<span style={{ fontSize: 22, color: colors.yellow, fontWeight: 900, marginLeft: 10 }}>
						现在进去就是早期玩家
					</span>
				</motion.div>
			</Inner>
		</Slide>
	);
}
