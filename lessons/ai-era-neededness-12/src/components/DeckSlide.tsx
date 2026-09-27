import { motion } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';
import { deck, type DeckSlideContent } from '../data/deck';
import { Slide, assetPath, border, colors, fonts, shadow, shadowSm } from './ui';

const accentMap = {
	red: colors.red,
	yellow: colors.yellow,
	green: colors.green,
	blue: colors.blue,
	purple: colors.purple,
	orange: colors.orange,
} as const;

const fadeUp = (delay = 0) => ({
	initial: { opacity: 0, y: 24 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.48, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

function textOn(bg: string) {
	return bg === colors.red || bg === colors.purple ? colors.white : colors.black;
}

function Page({
	s,
	children,
	dark = false,
	titleSize = 66,
	center = false,
	style,
}: {
	s: DeckSlideContent;
	children: ReactNode;
	dark?: boolean;
	titleSize?: number;
	center?: boolean;
	style?: CSSProperties;
}) {
	const accent = accentMap[s.accent];
	const fg = dark ? colors.white : colors.black;
	return (
		<Slide bg={dark ? colors.dark : colors.warmBg}>
			<div style={{
				width: '100%',
				height: '100%',
				padding: '72px 104px 76px',
				display: 'flex',
				flexDirection: 'column',
				color: fg,
				position: 'relative',
				...style,
			}}>
				<div style={{
					position: 'absolute',
					left: 0,
					top: 0,
					bottom: 0,
					width: 18,
					background: accent,
				}} />
				<div style={{
					display: 'flex',
					alignItems: 'center',
					gap: 14,
					marginBottom: 24,
					alignSelf: center ? 'center' : 'flex-start',
				}}>
					<span style={{
						padding: '7px 14px',
						background: accent,
						color: textOn(accent),
						border: `2px solid ${dark ? colors.white : colors.black}`,
						fontFamily: fonts.mono,
						fontWeight: 700,
						fontSize: 14,
						letterSpacing: 2,
					}}>
						{s.eyebrow}
					</span>
					<span style={{
						fontFamily: fonts.mono,
						fontWeight: 700,
						fontSize: 13,
						letterSpacing: 2,
						color: dark ? 'rgba(255,255,255,.55)' : '#777',
					}}>
						{s.section}
					</span>
				</div>
				<motion.h2
					{...fadeUp(0.05)}
					style={{
						fontFamily: fonts.heading,
						fontSize: titleSize,
						fontWeight: 900,
						lineHeight: 1.1,
						letterSpacing: -1.6,
						maxWidth: center ? 1300 : 1380,
						textAlign: center ? 'center' : 'left',
						alignSelf: center ? 'center' : 'flex-start',
					}}
				>
					{s.title}
				</motion.h2>
				{s.subtitle && (
					<motion.p
						{...fadeUp(0.13)}
						style={{
							marginTop: 18,
							fontSize: 25,
							lineHeight: 1.55,
							fontWeight: 600,
							color: dark ? 'rgba(255,255,255,.76)' : '#555',
							maxWidth: 1260,
							textAlign: center ? 'center' : 'left',
							alignSelf: center ? 'center' : 'flex-start',
						}}
					>
						{s.subtitle}
					</motion.p>
				)}
				<div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
					{children}
				</div>
			</div>
		</Slide>
	);
}

function Panel({
	children,
	bg = colors.white,
	style,
	delay = 0,
	quiet = false,
}: {
	children: ReactNode;
	bg?: string;
	style?: CSSProperties;
	delay?: number;
	quiet?: boolean;
}) {
	return (
		<motion.div
			{...fadeUp(delay)}
			style={{
				background: bg,
				border,
				boxShadow: quiet ? shadowSm : shadow,
				padding: 26,
				...style,
			}}
		>
			{children}
		</motion.div>
	);
}

function Note({ children, dark = false }: { children?: ReactNode; dark?: boolean }) {
	if (!children) return null;
	return (
		<motion.div
			{...fadeUp(0.5)}
			style={{
				marginTop: 'auto',
				background: dark ? colors.yellow : colors.dark,
				color: dark ? colors.black : colors.white,
				border: `3px solid ${dark ? colors.white : colors.black}`,
				boxShadow: `5px 5px 0 ${dark ? colors.white : colors.black}`,
				padding: '17px 24px',
				fontSize: 23,
				fontWeight: 800,
				lineHeight: 1.35,
			}}
		>
			{children}
		</motion.div>
	);
}

function Cover({ s }: { s: DeckSlideContent }) {
	return (
		<Slide bg={colors.dark}>
			<div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden', padding: '90px 108px' }}>
				<div style={{ position: 'absolute', width: 620, height: 620, right: -150, top: -230, background: colors.red, borderRadius: '50%' }} />
				<div style={{ position: 'absolute', width: 380, height: 380, right: 180, bottom: -210, background: colors.yellow, borderRadius: '50%', border: '4px solid #000' }} />
				<div style={{ position: 'absolute', width: 170, height: 170, left: 58, bottom: 48, background: colors.blue, transform: 'rotate(12deg)', border: '4px solid #000', boxShadow: '8px 8px 0 #000' }} />
				<motion.div {...fadeUp(0)} style={{
					display: 'inline-block',
					background: colors.yellow,
					border: '3px solid #000',
					padding: '8px 18px',
					fontFamily: fonts.mono,
					fontWeight: 700,
					letterSpacing: 2.5,
					position: 'relative',
					zIndex: 2,
				}}>
					{s.eyebrow}
				</motion.div>
				<motion.h1 {...fadeUp(0.12)} style={{
					fontFamily: fonts.heading,
					fontWeight: 900,
					fontSize: 78,
					lineHeight: 1.05,
					letterSpacing: -2.4,
					color: colors.white,
					maxWidth: 1260,
					marginTop: 46,
					position: 'relative',
					zIndex: 2,
				}}>
					AI 时代，学生真正要找的不是工作，
					<span style={{ color: colors.yellow, display: 'block', marginTop: 8 }}>而是“可被需要性”</span>
				</motion.h1>
				<motion.p {...fadeUp(0.28)} style={{
					fontSize: 28,
					lineHeight: 1.5,
					fontWeight: 650,
					color: 'rgba(255,255,255,.78)',
					maxWidth: 1000,
					marginTop: 34,
					position: 'relative',
					zIndex: 2,
				}}>
					{s.subtitle}
				</motion.p>
				<motion.div {...fadeUp(0.42)} style={{
					position: 'absolute',
					left: 108,
					bottom: 64,
					padding: '16px 22px',
					background: colors.white,
					border,
					boxShadow: shadow,
					display: 'flex',
					alignItems: 'center',
					gap: 18,
					zIndex: 2,
				}}>
					<img src={assetPath('jr-logo.png')} alt="JR Academy" style={{ width: 176, height: 'auto', display: 'block' }} />
					<span style={{ height: 34, width: 3, background: colors.black }} />
					<span style={{ fontFamily: fonts.mono, fontWeight: 700, letterSpacing: 1.2 }}>← → 翻页 · F 全屏 · V 摄像头</span>
				</motion.div>
			</div>
		</Slide>
	);
}

function Question({ s }: { s: DeckSlideContent }) {
	const accent = accentMap[s.accent];
	return (
		<Page s={s} center titleSize={76}>
			<div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
				{(s.items ?? []).map((item, i) => (
					<motion.div
						key={item}
						initial={{ opacity: 0, scale: 0.7, rotate: i === 0 ? -8 : i === 2 ? 8 : 0 }}
						animate={{ opacity: 1, scale: 1, rotate: i === 0 ? -8 : i === 2 ? 8 : 0 }}
						transition={{ type: 'spring', delay: 0.22 + i * 0.1 }}
						style={{
							position: 'absolute',
							left: i === 0 ? 70 : i === 1 ? '50%' : 'auto',
							right: i === 2 ? 70 : 'auto',
							top: i === 1 ? 40 : 92,
							transform: i === 1 ? 'translateX(-50%)' : undefined,
							padding: '15px 25px',
							background: i === 1 ? colors.yellow : colors.white,
							border,
							boxShadow: shadowSm,
							fontSize: 24,
							fontWeight: 900,
						}}
					>
						{item}焦虑
					</motion.div>
				))}
				<motion.div
					initial={{ opacity: 0, scale: 0.72 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ type: 'spring', stiffness: 170, damping: 14, delay: 0.5 }}
					style={{
						padding: '34px 54px',
						background: accent,
						color: textOn(accent),
						border: '4px solid #000',
						boxShadow: '10px 10px 0 #000',
						fontFamily: fonts.heading,
						fontSize: 56,
						fontWeight: 900,
						marginTop: 96,
					}}
				>
					{s.big}
				</motion.div>
			</div>
		</Page>
	);
}

function Skills({ s }: { s: DeckSlideContent }) {
	const accents = [colors.red, colors.yellow, colors.green, colors.blue, colors.purple, colors.orange];
	return (
		<Page s={s}>
			<div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, alignContent: 'center' }}>
				{(s.items ?? []).map((item, i) => (
					<Panel key={item} delay={0.18 + i * 0.07} bg={accents[i]} style={{
						minHeight: 126,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						color: textOn(accents[i]),
					}}>
						<span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700 }}>0{i + 1}</span>
						<span style={{ fontFamily: fonts.heading, fontSize: 34, fontWeight: 900 }}>{item}</span>
					</Panel>
				))}
			</div>
			<Note>{s.note}</Note>
		</Page>
	);
}

