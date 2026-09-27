// 澳洲 AI 变迁时间进程图 —— 数据原样取自《澳洲AI变迁时间进程图.html》（制图于 2026-09）
// 澳洲落地窗口为估计值，基于一线从业观察与本地标志事件；全球节点为公开披露时间。

export interface GlobalNode {
	at: string; // YYYY-MM，决定圆点在时间轴上的位置
	label: string;
}

export interface StageLogo {
	file: string; // public/logos/ 下的文件名
	alt: string;
	label?: string; // 没有独立 logo、借用母品牌图标时，用文字标明具体指什么
}

export interface TimelineStage {
	name: string;
	logos: StageLogo[];
	au: [string, string]; // 澳洲落地窗口 [起, 止]，YYYY-MM
	global: GlobalNode[];
	market: string;
	jd: string;
	winner: string;
}

// 时间轴：2022-10 为第 0 月，共 54 个月；“现在”= 2026-09
export const AXIS_MONTHS = 54;
export const NOW_MONTH = 47;
export const NOW_LABEL = '现在 2026-09';
export const YEAR_TICKS: [number, string][] = [[3, '2023'], [15, '2024'], [27, '2025'], [39, '2026'], [51, '2027']];

export const monthIndex = (d: string): number => {
	const [y, m] = d.split('-').map(Number);
	return (y - 2022) * 12 + m - 10;
};

export const pct = (months: number): string => `${((months / AXIS_MONTHS) * 100).toFixed(2)}%`;

export const quarter = (d: string): string => {
	const [y, m] = d.split('-').map(Number);
	return `${y} Q${Math.ceil(m / 3)}`;
};

export const TIMELINE_TITLE = '澳洲 AI 变迁时间进程图';
export const TIMELINE_SUBTITLE = '2022-11 ChatGPT 至 2027：九个阶段，全球技术披露 vs 澳洲落地窗口';
export const TIMELINE_FOOTNOTE = '澳洲落地窗口为估计值，基于一线从业观察与本地标志事件；全球节点为公开披露时间。制图于 2026-09。';

