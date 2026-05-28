import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

/**
 * S26d — System Design 加餐 #2: 多 Agents 系统如何实现共享记忆
 */

interface Step {
	num: string;
	title: string;
	time: string;
	color: string;
	bullets: string[];
}

const steps: Step[] = [
	{
		num: '01',
		title: '澄清需求',
		time: '5 min',
		color: colors.p1,
		bullets: [
			'5 个 agent 协作：planner / researcher / writer / reviewer / publisher',
			'每个 agent context window 单独有限 (200k token)',
			'需要共享：user profile · project history · 中间产物 · 决策日志',
			'跨 session 持久：用户明天来，agent 还记得昨天的对话',
			'多用户隔离：A 用户的记忆 ≠ B 用户的记忆',
		],
	},
	{
		num: '02',
		title: '分层记忆架构',
		time: '10 min',
		color: colors.p3,
		bullets: [
			'L1 · Working Memory: LangGraph state (in-process · agent 之间传消息 + 中间产物)',
			'L2 · Session Memory: Redis stream (跨 agent 实时同步 · TTL = 24h)',
			'L3 · Long-term Memory: Mem0 / pgvector (向量化用户偏好 + 项目历史)',
			'L4 · Episodic Memory: PostgreSQL 结构化日志 (audit + 可回溯决策链)',
			'Memory Router: 按 query 类型决定查哪一层 (LLM 分类 or 关键词路由)',
		],
	},
	{
		num: '03',
		title: '关键决策',
		time: '5 min',
		color: colors.p5,
		bullets: [
			'共享 protocol: 用 MCP Server 把 4 层 memory 暴露给所有 agent · 统一 API',
			'冲突解决: timestamp + agent_id · latest-wins + 冲突时升级到 reviewer agent',
			'GC 策略: L2 24h TTL · L3 用户偏好永久 · L4 90 天后归档冷存',
			'隐私: user_id 强制带在所有 memory key · row-level security on Postgres',
			'Eval: hallucination rate (LLM-as-judge) · memory hit rate · cross-agent consistency',
		],
	},
	{
		num: '04',
		title: '易踩雷',
		time: '5 min',
		color: colors.red,
		bullets: [
			'❌ 所有 memory 塞一个 vector DB → 检索质量崩 · 区分层级是关键',
			'❌ 没 user_id 前缀 → 跨用户记忆泄漏 = GDPR / 用户信任崩盘',
			'❌ Memory bloat → 一年后 pgvector 1TB · 检索 latency 飙升',
			'❌ 没冲突解决 → 5 个 agent 同时改一条记忆 = 数据脏掉',
			'❌ 把 LLM 当作 memory store → token 烧光 · 记忆不可控',
		],
	},
	{
		num: '05',
		title: '量化指标',
		time: '5 min',
		color: colors.p7,
		bullets: [
			'Memory retrieval p95: < 200ms (Redis ~ms · pgvector ~50ms · LLM router ~150ms)',
			'Inter-agent handoff latency: < 500ms (state sync + memory load)',
			'Hallucination rate: < 3% (LLM-as-judge on 100 golden cases)',
			'Memory hit rate: > 60% (有效复用避免重复 LLM 调用)',
			'Cross-session consistency: > 90% (同一用户问相似问题答案一致)',
		],
	},
];

export default function S26d_SystemDesignMultiAgentMemory() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1400, height: '92%', padding: '18px 26px', display: 'flex', flexDirection: 'column', gap: 10 }}>
				{/* 顶部 */}
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6, flexWrap: 'wrap' }}>
						<span style={{ padding: '4px 12px', background: colors.dark, color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, border, boxShadow: `3px 3px 0 ${colors.red}` }}>
							SYS DESIGN · 加餐 2
						</span>
						<span style={{ padding: '4px 10px', background: colors.yellow, color: colors.black, fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, border }}>
							对标：LangGraph · Mem0 · Letta (MemGPT)
						</span>
					</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: 34, fontWeight: 900, lineHeight: 1.1, letterSpacing: -1 }}>
						多 Agents 系统 · <span style={{ color: colors.red }}>共享记忆怎么设计</span>
					</h2>
				</motion.div>

				{/* 5 步骨架 */}
				<div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10, minHeight: 0 }}>
					{steps.map((s, i) => (
						<motion.div
							key={s.num}
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.1 + i * 0.06 }}
							style={{ background: colors.white, border, boxShadow: shadowSm, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
						>
							<div style={{ background: s.color, color: colors.white, padding: '8px 10px', borderBottom: `3px solid ${colors.black}` }}>
								<div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 2 }}>
									<span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 900 }}>{s.num}</span>
									<span style={{ fontFamily: fonts.mono, fontSize: 10, opacity: 0.85 }}>{s.time}</span>
								</div>
								<div style={{ fontFamily: fonts.heading, fontSize: 17, fontWeight: 900, letterSpacing: -0.3, lineHeight: 1.1 }}>
									{s.title}
								</div>
							</div>
							<div style={{ padding: '10px 12px', flex: 1 }}>
								<ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
									{s.bullets.map((b, j) => (
										<li key={j} style={{ fontSize: 12, lineHeight: 1.45, marginBottom: 5, color: colors.black, fontWeight: 600, display: 'flex', gap: 4 }}>
											<span style={{ color: s.color, fontWeight: 900, flexShrink: 0 }}>·</span>
											<span>{b}</span>
										</li>
									))}
								</ul>
							</div>
						</motion.div>
					))}
				</div>

				{/* 落点 */}
				<motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} style={{ background: colors.dark, color: colors.white, border, boxShadow: `4px 4px 0 ${colors.yellow}`, padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 900, color: colors.yellow, letterSpacing: 1 }}>核心考点</span>
					<span style={{ fontFamily: fonts.body, fontSize: 14, fontWeight: 700, lineHeight: 1.4 }}>
						能讲出 <strong style={{ color: colors.yellow }}>4 层 memory 分工</strong> + <strong style={{ color: colors.yellow }}>MCP 共享 protocol</strong> + <strong style={{ color: colors.yellow }}>冲突解决</strong> + <strong style={{ color: colors.yellow }}>GC + 隐私</strong> = 直接进 senior · 这题答对的人 ≤ 15%
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}

export const __unused = shadow;
