import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

const variants = [
	'"How do you use AI coding tools in your daily work?"',
	'"Walk me through your AI-assisted dev process"',
	'"你日常怎么用 AI 写代码？"',
];

const layers = [
	{
		num: '01',
		title: '主力工具',
		color: colors.p1,
		items: [
			{ k: 'Coding Agent', v: 'Claude Code（主力 · agent loop / skills / hooks） · Codex CLI' },
			{ k: '多 Agent 并行', v: 'tmux 多窗口 · 主 agent 协调 + subagent 后台跑 · 同时 3-5 个任务推进' },
			{ k: '模型路由', v: 'Opus 复杂规划 · Sonnet 主力执行 · Haiku 批量小任务' },
			{ k: '✗ 不推荐', v: 'Cursor / Copilot 自动补全模式 — 是工具不是 agent，不展示工程深度' },
		],
	},
	{
		num: '02',
		title: '需求分析 · ADLC',
		color: colors.p3,
		items: [
			{ k: 'ADLC 5 步 ⭐', v: 'Ask → Explore → Plan → Code → Verify（每步都 gate · 不跳步 · 见下方详解）' },
			{ k: 'Spec-driven', v: '中大型功能：先写 PRD / 大纲 sign-off → AI 起脚手架 → 人 review' },
			{ k: 'TDD', v: '算法 / 明确 I/O：先写 test 再让 agent 实现 → test 通过即合格' },
			{ k: 'PRD 拆解', v: '新功能：用户故事 → task 矩阵 → 每个 task 独立 PRD' },
			{ k: '✗ 反面', v: '直接 "帮我写 X" — 跳 Ask + Explore → 改错方向 → 重写' },
		],
	},
	{
		num: '03',
		title: '上下文工程 ⭐',
		color: colors.p5,
		seniorMark: true,
		items: [
			{ k: 'CLAUDE.md 规划', v: '项目结构 + 命令清单 + 子模块文档索引（agent 自动读）' },
			{ k: 'Rules / 铁律', v: '硬约束："永远不要 X · 强制 Y" + 历史错误备案 + 红线' },
			{ k: 'Design System', v: 'UI tokens / 颜色 / 字体 / 间距 / 组件命名规则 → agent 复用' },
			{ k: 'Skills / 子命令', v: '/test /refactor /review 子命令封装高频任务' },
			{ k: 'MCP Server', v: '内部 API / DB schema / Design System 暴露给 agent' },
		],
	},
	{
		num: '04',
		title: '质量保证',
		color: colors.red,
		items: [
			{ k: '绝不盲信 diff', v: 'agent 写的每行都要 review' },
			{ k: 'Type-check + Test', v: 'CI 红了不 merge · 强制 gate · 不绕过 hook' },
			{ k: 'Hooks 自动跑', v: 'pre-commit type-check / pre-push test 强制 gate' },
			{ k: '追溯 + Eval', v: 'Git blame 看 agent vs 人写 · agent task 成功率 / token 成本' },
		],
	},
];

const flowSteps = [
	{ n: '1', k: 'Ask', sub: 'Define Result', v: '定义结果 · 衡量标准 · success criteria · 没想清楚不动手', color: colors.p1 },
	{ n: '2', k: 'Explore', sub: 'Read / Run', v: '读现有代码 · 跑 demo · 看 schema · 理解约束和上下文', color: colors.p3 },
	{ n: '3', k: 'Plan', sub: 'Strategy', v: '拆 task · 写 spec / plan.md · 决定选型 · 风险评估 · sign-off', color: colors.p5 },
	{ n: '4', k: 'Code', sub: 'Implement', v: 'agent 按 plan 实现 · 不脱稿 · 边写边 commit · 主+子分工', color: colors.p7 },
	{ n: '5', k: 'Verify', sub: 'Test', v: '跑 test + eval · review diff · 检查回归 · gate 不过不 merge', color: colors.red },
];

