import type { CSSProperties, MouseEvent, ReactNode } from 'react';
import { assetPath } from './ui';

export const f = { h: 'var(--jc-font-heading)', b: 'var(--jc-font-body)' };
export type Tone = 'coral' | 'sky' | 'mint' | 'sunshine' | 'bubblegum';
export const c = (name: string) => `var(--jc-${name})`;
export const asset = assetPath;

export function Page({ children, bg = c('canvas'), dots, night, style }: { children: ReactNode; bg?: string; dots?: boolean; night?: boolean; style?: CSSProperties }) {
	return (
		<div data-night={night || undefined} style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden', fontFamily: f.b, color: night ? c('on-night') : c('ink'), background: night ? `${c('dot-grid-night')}, ${c('night')}` : dots ? `${c('dot-grid')}, ${bg}` : bg, ...style }}>
			{/* 深色页盖上反白 logo（引擎固定的是深色版） */}
			{night && <img src={assetPath('brand/logo-zh-white.png')} alt="" style={{ position: 'absolute', top: 18, right: 22, height: 30, zIndex: 60 }} />}
			{children}
		</div>
	);
}

export function Head({ eyebrow, title, lead, tone = 'coral', night, width = 1250 }: { eyebrow: string; title: ReactNode; lead?: ReactNode; tone?: Tone; night?: boolean; width?: number }) {
	return (
		<header style={{ maxWidth: width }}>
			<div style={{ fontSize: 18, fontWeight: 700, color: night ? c(tone) : c('slate'), marginBottom: 10 }}>{eyebrow}</div>
			<h1 style={{ fontFamily: f.h, fontSize: 52, lineHeight: 1.18, fontWeight: 700 }}>{title}</h1>
			{lead && <p style={{ fontSize: 22, lineHeight: 1.7, marginTop: 12, color: night ? c('on-night-muted') : c('slate') }}>{lead}</p>}
		</header>
	);
}

export function Card({ children, style, motion = 'rise' }: { children: ReactNode; style?: CSSProperties; motion?: 'rise' | 'flip' | 'none' }) {
	return <div className={motion === 'none' ? undefined : motion} style={{ background: c('canvas-pure'), border: `1px solid ${c('hairline')}`, borderRadius: c('r-card'), boxShadow: c('shadow-card'), padding: 28, color: c('ink'), ...style }}>{children}</div>;
}

export function Pill({ children, tone, style }: { children: ReactNode; tone?: Tone; style?: CSSProperties }) {
	return <span style={{ display: 'inline-block', padding: '6px 16px', borderRadius: 999, fontSize: 17, fontWeight: 700, background: tone ? c(`wash-${tone}`) : c('surface-soft'), color: tone ? c(`${tone}-deep`) : c('ink-soft'), ...style }}>{children}</span>;
}

// 鼠标位置写进 CSS 变量，给 .scene 做视差
export const parallax = {
	onMouseMove: (e: MouseEvent<HTMLDivElement>) => {
		const r = e.currentTarget.getBoundingClientRect();
		e.currentTarget.style.setProperty('--px', String(((e.clientX - r.left) / r.width) * 2 - 1));
		e.currentTarget.style.setProperty('--py', String(((e.clientY - r.top) / r.height) * 2 - 1));
	},
	onMouseLeave: (e: MouseEvent<HTMLDivElement>) => {
		e.currentTarget.style.setProperty('--px', '0');
		e.currentTarget.style.setProperty('--py', '0');
	},
};

export const body: CSSProperties = { padding: '64px 96px 72px', height: '100%', display: 'flex', flexDirection: 'column', gap: 32 };
export const grid = (cols: number, gap = 20): CSSProperties => ({ display: 'grid', gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, gap });
