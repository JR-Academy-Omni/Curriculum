// 足迹地图：第七期 12 节理论课。
// 课名来源：lessons/ai-engineer-landscape-talk/src/data/cohort7Schedule.ts（jracademy.ai/curriculum/ai-engineer-bootcamp/cohort-7.html，2026-09-20 抓取）。
// 学过的课：一个问题 + 关键词，取自 W2–W4 的 PRD；W1 关键词待讲师确认（lessons/ 里没有 W1 理论课件）。
export type Stop = 'done' | 'here' | 'next' | 'later';

export interface Week { w: number; title: string; status: Stop; q?: string; keys?: string[] }

export const weeks: Week[] = [
	{ w: 1, title: 'GenAI Foundations', status: 'done', q: 'AI Engineer 做什么', keys: ['LLM 基础', '岗位地图'] },
	{ w: 2, title: 'Tokens & Cache', status: 'done', q: '一次能放多少、哪些能复用', keys: ['token budget', 'prefill / decode', 'prompt cache'] },
	{ w: 3, title: 'Context Engineering', status: 'done', q: '每一轮放什么、怎么排', keys: ['freshness', 'assembly', 'compaction'] },
	{ w: 4, title: 'RAG Fundamentals', status: 'done', q: '缺的知识从哪来', keys: ['离线六步', '权限先于检索', '四种回答状态'] },
	{ w: 5, title: 'RAG Quality', status: 'here', q: '改动真的变好了吗' },
	{ w: 6, title: 'Tool Calling & MCP', status: 'next' },
	{ w: 7, title: 'Agents & ReAct', status: 'later' },
	{ w: 8, title: 'Multi-Agent', status: 'later' },
	{ w: 9, title: 'Memory & State', status: 'later' },
	{ w: 10, title: 'Harness Engineering', status: 'later' },
	{ w: 11, title: 'Governance & Evals', status: 'later' },
	{ w: 12, title: 'System Design & Routing', status: 'later' },
];

// 三段：每段一句话
export const stages = [
	{ from: 2, to: 5, zh: '模型看到什么' },
	{ from: 6, to: 9, zh: '模型能做什么' },
	{ from: 10, to: 12, zh: '怎么上生产' },
];
