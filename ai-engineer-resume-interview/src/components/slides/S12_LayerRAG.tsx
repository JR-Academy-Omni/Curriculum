import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';

interface Module {
	num: string;
	title: string;
	tag: string;
	items: string[];
	highlight?: string;
	color: string;
}

const modules: Module[] = [
	{
		num: '1',
		title: 'Embedding',
		tag: '向量化',
		items: ['OpenAI text-embedding-3-large / 3-small', 'Cohere Embed v3', 'Voyage AI', 'BGE / M3E（开源中文）'],
		color: colors.p3,
	},
	{
		num: '2',
		title: 'Vector DB',
		tag: '存储',
		items: ['Pinecone / Weaviate / Qdrant', 'Milvus / Chroma', 'Redis Vector Search'],
		highlight: 'pgvector — PostgreSQL 扩展，最实用',
		color: colors.p5,
	},
	{
		num: '3',
		title: 'Retrieval',
		tag: '检索',
		items: ['Dense retrieval (向量相似度)', 'Sparse retrieval (BM25)', 'Hybrid Search = dense + sparse + 加权', 'Reranker: Cohere Rerank / BGE-reranker / Voyage Rerank', 'GraphRAG (MS) / Hierarchical RAG'],
		color: colors.p7,
	},
	{
		num: '4',
		title: '框架 + Eval',
		tag: '工程化',
		items: ['LangChain / LlamaIndex / Haystack', 'Eval: RAGAS (Context Recall / Precision / Faithfulness)', 'DeepEval / TruLens'],
		color: colors.p8,
	},
];

export default function S12_LayerRAG() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1400, height: '92%', padding: '20px 28px', display: 'flex', flexDirection: 'column' }}>
				{/* 顶部 */}
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 10 }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
						<span style={{ padding: '5px 12px', background: colors.p5, color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, border, boxShadow: `3px 3px 0 ${colors.black}` }}>
							SKILL · 05
						</span>
						<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: '#666' }}>
							完整 RAG 技术栈 · 4 子模块
						</span>
					</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: 36, fontWeight: 900, color: colors.black, letterSpacing: -1, lineHeight: 1.1 }}>
						RAG · <span style={{ background: colors.yellow, padding: '0 10px', border, boxShadow: `4px 4px 0 ${colors.black}`, display: 'inline-block', transform: 'rotate(-1deg)' }}>知识检索增强</span>
					</h2>
				</motion.div>

				{/* 4 模块 grid 2x2 */}
				<div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: 12, minHeight: 0 }}>
					{modules.map((m, i) => (
						<motion.div
							key={m.num}
							initial={{ opacity: 0, y: 16, scale: 0.96 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							transition={{ delay: 0.15 + i * 0.06, duration: 0.34 }}
							style={{ background: colors.white, border, boxShadow: shadowSm, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
						>
							<div style={{ height: 6, background: m.color, flexShrink: 0 }} />
							<div style={{ padding: '12px 16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
								<div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 6 }}>
									<span style={{ fontFamily: fonts.heading, fontSize: 28, fontWeight: 900, color: m.color, lineHeight: 1, letterSpacing: -1 }}>
										{m.num}
									</span>
									<span style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 900, color: colors.black, letterSpacing: -0.4 }}>
										{m.title}
									</span>
									<span style={{ fontFamily: fonts.mono, fontSize: 10, fontWeight: 800, color: '#888', letterSpacing: 0.5, marginLeft: 'auto' }}>
										{m.tag.toUpperCase()}
									</span>
								</div>

								<ul style={{ listStyle: 'none', margin: 0, padding: 0, fontFamily: fonts.body, fontSize: 12.5, color: '#222', lineHeight: 1.5, fontWeight: 500 }}>
									{m.items.map((it) => (
										<li key={it} style={{ marginBottom: 3 }}>
											<span style={{ color: m.color, fontWeight: 800, marginRight: 6 }}>·</span>
											{it}
										</li>
									))}
								</ul>

								{m.highlight && (
									<div style={{ marginTop: 8, padding: '6px 10px', background: m.color, color: colors.white, fontFamily: fonts.mono, fontSize: 11.5, fontWeight: 800, border: `2px solid ${colors.black}`, alignSelf: 'flex-start' }}>
										★ {m.highlight}
									</div>
								)}
							</div>
						</motion.div>
					))}
				</div>

				{/* 简历对比 */}
				<motion.div
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.7, duration: 0.4 }}
					style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '0.8fr 2.2fr', gap: 12 }}
				>
					<div style={{ padding: '10px 14px', background: '#ffe0e0', border: `2px solid ${colors.red}`, fontFamily: fonts.body, fontSize: 13, color: colors.black, lineHeight: 1.4 }}>
						<span style={{ fontFamily: fonts.mono, fontWeight: 900, color: colors.red, marginRight: 8 }}>❌</span>
						"Implemented RAG"
					</div>
					<div style={{ padding: '10px 14px', background: '#dff5d8', border: `2px solid #2d9a2d`, fontFamily: fonts.body, fontSize: 13, color: colors.black, lineHeight: 1.4 }}>
						<span style={{ fontFamily: fonts.mono, fontWeight: 900, color: '#2d9a2d', marginRight: 8 }}>✅</span>
						Built hybrid-search RAG (BM25 + pgvector + Cohere Rerank) over 500k legal docs, recall@10 62% → 87%, RAGAS Faithfulness 0.91
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