function Statement({ s }: { s: DeckSlideContent }) {
	const accent = accentMap[s.accent];
	return (
		<Page s={s} dark titleSize={68}>
			<div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 42 }}>
				<motion.div {...fadeUp(0.22)} style={{
					flex: 1.4,
					background: accent,
					color: textOn(accent),
					border: '4px solid #fff',
					boxShadow: '10px 10px 0 #fff',
					padding: '44px 48px',
					fontFamily: fonts.heading,
					fontSize: 66,
					fontWeight: 900,
					lineHeight: 1.1,
				}}>
					{s.big}
				</motion.div>
				<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
					{(s.items ?? []).map((item, i) => (
						<Panel key={item} delay={0.28 + i * 0.1} bg={colors.white} quiet style={{ fontSize: 30, fontWeight: 900, color: colors.black }}>
							<span style={{ color: accent, marginRight: 12 }}>→</span>{item}
						</Panel>
					))}
				</div>
			</div>
			<Note dark>{s.note}</Note>
		</Page>
	);
}

function Ladder({ s }: { s: DeckSlideContent }) {
	const palette = [colors.white, colors.blue, colors.yellow, colors.green];
	return (
		<Page s={s} titleSize={65}>
			<div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: 22, padding: '20px 10px 10px' }}>
				{(s.steps ?? []).map((step, i) => (
					<motion.div
						key={step}
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 118 + i * 62 }}
						transition={{ duration: 0.55, delay: 0.2 + i * 0.1 }}
						style={{
							flex: 1,
							background: palette[i],
							border,
							boxShadow: shadow,
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'flex-end',
							padding: 24,
						}}
					>
						<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: '#555' }}>LEVEL {i + 1}</span>
						<span style={{ fontFamily: fonts.heading, fontSize: 35, fontWeight: 900, marginTop: 8 }}>{step}</span>
					</motion.div>
				))}
				<motion.div {...fadeUp(0.72)} style={{ fontSize: 58, fontWeight: 900, color: colors.green, marginBottom: 242 }}>↗</motion.div>
			</div>
			<Note>{s.note}</Note>
		</Page>
	);
}

