import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

interface QItem {
	num: string;
	icon: string;
	topic: string;
	color: string;
	q: string;
	a: string;
	tools: string[];
}

const items: QItem[] = [
	{
		num: '01',
		icon: '🧠',
		topic: 'Context Engineering',
		color: colors.p1,
		q: 'How do you manage long-running conversations?',
		a: 'sliding window + summarization + Mem0 long-term + critical info anchoring（放 system prompt）',
		tools: ['Mem0', 'LangGraph state', 'Letta (MemGPT)'],
	},
	{
		num: '02',
		icon: '🧪',
		topic: 'Eval',
		color: colors.p3,
		q: 'How do you eval LLM output before shipping prompt changes?',
		a: '100-query golden set + RAGAS metric + LLM-as-judge + edge case 人审 + CI nightly + 不过 gate 不 merge',
		tools: ['RAGAS', 'DeepEval', 'Promptfoo', 'LangSmith eval'],
	},
	{
		num: '03',
		icon: '🤖',
		topic: 'Agent',
		color: colors.p5,
		q: 'Single vs multi-agent, how do you choose?',
		a: '线性任务 → single + tools；并行/协作 → multi (LangGraph)；3-5 agent 是甜蜜区，> 7 开始混乱',
		tools: ['LangGraph', 'OpenAI Agent SDK', 'Claude Agent SDK', 'CrewAI'],
	},
	{
		num: '04',
		icon: '🦾',
		topic: 'Harness Engineering',
		color: colors.p7,
		q: 'What is a harness in agentic system context?',
		a: 'harness = Claude Code / Cursor 这种系统的"骨架" — tool loop + hook system + memory + permission + sandbox + skills',
		tools: ['Claude Agent SDK', 'LangGraph 自建', 'ADLC'],
	},
	{
		num: '05',
		icon: '🛡️',
		topic: '权限 / Safety / Sandbox',
		color: colors.p8,
		q: 'How do you sandbox an agent that has tool use?',
		a: '白名单 tool / 路径白名单 / read-only 模式 / 人工 approval gate / cost cap / docker 隔离',
		tools: ['Anthropic Computer Use (docker)', 'Claude Code permission', 'E2B sandbox'],
	},
	{
		num: '06',
		icon: '🚀',
		topic: '部署 / Production Rollout',
		color: colors.red,
		q: 'How do you deploy LLM features to prod safely?',
		a: 'shadow mode 1w → canary 5% 1w → A/B vs baseline → 全量；+ gateway + trace + cost + circuit breaker + fallback',
		tools: ['LiteLLM', 'LangSmith', 'Helicone', 'Phoenix (Arize)'],
	},
];

export default function S24c_AiEngineeringAdvanced() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1400, height: '92%', padding: '18px 28px', display: 'flex', flexDirection: 'column', gap: 10 }}>
				{/* 标题 */}
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
						<span style={{ padding: '4px 12px', background: colors.dark, color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, border, boxShadow: `3px 3px 0 ${colors.red}` }}>
							AI ENGINEERING · ADVANCED
						</span>
						<span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, color: '#666' }}>
							senior 级 6 题 · 任何一题挂了基本卡 senior
						</span>
					</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: '36px', fontWeight: 900, letterSpacing: -1, lineHeight: 1.1 }}>
						AI Engineering 进阶 ·{' '}
						<span style={{ background: colors.yellow, padding: '0 10px', border, boxShadow: `4px 4px 0 ${colors.black}`, display: 'inline-block', transform: 'rotate(-1deg)' }}>
							senior 级 6 题
						</span>
					</h2>
				</motion.div>

				{/* 6 张子卡 — 3×2 grid */}
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: 10, flex: 1, minHeight: 0 }}>
					{items.map((it, i) => (
						<motion.div
							key={it.num}
							initial={{ opacity: 0, y: 20, scale: 0.95 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							transition={{ delay: 0.1 + i * 0.06, duration: 0.35 }}
							style={{ background: colors.white, border, boxShadow: shadowSm, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
						>
							<div style={{ background: it.color, color: colors.white, padding: '6px 10px', borderBottom: `3px solid ${colors.black}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
								<div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
									<span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 900, padding: '2px 7px', background: colors.black, color: colors.white }}>Q{it.num}</span>
									<span style={{ fontSize: 16, lineHeight: 1 }}>{it.icon}</span>
									<span style={{ fontFamily: fonts.heading, fontSize: 14, fontWeight: 900 }}>{it.topic}</span>
								</div>
							</div>
							<div style={{ padding: '8px 10px', display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
								<div>
									<div style={{ fontFamily: fonts.mono, fontSize: 9.5, fontWeight: 900, color: it.color, letterSpacing: 0.8, marginBottom: 2 }}>Q · 问</div>
									<div style={{ fontSize: 11.5, color: '#111', fontWeight: 700, lineHeight: 1.35, fontFamily: fonts.mono }}>"{it.q}"</div>
								</div>
								<div>
									<div style={{ fontFamily: fonts.mono, fontSize: 9.5, fontWeight: 900, color: it.color, letterSpacing: 0.8, marginBottom: 2 }}>A · 30s 答题骨架</div>
									<div style={{ fontSize: 11, color: '#222', lineHeight: 1.4, fontWeight: 500 }}>{it.a}</div>
								</div>
								<div style={{ marginTop: 'auto', background: colors.warmBg, padding: '5px 7px', borderTop: `2px dashed #ccc` }}>
									<div style={{ fontFamily: fonts.mono, fontSize: 9, fontWeight: 900, color: '#555', letterSpacing: 0.8, marginBottom: 2 }}>关键工具</div>
									<div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
										{it.tools.map((t) => (
											<span key={t} style={{ padding: '1px 6px', background: colors.dark, color: colors.white, fontFamily: fonts.mono, fontSize: 9.5, fontWeight: 700 }}>
												{t}
											</span>
										))}
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* 落点 */}
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} style={{ textAlign: 'center' }}>
					<span style={{ display: 'inline-flex', padding: '8px 18px', background: colors.red, color: colors.white, fontFamily: fonts.heading, fontSize: 15, fontWeight: 800, border, boxShadow: `4px 4px 0 ${colors.black}` }}>
						这 6 题任何一题答得糟 · senior 这关基本挂了
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}

export const __unused = shadow;
