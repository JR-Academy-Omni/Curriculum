// 讲座所需数据集 —— 23 个岗位摘自 /ai-new-jobs（JR 内部研究库），4 个漏网之鱼来自外部公开源
// 不重复完整数据，只保留讲座用得到的字段

export type JobCategory = 'technical' | 'governance' | 'industry' | 'missing';

export interface DeepJob {
	id: string;
	nameZh: string;
	nameEn: string;
	category: JobCategory;
	bornYear: number;
	salaryRange: string;
	growthNote?: string;
	pitch: string;        // 一句话定义
	story: string;        // 真实的故事 / 数据冲击
	skills: string[];
	hiring: string[];
	jrCourses?: { slug: string; titleZh: string }[];
	sourceUrl?: string;   // 漏网之鱼必填，标数据源
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
		nameZh: 'AI Engineer',
		nameEn: 'AI Engineer',
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
	},
	{
		id: 'forward-deployment-engineer',
		nameZh: '前线部署工程师 (FDE)',
		nameEn: 'Forward Deployment Engineer',
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
	},
	{
		id: 'ai-agent-developer',
		nameZh: 'AI 智能体开发者',
		nameEn: 'AI Agent Developer',
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
	},
	{
		id: 'ai-adoption-specialist',
		nameZh: 'AI 落地专家',
		nameEn: 'AI Adoption Specialist',
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
		nameZh: '首席 AI 官 (CAIO)',
		nameEn: 'Chief AI Officer',
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
	},
	{
		id: 'ai-product-manager',
		nameZh: 'AI 产品经理',
		nameEn: 'AI Product Manager',
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
	},
	{
		id: 'ai-ethics-officer',
		nameZh: 'AI 伦理合规官',
		nameEn: 'AI Ethics & Compliance Officer',
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
		nameZh: 'GEO 专家',
		nameEn: 'GEO Specialist',
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
	},
	{
		id: 'healthcare-ai-integrator',
		nameZh: '医疗 AI 整合专家',
		nameEn: 'Healthcare AI Integrator',
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
	},
	{
		id: 'ai-compliance-expert',
		nameZh: 'AI 合规专家（金融）',
		nameEn: 'AI Compliance Expert (Finance)',
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
		nameZh: 'Vibe Coder / AI-First Founder',
		nameEn: 'Vibe Coder / AI-First Founder',
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
	},
	{
		id: 'robotics-ai-engineer',
		nameZh: '具身智能 / Robotics-AI 工程师',
		nameEn: 'Embodied AI / Robotics-AI Engineer',
		category: 'missing',
		bornYear: 2024,
		salaryRange: '$200K – $400K (base)',
		pitch: '在 LLM 工程师之外的 Embodied AI 工程师 —— 把基础模型接到机械臂、双足机器人、自动驾驶。',
		story: 'Figure AI（2024 估值 $2.6B → 2025 $40B）/ Tesla Optimus / 1X Technologies / Unitree（中国头部）/ Apptronik 浪潮。硅谷已经从"软件 AI"转向"具身 AI"作为下一波叙事。北美 base $200-400K；很多机器人创业公司给早期员工 0.5-2% 股权。需要 ROS / SLAM / 控制理论 + 现代 LLM 知识。',
		skills: ['ROS', 'SLAM', '控制理论', 'Vision-Language-Action 模型', 'PyTorch'],
		hiring: ['Figure AI', 'Tesla', '1X', 'Apptronik', 'Unitree', 'Skild AI'],
		sourceUrl: 'figure.ai/careers, 1x.tech/careers, Levels.fyi',
	},
	{
		id: 'synthetic-data-engineer',
		nameZh: '合成数据工程师',
		nameEn: 'Synthetic Data Engineer',
		category: 'missing',
		bornYear: 2025,
		salaryRange: '$130K – $250K',
		pitch: '训练数据短缺是 2025 年 AI 行业最大瓶颈 —— 生成合成图像 / 文本 / 代码作为训练数据。',
		story: 'Epoch AI 研究：高质量公开文本数据 2026-2032 用尽。Scale AI（被 Meta 收购大部分股权）/ Gretel / Mostly AI 是头部。介于数据工程师和 ML 工程师之间的全新细分 —— 既要懂模型怎么消化数据，也要懂怎么生成"不让模型学崩"的数据。',
		skills: ['Diffusion / GAN', '数据质量评估', '统计分布', 'Privacy-preserving 技术'],
		hiring: ['Scale AI', 'Gretel', 'Mostly AI', 'NVIDIA', 'Snowflake'],
		sourceUrl: 'Epoch AI 报告 / Scale AI careers / Gretel careers',
	},
	{
		id: 'ai-sales-engineer',
		nameZh: 'AI Sales Engineer / Solution Engineer',
		nameEn: 'AI Sales / Solution Engineer',
		category: 'missing',
		bornYear: 2024,
		salaryRange: '$250K – $500K (total comp)',
		pitch: '介于 FDE（深技术嵌入客户）和传统 Sales（关系驱动）之间 —— B2B AI 商业化的桥梁。',
		story: 'OpenAI / Anthropic / Cohere / Databricks 都在大规模招（数量仅次于 FDE）。和 FDE 的区别：SE 多在销售周期前段做技术 demo 和评估，FDE 在签约后做生产落地。技术背景 + 客户沟通能力 = 这个岗位。许多 B2B SaaS 销售工程师正在通过补 LLM 知识转过来。',
		skills: ['LLM 应用 demo 能力', 'B2B 销售流程', 'POC 设计', '技术演讲'],
		hiring: ['OpenAI', 'Anthropic', 'Cohere', 'Databricks', 'Glean'],
		sourceUrl: 'openai.com/careers, anthropic.com/jobs, glean.com/careers',
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
