import { motion } from 'framer-motion';
import { Slide, Inner, Title, colors, fonts, border, shadow } from '../ui';

const STAGES = [
	{
		tag: 'TRIGGER',
		title: 'Cron Job',
		detail: '每周一 9:00 AM\n自动触发',
		color: colors.indigo,
	},
	{
		tag: 'GENERATE',
		title: 'AI 写文案',
		detail: '按模板（hook +\n痛点 + CTA）\n一次生成 5 条',
		color: colors.techPurple,
	},
	{
		tag: 'VISUAL',
		title: 'AI 配图',
		detail: 'gpt-image-2 /\nMidjourney 按\n品牌色出图',
		color: colors.purple,
	},
	{
		tag: 'REVIEW',
		title: '推送给你审',
		detail: 'Notion / 飞书\n卡片 · 你点\n"确认 ✓"',
		color: colors.orange,
	},
	{
		tag: 'SCHEDULE',
		title: 'Buffer / Later',
		detail: '自动按最佳时段\nschedule 到\n小红书 / X',
		color: colors.green,
	},
];

export default function Z03_Step2_Templated() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 28, width: '100%' }}
				>
					<div style={{
						display: 'inline-block', padding: '6px 14px', background: colors.indigo,
						color: colors.white, fontFamily: fonts.mono, fontSize: 12,
						fontWeight: 700, letterSpacing: 2, marginBottom: 14,
					}}>STEP 2 · 模板化自动化</div>
					<Title size="58px">
						AI 帮你<span style={{ color: colors.indigo }}>执行</span>，
						你只做<span style={{ color: colors.red }}>决策</span>
					</Title>
					<p style={{ fontSize: 19, color: '#555', marginTop: 10, maxWidth: 1100 }}>
						一次配置，每周自动跑。你的工作从"写文案"变成"审文案"。
					</p>
				</motion.div>

				{/* Pipeline */}
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{ visible: { transition: { staggerChildren: 0.14, delayChildren: 0.3 } } }}
					style={{
						width: '100%', display: 'flex', alignItems: 'stretch',
						gap: 8, marginBottom: 32,
					}}
				>
					{STAGES.map((stage, i) => (
						<div key={stage.tag} style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 0 }}>
							<motion.div
								variants={{
									hidden: { opacity: 0, y: 28, scale: 0.9 },
									visible: { opacity: 1, y: 0, scale: 1 },
								}}
								transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
								style={{
									flex: 1, background: colors.white, border, boxShadow: shadow,
									padding: '20px 14px', textAlign: 'center', minHeight: 220,
									display: 'flex', flexDirection: 'column',
								}}
							>
								<div style={{
									display: 'inline-block', alignSelf: 'center',
									padding: '4px 10px', background: stage.color,
									color: colors.white, fontFamily: fonts.mono,
									fontSize: 10, fontWeight: 700, letterSpacing: 1.5,
									marginBottom: 14,
								}}>{stage.tag}</div>
								<div style={{
									fontSize: 19, fontWeight: 900, marginBottom: 10,
									color: colors.black,
								}}>{stage.title}</div>
								<div style={{
									fontSize: 13, color: '#444', whiteSpace: 'pre-line',
									lineHeight: 1.5, fontFamily: fonts.mono,
								}}>
									{stage.detail}
								</div>
								<div style={{
									marginTop: 'auto', paddingTop: 12,
									fontFamily: fonts.mono, fontSize: 24, fontWeight: 700,
									color: stage.color,
								}}>0{i + 1}</div>
							</motion.div>
							{i < STAGES.length - 1 && (
								<motion.div
									variants={{
										hidden: { opacity: 0, scale: 0.5 },
										visible: { opacity: 1, scale: 1 },
									}}
									transition={{ duration: 0.3 }}
									style={{
										fontFamily: fonts.mono, fontSize: 28, fontWeight: 700,
										color: colors.black, padding: '0 2px', flexShrink: 0,
									}}
								>→</motion.div>
							)}
						</div>
					))}
				</motion.div>

				{/* Bottom comparison band */}
				<motion.div
					initial={{ opacity: 0, y: 18 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 1.4 }}
					style={{
						width: '100%', display: 'flex', gap: 0,
						border, boxShadow: shadow,
					}}
				>
					<div style={{
						flex: 1, padding: '20px 24px', background: '#fee2e2',
						borderRight: `3px solid ${colors.black}`,
					}}>
						<div style={{
							fontFamily: fonts.mono, fontSize: 11, color: colors.red,
							letterSpacing: 2, marginBottom: 6, fontWeight: 700,
						}}>BEFORE · Step 1</div>
						<div style={{ fontSize: 22, fontWeight: 900, color: colors.black }}>
							2 分钟 × 5 条 = 10 分钟<span style={{ fontSize: 14, color: '#666', fontWeight: 500 }}> · 你写、你发、你重复</span>
						</div>
					</div>
					<div style={{
						flex: 1, padding: '20px 24px', background: '#dcfce7',
					}}>
						<div style={{
							fontFamily: fonts.mono, fontSize: 11, color: '#16a34a',
							letterSpacing: 2, marginBottom: 6, fontWeight: 700,
						}}>NOW · Step 2</div>
						<div style={{ fontSize: 22, fontWeight: 900, color: colors.black }}>
							0 写作时间 + 5 分钟审稿<span style={{ fontSize: 14, color: '#666', fontWeight: 500 }}> · AI 执行 · 你决策</span>
						</div>
					</div>
				</motion.div>
			</Inner>
		</Slide>
	);
}
