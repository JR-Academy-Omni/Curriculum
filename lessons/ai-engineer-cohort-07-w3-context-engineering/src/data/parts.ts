import { colors } from '../styles/theme';

// 全课的环节（来源：2026-10-14 与讲师确认的精简版大纲）。时间不上页面，见 RUNSHEET。
export interface Part { id: string; tag: string; color: string }

export const parts: Part[] = [
	{ id: 'review', tag: '上节课复习', color: colors.blue },
	{ id: 'why', tag: '为什么要管上下文', color: colors.orange },
	{ id: 'source', tag: 'SOURCE · 摆资料', color: colors.green },
	{ id: 'policy', tag: 'POLICY · 挑', color: colors.blue },
	{ id: 'assembly', tag: 'ASSEMBLY · 排', color: colors.orange },
	{ id: 'trust', tag: 'TRUST BOUNDARY · 防', color: colors.red },
	{ id: 'validation', tag: 'VALIDATION · 检查', color: colors.purple },
	{ id: 'lifecycle', tag: 'LIFECYCLE · 换', color: colors.green },
	{ id: 'wrap', tag: '总结', color: colors.red },
];

export function partById(id: string): Part {
	const p = parts.find((x) => x.id === id);
	if (!p) throw new Error(`unknown part ${id}`);
	return p;
}
