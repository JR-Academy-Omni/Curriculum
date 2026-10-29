import { motion } from 'framer-motion';
import { DeckFrame, Panel, Label, AnimatedGroup, colors, fonts } from '../deck';
import { Slide, Inner } from '../ui';
import { slideContent, type CoverSlide, type SectionSlide } from '../../data/slideContent';

export default function OriginalSlide({ number }: { number: number; title: string }) {
	const slide = slideContent[number - 1];
	if (!slide) return null;
	if (slide.kind === 'cover') return <Cover slide={slide} />;
	if (slide.kind === 'section') return <Section slide={slide} />;
	const columns = slide.items.length >= 5 ? 3 : slide.items.length === 3 ? 3 : 2;
	return (
		<DeckFrame tag={slide.section} title={slide.title} subtitle={slide.subtitle} accent={slide.accent} titleSize={slide.title.length > 24 ? 50 : 58}>
			<div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 20 }}>
				<div style={{ flex: 1, display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: 18, alignContent: 'stretch' }}>
					{slide.items.map((item, index) => (
						<AnimatedGroup key={`${item.heading}-${index}`} delay={0.14 + index * 0.045} style={{ display: 'flex' }}>
							<Panel style={{ flex: 1, padding: columns === 3 ? 20 : 24, boxShadow: `7px 7px 0 ${slide.accent}`, borderTop: `8px solid ${slide.accent}`, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
								<h2 style={{ margin: 0, fontFamily: fonts.heading, fontSize: columns === 3 ? 27 : 31, lineHeight: 1.12, color: colors.dark }}>{item.heading}</h2>
								<p style={{ margin: '12px 0 0', fontFamily: fonts.body, fontSize: columns === 3 ? 20 : 23, lineHeight: 1.38, color: '#282b3b' }}>{item.body}</p>
								{item.meta && <p style={{ margin: '10px 0 0', fontFamily: fonts.body, fontSize: 17, lineHeight: 1.3, color: '#66606a' }}>{item.meta}</p>}
							</Panel>
						</AnimatedGroup>
					))}
				</div>
				{slide.footer && <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .38 }} style={{ background: colors.dark, color: colors.white, borderRadius: 16, padding: '15px 22px', fontFamily: fonts.body, fontSize: 20, lineHeight: 1.35, fontWeight: 700 }}>{slide.footer}</motion.div>}
			</div>
		</DeckFrame>
	);
}

function Cover({ slide }: { slide: CoverSlide }) {
	return <Slide bg={colors.warmBg} style={{ position: 'relative', backgroundImage: 'linear-gradient(rgba(16,22,47,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(16,22,47,.06) 1px, transparent 1px)', backgroundSize: '48px 48px' }}>
		<div aria-hidden style={{ position: 'absolute', width: 430, height: 430, borderRadius: '50%', background: colors.yellow, right: -120, top: -160 }} />
		<div aria-hidden style={{ position: 'absolute', width: 250, height: 250, borderRadius: '50%', border: `34px solid ${colors.red}`, left: -90, bottom: -110 }} />
		<Inner style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 28 }}>
			<Label bg={colors.dark}>2026 · SYDNEY LIVE</Label>
			<motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} style={{ margin: 0, maxWidth: 1180, fontFamily: fonts.heading, fontSize: 92, lineHeight: 1.02, letterSpacing: -3, color: colors.dark }}>{slide.title}</motion.h1>
			<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .16 }} style={{ margin: 0, fontFamily: fonts.body, fontSize: 32, color: '#4e5265' }}>{slide.subtitle}</motion.p>
			<div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>{slide.sections.map((item, index) => <motion.span key={item} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .22 + index * .06 }} style={{ border: `2px solid ${colors.dark}`, borderRadius: 999, background: index % 2 ? colors.white : colors.yellow, padding: '10px 18px', fontFamily: fonts.body, fontWeight: 800, fontSize: 19 }}>{String(index + 1).padStart(2, '0')} · {item}</motion.span>)}</div>
			<p style={{ margin: '20px 0 0', fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, color: colors.dark }}>{slide.meta}</p>
		</Inner>
	</Slide>;
}

function Section({ slide }: { slide: SectionSlide }) {
	return <Slide bg={colors.dark} style={{ position: 'relative', overflow: 'hidden' }}>
		<div aria-hidden style={{ position: 'absolute', right: -120, top: 90, width: 560, height: 560, borderRadius: '50%', background: slide.accent, opacity: .95 }} />
		<Inner style={{ flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: 26 }}>
			<Label bg={slide.accent} color={colors.dark}>PART {slide.number}</Label>
			<h1 style={{ margin: 0, fontFamily: fonts.heading, fontSize: 86, lineHeight: 1.02, color: colors.white, letterSpacing: -2 }}>{slide.title}</h1>
			<p style={{ margin: 0, maxWidth: 980, fontFamily: fonts.body, fontSize: 34, lineHeight: 1.35, color: '#f5efe9' }}>{slide.statement}</p>
			<div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 15, width: 950 }}>{slide.points.map((item, index) => <motion.div key={item} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .16 + index * .08 }} style={{ background: colors.white, color: colors.dark, borderRadius: 18, border: `3px solid ${slide.accent}`, padding: '17px 20px', fontFamily: fonts.body, fontSize: 23, fontWeight: 800 }}>{item}</motion.div>)}</div>
		</Inner>
	</Slide>;
}
