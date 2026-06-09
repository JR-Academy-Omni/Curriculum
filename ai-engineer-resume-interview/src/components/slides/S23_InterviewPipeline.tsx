import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

/**
 * S23 — AI Engineer 面试 5 大环节漏斗
 * 漏斗从大到小 5 段：Resume → 技术一面 → System Design → Coding → Behavioral
 */

interface Stage {
	num: string;
	title: string;
	subtitle: string;
	duration: string;
	what: string;
	howDie: string[];
	classics?: string[]; // 经典题目（System Design 等）
	pass: number; // 通过率 %
	width: number; // 漏斗宽度百分比
	color: string;
}

const stages: Stage[] = [
	{
		num: '01',
		title: 'Resume Screen',
		subtitle: 'HR + Hiring Manager 联手筛',
		duration: '5-10 秒 / 份',
		what: 'Skills section 关键词命中 · 项目量化指标 · GitHub 活跃度',
		howDie: ['通用模板', '"AI coding assistance"', '无量化指标', '无 GitHub'],
		pass: 15,
		width: 100,
		color: colors.p1,
	},
	{
		num: '02',
		title: 'LLM 基础 + 项目深挖',
		subtitle: '技术一面，1 小时',
		duration: '60-90 min',
		what: '50% 简历项目深挖 · 30% LLM 基础概念 · 20% Coding',
		howDie: ['项目说不出 metric', 'RAG 跟 fine-tune 分不清', '没用过 eval 工具'],
		pass: 30,
		width: 84,
		color: colors.p3,
	},
	{
		num: '03',
		title: 'System Design with LLM',
		subtitle: '二面，1 小时',
		duration: '60 min',
		what: '从 0 设计一个 LLM 应用：cost / scale / safety / fallback',
		howDie: ['只画前端图', '没考虑 cost', '不知道 prompt caching'],
		classics: [
			'RAG 文档问答 (Notion AI / Glean)',
			'多 Agents 系统如何实现共享记忆',
			'AI 客服 Bot (Klarna / Intercom Fin)',
			'Code Assistant (Copilot / Cursor)',
			'LLM Gateway + Eval (LiteLLM / Helicone)',
			'AI Search 引擎 (Perplexity)',
		],
		pass: 40,
		width: 68,
		color: colors.p5,
	},
	{
		num: '04',
		title: 'Coding',
		subtitle: '三面或并入二面，1 小时',
		duration: '45-60 min',
		what: '写一个简单 LLM 集成（不用框架）· 实现 retrieval · Function calling',
		howDie: ['只会调 LangChain 高级 API', '不知道底层在干嘛'],
		pass: 50,
		width: 52,
		color: colors.p6,
	},
	{
		num: '05',
		title: 'Behavioral + Culture Fit',
		subtitle: '最后一面，1 小时',
		duration: '45 min',
		what: '合作 · 失败 · 学习 · 价值观',
		howDie: ['套话连篇', '完全没准备', '跟 JD 不匹配'],
		pass: 60,
		width: 36,
		color: colors.p8,
	},
];

