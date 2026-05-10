import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import VideoBg from './VideoBg';

export default function L04_AiEraIs2026() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative', overflow: 'hidden' }}>
			<VideoBg src="videos/veo-paper.mp4" overlay="rgba(255,241,231,0.78)" />
			<div style={{ position: 'relative', zIndex: 1, width: '90%', maxWidth: 1500, padding: '36px 48px' }}>
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 24 }}
				>
					<div style={{
						display: 'inline-block', padding: '6px 14px',
						background: colors.indigo, color: colors.white,
						fontFamily: fonts.mono, fontSize: 17, fontWeight: 900, letterSpacing: 2,
						border, boxShadow: shadowSm, marginBottom: 14,
					}}>
						01 · 行业背景
					</div>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 84, fontWeight: 900,
						letterSpacing: -2, lineHeight: 1, color: colors.black,
					}}>
						2026 = AI Engineer<br />
						<span style={{
							display: 'inline-block', background: colors.indigo, color: colors.white,
							padding: '0 18px', border: `4px solid ${colors.black}`,
							boxShadow: `6px 6px 0 ${colors.black}`, marginTop: 8,
						}}>
							正式上岗年
						</span>
					</h2>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 8 }}>
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						style={{
							background: colors.dark, color: colors.white,
							border, boxShadow: shadow, padding: '24px 28px',
						}}
					>
						<div style={{
							fontFamily: fonts.mono, fontSize: 16, fontWeight: 900,
							color: colors.red, letterSpacing: 2, marginBottom: 14,
						}}>
							⚠ THE SHIFT
						</div>
						<div style={{
							fontFamily: fonts.heading, fontSize: 30, fontWeight: 900,
							lineHeight: 1.3, letterSpacing: -0.5, marginBottom: 16,
						}}>
							ChatGPT / Copilot / Cursor 之后，
							<span style={{ background: colors.red, color: colors.white, padding: '0 8px' }}>
								80% 的"写代码"被自动化
							</span>
						</div>
						<ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
							{[
								'Junior 单纯写 CRUD = 已经被 AI 顶替',
								'Debug + 调 API + 写 Unit Test = 一句 Prompt 的事',
								'写一个完整 React 组件 = 30 秒输出',
							].map((s) => (
								<li key={s} style={{
									fontFamily: fonts.body, fontSize: 19, fontWeight: 600, lineHeight: 1.5,
								}}>
									<span style={{ color: colors.yellow, fontWeight: 900, marginRight: 8 }}>×</span>
									{s}
								</li>
							))}
						</ul>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						style={{
							background: colors.white, border, boxShadow: shadow, padding: '24px 28px',
						}}
					>
						<div style={{
							fontFamily: fonts.mono, fontSize: 16, fontWeight: 900,
							color: colors.green, letterSpacing: 2, marginBottom: 14,
						}}>
							✓ THE OPPORTUNITY
						</div>
						<div style={{
							fontFamily: fonts.heading, fontSize: 30, fontWeight: 900,
							lineHeight: 1.3, letterSpacing: -0.5, color: colors.black, marginBottom: 16,
						}}>
							市场只缺一种人 ——
							<span style={{ background: colors.yellow, color: colors.black, padding: '0 8px', border: `2px solid ${colors.black}` }}>
								能用 AI 造产品的工程师
							</span>
						</div>
						<ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
							{[
								'Task Decomposition · 把模糊需求拆给 AI',
								'Engineer > Coder · 你管 AI，不是 AI 管你',
								'AI Coding + AI Engineering 双能力',
							].map((s) => (
								<li key={s} style={{
									fontFamily: fonts.body, fontSize: 19, fontWeight: 600, lineHeight: 1.5, color: colors.black,
								}}>
									<span style={{ color: colors.green, fontWeight: 900, marginRight: 8 }}>→</span>
									{s}
								</li>
							))}
						</ul>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.7 }}
					style={{
						marginTop: 24, padding: '14px 22px',
						background: colors.indigo, color: colors.white,
						border, boxShadow: `6px 6px 0 ${colors.yellow}`,
						fontFamily: fonts.heading, fontSize: 22, fontWeight: 900,
						lineHeight: 1.3, letterSpacing: -0.3, textAlign: 'center',
					}}
				>
					所以这门课不教"会写代码"——教你 <span style={{ background: colors.yellow, color: colors.black, padding: '0 10px', border: `2px solid ${colors.black}` }}>带着 AI 造完整产品</span>
				</motion.div>
			</div>
		</Slide>
	);
}
