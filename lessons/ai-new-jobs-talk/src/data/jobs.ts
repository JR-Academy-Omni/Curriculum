// 讲座所需数据集 —— 23 个岗位摘自 /ai-new-jobs（JR 内部研究库），4 个漏网之鱼来自外部公开源
// 不重复完整数据，只保留讲座用得到的字段

export type JobCategory = 'technical' | 'governance' | 'industry' | 'missing';
export type RegionCode = 'us' | 'au' | 'sg' | 'cn';

// 单国就业 snapshot —— 4 国调研结果灌入这个 schema
// 数据来源 research/{us,cn,au,sg}-job-market.md
// 🚨 没数据时整个 region 字段不填 / 单字段不填，绝不编造数据
export interface RegionSnapshot {
	salary?: string;          // 本币年薪/总包 range；缺失 omit
	topEmployers?: string[];  // 该国具体公司 2-4 个；缺失 omit
	insight?: string;         // 1 句关键洞察（招聘量 / 签证 / 监管 / 趋势）；缺失 omit
	visaFriendly?: '★' | '★★' | '★★★' | 'n/a'; // 仅 AU/SG 用；不适用写 'n/a'
}

export interface DeepJob {
	id: string;
	title: string;        // 主标题（英文为主 · 业内通用名）
	subtitle: string;     // 副标题（地道中文 · 一句话 tagline）
	category: JobCategory;
	bornYear: number;
	salaryRange: string;
	growthNote?: string;
	pitch: string;        // 一句话定义
	story: string;        // 真实的故事 / 数据冲击
	skills: string[];
	hiring: string[];
	jrCourses?: { slug: string; titleZh: string }[];
	sourceUrl?: string;   // 野生新工种必填，标数据源

	// ---- 4 国 snapshot（research/{us,cn,au,sg}-job-market.md 提取）----
	// 任何字段缺失 = 显示"数据不足"；不允许用其他国家数据估算补位
	regions?: Partial<Record<RegionCode, RegionSnapshot>>;

	// ---- 转型页字段（DeepJobTransitionSlide 用）----
	whoFits?: { trait: string; detail: string }[];        // 适合谁：4 条画像 + 一句详情
	howToBecome?: { step: string; detail: string }[];     // 怎么转型：4 步路径，每步标题 + 落地动作
	transitionExample?: { who: string; story: string } | null; // 1 个真实转型案例；找不到 null
	recommendedResources?: { name: string; type: string; url?: string }[]; // 3-5 个外部资源
}

export interface BriefJob {
	id: string;
	nameZh: string;
	nameEn: string;
	salaryRange: string;
	oneLiner: string;
}

