import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, colors, fonts, border, shadow } from '../ui';

const aiDailyUse = [
	{ tool: 'ChatGPT', action: '抄作业' },
	{ tool: 'Cursor', action: 'Tab 自动补全' },
	{ tool: 'v0', action: '生成一个 Landing' },
	{ tool: 'Lovable', action: '做个 Demo' },
	{ tool: 'Copilot', action: '写一段函数' },
];

const realJdQuestions = [
	'你能独立搭一个前后端联调的 Production 项目吗？',
	'你用过 AI 做 RAG/Agent 产品吗？',
	'你写过 CLAUDE.md / Cursor Rules 给团队用吗？',
	'你把 AI 产品部署到 AWS / Azure 上过吗？',
];

export default function S03_PainCold() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half>
					<motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
						<Title size="clamp(30px,4vw,52px)">
							你会这样<br />
							<span style={{ display: 'inline-block', background: colors.yellow, padding: '0 14px', border: `3px solid ${colors.black}`, boxShadow: `5px 5px 0 ${colors.black}`, transform: 'rotate(-1deg)', marginTop: 6 }}>
								"用 AI 写代码"
							</span>
						</Title>
					</motion.div>

					<div style={{ marginTop: 32 }}>
						{aiDailyUse.map((item, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.2 + i * 0.08 }}
								style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14, fontSize: 'clamp(15px,1.7vw,20px)', fontWeight: 700 }}
							>
								<span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, padding: '4px 10px', background: colors.white, border: `2px solid ${colors.black}`, minWidth: 120, textAlign: 'center' }}>
									{item.tool}
								</span>
								<span style={{ color: colors.red, fontWeight: 900 }}>→</span>
								<span style={{ color: '#333' }}>{item.action}</span>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.8 }}
						style={{ marginTop: 20, fontSize: 14, color: '#888', fontFamily: fonts.mono, fontStyle: 'italic' }}
					>
						// 大多数"AI 编程速成班"教到这就打住了
					</motion.div>
				</Half>

				<Half>
					<motion.div
						initial={{ opacity: 0, x: 40 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.3, duration: 0.5 }}
						style={{
							background: colors.dark,
							border,
							boxShadow: shadow,
							padding: '32px 28px',
							transform: 'rotate(1deg)',
						}}
					>
						<div style={{ display: 'inline-block', padding: '6px 14px', background: colors.red, color: colors.white, fontFamily: fonts.mono, fontWeight: 800, fontSize: 14, border: `2px solid ${colors.black}`, marginBottom: 20 }}>
							但招聘方真正在问：
						</div>

						<h3 style={{ fontFamily: fonts.heading, fontSize: 'clamp(22px,2.8vw,34px)', fontWeight: 900, color: colors.white, lineHeight: 1.25, marginBottom: 24, letterSpacing: -0.5 }}>
							当 JD 写着<br />
							<span style={{ color: colors.yellow }}>"Full-Stack Developer (AI)"</span>
						</h3>

						<div>
							{realJdQuestions.map((q, i) => (
								<motion.div
									key={i}
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.5 + i * 0.1 }}
									style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12, fontSize: 'clamp(14px,1.6vw,18px)', color: colors.white, lineHeight: 1.5 }}
								>
									<span style={{ color: colors.red, fontSize: 20, fontWeight: 900, flexShrink: 0, marginTop: -2 }}>❌</span>
									<span style={{ fontWeight: 600 }}>{q}</span>
								</motion.div>
							))}
						</div>
					</motion.div>
				</Half>
			</Inner>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.0 }}
				style={{ position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%) rotate(-0.5deg)', background: colors.red, border, boxShadow: `6px 6px 0 ${colors.black}`, padding: '12px 28px', maxWidth: '85%' }}
			>
				<p style={{ fontFamily: fonts.heading, fontSize: 'clamp(16px,2vw,24px)', fontWeight: 900, color: colors.yellow, lineHeight: 1.3, textAlign: 'center', letterSpacing: -0.5 }}>
					让 AI 写代码 ≠ 能把 AI 产品交付上线。前者是 <span style={{ color: colors.white }}>使用者</span>，后者才是 <span style={{ background: colors.yellow, color: colors.black, padding: '0 8px' }}>Full-Stack + AI Engineer</span>
				</p>
			</motion.div>
		</Slide>
	);
}
