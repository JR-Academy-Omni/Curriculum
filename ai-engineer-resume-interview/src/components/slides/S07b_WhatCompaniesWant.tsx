import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';

interface Trait {
	num: string;
	title: string;
	tagline: string;
	good: string[];
	bad: string;
	jd: string;
	bg: string;
	accent: string;
}

const traits: Trait[] = [
	{
		num: '01',
		title: 'AI Coding 能力',
		tagline: '⚡ 基础门槛 · 不够免谈',
		good: [
			'Cursor / Claude Code / Aider 用成日常生产力武器，不是"听说挺好用"',
			'写过自己的 CLAUDE.md / Skill / MCP server / hook',
			'看到新 AI Coding 工具 1 天跑通 hello world',
		],
		bad: '还在用 GitHub Copilot 自动补全 / 没听过 CLAUDE.md',
		jd: '"Power user of AI coding tools, contribute to internal AI tooling..."',
		bg: colors.red,
		accent: colors.yellow,
	},
	{
		num: '02',
		title: '业务嗅觉',
		tagline: '不只会写代码',
		good: [
			'看到业务问题能立刻判断"LLM 行不行 / cost 划不划算"',
			'能跟产品 / 销售 / 客服 / 法务把模糊需求翻译成 prompt',
		],
		bad: '拿到任务才动手 / 不质疑需求 / 不算 cost',
		jd: '"Partner with product to identify AI opportunities..."',
		bg: colors.yellow,
		accent: colors.red,
	},
	{
		num: '03',
		title: '工程纪律',
		tagline: '把 AI 当 production 系统',
		good: [
			'有 eval pipeline，不凭感觉调 prompt',
			'知道 cost / latency / hallucination rate 怎么测',
			'上 prod 走 shadow → canary → A/B → 全量',
		],
		bad: 'jupyter notebook 调通就直接发 prod',
		jd: '"Design eval frameworks, monitor production model quality..."',
		bg: colors.white,
		accent: colors.indigo,
	},
	{
		num: '04',
		title: 'Full Stack 落地',
		tagline: '一个人扛起 demo',
		good: [
			'前端 chat UI / 后端 API / 数据库选型 / 部署 Vercel / AWS 全包',
			'不用等 4 个团队配齐才能动',
		],
		bad: '"这部分需要前端帮忙"',
		jd: '"Build end-to-end AI features..."',
		bg: colors.white,
		accent: colors.teal,
	},
	{
		num: '05',
		title: '学习速度',
		tagline: '一周新 SDK 上手',
		good: [
			'LangGraph / LlamaIndex / MCP / Agent SDK 1-2 周一更',
			'新工具 1 天跑通 hello world，1 周做出 demo',
		],
		bad: '等公司组织培训 / 只会用最初学的那一个框架',
		jd: '"Stay current with rapidly evolving AI landscape..."',
		bg: colors.white,
		accent: colors.purple,
	},
];

