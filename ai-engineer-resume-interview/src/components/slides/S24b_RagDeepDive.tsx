import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

const variants = [
	'"Walk through your RAG architecture"',
	'"How do you choose chunk size?"',
	'"Why did you pick X vector DB?"',
	'"How do you improve RAG quality?"',
];

const layers = [
	{
		num: '01',
		title: 'Chunking 策略',
		color: colors.p1,
		points: [
			'Fixed-size (512-1024 token) — 最简单，适合纯文本',
			'Semantic chunking — 用 embedding 找语义断点（推荐）',
			'Hierarchical — 按 H1/H2/H3 切，保留结构',
			'代码场景 — 按 function / class（AST 切分）',
			'业务文档 — 按 section；表格独立 chunk',
		],
		trap: '"How do you decide chunk size?" → 跑 ablation 测 recall@5，512 vs 1024 vs 2048',
	},
	{
		num: '02',
		title: 'Embedding 选型',
		color: colors.p3,
		points: [
			'中文：BGE-M3 / Qwen3-Embedding（开源免费）',
			'中文备选：OpenAI text-embedding-3-large（贵但好用）',
			'英文：text-embedding-3-large / Cohere Embed v3 / Voyage AI',
			'多语：BGE-M3 / multilingual-e5',
		],
		trap: '"Why not OpenAI embedding everywhere?" → cost + 数据合规',
	},
	{
		num: '03',
		title: 'Vector DB 选型',
		color: colors.p5,
		points: [
			'< 1M：pgvector（最实用，跟 Postgres 一起）',
			'1M-100M：Qdrant / Weaviate',
			'大规模 / SaaS：Pinecone',
			'低 latency：Redis Vector',
			'GPU 加速：Milvus',
		],
		trap: '别说"我用 X 因为它最强" — 说 cost + scale + ops 三角',
	},
	{
		num: '04',
		title: 'Hybrid Search',
		color: colors.p7,
		points: [
			'Dense (向量相似度) + Sparse (BM25) + Reranker',
			'加权融合：RRF (Reciprocal Rank Fusion) / weighted average',
			'Reranker：Cohere Rerank v3 / BGE-reranker-v2-m3',
			'实测：加 reranker recall@5 +25%',
		],
		trap: '答出 RRF + Reranker = 不是 RAG 入门',
	},
	{
		num: '05',
		title: 'RAG 优化清单',
		color: colors.red,
		seniorMark: true,
		points: [
			'Query rewriting — LLM 改写模糊 query',
			'HyDE — 先生成假答案，用假答案 search',
			'Multi-query — 一个 query 拆 3 个，结果 merge',
			'Reranker — top-50 dense → rerank → top-5',
			'Context compression — chunk 用 LLM summarize',
			'Eval-driven — RAGAS 持续跑，过 gate 才 merge',
		],
		trap: '能给 5 条以上 = senior',
	},
];

export default function S24b_RagDeepDive() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1400, height: '92%', padding: '18px 28px', display: 'flex', flexDirection: 'column', gap: 10 }}>
				{/* 标题 */}
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
						<span style={{ padding: '4px 12px', background: colors.dark, color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, border, boxShadow: `3px 3px 0 ${colors.red}` }}>
							RAG · DEEP DIVE
						</span>
						<span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, color: '#666' }}>
							面试官会一直追到你答不出
						</span>
					</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: '36px', fontWeight: 900, letterSpacing: -1, lineHeight: 1.1 }}>
						RAG 深挖题 ·{' '}
						<span style={{ background: colors.yellow, padding: '0 10px', border, boxShadow: `4px 4px 0 ${colors.black}`, display: 'inline-block', transform: 'rotate(-1deg)' }}>
							5 层答题框架
						</span>
					</h2>
				</motion.div>

				{/* 提问变体 */}
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} style={{ background: colors.white, border, boxShadow: shadowSm, padding: '8px 12px' }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 10, fontWeight: 900, color: '#666', letterSpacing: 1, marginBottom: 4 }}>提问变体</div>
					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2px 16px' }}>
						{variants.map((v, i) => (
							<div key={i} style={{ fontSize: 11.5, color: '#222', fontFamily: fonts.mono, lineHeight: 1.4 }}>{v}</div>
						))}
					</div>
				</motion.div>

				{/* 5 张 layer 子卡 */}
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 9, flex: 1, minHeight: 0 }}>
					{layers.map((l, i) => (
						<motion.div
							key={l.num}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.15 + i * 0.06 }}
							style={{ background: colors.white, border, boxShadow: shadowSm, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}
						>
							{l.seniorMark && (
								<div style={{ position: 'absolute', top: 4, right: -2, padding: '2px 7px', background: colors.red, color: colors.yellow, fontFamily: fonts.mono, fontSize: 9, fontWeight: 900, letterSpacing: 1, border: `2px solid ${colors.black}`, transform: 'rotate(3deg)', zIndex: 2 }}>
									SENIOR
								</div>
							)}
							<div style={{ background: l.color, color: colors.white, padding: '5px 8px', borderBottom: `3px solid ${colors.black}` }}>
								<div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
									<span style={{ fontFamily: fonts.mono, fontSize: 10, fontWeight: 900, padding: '2px 6px', background: colors.black, color: colors.white }}>{l.num}</span>
									<span style={{ fontFamily: fonts.heading, fontSize: 13.5, fontWeight: 900, lineHeight: 1.1 }}>{l.title}</span>
								</div>
							</div>
							<div style={{ padding: '8px 10px', display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
								{l.points.map((p, j) => (
									<div key={j} style={{ fontSize: 10.5, color: '#222', lineHeight: 1.4, fontWeight: 500 }}>
										<span style={{ color: l.color, fontWeight: 900, marginRight: 3 }}>·</span>{p}
									</div>
								))}
								<div style={{ marginTop: 'auto', background: '#fff8e6', border: `2px dashed ${l.color}`, padding: '5px 7px' }}>
									<div style={{ fontFamily: fonts.mono, fontSize: 9, fontWeight: 900, color: l.color, letterSpacing: 0.5, marginBottom: 2 }}>追问陷阱</div>
									<div style={{ fontSize: 10, color: '#333', lineHeight: 1.35, fontWeight: 600 }}>{l.trap}</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* 落点 */}
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }} style={{ textAlign: 'center' }}>
					<span style={{ display: 'inline-flex', padding: '8px 18px', background: colors.black, color: colors.white, fontFamily: fonts.heading, fontSize: 15, fontWeight: 800, border, boxShadow: `4px 4px 0 ${colors.yellow}` }}>
						这一题答出 5 层 = <span style={{ color: colors.yellow, margin: '0 6px' }}>senior offer 概率显著提升</span>
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}

export const __unused = shadow;
