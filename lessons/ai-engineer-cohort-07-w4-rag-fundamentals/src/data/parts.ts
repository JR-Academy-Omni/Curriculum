import { colors } from '../styles/theme';

// 全课的环节（来源：2026-10-19 与讲师确认的 23 页大纲）。时间不上页面，见 RUNSHEET。
export interface Part { id: string; tag: string; color: string }

export const parts: Part[] = [
	{ id: 'frame', tag: '开场 · 先看架构', color: colors.purple },
	{ id: 'review', tag: '上节课复习', color: colors.blue },
	{ id: 'position', tag: '定位 · RAG 管什么', color: colors.orange },
	{ id: 'offline', tag: 'OFFLINE · 离线建索引', color: colors.green },
	{ id: 'online', tag: 'ONLINE · 在线检索', color: colors.blue },
	{ id: 'answer', tag: 'ANSWER · 组装与作答', color: colors.orange },
	{ id: 'fallback', tag: 'FALLBACK · 兜底', color: colors.red },
	{ id: 'debug', tag: 'DEBUG · 排错', color: colors.purple },
	{ id: 'wrap', tag: '后续与收尾', color: colors.red },
];

export function partById(id: string): Part {
	const p = parts.find((x) => x.id === id);
	if (!p) throw new Error(`unknown part ${id}`);
	return p;
}
