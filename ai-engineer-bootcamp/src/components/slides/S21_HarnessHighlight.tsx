import { motion } from 'framer-motion';
import { Slide, colors, fonts } from '../ui';

/**
 * S21 — 🔥 Harness Engineering 专讲（V5 独家）
 * 背景 p8 红色，整张像 "爆点 poster"
 * 左侧 Harness 架构图（逐层组装动画），右侧 3 条卖点
 */
export default function S21_HarnessHighlight() {
	return (
		<Slide bg={colors.p8} style={{ position: 'relative', overflow: 'hidden' }}>
			{/* 背景斜纹装饰 */}
			<div style={{
				position: 'absolute', inset: 0,
				backgroundImage: `repeating-linear-gradient(-45deg, rgba(0,0,0,0.06) 0 2px, transparent 2px 22px)`,
			}} />

			{/* 几何色块装饰 */}
			<motion.div
				initial={{ scale: 0, rotate: 0 }}
				animate={{ scale: 1, rotate: 10 }}
				transition={{ duration: 0.5, delay: 0.1 }}
				style={{
					position: 'absolute', top: -60, right: -40, width: 220, height: 220,
					background: colors.yellow, border: `4px solid ${colors.black}`, zIndex: 0,
				}}
			/>
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ duration: 0.4, delay: 0.3 }}
				style={{
					position: 'absolute', bottom: 40, left: -30, width: 110, height: 110,
					background: colors.dark, transform: 'rotate(-8deg)', zIndex: 0,
				}}
			/>

			<div style={{ position: 'relative', zIndex: 1, width: '94%', maxWidth: 1400, padding: '36px 40px' }}>
				{/* V5 独家徽章 */}
				<motion.div
					initial={{ opacity: 0, x: -30, rotate: -5 }}
					animate={{ opacity: 1, x: 0, rotate: -3 }}
					transition={{ duration: 0.4, delay: 0.2 }}
					style={{
						display: 'inline-block',
						padding: '7px 16px',
						background: colors.black, color: colors.yellow,
						fontFamily: fonts.mono, fontSize: 13, fontWeight: 900, letterSpacing: 0.5,
						border: `3px solid ${colors.yellow}`, boxShadow: `4px 4px 0 ${colors.yellow}`,
						marginBottom: 16,
					}}
				>
					V5 第五期独家新增 · 别的 Bootcamp 没有
				</motion.div>

				{/* 大标题 */}
				<motion.h2
					initial={{ opacity: 0, x: -60 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					style={{
						fontFamily: fonts.heading,
						fontSize: '96px',
						fontWeight: 900, lineHeight: 0.95, letterSpacing: -3,
						color: colors.white,
						textShadow: `5px 5px 0 ${colors.black}`,
						marginBottom: 8,
					}}
				>
					Harness<br />
					<span style={{ display: 'inline-block', background: colors.white, color: colors.p8, padding: '0 14px', border: `4px solid ${colors.black}`, boxShadow: `6px 6px 0 ${colors.black}`, transform: 'rotate(-1deg)', marginTop: 6 }}>
						Engineering
					</span>
				</motion.h2>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.4, delay: 0.6 }}
					style={{ marginTop: 16 }}
				>
					<p style={{
						fontFamily: fonts.heading, fontSize: '28px',
						fontWeight: 800, color: colors.black, lineHeight: 1.3, margin: 0,
					}}>
						Claude Code、Cursor <span style={{ background: colors.yellow, padding: '0 8px', border: `2px solid ${colors.black}` }}>背后的秘密</span>
					</p>
				</motion.div>

				{/* 主体：左架构图 + 右卖点 */}
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 32, marginTop: 28, alignItems: 'stretch' }}>
					{/* 左：Harness 架构图 */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.7 }}
						style={{
							background: colors.black, border: `4px solid ${colors.black}`,
							boxShadow: `8px 8px 0 ${colors.white}`,
							padding: '18px 16px', position: 'relative',
						}}
					>
						{/* 最外层标签 */}
						<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
							<span style={{
								padding: '4px 10px', background: colors.yellow, color: colors.black,
								fontFamily: fonts.mono, fontSize: 11, fontWeight: 900, letterSpacing: 1,
								border: `2px solid ${colors.black}`,
							}}>
								HARNESS
							</span>
							<span style={{ fontFamily: fonts.mono, fontSize: 11, color: 'rgba(255,255,255,0.5)', fontWeight: 700 }}>
								= 让 Agent 成为 IDE 的外壳系统
							</span>
						</div>

						{/* 8 个子模块 */}
						<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, padding: 10, border: `2px dashed ${colors.yellow}` }}>
							{[
								{ name: 'Hook System', sub: 'PreTool·PostTool 钩子', icon: '🪝', color: colors.blue, delay: 0.85 },
								{ name: 'Tool Loop', sub: 'LLM ↔ Tool 迭代环', icon: '🔁', color: colors.green, delay: 0.92 },
								{ name: 'Permissions', sub: 'allow/deny · 沙箱隔离', icon: '🔐', color: colors.red, delay: 0.99 },
								{ name: 'Memory Layer', sub: 'CLAUDE.md · 会话记忆', icon: '🧠', color: colors.teal, delay: 1.06 },
								{ name: 'Skills', sub: '可插拔能力单元', icon: '🧩', color: colors.purple, delay: 1.13 },
								{ name: 'Subagents', sub: '多 Agent 并行调度', icon: '🤖', color: colors.indigo, delay: 1.20 },
								{ name: 'MCP Protocol', sub: '工具生态协议层', icon: '🔌', color: colors.orange, delay: 1.27 },
								{ name: 'ADLC', sub: 'Agent Dev Lifecycle', icon: '⚙️', color: colors.yellow, delay: 1.34 },
							].map((m) => (
								<motion.div
									key={m.name}
									initial={{ opacity: 0, y: 12 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.35, delay: m.delay }}
									style={{
										background: colors.white, border: `3px solid ${colors.black}`,
										boxShadow: `3px 3px 0 ${m.color}`, padding: '8px 10px',
									}}
								>
									<div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
										<span style={{ fontSize: 16 }}>{m.icon}</span>
										<div style={{ fontFamily: fonts.heading, fontSize: 13, fontWeight: 900, color: colors.black, letterSpacing: -0.3 }}>
											{m.name}
										</div>
									</div>
									<div style={{ fontFamily: fonts.mono, fontSize: 9.5, color: '#444', fontWeight: 700 }}>
										{m.sub}
									</div>
								</motion.div>
							))}
						</div>

						{/* 底部小注 */}
						<div style={{ marginTop: 10, fontFamily: fonts.mono, fontSize: 10, color: 'rgba(255,255,255,0.5)', fontWeight: 700, textAlign: 'center' }}>
							Claude Code / Cursor 正是这套架构的量产版本
						</div>
					</motion.div>

					{/* 右：3 条卖点 */}
					<div style={{ display: 'flex', flexDirection: 'column', gap: 14, justifyContent: 'center' }}>
						{[
							{
								n: '01',
								title: '你不只会写 Agent',
								hl: '你能造出 Agent 的 IDE',
								delay: 0.8,
							},
							{
								n: '02',
								title: 'Hook System + Skills 范式',
								hl: '让你的 Agent 可以"插件化成长"',
								delay: 0.95,
							},
							{
								n: '03',
								title: 'ADLC · Agent Development Lifecycle',
								hl: '一套完整的工程方法论',
								delay: 1.1,
							},
						].map((s) => (
							<motion.div
								key={s.n}
								initial={{ opacity: 0, x: 30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.4, delay: s.delay }}
								style={{
									background: colors.white, border: `3px solid ${colors.black}`,
									boxShadow: `5px 5px 0 ${colors.black}`,
									padding: '14px 18px',
									display: 'flex', alignItems: 'center', gap: 14,
								}}
							>
								<div style={{
									flexShrink: 0,
									width: 46, height: 46, background: colors.black, color: colors.yellow,
									display: 'flex', alignItems: 'center', justifyContent: 'center',
									fontFamily: fonts.heading, fontSize: 20, fontWeight: 900,
								}}>
									{s.n}
								</div>
								<div style={{ flex: 1, minWidth: 0 }}>
									<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#555', fontWeight: 700, marginBottom: 3 }}>
										{s.title}
									</div>
									<div style={{ fontFamily: fonts.heading, fontSize: '22px', color: colors.black, fontWeight: 900, lineHeight: 1.25, letterSpacing: -0.5 }}>
										{s.hl}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>

				{/* 底部大字 */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 1.3 }}
					style={{
						marginTop: 22, padding: '14px 20px',
						background: colors.black, border: `4px solid ${colors.black}`,
						boxShadow: `6px 6px 0 ${colors.yellow}`,
						display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 18, flexWrap: 'wrap',
					}}
				>
					<div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
						<span style={{ fontFamily: fonts.heading, fontSize: '20px', color: colors.white, fontWeight: 900, letterSpacing: -0.3 }}>
							Phase 8 · 13 节课 · 5 节直播
						</span>
						<span style={{ padding: '3px 10px', background: colors.yellow, color: colors.black, fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, border: `2px solid ${colors.white}` }}>
							V5 独家
						</span>
					</div>
					<div style={{ fontFamily: fonts.heading, fontSize: '18px', color: colors.yellow, fontWeight: 900, letterSpacing: -0.3 }}>
						市场上这个内容，你找不到第二家
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