function Persona({ s }: { s: DeckSlideContent }) {
	const accent = accentMap[s.accent];
	return (
		<Page s={s} titleSize={76}>
			<div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 38 }}>
				<motion.div
					initial={{ opacity: 0, rotate: -10, scale: 0.7 }}
					animate={{ opacity: 1, rotate: -4, scale: 1 }}
					transition={{ type: 'spring', delay: 0.22 }}
					style={{
						width: 300,
						height: 300,
						borderRadius: '50%',
						background: accent,
						border: '5px solid #000',
						boxShadow: '12px 12px 0 #000',
						display: 'grid',
						placeItems: 'center',
						fontFamily: fonts.heading,
						fontSize: 150,
						fontWeight: 900,
						color: textOn(accent),
					}}
				>
					{s.big}
				</motion.div>
				<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 18 }}>
					{(s.items ?? []).map((item, i) => (
						<Panel key={item} delay={0.26 + i * 0.1} style={{ fontSize: 28, fontWeight: 850 }}>
							<span style={{ display: 'inline-block', width: 42, color: accent, fontFamily: fonts.mono }}>0{i + 1}</span>
							{item}
						</Panel>
					))}
				</div>
			</div>
			<Note>{s.note}</Note>
		</Page>
	);
}

function Race({ s }: { s: DeckSlideContent }) {
	return (
		<Page s={s} dark>
			<div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 24 }}>
				{[
					{ label: '学生', values: s.left ?? [], width: '55%', color: colors.blue, delay: 0.2 },
					{ label: 'AI', values: s.right ?? [], width: '94%', color: colors.purple, delay: 0.34 },
				].map((lane) => (
					<motion.div key={lane.label} {...fadeUp(lane.delay)} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 20, alignItems: 'center' }}>
						<div style={{ fontFamily: fonts.heading, fontSize: 38, fontWeight: 900 }}>{lane.label}</div>
						<div style={{ background: 'rgba(255,255,255,.12)', border: '3px solid #fff', height: 120, position: 'relative' }}>
							<motion.div initial={{ width: 0 }} animate={{ width: lane.width }} transition={{ duration: 1, delay: lane.delay + 0.1 }} style={{
								height: '100%',
								background: lane.color,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-around',
								padding: '0 20px',
								color: colors.black,
								fontSize: 22,
								fontWeight: 900,
							}}>
								{lane.values.map((v) => <span key={v}>{v}</span>)}
							</motion.div>
						</div>
					</motion.div>
				))}
			</div>
			<Note dark>{s.note}</Note>
		</Page>
	);
}

function Translate({ s }: { s: DeckSlideContent }) {
	return (
		<Page s={s} titleSize={61}>
			<div style={{ flex: 1, display: 'grid', gridTemplateColumns: '0.75fr 90px 1.7fr', gap: 18, alignItems: 'center', marginTop: 20 }}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
					{(s.left ?? []).map((item, i) => (
						<Panel key={item} delay={0.18 + i * 0.05} quiet style={{ padding: '12px 18px', fontSize: 23, fontWeight: 900, background: i % 2 ? colors.white : '#e9f7ff' }}>
							{item}
						</Panel>
					))}
				</div>
				<motion.div {...fadeUp(0.34)} style={{ fontSize: 60, fontWeight: 900, color: colors.red, textAlign: 'center' }}>→</motion.div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
					{(s.right ?? []).map((item, i) => (
						<Panel key={item} delay={0.28 + i * 0.05} quiet style={{ padding: '12px 18px', fontSize: 21, fontWeight: 800, background: i % 2 ? colors.yellow : colors.green }}>
							{item}
						</Panel>
					))}
				</div>
			</div>
			<Note>{s.note}</Note>
		</Page>
	);
}