// ============ 技术岗 13 ============
export const TECH_DEEP: DeepJob[] = [
	{
		id: 'ai-engineer',
		title: 'AI Engineer',
		subtitle: 'AI 工程师 · 把模型变成产品的人',
		category: 'technical',
		bornYear: 2024,
		salaryRange: '$155K – $400K+',
		growthNote: '+300%',
		pitch: 'AI 时代的全栈工程师 —— 软件工程师 × 数据科学家的混合体。',
		story: '2026 中级 base $155K-$200K、senior $350-600K+。OpenAI 人均股权 $1.5M（Fortune 2026），Anthropic Research Scientist 总包中位数 $746K，Google DeepMind 高级岗 $893K。日常 70%+ 编码通过 Cursor / Claude Code / Kiro 完成。新趋势：AI 推理算力正在成为薪酬第四组成部分 —— 工程师在面试中谈 Token 预算而不只是底薪。',
		skills: ['LLM', 'RAG', 'AI Agent', 'Prompt Engineering', 'AI Coding', '系统设计'],
		hiring: ['OpenAI', 'Anthropic', 'Google', 'Meta', 'Stripe', 'Shopify'],
		jrCourses: [
			{ slug: 'ai-engineer-bootcamp', titleZh: 'AI Engineer 训练营' },
			{ slug: 'web-code-bootcamp-or-learn-to-code-1', titleZh: 'AI Engineer 全栈项目班' },
		],
		whoFits: [
			{ trait: '扎实软件工程师', detail: '有 2+ 年 production 工程经验，会写干净代码、debug、做系统设计，是最大优势' },
			{ trait: 'Python 熟练者', detail: '日常用 Python 写脚本/服务，能快速上手 PyTorch、Hugging Face、FastAPI 工具链' },
			{ trait: '产品/业务感强', detail: '愿意贴近真实用户问题，能把模糊需求拆成可评估的 LLM 任务' },
			{ trait: '动手做完整项目', detail: '喜欢从 idea 到上线全流程通跑，3-5 个 end-to-end RAG/Agent 项目胜过任何证书' },
		],
		howToBecome: [
			{ step: '打基础 (1-2 个月)', detail: '啃完 Python + Pandas，跑通 OpenAI/Anthropic API，做一个能问答的 RAG demo' },
			{ step: '做评估与上线 (2 个月)', detail: '学 LangSmith / Evals，给自己的 RAG 加 faithfulness/recall@k 指标并部署到云端' },
			{ step: '啃 Agent 与生产化 (2 个月)', detail: '用 function calling 做多步骤 Agent，加 vector DB、监控、cost 控制和回滚' },
			{ step: '输出与求职 (1-2 个月)', detail: 'GitHub 放 3 个 end-to-end 项目，写技术博客复盘，投 AI-first 公司岗位' },
		],
		transitionExample: {
			who: 'Shawn Wang (swyx) · 前 AWS / Netlify / Temporal DevRel',
			story: '做了多年量化和开发者关系，2023 年发文 The Rise of the AI Engineer 提出这个岗位，现创办 Latent Space 与 AI Engineer 大会',
		},
		recommendedResources: [
			{ name: 'The Rise of the AI Engineer', type: 'article', url: 'https://www.latent.space/p/ai-engineer' },
			{ name: 'What We Learned from a Year of Building with LLMs', type: 'article', url: 'https://www.oreilly.com/radar/what-we-learned-from-a-year-of-building-with-llms-part-i/' },
			{ name: 'Hugging Face Transformers', type: 'repo', url: 'https://github.com/huggingface/transformers' },
			{ name: 'OpenAI Cookbook', type: 'repo', url: 'https://github.com/openai/openai-cookbook' },
			{ name: 'Cursor', type: 'tool', url: 'https://cursor.com' },
		],
	},
	{
		id: 'forward-deployment-engineer',
		title: 'Forward Deployment Engineer',
		subtitle: 'FDE · 前线交付工程师 · 坐进客户会议室 2 周内出生产 demo',
		category: 'technical',
		bornYear: 2024,
		salaryRange: '$270K – $500K+',
		pitch: 'Palantir 2010 年代发明、2024 年被 OpenAI / Anthropic 大规模复制的复合型工程岗位。',
		story: '不坐总部写模型，也不是售前 SE —— 直接嵌入客户团队现场，把基础模型 API 改造成跑在客户真实业务里的生产代码。OpenAI FDE base $270K-$385K + 股权，总包 $500K+；Anthropic FDE base $340K-$485K。25-40% 出差率。前 Palantir FDE 现在占据头部 AI 公司工程领导层的大半。',
		skills: ['全栈工程', '快速原型', 'LLM 应用', '业务嗅觉', '客户现场交付'],
		hiring: ['OpenAI', 'Anthropic', 'Palantir', 'Scale AI', 'Cohere', 'Databricks'],
		jrCourses: [
			{ slug: 'ai-engineer-bootcamp', titleZh: 'AI Engineer 训练营' },
			{ slug: 'mcp', titleZh: 'AI Agent & MCP 项目实战营' },
		],
		whoFits: [
			{ trait: '全栈工程底子', detail: '能独立从前端 React 到后端 API 到云部署一条龙交付原型' },
			{ trait: '客户现场不晕场', detail: '接受 25-40% 出差，在客户会议室边听需求边敲代码改方案' },
			{ trait: 'LLM 落地经验', detail: '做过 RAG、Agent、Prompt 工程，不只调过 ChatGPT 网页版' },
			{ trait: '业务嗅觉强', detail: '能把 CFO 说的"降本"翻成数据管道，把工程师说的"token 限制"翻给老板' },
		],
		howToBecome: [
			{ step: '打基础 (3-6 个月)', detail: 'Python + TypeScript + 一朵云（AWS 优先），跑通 REST/GraphQL 与认证' },
			{ step: '做 LLM 项目 (3 个月)', detail: 'GitHub 上交付 2-3 个端到端 RAG/Agent 应用，部署上线带 README' },
			{ step: '接咨询单 (3-6 个月)', detail: '在 Upwork 或本地中小企业承接 AI POC，练客户沟通与需求拆解' },
			{ step: '投 FDE 岗 (持续)', detail: '投 OpenAI/Anthropic/Palantir/Scale，简历突出"客户交付 + 上线案例"而非论文' },
		],
		transitionExample: {
			who: 'Nabeel S. Qureshi · Palantir 前 Forward Deployed Engineer',
			story: '在 Palantir 做 FDE 近 8 年，做过 COVID 响应、AI 药物发现、Airbus 制造优化，现为创业者与 Mercatus Center AI 政策访问学者',
		},
		recommendedResources: [
			{ name: 'OpenAI Careers · FDE NYC', type: 'article', url: 'https://openai.com/careers/forward-deployed-engineer-(fde)-nyc-new-york-city/' },
			{ name: 'Anthropic · Forward Deployed Engineer', type: 'article', url: 'https://job-boards.greenhouse.io/anthropic/jobs/4985877008' },
			{ name: 'Nabeel · Reflections on Palantir', type: 'article', url: 'https://nabeelqu.substack.com/p/reflections-on-palantir' },
			{ name: 'AI Engineering Field Guide', type: 'repo', url: 'https://github.com/alexeygrigorev/ai-engineering-field-guide' },
			{ name: 'Bloomberry · Analyzed 1000 FDE jobs', type: 'article', url: 'https://bloomberry.com/blog/i-analyzed-1000-forward-deployed-engineer-jobs-what-i-learned/' },
		],
	},
	{
		id: 'ai-agent-developer',
		title: 'AI Agent Developer',
		subtitle: '智能体开发者 · 让 AI 自己规划、调工具、跑完多步工作流',
		category: 'technical',
		bornYear: 2024,
		salaryRange: '$130K – $250K+',
		growthNote: '+986% (LinkedIn)',
		pitch: '设计和构建能自主规划、推理、用工具并执行多步骤工作流的 AI 智能体系统。',
		story: 'LinkedIn 报告 +986% 增长。Gartner 预测 2026 年底 40% 企业应用集成 AI Agent（2025 初 <5%）。新加坡 AI 岗位密度全球最高 (3.2%)，是亚太区这个角色最热的市场。技术栈：LangChain / CrewAI / Claude Agent SDK。',
		skills: ['Multi-Agent', 'LangChain', '工作流编排', 'Tool Use'],
		hiring: ['OpenAI', 'Microsoft', 'Salesforce', 'Grab'],
		jrCourses: [
			{ slug: 'ai-agent', titleZh: 'AI Agent 系统项目开发实战' },
			{ slug: 'multi-agent-for-everyone-ai', titleZh: 'Multi-agent for Everyone' },
			{ slug: 'mcp', titleZh: 'AI Agent & MCP 项目实战营' },
		],
		whoFits: [
			{ trait: '后端/全栈背景', detail: '懂 API、数据库、系统集成的开发者最容易切入，工程能力比算法更稀缺' },
			{ trait: '工作流拆解能力', detail: '能把复杂任务拆成可调用的工具和步骤，比写 Prompt 更核心的能力' },
			{ trait: '对 LLM 边界敏感', detail: '知道模型会幻觉、会失败，愿意写评测和日志而不是盲目信任输出' },
			{ trait: '产品思维', detail: '愿意贴近真实业务场景做 Agent，而不只是跑 demo 和发 Twitter 截图' },
		],
		howToBecome: [
			{ step: '打基础 (2-4 周)', detail: '吃透 Tool Use、Function Calling、ReAct 模式；跑通 LangChain 官方 Quickstart' },
			{ step: '学框架 (4-6 周)', detail: '深入 LangGraph 做状态机编排，CrewAI 做多 Agent 协作，Claude Agent SDK 做生产级' },
			{ step: '做项目 (6-8 周)', detail: '做 2-3 个真实 Agent：研究助手、客服自动化、代码 Reviewer，部署上线带 Trace' },
			{ step: '进入市场 (持续)', detail: '开源到 GitHub、写 Blog 拆解架构、投递 OpenAI/Microsoft/Grab 等 Agent 团队岗位' },
		],
		transitionExample: {
			who: 'Harrison Chase · 原 Robust Intelligence ML 团队负责人',
			story: 'Kensho 做实体链接、Robust Intelligence 带 ML 测试团队，2022 年 11 月业余创建 LangChain，半年后成为 Agent 框架事实标准',
		},
		recommendedResources: [
			{ name: 'Building agents with Claude Agent SDK', type: 'article', url: 'https://www.anthropic.com/engineering/building-agents-with-the-claude-agent-sdk' },
			{ name: 'Anthropic Claude Cookbooks · Agent SDK', type: 'repo', url: 'https://github.com/anthropics/claude-cookbooks/tree/main/claude_agent_sdk' },
			{ name: 'AI Agents in LangGraph (Harrison Chase)', type: 'course', url: 'https://learn.deeplearning.ai/courses/ai-agents-in-langgraph/information' },
			{ name: 'LangChain 官方文档', type: 'tool', url: 'https://python.langchain.com/docs/introduction/' },
			{ name: 'CrewAI 多 Agent 协作框架', type: 'repo', url: 'https://github.com/crewAIInc/crewAI' },
		],
	},
	{
		id: 'ai-adoption-specialist',
		title: 'AI Adoption Specialist',
		subtitle: 'AI 落地变革官 · 一半工具培训 · 一半员工心理疏导',
		category: 'technical',
		bornYear: 2025,
		salaryRange: '$90K – $190K',
		pitch: '半技术半"人"的复合岗 —— 一半 AI 工具培训和部署策略，一半员工心理疏导和变革管理。',
		story: '2028 年前全球将新增 71,000 个变革采纳专家岗位（ServiceNow 数据）。Lockheed Martin / DPR Construction / 美国空军等都在大规模招。心理学 / HR / 培训 / 咨询出身的人反而比纯工程师更有优势 —— 帮员工克服"AI 会取代我"的焦虑，把 AI 从"被迫使用的工具"变成"主动拥抱的助手"。',
		skills: ['变革管理', '培训赋能', '心理辅导', 'AI 工具栈'],
		hiring: ['Lockheed Martin', 'McKinsey', 'Deloitte', 'DPR Construction'],
		jrCourses: [
			{ slug: 'ai-adoption-bootcamp', titleZh: 'AI Adoption Specialist 训练营' },
			{ slug: 'ai-essentials-bootcamp', titleZh: 'AI 必修课' },
		],
		whoFits: [
			{ trait: 'HR / L&D 出身', detail: '做过培训设计、员工赋能、绩效改进，懂成人学习与组织行为，自带变革落地经验' },
			{ trait: '咨询 / PM 背景', detail: '管过跨部门项目、做过流程梳理、能写干系人沟通方案，能把 AI 试点推到全员落地' },
			{ trait: '心理学 / 组织行为', detail: '懂抗拒情绪、能做共情访谈、识别中层阻力，比纯工程师更能化解员工对 AI 的恐惧' },
			{ trait: '业务运营老兵', detail: '在某个垂直岗位深耕 5 年以上，懂真实工作流痛点，AI 工具选型时能说人话给老板' },
		],
		howToBecome: [
			{ step: '工具栈 (4 周)', detail: '把 ChatGPT、Copilot、Claude、Gemini、NotebookLM 用熟，能给非技术同事做 30 分钟演示' },
			{ step: '变革方法论 (6 周)', detail: '学 Prosci ADKAR 或 ATD AI in L&D 证书，掌握抗拒诊断与采纳度量化指标' },
			{ step: '内部试点 (8 周)', detail: '挑一个 10 人小团队跑 AI 工具试点，量化时间节省并写成案例文档' },
			{ step: '求职打包 (4 周)', detail: '把试点案例做成 portfolio，简历改成 Change/Enablement 关键词，投 Big 4 与企业内训岗' },
		],
		transitionExample: null,
		recommendedResources: [
			{ name: 'Prosci Change Management Certification', type: 'course', url: 'https://www.prosci.com/solutions/training-programs/change-management-certification-program' },
			{ name: 'ATD Applying AI in L&D Certificate', type: 'course', url: 'https://www.td.org/education-courses/applying-ai-in-learning-and-development-certificate' },
			{ name: "Rewired (McKinsey)", type: 'book', url: 'https://www.mckinsey.com/featured-insights/mckinsey-on-books/rewired' },
			{ name: 'ServiceNow · Change Adoption Specialist', type: 'article', url: 'https://www.servicenow.com/blogs/2024/become-change-adoption-specialist' },
			{ name: 'Prosci AI Change Management Hub', type: 'article', url: 'https://www.prosci.com/ai-change-management' },
		],
	},
];

