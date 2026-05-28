import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';

interface BadRow {
	label: string;
	content: string;
}

interface GoodCategory {
	name: string;
	bullets: string[];
	accent: string;
}

// ❌ 真实学员简历样本（SDE 思维堆名词 · 0 AI 深度）
const badRows: BadRow[] = [
	{ label: 'Frontend', content: 'React, Redux, TypeScript, Vue.js, HTML5, SCSS, React-Bootstrap' },
	{ label: 'Backend', content: '.NET (C#, ASP.NET Core/MVC, EF, LINQ), Python (FastAPI, Flask, Streamlit), Node.js, RESTful APIs' },
	{ label: 'Cloud & DevOps', content: 'AWS, Microsoft Azure, Docker, CI/CD pipelines' },
	{ label: 'Databases', content: 'SQL Server, PostgreSQL, MongoDB, MySQL, Redis' },
	{ label: 'AI & Automation', content: 'RAG pipelines, LangChain, OpenAI APIs, Claude, workflow automation, conversational AI' },
	{ label: 'Other Tools', content: 'VS Code, Visual Studio, Git, Swagger, Figma, Slack, MS Office' },
];

// ✅ AI Engineer 应该写的版本 — 按 7 大 category 重组
const goodCategories: GoodCategory[] = [
	{
		name: 'Full Stack',
		accent: colors.p1,
		bullets: [
			'Next.js 15 · React 19 · TypeScript · Tailwind · shadcn',
			'NestJS · FastAPI · Hono · PostgreSQL · pgvector · Redis',
		],
	},
	{
		name: 'Harness Engineering',
		accent: colors.p4,
		bullets: [
			'Eval: promptfoo · Inspect AI · DeepEval · OpenAI Evals',
			'Sandbox: E2B · Modal · Daytona (LLM code 隔离执行)',
			'Guardrails: Guardrails AI · NeMo · Llama Guard 3',
			'Red-team: Garak · PyRIT · prompt injection 测试',
		],
	},
	{
		name: 'AI Engineering Core',
		accent: colors.p2,
		bullets: [
			'OpenAI / Anthropic / Gemini SDK · AWS Bedrock',
			'Streaming SSE · Vercel AI SDK · Function Calling',
			'MCP Server (filesystem · postgres · 自定义内部 API)',
			'Multi-modal: GPT-4o Vision · Whisper · TTS',
			'Prompt Caching · Batch API · tiktoken cost calc',
		],
	},
	{
		name: 'Prompt & Context Engineering',
		accent: colors.p3,
		bullets: [
			'CoT · ReAct · Few-shot · Structured Output (JSON / Pydantic)',
			'DSPy · Outlines · Mem0 · LangGraph state · Letta',
		],
	},
	{
		name: 'RAG',
		accent: colors.p5,
		bullets: [
			'Embedding: text-embedding-3 · Cohere Embed v3 · BGE-M3',
			'Vector DB: pgvector · Qdrant · Pinecone',
			'Hybrid: BM25 + dense + Cohere Rerank v3',
			'Eval: RAGAS (Faithfulness 0.91) · DeepEval',
		],
	},
	{
		name: 'Agent / Multi-Agent',
		accent: colors.p7,
		bullets: [
			'LangGraph · OpenAI Agent SDK · Claude Agent SDK',
			'Browser-use · Anthropic Computer Use',
			'AI Coding: Cursor · Claude Code · Aider · Cline',
		],
	},
	{
		name: 'Cloud & Ops',
		accent: colors.p8,
		bullets: [
			'LiteLLM gateway · LangSmith trace · Helicone',
			'vLLM self-host · Semantic cache · Model routing',
		],
	},
];