function Resume({ s }: { s: DeckSlideContent }) {
	return (
		<Page s={s} titleSize={60}>
			<div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginTop: 28 }}>
				<div>
					<div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, marginBottom: 14 }}>简历上写的</div>
					{(s.left ?? []).map((item, i) => (
						<Panel key={item} delay={0.18 + i * 0.08} quiet style={{ marginBottom: 18, fontSize: 24, fontWeight: 800, color: '#777', textDecoration: 'line-through', textDecorationColor: colors.red, textDecorationThickness: 4 }}>
							{item}
						</Panel>
					))}
				</div>
				<div>
					<div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, marginBottom: 14 }}>别人真正想知道的</div>
					{(s.right ?? []).map((item, i) => (
						<Panel key={item} delay={0.28 + i * 0.08} bg={i === 1 ? colors.yellow : colors.white} quiet style={{ marginBottom: 18, fontSize: 24, fontWeight: 900 }}>
							<span style={{ color: colors.red }}>?</span> {item}
						</Panel>
					))}
				</div>
			</div>
			<Note>{s.note}</Note>
		</Page>
	);
}

function Loop({ s }: { s: DeckSlideContent }) {
	const palette = [colors.red, colors.yellow, colors.blue, colors.purple];
	return (
		<Page s={s} center>
			<div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
				{(s.items ?? []).map((item, i) => (
					<motion.div
						key={item}
						{...fadeUp(0.18 + i * 0.08)}
						style={{
							width: 245,
							height: 165,
							background: palette[i],
							color: textOn(palette[i]),
							border,
							boxShadow: shadow,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							fontFamily: fonts.heading,
							fontSize: 31,
							fontWeight: 900,
							position: 'relative',
						}}
					>
						{item}
						{i < (s.items?.length ?? 0) - 1 && <span style={{ position: 'absolute', right: -33, zIndex: 3, color: colors.black, fontSize: 38 }}>→</span>}
					</motion.div>
				))}
			</div>
			<motion.div {...fadeUp(0.62)} style={{ alignSelf: 'center', background: colors.dark, color: colors.yellow, border, boxShadow: shadow, padding: '20px 36px', fontSize: 32, fontWeight: 900 }}>
				但：{s.big}
			</motion.div>
		</Page>
	);
}

function BeforeAfter({ s }: { s: DeckSlideContent }) {
	return (
		<Page s={s} dark titleSize={61}>
			<div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 90px 1fr', alignItems: 'center', gap: 26 }}>
				<Panel bg="#f6f6f6" style={{ color: colors.black }}>
					<div style={{ fontFamily: fonts.mono, fontWeight: 700, color: '#777', marginBottom: 18 }}>空洞原句</div>
					{(s.left ?? []).map((x) => <div key={x} style={{ fontSize: 25, fontWeight: 800, padding: '12px 0', borderBottom: '2px solid #ddd' }}>{x}</div>)}
				</Panel>
				<div style={{ fontSize: 58, color: colors.yellow, fontWeight: 900 }}>✨</div>
				<Panel bg={colors.purple} style={{ color: colors.white }}>
					<div style={{ fontFamily: fonts.mono, fontWeight: 700, color: colors.yellow, marginBottom: 18 }}>AI 润色后</div>
					{(s.right ?? []).map((x) => <div key={x} style={{ fontSize: 25, fontWeight: 800, padding: '12px 0', borderBottom: '2px solid rgba(255,255,255,.35)' }}>{x}</div>)}
				</Panel>
			</div>
			<Note dark>{s.note}</Note>
		</Page>
	);
}

function Portfolio({ s }: { s: DeckSlideContent }) {
	return (
		<Page s={s} dark center titleSize={72}>
			<div style={{ flex: 1, display: 'grid', placeItems: 'center', position: 'relative' }}>
				<motion.div initial={{ opacity: 0, rotate: -5, scale: .8 }} animate={{ opacity: 1, rotate: -2, scale: 1 }} transition={{ type: 'spring', delay: .25 }} style={{
					background: colors.yellow,
					color: colors.black,
					border: '5px solid #fff',
					boxShadow: '13px 13px 0 #fff',
					padding: '42px 80px',
					fontFamily: fonts.heading,
					fontSize: 80,
					fontWeight: 900,
				}}>
					{s.big}
				</motion.div>
				<div style={{ position: 'absolute', left: 120, top: 95, fontSize: 86, transform: 'rotate(-12deg)' }}>👀</div>
				<div style={{ position: 'absolute', right: 120, bottom: 55, fontSize: 86, transform: 'rotate(10deg)' }}>🛠️</div>
			</div>
			<Note dark>{s.note}</Note>
		</Page>
	);
}