export const TECH_BRIEF: BriefJob[] = [
	{ id: 'prompt-engineer', nameZh: '提示词工程师', nameEn: 'Prompt Engineer', salaryRange: '$100K-$300K+', oneLiner: '设计 LLM 输入指令；正在从独立岗转为所有 AI 从业者的基础技能。' },
	{ id: 'context-engineer', nameZh: '上下文工程师', nameEn: 'Context Engineer', salaryRange: '$130K-$220K+', oneLiner: 'Karpathy 2025 中提出 —— 不只写 Prompt，架构整套信息系统让 AI 拿到正确上下文。' },
	{ id: 'rag-engineer', nameZh: 'RAG 工程师', nameEn: 'RAG Engineer', salaryRange: '$120K-$200K+', oneLiner: '把 LLM 接到企业知识库 —— 澳洲四大行 + 新加坡金融机构是亚太最大雇主。' },
	{ id: 'ai-trainer', nameZh: 'AI 训练师', nameEn: 'AI Trainer', salaryRange: '$60K-$180K+', oneLiner: 'RLHF + 数据标注；东南亚是数据标注外包基地，高级 RLHF 集中在美英。' },
	{ id: 'algorithm-bias-auditor', nameZh: '算法偏见审计员', nameEn: 'Algorithm Bias Auditor', salaryRange: '$90K-$160K', oneLiner: 'EU AI Act 2026/8 强制后从可选变必需；统计 / 社会学背景能进。' },
	{ id: 'ai-red-teamer', nameZh: 'AI 红队测试员', nameEn: 'AI Red Teamer', salaryRange: '$110K-$200K', oneLiner: '对抗性攻击 LLM 找漏洞；CTF 排名比工作年限更值钱。' },
	{ id: 'mlops-engineer', nameZh: 'MLOps 工程师', nameEn: 'MLOps Engineer', salaryRange: '$120K-$200K', oneLiner: 'LinkedIn 5 年 +9.8x 增长；澳洲银行 / SaaS 公司是亚太主场。' },
	{ id: 'ai-automation-specialist', nameZh: 'AI 自动化专家', nameEn: 'AI Automation Specialist', salaryRange: '$100K-$180K', oneLiner: '连接业务运营和 AI 工程；不需要写很多代码，重在流程分析。' },
	{ id: 'knowledge-architect', nameZh: '知识架构师', nameEn: 'Knowledge Architect', salaryRange: '$100K-$170K', oneLiner: 'Data Engineer × AI Engineer 的交叉升级版 —— GraphRAG 时代刚需。' },
];

