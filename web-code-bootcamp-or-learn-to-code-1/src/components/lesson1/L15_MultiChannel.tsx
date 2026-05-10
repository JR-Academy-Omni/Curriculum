import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

const CHANNELS = [
	{ k: '直播课', v: '37 节 · 老师讲 + 现场演示 + Q&A', icon: '🎤', color: colors.indigo },
	{ k: '录播视频', v: '77 节 · 工具演示 / 案例拆解 / 操作步骤', icon: '🎬', color: colors.blue },
	{ k: '互动 Lab', v: '80 个 · 浏览器内做练习 + 即时验证', icon: '🧪', color: colors.green },
	{ k: 'AI Tutor Quest', v: '12 个 · AI 小花老师在你电脑上带你做', icon: '🤖', color: colors.red },
	{ k: 'Wiki + Roadmap', v: '知识库 / 可视化路径 · 自查找补', icon: '📚', color: colors.purple },
	{ k: 'P3 真项目', v: '真实业务需求 · Sprint · Code Review', icon: '🚀', color: colors.orange },
];

export default function L15_MultiChannel() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1500, padding: '32px 48px' }}>
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 22 }}
				>
					<div style={{
						display: 'inline-block', padding: '6px 14px',
						background: colors.purple, color: colors.white,
						fontFamily: fonts.mono, fontSize: 17, fontWeight: 900, letterSpacing: 2,
						border, boxShadow: shadowSm, marginBottom: 12,
					}}>
						MULTI-CHANNEL LEARNING
					</div>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 76, fontWeight: 900,
						letterSpacing: -2, lineHeight: 1, color: colors.black,
					}}>
						6 种学习通道<br />
						<span style={{ fontSize: 30, color: '#555', fontWeight: 700 }}>
							直播只是其中一种 · 不是唯一
						</span>
					</h2>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
					{CHANNELS.map((c, i) => (
						<motion.div
							key={c.k}
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: 0.2 + i * 0.07 }}
							style={{
								background: colors.white, border, boxShadow: shadowSm,
								padding: '22px 22px', position: 'relative',
								borderTop: `8px solid ${c.color}`,
							}}
						>
							<div style={{
								display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12,
							}}>
								<div style={{ fontSize: 36, lineHeight: 1 }}>{c.icon}</div>
								<div style={{
									fontFamily: fonts.heading, fontSize: 26, fontWeight: 900,
									color: colors.black, lineHeight: 1.1, letterSpacing: -0.5,
								}}>
									{c.k}
								</div>
							</div>
							<div style={{
								fontFamily: fonts.body, fontSize: 19, color: '#444',
								fontWeight: 600, lineHeight: 1.5,
							}}>
								{c.v}
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.9 }}
					style={{
						marginTop: 22, padding: '16px 24px',
						background: colors.indigo, color: colors.white,
						border, boxShadow: `6px 6px 0 ${colors.yellow}`,
						fontFamily: fonts.heading, fontSize: 22, fontWeight: 900,
						letterSpacing: -0.3, textAlign: 'center', lineHeight: 1.4,
					}}
				>
					你按自己节奏走 · 有人 4 个月跑完 · 有人 8 个月精雕 · <span style={{ background: colors.yellow, color: colors.black, padding: '0 8px', border: `2px solid ${colors.black}` }}>都行</span>
				</motion.div>
			</div>
		</Slide>
	);
}