export default function S07b_WhatCompaniesWant() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1500, height: '92%', padding: '20px 32px', display: 'flex', flexDirection: 'column' }}>
				{/* 顶部标签 */}
				<motion.div
					initial={{ opacity: 0, y: -16 }}
					animate={{ opacity: 1, y: 0 }}
					style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}
				>
					<span style={{ padding: '6px 14px', background: colors.dark, color: colors.white, fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, border, boxShadow: `3px 3px 0 ${colors.red}` }}>
						HIRING SIGNALS
					</span>
					<span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: '#666' }}>
						从 200+ 真实 JD 提炼
					</span>
				</motion.div>

				{/* 标题 */}
				<motion.h2
					initial={{ opacity: 0, x: -32 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.1 }}
					style={{ fontFamily: fonts.heading, fontSize: 42, fontWeight: 900, lineHeight: 1.15, letterSpacing: -1, marginBottom: 6 }}
				>
					企业到底想要什么样的 <span style={{ color: colors.red }}>AI Engineer？</span>
				</motion.h2>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.18 }}
					style={{ fontFamily: fonts.body, fontSize: 17, color: '#555', fontWeight: 500, marginBottom: 16 }}
				>
					从真实 JD 提炼的 <strong style={{ color: colors.black }}>5 大画像</strong> · #01 是 <strong style={{ background: colors.red, color: colors.white, padding: '2px 8px' }}>基础门槛 · 不够免谈</strong>
				</motion.p>

				{/* 5 张特征卡 — 3+2 布局 */}
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } } }}
					style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 14, flex: 1, minHeight: 0 }}
				>
					{traits.map((t, i) => {
						const isRed = t.bg === colors.red;
						const titleColor = isRed ? colors.white : colors.black;
						const bodyColor = isRed ? 'rgba(255,255,255,0.95)' : colors.black;
						const taglineColor = isRed ? colors.yellow : '#555';
						const badColor = isRed ? 'rgba(255,255,255,0.85)' : '#666';
						const badAccent = isRed ? colors.yellow : colors.red;
						const jdColor = isRed ? 'rgba(255,255,255,0.7)' : '#999';
						const jdBorder = isRed ? '1px dashed rgba(255,255,255,0.3)' : '1px dashed #ccc';
						// 前 3 张占 2 列；后 2 张占 3 列（3+2 居中布局）
						const colSpan = i < 3 ? 'span 2' : 'span 3';
						return (
							<motion.div
								key={t.num}
								variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
								transition={{ duration: 0.35, ease: 'easeOut' }}
								style={{
									gridColumn: colSpan,
									background: t.bg,
									border,
									boxShadow: shadowSm,
									padding: '16px 18px',
									display: 'flex',
									flexDirection: 'column',
									gap: 8,
									minWidth: 0,
								}}
							>
								<div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
									<span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: t.accent }}>{t.num}</span>
									<span style={{ fontFamily: fonts.heading, fontSize: 24, fontWeight: 900, letterSpacing: -0.5, color: titleColor }}>{t.title}</span>
								</div>
								<div style={{ fontFamily: fonts.body, fontSize: 15, fontWeight: 700, color: taglineColor }}>
									{t.tagline}
								</div>
								<ul style={{ listStyle: 'none', margin: 0, padding: 0, fontSize: 15, lineHeight: 1.5, color: bodyColor }}>
									{t.good.map((g, gi) => (
										<li key={gi} style={{ marginBottom: 5 }}>
											<span style={{ color: t.accent, fontWeight: 700 }}>✓ </span>{g}
										</li>
									))}
								</ul>
								<div style={{ fontFamily: fonts.body, fontSize: 13.5, color: badColor, lineHeight: 1.45, marginTop: 'auto' }}>
									<span style={{ color: badAccent, fontWeight: 700 }}>✗ 反面：</span>{t.bad}
								</div>
								<div style={{ fontFamily: fonts.mono, fontSize: 12, color: jdColor, lineHeight: 1.4, paddingTop: 5, borderTop: jdBorder }}>
									JD: {t.jd}
								</div>
							</motion.div>
						);
					})}
				</motion.div>

				{/* 底部红色警告卡 + 落点 */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.85 }}
					style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}
				>
					{/* 红警告卡 */}
					<div style={{ background: colors.red, color: colors.white, border, boxShadow: shadowSm, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 4 }}>
						<div style={{ fontFamily: fonts.heading, fontSize: 18, fontWeight: 900, letterSpacing: -0.3 }}>
							⚠ JD 里的 "5+ years experience" 不再是硬门槛
						</div>
						<div style={{ fontFamily: fonts.body, fontSize: 15, fontWeight: 600, lineHeight: 1.45 }}>
							更看你过去 <strong>18 个月</strong>有没有真正在 LLM production 上 ship 过东西 ——
							<strong style={{ background: colors.yellow, color: colors.black, padding: '2px 8px', marginLeft: 4 }}>
								3 个 production AI 项目 &gt; 5 年传统 SDE 经验
							</strong>
						</div>
					</div>

					{/* 落点 */}
					<div style={{ background: colors.dark, color: colors.white, border, boxShadow: `4px 4px 0 ${colors.yellow}`, padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: colors.yellow, marginBottom: 4 }}>
							→ 今晚的核心结论
						</div>
						<div style={{ fontFamily: fonts.heading, fontSize: 18, fontWeight: 900, lineHeight: 1.35, letterSpacing: -0.3 }}>
							你的简历要在 <span style={{ color: colors.yellow }}>8 秒内</span>让招聘官看到这 5 个特征中的<span style={{ color: colors.yellow }}>至少 3 个</span>。
						</div>
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
