import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

// 观众定位：有工程背景的老学员 + 在职 SDE
// AI Adoption / Essentials / Builder 是 no-code 方向，不适合这门课，故不列出
const learnedCourses = [
	{ name: 'AI Web 全栈班', desc: 'JR 老学员 · Full-stack + AI 基础 · 离 AI Engineer 最近', color: colors.red, featured: true },
	{ name: '在职 SDE / Full-stack', desc: 'React · Node · Python · 已经在写生产代码', color: colors.indigo },
	{ name: 'ML Engineer / 数据工程师', desc: '懂模型原理 · 缺 LLM 应用与 Agent 工程化', color: colors.teal },
	{ name: '独立开发者 / Tech Lead', desc: '自己做产品 · 想把 AI 深度嵌进业务', color: colors.orange },
];

const gaps = [
	{
		tag: 'Context Engineering',
		body: 'Prompt 学了一堆，但 Context Engineering 这套系统设计你从没摸过',
	},
	{
		tag: 'RAG 工程化',
		body: 'RAG 原理懂，但 GraphRAG / Hybrid Search / RAG Eval 完全陌生',
	},
	{
		tag: 'Multi-Agent + MCP',
		body: '听过 Agent，但自己搭一个 Multi-Agent + MCP 集成的系统？做不到',
	},
];

export default function S04_PainWarm() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '92%', maxWidth: 1400, height: '88%', padding: '28px 30px', display: 'flex', flexDirection: 'column' }}>
				{/* 顶部：技术背景老学员 + 在职 SDE */}
				<motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 10 }}>
					<div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap', marginBottom: 4 }}>
						<div style={{ fontFamily: fonts.heading, fontSize: '22px', fontWeight: 800, color: colors.black }}>
							你可能是这几类背景 <span style={{ fontFamily: fonts.mono, fontSize: 14, color: '#888' }}>// 前提：会写代码</span>
						</div>
						<span style={{
							fontFamily: fonts.mono, fontSize: 10, fontWeight: 800,
							padding: '3px 8px', background: colors.dark, color: colors.yellow,
							letterSpacing: 0.5,
						}}>
							AI Engineer = Software Engineer · Python / Node.js (TS) + API 是硬门槛
						</span>
					</div>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
					{learnedCourses.map((c, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.1 + i * 0.08 }}
							style={{
								background: colors.white,
								border,
								boxShadow: c.featured ? `5px 5px 0 ${colors.red}` : shadowSm,
								padding: '12px 14px',
								borderTop: `8px solid ${c.color}`,
								position: 'relative',
							}}
						>
							{c.featured && (
								<div style={{
									position: 'absolute', top: -10, right: -8,
									padding: '2px 8px', background: colors.red, color: colors.white,
									fontFamily: fonts.mono, fontSize: 9, fontWeight: 900, letterSpacing: 0.5,
									border: `2px solid ${colors.black}`, boxShadow: `2px 2px 0 ${colors.black}`,
									transform: 'rotate(4deg)', zIndex: 2,
								}}>
									最近路径
								</div>
							)}
							<div style={{ display: 'inline-block', padding: '2px 8px', background: c.color, color: colors.white, fontFamily: fonts.mono, fontSize: 10, fontWeight: 800, marginBottom: 8 }}>
								✓ 已学
							</div>
							<div style={{ fontFamily: fonts.heading, fontSize: '17px', fontWeight: 800, color: colors.black, lineHeight: 1.25, marginBottom: 4 }}>
								{c.name}
							</div>
							<div style={{ fontSize: 12, color: '#666', lineHeight: 1.4 }}>
								{c.desc}
							</div>
						</motion.div>
					))}
				</div>

				{/* 中间：红色大箭头 + "但你仍然..." */}
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.5 }}
					style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, margin: '18px 0 14px' }}
				>
					<div style={{ fontFamily: fonts.heading, fontSize: '30px', fontWeight: 900, color: colors.red, letterSpacing: -0.5 }}>
						但你仍然
					</div>
					<motion.div
						animate={{ y: [0, 8, 0] }}
						transition={{ duration: 1.2, repeat: Infinity }}
						style={{ fontSize: '48px', color: colors.red, lineHeight: 1, fontWeight: 900 }}
					>
						↓
					</motion.div>
				</motion.div>

				{/* 下半：大 Card + 3 条 Gap */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.7 }}
					style={{
						background: colors.dark,
						border,
						boxShadow: shadow,
						padding: '22px 26px',
						flex: 1,
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<h3 style={{ fontFamily: fonts.heading, fontSize: '34px', fontWeight: 900, color: colors.white, letterSpacing: -0.8, lineHeight: 1.2, marginBottom: 18 }}>
						做不出真正的 <span style={{ background: colors.red, color: colors.white, padding: '0 10px', border: `3px solid ${colors.black}`, display: 'inline-block', transform: 'rotate(-1deg)' }}>AI Engineering</span> 工程作品
					</h3>

					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, flex: 1 }}>
						{gaps.map((g, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.9 + i * 0.12 }}
								style={{
									background: 'rgba(255,255,255,0.08)',
									border: `2px solid ${colors.yellow}`,
									padding: '14px 14px',
									color: colors.white,
								}}
							>
								<div style={{ display: 'inline-block', padding: '3px 10px', background: colors.yellow, color: colors.black, fontFamily: fonts.mono, fontWeight: 800, fontSize: 11, marginBottom: 10 }}>
									{g.tag}
								</div>
								<div style={{ fontSize: '15px', lineHeight: 1.55, fontWeight: 500 }}>
									{g.body}
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* 底部小字 */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.3 }}
					style={{ marginTop: 12, fontFamily: fonts.mono, fontSize: 13, color: '#555', textAlign: 'center', fontWeight: 600 }}
				>
					第五期要解决的，正是这个 <span style={{ color: colors.red, fontWeight: 800 }}>"会用 → 能做"</span> 的鸿沟
				</motion.div>
			</div>
		</Slide>
	);
}
