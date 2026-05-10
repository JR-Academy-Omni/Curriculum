import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

const fit = [
	{ icon: '🎓', title: 'IT / CS 在校生', desc: '学校只教理论，想补齐工程 + AI 能力，毕业直接拿 offer' },
	{ icon: '👨‍🎓', title: 'IT 应届毕业生', desc: '投了简历没回音，需要真实项目 + AI 差异化做求职背书' },
	{ icon: '🔄', title: '有编程基础的转码者', desc: '写过 Java / Python，想补完整前后端 + AI 工程链路' },
	{ icon: '🌏', title: '国内有经验的开发者', desc: '想用 AI 技能 + 澳洲项目案例打进本地市场' },
];

const notFit = [
	{ title: '完全零基础 / 非技术背景', desc: '请先走 AI Programming（Cursor AI 编程实战课）或 AI 必修课，打完基础再来' },
	{ title: '只想"学点 AI 写 Prompt"', desc: '/learn/prompt-master 免费学习中心足够了' },
	{ title: '想研究 LLM 底层 / 算法科学家', desc: '请走 AI Engineer Bootcamp 深度工程班' },
];

export default function S21_WhoFor() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1400, padding: '28px 28px', display: 'flex', flexDirection: 'column' }}>
				<motion.div
					initial={{ opacity: 0, y: -16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 22 }}
				>
					<div style={{ display: 'inline-block', padding: '5px 14px', background: colors.dark, color: colors.yellow, fontFamily: fonts.mono, fontSize: 15, fontWeight: 900, letterSpacing: 2, border, boxShadow: shadowSm, marginBottom: 12 }}>
						WHO IS THIS FOR
					</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: '52px', fontWeight: 900, lineHeight: 1.1, letterSpacing: -1.5, margin: 0 }}>
						谁适合来学第 30 期？
					</h2>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 18 }}>
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2 }}
					>
						<div style={{ display: 'inline-block', padding: '4px 10px', background: colors.teal, color: colors.white, fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, marginBottom: 12, letterSpacing: 1 }}>
							✓ 非常适合
						</div>
						<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
							{fit.map((f, i) => (
								<motion.div
									key={f.title}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.3 + i * 0.08 }}
									style={{ background: colors.white, border, boxShadow: shadow, padding: '14px 16px' }}
								>
									<div style={{ fontSize: 26, marginBottom: 6 }}>{f.icon}</div>
									<div style={{ fontFamily: fonts.heading, fontSize: '18px', fontWeight: 900, color: colors.black, letterSpacing: -0.3, marginBottom: 4 }}>
										{f.title}
									</div>
									<div style={{ fontFamily: fonts.body, fontSize: 15, color: '#555', fontWeight: 500, lineHeight: 1.4 }}>
										{f.desc}
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.3 }}
					>
						<div style={{ display: 'inline-block', padding: '4px 10px', background: '#999', color: colors.white, fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, marginBottom: 12, letterSpacing: 1 }}>
							△ 先走别的路径
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
							{notFit.map((n, i) => (
								<motion.div
									key={n.title}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.4 + i * 0.08 }}
									style={{ background: '#f5f5f5', border, boxShadow: shadowSm, padding: '12px 14px' }}
								>
									<div style={{ fontFamily: fonts.heading, fontSize: '19px', fontWeight: 800, color: '#333', letterSpacing: -0.2, marginBottom: 4 }}>
										{n.title}
									</div>
									<div style={{ fontFamily: fonts.body, fontSize: 14, color: '#666', fontWeight: 500, lineHeight: 1.4 }}>
										{n.desc}
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</Slide>
	);
}
