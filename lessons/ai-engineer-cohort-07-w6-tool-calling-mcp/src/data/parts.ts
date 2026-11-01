import { colors } from '../styles/theme';

// 全课的环节（来源：2026-10-30 与讲师确认的大纲，见 PRD.md）。时间不上页面，见 RUNSHEET。
export interface Part { id: string; tag: string; color: string }

export const parts: Part[] = [
	{ id: 'frame', tag: '开场 · 我们走到哪了', color: colors.purple },
	{ id: 'review', tag: 'W5 复习', color: colors.blue },
	{ id: 'basics', tag: 'BASICS · 先打基础', color: colors.orange },
	{ id: 'calling', tag: 'TOOL CALLING · 一来一回', color: colors.blue },
	{ id: 'mcp', tag: 'MCP · 统一的工单规范', color: colors.green },
	{ id: 'fastmcp', tag: 'FASTMCP · 写一个后台部门', color: colors.purple },
	{ id: 'cli', tag: 'CLI · 接进客服系统', color: colors.orange },
	{ id: 'safety', tag: 'SAFETY · 安全与真实结果', color: colors.red },
	{ id: 'wrap', tag: '边界与后续', color: colors.red },
];

export function partById(id: string): Part {
	const p = parts.find((x) => x.id === id);
	if (!p) throw new Error(`unknown part ${id}`);
	return p;
}
