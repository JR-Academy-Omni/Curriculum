export const colors = {
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

	// 10 Module 配色（M1 ~ M10）
	m1: '#6366f1',   // Launchpad
	m2: '#8b5cf6',   // Agile
	m3: '#3b82f6',   // Web Fundamentals
	m4: '#06b6d4',   // React Engineering
	m5: '#10b981',   // Backend
	m6: '#f59e0b',   // Full-Stack Delivery
	m7: '#ec4899',   // AI Foundations
	m8: '#ef4444',   // RAG + Agent + MCP
	m9: '#f97316',   // Production AI
	m10: '#64748b',  // Career Accelerator
} as const;

export const fonts = {
	heading: '"Bricolage Grotesque", "Noto Sans SC", sans-serif',
	body: '"DM Sans", "Noto Sans SC", sans-serif',
	mono: '"Space Mono", monospace',
} as const;

export const border = `3px solid ${colors.black}`;
export const shadow = `6px 6px 0px ${colors.black}`;
export const shadowSm = `4px 4px 0px ${colors.black}`;
