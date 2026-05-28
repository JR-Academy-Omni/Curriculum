export const colors = {
	// 品牌基色（与 xhs-posters / curriculum 对齐）
	red: '#ff5757',
	dark: '#10162f',
	yellow: '#FFDE59',
	green: '#7ED957',
	blue: '#38B6FF',
	purple: '#CB6CE6',
	orange: '#FF914D',
	warmBg: '#fff1e7',
	darkBg: '#1a1a2e',
	white: '#ffffff',
	black: '#000000',
	indigo: '#6366f1',
	teal: '#10b981',

	// 10 Phase 配色（与 outline.json / architecture.html 对齐）
	p1: '#6366f1',
	p2: '#8b5cf6',
	p3: '#3b82f6',
	p4: '#06b6d4',
	p5: '#10b981',
	p6: '#f59e0b',
	p7: '#ec4899',
	p8: '#ef4444',
	p9: '#f97316',
	p10: '#64748b',
} as const;

export const fonts = {
	heading: '"Bricolage Grotesque", "Noto Sans SC", sans-serif',
	body: '"DM Sans", "Noto Sans SC", sans-serif',
	mono: '"Space Mono", monospace',
} as const;

export const border = `3px solid ${colors.black}`;
export const shadow = `6px 6px 0px ${colors.black}`;
export const shadowSm = `4px 4px 0px ${colors.black}`;