export const STAGES: TimelineStage[] = [
	{
		name: 'ChatGPT + 三大云跟进',
		logos: [{ file: 'openai.png', alt: 'OpenAI' }, { file: 'microsoft.png', alt: 'Microsoft' }, { file: 'google.png', alt: 'Google' }, { file: 'aws.png', alt: 'AWS' }],
		au: ['2023-01', '2023-12'],
		global: [
			{ at: '2022-11', label: '2022-11-30 ChatGPT 发布' },
			{ at: '2023-01', label: '2023-01 Azure OpenAI Service GA' },
			{ at: '2023-03', label: '2023-03 GPT-4、Microsoft 365 Copilot 发布（2023-11 GA）' },
			{ at: '2023-04', label: '2023-04 AWS Bedrock 发布（2023-09 GA）' },
		],
		market: '三大云在本地力推 Azure OpenAI、Copilot、Bedrock，微软领跑。Azure OpenAI 到 2023 年下半年才进 Australia East；2023-10 微软宣布在澳投资 A$50 亿扩建云与 AI 基础设施。',
		jd: '公司不知道 JD 怎么写，多从原 ML 团队转岗或挖人。考 transformer 原理和传统 data scientist 题。',
		winner: '传统 data scientist 和 ML engineer。',
	},
	{
		name: '本地巨头跟进 + demo 时代',
		logos: [{ file: 'commonwealth-bank.png', alt: 'Commonwealth Bank' }, { file: 'macquarie.png', alt: 'Macquarie' }, { file: 'future-secure-ai.png', alt: 'Future Secure AI' }, { file: 'heidi-health.png', alt: 'Heidi Health' }, { file: 'n8n.png', alt: 'n8n' }],
		au: ['2023-05', '2024-09'],
		global: [
			{ at: '2023-05', label: '2023 RAG + 向量库成为标配' },
			{ at: '2024-05', label: '2024 n8n 等 no-code / low-code 在澳洲最火' },
			{ at: '2024-08', label: '2024 Cursor 走红' },
		],
		market: 'CBA 2023 年搭建 Gen.ai Studio（H2O.ai），2024-02 披露 50+ 用例，2024-09 启用 AI Factory；Macquarie 2023-06 与 Google Cloud 合作。Heidi Health、Relevance AI、Future Secure AI 等 startup 冒头。受限于模型能力和工程化经验，production 级方案很少，多是 demo。',
		jd: '开始转向 engineering，但集中在 AI 概念、RAG、模型基础。背八股加展示型个人项目即可，会用 Cursor 面试官就满意。',
		winner: '谁敢吃螃蟹，谁就起飞。',
	},
	{
		name: 'Agentic workflow + in-house',
		logos: [{ file: 'mineral-resources.png', alt: 'Mineral Resources' }, { file: 'wesfarmers.png', alt: 'Wesfarmers' }, { file: 'langgraph.png', alt: 'LangGraph' }],
		au: ['2024-07', '2025-06'],
		global: [
			{ at: '2022-10', label: '2022-10 ReAct 论文' },
			{ at: '2023-06', label: '2023-06 OpenAI function calling' },
			{ at: '2024-01', label: '2024-01 LangGraph 发布' },
			{ at: '2024-08', label: '2024-08 Structured outputs' },
			{ at: '2024-12', label: '2024-12 Anthropic《Building effective agents》' },
		],
		market: '银行、legal、矿业、大型独角兽内部 restructure，筹钱建 in-house team。系统性关注 AI 工程化、替代人力的可行性和提效幅度。为保输出稳定，能 deterministic 就不 agentic；大量与数据层的 integration，工具都自己写，摸着石头过河。',
		jd: 'LangGraph 等 deterministic 框架频繁出现在 JD，技术栈以 Python 为主。',
		winner: 'Data engineer 转 AI 最顺，项目多与数据基建、分析、insight 相关。',
	},
	{
		name: 'MCP + 落地压力期',
		logos: [{ file: 'mcp.png', alt: 'Model Context Protocol' }, { file: 'claude.png', alt: 'Claude' }],
		au: ['2025-04', '2025-12'],
		global: [
			{ at: '2024-11', label: '2024-11-25 Anthropic 发布 MCP' },
			{ at: '2025-03', label: '2025-03 OpenAI 采用' },
			{ at: '2025-04', label: '2025-04 Google 采用' },
			{ at: '2025-12', label: '2025-12 捐给 Linux Foundation 旗下 Agentic AI Foundation' },
		],
		market: 'MCP 统一了模型与工具、数据源、既有系统的连接和工具分发，不用再造轮子。初期开发的人多、用的人少，被称 engineer 自嗨；后来成为事实标准，直接 consume SDK 即可。本土中型公司、资金充沛的小众寡头、传统 SaaS 找到 entry point：把用了十几二十年的 API wrap 成模型可用的工具。同期第一批 AI 项目从 demo 进生产，稳定性、harness 设计失误、ROI 逐个暴露。',
		jd: '抢任何有名企背书加实际落地经验的人。薪资、面试流程和时长都是严重泡沫。',
		winner: '有生产落地经验的人，薪资坐火箭。',
	},
	{
		name: 'True agent + consulting 回归',
		logos: [{ file: 'openclaw.png', alt: 'OpenClaw' }, { file: 'bcg.png', alt: 'BCG' }, { file: 'pwc.png', alt: 'PwC' }, { file: 'deloitte.png', alt: 'Deloitte' }, { file: 'ey.png', alt: 'EY' }, { file: 'kpmg.png', alt: 'KPMG' }, { file: 'v2-ai.png', alt: 'V2.ai' }, { file: 'minimax.png', alt: 'MiniMax' }],
		au: ['2025-07', '2026-02'],
		global: [
			{ at: '2025-02', label: '2025-02 Claude Code 预览，2025-05 随 Claude 4 GA' },
			{ at: '2025-04', label: '2025-03 至 05 OpenAI Agents SDK、Google ADK、AWS Strands' },
			{ at: '2025-07', label: '2025-07 deepagents、Kimi K2、AgentCore 预览（10 月 GA）' },
			{ at: '2025-10', label: '2025-10 Microsoft Agent Framework' },
			{ at: '2025-11', label: '2025-11 Clawdbot，2026-01 更名 OpenClaw 爆火' },
			{ at: '2026-01', label: '2026-01 Claude Cowork，agent 下沉到 business' },
		],
		market: '泡沫挤掉一些：高价招来的人也解决不了落地难，流程过快放进来的包装型候选人暴露，公司只能认。薪资从泡沫高点回落。需求仍来自 all-in AI 的头部、受冲击的大厂中厂、FOMO 的寡头。Consulting 举旗杀回：四大、埃森哲、BCG 之外，大量中小型 consulting 转型或新成立。',
		jd: 'HR 大力 polish JD，很多 overkill。Main agent / subagent、context management 开始进入考点。',
		winner: 'Consulting。模型侧 Claude 4.x 工具调用领先但贵，国产模型量大管饱走出自己的路；云厂商靠 harness 和生态争上桌。',
	},
	{
		name: 'Skills 普及 + 生产 checklist',
		logos: [{ file: 'litellm.png', alt: 'LiteLLM' }, { file: 'langfuse.png', alt: 'Langfuse' }],
		au: ['2026-02', '2026-07'],
		global: [
			{ at: '2025-07', label: '2025-07 Ralph Wiggum loop（Geoffrey Huntley）' },
			{ at: '2025-10', label: '2025-10-16 Anthropic Agent Skills 发布（技术上早已成熟）' },
			{ at: '2025-12', label: '2025-12 Skills 成为开放标准；AWS AI-DLC workflow 开源' },
			{ at: '2026-02', label: '2026 年初起 skills 大面积普及，engineering 和 business 都在写' },
		],
		market: '遇事不决写 skill，一周做两次的事就该变成 skill，non-technical 被拉进 agent 开发圈。岗位数量和质量短时间内小幅回退，但 business 侧 agent usage 明显增长。Eval、observability、data sovereignty、access control 成为 checklist，gateway 必提 LiteLLM，observability 必提 Langfuse；AgentCore 这类 all-in-one 平台进入选型，手搓的 LangGraph 要不要淘汰。Overnight 开发常态化，质量与速度摆上台面。',
		jd: '能否写好 skill 来描述工作流和商业需求，成为 BA、PM 的分水岭。Engineer 用 skill 补 DevOps、infra，scope 继续扩大。',
		winner: '会写 skill 的 non-technical。公司开始思考还要不要这么多 eng 职位。',
	},
	{
		name: 'Harness + loop engineering',
		logos: [{ file: 'hermes-agent.png', alt: 'Hermes Agent' }],
		au: ['2026-03', '2026-12'],
		global: [
			{ at: '2026-02', label: '2026-02 Mitchell Hashimoto、OpenAI 提出 harness engineering' },
			{ at: '2026-03', label: '2026-03 Claude Code /loop' },
			{ at: '2026-05', label: '2026-05 Claude Code /goal，Codex 跟进' },
			{ at: '2026-06', label: '2026-06 loop engineering 得名' },
		],
		market: 'Best practice 被企业系统总结并推广：tokenomics、data residency 成为 day-one 设计而非事后优化。Focus 从 SDK 选型、工具设计、提示词，转向 eval 驱动调优、loop 自迭代自修复、AI gateway 统一费用与 guardrail、分层 sampling 长期维护、KV caching 省钱。',
		jd: '只会 Cursor 会被鄙视。考 Claude Code 类 CLI：hooks 等 programmatic enforcement、新 repo 上手流程、自研 harness、context management。现场用 Claude Code 写代码是常态。',
		winner: '会写验收条件和 back pressure 的人。',
	},
	{
		name: 'FDE / enablement',
		logos: [{ file: 'palantir.png', alt: 'Palantir' }, { file: 'claude-fable-5.png', alt: 'Claude Fable 5', label: 'Fable 5' }, { file: 'gpt-6-astra.png', alt: 'GPT 6 Astra', label: 'GPT 6 Astra' }],
		au: ['2026-02', '2026-12'],
		global: [
			{ at: '2025-06', label: '2025 起 AI 公司大规模招 FDE（模式源自 Palantir 驻场工程师）' },
		],
		market: '两周驻场，在客户环境交付生产级应用，做完有奖金。不配 BA 和 PM：Cowork 加现成 skill 顶上，顺便把下阶段合同签了。前提是 skills、harness、CLI agent 让跨领域和并行开发能力大增，模型种类也够丰富。',
		jd: '一人多角色：engineer、BA、PM 加 sales。',
		winner: '全栈且能面对客户的人。',
	},
	{
		name: 'AI governance 集中管控',
		logos: [{ file: 'azure.png', alt: 'Microsoft Azure' }, { file: 'typesafe-ai.png', alt: 'TypeSafe AI' }],
		au: ['2026-06', '2027-04'],
		global: [
			{ at: '2025-05', label: '2025-05 Microsoft Entra Agent ID 预览' },
			{ at: '2025-11', label: '2025-11 Agent 365 发布，2026-05-01 GA' },
			{ at: '2025-12', label: '澳洲政策：2024-09 自愿 AI 安全标准，2025-10 Guidance for AI Adoption，2025-12-02 National AI Plan 与 AI Safety Institute' },
		],
		market: '落地成功的公司 agent 数量指数增长到两三百个：no-code、low-code、pro-code，加上 non-technical 写的 skills。要防 shadow AI、统一 guardrail、设计 least-privilege。法规、地方约束、行业守则能否直接转成 guardrail、eval dataset、LLM-as-judge 逻辑、CI gate 脚本。',
		jd: 'Agent 像员工一样管理：独立 identity 加背锅的真人；onboarding 式一键授权，retire 时一键 revoke。',
		winner: '平台、安全、治理背景的工程师。',
	},
];
