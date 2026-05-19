import { motion } from 'framer-motion';
import { Slide, Inner, Title, colors, fonts, border, shadow } from '../ui';

interface Option {
	step: string;
	desc: string;
	detail: string;
	color: string;
}

const OPTIONS: Option[] = [
	{
		step: 'Step 1',
		desc: '我还在 手动用 AI',
		detail: '需要的时候打开 ChatGPT 写一段，复制粘贴用',
		color: '#999',
	},
	{
		step: 'Step 2',
		desc: '我用 模板 把重复任务自动化了',
		detail: '会写 prompt 模板 · 知道用 Notion AI / 飞书 AI',
		color: colors.indigo,
	},
	{
		step: 'Step 3',
		desc: '我会用 N8N / Make / Zapier 串多个工具',
		detail: '能跨平台编排 · 跑过自己的小自动化',
		color: colors.techPurple,
	},
	{
		step: 'Step 4',
		desc: '我能 设计 + 监控 完整业务 pipeline',
		detail: '会拆解业务 · 选合适架构 · 让 AI 进化',
		color: colors.red,
	},
];

export default function Z07_YourPosition() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				{/* Header — big question */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 28, width: '100%' }}
				>
					<div style={{
						display: 'inline-block', padding: '6px 14px', background: colors.red,
						color: colors.white, fontFamily: fonts.mono, fontSize: 12,
						fontWeight: 700, letterSpacing: 2, marginBottom: 14,
					}}>SELF CHECK · 现在轮到你</div>
					<Title size="68px">
						你现在卡在<span style={{ color: colors.red }}> 第几步</span>？
					</Title>
					<p style={{ fontSize: 19, color: '#555', marginTop: 10, maxWidth: 1100 }}>
						诚实选一个 —— 这决定了你下一步该学什么、跳哪一档。
					</p>
				</motion.div>

				{/* Self-check options */}
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{ visible: { transition: { staggerChildren: 0.14, delayChildren: 0.3 } } }}
					style={{
						width: '100%', display: 'flex', flexDirection: 'column', gap: 14,
						marginBottom: 28,
					}}
				>
					{OPTIONS.map((opt) => (
						<motion.div
							key={opt.step}
							variants={{
								hidden: { opacity: 0, x: -30 },
								visible: { opacity: 1, x: 0 },
							}}
							transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
							style={{
								display: 'flex', alignItems: 'center', gap: 22,
								background: colors.white, border, boxShadow: shadow,
								padding: '18px 24px',
							}}
						>
							{/* Radio dot */}
							<div style={{
								flexShrink: 0,
								width: 32, height: 32, borderRadius: '50%',
								border: `3px solid ${colors.black}`,
								background: colors.white,
								display: 'flex', alignItems: 'center', justifyContent: 'center',
							}}>
								<motion.div
									initial={{ scale: 0 }}
									animate={{ scale: 0 }}
									whileHover={{ scale: 1 }}
									style={{
										width: 14, height: 14, borderRadius: '50%',
										background: opt.color,
									}}
								/>
							</div>

							{/* Step tag */}
							<div style={{
								flexShrink: 0, padding: '6px 12px', background: opt.color,
								color: colors.white, fontFamily: fonts.mono, fontSize: 12,
								fontWeight: 700, letterSpacing: 2, minWidth: 80, textAlign: 'center',
							}}>{opt.step.toUpperCase()}</div>

							{/* Description */}
							<div style={{ flex: 1, minWidth: 0 }}>
								<div style={{
									fontSize: 22, fontWeight: 900, color: colors.black,
									lineHeight: 1.3, marginBottom: 4,
								}}>{opt.desc}</div>
								<div style={{
									fontFamily: fonts.mono, fontSize: 13, color: '#666',
								}}>{opt.detail}</div>
							</div>

							{/* Pointer */}
							<div style={{
								flexShrink: 0,
								fontFamily: fonts.mono, fontSize: 24, fontWeight: 700,
								color: opt.color,
							}}>↗</div>
						</motion.div>
					))}
				</motion.div>

				{/* Bottom CTA */}
				<motion.div
					initial={{ opacity: 0, scale: 0.92, y: 16 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					transition={{ duration: 0.55, delay: 1.3, type: 'spring', stiffness: 200, damping: 14 }}
					style={{
						width: '100%', padding: '22px 28px', background: colors.black,
						color: colors.white, display: 'flex', alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<div>
						<div style={{
							fontFamily: fonts.mono, fontSize: 12, color: colors.yellow,
							letterSpacing: 2, marginBottom: 6, fontWeight: 700,
						}}>下一节</div>
						<div style={{
							fontFamily: fonts.heading, fontSize: 26, fontWeight: 900,
							color: colors.white, letterSpacing: -0.5,
						}}>
							告诉你：从<span style={{ color: colors.yellow }}> 你现在的位置</span>，往上走一步要学什么
						</div>
					</div>
					<motion.div
						animate={{ x: [0, 8, 0] }}
						transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
						style={{
							fontFamily: fonts.mono, fontSize: 40, fontWeight: 700,
							color: colors.yellow,
						}}
					>→</motion.div>
				</motion.div>
			</Inner>
		</Slide>
	);
}
