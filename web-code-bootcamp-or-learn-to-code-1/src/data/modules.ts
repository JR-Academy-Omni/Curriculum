import { colors } from '../styles/theme';

export interface IModule {
	num: number;
	code: string;
	name: string;
	nameCn: string;
	color: string;
	lessons: number;
	live: number;
	lab: number;
	quest: number;
	icon: string;
	summary: string;
	highlights: string[];
	tools: string[];
	jobOutcome: string;
	isNewInV30?: boolean;
}

export const modules: IModule[] = [
	{
		num: 1, code: 'M1', name: 'Launchpad', nameCn: '开营与 AI 工具配置',
		color: colors.m1, lessons: 10, live: 2, lab: 2, quest: 1, icon: '🚀',
		summary: '课前准备 · 职业路线图 · AI 开发环境配置 · Git 基础',
		highlights: ['Cursor / Claude Code 从第一天装好', '匠人环境 + GitHub 配置', 'AI Coding 世界观', '职业路径对齐'],
		tools: ['Cursor', 'Claude Code', 'GitHub', 'VS Code'],
		jobOutcome: '具备 AI-first 开发者基础素养',
	},
	{
		num: 2, code: 'M2', name: 'Agile Mindset', nameCn: '敏捷协作基础',
		color: colors.m2, lessons: 10, live: 0, lab: 3, quest: 1, icon: '🔁',
		summary: 'Agile 方法论 · Git 团队协作 · Sprint 实操',
		highlights: ['Agile / Scrum 工作流', 'Git 团队协作完整链路', 'Pull Request + Code Review', '用 AI 拆分 Story'],
		tools: ['Git', 'Jira / Linear', 'GitHub Flow', 'AI Planner'],
		jobOutcome: '能进入真实团队做 Sprint',
	},
	{
		num: 3, code: 'M3', name: 'Web Fundamentals', nameCn: '从零构建第一个网站',
		color: colors.m3, lessons: 45, live: 7, lab: 14, quest: 2, icon: '🌐',
		summary: 'HTML/CSS 手写基础 · JavaScript 交互 · Git 版本管理 · 14 Lab · 2 Vibe Coding Quest',
		highlights: ['HTML5 · CSS3 · Flexbox · Grid 完整打通', 'JavaScript ES6 核心语法', '14 个前端 Lab 即时验证', '2 个 Vibe Coding Quest（AI 辅助做网站）'],
		tools: ['HTML5', 'CSS3', 'JavaScript', 'Chrome DevTools'],
		jobOutcome: '能独立交付一个响应式静态网站',
	},
	{
		num: 4, code: 'M4', name: 'React Engineering', nameCn: '现代前端工程实战',
		color: colors.m4, lessons: 59, live: 5, lab: 16, quest: 1, icon: '⚛️',
		summary: 'ES6 · React 全套 · TypeScript · 12 React Lab · 4 TS Lab · AI 辅助开发 Quest',
		highlights: ['React Hooks · Context · Router 完整体系', 'TypeScript 类型系统打透', '12 个 React Lab + 4 个 TS Lab', 'Vibe Coding 做一个完整 SPA'],
		tools: ['React 19', 'TypeScript', 'Vite', 'Tailwind'],
		jobOutcome: 'Junior Frontend Engineer · 能做 SPA',
	},
	{
		num: 5, code: 'M5', name: 'Backend Architecture', nameCn: 'Node.js 服务端开发',
		color: colors.m5, lessons: 35, live: 4, lab: 14, quest: 1, icon: '🛠️',
		summary: 'Express · MongoDB · CRUD · Python 基础 · AWS Lab · Claude Code API 生成',
		highlights: ['Node.js + Express 完整 API', 'MongoDB 建模 + Mongoose', 'Python 基础打开数据/AI 大门', 'Claude Code 直接生成 API'],
		tools: ['Node.js', 'Express', 'MongoDB', 'Python'],
		jobOutcome: 'Junior Backend Engineer · 能交付 REST API',
	},
	{
		num: 6, code: 'M6', name: 'Full-Stack Delivery', nameCn: '全栈整合与云端部署',
		color: colors.m6, lessons: 25, live: 11, lab: 3, quest: 1, icon: '📦',
		summary: '前后端联调 · P3 项目 · Dashboard · AWS 部署 · CI/CD · Docker',
		highlights: ['前后端完整联调 + JWT 鉴权', 'P3 真实项目：CareerMate 雏形', 'AWS EC2 / S3 / Lambda 部署', 'Docker + GitHub Actions CI/CD'],
		tools: ['AWS', 'Docker', 'GitHub Actions', 'Nginx'],
		jobOutcome: 'Junior Full-Stack Engineer · 能独立把产品发到线上',
	},
	{
		num: 7, code: 'M7', name: 'AI Foundations', nameCn: 'Prompt & Context Engineering',
		color: colors.m7, lessons: 26, live: 0, lab: 15, quest: 1, icon: '🧠',
		summary: 'Prompt Engineering · Context Engineering · 15 Prompt Lab · CLAUDE.md/Cursor Rules 实操',
		highlights: ['Prompt 四要素公式', 'Context Engineering 方法论', '15 个 Prompt Lab 即时验证', 'CLAUDE.md + Cursor Rules 工程化'],
		tools: ['OpenAI', 'Claude', 'Gemini', 'Prompt Lab'],
		jobOutcome: '掌握 AI 时代最核心的"写 Prompt"能力',
		isNewInV30: true,
	},
	{
		num: 8, code: 'M8', name: 'AI Application Dev', nameCn: 'RAG + Agent + MCP 实战',
		color: colors.m8, lessons: 29, live: 4, lab: 9, quest: 2, icon: '🤖',
		summary: 'OpenAI API · RAG Pipeline · Agent 工具调用 · MCP Server · Azure AI',
		highlights: ['从 0 做 RAG 问答系统', 'Agent + Tool Use + ReAct', 'MCP Server 从 0 到 1 + 业务集成', 'Azure AI Foundry 生产级调用'],
		tools: ['LangChain', 'OpenAI API', 'MCP', 'Azure AI'],
		jobOutcome: 'AI App Developer · 能交付 RAG/Agent 产品',
		isNewInV30: true,
	},
	{
		num: 9, code: 'M9', name: 'Production AI', nameCn: '产品化、评估与安全',
		color: colors.m9, lessons: 13, live: 4, lab: 4, quest: 1, icon: '🛡️',
		summary: '生产部署 · CI/CD · Prompt 注入防御 · 幻觉检测 · LLM 评估 · AI 安全',
		highlights: ['AI 产品上线 checklist', 'Prompt 注入 + 幻觉防御', 'LLM Eval 基线 (RAGAS)', 'AI 安全 + Red-teaming 入门'],
		tools: ['LangSmith', 'RAGAS', 'Guardrails', 'Sentry'],
		jobOutcome: '能独立把 AI 产品推到生产 + 负责可靠性',
		isNewInV30: true,
	},
	{
		num: 10, code: 'M10', name: 'Career Accelerator', nameCn: '求职冲刺与职业加速',
		color: colors.m10, lessons: 26, live: 0, lab: 0, quest: 1, icon: '🎯',
		summary: '技术分享 · Career Coaching · AI 岗位方向 · 简历优化 Quest',
		highlights: ['AI 简历优化 + LinkedIn 包装', '全栈 / 前端 / AI Engineer 岗位拆解', 'Mock Interview 训练', 'Demo Day + 猎头内推'],
		tools: ['JobPin AI', 'LinkedIn', 'Mock Interview', '匠人内推群'],
		jobOutcome: '拿到第一份 offer',
	},
];

