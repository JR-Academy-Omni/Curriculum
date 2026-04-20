import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

const traditionalStack = [
	{ label: 'CRUD 接口 / REST / GraphQL', note: 'AI 补全率 >80% · 模板化工作' },
	{ label: '基础前端页面', note: 'v0.dev · bolt.new · Cursor 已经替代' },
	{ label: '单元测试', note: 'Claude Code 一键覆盖' },
	{ label: 'Terraform / K8s yaml / CI/CD 配置', note: 'AI 写得比人快 · DevOps 模板化部分被吃掉' },
	{ label: 'Shell / Bash 运维脚本', note: 'AI 一句话生成 · 不再是核心壁垒' },
];

const aiEngineerStack = [
	{ label: 'RAG / GraphRAG 系统设计', note: '涉及业务 + 数据 + 检索策略' },
	{ label: 'Multi-Agent 编排', note: '需要理解 LangGraph + A2A + 状态机' },
	{ label: 'MCP Server 工程集成', note: '把 AI 接进企业业务，AI 自己做不了' },
	{ label: 'LLMOps · AI Eval · 可观测', note: 'SRE / DevOps 的天然延伸 — 模型怎么错、怎么修，只有人能判' },
	{ label: 'Fine-Tuning + Harness', note: '训练决策 + 工程方法论 · AI 替代不了' },
];

