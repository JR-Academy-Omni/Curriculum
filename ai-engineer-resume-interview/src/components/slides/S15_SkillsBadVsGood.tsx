import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';

interface GoodGroup {
	heading: string;
	items: string[];
	color: string;
}

const badLines: string[] = [
	'Programming Languages: Python, JavaScript',
	'AI Tools: ChatGPT, Claude, AI coding assistance',
	'Frameworks: LangChain, some experience with RAG',
	'Cloud: AWS',
	'Database: SQL, MongoDB',
];

interface BadIssue {
	text: string;
	tag: string;
}

const badIssues: BadIssue[] = [
	{ tag: '①', text: '"AI coding assistance" 太泛' },
	{ tag: '②', text: '"some experience" 不可信' },
	{ tag: '③', text: '没有具体工具名' },
	{ tag: '④', text: '全是名词没场景' },
];

const goodGroups: GoodGroup[] = [
	{
		heading: 'AI Engineering Core',
		color: colors.p2,
		items: [
			'LLM APIs: OpenAI / Anthropic / Google Gemini / Bedrock',
			'Streaming: SSE, WebSocket, Vercel AI SDK',
			'Multi-modal: GPT-4o Vision, Claude Vision, Whisper, ElevenLabs',
		],
	},
	{
		heading: 'Prompt & Context Engineering',
		color: colors.p3,
		items: [
			'CoT / ReAct / Few-shot / Structured Output (JSON mode, Function calling)',
			'DSPy, Pydantic AI for schema-constrained generation',
			'Memory: Mem0, LangGraph state, conversation summarization',
		],
	},
	{
		heading: 'RAG',
		color: colors.p5,
		items: [
			'Vector DB: Pinecone, pgvector, Qdrant',
			'Embedding: text-embedding-3-large, Cohere Embed v3, BGE',
			'Hybrid Search: BM25 + dense + Cohere Rerank',
			'Eval: RAGAS (Faithfulness 0.91), DeepEval',
		],
	},
	{
		heading: 'MCP & Agents',
		color: colors.p6,
		items: [
			'MCP Server design (filesystem, postgres, custom internal APIs)',
			'LangGraph multi-agent orchestration',
			'AI Coding tools: Cursor, Claude Code, Aider',
			'Browser-use, Anthropic Computer Use',
		],
	},
	{
		heading: 'Cloud & Ops',
		color: colors.p8,
		items: [
			'AWS Bedrock, Azure OpenAI, Vertex AI',
			'LiteLLM gateway, LangSmith tracing, Prompt Caching',
			'Cost optimization: Batch API, semantic cache, model routing',
		],
	},
	{
		heading: 'Full Stack',
		color: colors.p1,
		items: [
			'Next.js 15 / React / TypeScript / Tailwind / shadcn',
			'NestJS / FastAPI / PostgreSQL / Redis',
			'Docker / AWS / Vercel',
		],
	},
];

