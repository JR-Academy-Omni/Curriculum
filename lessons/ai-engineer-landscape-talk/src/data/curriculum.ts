// 课程大纲 —— 逐条抄自讲者提供的课程页截图（10 个 Phase）。
// jdTags 是“这个 Phase 对应前面 JD 分析里的哪类要求”，按 Phase 自身列出的主题字面对应，属讲者视角的归类。

export type JdTag = 'context' | 'rag' | 'agent' | 'harness' | 'evals';

export interface Phase {
	id: string;
	name: string;
	en: string;
	topics: string[];
	lessons: number;
	isNew?: boolean;
	jdTags?: JdTag[];
}

export const CURRICULUM_TITLE = '10 个 Phase，从 Foundation 学到 Observability';

export const CURRICULUM_STATS: { value: number; label: string }[] = [
	{ value: 10, label: 'Phases' },
	{ value: 172, label: '课时' },
	{ value: 59, label: '直播' },
	{ value: 62, label: '互动 Lab' },
];

export const JD_TAGS: { key: JdTag; label: string }[] = [
	{ key: 'context', label: 'Prompt / Context' },
	{ key: 'rag', label: 'RAG 与向量检索' },
	{ key: 'agent', label: 'Agent 与工具调用' },
	{ key: 'harness', label: 'Harness / Skills' },
	{ key: 'evals', label: 'Evals / 可观测性 / 护栏' },
];

export const PHASES: Phase[] = [
	{ id: 'P01', name: '基座层', en: 'Foundation Layer', topics: ['GenAI 全景', 'Transformer', 'LLM API', 'ML/DL 基础'], lessons: 33 },
	{ id: 'P02', name: '上下文层', en: 'Context Engineering', topics: ['Prompt Engineering', 'Context 系统设计', '结构化输出', 'Vibe Coding'], lessons: 18, jdTags: ['context'] },
	{ id: 'P03', name: '知识检索层', en: 'RAG', topics: ['Embedding', '向量数据库', 'RAG Pipeline', 'GraphRAG', 'LangChain', 'RAG Eval'], lessons: 45, jdTags: ['rag'] },
	{ id: 'P04', name: '能力层', en: 'Capability Layer', topics: ['Function Calling', 'Tool Use', 'MCP Server', 'Browser Use', 'Computer Use'], lessons: 11, jdTags: ['agent'] },
	{ id: 'P05', name: 'Agent 核心', en: 'Agent Core', topics: ['Agent SDK 对比', 'ReAct', '构建 Agent', 'Agentic RAG'], lessons: 9, jdTags: ['agent', 'rag'] },
	{ id: 'P06', name: '编排层', en: 'Multi-Agent & Orchestration', topics: ['Multi-Agent 架构', 'LangGraph', 'A2A Protocol', 'Agent Ops'], lessons: 11, jdTags: ['agent'] },
	{ id: 'P07', name: '记忆系统', en: 'Memory System', topics: ['STM/LTM', 'Agent Memory', 'Mem0', 'Session 管理'], lessons: 2, isNew: true, jdTags: ['context'] },
	{ id: 'P08', name: '治理层', en: 'Harness Engineering', topics: ['Harness 架构', 'Hook System', 'Skills 范式', 'ADLC'], lessons: 8, isNew: true, jdTags: ['harness'] },
	{ id: 'P09', name: '模型层', en: 'Model Layer', topics: ['Open-Weight Models', 'Fine-Tuning', 'QLoRA', 'Unsloth', 'PEFT'], lessons: 18 },
	{ id: 'P10', name: '评测 + 毕业', en: 'Observability & Evals', topics: ['AI Eval', 'Safety', 'Guardrails', 'Red-teaming', '监控', '毕业'], lessons: 17, jdTags: ['evals'] },
];