export default function S23d_AiCodingWorkflow() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1400, height: '92%', padding: '18px 28px', display: 'flex', flexDirection: 'column', gap: 10 }}>
				{/* 标题 */}
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
						<span style={{ padding: '4px 12px', background: colors.dark, color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, border, boxShadow: `3px 3px 0 ${colors.red}` }}>
							2026 · ALMOST ALWAYS ASKED
						</span>
					</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: '36px', fontWeight: 900, letterSpacing: -1, lineHeight: 1.1 }}>
						AI Coding Workflow ·{' '}
						<span style={{ background: colors.yellow, padding: '0 10px', border, boxShadow: `4px 4px 0 ${colors.black}`, display: 'inline-block', transform: 'rotate(-1deg)' }}>
							2026 几乎必问的一题
						</span>
					</h2>
				</motion.div>

				{/* 提问 + 烂答 横排 */}
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 12 }}>
					<div style={{ background: colors.white, border, boxShadow: shadowSm, padding: '8px 12px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 10, fontWeight: 900, color: '#666', letterSpacing: 1, marginBottom: 4 }}>提问变体</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
							{variants.map((v, i) => (
								<div key={i} style={{ fontSize: 12, color: '#222', fontFamily: fonts.mono, lineHeight: 1.45 }}>{v}</div>
							))}
						</div>
					</div>
					<div style={{ background: '#fff5f5', border: `3px solid ${colors.red}`, boxShadow: `4px 4px 0 ${colors.red}`, padding: '8px 12px' }}>
						<div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
							<span style={{ padding: '2px 8px', background: colors.red, color: colors.white, fontFamily: fonts.mono, fontSize: 10, fontWeight: 900 }}>❌ 烂答</span>
							<span style={{ fontSize: 11, fontFamily: fonts.mono, color: '#333' }}>"我用 Copilot 自动补全，写得比手快多了。"</span>
						</div>
						<div style={{ fontSize: 11, color: colors.red, fontWeight: 700, lineHeight: 1.35 }}>
							① 没 ADLC · ② 没 CLAUDE.md · ③ 没多 Agent 编排 — 还停留在 2023
						</div>
					</div>
				</motion.div>

				{/* 4 层框架 */}
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, flex: 1, minHeight: 0 }}>
					{layers.map((l, i) => (
						<motion.div
							key={l.num}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 + i * 0.06 }}
							style={{ background: colors.white, border, boxShadow: shadowSm, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}
						>
							{l.seniorMark && (
								<div style={{ position: 'absolute', top: 4, right: -2, padding: '2px 8px', background: colors.red, color: colors.yellow, fontFamily: fonts.mono, fontSize: 9, fontWeight: 900, letterSpacing: 1, border: `2px solid ${colors.black}`, transform: 'rotate(3deg)', zIndex: 2 }}>
									SENIOR 分水岭
								</div>
							)}
							<div style={{ background: l.color, color: colors.white, padding: '6px 10px', borderBottom: `3px solid ${colors.black}`, display: 'flex', alignItems: 'center', gap: 6 }}>
								<span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 900, padding: '2px 7px', background: colors.black, color: colors.white }}>层 {l.num}</span>
								<span style={{ fontFamily: fonts.heading, fontSize: 14, fontWeight: 900 }}>{l.title}</span>
							</div>
							<div style={{ padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
								{l.items.map((it, j) => (
									<div key={j}>
										<div style={{ fontFamily: fonts.mono, fontSize: 10, fontWeight: 900, color: l.color, letterSpacing: 0.5 }}>{it.k}</div>
										<div style={{ fontSize: 11, color: '#222', lineHeight: 1.4, fontWeight: 500 }}>{it.v}</div>
									</div>
								))}
							</div>
						</motion.div>
					))}
				</div>

				{/* AI Coding 5 步流程详解 */}
				<motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 11.5, fontWeight: 800, color: '#444', marginBottom: 5, letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 8 }}>
						⭐ AI Coding 标准 5 步流程
						<span style={{ fontSize: 10, color: '#888' }}>· 每步都不能跳 · 顺序错 = 改错方向 = 重写</span>
					</div>
					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8 }}>
						{flowSteps.map((s, i) => (
							<div key={s.n} style={{ background: colors.white, border, boxShadow: `3px 3px 0 ${colors.black}`, padding: '6px 9px', display: 'flex', flexDirection: 'column', gap: 2, position: 'relative' }}>
								<div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
									<span style={{ fontFamily: fonts.heading, fontSize: 16, fontWeight: 900, color: colors.white, background: s.color, width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `2px solid ${colors.black}`, flexShrink: 0 }}>
										{s.n}
									</span>
									<div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
										<span style={{ fontFamily: fonts.heading, fontSize: 13, fontWeight: 900, color: colors.black, lineHeight: 1 }}>{s.k}</span>
										<span style={{ fontFamily: fonts.mono, fontSize: 9, color: s.color, fontWeight: 800, letterSpacing: 0.3 }}>{s.sub}</span>
									</div>
								</div>
								<span style={{ fontSize: 10.5, color: '#333', lineHeight: 1.35, marginTop: 2 }}>{s.v}</span>
								{i < flowSteps.length - 1 && (
									<span style={{ position: 'absolute', right: -8, top: '50%', transform: 'translateY(-50%)', fontFamily: fonts.heading, fontSize: 16, fontWeight: 900, color: colors.black, zIndex: 1 }}>→</span>
								)}
							</div>
						))}
					</div>
				</motion.div>

				{/* 落点 + 红线 yes/no */}
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
					<div style={{ background: colors.red, color: colors.white, border, boxShadow: `4px 4px 0 ${colors.black}`, padding: '8px 14px' }}>
						<span style={{ fontFamily: fonts.mono, fontSize: 10, fontWeight: 900, color: colors.yellow, letterSpacing: 1, marginRight: 8 }}>🚨 面试答题红线</span>
						<span style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 700 }}>
							禁止 "Yes / No" 单字回答 — 不是 engineer 该有的回答。每题至少 <strong style={{ background: colors.yellow, color: colors.black, padding: '0 6px' }}>30 秒</strong> · 给框架 + 工具 + 量化 + 项目例子
						</span>
					</div>
					<div style={{ background: colors.black, color: colors.white, border, boxShadow: `4px 4px 0 ${colors.yellow}`, padding: '8px 14px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<span style={{ fontFamily: fonts.heading, fontSize: 14, fontWeight: 800 }}>
							这个答题展示的不是工具 · 是你的<span style={{ color: colors.yellow, margin: '0 6px' }}>工程纪律</span>
						</span>
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}

export const __unused = shadow;
