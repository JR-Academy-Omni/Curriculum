import { colors } from '../styles/theme';

export interface PhaseInfo {
	num: number;
	code: string;
	name: string;
	nameCn: string;
	color: string;
	lessons: number;
	live: number;
	lab: number;
	icon: string;
	summary: string;
	highlights: string[];
	jobOutcome: string;
	isV5New?: boolean;
}

export const phases: PhaseInfo[] = [
	{
		num: 1, code: 'P1', name: 'Foundation Layer', nameCn: '底层基础',
		color: colors.p1, lessons: 33, live: 3, lab: 19, icon: '🧱',
		summary: 'GenAI 全景 · LLM API · Transformer 架构 · ML/DL 基础 · 模型选型',
		highlights: ['GenAI Overview + Ops', 'Transformer 架构精讲', 'Input Embeddings', '8 大 ML Lab 打底', 'Production LLM 调用'],
		jobOutcome: 'AI Engineer Junior · LLM Integration',
	},
	{
		num: 2, code: 'P2', name: 'Context Engineering', nameCn: '上下文工程',
		color: colors.p2, lessons: 19, live: 3, lab: 11, icon: '🧠',
		summary: 'Prompt Engineering · Context 系统设计 · 结构化输出 · Vibe Coding · GPT Store',
		highlights: ['Context Engineering 方法论', '四要素 Prompt 公式', 'Chain-of-Thought 推理', 'Vibe Coding AI 辅助开发', 'GPT Store 建站'],
		jobOutcome: 'Prompt Engineer · Context Designer',
	},
	{
		num: 3, code: 'P3', name: 'RAG', nameCn: '检索增强生成',
		color: colors.p3, lessons: 45, live: 17, lab: 15, icon: '🔍',
		summary: 'Embedding · 向量数据库 · RAG Pipeline · GraphRAG · LangChain · RAG Eval · AWS Bedrock',
		highlights: ['RAG from Scratch', 'LangChain Core', 'Hybrid Search · Re-ranking', 'GraphRAG 落地', 'RAGAS + Context Recall/Precision 评估', 'AWS Bedrock 生产部署'],
		jobOutcome: 'RAG Engineer · AI App Developer',
	},
	{
		num: 4, code: 'P4', name: 'Capability Layer', nameCn: '能力层 / MCP',
		color: colors.p4, lessons: 13, live: 6, lab: 3, icon: '🔌',
		summary: 'Function Calling · Tool Use · MCP Server · Browser Use · Computer Use · Code Interpreter',
		highlights: ['MCP Server 从 0 到 1', 'MCP 工程集成实战', 'MCP 源码解读', '2 个 MCP 实战项目', 'Computer Use + Browser Use'],
		jobOutcome: 'MCP Integration Engineer',
	},
	{
		num: 5, code: 'P5', name: 'Agent Core', nameCn: 'Agent 核心',
		color: colors.p5, lessons: 11, live: 5, lab: 3, icon: '🤖',
		summary: 'Agent 基础 · ReAct · Agent SDK 对比 · 构建第一个 Agent · Agentic RAG',
		highlights: ['ReAct 框架精讲', 'OpenAI / Claude / Google Agent SDK 三选一实操', '构建第一个 Agent', 'Production-grade Agentic RAG'],
		jobOutcome: 'AI Agent Developer',
	},
	{
		num: 6, code: 'P6', name: 'Multi-Agent & Orchestration', nameCn: '多智能体编排',
		color: colors.p6, lessons: 11, live: 5, lab: 3, icon: '🎭',
		summary: 'Multi-Agent 架构 · LangGraph · A2A Protocol · Agent Ops · Claude Code 原理',
		highlights: ['Multi-Agent 架构图谱', 'LangGraph 工程实战', 'A2A Protocol + Ecosystem Map', 'Agent Ops with LangSmith', 'Claude Code 工作机制解构'],
		jobOutcome: 'Agentic Systems Engineer',
	},
	{
		num: 7, code: 'P7', name: 'Memory System', nameCn: '记忆系统',
		color: colors.p7, lessons: 3, live: 1, lab: 1, icon: '💾',
		summary: 'Agent Memory · STM/LTM · Mem0 · Session 管理 · Memory 技术全景',
		highlights: ['Short-term / Long-term Memory 架构', 'Mem0 实操', 'Session-level 上下文管理'],
		jobOutcome: 'Agent Memory Engineer',
		isV5New: true,
	},
	{
		num: 8, code: 'P8', name: 'Harness Engineering', nameCn: 'Harness 工程',
		color: colors.p8, lessons: 13, live: 5, lab: 2, icon: '⚙️',
		summary: 'Harness 架构 · Hook System · Tool Loop · 权限沙箱 · Memory 层 · Skills · Subagents · MCP · ADLC',
		highlights: ['Harness 架构原理（Claude Code / Cursor 同款）', 'Hook System + Tool Loop 设计', '权限/沙箱与 Memory 层实现', 'Skills + Subagents + MCP 接入', 'ADLC (Agent Dev Lifecycle)', '构建你自己的 AI Harness'],
		jobOutcome: 'Harness Architect · AI Tooling Lead',
		isV5New: true,
	},
	{
		num: 9, code: 'P9', name: 'Model Layer', nameCn: '模型层',
		color: colors.p9, lessons: 19, live: 10, lab: 6, icon: '🧬',
		summary: 'Open-Weight Models · Fine-Tuning · QLoRA · Unsloth · PEFT · SDG · Sentence Transformers',
		highlights: ['Fine-Tuning Llama 3.1 with QLoRA', 'Unsloth 极速训练', 'PEFT · Quantization · Synthetic Data Generation', 'Sentence Transformers 精调'],
		jobOutcome: 'LLM Fine-tuning Engineer',
	},
	{
		num: 10, code: 'P10', name: 'Observability & Evals', nameCn: '可观测与评估',
		color: colors.p10, lessons: 16, live: 4, lab: 5, icon: '📊',
		summary: 'AI Evaluation · Safety · Guardrails · Red-teaming · 监控 · 毕业 · 职业路径',
		highlights: ['AI Eval Framework', 'Guardrails + Safety', 'Red-teaming 实战', 'LangSmith 监控', 'LinkedIn & CV Workshop', 'AI Engineer 职业路径'],
		jobOutcome: 'AI Reliability Engineer',
	},
];

