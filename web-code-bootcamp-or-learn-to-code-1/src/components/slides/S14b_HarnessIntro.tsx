import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

/**
 * S14b — Harness Engineering 路线图入门
 * 接在 S14_M8_RagAgentMcp 后面，引出 Harness Engineering
 * 给学员看到"全栈班学完之后可以继续学什么"的进阶路径
 */
export default function S14b_HarnessIntro() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1400, padding: '40px 48px', display: 'flex', flexDirection: 'column', gap: 28 }}>
				<motion.div
					initial={{ opacity: 0, y: -16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{
						alignSelf: 'flex-start',
						padding: '8px 18px',
						background: colors.dark,
						color: colors.yellow,
						border,
						boxShadow: shadowSm,
						fontFamily: fonts.mono,
						fontSize: 19,
						fontWeight: 800,
						letterSpacing: 1,
						transform: 'rotate(-1.5deg)',
					}}
				>
					🔭 进阶视野 · 走完全栈班还可以继续学
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: -30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}
				>
					<div style={{
						width: 96, height: 96, background: colors.m8, color: colors.white,
						border, boxShadow: shadow, display: 'flex', alignItems: 'center', justifyContent: 'center',
						fontSize: 52, fontFamily: fonts.heading, fontWeight: 900,
					}}>
						🛠️
					</div>
					<div>
						<div style={{ fontFamily: fonts.mono, fontSize: 17, fontWeight: 800, color: colors.m8, letterSpacing: 2, marginBottom: 4 }}>
							ADVANCED PATH · BEYOND FULL-STACK
						</div>
						<h2 style={{ fontFamily: fonts.heading, fontSize: 64, fontWeight: 900, letterSpacing: -1.5, lineHeight: 1.05, margin: 0 }}>
							Harness <span style={{ color: colors.m8 }}>Engineering</span>
						</h2>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					style={{
						background: colors.white, border, boxShadow: shadow,
						padding: '24px 28px',
					}}
				>
					<div style={{ fontFamily: fonts.heading, fontSize: 28, fontWeight: 800, color: colors.black, lineHeight: 1.4, letterSpacing: -0.4 }}>
						Claude Code、Cursor 背后就是 <span style={{ background: colors.yellow, padding: '2px 10px', border: `2px solid ${colors.black}` }}>Harness</span>。
						<br />学会它你不只能写 Agent，你能造 <strong style={{ color: colors.m8 }}>Agent 的 IDE</strong>。
					</div>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
					{[
						{ n: '01', title: 'Harness 架构原理', sub: 'Tool Loop · Permissions · Memory', delay: 0.5 },
						{ n: '02', title: 'Hook System 设计', sub: 'PreToolUse / PostToolUse 钩子', delay: 0.6 },
						{ n: '03', title: '构建你自己的 AI Harness', sub: 'Claude Agent SDK · ADLC', delay: 0.7 },
					].map((l) => (
						<motion.div
							key={l.n}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: l.delay }}
							style={{
								background: colors.dark, color: colors.white,
								border, boxShadow: shadowSm, padding: '20px 22px',
							}}
						>
							<div style={{ fontFamily: fonts.mono, fontSize: 17, fontWeight: 900, color: colors.yellow, marginBottom: 6, letterSpacing: 2 }}>
								{l.n}
							</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 22, fontWeight: 900, lineHeight: 1.2, letterSpacing: -0.4, marginBottom: 6 }}>
								{l.title}
							</div>
							<div style={{ fontFamily: fonts.mono, fontSize: 16, color: 'rgba(255,255,255,0.7)', fontWeight: 700 }}>
								{l.sub}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</Slide>
	);
}