function Process({ s }: { s: DeckSlideContent }) {
	const palette = [colors.red, colors.orange, colors.yellow, colors.green, colors.blue, colors.purple, colors.white];
	return (
		<Page s={s} titleSize={58}>
			<div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 10 }}>
				{(s.steps ?? []).map((step, i) => (
					<motion.div key={step} {...fadeUp(0.16 + i * .07)} style={{ flex: 1, position: 'relative' }}>
						<div style={{
							height: 210,
							background: palette[i],
							color: textOn(palette[i]),
							border,
							boxShadow: shadowSm,
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							padding: '20px 16px',
						}}>
							<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700 }}>0{i + 1}</span>
							<span style={{ fontFamily: fonts.heading, fontSize: 25, fontWeight: 900, lineHeight: 1.15 }}>{step}</span>
						</div>
						{i < (s.steps?.length ?? 0) - 1 && <span style={{ position: 'absolute', right: -13, top: 82, zIndex: 4, fontSize: 30, fontWeight: 900 }}>→</span>}
					</motion.div>
				))}
			</div>
			<Note>{s.note}</Note>
		</Page>
	);
}

function CaseSlide({ s }: { s: DeckSlideContent }) {
	const accent = accentMap[s.accent];
	return (
		<Page s={s} titleSize={68}>
			<div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.45fr .9fr', gap: 36, alignItems: 'center' }}>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
					{(s.items ?? []).map((item, i) => (
						<Panel key={item} delay={0.18 + i * .08} bg={i === 0 ? accent : colors.white} style={{ minHeight: 126, fontSize: 27, fontWeight: 900, color: i === 0 ? textOn(accent) : colors.black }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 13, opacity: .68, marginBottom: 16 }}>STEP 0{i + 1}</div>
							{item}
						</Panel>
					))}
				</div>
				<motion.div {...fadeUp(.38)} style={{
					background: colors.dark,
					color: colors.white,
					border,
					boxShadow: shadow,
					padding: '36px 30px',
				}}>
					<div style={{ fontFamily: fonts.mono, fontSize: 13, color: accent, fontWeight: 700, letterSpacing: 2 }}>DELIVERABLE</div>
					<div style={{ fontFamily: fonts.heading, fontSize: 36, fontWeight: 900, lineHeight: 1.2, marginTop: 16 }}>{s.action}</div>
				</motion.div>
			</div>
			<Note>{s.note}</Note>
		</Page>
	);
}

function Toolkit({ s }: { s: DeckSlideContent }) {
	const icons = ['⌕', '▦', '◇', '✓', '✎'];
	const palette = [colors.red, colors.orange, colors.yellow, colors.green, colors.blue];
	return (
		<Page s={s} dark titleSize={64}>
			<div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 20 }}>
				{(s.items ?? []).map((item, i) => (
					<motion.div key={item} {...fadeUp(.18 + i * .08)} style={{
						flex: 1,
						height: 235,
						background: colors.white,
						color: colors.black,
						border: '3px solid #fff',
						boxShadow: `7px 7px 0 ${palette[i]}`,
						padding: 24,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
					}}>
						<div style={{ width: 62, height: 62, background: palette[i], border, display: 'grid', placeItems: 'center', fontSize: 34, fontWeight: 900 }}>{icons[i]}</div>
						<div style={{ fontFamily: fonts.heading, fontSize: 30, fontWeight: 900 }}>{item}</div>
					</motion.div>
				))}
			</div>
			<Note dark>{s.note}</Note>
		</Page>
	);
}

function Origin({ s }: { s: DeckSlideContent }) {
	return (
		<Page s={s} titleSize={66}>
			<div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1.35fr', gap: 36, alignItems: 'center' }}>
				<Panel bg="#f5f5f5" style={{ color: '#777', transform: 'rotate(-1.5deg)' }}>
					<div style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 14 }}>不是因为</div>
					{(s.left ?? []).map((x, i) => <div key={x} style={{ fontSize: i === 0 ? 19 : 30, fontWeight: 900, marginTop: 18, textDecoration: i > 0 ? 'line-through' : undefined, textDecorationColor: colors.red, textDecorationThickness: 4 }}>{x}</div>)}
				</Panel>
				<Panel bg={colors.red} style={{ color: colors.white, padding: 40, transform: 'rotate(1deg)' }}>
					<div style={{ fontFamily: fonts.mono, fontWeight: 700, color: colors.yellow }}>真正的问题</div>
					<div style={{ fontFamily: fonts.heading, fontSize: 40, lineHeight: 1.25, fontWeight: 900, marginTop: 22 }}>{s.right?.[1]}</div>
				</Panel>
			</div>
		</Page>
	);
}

