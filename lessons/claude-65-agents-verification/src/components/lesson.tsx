import { motion } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';
import { assetPath, CountUp } from './ui';
import { colors, fonts, radii } from './deck';

// 本课内容层的复用组合（不属于引擎）：截图、大数字、引文、流程节点、代码框
export const muted = 'rgba(16,22,47,.72)';
export const faint = 'rgba(16,22,47,.5)';

export function Shot({ src, alt, style }: { src: string; alt: string; style?: CSSProperties }) {
	return <img src={assetPath(`img/${src}`)} alt={alt} style={{ display: 'block', width: '100%', borderRadius: radii.card, border: `2px solid ${colors.dark}`, boxShadow: '8px 8px 0 rgba(255,222,89,.92)', ...style }} />;
}

export function Stat({ value, suffix = '', label, color = colors.dark, delay = 0, size = 76 }: { value: number; suffix?: string; label: ReactNode; color?: string; delay?: number; size?: number }) {
	return <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4, delay }}>
		<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: size, lineHeight: 1, color, letterSpacing: -2 }}>
			<CountUp value={value} suffix={suffix} />
		</div>
		<div style={{ fontSize: 21, lineHeight: 1.35, color: muted, marginTop: 8, fontWeight: 700 }}>{label}</div>
	</motion.div>;
}

export function Quote({ children, who, color = colors.red, size = 54 }: { children: ReactNode; who: ReactNode; color?: string; size?: number }) {
	return <div style={{ position: 'relative', paddingLeft: 34, borderLeft: `10px solid ${color}` }}>
		<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: size, lineHeight: 1.2 }}>「{children}」</div>
		<div style={{ fontFamily: fonts.mono, fontSize: 18, color: muted, marginTop: 16 }}>— {who}</div>
	</div>;
}

export function Step({ n, title, desc, color = colors.yellow, delay = 0 }: { n: ReactNode; title: ReactNode; desc?: ReactNode; color?: string; delay?: number }) {
	return <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .38, delay }}
		style={{ background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: radii.card, padding: '18px 20px', boxShadow: `6px 6px 0 ${color}`, display: 'flex', flexDirection: 'column', gap: 8 }}>
		<span style={{ width: 40, height: 40, borderRadius: '50%', background: color, border: `2px solid ${colors.dark}`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.mono, fontWeight: 800, fontSize: 17 }}>{n}</span>
		<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 26, lineHeight: 1.2 }}>{title}</div>
		{desc && <div style={{ fontSize: 19, lineHeight: 1.45, color: muted }}>{desc}</div>}
	</motion.div>;
}

export function Arrow({ color = colors.dark }: { color?: string }) {
	return <div aria-hidden style={{ alignSelf: 'center', fontFamily: fonts.mono, fontSize: 30, fontWeight: 800, color }}>→</div>;
}

export function Code({ title, children, style }: { title: string; children: ReactNode; style?: CSSProperties }) {
	return <div style={{ background: colors.dark, color: colors.white, borderRadius: radii.card, border: `2px solid ${colors.dark}`, overflow: 'hidden', boxShadow: '8px 8px 0 rgba(255,87,87,.58)', ...style }}>
		<div style={{ display: 'flex', gap: 8, alignItems: 'center', padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,.15)' }}>
			{[colors.red, colors.yellow, colors.green].map(c => <span key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />)}
			<span style={{ fontFamily: fonts.mono, fontSize: 15, opacity: .75, marginLeft: 8 }}>{title}</span>
		</div>
		<div style={{ padding: '16px 20px', fontFamily: fonts.mono, fontSize: 17, lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>{children}</div>
	</div>;
}

export function Takeaway({ children, color = colors.yellow }: { children: ReactNode; color?: string }) {
	return <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, background: color, border: `2px solid ${colors.dark}`, borderRadius: radii.pill, padding: '10px 24px', fontFamily: fonts.heading, fontWeight: 900, fontSize: 25, whiteSpace: 'nowrap', flexShrink: 0 }}>
		<span style={{ fontFamily: fonts.mono, fontSize: 15, letterSpacing: 1, whiteSpace: 'nowrap' }}>方法</span>{children}
	</div>;
}