export default function S05b_SdeOnlyPath() {
	return (
		<Slide bg={colors.dark}>
			<div style={{ width: '92%', maxWidth: 1400, padding: '32px 48px', color: colors.white }}>
				<motion.div
					initial={{ opacity: 0, y: -12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{
						display: 'inline-block',
						padding: '6px 16px',
						background: colors.red,
						border: `2px solid ${colors.black}`,
						fontFamily: fonts.mono,
						fontSize: 13,
						fontWeight: 700,
						color: colors.white,
						marginBottom: 18,
						transform: 'rotate(-1.5deg)',
					}}
				>
					2026 · 真话时间
				</motion.div>

				<motion.h2
					initial={{ opacity: 0, x: -30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					style={{
						fontFamily: fonts.heading,
						fontSize: 'clamp(32px, 4.2vw, 54px)',
						fontWeight: 900,
						lineHeight: 1.15,
						letterSpacing: -1,
						marginBottom: 10,
					}}
				>
					普通 SDE / Full Stack / DevOps 的<br />
					<span style={{
						display: 'inline-block',
						padding: '2px 18px',
						background: colors.yellow,
						color: colors.black,
						border: `3px solid ${colors.black}`,
						boxShadow: `5px 5px 0 ${colors.black}`,
						transform: 'rotate(-1deg)',
						marginTop: 6,
					}}>
						唯一出路
					</span>
					，是成为 AI Engineer
				</motion.h2>

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.4, delay: 0.25 }}
					style={{
						fontSize: 'clamp(14px, 1.5vw, 18px)',
						color: 'rgba(255,255,255,0.7)',
						marginBottom: 28,
					}}
				>
					AI 替代了"写代码"的部分，但替代不了"设计 AI 系统"的部分。
				</motion.p>

				<div style={{
					display: 'grid',
					gridTemplateColumns: '1fr 72px 1fr',
					gap: 20,
					alignItems: 'stretch',
				}}>
					{/* 左：传统 SDE */}
					<motion.div
						initial={{ opacity: 0, x: -40 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.35 }}
						style={{
							padding: '18px 20px',
							background: 'rgba(255,255,255,0.06)',
							border: `2px solid rgba(255,255,255,0.25)`,
							filter: 'grayscale(0.4) opacity(0.88)',
						}}
					>
						<div style={{
							fontFamily: fonts.mono,
							fontSize: 12,
							letterSpacing: 1.5,
							color: 'rgba(255,255,255,0.55)',
							marginBottom: 10,
						}}>
							TRADITIONAL · SDE / FULL-STACK / DEVOPS
						</div>
						<div style={{
							fontFamily: fonts.heading,
							fontSize: 'clamp(18px, 2vw, 24px)',
							fontWeight: 800,
							color: 'rgba(255,255,255,0.85)',
							marginBottom: 14,
							textDecoration: 'line-through',
							textDecorationColor: colors.red,
							textDecorationThickness: 2,
						}}>
							逐年被 AI 替代的工作
						</div>
						<ul style={{ listStyle: 'none', padding: 0 }}>
							{traditionalStack.map((it, i) => (
								<li key={i} style={{
									display: 'flex',
									alignItems: 'flex-start',
									gap: 10,
									padding: '6px 0',
									fontSize: 'clamp(12px, 1.1vw, 14px)',
									color: 'rgba(255,255,255,0.7)',
								}}>
									<span style={{ color: colors.red, fontWeight: 700 }}>✕</span>
									<div>
										<div style={{ fontWeight: 700, color: 'rgba(255,255,255,0.92)' }}>{it.label}</div>
										<div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 11, marginTop: 2 }}>{it.note}</div>
									</div>
								</li>
							))}
						</ul>
					</motion.div>

					{/* 中：红色大箭头 */}
					<motion.div
						initial={{ opacity: 0, scale: 0.6 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.4, delay: 0.5 }}
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<div style={{
							width: 56,
							height: 56,
							borderRadius: '50%',
							background: colors.red,
							border: `3px solid ${colors.black}`,
							boxShadow: `4px 4px 0 ${colors.black}`,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							color: colors.white,
							fontFamily: fonts.heading,
							fontSize: 32,
							fontWeight: 900,
						}}>
							→
						</div>
					</motion.div>

					{/* 右：AI Engineer */}
					<motion.div
						initial={{ opacity: 0, x: 40 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.45 }}
						style={{
							padding: '18px 20px',
							background: colors.yellow,
							color: colors.black,
							border,
							boxShadow: shadow,
						}}
					>
						<div style={{
							fontFamily: fonts.mono,
							fontSize: 12,
							letterSpacing: 1.5,
							color: colors.dark,
							opacity: 0.75,
							marginBottom: 10,
						}}>
							FUTURE · AI ENGINEER
						</div>
						<div style={{
							fontFamily: fonts.heading,
							fontSize: 'clamp(18px, 2vw, 24px)',
							fontWeight: 900,
							color: colors.black,
							marginBottom: 14,
						}}>
							AI 替代不了的工作 — 薪资反向上涨
						</div>
						<ul style={{ listStyle: 'none', padding: 0 }}>
							{aiEngineerStack.map((it, i) => (
								<li key={i} style={{
									display: 'flex',
									alignItems: 'flex-start',
									gap: 10,
									padding: '6px 0',
									fontSize: 'clamp(12px, 1.1vw, 14px)',
									color: colors.black,
								}}>
									<span style={{ color: colors.red, fontWeight: 900 }}>✓</span>
									<div>
										<div style={{ fontWeight: 800 }}>{it.label}</div>
										<div style={{ opacity: 0.72, fontSize: 11, marginTop: 2 }}>{it.note}</div>
									</div>
								</li>
							))}
						</ul>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 18 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.7 }}
					style={{
						marginTop: 22,
						padding: '12px 20px',
						background: colors.red,
						border: `3px solid ${colors.black}`,
						boxShadow: `5px 5px 0 ${colors.black}`,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						flexWrap: 'wrap',
						gap: 12,
					}}
				>
					<div style={{
						fontFamily: fonts.heading,
						fontSize: 'clamp(14px, 1.5vw, 19px)',
						fontWeight: 900,
						color: colors.white,
					}}>
						这不是选项题，是时间题。2028 之前站好队。
					</div>
					<div style={{
						fontFamily: fonts.mono,
						fontSize: 11,
						color: 'rgba(255,255,255,0.78)',
					}}>
						数据源: Stack Overflow Dev Survey 2025 · GitHub Octoverse · LinkedIn Talent Report
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
