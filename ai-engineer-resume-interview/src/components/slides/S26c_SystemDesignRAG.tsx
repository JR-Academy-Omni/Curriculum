import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

/**
 * S26c — System Design 加餐 #1: RAG 文档问答 (Notion AI / Glean)
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
			'文档量：50k+ Notion/Drive 文档 · 每天新增 1k+',
			'用户：10k 员工 DAU · 平均每人 20 query/day',
			'权限：必须 ACL 隔离 — 每个用户只能搜到能访问的文档',
			'语言：中英混合 · 引用必须可点开原文跳转',
			'SLA：p95 < 1.5s · Recall@5 ≥ 85%',
		],
	},
	{
		num: '02',
		title: '高层架构',
		time: '10 min',
		color: colors.p3,
		bullets: [
			'Ingestion: webhook 监听 Notion/Drive → 增量切片 → embedding → pgvector',
			'Permission-aware index: ACL 嵌进 metadata · 检索时按 user_id filter',
			'Retrieval: Hybrid Search (BM25 + dense) → Cohere Rerank v3 → top-5',
			'Generation: Claude Sonnet 4.6 + 强制结构化输出（含 citation array）',
			'Eval pipeline: RAGAS (Faithfulness / Context Recall) nightly + golden set 100 query',
			'Caching: semantic cache (高频 query · hit rate ~30%)',
		],
	},
	{
		num: '03',
		title: '成本估算',
		time: '5 min',
		color: colors.p5,
		bullets: [
			'200k query/day × 30% cache hit = 140k 真实调用',
			'Embed: text-embedding-3-small ~$0.02 / 1M token · query 端忽略',
			'Retrieval (Rerank): $0.001/q × 140k = $140',
			'Generation: Sonnet 4.6 $3/M in · 平均 1.5k token = $0.0045/q × 140k = $630',
			'Total ≈ $770/day · Prompt Caching 后可降 40-50%',
		],
	},
	{
		num: '04',
		title: '易踩雷',
		time: '5 min',
		color: colors.red,
		bullets: [
			'❌ 没做 ACL → 用户搜到老板私密文档 = 公司危机',
			'❌ 没增量同步 → 文档改了 1 天后才生效 = 用户不信',
			'❌ Citation 错位 → AI 编造引用 = 用户失去信心',
			'❌ 没 eval gate → 每次 prompt 改完凭感觉 = 上 prod 翻车',
			'❌ 没多语言测试 → 中文 query 走英文 chunk = 召回崩',
		],
	},
	{
		num: '05',
		title: '上线策略',
		time: '5 min',
		color: colors.p7,
		bullets: [
			'Shadow mode 1w：双跑不返回 · 对比新旧检索 recall',
			'Internal dogfooding：先给 eng team 用 2w',
			'Canary 5% 1w → A/B vs old keyword search (CTR + 满意度)',
			'全量 + LangSmith 24/7 monitor · cost / faithfulness daily',
			'回滚预案：每个版本 prompt 标记 · 5 min 切回上一版',
		],
	},
];

export default function S26c_SystemDesignRAG() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1400, height: '92%', padding: '18px 26px', display: 'flex', flexDirection: 'column', gap: 10 }}>
				{/* 顶部 */}
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6, flexWrap: 'wrap' }}>
						<span style={{ padding: '4px 12px', background: colors.dark, color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, border, boxShadow: `3px 3px 0 ${colors.red}` }}>
							SYS DESIGN · 加餐 1
						</span>
						<span style={{ padding: '4px 10px', background: colors.yellow, color: colors.black, fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, border }}>
							对标：Notion AI · Glean · Atlassian Rovo
						</span>
					</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: 34, fontWeight: 900, lineHeight: 1.1, letterSpacing: -1 }}>
						RAG 文档问答 · <span style={{ color: colors.red }}>50k+ docs · 10k DAU · ACL</span>
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
						面试官真正在看：<strong style={{ color: colors.yellow }}>ACL 权限</strong> · <strong style={{ color: colors.yellow }}>增量同步</strong> · <strong style={{ color: colors.yellow }}>Citation 准确性</strong> · <strong style={{ color: colors.yellow }}>Eval gate</strong>。能说出 4 个里 3 个 = senior level
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}

export const __unused = shadow;