export default function S23_InterviewPipeline() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{
				width: '94%', maxWidth: 1440, height: '90%', padding: '24px 20px',
				display: 'flex', flexDirection: 'column', gap: 14,
			}}>
				{/* 标题 */}
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ textAlign: 'center' }}
				>
					<span style={{
						padding: '4px 14px', background: colors.red, color: colors.white,
						fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, letterSpacing: 2,
						border, boxShadow: shadowSm,
					}}>
						MODULE 4 · 面试
					</span>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: '44px', fontWeight: 900,
						lineHeight: 1.1, letterSpacing: -1, margin: '10px 0 4px',
					}}>
						AI Engineer 面试 · <span style={{
							display: 'inline-block', padding: '0 12px', background: colors.yellow,
							border, boxShadow: shadowSm, transform: 'rotate(-1deg)',
						}}>5 环节漏斗</span>
					</h2>
					<p style={{ fontSize: 14, color: '#555', fontWeight: 600, margin: 0 }}>
						每层通过率相乘 → 最终 Offer 率 ≈ <b style={{ color: colors.red }}>1%</b>。每层都必须准备。
					</p>
				</motion.div>

				{/* 🚨 面试核心定义 */}
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.15 }}
					style={{
						margin: '10px auto 14px',
						padding: '10px 18px',
						background: colors.dark,
						color: colors.white,
						border,
						boxShadow: `5px 5px 0 ${colors.red}`,
						maxWidth: 1100,
						display: 'flex',
						alignItems: 'center',
						gap: 14,
						flexWrap: 'wrap',
						justifyContent: 'center',
					}}
				>
					<span style={{ fontFamily: fonts.mono, fontSize: 11.5, fontWeight: 900, color: colors.yellow, letterSpacing: 1, padding: '3px 9px', background: 'rgba(255,255,255,0.08)', border: `2px solid ${colors.yellow}` }}>
						🚨 面试核心定义
					</span>
					<span style={{ fontFamily: fonts.heading, fontSize: 16, fontWeight: 800, lineHeight: 1.35, letterSpacing: -0.2 }}>
						没有 <span style={{ color: colors.yellow }}>AI Engineering 项目经验</span>，几乎非常容易问出问题 ——
						<span style={{ background: colors.red, color: colors.white, padding: '2px 8px', margin: '0 4px' }}>一问就知道会不会</span>
						这是面试唯一过滤器
					</span>
				</motion.div>

				{/* 漏斗 5 段 */}
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }}
					style={{
						display: 'flex', flexDirection: 'column', gap: 8, flex: 1,
						alignItems: 'center', justifyContent: 'center',
					}}
				>
					{stages.map((s) => (
						<motion.div
							key={s.num}
							variants={{
								hidden: { opacity: 0, x: -30 },
								visible: { opacity: 1, x: 0 },
							}}
							transition={{ duration: 0.35, ease: 'easeOut' }}
							style={{
								width: `${s.width}%`,
								background: colors.white,
								border, boxShadow: shadow,
								display: 'grid',
								gridTemplateColumns: '60px 1fr 80px',
								alignItems: 'center',
								overflow: 'hidden',
							}}
						>
							{/* 左：编号块 */}
							<div style={{
								background: s.color, color: colors.white,
								padding: '12px 0', textAlign: 'center',
								borderRight: `3px solid ${colors.black}`,
								fontFamily: fonts.mono, fontSize: 22, fontWeight: 900,
								height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
							}}>
								{s.num}
							</div>
							{/* 中：内容 */}
							<div style={{ padding: '8px 14px' }}>
								<div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 2 }}>
									<span style={{ fontFamily: fonts.heading, fontSize: 18, fontWeight: 900 }}>
										{s.title}
									</span>
									<span style={{ fontFamily: fonts.mono, fontSize: 11, color: '#888', fontWeight: 700 }}>
										{s.duration}
									</span>
								</div>
								<div style={{ fontSize: 12, color: '#555', marginBottom: 4, fontWeight: 600 }}>
									{s.subtitle} · {s.what}
								</div>
								<div style={{ fontSize: 11, color: colors.red, fontWeight: 700 }}>
									✗ 死法：{s.howDie.join(' · ')}
								</div>
								{s.classics && (
									<div style={{ marginTop: 6, padding: '6px 10px', background: '#fff8d6', border: `2px solid ${colors.yellow}`, fontSize: 13, color: '#222', fontWeight: 700, lineHeight: 1.5 }}>
										<span style={{ color: colors.dark, fontWeight: 900, marginRight: 6 }}>📋 经典题（后面单独讲）：</span>
										{s.classics.join(' · ')}
									</div>
								)}
							</div>
							{/* 右：通过率 */}
							<div style={{
								background: '#f7f7f7',
								borderLeft: `2px solid ${colors.black}`,
								padding: '8px 4px', textAlign: 'center',
								height: '100%', display: 'flex', flexDirection: 'column',
								alignItems: 'center', justifyContent: 'center',
							}}>
								<div style={{
									fontFamily: fonts.mono, fontSize: 24, fontWeight: 900,
									color: s.color, lineHeight: 1,
								}}>
									{s.pass}%
								</div>
								<div style={{ fontSize: 9, color: '#666', fontWeight: 700, marginTop: 2, letterSpacing: 0.5 }}>
									PASS RATE
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* 底部落点 */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.9 }}
					style={{
						display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
						padding: '8px 16px', background: colors.dark, color: colors.white,
						border, boxShadow: shadowSm,
					}}
				>
					<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>
						15% × 30% × 40% × 50% × 60% ≈
						<span style={{ color: colors.yellow, margin: '0 6px' }}>0.5%-1%</span>
						最终 Offer 率 · 每层都准备 = 真正拉开差距
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}
