import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

interface Pillar {
	id: string;
	nameEn: string;
	nameZh: string;
	count: number;
	desc: string;
	coveredBy: string; // 对应的 Phase 标识
	color: string;
	highlight?: boolean; // Full-stack 标"更重要"
	isPrereq?: boolean; // 先修要求，本课完全不教
	isPartial?: boolean; // 部分覆盖，建议搭配其他课
}

const pillars: Pillar[] = [
	{
		id: 'fullstack',
		nameEn: 'Full-stack',
		nameZh: '工程化基本功',
		count: 23,
		desc: '能把 AI 能力做成真正可用的产品功能',
		coveredBy: '先修 · Web 全栈班',
		color: colors.p3,
		highlight: true,
		isPrereq: true,
	},
	{
		id: 'prompt',
		nameEn: 'Prompt Engineering',
		nameZh: '提示词工程',
		count: 11,
		desc: '把"会问"变成"可复用模板 + 体系化策略"',
		coveredBy: 'P2',
		color: colors.p2,
	},
	{
		id: 'cloud',
		nameEn: 'Cloud Foundation',
		nameZh: '云与交付',
		count: 12,
		desc: '让 AI 应用能上线、能扩展、能稳定运行',
		coveredBy: '部分 · 建议搭配 DevOps 班',
		color: colors.p5,
		isPartial: true,
	},
	{
		id: 'data',
		nameEn: 'Data Thinking',
		nameZh: '数据思维',
		count: 8,
		desc: '数据闭环决定 RAG/Agent 是否"真的好用"',
		coveredBy: 'P3 · P9',
		color: colors.p7,
	},
	{
		id: 'ai-core',
		nameEn: 'AI Engineering Core',
		nameZh: 'AI 核心能力栈',
		count: 20,
		desc: 'LLM 集成 · RAG · Agent · Eval · Model Ops',
		coveredBy: 'P3-P10',
		color: colors.red,
	},
];

const TOTAL = pillars.reduce((s, p) => s + p.count, 0);

const extensions = [
	{
		label: 'AI Product Thinking',
		desc: '需求分析 · AI 原生 UX · A/B 测试',
		nowCovered: true, // 本期新增
	},
	{ label: 'AI Security', desc: '模型攻击防护 · GDPR · 偏见检测' },
];

