import { colors } from '../styles/theme';

// 90 分钟课程的模块划分：议程页、每页左上角的模块标签共用这一份
export interface Module {
	id: string; // M0–M7
	title: string; // English term
	zh: string; // 这一模块回答的问题
	minutes: number;
	color: string;
}

export const modules: Module[] = [
	{ id: 'M0', title: '开场 + 全课前测', zh: '今天要回答哪两个问题？', minutes: 5, color: colors.white },
	{ id: 'M1', title: 'Token Budget', zh: '一次请求到底带了多少 token？', minutes: 11, color: colors.yellow },
	{ id: 'M2', title: 'Context Governance', zh: '什么该放进 context，什么不该？', minutes: 12, color: colors.blue },
	{ id: 'M3', title: 'Prefill / Decode', zh: '为什么长 prompt 出字慢？', minutes: 12, color: colors.green },
	{ id: 'M4', title: 'KV Cache', zh: '生成时哪些计算不用重做？', minutes: 10, color: colors.orange },
	{ id: 'M5', title: 'Prefix Cache', zh: '跨请求能复用什么？怎么会失效？', minutes: 18, color: colors.purple },
	{ id: 'M6', title: 'Response Cache + Memory', zh: '复用整个答案安全吗？Memory 是缓存吗？', minutes: 10, color: colors.red },
	{ id: 'M7', title: '汇总 + 英文面试练习', zh: '能用数字和英文讲清楚吗？', minutes: 12, color: colors.white },
];

export const moduleById = (id: string) => modules.find((m) => m.id === id)!;
