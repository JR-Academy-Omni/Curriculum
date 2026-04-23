import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

// Claude Code 独占舞台 · 其他 IDE 都是半成品
const tools = [
	{ name: 'Claude Code', tag: 'Anthropic 官方 Agent IDE · 唯一王者', color: colors.red, king: true },
	{ name: 'Skills 范式', tag: '技能化可复用 · Phase 8 会讲', color: colors.p8 },
	{ name: 'Subagents', tag: '并行 Agent 拆解 · 多任务自动化', color: colors.p5 },
	{ name: 'Hooks', tag: 'pre/post 自动化钩子 · Workflow 级联', color: colors.p6 },
	{ name: 'MCP + Personal Harness', tag: '业务系统接进来 · Phase 4 + Phase 8 自己造', color: colors.p3 },
];

const stats = [
	{ big: '90%+', label: 'Anthropic 内部新代码由 Claude Code 生成', source: 'Anthropic 2025 State of Engineering' },
	{ big: '#1', label: 'GitHub Stars / HN / X 上涨速度最快的 AI IDE', source: 'GitHub Trending · 2025-Q4' },
	{ big: '10k+', label: 'Meta / OpenAI AI Engineer 日均 tokens 请求', source: 'Meta internal ML infra report' },
];

export default function S05c_AiCodingCore() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '92%', maxWidth: 1380, padding: '28px 40px' }}>
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.35 }}
					style={{
						display: 'inline-block',
						padding: '6px 16px',
						background: colors.dark,
						color: colors.yellow,
						fontFamily: fonts.mono,
						fontSize: 12,
						fontWeight: 700,
						border,
						boxShadow: shadowSm,
						marginBottom: 16,
						transform: 'rotate(-1deg)',
					}}
				>
					反常识的事实
				</motion.div>

				<motion.h2
					initial={{ opacity: 0, x: -24 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.45, delay: 0.1 }}
					style={{
						fontFamily: fonts.heading,
						fontSize: '52px',
						fontWeight: 900,
						lineHeight: 1.12,
						letterSpacing: -1,
						color: colors.black,
						marginBottom: 10,
					}}
				>
					AI Engineer 自己，<br />
					<span style={{ color: colors.red }}>也是用 AI 写代码的。</span>
				</motion.h2>

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.4, delay: 0.2 }}
					style={{
						fontSize: '18px',
						color: '#444',
						marginBottom: 22,
						maxWidth: 900,
					}}
				>
					AI Engineer 不是"不用 AI 写代码的工程师"——恰恰相反，他们比谁都重度。
					区别是：他们用 AI 写的是 <b>AI 系统本身</b>，而且他们知道怎么<b>改造</b>这套 AI Coding 工具链。
				</motion.p>

				<div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 22 }}>
					{/* 左：工具链 */}
					<div>
						<div style={{
							fontFamily: fonts.mono,
							fontSize: 12,
							letterSpacing: 1.5,
							color: colors.dark,
							opacity: 0.65,
							marginBottom: 10,
						}}>
							AI ENGINEER 的日常工具链
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
							{tools.map((t, i) => (
								<motion.div
									key={t.name}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.35, delay: 0.3 + i * 0.08 }}
									style={{
										display: 'grid',
										gridTemplateColumns: '8px 1fr auto',
										gap: 14,
										alignItems: 'center',
										padding: '12px 16px',
										background: colors.white,
										border,
										boxShadow: shadowSm,
									}}
								>
									<div style={{ width: 8, height: 36, background: t.color, border: `2px solid ${colors.black}` }} />
									<div>
										<div style={{
											fontFamily: fonts.heading,
											fontSize: t.king ? '22px' : '19px',
											fontWeight: 900,
											color: colors.black,
											display: 'flex',
											alignItems: 'center',
											gap: 8,
										}}>
											{t.king && <span style={{ fontSize: '1em' }}>👑</span>}
											{t.name}
										</div>
										<div style={{
											fontSize: 12,
											color: '#666',
											marginTop: 2,
										}}>
											{t.tag}
										</div>
									</div>
									<div style={{
										fontFamily: fonts.mono,
										fontSize: t.king ? 12 : 11,
										fontWeight: 900,
										padding: t.king ? '4px 10px' : '3px 8px',
										background: t.color,
										color: t.king ? colors.white : colors.white,
										border: `1.5px solid ${colors.black}`,
										boxShadow: t.king ? `3px 3px 0 ${colors.black}` : 'none',
										letterSpacing: 0.5,
									}}>
										{t.king ? '王者 KING' : 'DAILY'}
									</div>
								</motion.div>
							))}
						</div>
					</div>

					{/* 右：数据 + 金句 */}
					<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
						<div style={{
							fontFamily: fonts.mono,
							fontSize: 12,
							letterSpacing: 1.5,
							color: colors.dark,
							opacity: 0.65,
							marginBottom: 2,
						}}>
							为什么这是核心能力
						</div>
						{stats.map((s, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 14 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.35, delay: 0.45 + i * 0.1 }}
								style={{
									padding: '12px 16px',
									background: colors.white,
									border,
									boxShadow: shadowSm,
									display: 'grid',
									gridTemplateColumns: 'auto 1fr',
									gap: 14,
									alignItems: 'center',
								}}
							>
								<div style={{
									fontFamily: fonts.mono,
									fontSize: '32px',
									fontWeight: 900,
									color: colors.red,
									minWidth: 72,
								}}>
									{s.big}
								</div>
								<div>
									<div style={{
										fontSize: '14px',
										fontWeight: 700,
										color: colors.black,
										lineHeight: 1.35,
									}}>
										{s.label}
									</div>
									<div style={{
										fontFamily: fonts.mono,
										fontSize: 10,
										color: '#888',
										marginTop: 3,
									}}>
										{s.source}
									</div>
								</div>
							</motion.div>
						))}
						<motion.div
							initial={{ opacity: 0, y: 14 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.8 }}
							style={{
								padding: '14px 18px',
								background: colors.dark,
								color: colors.yellow,
								border,
								boxShadow: shadow,
								fontFamily: fonts.heading,
								fontSize: '17px',
								fontWeight: 800,
								lineHeight: 1.4,
							}}
						>
							"不会用 AI 写 AI 的 AI Engineer，已经落后一个时代。"
						</motion.div>
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 1.0 }}
					style={{
						marginTop: 18,
						padding: '12px 18px',
						background: colors.yellow,
						border,
						boxShadow: shadowSm,
						display: 'flex',
						alignItems: 'center',
						gap: 14,
						flexWrap: 'wrap',
					}}
				>
					<div style={{
						fontFamily: fonts.mono,
						fontSize: 11,
						fontWeight: 700,
						padding: '4px 10px',
						background: colors.black,
						color: colors.yellow,
						letterSpacing: 1,
					}}>
						第五期如何覆盖
					</div>
					<div style={{
						fontFamily: fonts.heading,
						fontSize: '16px',
						fontWeight: 800,
						color: colors.black,
						flex: 1,
						minWidth: 300,
					}}>
						Phase 2 <b style={{ color: colors.red }}>Vibe Coding</b>（3 节课 + Lab）·
						Phase 8 <b style={{ color: colors.red }}>Harness Engineering</b>（13 节课，V5 独家）·
						贯穿全课的 Claude Code / Cursor 实操
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
