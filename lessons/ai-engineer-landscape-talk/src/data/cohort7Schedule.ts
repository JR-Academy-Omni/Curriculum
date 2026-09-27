// AI Engineer Bootcamp 第七期正式排课（简化版）。
// 来源：https://jracademy.ai/curriculum/ai-engineer-bootcamp/cohort-7.html 及其读取的 outline.json（2026-09-20 抓取）。
// 课名为原课名的缩写（去掉 CareKind 前缀和部分副标题），时长、周次、里程碑分组均为页面原文。

export const COHORT_SOURCE = '来源：jracademy.ai/curriculum/ai-engineer-bootcamp/cohort-7.html（课名有缩写）';

export const COHORT_STATS = [
	{ value: 25, suffix: '', label: '场正式 Live' },
	{ value: 45, suffix: 'h', label: 'Live 总时长' },
	{ value: 13, suffix: '', label: '周连续实践' },
	{ value: 1, suffix: '', label: '个贯穿项目' },
];

export const COHORT_TRACKS = { theory: '理论 LIVE · 12 场 × 90 min', practice: '实践 LIVE · 13 场 × 120 min' };
export const COHORT_QUOTE = '理论负责建立工程判断；实践负责把判断变成能运行、能评估、能治理的系统。';
export const COHORT_GROWTH = '不是 13 个 Demo，是一个产品持续生长。';
export const COHORT_PROJECT = 'CareKind · Australian aged care 合规场景';

export type MilestoneColor = 'blue' | 'purple' | 'green' | 'orange' | 'yellow' | 'red';

export interface Milestone {
	weeks: string;
	from: number;
	to: number;
	label: string;
	color: MilestoneColor;
}

export const MILESTONES: Milestone[] = [
	{ weeks: 'W1–W3', from: 1, to: 3, label: 'ADLC · UI · Care Workflow', color: 'blue' },
	{ weeks: 'W4–W5', from: 4, to: 5, label: 'Voice AI · Structured Draft', color: 'purple' },
	{ weeks: 'W6–W7', from: 6, to: 7, label: 'Policy RAG · RAGAS · MVP', color: 'green' },
	{ weeks: 'W8–W9', from: 8, to: 9, label: 'MCP Tools · Bounded Agent', color: 'orange' },
	{ weeks: 'W10–W12', from: 10, to: 12, label: 'Memory · Harness · Routing', color: 'yellow' },
	{ weeks: 'W13', from: 13, to: 13, label: 'Evals · Red Team · Demo Day', color: 'red' },
];

export interface CohortWeek {
	week: number;
	theory?: string; // W13 没有理论课
	practice: string;
	practiceNote?: string;
}

export const COHORT_WEEKS: CohortWeek[] = [
	{ week: 1, theory: 'GenAI Foundations & AI Engineer Landscape', practice: 'AI Coding + ADLC：项目启动' },
	{ week: 2, theory: 'Tokens, Context Windows & Cache Efficiency', practice: 'Product UI & Design System' },
	{ week: 3, theory: 'Context Engineering', practice: 'Rapid MVP Build with Claude Code' },
	{ week: 4, theory: 'RAG Fundamentals', practice: 'Voice AI：Confirmed Transcript Pipeline' },
	{ week: 5, theory: 'RAG Quality, Testing & Controlled Improvement', practice: 'AI-Native Workspace：Hooks 与 Skills' },
	{ week: 6, theory: 'Tool Calling, MCP & CLI Integration', practice: 'Build the Evaluation Pipeline First' },
	{ week: 7, theory: 'Agents 基础 + The ReAct Framework', practice: 'Build and Prove Policy RAG from Scratch' },
	{ week: 8, theory: 'Multi-Agent Architectures', practice: 'Extract the Data Layer, then Connect MCP & CLI' },
	{ week: 9, theory: 'Agent Memory & State Management', practice: 'Build a Bounded Agent' },
	{ week: 10, theory: 'Harness Engineering for Production AI Agents', practice: 'Build Safe Long-Term Memory' },
	{ week: 11, theory: 'AI Governance, Evals & Risk Management', practice: 'Build the Production Agent Harness' },
	{ week: 12, theory: 'Production AI System Design & Model Routing', practice: 'Build the Model Router inside the Harness' },
	{ week: 13, practice: 'Production Readiness Review & Demo Day', practiceNote: '180 min' },
];