export default function S15_SkillsBadVsGood() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1400, height: '94%', padding: '18px 24px', display: 'flex', flexDirection: 'column' }}>
				{/* 顶部 */}
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 10 }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
						<span style={{ padding: '5px 12px', background: colors.dark, color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, border, boxShadow: `3px 3px 0 ${colors.red}` }}>
							SKILLS SECTION
						</span>
						<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: '#666' }}>
							对照 · 你的简历到底像哪一份
						</span>
					</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: 32, fontWeight: 900, color: colors.black, letterSpacing: -1, lineHeight: 1.1 }}>
						简历 Skills Section · <span style={{ background: '#ffe0e0', padding: '0 8px', border: `3px solid ${colors.red}`, display: 'inline-block', transform: 'rotate(-1deg)' }}>烂</span> vs <span style={{ background: '#dff5d8', padding: '0 8px', border: `3px solid #2d9a2d`, display: 'inline-block', transform: 'rotate(1deg)' }}>好</span>
					</h2>
				</motion.div>

				{/* 两栏对照 */}
				<div style={{ flex: 1, display: 'grid', gridTemplateColumns: '0.85fr 1.4fr', gap: 16, minHeight: 0 }}>
					{/* 左 ❌ 烂 */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.15, duration: 0.4 }}
						style={{ background: colors.white, border: `3px solid ${colors.red}`, boxShadow: `5px 5px 0 ${colors.red}`, padding: '16px 18px', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}
					>
						<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
							<span style={{ width: 36, height: 36, background: colors.red, color: colors.white, fontFamily: fonts.heading, fontSize: 22, fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `2px solid ${colors.black}` }}>
								❌
							</span>
							<span style={{ fontFamily: fonts.heading, fontSize: 22, fontWeight: 900, color: colors.red, letterSpacing: -0.5 }}>
								烂版本 · HR 5 秒淘汰
							</span>
						</div>

						<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: '#222', lineHeight: 1.75, background: '#fff8f8', padding: '12px 14px', border: `1.5px solid ${colors.red}`, marginBottom: 12 }}>
							<div style={{ fontWeight: 900, color: colors.red, marginBottom: 4 }}>Skills:</div>
							{badLines.map((l) => (
								<div key={l}>· {l}</div>
							))}
						</div>

						<div style={{ fontFamily: fonts.mono, fontSize: 10, fontWeight: 800, color: colors.red, letterSpacing: 0.5, marginBottom: 6 }}>
							4 个致命问题
						</div>
						{badIssues.map((b, i) => (
							<motion.div
								key={b.tag}
								initial={{ opacity: 0, x: -10 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.4 + i * 0.08 }}
								style={{ display: 'flex', alignItems: 'flex-start', gap: 6, marginBottom: 4 }}
							>
								<span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 900, color: colors.red, lineHeight: 1.3 }}>
									{b.tag}
								</span>
								<span style={{ fontFamily: fonts.body, fontSize: 14, color: colors.black, lineHeight: 1.4, fontWeight: 600 }}>
									{b.text}
								</span>
							</motion.div>
						))}
					</motion.div>

					{/* 右 ✅ 好 */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.15, duration: 0.4 }}
						style={{ background: colors.white, border: `3px solid #2d9a2d`, boxShadow: `5px 5px 0 #2d9a2d`, padding: '14px 16px', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}
					>
						<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
							<span style={{ width: 36, height: 36, background: '#2d9a2d', color: colors.white, fontFamily: fonts.heading, fontSize: 22, fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `2px solid ${colors.black}` }}>
								✅
							</span>
							<span style={{ fontFamily: fonts.heading, fontSize: 22, fontWeight: 900, color: '#2d9a2d', letterSpacing: -0.5 }}>
								好版本 · HR 直接约面
							</span>
						</div>

						<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
							{goodGroups.map((g, i) => (
								<motion.div
									key={g.heading}
									initial={{ opacity: 0, y: 8 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.35 + i * 0.06 }}
									style={{ background: colors.warmBg, border: `2px solid ${colors.black}`, boxShadow: shadowSm, padding: '8px 10px' }}
								>
									<div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
										<span style={{ width: 6, height: 14, background: g.color }} />
										<span style={{ fontFamily: fonts.heading, fontSize: 15, fontWeight: 900, color: colors.black, letterSpacing: -0.2, lineHeight: 1.1 }}>
											{g.heading}
										</span>
									</div>
									<ul style={{ listStyle: 'none', margin: 0, padding: 0, fontFamily: fonts.mono, fontSize: 12.5, color: '#222', lineHeight: 1.5, fontWeight: 600 }}>
										{g.items.map((it) => (
											<li key={it} style={{ marginBottom: 2 }}>
												<span style={{ color: g.color, fontWeight: 900, marginRight: 3 }}>·</span>
												{it}
											</li>
										))}
									</ul>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>

				{/* 落点 */}
				<motion.div
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.9, duration: 0.4 }}
					style={{ marginTop: 12, textAlign: 'center' }}
				>
					<span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '10px 22px', background: colors.black, color: colors.white, fontFamily: fonts.heading, fontSize: '18px', fontWeight: 800, border, boxShadow: `5px 5px 0 ${colors.yellow}` }}>
						这就是今晚要让你 <span style={{ color: colors.yellow }}>写出来的 Skills section</span>
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}
