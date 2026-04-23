import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, colors, fonts, border, shadow } from '../ui';

const dailyUses = [
	{ tool: 'ChatGPT', action: '写邮件' },
	{ tool: 'Claude', action: '改 PPT' },
	{ tool: 'Cursor', action: '补全代码' },
	{ tool: 'Midjourney', action: '出图' },
	{ tool: 'Perplexity', action: '查资料' },
];

const realQuestions = [
	'你独立做出过 RAG 问答系统吗？',
	'接过 MCP 到自己的业务工具吗？',
	'训过一个 LoRA 模型吗？',
	'debug 过 Multi-Agent 死循环吗？',
];

export default function S03_PainCold() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				{/* 左侧：日常用法 */}
				<Half>
					<motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
						<Title size="52px">
							你是这样<br />
							<span style={{ display: 'inline-block', background: colors.yellow, padding: '0 14px', border: `3px solid ${colors.black}`, boxShadow: `5px 5px 0 ${colors.black}`, transform: 'rotate(-1deg)', marginTop: 6 }}>
								用 AI 的吗？
							</span>
						</Title>
					</motion.div>

					<div style={{ marginTop: 32 }}>
						{dailyUses.map((item, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.2 + i * 0.08 }}
								style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14, fontSize: '20px', fontWeight: 700 }}
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
						// 大部分人的 AI 使用清单，到这里就停了
					</motion.div>
				</Half>

				{/* 右侧：真正的问题 */}
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
							但是 —
						</div>

						<h3 style={{ fontFamily: fonts.heading, fontSize: '34px', fontWeight: 900, color: colors.white, lineHeight: 1.25, marginBottom: 24, letterSpacing: -0.5 }}>
							当 JD 写着<br />
							<span style={{ color: colors.yellow }}>"AI Engineer"</span>，它真正在问：
						</h3>

						<div>
							{realQuestions.map((q, i) => (
								<motion.div
									key={i}
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.5 + i * 0.1 }}
									style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12, fontSize: '18px', color: colors.white, lineHeight: 1.5 }}
								>
									<span style={{ color: colors.red, fontSize: 20, fontWeight: 900, flexShrink: 0, marginTop: -2 }}>❌</span>
									<span style={{ fontWeight: 600 }}>{q}</span>
								</motion.div>
							))}
						</div>
					</motion.div>
				</Half>
			</Inner>

			{/* 底部结论条 */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.0 }}
				style={{ position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%) rotate(-0.5deg)', background: colors.red, border, boxShadow: `6px 6px 0 ${colors.black}`, padding: '12px 28px', maxWidth: '85%' }}
			>
				<p style={{ fontFamily: fonts.heading, fontSize: '24px', fontWeight: 900, color: colors.yellow, lineHeight: 1.3, textAlign: 'center', letterSpacing: -0.5 }}>
					会用 AI ≠ 会做 AI 产品。前者是<span style={{ color: colors.white }}>消费者</span>，后者才是 <span style={{ background: colors.yellow, color: colors.black, padding: '0 8px' }}>AI Engineer</span>
				</p>
			</motion.div>
		</Slide>
	);
}