// ============ 治理管理岗 5 ============
export const GOV_DEEP: DeepJob[] = [
	{
		id: 'chief-ai-officer',
		title: 'Chief AI Officer',
		subtitle: '首席 AI 官 (CAIO) · 在董事会上谈 AI 战略 · 总包中位数 $1.8M',
		category: 'governance',
		bornYear: 2024,
		salaryRange: '$200K – $400K+ (total comp $1.8M)',
		pitch: '在董事会层面制定 AI 战略，指导各部门落地，管 AI 预算和治理框架。',
		story: 'IBM 数据：26% 组织已设立 CAIO（两年前仅 11%），FTSE 100 中 48% 已任命。平均总薪酬 $1.8M，顶级 $2.6M+。人才池：50% 来自数据科学，21% 咨询，17% 工程 —— 不是只有技术大牛才能当。',
		skills: ['AI 战略', '组织变革', '技术管理'],
		hiring: ['Fortune 500', 'Big 4 咨询', '新加坡 Smart Nation'],
		jrCourses: [
			{ slug: 'ai-essentials-bootcamp', titleZh: 'AI 必修课' },
			{ slug: 'ai-adoption-bootcamp', titleZh: 'AI Adoption Specialist 训练营' },
		],
		whoFits: [
			{ trait: '已是 VP/总监级', detail: '10-15 年管理经验，带过跨部门团队，对预算和组织变革有实操' },
			{ trait: '数据科学背景', detail: 'ML/数据团队负责人占 CAIO 池 50%，最自然的入口' },
			{ trait: '咨询合伙人', detail: 'Big 4 / MBB 出身占 21%，擅长把 AI 战略对齐业务' },
			{ trait: '懂治理与合规', detail: '能向董事会讲 AI 风险、伦理、监管，不只是技术 demo' },
		],
		howToBecome: [
			{ step: '立 AI 战略案例 (6-12 月)', detail: '在现岗交付一个有 P&L 影响的 AI 项目，量化 ROI 给 CEO 看' },
			{ step: '补高管教育 (3-6 月)', detail: 'MIT/Wharton/Chicago Booth 的 CAIO Program，进高管圈' },
			{ step: '跨职能轮岗 (12 月)', detail: '主动接 governance / 风控 / HR 变革议题，脱离纯技术身份' },
			{ step: '对外发声 + 猎头 (持续)', detail: 'LinkedIn 写 AI 战略观点、上行业峰会，让 Egon Zehnder 等高管猎头能找到你' },
		],
		transitionExample: {
			who: 'Martin Stumpe · Danaher CAIO（前 Tempus AI Lead）',
			story: '2025-06-27 Danaher 官方公告任命其为 Chief Technology and AI Officer，2024 年先以 Chief Data and AI Officer 加入',
		},
		recommendedResources: [
			{ name: 'MIT Sloan AI Executive Academy', type: 'course', url: 'https://executive.mit.edu/course/ai-executive-academy/a05U1000002o7uoIAA.html' },
			{ name: 'Chicago Booth CAIO Program', type: 'course', url: 'https://www.chicagobooth.edu/executiveeducation/programs/executive-management/cxo-programs/caio-program' },
			{ name: 'IBM IBV · CEOs Reshaping C-suite for AI', type: 'article', url: 'https://newsroom.ibm.com/2026-05-04-ibm-study-ceos-are-reshaping-c-suite-roles-for-the-ai-era' },
			{ name: 'HBR · Why You Need a Chief Data/Analytics/AI Officer', type: 'article', url: 'https://hbr.org/2025/12/why-your-company-needs-a-chief-data-analytics-and-ai-officer' },
			{ name: 'CMU Heinz Chief Data and AI Officer Certificate', type: 'course', url: 'https://www.heinz.cmu.edu/programs/executive-education/chief-data-ai-officer-certificate' },
		],
	},
	{
		id: 'ai-product-manager',
		title: 'AI Product Manager',
		subtitle: 'AI 产品经理 · 把 ML 能力翻译成用户能感知的价值 · 比传统 PM 高 20-30%',
		category: 'governance',
		bornYear: 2024,
		salaryRange: '$120K – $220K',
		pitch: '负责 AI 驱动产品的全生命周期 —— 把复杂 ML 能力翻译为用户能感知的价值。',
		story: '2025 年全球超 12,000 人转入 AI PM 岗位。LinkedIn 报告全球 AI PM 岗位 YoY 增长 30%。比传统 PM 薪资高 20-30%（KPMG 数据）—— 这是传统 PM 转型最现实的路径。新加坡 / 马来西亚的 Grab、Shopee、Sea Group 等东南亚独角兽是区域最大雇主。',
		skills: ['AI 能力评估', '产品策略', '用户研究'],
		hiring: ['Google', 'Grab', 'Sea Group', 'Atlassian'],
		jrCourses: [
			{ slug: 'business-analyst', titleZh: 'AI 产品经理 (BA) 训练营' },
			{ slug: 'ai-essentials-bootcamp', titleZh: 'AI 必修课' },
		],
		whoFits: [
			{ trait: '现任 PM / BA', detail: '已有产品/需求经验，想用 AI 把现有产品升级而不是从零转行' },
			{ trait: '技术好奇心强', detail: '愿意亲手跑 ChatGPT API、写 prompt、读 model eval，不只把 AI 当 buzzword' },
			{ trait: '懂业务翻译', detail: '能把模糊的用户痛点翻成可衡量指标，再翻成工程师能落地的需求' },
			{ trait: '接受不确定性', detail: 'AI 输出有概率性，做得了 A/B 实验、能接受模型 70% 准确率上线迭代' },
		],
		howToBecome: [
			{ step: '打底 AI 认知 (4 周)', detail: '读 OpenAI / Anthropic 官方文档，跑通 ChatGPT、Claude API，理解 token、context、eval' },
			{ step: '做 AI Side Project (6 周)', detail: '用 Cursor / v0 自己 vibe coding 一个 AI 小工具上线，写复盘文章' },
			{ step: '内部转岗或加 AI Feature (3 个月)', detail: '在现公司主动接 AI 相关 feature，积累 launch + metric 案例做 portfolio' },
			{ step: '对外面试 AI PM 岗 (2 个月)', detail: '针对 AI 产品 sense、eval 系统、prototype 三类题准备，投 OpenAI / Anthropic / AI 创业公司' },
		],
		transitionExample: {
			who: 'Marily Nika · 原 Google Assistant / Meta Labs AI PM（ML 博士转 PM）',
			story: 'Imperial College ML 博士毕业，Google 8 年 AI PM + Meta Labs AI Product Lead，后创办 AI Product Academy 培训 2 万+ PM 转型',
		},
		recommendedResources: [
			{ name: "Lenny's Newsletter · Marily Nika 专访", type: 'article', url: 'https://www.lennysnewsletter.com/p/summary-ai-and-product-management' },
			{ name: 'AI PM Bootcamp (Marily Nika · Maven)', type: 'course', url: 'https://maven.com/marily-nika/ai-pm-bootcamp' },
			{ name: 'Product Growth · AI PM Newsletter', type: 'article', url: 'https://www.news.aakashg.com/t/ai-pm' },
			{ name: 'Reforge · PM in the Age of AI', type: 'article', url: 'https://www.reforge.com/blog/ai-impact-product-management' },
			{ name: 'OpenAI Careers · PM 岗位列表', type: 'tool', url: 'https://openai.com/careers/search/?l=e8062547-b090-4206-8f1e-7329e0014e98' },
		],
	},
	{
		id: 'ai-ethics-officer',
		title: 'AI Ethics & Compliance Officer',
		subtitle: 'AI 伦理合规官 · 不写代码 · 法务 / 政策 / 合规背景最吃香',
		category: 'governance',
		bornYear: 2026,
		salaryRange: '$120K – $200K',
		growthNote: '+45% YoY',
		pitch: '确保 AI 系统符合法规，做偏见审计，在法务 / 技术 / 业务之间架桥。',
		story: '2026 年 8 月 EU AI Act 高风险条款强制执行 + 新加坡 AI Governance Framework 收紧 —— 双重法规驱动让这个岗位需求 +45% YoY。完全不写代码 —— 法律 / 政策 / 合规背景最吃香。给"我不是工程师但想进 AI"的人最明确的入口。',
		skills: ['AI 治理', '法规合规', '风险评估'],
		hiring: ['Meta', 'Google', 'IBM', 'Big 4'],
		jrCourses: [
			{ slug: 'ai-essentials-bootcamp', titleZh: 'AI 必修课' },
			{ slug: 'business-analyst', titleZh: 'AI 产品经理 (BA) 训练营' },
		],
		whoFits: [
			{ trait: '法律合规背景', detail: '律师、企业法务、数据隐私顾问，熟悉 GDPR/PIPL，能把法条翻译成工程团队听得懂的清单' },
			{ trait: '政策研究出身', detail: '智库、政府监管、政策分析师，理解立法逻辑，能预判 EU AI Act 落地的执行边界' },
			{ trait: '审计与风控经验', detail: 'Big 4 审计、ISO 27001、SOX 合规审计员，擅长把抽象风险拆成可量化的控制点' },
			{ trait: '社科或哲学背景', detail: '社会学、伦理学、公共政策研究者，对算法偏见、社会影响有系统性框架' },
		],
		howToBecome: [
			{ step: '法规打底 (2 个月)', detail: '通读 EU AI Act 全文、NIST AI RMF 四大功能、新加坡 Model AI Governance Framework' },
			{ step: '考 IAPP AIGP 认证 (3 个月)', detail: '全球首个 AI 治理专业认证，覆盖伦理、风险、法规三大支柱' },
			{ step: '真实场景脱敏练习 (2 个月)', detail: '用 NIST AI RMF Playbook 给一个公开 AI 产品（如招聘算法）做风险评估报告' },
			{ step: '进入 Big 4 或大厂 (3-6 个月)', detail: 'Deloitte/PwC 的 AI Assurance team 是最佳跳板，再横跳 Meta/Google 的 Responsible AI 团队' },
		],
		transitionExample: {
			who: 'Jack Clark · Anthropic 联合创始人 & Head of Policy（原 Bloomberg 记者）',
			story: '2015 Bloomberg 写 AI 报道，2016 跳 OpenAI 做 Policy Director 4 年，2021 联合创办 Anthropic 主管全球 AI 政策，零工程背景',
		},
		recommendedResources: [
			{ name: 'EU AI Act 官方全文', type: 'article', url: 'https://artificialintelligenceact.eu/' },
			{ name: 'NIST AI Risk Management Framework', type: 'article', url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
			{ name: 'IAPP AIGP 认证', type: 'course', url: 'https://iapp.org/certify/aigp' },
			{ name: 'OECD AI Principles & Policy Observatory', type: 'article', url: 'https://oecd.ai/en/ai-principles' },
			{ name: 'Import AI · Jack Clark Newsletter', type: 'article', url: 'https://jack-clark.net/' },
		],
	},
];

export const GOV_BRIEF: BriefJob[] = [
	{ id: 'chief-ai-revenue-officer', nameZh: '首席 AI 营收官', nameEn: 'Chief AI Revenue Officer', salaryRange: '$180K-$350K+', oneLiner: 'CAIO 细分 —— 专做"用 AI 赚钱"而非"管 AI"。' },
	{ id: 'human-ai-collaboration-leader', nameZh: '人机协作负责人', nameEn: 'Human-AI Collaboration Leader', salaryRange: '$110K-$190K', oneLiner: 'IDC 2026 年 G2000 中 40% 岗位涉及 Agent 协作；管 Agent 的人有 40% 薪资溢价。' },
];

// ============ 行业垂直岗 5 ============
export const INDUSTRY_DEEP: DeepJob[] = [
	{
		id: 'geo-specialist',
		title: 'GEO Specialist',
		subtitle: 'AI 搜索可见性专家 · ChatGPT / Perplexity / 豆包时代的 SEO',
		category: 'industry',
		bornYear: 2025,
		salaryRange: '$70K – $140K (top 36% 在 $200K-$500K)',
		growthNote: '市场 +45.5% CAGR',
		pitch: '优化内容在 AI 搜索引擎（ChatGPT / Perplexity / Gemini / AI Overview）中的可见性。',
		story: '一个全新学科 —— 2024 年前几乎不存在。GEO 市场 2025 ~$10 亿，2034 预计 $170 亿（45.5% CAGR）。中国 GEO 市场 2025 上半年单半年达 $36.5 亿（+240% YoY）。36% 从业者年薪 $200K-$500K。需要 3-5 年 SEO 经验 + LLM 知识 —— SEO 没死，转 GEO 的人正在吃这波红利。',
		skills: ['AI 搜索优化', '内容策略', 'SEO', 'Schema 标记'],
		hiring: ['HubSpot', 'Moz', 'SEMrush', '中国 GEO 服务商'],
		jrCourses: [
			{ slug: 'digital-marketing', titleZh: 'Digital Marketing 项目训练营' },
			{ slug: 'ai-essentials-bootcamp', titleZh: 'AI 必修课' },
		],
		whoFits: [
			{ trait: 'SEO 老兵转型', detail: '已经做过 3-5 年传统 SEO 或内容营销，懂关键词、E-E-A-T、技术 SEO 基础' },
			{ trait: '内容营销人', detail: 'Content marketer / 编辑，会写英文长文、懂搜索意图，熟悉 HubSpot / WordPress 等内容平台' },
			{ trait: '技术型 Digital Marketer', detail: '能读懂 JSON-LD、Schema.org 标记、HTML head，会用 Ahrefs / Semrush / GSC 看数据' },
			{ trait: 'AI 工具早期使用者', detail: '每天用 ChatGPT / Perplexity / Claude 工作，理解 LLM 引用机制，对 AI Overviews 输出敏感' },
		],
		howToBecome: [
			{ step: '打底 SEO 基础 (1-2 月)', detail: '跟 Aleyda Solis 的 LearningSEO.io 免费 roadmap 把 E-E-A-T、技术 SEO、Schema 基础走一遍' },
			{ step: '学 AI 搜索原理 (1 月)', detail: '读 Princeton GEO 论文 + LearningAIsearch.com 免费 roadmap，理解 LLM 如何选 source 和引用' },
			{ step: '实操 Schema + GEO 案例 (2 月)', detail: '在自己博客做 JSON-LD entity / FAQ / Article schema，跟踪 ChatGPT / Perplexity 引用率变化' },
			{ step: '输出公开作品集 (持续)', detail: '在 LinkedIn / Substack 写 GEO 实验复盘，参考 Lily Ray 模式建立个人品牌进 GEO 圈子' },
		],
		transitionExample: {
			who: 'Lily Ray · Amsive VP of SEO & AI Search（15 年 SEO 老兵）',
			story: '2025 年创立 Algorythmic 专做 SEO + AI Search 咨询，公开分享传统 SEO 资产如何自然延伸到 GEO/AEO',
		},
		recommendedResources: [
			{ name: 'LearningAIsearch.com · Aleyda Solis', type: 'course', url: 'https://learningaisearch.com/' },
			{ name: 'LearningSEO.io · Aleyda Solis', type: 'course', url: 'https://learningseo.io/' },
			{ name: 'GEO: Generative Engine Optimization (KDD 2024)', type: 'article', url: 'https://arxiv.org/abs/2311.09735' },
			{ name: 'Lily Ray · A Reflection on SEO, GEO & AI Search', type: 'article', url: 'https://lilyraynyc.substack.com/p/a-reflection-on-seo-and-ai-search' },
			{ name: 'HubSpot · GEO Best Practices', type: 'article', url: 'https://blog.hubspot.com/marketing/generative-engine-optimization-best-practices' },
		],
	},
	{
		id: 'healthcare-ai-integrator',
		title: 'Healthcare AI Integrator',
		subtitle: '医疗 AI 整合师 · 把 AI 装进 EHR / 诊断 / 诊疗路径',
		category: 'industry',
		bornYear: 2024,
		salaryRange: '$100K – $180K',
		pitch: '在临床工作流和 AI 技术之间架桥 —— 部署到 EHR、诊断、诊疗路径。',
		story: '71% 美国医院已部署预测 AI 模型。医疗行业 AI 采纳速度是整体经济的 2.2 倍。新加坡 Smart Health 计划和马来西亚 MyDigital Blueprint 推动区域需求。需要同时懂 AI 工程和 HIPAA / 患者安全合规。',
		skills: ['医疗系统', 'AI 诊断', '临床流程', 'HIPAA'],
		hiring: ['Epic Systems', 'Tempus', 'Google Health'],
		jrCourses: [
			{ slug: 'ai-copilot', titleZh: 'AI 数据分析 & Copilot 实战' },
			{ slug: 'ai-engineer-rag', titleZh: 'AI Engineer 入门：RAG 系统基础' },
		],
		whoFits: [
			{ trait: '临床医生背景', detail: '已是医生 / 护士 / 药剂师，懂临床工作流和患者安全，缺 AI 工程能力' },
			{ trait: '医疗 IT 从业者', detail: '做过 Epic / Cerner EHR 实施、HL7 / FHIR 接口、医院信息科 5 年以上' },
			{ trait: '流行病学 / 公卫', detail: '懂临床数据结构 + 统计建模，转 AI 模型评估和上线监测最快' },
			{ trait: 'HIPAA 合规敏感', detail: '做过医疗合规 / IRB / 数据治理，能在 PHI 和 AI 训练之间架桥' },
		],
		howToBecome: [
			{ step: '医疗 AI 基础 (2 个月)', detail: '刷完 Coursera AI for Medicine 三课，能跑 CNN 做 X 光分类和病情预测' },
			{ step: '临床数据 + FHIR (2 个月)', detail: '学 Epic App Orchard / FHIR R4 / HL7，能在 EHR 沙箱里部署一个 AI 接口' },
			{ step: 'HIPAA + 模型验证 (2 个月)', detail: '考 CAHIMS 或 AHIMA 健康信息认证，跑通模型偏倚 + 临床验证流程' },
			{ step: '真实项目落地 (6 个月)', detail: '在所在医院或 Mayo Clinic Platform / Tempus 开放数据上做一个端到端部署案例' },
		],
		transitionExample: {
			who: 'Eric Topol · 原 Cleveland Clinic 心脏科主任',
			story: '心内科医生 14 年后转 Scripps Research Translational Institute，主推 AI + 基因组个体化医疗，写《Deep Medicine》',
		},
		recommendedResources: [
			{ name: 'AI for Medicine Specialization (DeepLearning.AI)', type: 'course', url: 'https://www.coursera.org/specializations/ai-for-medicine' },
			{ name: 'Stanford AIMI Summer Health AI Bootcamp', type: 'course', url: 'https://aimi.stanford.edu/education/aimi-summer-bootcamp' },
			{ name: 'Stanford AIMI Educational Resources', type: 'tool', url: 'https://aimi.stanford.edu/education/educational-resources' },
			{ name: 'Deep Medicine · Eric Topol', type: 'book', url: 'https://en.wikipedia.org/wiki/Eric_Topol' },
			{ name: 'Epic Healthcare Intelligence 2026 outlook', type: 'article', url: 'https://thisweekhealth.com/news_story/epic-expands-ai-in-ehrs-transforming-healthcare-operations-by-2026/' },
		],
	},
	{
		id: 'ai-compliance-expert',
		title: 'AI Compliance Expert (Finance)',
		subtitle: '金融 AI 合规专家 · 信用 / 反欺诈 / 反洗钱 / 模型风险',
		category: 'industry',
		bornYear: 2024,
		salaryRange: '¥30K – ¥60K/月（亚太基准）',
		pitch: '确保金融 AI（信用 / 反欺诈 / 反洗钱）合规 —— 模型风险、公平性审计、监管报告。',
		story: '2026 年 EU AI Act + DORA + MiCA 三重法规叠加，70%+ 银行已用 AI 但缺治理框架。新加坡 MAS 是亚太最严的 AI 监管框架，澳洲四大行 + 新加坡金融机构是亚太最大雇主。对法律 / 合规 / 审计背景开放。',
		skills: ['金融合规', '大模型', '风控', 'Model Risk'],
		hiring: ['JPMorgan', 'DBS Bank', 'Ant Group', 'ANZ'],
		jrCourses: [
			{ slug: 'business-analyst', titleZh: 'AI 产品经理 (BA) 训练营' },
			{ slug: 'ai-essentials-bootcamp', titleZh: 'AI 必修课' },
		],
		whoFits: [
			{ trait: '审计 / 合规背景', detail: '已在四大、内控、合规部做过 3 年以上，懂控制框架和监管语言' },
			{ trait: 'Model Risk / 风控量化', detail: '做过信用评分、反欺诈、AML 模型验证，熟 SR 11-7 / SR 26-02 模型治理流程' },
			{ trait: '金融法律 / 监管律师', detail: '懂 GDPR、巴塞尔、消保法的法律背景，对 EU AI Act 高风险条款敏感' },
			{ trait: '数据 / ML 工程师转治理', detail: '做过金融场景 ML 部署，想从写模型转去审模型公平性 / 可解释性' },
		],
		howToBecome: [
			{ step: '啃透三大监管框架 (4 周)', detail: 'EU AI Act 高风险条款 + Fed SR 11-7/SR 26-02 + MAS FEAT 原则，建合规 checklist' },
			{ step: '考 GARP RAI 证书 (2-3 月)', detail: 'Risk and AI Certificate 是目前金融 AI 风险唯一权威证，2026 年 10 月考' },
			{ step: '做模型公平性 / 可解释性实战 (6 周)', detail: '用 SHAP / Fairlearn / AIF360 跑信用模型偏见审计，输出可给监管看的报告' },
			{ step: '投递银行 AI Governance 岗 (持续)', detail: 'JPMorgan MRGR、DBS、ANZ、HSBC，强调你的合规 + AI 复合背景' },
		],
		transitionExample: {
			who: 'Kai Yang · ANZ 首位 Chief Data and AI Officer（原 HSBC 亚洲 CDAO）',
			story: '从 Deloitte 咨询到 CBA 首席数据官，再到 HSBC 数据治理，2026 年 7 月被 ANZ 挖去主导 AI agenda 与监管控制',
		},
		recommendedResources: [
			{ name: 'GARP Risk and AI (RAI) Certificate', type: 'course', url: 'https://www.garp.org/rai' },
			{ name: 'MAS FEAT Principles', type: 'article', url: 'https://www.mas.gov.sg/-/media/mas-media-library/schemes-and-initiatives/ftig/project-mindforge/emerging-risks-and-opportunities-of-generative-ai-for-banks.pdf' },
			{ name: 'Fed SR 11-7 Model Risk Management', type: 'article', url: 'https://www.federalreserve.gov/supervisionreg/srletters/sr1107.htm' },
			{ name: 'EU AI Act · Financial Services Guide', type: 'article', url: 'https://matproof.com/blog/eu-ai-act-compliance-financial-services' },
			{ name: 'Fairlearn · 模型公平性审计工具', type: 'repo', url: 'https://github.com/fairlearn/fairlearn' },
		],
	},
];

export const INDUSTRY_BRIEF: BriefJob[] = [
	{ id: 'digital-agronomist', nameZh: '数字农艺师', nameEn: 'Digital Agronomist', salaryRange: '¥8K-¥20K/月 (+470%)', oneLiner: 'AI 农业 +30% CAGR；马来西亚棕榈油 + 澳洲大农场是亚太主场。' },
	{ id: 'ai-education-designer', nameZh: 'AI 教育产品设计师', nameEn: 'AI Education Product Designer', salaryRange: '$80K-$150K', oneLiner: '21% EdTech 岗位明确要求 AI 技能；企业培训 EdTech AI 采纳率最高 31%。' },
];

// ============ 漏网之鱼 4 个 ============
export const MISSING_JOBS: DeepJob[] = [
	{
		id: 'vibe-coder',
		title: 'Vibe Coder / AI-First Founder',
		subtitle: 'AI 一人公司 · 一个人 + 一个 AI = 一个产品 · Karpathy 推动',
		category: 'missing',
		bornYear: 2025,
		salaryRange: '个人项目 $1M – $10M ARR 单人达成',
		pitch: 'Karpathy 2025 推动的"vibe coding"催生的工种 —— 一个人 + 一个 AI = 一个产品。',
		story: '不是企业岗位，是个人 / 小团队商业模式。Pieter Levels (Levelsio) 单人 $200K+ MRR；Marc Lou 8 个独立产品共 $100K+/月 MRR。技术栈：Cursor / Claude Code + 自部署 + Stripe。心智模型：把每一个独立产品当一个实验，能跑就放大，跑不动就关掉。',
		skills: ['Cursor / Claude Code', 'Vibe Coding 方法论', '快速产品验证', 'Indie Hacker 商业'],
		hiring: ['自雇 / Indie Hacker / 小团队 (1-3 人)'],
		jrCourses: [
			{ slug: 'ai-solo-founder-bootcamp', titleZh: 'AI Solo Founder 训练营' },
			{ slug: 'ai-builder', titleZh: 'Vibe Coding 提升班' },
		],
		sourceUrl: 'karpathy.bearblog.dev / levels.io / Indie Hackers',
		whoFits: [
			{ trait: '想自己说了算', detail: '不想再帮别人执行需求，想验证自己的点子，能接受短期收入波动' },
			{ trait: '会用语言表达', detail: '能把想法写清楚、讲明白，因为 AI 编程靠的是描述能力不是语法' },
			{ trait: '懂用户痛点', detail: '做过营销、设计、内容、客服或销售，对真实需求敏感，比纯技术背景更占优' },
			{ trait: '公开做事不怕被看', detail: '愿意在 Twitter / 小红书 / 公众号 build in public，把过程当内容分发' },
		],
		howToBecome: [
			{ step: '2 周打磨工具流', detail: '把 Cursor 或 Claude Code 用顺，配 Stripe + Vercel，做一个能上线收款的小工具练手' },
			{ step: '1 个月跑 3 个小产品', detail: '每个产品只做一个具体痛点，2 周从想法到上线，验证有没有人愿意付钱' },
			{ step: '公开记录过程', detail: '在 Twitter / 小红书每天发进度、数据、踩坑，把构建过程本身当作获客渠道' },
			{ step: '留下能跑的、关掉跑不动的', detail: '用 3-6 个月数据决定哪个产品值得加投入，其余果断关停，把时间集中到能复利的一个' },
		],
		transitionExample: {
			who: 'Marc Lou · 原餐厅服务员（自学转独立开发者）',
			story: '靠 Next.js 模板 ShipFast 起家，2025 年 14 个个人产品总营收公开披露 103 万美元，全过程在 Twitter build in public',
		},
		recommendedResources: [
			{ name: 'Karpathy 原始 vibe coding 推文', type: 'article', url: 'https://x.com/karpathy/status/1886192184808149383' },
			{ name: 'Marc Lou · 2025 年报：$1,032,000 复盘', type: 'article', url: 'https://newsletter.marclou.com/p/i-made-1-032-000-in-2025' },
			{ name: 'Pieter Levels 个人主页', type: 'article', url: 'https://levels.io/' },
			{ name: 'Indie Hackers 社区', type: 'article', url: 'https://www.indiehackers.com/' },
			{ name: 'Cursor 编辑器', type: 'tool', url: 'https://cursor.com/' },
		],
	},
	{
		id: 'robotics-ai-engineer',
		title: 'Embodied AI / Robotics-AI Engineer',
		subtitle: '具身智能工程师 · 把 LLM 接到机械臂、双足机器人、自动驾驶',
		category: 'missing',
		bornYear: 2024,
		salaryRange: '$200K – $400K (base)',
		pitch: '在 LLM 工程师之外的 Embodied AI 工程师 —— 把基础模型接到机械臂、双足机器人、自动驾驶。',
		story: 'Figure AI（2024 估值 $2.6B → 2025 $40B）/ Tesla Optimus / 1X Technologies / Unitree（中国头部）/ Apptronik 浪潮。硅谷已经从"软件 AI"转向"具身 AI"作为下一波叙事。北美 base $200-400K；很多机器人创业公司给早期员工 0.5-2% 股权。需要 ROS / SLAM / 控制理论 + 现代 LLM 知识。',
		skills: ['ROS', 'SLAM', '控制理论', 'Vision-Language-Action 模型', 'PyTorch'],
		hiring: ['Figure AI', 'Tesla', '1X', 'Apptronik', 'Unitree', 'Skild AI'],
		sourceUrl: 'figure.ai/careers, 1x.tech/careers, Levels.fyi',
		whoFits: [
			{ trait: '机器人工程师', detail: '已会 ROS / 控制 / 运动规划，想把传统 pipeline 升级到端到端 VLA 大模型路线' },
			{ trait: 'CV / 感知工程师', detail: '做过 SLAM、3D 重建、目标检测，缺机械臂控制和 RL 训练经验需要补' },
			{ trait: 'RL / 仿真研究者', detail: '玩过 Isaac Gym / MuJoCo / PPO，想把 sim-to-real 落到真实双足或机械臂硬件' },
			{ trait: '自动驾驶感知决策', detail: 'Waymo / Cruise / 蔚小理出身，已熟悉传感器栈，转人形机器人门槛最低' },
		],
		howToBecome: [
			{ step: '补 RL 基础 (4 周)', detail: '跟完 Berkeley CS 285 Sergey Levine 全 23 讲，跑通 PPO / SAC 在 Gym 的 baseline' },
			{ step: '上手 VLA (6 周)', detail: '本地跑 OpenVLA-7B 推理，在 LIBERO 仿真 fine-tune，理解 SigLIP+DinoV2+Llama 架构' },
			{ step: '真实硬件 (8 周)', detail: '买 SO-100 / LeRobot 机械臂或租 Unitree G1，跑 Diffusion Policy / ACT 端到端遥操作收集数据' },
			{ step: '开源刷脸 (持续)', detail: '在 Open X-Embodiment 数据集上贡献新 embodiment，arxiv 挂 workshop paper，投 Figure / 1X / PI' },
		],
		transitionExample: {
			who: 'Karol Hausman · 前 Google DeepMind Staff Research Scientist',
			story: '2024 年与 Sergey Levine、Chelsea Finn 离职创办 Physical Intelligence，做通用机器人基础模型，已融资超 $1B',
		},
		recommendedResources: [
			{ name: 'Berkeley CS 285 Deep RL (Sergey Levine)', type: 'course', url: 'https://rail.eecs.berkeley.edu/deeprlcourse/' },
			{ name: 'OpenVLA: Vision-Language-Action Model', type: 'repo', url: 'https://github.com/openvla/openvla' },
			{ name: 'OpenVLA Paper (arxiv 2406.09246)', type: 'article', url: 'https://arxiv.org/abs/2406.09246' },
			{ name: 'OpenVLA-7B Weights (HuggingFace)', type: 'tool', url: 'https://huggingface.co/openvla/openvla-7b' },
			{ name: 'Figure AI Careers', type: 'article', url: 'https://www.figure.ai/careers' },
			{ name: '1X Technologies Careers', type: 'article', url: 'https://www.1x.tech/careers' },
		],
	},
	{
		id: 'synthetic-data-engineer',
		title: 'Synthetic Data Engineer',
		subtitle: '合成数据工程师 · 训练数据短缺时代的"造水人"',
		category: 'missing',
		bornYear: 2025,
		salaryRange: '$130K – $250K',
		pitch: '训练数据短缺是 2025 年 AI 行业最大瓶颈 —— 生成合成图像 / 文本 / 代码作为训练数据。',
		story: 'Epoch AI 研究：高质量公开文本数据 2026-2032 用尽。Scale AI（被 Meta 收购大部分股权）/ Gretel / Mostly AI 是头部。介于数据工程师和 ML 工程师之间的全新细分 —— 既要懂模型怎么消化数据，也要懂怎么生成"不让模型学崩"的数据。',
		skills: ['Diffusion / GAN', '数据质量评估', '统计分布', 'Privacy-preserving 技术'],
		hiring: ['Scale AI', 'Gretel', 'Mostly AI', 'NVIDIA', 'Snowflake'],
		sourceUrl: 'Epoch AI 报告 / Scale AI careers / Gretel careers',
		whoFits: [
			{ trait: 'Data Engineer 想升级', detail: '已会 ETL / Spark / 数据建模，想从搬运数据升级到生成数据，给大模型当饲料供应商' },
			{ trait: 'ML Engineer 懂数据', detail: '训过模型踩过过拟合坑，知道什么数据让模型崩，能反推该生成什么分布的数据' },
			{ trait: '统计学 / 概率背景', detail: '懂分布、KS 检验、JSD 距离，能定量评估合成数据和真实数据的统计相似度' },
			{ trait: 'Privacy / 安全方向', detail: '做过差分隐私、k-匿名、GDPR 合规的工程师，天然适合生成不泄露 PII 的训练数据' },
		],
		howToBecome: [
			{ step: '跑通 Mostly AI / Gretel SDK (2 周)', detail: '用真实表格数据，跑通 TabularARGN / Gretel Navigator，理解 fidelity vs privacy 的权衡' },
			{ step: '学 Diffusion + GAN 生成 (4 周)', detail: 'Hugging Face Diffusers 教程，复现 Stable Diffusion fine-tune；理解 mode collapse 和数据漂移' },
			{ step: '做数据质量评估管线 (3 周)', detail: '实现 PCA / TSTR / Privacy Risk Score，能量化判断合成数据能不能用于训练' },
			{ step: '复现 NVIDIA Cosmos 数据流 (3 周)', detail: '用 Isaac Sim + Cosmos Predict 生成机器人训练数据，组 portfolio' },
		],
		transitionExample: {
			who: 'Alex Watson · Gretel.ai 联合创始人（前 AWS Macie 总经理）',
			story: '数据安全 + ML 背景出身，把 Macie 卖给 AWS 后联合 NSA 工程师创立 Gretel，把数据隐私经验转成 synthetic data 平台',
		},
		recommendedResources: [
			{ name: 'Will we run out of data? · Epoch AI', type: 'article', url: 'https://epoch.ai/blog/will-we-run-out-of-data-limits-of-llm-scaling-based-on-human-generated-data' },
			{ name: 'NVIDIA Cosmos · Synthetic Data for Physical AI', type: 'article', url: 'https://developer.nvidia.com/blog/scale-synthetic-data-and-physical-ai-reasoning-with-nvidia-cosmos-world-foundation-models/' },
			{ name: 'Mostly AI Synthetic Data Tutorials', type: 'repo', url: 'https://github.com/mostly-ai/mostly-tutorials' },
			{ name: 'Mostly AI SDK', type: 'tool', url: 'https://github.com/mostly-ai/mostlyai' },
			{ name: 'Gretel.ai · 2025 Synthetic Data Goes Mainstream', type: 'article', url: 'https://gretel.ai/blog/2025-the-year-synthetic-data-goes-mainstream' },
		],
	},
	{
		id: 'ai-sales-engineer',
		title: 'AI Sales / Solution Engineer',
		subtitle: 'AI 解决方案工程师 · B2B 商业化 · 把模型 demo 给客户的人',
		category: 'missing',
		bornYear: 2024,
		salaryRange: '$250K – $500K (total comp)',
		pitch: '介于 FDE（深技术嵌入客户）和传统 Sales（关系驱动）之间 —— B2B AI 商业化的桥梁。',
		story: 'OpenAI / Anthropic / Cohere / Databricks 都在大规模招（数量仅次于 FDE）。和 FDE 的区别：SE 多在销售周期前段做技术 demo 和评估，FDE 在签约后做生产落地。技术背景 + 客户沟通能力 = 这个岗位。许多 B2B SaaS 销售工程师正在通过补 LLM 知识转过来。',
		skills: ['LLM 应用 demo 能力', 'B2B 销售流程', 'POC 设计', '技术演讲'],
		hiring: ['OpenAI', 'Anthropic', 'Cohere', 'Databricks', 'Glean'],
		sourceUrl: 'openai.com/careers, anthropic.com/jobs, glean.com/careers',
		whoFits: [
			{ trait: '传统 SaaS SE', detail: '已在 Salesforce/Snowflake/Okta 做技术售前 3 年以上，熟悉 B2B 销售周期' },
			{ trait: 'Solution Architect', detail: '云厂商或 SaaS Solution Architect，懂企业架构和 POC 设计，缺 LLM 实操' },
			{ trait: '客户沟通强', detail: '敢站在 C-level 面前讲技术，能把复杂方案翻译成商业价值，演讲不怯场' },
			{ trait: '半技术背景', detail: 'Python/JS 能改 demo 不写生产代码，会读 API 文档，对 LLM 有学习热情' },
		],
		howToBecome: [
			{ step: '补 LLM 应用 (4 周)', detail: 'OpenAI/Anthropic API 实战，复现 RAG/Agent/Function Calling 三个企业级 demo' },
			{ step: '做 POC 作品集 (6 周)', detail: '选 3 个行业（金融/法务/客服）各做 1 个端到端 demo，含 ROI 测算和安全方案' },
			{ step: '进 PreSales 社区 (持续)', detail: '加入 PreSales Collective，参加 demo 评审，建立 LLM 售前圈内人脉网' },
			{ step: '内推+面试 (2 个月)', detail: '投 OpenAI/Anthropic/Databricks/Glean Solutions Engineer 岗，准备 mock demo 和客户场景演练' },
		],
		transitionExample: {
			who: 'Jennifer Majlessi · 前 Salesforce 资深销售高管',
			story: '从 Salesforce go-to-market 跳槽 OpenAI 任 head of go-to-market，把企业销售经验直接迁移到 LLM 商业化',
		},
		recommendedResources: [
			{ name: 'OpenAI Solutions Engineer Pre-Sales JD', type: 'article', url: 'https://openai.com/careers/solutions-engineer-pre-sales-san-francisco/' },
			{ name: 'PreSales Academy', type: 'course', url: 'https://www.presalescollective.com/academy' },
			{ name: 'Databricks Solutions Engineer Careers', type: 'article', url: 'https://www.databricks.com/company/careers/field-engineering---other/solutions-engineer-8349427002' },
			{ name: 'Anthropic Careers (Sales/SE)', type: 'article', url: 'https://www.anthropic.com/careers' },
			{ name: 'AI in Presales · Redefining Your Playbook', type: 'video', url: 'https://www.youtube.com/watch?v=XUmwjUVwvTU' },
		],
	},
];

export const STATS = {
	totalCovered: 23,
	totalMissing: 4,
	techCount: 13,
	govCount: 5,
	industryCount: 5,
	bornBefore2024: 0,
	explosiveCount: 7,
} as const;
