import type { CSSProperties, ReactNode } from 'react';
import { DeckFrame, colors, fonts, radii } from './deck';
import { assetPath } from './ui';

// 内容层组合件（非引擎）：来源页脚、真实截图、待补占位、证据类型标签。

export const ink = '#3d3833';

export function Footer({ source }: { source?: string }) {
	// 只显示数据来源；左对齐，避开引擎底部圆点导航与右下页码。
	if (!source) return null;
	return (
		<div style={{ position: 'absolute', left: 80, right: 200, bottom: 38, display: 'grid', gap: 3, fontFamily: fonts.mono, fontSize: 13, color: '#7a716a', letterSpacing: 0.2, lineHeight: 1.35 }}>
			<span>{source}</span>
		</div>
	);
}

export function Page({ tag, title, subtitle, accent, source, children, titleSize = 52 }: { tag: string; title: ReactNode; subtitle?: ReactNode; accent?: string; source?: string; children: ReactNode; titleSize?: number }) {
	return (
		<DeckFrame tag={tag} title={title} subtitle={subtitle} accent={accent} titleSize={titleSize}>
			{children}
			<Footer source={source} />
		</DeckFrame>
	);
}

export function Shot({ src, caption, width, style }: { src: string; caption: ReactNode; width: number; style?: CSSProperties }) {
	return (
		<figure style={{ margin: 0, width, ...style }}>
			<img src={assetPath(`shots/${src}`)} alt="" style={{ width: '100%', display: 'block', borderRadius: 14, border: `2px solid ${colors.dark}`, boxShadow: '7px 7px 0 rgba(56,182,255,.55)' }} />
			<figcaption style={{ fontSize: 17, color: ink, marginTop: 10, lineHeight: 1.4 }}>{caption}</figcaption>
		</figure>
	);
}

export function Crop({ src, width, region, caption }: { src: string; width: number; region: { x: number; y: number; w: number; h: number }; caption: ReactNode }) {
	// region 以截图逻辑像素（1440 宽）计；只裁出局部放大，不改动原图。
	const scale = width / region.w;
	return (
		<figure style={{ margin: 0, width }}>
			<div style={{ width, height: region.h * scale, overflow: 'hidden', position: 'relative', borderRadius: 14, border: `2px solid ${colors.dark}`, boxShadow: '7px 7px 0 rgba(126,217,87,.7)', background: '#fff' }}>
				<img src={assetPath(`shots/${src}`)} alt="" style={{ position: 'absolute', width: 1440 * scale, left: -region.x * scale, top: -region.y * scale, maxWidth: 'none' }} />
			</div>
			<figcaption style={{ fontSize: 17, color: ink, marginTop: 10, lineHeight: 1.4 }}>{caption}</figcaption>
		</figure>
	);
}

export function Todo({ children, style }: { children: ReactNode; style?: CSSProperties }) {
	// 发出前由负责人填入真实数字；样式克制，避免在投资人面前像报错。
	return <span style={{ display: 'inline-block', border: '1.5px dashed #b9aea3', color: '#7a716a', background: '#faf6f1', borderRadius: radii.label, padding: '4px 10px', fontWeight: 700, fontSize: 18, ...style }}>[TBC: {children}]</span>;
}

const kindStyle = {
	fact: { bg: colors.green, label: 'Current' },
	built: { bg: colors.blue, label: 'Live demo' },
	partial: { bg: colors.yellow, label: 'In beta' },
	hyp: { bg: colors.purple, label: 'Piloting' },
	tbd: { bg: '#e4ddd6', label: 'Planned' },
	claim: { bg: colors.orange, label: 'Company data' },
} as const;

export type Kind = keyof typeof kindStyle;

export function KindTag({ kind, text }: { kind: Kind; text?: string }) {
	const k = kindStyle[kind];
	return <span style={{ display: 'inline-flex', alignItems: 'center', background: k.bg, color: colors.dark, border: `1.5px solid ${colors.dark}`, borderRadius: radii.label, padding: '3px 9px', fontFamily: fonts.mono, fontWeight: 700, fontSize: 14, whiteSpace: 'nowrap' }}>{text ?? k.label}</span>;
}

export function Card({ children, accent = colors.yellow, style }: { children: ReactNode; accent?: string; style?: CSSProperties }) {
	return <div style={{ background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: radii.card, borderTop: `9px solid ${accent}`, padding: '18px 20px', ...style }}>{children}</div>;
}

export function H3({ children, style }: { children: ReactNode; style?: CSSProperties }) {
	return <div style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 26, lineHeight: 1.2, color: colors.dark, ...style }}>{children}</div>;
}

export function P({ children, style }: { children: ReactNode; style?: CSSProperties }) {
	return <div style={{ fontSize: 20, lineHeight: 1.45, color: ink, ...style }}>{children}</div>;
}

export { colors, fonts, radii };
