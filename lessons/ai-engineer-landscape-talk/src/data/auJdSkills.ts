// 2026 澳洲在招岗位的技能要求 —— 讲者根据近期在招岗位（Deloitte、Accenture、Salesforce、Publicis Sapient、Xero、Google Cloud 等）
// 和 2026 年行业招聘分析整理。source 为讲者给出的出处标注；note 为讲者观点；
// stages 是“这条要求源自时间线的哪几个阶段”（下标从 1 起，对应 auAiTimeline.ts 的 STAGES），属讲者视角的归因，不是 JD 原文。

export interface JdRequirement {
	title: string;
	detail: string;
	stages: number[];
	badge?: string; // 卡片角标，如“最稀缺”
	note?: string; // 讲者观点
	source?: string;
}

export const JD_SOURCE_LINE = '整理自近期澳洲在招岗位（Deloitte、Accenture、Salesforce、Publicis Sapient、Xero、Google Cloud 等）与 2026 年行业招聘分析';

export const AI_ENGINEER_REQS: JdRequirement[] = [
	{
		title: 'Python + 软件工程基本功',
		detail: '扎实的软件工程基础（Python、Git、API、测试），外加 async、FastAPI 这类服务化能力。',
		stages: [3],
	},
	{
		title: 'RAG 与向量检索',
		detail: '切块、embedding、检索、重排序、grounding；现在更看重 pgvector、混合检索、召回率工程，简历只写“做过 RAG”但没有召回指标会被视为减分项。',
		source: 'aiengineerinsights',
		note: '面试里不算重点，而是默认应熟练掌握的基础技能。会用云厂商开箱即用的 knowledge base 服务更吃香，纯手搓完整 RAG 比较少见；用 embedding + similarity search 做 intent classification、分类等很常见。',
		stages: [2],
	},
	{
		title: 'Agent 与工具调用',
		detail: '规划循环、function calling、护栏、失败处理，以及多智能体编排（LangGraph 等）和 MCP 集成。',
		stages: [3, 4, 5],
	},
	{
		title: '评估（Evals）',
		badge: '最稀缺',
		detail: '几乎所有高级 AI Engineer 的 JD 都要求设计 eval pipeline、golden dataset 和 LLM-as-judge 流程。',
		stages: [6, 7],
	},
	{
		title: '可观测性 / LLMOps',
		detail: 'Tracing、线上质量监控、回归检测，常见工具有 LangSmith、Braintrust、Helicone、Phoenix/Arize、Langfuse。',
		stages: [6],
	},
	{
		title: '部署与云',
		detail: 'Docker 加上至少一个云平台（AWS ECS/Lambda、GCP Cloud Run、Azure Container Apps），CI/CD 是标配。',
		stages: [1, 4],
	},
	{
		title: '成本与延迟优化',
		detail: '让系统在规模化下负担得起，包括 prompt caching、模型选型、流式输出。',
		stages: [5, 7],
	},
	{
		title: '安全与护栏',
		detail: '防 prompt injection、护栏、线上质量监控。',
		stages: [9],
	},
	{
		title: '多家模型 API 的熟练度',
		detail: 'OpenAI、Anthropic、Gemini 等，避免厂商锁定。',
		stages: [5],
	},
];

export const AI_ENGINEER_TREND = '整体趋势：雇主更看重 LLM 集成、Python、云基础设施和部署能力，而不是微调或深度研究背景。墨尔本本地的典型 JD（如 Xero）：构建生产级 LLM 与 agentic 系统（RAG、多智能体编排），对接企业知识图谱、向量库和云 AI 平台，并落实 CI/CD、可观测性、评估和护栏。';

export const FDE_REQS: JdRequirement[] = [
	{
		title: '至少一门语言达到生产级熟练',
		detail: 'Python 或 TypeScript 为主，Java/Go 为辅。标准是能读懂陌生代码库、找到入口点，并在一个工作日内交付可用的补丁。',
		stages: [3],
	},
	{
		title: 'Agentic 框架与平台',
		detail: '2026 年的门槛已上移到 agent 编排（LangGraph、CrewAI）、评估框架、AI 可观测性与护栏。Deloitte 还明确要求熟悉云厂商自家的 agent 平台（Bedrock Agents、Vertex、Azure AI Foundry 一类），Salesforce 岗位则绑定 Agentforce 和 Apex。',
		stages: [3, 6],
	},
	{
		title: '全栈能力',
		detail: 'Python、Java、React 等贯穿整个 SDLC，端到端负责问题（Publicis Sapient 墨尔本岗位，该岗要求 10 年以上经验）。',
		source: 'publicissapient',
		stages: [8],
	},
	{
		title: '快速原型到生产',
		detail: 'Accenture 的要求是几天内把模糊的客户问题做成 PoC，几周内做到生产级部署。',
		stages: [8],
	},
	{
		title: '云与基础设施',
		detail: '有云基础设施经验，AWS 优先（Deloitte）；Docker、Kubernetes、IaC、CI/CD 是基础。',
		source: 'workopia',
		stages: [1, 4],
	},
	{
		title: '数据能力',
		detail: 'SQL、Spark，以及 Deloitte 列出的数据密集型系统经验。',
		stages: [3],
	},
	{
		title: 'AI 应用素养（不需要训练模型）',
		detail: '理解 RAG 架构、prompt 设计、评估框架、agent 的失败模式，以及成本与延迟的权衡。',
		stages: [2, 5],
	},
	{
		title: '企业系统集成',
		detail: 'API 集成、遗留系统对接、认证与权限、在受监管和受限环境中部署。',
		stages: [4, 9],
	},
	{
		title: '生产调试与排障',
		detail: '客户现场、有生产权限、能独立解决问题。',
		stages: [4, 8],
	},
];

export const FDE_TREND = 'FDE 的技术栈与 AI Engineer 大体重合，但更偏全栈和集成，并且要直接面对客户。';

// —— 澳洲市场特点 & 两类岗位的区别 ——
export interface MarketTrait {
	title: string;
	detail: string;
	source?: string;
	caveat?: string;
}

export const MARKET_TRAITS: MarketTrait[] = [
	{
		title: 'FDE 岗位从哪来',
		detail: '主要来自咨询公司和大厂的本地团队（Deloitte、Accenture、Salesforce、Google Cloud），通常要求愿意出差到客户现场，有咨询经验是加分项。',
		source: 'workopia',
	},
	{
		title: '云与行业',
		detail: '云以 AWS 和 Azure 为主，银行、政府、矿业、电信是主要客户行业。',
	},
	{
		title: '合规',
		detail: '政府和国防类项目常要求公民身份或安全许可（如 NV1），金融客户会涉及 APRA CPS 234 和隐私法。',
		caveat: '基于对澳洲市场的了解补充，具体要求以各 JD 为准',
	},
];

export const ROLE_FOCUS = {
	aiEngineer: ['评估', '可靠性', '系统深度'],
	fde: ['交付速度', '全栈广度', '集成能力', '客户沟通'],
	shared: ['Python', 'RAG', 'Agent', 'Evals', '云部署'],
	advice: '先把这五项做出一个有量化指标、已上线的作品，最划算。',
};
