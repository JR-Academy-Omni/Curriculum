import { colors } from '../styles/theme';

// 全课的环节（来源：2026-10-27 与讲师确认的大纲，见 PRD.md）。时间不上页面，见 RUNSHEET。
export interface Part { id: string; tag: string; color: string }

export const parts: Part[] = [
	{ id: 'frame', tag: '开场 · 我们走到哪了', color: colors.purple },
	{ id: 'review', tag: '重要概念测试', color: colors.blue },
	{ id: 'failure', tag: 'FAILURES · 四类失败', color: colors.red },
	{ id: 'golden', tag: 'GOLDEN CASES · 考题', color: colors.green },
	{ id: 'report', tag: 'REPORT · 读报告', color: colors.blue },
	{ id: 'experiment', tag: 'EXPERIMENT · 单变量实验', color: colors.orange },
	{ id: 'knob', tag: 'KNOBS · 五个旋钮', color: colors.purple },
	{ id: 'wrap', tag: '后续与收尾', color: colors.red },
];

export function partById(id: string): Part {
	const p = parts.find((x) => x.id === id);
	if (!p) throw new Error(`unknown part ${id}`);
	return p;
}