export default function S05d_FiveDimensions() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1420, padding: '22px 32px' }}>
				{/* 权威徽章 */}
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 10 }}
				>
					<span style={{
						padding: '4px 12px',
						background: colors.dark,
						color: colors.yellow,
						fontFamily: fonts.mono,
						fontSize: 11,
						fontWeight: 800,
						letterSpacing: 1.2,
						border,
						boxShadow: shadowSm,
					}}>
						INDUSTRY CONSENSUS · JR 技能图谱
					</span>
					<span style={{
						fontFamily: fonts.mono,
						fontSize: 11,
						color: '#555',
						fontWeight: 700,
					}}>
						数据源: Anthropic / OpenAI 招聘 JD · <b style={{ color: colors.red }}>2,300+ 人已完成测评</b>
					</span>
				</motion.div>

				{/* 等式标题 */}
				<motion.h2
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.45, delay: 0.1 }}
					style={{
						fontFamily: fonts.heading,
						fontSize: 'clamp(22px, 2.8vw, 38px)',
						fontWeight: 900,
						lineHeight: 1.2,
						letterSpacing: -0.8,
						margin: 0,
						color: colors.black,
					}}
				>
					<span style={{
						display: 'inline-block',
						padding: '0 8px',
						background: colors.black,
						color: colors.yellow,
						marginRight: 6,
					}}>
						AI Engineer
					</span>
					<span style={{ color: colors.red, margin: '0 4px' }}>=</span>
					<span>Full-stack</span>
					<span style={{ color: colors.red, margin: '0 6px' }}>+</span>
					<span>Prompt</span>
					<span style={{ color: colors.red, margin: '0 6px' }}>+</span>
					<span>Cloud</span>
					<span style={{ color: colors.red, margin: '0 6px' }}>+</span>
					<span>Data Thinking</span>
					<span style={{ color: colors.red, margin: '0 6px' }}>+</span>
					<span>AI Engineering</span>
				</motion.h2>

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.4, delay: 0.2 }}
					style={{
						fontSize: 'clamp(13px, 1.4vw, 16px)',
						color: '#333',
						fontWeight: 600,
						marginTop: 8,
						marginBottom: 10,
					}}
				>
					五大类能力 · 共 <b style={{ color: colors.red, fontFamily: fonts.mono, fontSize: '1.05em' }}>{TOTAL}</b> 个可评估技能点 · 缺任何一类，AI 产品都跑不起来
				</motion.p>

				{/* 进阶课声明 */}
				<motion.div
					initial={{ opacity: 0, x: -14 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4, delay: 0.22 }}
					style={{
						padding: '6px 14px',
						background: colors.red,
						color: colors.white,
						border: `2px solid ${colors.black}`,
						marginBottom: 14,
						display: 'inline-flex',
						alignItems: 'center',
						gap: 8,
						fontFamily: fonts.heading,
						fontSize: 'clamp(12px, 1.25vw, 14px)',
						fontWeight: 800,
					}}
				>
					<span style={{
						fontFamily: fonts.mono, fontSize: 10, fontWeight: 900,
						padding: '2px 6px', background: colors.yellow, color: colors.black,
						letterSpacing: 0.5,
					}}>
						进阶课
					</span>
					本课 = AI Engineer Bootcamp · 不教基础 API · Full-stack 在 <b>AI Web 全栈班</b> 已经学完
				</motion.div>

				{/* 5 pillar 卡片 */}
				<div style={{
					display: 'grid',
					gridTemplateColumns: '1.25fr 1fr 1fr 0.85fr 1.1fr',
					gap: 12,
					marginBottom: 16,
				}}>
					{pillars.map((p, i) => (
						<motion.div
							key={p.id}
							initial={{ opacity: 0, y: 24 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
							style={{
								background: colors.white,
								border,
								boxShadow: p.highlight ? `6px 6px 0 ${colors.red}` : shadow,
								padding: '14px 14px 12px',
								display: 'flex',
								flexDirection: 'column',
								position: 'relative',
								overflow: 'hidden',
							}}
						>
							{/* 顶部色条 */}
							<div style={{
								position: 'absolute',
								top: 0,
								left: 0,
								right: 0,
								height: 6,
								background: p.color,
							}} />

							{/* 更重要徽章 */}
							{p.highlight && (
								<div style={{
									position: 'absolute',
									top: 10,
									right: -8,
									padding: '2px 10px',
									background: colors.red,
									color: colors.white,
									fontFamily: fonts.mono,
									fontSize: 9,
									fontWeight: 900,
									letterSpacing: 0.5,
									border: `2px solid ${colors.black}`,
									transform: 'rotate(3deg)',
									zIndex: 2,
								}}>
									更重要
								</div>
							)}

							<div style={{ marginTop: 10 }}>
								<div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 4 }}>
									<span style={{
										fontFamily: fonts.mono,
										fontSize: 'clamp(28px,3.2vw,42px)',
										fontWeight: 900,
										color: p.color,
										lineHeight: 1,
										letterSpacing: -1,
									}}>
										{p.count}
									</span>
									<span style={{
										fontFamily: fonts.mono,
										fontSize: 10,
										color: '#888',
										fontWeight: 700,
										letterSpacing: 1,
									}}>
										SKILLS
									</span>
								</div>

								<div style={{
									fontFamily: fonts.heading,
									fontSize: 'clamp(14px, 1.35vw, 17px)',
									fontWeight: 900,
									color: colors.black,
									lineHeight: 1.15,
									letterSpacing: -0.3,
								}}>
									{p.nameEn}
								</div>
								<div style={{
									fontFamily: fonts.heading,
									fontSize: 11,
									color: p.color,
									fontWeight: 700,
									marginTop: 2,
								}}>
									{p.nameZh}
								</div>

								<div style={{
									fontSize: 11,
									color: '#444',
									lineHeight: 1.35,
									marginTop: 8,
									fontWeight: 500,
								}}>
									{p.desc}
								</div>
							</div>

							{/* 底部 Phase 映射 */}
							<div style={{ marginTop: 10 }}>
								<div style={{
									fontFamily: fonts.mono,
									fontSize: 9,
									color: p.isPrereq ? colors.red : p.isPartial ? '#c2410c' : '#888',
									fontWeight: 700,
									letterSpacing: 1,
									marginBottom: 3,
								}}>
									{p.isPrereq
										? '⚠️ 先修要求（本课不教）'
										: p.isPartial
										? '🧩 部分覆盖'
										: 'V5 覆盖'}
								</div>
								<div style={{
									padding: '3px 8px',
									background: p.isPrereq ? colors.red : p.isPartial ? colors.orange : colors.dark,
									color: p.isPrereq ? colors.white : p.isPartial ? colors.black : colors.yellow,
									fontFamily: fonts.mono,
									fontSize: 11,
									fontWeight: 800,
									display: 'inline-block',
									letterSpacing: 0.5,
								}}>
									{p.coveredBy}
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* 延伸思考 + 底部过渡 */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.8 }}
					style={{
						display: 'grid',
						gridTemplateColumns: '1fr auto',
						gap: 14,
						alignItems: 'stretch',
					}}
				>
					{/* 左：延伸思考 */}
					<div style={{
						padding: '10px 14px',
						background: colors.white,
						border: `2px dashed ${colors.dark}`,
					}}>
						<div style={{
							fontFamily: fonts.mono,
							fontSize: 10,
							color: '#666',
							fontWeight: 800,
							letterSpacing: 1,
							marginBottom: 6,
						}}>
							💡 延伸思考（原不在 74 skills 框架内）
						</div>
						<div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
							{extensions.map((e) => (
								<div key={e.label} style={{
									display: 'flex',
									alignItems: 'center',
									gap: 6,
									fontSize: 11,
									color: '#333',
								}}>
									{e.nowCovered && (
										<span style={{
											fontFamily: fonts.mono,
											fontSize: 9,
											fontWeight: 900,
											padding: '2px 6px',
											background: colors.red,
											color: colors.white,
											border: `1.5px solid ${colors.black}`,
											letterSpacing: 0.5,
										}}>
											V5 新增 ✓
										</span>
									)}
									<span style={{
										fontFamily: fonts.heading,
										fontWeight: 900,
										color: colors.black,
									}}>
										{e.label}
									</span>
									<span style={{ color: '#666', fontSize: 10 }}>· {e.desc}</span>
								</div>
							))}
						</div>
					</div>

					{/* 右：过渡到 10 Phase */}
					<div style={{
						padding: '10px 18px',
						background: colors.yellow,
						border,
						boxShadow: shadowSm,
						display: 'flex',
						alignItems: 'center',
						gap: 10,
						fontFamily: fonts.heading,
						fontSize: 'clamp(12px, 1.3vw, 15px)',
						fontWeight: 900,
						color: colors.black,
						letterSpacing: -0.2,
					}}>
						<span>第五期 10 Phase =</span>
						<span style={{ color: colors.red }}>这 5 类 × 74 skills 的工程化编排</span>
						<motion.span
							animate={{ x: [0, 4, 0] }}
							transition={{ duration: 1.2, repeat: Infinity }}
							style={{ color: colors.red, fontSize: 18 }}
						>
							→
						</motion.span>
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
