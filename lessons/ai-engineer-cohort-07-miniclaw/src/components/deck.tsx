import { motion } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';
import { Slide, Inner, colors, fonts, border, radii } from './ui';

export function DeckFrame({
	tag,
	title,
	subtitle,
	children,
	bg = colors.warmBg,
	accent = colors.red,
	titleSize = 58,
}: {
	tag: string;
	title: ReactNode;
	subtitle?: ReactNode;
	children: ReactNode;
	bg?: string;
	accent?: string;
	titleSize?: number;
}) {
	const darkCanvas = bg === colors.dark || bg === colors.darkBg;
	return (
		<Slide bg={bg} style={{
			position: 'relative',
			backgroundImage: darkCanvas ? undefined : 'linear-gradient(rgba(16,22,47,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(16,22,47,.055) 1px, transparent 1px)',
			backgroundSize: darkCanvas ? undefined : '48px 48px',
		}}>
			{!darkCanvas && <>
				<div aria-hidden style={{ position: 'absolute', left: -84, top: 145, width: 164, height: 164, borderRadius: '50%', border: `22px solid ${colors.yellow}`, opacity: .52 }} />
				<div aria-hidden style={{ position: 'absolute', right: -62, bottom: -38, width: 220, height: 138, borderRadius: '110px 0 0 0', background: colors.yellow, opacity: .58 }} />
			</>}
			<Inner style={{ flexDirection: 'column', gap: 20, paddingTop: 52, paddingBottom: 48 }}>
				<motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
					<span style={{ width: 46, height: 9, background: accent }} />
					<span style={{ fontFamily: fonts.mono, fontSize: 17, fontWeight: 700, letterSpacing: 1.8, color: darkCanvas ? colors.white : colors.black }}>{tag}</span>
				</motion.div>
				<motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.42, delay: 0.08 }}>
					<h1 style={{ fontFamily: fonts.heading, fontSize: titleSize, lineHeight: 1.08, letterSpacing: -1.6, margin: 0, maxWidth: 1370, color: darkCanvas ? colors.white : colors.black }}>
						<span style={darkCanvas ? undefined : { backgroundImage: `linear-gradient(transparent 70%, ${colors.yellow} 70%, ${colors.yellow} 94%, transparent 94%)`, WebkitBoxDecorationBreak: 'clone', boxDecorationBreak: 'clone' }}>{title}</span>
					</h1>
					{subtitle && <p style={{ fontFamily: fonts.body, fontSize: 23, lineHeight: 1.45, color: darkCanvas ? '#d8d8dd' : '#514c48', margin: '12px 0 0', maxWidth: 1260 }}>{subtitle}</p>}
				</motion.div>
				<div style={{ flex: 1, minHeight: 0, width: '100%' }}>{children}</div>
			</Inner>
		</Slide>
	);
}

export function Panel({ children, bg = colors.white, style }: { children: ReactNode; bg?: string; style?: CSSProperties }) {
	const isDark = bg === colors.dark || bg === colors.darkBg;
	return <div style={{ background: bg, border: `2px solid ${colors.dark}`, borderRadius: radii.panel, boxShadow: `9px 9px 0 ${isDark ? 'rgba(255,87,87,.58)' : 'rgba(255,222,89,.92)'}`, padding: 26, ...style }}>{children}</div>;
}

export function Label({ children, bg = colors.dark, color = colors.white }: { children: ReactNode; bg?: string; color?: string }) {
	return <span style={{ display: 'inline-flex', alignItems: 'center', background: bg, color, border: `2px solid ${colors.dark}`, borderRadius: radii.label, padding: '7px 12px', fontFamily: fonts.mono, fontWeight: 800, fontSize: 15, letterSpacing: .35 }}>{children}</span>;
}

export function NumberBadge({ children, bg = colors.yellow }: { children: ReactNode; bg?: string }) {
	return <span style={{ width: 48, height: 48, borderRadius: '50%', border, background: bg, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.mono, fontWeight: 800, fontSize: 18, flexShrink: 0 }}>{children}</span>;
}

export function AnimatedGroup({ children, delay = 0, style }: { children: ReactNode; delay?: number; style?: CSSProperties }) {
	return <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.42, delay }} style={style}>{children}</motion.div>;
}

export function RoleFocusSlide({
	index,
	title,
	problem,
	capabilities,
	interview,
	accent,
}: {
	index: string;
	title: string;
	problem: string;
	capabilities: string[];
	interview: string[];
	accent: string;
}) {
	return <DeckFrame tag={`ROLE ${index}`} title={title} subtitle={problem} accent={accent}>
		<div style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 28, height: '100%', alignItems: 'stretch' }}>
			<AnimatedGroup delay={.18} style={{ display: 'flex' }}><Panel style={{ flex: 1, borderTop: `12px solid ${accent}` }}>
				<Label bg={accent} color={accent === colors.yellow || accent === colors.green ? colors.black : colors.white}>系统能力</Label>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 26 }}>{capabilities.map((item, i) => <div key={item} style={{ fontSize: 27, fontWeight: 800, padding: '18px 14px', background: i % 2 ? '#fff8f2' : '#fff', borderBottom: `5px solid ${accent}` }}>{item}</div>)}</div>
			</Panel></AnimatedGroup>
			<AnimatedGroup delay={.28} style={{ display: 'flex' }}><Panel bg={colors.dark} style={{ flex: 1, color: colors.white }}>
				<Label bg={colors.yellow} color={colors.black}>面试会继续追问</Label>
				<div style={{ marginTop: 28, display: 'grid', gap: 22 }}>{interview.map((item, i) => <div key={item} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', fontSize: 25, lineHeight: 1.35, fontWeight: 700 }}><NumberBadge bg={accent}>{i + 1}</NumberBadge><span>{item}</span></div>)}</div>
			</Panel></AnimatedGroup>
		</div>
	</DeckFrame>;
}

export { colors, fonts, border, radii };