function Product({ s }: { s: DeckSlideContent }) {
	return (
		<Page s={s} dark titleSize={58}>
			<div style={{
				flex: 1,
				display: 'grid',
				gridTemplateColumns: 'minmax(0, 1.48fr) minmax(340px, .72fr)',
				gap: 32,
				alignItems: 'center',
				padding: '20px 0 18px',
			}}>
				<motion.div {...fadeUp(.18)} style={{
					position: 'relative',
					width: '100%',
					aspectRatio: '1138 / 640',
					background: colors.white,
					border: '4px solid #fff',
					boxShadow: `9px 9px 0 ${colors.purple}`,
					overflow: 'hidden',
				}}>
					<img
						src={assetPath('vdar-linkedin-workflow.gif')}
						alt="Vdar.ai 从 LinkedIn 岗位分析到申请材料生成的工作流演示"
						style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
					/>
					<div style={{
						position: 'absolute',
						left: 14,
						top: 14,
						background: colors.dark,
						color: colors.white,
						border: '2px solid #fff',
						padding: '7px 11px',
						fontFamily: fonts.mono,
						fontSize: 12,
						fontWeight: 800,
						letterSpacing: 1.2,
					}}>
						LIVE WORKFLOW · LINKEDIN → VDAR.AI
					</div>
				</motion.div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
					<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
						{(s.steps ?? []).map((step, i) => (
							<motion.div key={step} {...fadeUp(.24 + i * .07)} style={{
								minHeight: 72,
								background: i === 3 ? colors.yellow : colors.white,
								color: colors.black,
								border: '3px solid #fff',
								boxShadow: `5px 5px 0 ${i === 3 ? colors.red : colors.purple}`,
								padding: '15px 12px',
								fontSize: 23,
								fontWeight: 900,
								display: 'grid',
								placeItems: 'center',
								textAlign: 'center',
							}}>
								{step}
							</motion.div>
						))}
					</div>
					<div style={{ fontFamily: fonts.mono, color: 'rgba(255,255,255,.58)', fontSize: 13, fontWeight: 700, letterSpacing: 1.6 }}>
						FROM UNDERSTANDING TO OUTPUT
					</div>
					<div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
						{(s.items ?? []).map((item, i) => (
							<motion.div key={item} {...fadeUp(.48 + i * .07)} style={{
								padding: '11px 14px',
								border: '2px solid #fff',
								background: 'rgba(255,255,255,.08)',
								fontSize: 17,
								fontWeight: 850,
							}}>
								{item}
							</motion.div>
						))}
					</div>
				</div>
			</div>
			<Note dark>{s.note}</Note>
		</Page>
	);
}

function Mirror({ s }: { s: DeckSlideContent }) {
	return (
		<Page s={s} center titleSize={67}>
			<div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 70 }}>
				<motion.div initial={{ opacity: 0, scale: .7, rotateY: 40 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} transition={{ duration: .7, delay: .2 }} style={{
					width: 310,
					height: 310,
					borderRadius: '50%',
					background: `linear-gradient(135deg, ${colors.white}, ${colors.blue})`,
					border: '8px solid #000',
					boxShadow: '14px 14px 0 #000',
					display: 'grid',
					placeItems: 'center',
					fontFamily: fonts.heading,
					fontSize: 58,
					fontWeight: 900,
				}}>
					{s.big}
				</motion.div>
				<motion.blockquote {...fadeUp(.38)} style={{
					maxWidth: 650,
					background: colors.dark,
					color: colors.white,
					border,
					boxShadow: shadow,
					padding: '38px 42px',
					fontFamily: fonts.heading,
					fontSize: 38,
					fontWeight: 900,
					lineHeight: 1.35,
					textAlign: 'left',
				}}>
					“{s.quote}”
				</motion.blockquote>
			</div>
		</Page>
	);
}

function System({ s }: { s: DeckSlideContent }) {
	return (
		<Page s={s} titleSize={66}>
			<div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
				{(s.steps ?? []).map((step, i) => (
					<motion.div key={step} {...fadeUp(.18 + i * .08)} style={{ flex: 1, position: 'relative' }}>
						<div style={{
							height: 170,
							background: i % 2 ? colors.yellow : colors.white,
							border,
							boxShadow: shadowSm,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							gap: 8,
							textAlign: 'center',
						}}>
							<span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700 }}>0{i + 1}</span>
							<span style={{ fontFamily: fonts.heading, fontSize: 29, fontWeight: 900 }}>{step}</span>
						</div>
						{i < (s.steps?.length ?? 0) - 1 && <span style={{ position: 'absolute', right: -19, top: 58, zIndex: 3, fontSize: 36 }}>→</span>}
					</motion.div>
				))}
			</div>
			<Note>{s.note}</Note>
		</Page>
	);
}