// Course 顶层元数据
export const courseMeta = {
	totalLessons: 183,
	totalSteps: 723,
	liveClasses: 59,
	interactiveLabs: 68,
	estimatedHours: 82,
	weeksTechnical: 12,
	weeksP3: 12,
	cohort: 5,
	// 第四期对比数据
	v4Lessons: 95,
	v4Phases: 5,
	v4Live: 37,
	v4Labs: 23,
};

// V4 vs V5 diff（用于 S23）
export const v4v5Diff = {
	lessonsDelta: courseMeta.totalLessons - courseMeta.v4Lessons,
	phasesDelta: 10 - courseMeta.v4Phases,
	newPhases: [
		{ name: 'Phase 7: Memory System', reason: 'Agent 记忆系统已成为生产级 AI 应用刚需' },
		{ name: 'Phase 8: Harness Engineering', reason: 'Claude Code / Cursor 同款工程方法论，V5 独家' },
	],
	expandedPhases: [
		{ name: 'Phase 4: Capability Layer', detail: 'MCP 从 1 节扩展到 6 节，含源码解读 + 2 个实战项目' },
		{ name: 'Phase 3: RAG', detail: '45 节，新增 GraphRAG + Hybrid Search + AWS Bedrock 生产部署' },
		{ name: 'Phase 9: Model Layer', detail: '19 节，新增 Unsloth + SDG + Sentence Transformers' },
	],
};
