import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

interface IFaq {
	q: string;
	a: string;
}

const faqs: IFaq[] = [
	{
		q: '我是 IT 在校生，完全没碰过 AI 能跟上吗？',
		a: '这门课面向 IT / CS 在校生和毕业生，假设你有基本编程概念（写过循环、函数、用过 Git）。M7 AI Foundations 从 Prompt 工程开始讲，到 M8 再落到 RAG / Agent / MCP，不要求任何 AI 前置知识。',
	},
	{
		q: '和 AI Engineer Bootcamp 有什么区别？',
		a: 'AI Engineer Bootcamp 是深度 AI 工程班（面向资深开发者做 AI 方向转型）；这门是 Full-Stack + AI 就业课（面向 IT 在校生 / 毕业生第一份 offer）。AI 模块是 AI Engineer 班的工程化精华版。',
	},
	{
		q: '完全零基础能来吗？',
		a: '不建议。零基础请先走 AI Programming（Cursor AI 编程实战课）或 AI 必修课打底。本课默认你能独立写小程序、跑 Git、看得懂 JS/Python 语法。',
	},
	{
		q: '28 期的内容还能看吗？',
		a: '能。28 期 195 节录播全部保留，作为 V30 的基础 + 扩展材料。承接 28 期 Node.js 方向 + 保留 CareerMate 全栈项目链路，同时加入 2026 新模块（Vibe Coding / Agent / MCP）。',
	},
	{
		q: '6 个月 · 278 节课，我学得完吗？',
		a: '节奏：16 周主技术课 + 8 周 P3 真实项目 + Career 冲刺。每周固定直播 + 录播 + Lab，完不成可以延期到下一期。',
	},
	{
		q: 'P3 真实项目是什么？',
		a: '和 AI Engineer 班共用 P3 池子 — 真实企业客户付费项目，8-12 周开发，最终 Demo Day（Meta / AWS / Canva 招聘方在场），写进简历 = 真实工作经验。',
	},
];

export default function S22_Faq() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1400, padding: '24px 28px', display: 'flex', flexDirection: 'column' }}>
				<motion.div
					initial={{ opacity: 0, y: -16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 18 }}
				>
					<div style={{ display: 'inline-block', padding: '5px 14px', background: colors.dark, color: colors.yellow, fontFamily: fonts.mono, fontSize: 15, fontWeight: 900, letterSpacing: 2, border, boxShadow: shadowSm, marginBottom: 12 }}>
						FAQ · 常见问题
					</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: '46px', fontWeight: 900, lineHeight: 1.1, letterSpacing: -1, margin: 0 }}>
						你可能会问的{' '}
						<span style={{ display: 'inline-block', padding: '0 12px', background: colors.yellow, border, boxShadow: `4px 4px 0 ${colors.black}`, transform: 'rotate(-1deg)' }}>
							6 个问题
						</span>
					</h2>
				</motion.div>

				<motion.div
					initial="hidden"
					animate="visible"
					variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } } }}
					style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}
				>
					{faqs.map((f, i) => (
						<motion.div
							key={f.q}
							variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
							transition={{ duration: 0.4 }}
							style={{ background: colors.white, border, boxShadow: shadow, padding: '14px 16px' }}
						>
							<div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
								<div style={{ width: 26, height: 26, background: colors.red, color: colors.white, border: `2px solid ${colors.black}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.mono, fontSize: 15, fontWeight: 900, flexShrink: 0 }}>
									Q{i + 1}
								</div>
								<div style={{ fontFamily: fonts.heading, fontSize: '20px', fontWeight: 900, color: colors.black, letterSpacing: -0.3, lineHeight: 1.3 }}>
									{f.q}
								</div>
							</div>
							<div style={{ fontFamily: fonts.body, fontSize: 16, color: '#333', fontWeight: 500, lineHeight: 1.5, paddingLeft: 36 }}>
								{f.a}
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</Slide>
	);
}