function Wheel({ s }: { s: DeckSlideContent }) {
	const positions = [
		{ left: '7%', top: '18%' },
		{ right: '7%', top: '18%' },
		{ right: '13%', bottom: '2%' },
		{ left: 'calc(50% - 133px)', bottom: '-2%' },
		{ left: '13%', bottom: '2%' },
	];
	const palette = [colors.red, colors.yellow, colors.green, colors.blue, colors.purple];
	return (
		<Page s={s} titleSize={63}>
			<div style={{ flex: 1, position: 'relative', minHeight: 430 }}>
				<motion.div initial={{ opacity: 0, scale: .7 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', delay: .34 }} style={{
					position: 'absolute',
					left: 'calc(50% - 107px)',
					top: '35%',
					width: 214,
					height: 214,
					borderRadius: '50%',
					background: colors.dark,
					color: colors.yellow,
					border: '5px solid #000',
					boxShadow: '10px 10px 0 #000',
					display: 'grid',
					placeItems: 'center',
					textAlign: 'center',
					fontFamily: fonts.heading,
					fontSize: 32,
					fontWeight: 900,
				}}>
					{s.big}
				</motion.div>
				{(s.items ?? []).map((item, i) => {
					const [head, body] = item.split('：');
					return (
						<motion.div key={item} {...fadeUp(.16 + i * .08)} style={{
							position: 'absolute',
							...positions[i],
							width: 266,
							minHeight: 90,
							background: palette[i],
							color: textOn(palette[i]),
							border,
							boxShadow: shadowSm,
							padding: '14px 18px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							textAlign: 'center',
						}}>
							<div style={{ fontFamily: fonts.heading, fontSize: 23, fontWeight: 900 }}>{head}</div>
							<div style={{ fontSize: 16, fontWeight: 700, marginTop: 4 }}>{body}</div>
						</motion.div>
					);
				})}
			</div>
		</Page>
	);
}

function Shift({ s }: { s: DeckSlideContent }) {
	return (
		<Page s={s} dark titleSize={68}>
			<div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 18 }}>
				{(s.left ?? []).map((from, i) => (
					<motion.div key={from} {...fadeUp(.2 + i * .1)} style={{ display: 'grid', gridTemplateColumns: '1fr 120px 1.5fr', alignItems: 'center', gap: 20 }}>
						<div style={{ padding: '18px 24px', border: '3px solid rgba(255,255,255,.5)', color: 'rgba(255,255,255,.62)', fontFamily: fonts.heading, fontSize: 30, fontWeight: 900 }}>
							{from}
						</div>
						<div style={{ color: colors.yellow, fontSize: 48, fontWeight: 900, textAlign: 'center' }}>→</div>
						<div style={{ padding: '18px 24px', background: i === 2 ? colors.green : colors.yellow, color: colors.black, border: '3px solid #fff', boxShadow: '6px 6px 0 #fff', fontFamily: fonts.heading, fontSize: 32, fontWeight: 900 }}>
							{s.right?.[i]}
						</div>
					</motion.div>
				))}
			</div>
			<Note dark>{s.note}</Note>
		</Page>
	);
}

function Evidence({ s }: { s: DeckSlideContent }) {
	const palette = [colors.orange, colors.yellow, colors.blue, colors.green];
	return (
		<Page s={s} titleSize={65}>
			<div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 26, alignContent: 'center' }}>
				{(s.items ?? []).map((item, i) => (
					<motion.div key={item} initial={{ opacity: 0, scale: .76, rotate: i % 2 ? 2 : -2 }} animate={{ opacity: 1, scale: 1, rotate: i % 2 ? 2 : -2 }} transition={{ type: 'spring', delay: .18 + i * .08 }} style={{
						background: palette[i],
						color: textOn(palette[i]),
						border: '4px solid #000',
						boxShadow: '8px 8px 0 #000',
						padding: '25px 30px',
						fontFamily: fonts.heading,
						fontSize: 31,
						fontWeight: 900,
						display: 'flex',
						alignItems: 'center',
						gap: 18,
					}}>
						<span style={{ fontSize: 40 }}>✓</span>{item}
					</motion.div>
				))}
			</div>
			<Note>{s.note}</Note>
		</Page>
	);
}

function Advice({ s }: { s: DeckSlideContent }) {
	const accent = accentMap[s.accent];
	return (
		<Page s={s} titleSize={63}>
			<div style={{ flex: 1, display: 'grid', gridTemplateColumns: '270px 1fr', gap: 42, alignItems: 'center' }}>
				<motion.div initial={{ opacity: 0, scale: .65, rotate: -6 }} animate={{ opacity: 1, scale: 1, rotate: -3 }} transition={{ type: 'spring', delay: .2 }} style={{
					width: 250,
					height: 250,
					background: accent,
					color: textOn(accent),
					border: '5px solid #000',
					boxShadow: '12px 12px 0 #000',
					display: 'grid',
					placeItems: 'center',
					fontFamily: fonts.mono,
					fontSize: 84,
					fontWeight: 900,
				}}>
					{s.big}
				</motion.div>
				<div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignContent: 'center' }}>
					{(s.steps ?? s.items ?? []).map((item, i) => (
						<motion.div key={item} {...fadeUp(.26 + i * .07)} style={{
							padding: '16px 22px',
							background: i % 2 ? colors.white : colors.yellow,
							border,
							boxShadow: shadowSm,
							fontSize: 23,
							fontWeight: 850,
						}}>
							{item}
						</motion.div>
					))}
					<motion.div {...fadeUp(.62)} style={{
						width: '100%',
						marginTop: 14,
						padding: '21px 26px',
						background: colors.dark,
						color: colors.white,
						border,
						boxShadow: shadow,
						fontSize: 25,
						fontWeight: 850,
					}}>
						{s.action}
					</motion.div>
				</div>
			</div>
		</Page>
	);
}