// Course 顶层元数据
export const courseMeta = {
	totalLessons: 278,
	liveClasses: 37,
	recordedVideos: 77,
	interactiveLabs: 80,
	quests: 12,
	estimatedHours: 300,
	weeks: 24,
	cohort: 30,
	prevCohort: 29,
	priorCohorts: 29,
	tuition: 5900,
	promoTuition: 5360,
	commenceDate: '2026-04-12',
	completeDate: '2026-07-29',
	// 第 29 期历史基线（作对比用）
	v29Lessons: 195,
	v29Modules: 7,
	v29Live: 42,
	v29Labs: 28,
};

// V29 → V30 差异（用于 S20_V29V30Diff）
export const v29v30Diff = {
	lessonsDelta: courseMeta.totalLessons - courseMeta.v29Lessons,
	modulesDelta: 10 - courseMeta.v29Modules,
	newModules: [
		{ name: 'M7: AI Foundations', reason: '2026 年 Prompt/Context Engineering 已成为 Full-Stack 标配' },
		{ name: 'M8: RAG + Agent + MCP', reason: '前端 + 后端 + AI 产品的三大支柱，招聘方直接问' },
		{ name: 'M9: Production AI', reason: 'AI 产品上线与安全性是 Senior 开发者的护城河' },
	],
	expandedModules: [
		{ name: 'M3: Web Fundamentals', detail: '45 节，新增 Vibe Coding Quest + 14 个前端 Lab' },
		{ name: 'M4: React Engineering', detail: '59 节，补全 TypeScript + AI 辅助开发 Quest' },
		{ name: 'M6: Full-Stack Delivery', detail: '25 节，新增 P3 CareerMate 真实项目链路' },
	],
};
