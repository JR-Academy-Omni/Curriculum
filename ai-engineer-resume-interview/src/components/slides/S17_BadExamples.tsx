import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';

/**
 * S17 — 3 个真实烂经验 case
 * 学员 80% 转 AI 都这么写：堆 buzzword / 无指标 / 模板化
 */

interface BadCase {
	num: string;
	tag: string;
	text: string;
	issues: string[];
}

const cases: BadCase[] = [
	{
		num: '01',
		tag: '堆 buzzword · 80% 转 AI 的人这样写',
		text: `Implemented AI-powered solutions using ChatGPT
and LangChain to automate business processes and
improve efficiency, leveraging state-of-the-art
LLM technology for enterprise use cases.`,
		issues: [
			'没动词强度（"Implemented" + 万能词）',
			'"AI-powered" 万能词，毫无信息量',
			'没具体技术（哪个模型 / 哪条 chain / 哪类任务）',
			'"improve efficiency" 完全无量化',
			'"state-of-the-art" 是营销话不是工程话',
		],
	},
	{
		num: '02',
		tag: '无指标 · 外行 HR 都能看穿',
		text: `Built a chatbot using OpenAI API.
Integrated with company database.
Deployed to production.`,
		issues: [
			'没说用什么模型 / 什么 retrieval 方式',
			'没说处理什么场景（客服？销售？文档？）',
			'没说量级（多少 QPS / 多少用户 / 多少 query）',
			'没说成果（deflection rate？accuracy？）',
			'一句话三个动作太碎，看起来像 to-do list',
		],
	},
	{
		num: '03',
		tag: '模板化 · 一看就 AI 写的',
		text: `In today's rapidly evolving AI landscape,
I leveraged cutting-edge LLM technologies to
drive transformative business outcomes through
innovative AI solutions.`,
		issues: [
			'整句删掉读者损失 0 信息',
			'完全套话，换个领域可以原样复用',
			'AI 味检测分必 90+，HR 一眼看穿',
			'HR 翻 30 份简历看到第三句这种直接 reject',
			'没有任何动词 / 技术 / 业务 / 指标 — 4 变量全空',
		],
	},
];

export default function S17_BadExamples() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '96%', maxWidth: 1420, height: '94%', padding: '20px 28px', display: 'flex', flexDirection: 'column' }}>
				{/* 顶部 */}
				<motion.div
					initial={{ opacity: 0, y: -16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}
				>
					<span style={{ padding: '5px 12px', background: colors.red, color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, border, boxShadow: `3px 3px 0 ${colors.black}`, letterSpacing: 0.5 }}>
						BAD EXAMPLES · 真实简历
					</span>
					<span style={{ fontFamily: fonts.heading, fontSize: 28, fontWeight: 900, color: colors.black, letterSpacing: -0.5 }}>
						真实简历 · 3 个一看就被刷的描述
					</span>
				</motion.div>

				{/* 3 cases 横向 grid */}
				<div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, minHeight: 0 }}>
					{cases.map((c, i) => (
						<BadCaseCard key={c.num} c={c} delay={0.2 + i * 0.1} />
					))}
				</div>

				{/* 底部落点 */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6, duration: 0.4 }}
					style={{
						marginTop: 14, padding: '12px 18px',
						background: colors.dark, border, boxShadow: `5px 5px 0 ${colors.red}`,
						display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
					}}
				>
					<span style={{ fontSize: 22 }}>🚨</span>
					<span style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 900, color: colors.white, letterSpacing: -0.3 }}>
						3 种都很常见 — 你的简历是哪一种？
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}

function BadCaseCard({ c, delay }: { c: BadCase; delay: number }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 18 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay, duration: 0.4 }}
			style={{
				background: colors.white,
				border: `3px solid ${colors.red}`,
				boxShadow: `5px 5px 0 ${colors.red}`,
				padding: '14px 14px',
				display: 'flex', flexDirection: 'column', minHeight: 0,
			}}
		>
			{/* 编号 + tag */}
			<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
				<div style={{
					width: 32, height: 32, background: colors.red, color: colors.white,
					display: 'flex', alignItems: 'center', justifyContent: 'center',
					fontFamily: fonts.heading, fontSize: 15, fontWeight: 900,
					border: `2px solid ${colors.black}`,
				}}>
					{c.num}
				</div>
				<div style={{ fontFamily: fonts.mono, fontSize: 11, color: colors.red, fontWeight: 900, letterSpacing: 0.5, lineHeight: 1.2 }}>
					{c.tag}
				</div>
			</div>

			{/* ❌ Bad code block */}
			<div style={{
				background: '#fff5f5', border: `2px solid ${colors.red}`, padding: '10px 12px', marginBottom: 10,
				borderLeft: `6px solid ${colors.red}`,
			}}>
				<div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
					<span style={{ fontSize: 14 }}>❌</span>
					<span style={{ fontFamily: fonts.mono, fontSize: 10, color: '#b71c1c', fontWeight: 900, letterSpacing: 1 }}>
						BEFORE · DO NOT WRITE
					</span>
				</div>
				<pre style={{
					fontFamily: fonts.mono, fontSize: 11.5, color: '#333', fontWeight: 600,
					lineHeight: 1.4, whiteSpace: 'pre-wrap', margin: 0,
				}}>
					{c.text}
				</pre>
			</div>

			{/* 5 问题 */}
			<div style={{ flex: 1 }}>
				<div style={{ fontFamily: fonts.mono, fontSize: 10, color: colors.red, fontWeight: 900, letterSpacing: 1, marginBottom: 6 }}>
					5 个被刷的理由
				</div>
				<ol style={{ paddingLeft: 0, margin: 0, listStyle: 'none' }}>
					{c.issues.map((iss, idx) => (
						<li key={idx} style={{ display: 'flex', gap: 6, marginBottom: 5, fontFamily: fonts.body, fontSize: 11.5, color: colors.black, fontWeight: 600, lineHeight: 1.35 }}>
							<span style={{ color: colors.red, fontWeight: 900, flexShrink: 0 }}>
								{['①', '②', '③', '④', '⑤'][idx]}
							</span>
							<span>{iss}</span>
						</li>
					))}
				</ol>
			</div>
		</motion.div>
	);
}