function Verdict({ s }: { s: DeckSlideContent }) {
	return (
		<Page s={s} dark center titleSize={75}>
			<div style={{ flex: 1, display: 'grid', placeItems: 'center' }}>
				<motion.div initial={{ opacity: 0, scale: .78, rotate: -2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ type: 'spring', delay: .3 }} style={{
					maxWidth: 1150,
					background: colors.yellow,
					color: colors.black,
					border: '5px solid #fff',
					boxShadow: '14px 14px 0 #fff',
					padding: '44px 58px',
					fontFamily: fonts.heading,
					fontSize: 50,
					lineHeight: 1.26,
					fontWeight: 900,
					textAlign: 'center',
				}}>
					{s.big}
				</motion.div>
			</div>
		</Page>
	);
}

function Closing({ s }: { s: DeckSlideContent }) {
	const linkPalette = [colors.white, colors.dark, colors.yellow];
	return (
		<Slide bg={colors.red}>
			<div style={{ width: '100%', height: '100%', padding: '48px 104px 54px', position: 'relative', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
				<div style={{ position: 'absolute', right: -105, top: -170, width: 430, height: 430, background: colors.yellow, borderRadius: '50%', border: '5px solid #000' }} />
				<motion.div {...fadeUp(0)} style={{ alignSelf: 'flex-start', background: colors.dark, color: colors.white, border, padding: '8px 16px', fontFamily: fonts.mono, fontWeight: 700, letterSpacing: 2, zIndex: 2 }}>
					{s.eyebrow}
				</motion.div>
				<motion.h2 {...fadeUp(.12)} style={{
					fontFamily: fonts.heading,
					fontSize: 50,
					lineHeight: 1.08,
					letterSpacing: -1.8,
					fontWeight: 900,
					maxWidth: 1180,
					marginTop: 20,
					zIndex: 2,
				}}>
					{s.title}
				</motion.h2>
				<motion.p {...fadeUp(.2)} style={{ fontSize: 25, fontWeight: 900, marginTop: 9, maxWidth: 1180 }}>{s.subtitle}</motion.p>
				<motion.p {...fadeUp(.28)} style={{ fontSize: 18, fontWeight: 750, marginTop: 10, maxWidth: 1180, lineHeight: 1.4 }}>{s.note}</motion.p>
				<motion.div {...fadeUp(.35)} style={{
					marginTop: 12,
					alignSelf: 'flex-start',
					background: colors.yellow,
					border,
					boxShadow: shadow,
					padding: '11px 18px',
					fontFamily: fonts.heading,
					fontSize: 21,
					fontWeight: 900,
					zIndex: 2,
				}}>
					{s.quote}
				</motion.div>
				<div style={{ flex: 1, minHeight: 0, marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 26, alignItems: 'center', zIndex: 2 }}>
					{(s.links ?? []).map((link, i) => (
						<motion.a
							key={link.url}
							{...fadeUp(.4 + i * .1)}
							href={link.url}
							target="_blank"
							rel="noreferrer"
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
								background: linkPalette[i],
								color: i === 1 ? colors.white : colors.black,
								border,
								boxShadow: shadow,
								padding: '16px 18px 15px',
								textDecoration: 'none',
								textAlign: 'center',
							}}
						>
							<img
								src={assetPath(link.qr)}
								alt={`${link.meta} QR code`}
								style={{ width: 220, height: 220, objectFit: 'contain', display: 'block', background: colors.white, border }}
							/>
							<div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, letterSpacing: 1.6, opacity: .62, marginTop: 12 }}>{link.label}</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 27, fontWeight: 900, marginTop: 2 }}>{link.meta}</div>
						</motion.a>
					))}
				</div>
			</div>
		</Slide>
	);
}

export default function DeckSlide({ index }: { index: number }) {
	const s = deck[index - 1];
	if (!s) return null;

	switch (s.layout) {
		case 'cover': return <Cover s={s} />;
		case 'question': return <Question s={s} />;
		case 'skills': return <Skills s={s} />;
		case 'statement': return <Statement s={s} />;
		case 'ladder': return <Ladder s={s} />;
		case 'persona': return <Persona s={s} />;
		case 'race': return <Race s={s} />;
		case 'translate': return <Translate s={s} />;
		case 'resume': return <Resume s={s} />;
		case 'loop': return <Loop s={s} />;
		case 'beforeAfter': return <BeforeAfter s={s} />;
		case 'portfolio': return <Portfolio s={s} />;
		case 'process': return <Process s={s} />;
		case 'case': return <CaseSlide s={s} />;
		case 'toolkit': return <Toolkit s={s} />;
		case 'origin': return <Origin s={s} />;
		case 'product': return <Product s={s} />;
		case 'mirror': return <Mirror s={s} />;
		case 'system': return <System s={s} />;
		case 'wheel': return <Wheel s={s} />;
		case 'shift': return <Shift s={s} />;
		case 'evidence': return <Evidence s={s} />;
		case 'advice': return <Advice s={s} />;
		case 'verdict': return <Verdict s={s} />;
		case 'closing': return <Closing s={s} />;
		default: return null;
	}
}