export default function S08b_SkillsSectionExample() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '96%', maxWidth: 1550, height: '93%', padding: '16px 26px', display: 'flex', flexDirection: 'column' }}>
				{/* 顶部标签 */}
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
					<span style={{ padding: '6px 14px', background: colors.dark, color: colors.white, fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, border, boxShadow: `3px 3px 0 ${colors.red}` }}>
						真实案例对照
					</span>
					<span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: '#666' }}>
						左边是学员真实简历 · 右边是你今晚要改成的版本
					</span>
				</motion.div>

				{/* 标题 */}
				<motion.h2
					initial={{ opacity: 0, x: -32 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.1 }}
					style={{ fontFamily: fonts.heading, fontSize: 34, fontWeight: 900, lineHeight: 1.1, letterSpacing: -1, marginBottom: 10 }}
				>
					一份学员简历的 Skills · <span style={{ color: colors.red }}>❌</span> vs <span style={{ color: colors.green }}>✅</span>
				</motion.h2>

				{/* 左右对照 */}
				<div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 16, minHeight: 0 }}>
					{/* ❌ 烂版本 */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2 }}
						style={{
							background: colors.white,
							border: `3px solid ${colors.red}`,
							boxShadow: `5px 5px 0 ${colors.red}`,
							padding: '14px 16px',
							display: 'flex',
							flexDirection: 'column',
							overflow: 'hidden',
						}}
					>
						<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
							<span style={{ background: colors.red, color: colors.white, fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, padding: '3px 8px' }}>BEFORE</span>
							<span style={{ fontFamily: fonts.heading, fontSize: 18, fontWeight: 900, color: colors.red }}>Core Skills（堆名词）</span>
						</div>

						{/* 模拟简历 */}
						<div style={{ fontFamily: fonts.mono, fontSize: 11.5, lineHeight: 1.55, color: '#222', flex: 1, overflow: 'hidden' }}>
							{badRows.map((r) => (
								<div key={r.label} style={{ marginBottom: 5, display: 'flex', gap: 4 }}>
									<span style={{ fontWeight: 800, flexShrink: 0 }}>• {r.label}:</span>
									<span style={{
										background: r.label === 'AI & Automation' ? 'rgba(231, 60, 79, 0.18)' : 'transparent',
										padding: r.label === 'AI & Automation' ? '0 4px' : 0,
									}}>{r.content}</span>
								</div>
							))}
						</div>

						{/* 致命问题标注 */}
						<div style={{ marginTop: 8, padding: '8px 10px', background: '#fff5f5', border: `2px dashed ${colors.red}` }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, color: colors.red, marginBottom: 3 }}>致命问题：</div>
							<ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: fonts.body, fontSize: 11.5, lineHeight: 1.5, color: '#333' }}>
								<li>① "AI & Automation" 一行打发 — 跟 SDE 简历无区别</li>
								<li>② "RAG pipelines" "conversational AI" 全是 buzzword 没工具名</li>
								<li>③ "Claude" 是模型不是技术，写出来等于没写</li>
								<li>④ 没有 Vector DB / Reranker / Eval / Cost / Agent / MCP</li>
								<li>⑤ 6 个 category 里 AI 只占 1/6 — AI Engineer 简历不该这样</li>
							</ul>
						</div>
					</motion.div>

					{/* ✅ 好版本 */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.3 }}
						style={{
							background: colors.white,
							border: `3px solid ${colors.green}`,
							boxShadow: `5px 5px 0 ${colors.green}`,
							padding: '14px 16px',
							display: 'flex',
							flexDirection: 'column',
							overflow: 'hidden',
						}}
					>
						<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
							<span style={{ background: colors.green, color: colors.black, fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, padding: '3px 8px' }}>AFTER</span>
							<span style={{ fontFamily: fonts.heading, fontSize: 18, fontWeight: 900, color: colors.black }}>Skills（按 7 大 category 重组 · 具体工具）</span>
						</div>

						{/* 7 个 category 紧凑展示 */}
						<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 14px', flex: 1, overflow: 'hidden', fontFamily: fonts.mono }}>
							{goodCategories.map((c) => (
								<div
									key={c.name}
									style={{
										gridColumn: c.name === 'AI Engineering Core' ? 'span 2' : 'span 1', // Core 占两列
										display: 'flex',
										flexDirection: 'column',
										gap: 1,
									}}
								>
									<div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
										<span style={{ width: 4, height: 13, background: c.accent, display: 'inline-block', flexShrink: 0 }} />
										<span style={{ fontFamily: fonts.heading, fontSize: 13, fontWeight: 900, letterSpacing: -0.2 }}>{c.name}</span>
									</div>
									{c.bullets.map((b, bi) => (
										<div key={bi} style={{ paddingLeft: 10, fontSize: 11.5, color: '#222', lineHeight: 1.4 }}>
											<span style={{ color: c.accent, fontWeight: 700, marginRight: 4 }}>·</span>
											{b}
										</div>
									))}
								</div>
							))}
						</div>

						{/* 升级要点 */}
						<div style={{ marginTop: 8, padding: '8px 10px', background: '#f1faf3', border: `2px dashed ${colors.green}` }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, color: colors.green, marginBottom: 3 }}>6 个升级点：</div>
							<ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: fonts.body, fontSize: 11.5, lineHeight: 1.5, color: '#222' }}>
								<li>① AI 部分从 1 行扩成 6 个 category（占整个 skills 80%+）</li>
								<li>② 每个 category 至少 2-5 个**具体工具名 + 版本**</li>
								<li>③ 加 MCP / Function Calling / Multi-modal / Eval / Cost 维度</li>
								<li>④ <strong>Harness Engineering</strong>：eval / sandbox / guardrail / red-team — 资深岗加分项</li>
								<li>⑤ 量化指标顺手秀（RAGAS Faithfulness 0.91）</li>
								<li>⑥ AI Coding 工具具体到 Cursor / Claude Code / Aider</li>
							</ul>
						</div>
					</motion.div>
				</div>

				{/* 底部落点 */}
				<motion.div
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.95 }}
					style={{ marginTop: 10, textAlign: 'center' }}
				>
					<span style={{ display: 'inline-block', padding: '10px 24px', background: colors.dark, color: colors.white, fontFamily: fonts.heading, fontSize: 16, fontWeight: 900, border, boxShadow: `5px 5px 0 ${colors.yellow}` }}>
						今晚回去 · 把"AI & Automation"那一行 → 拆成 5 个 AI category · <span style={{ color: colors.yellow }}>这是最快的简历升级</span>
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}
