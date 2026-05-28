import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

/**
 * S24 — 15 道一面高频题 + 答题框架
 * 4 类：RAG (5) / Prompt-Context (4) / Agent-MCP (3) / Production-Cost (3)
 * 紧凑布局：4 列 grid，每列 1 个类别
 */

interface QGroup {
	code: string;
	title: string;
	subtitle: string;
	color: string;
	items: { q: string; a: string }[];
}

const groups: QGroup[] = [
	{
		code: 'A',
		title: 'RAG 类',
		subtitle: '5 题',
		color: colors.p1,
		items: [
			{
				q: 'Walk me through your RAG architecture',
				a: 'Embedding → Vector DB → Retrieval (dense+sparse+rerank) → Generation → Eval',
			},
			{
				q: 'Why hybrid search instead of pure dense?',
				a: 'dense 抓语义，sparse/BM25 抓关键词与罕见 token，专有名词场景 BM25 碾压',
			},
			{
				q: 'How do you choose chunk size?',
				a: '512 token 起步，看 recall + context budget，semantic chunking > fixed-size',
			},
			{
				q: "What's your reranker setup?",
				a: 'top-50 dense → Cohere Rerank → top-5，recall@5 从 60% → 85%+',
			},
			{
				q: 'How do you eval RAG quality?',
				a: 'RAGAS (Context Recall / Faithfulness / Answer Relevance) + 100-query golden set + LLM-as-judge',
			},
		],
	},
	{
		code: 'B',
		title: 'Prompt / Context 类',
		subtitle: '4 题',
		color: colors.p3,
		items: [
			{
				q: 'When do you use CoT vs ReAct?',
				a: 'CoT = 单步推理；ReAct = 推理 + 工具调用循环',
			},
			{
				q: 'How do you handle hallucination?',
				a: 'grounding (RAG) + structured output + LLM-as-judge eval + fallback to human',
			},
			{
				q: 'Why function calling over text parsing?',
				a: 'schema-constrained，少 retry，token 省 30%+',
			},
			{
				q: 'How to manage long conversation?',
				a: 'summarization / sliding window / Mem0 / 分层 memory',
			},
		],
	},
	{
		code: 'C',
		title: 'Agent / MCP 类',
		subtitle: '3 题',
		color: colors.p5,
		items: [
			{
				q: 'Single vs Multi-agent, how to choose?',
				a: '任务可线性拆解 → single + tools；任务有并行/协作 → multi-agent (LangGraph)',
			},
			{
				q: "What's MCP and why does it matter?",
				a: '协议层标准化 tool calling，跨 client 复用，Anthropic 出品已成事实标准',
			},
			{
				q: 'How to debug a looping agent?',
				a: 'trace tool (LangSmith) + max_iterations + reflection step + tool 调用预算',
			},
		],
	},
	{
		code: 'D',
		title: 'Production / Cost 类',
		subtitle: '3 题',
		color: colors.p8,
		items: [
			{
				q: 'How to reduce LLM cost?',
				a: 'Prompt Caching (Anthropic 90% off) / Batch API (50% off) / Semantic Cache / Model Routing',
			},
			{
				q: 'How to handle rate limits and outages?',
				a: 'LiteLLM gateway + fallback chain (Anthropic → OpenAI → self-hosted) + circuit breaker',
			},
			{
				q: 'Latency optimization?',
				a: 'streaming (TTFT < 500ms) / parallel tool calls / smaller model for simple intent / prompt 精简',
			},
		],
	},
];

export default function S24_TopQuestions() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{
				width: '97%', maxWidth: 1540, height: '94%', padding: '14px 14px',
				display: 'flex', flexDirection: 'column', gap: 10,
			}}>
				{/* 标题 */}
				<motion.div
					initial={{ opacity: 0, y: -8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ textAlign: 'center' }}
				>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: '44px', fontWeight: 900,
						lineHeight: 1.1, letterSpacing: -1, margin: '0 0 6px',
					}}>
						AI Engineer 一面 · <span style={{
							display: 'inline-block', padding: '0 14px', background: colors.yellow,
							border, boxShadow: shadowSm, transform: 'rotate(-1deg)',
						}}>15 道高频题</span>
					</h2>
					<p style={{ fontSize: 18, color: '#555', fontWeight: 600, margin: 0 }}>
						每题答题公式：<b>先答框架 → 再给具体技术名 → 最后用自己项目举例</b>
					</p>
				</motion.div>

				{/* 4 列 */}
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}
					style={{
						display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
						gap: 10, flex: 1, minHeight: 0,
					}}
				>
					{groups.map((g) => (
						<motion.div
							key={g.code}
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0 },
							}}
							transition={{ duration: 0.35, ease: 'easeOut' }}
							style={{
								background: colors.white,
								border, boxShadow: shadow,
								display: 'flex', flexDirection: 'column',
								overflow: 'hidden',
							}}
						>
							{/* 顶部色条 */}
							<div style={{
								background: g.color, color: colors.white,
								padding: '10px 14px',
								borderBottom: `3px solid ${colors.black}`,
								display: 'flex', justifyContent: 'space-between', alignItems: 'center',
							}}>
								<div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
									<span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 900 }}>
										{g.code}
									</span>
									<span style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 900 }}>
										{g.title}
									</span>
								</div>
								<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, opacity: 0.95 }}>
									{g.subtitle}
								</span>
							</div>

							{/* 题目列表 */}
							<div style={{ padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1, overflow: 'hidden' }}>
								{g.items.map((item, i) => (
									<div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
										<div style={{
											fontFamily: fonts.heading, fontSize: 17, fontWeight: 800,
											color: colors.black, lineHeight: 1.3,
										}}>
											Q{i + 1}. {item.q}
										</div>
										<div style={{
											fontSize: 15, color: '#222', lineHeight: 1.45, fontWeight: 500,
											paddingLeft: 7, borderLeft: `3px solid ${g.color}`,
										}}>
											→ {item.a}
										</div>
									</div>
								))}
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* 底部落点 */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.8 }}
					style={{
						display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
						padding: '10px 18px', background: colors.dark, color: colors.white,
						border, boxShadow: shadowSm,
					}}
				>
					<span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, letterSpacing: 0.5 }}>
						<span style={{ color: colors.yellow }}>框架</span> → 技术名 →
						<span style={{ color: colors.yellow, marginLeft: 6 }}>自己项目</span> · 三段式回答，少废话
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}
