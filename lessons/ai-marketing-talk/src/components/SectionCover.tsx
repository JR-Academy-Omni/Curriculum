import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from './ui';

// 章节封面通用组件 —— kicker（小标签）+ 大标题 + 副文案
export default function SectionCover({
	kicker,
	title,
	titleAccent,
	sub,
	bg = colors.rose,
}: {
	kicker: string;
	title: string;
	titleAccent?: string;
	sub?: string;
	bg?: string;
}) {
	const onDark = bg === colors.dark || bg === colors.rose;
	return (
		<Slide bg={bg}>
			<div style={{ width: '86%', maxWidth: 1300, textAlign: 'center' }}>
				<motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
					style={{ display: 'inline-block', padding: '8px 20px', background: colors.black, color: colors.yellow, fontFamily: fonts.mono, fontSize: 17.5, fontWeight: 700, letterSpacing: 3, marginBottom: 32 }}>
					{kicker}
				</motion.div>
				<motion.h1 initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
					style={{ fontFamily: fonts.heading, fontSize: '82.5px', fontWeight: 900, lineHeight: 1.1, letterSpacing: -2, color: onDark ? colors.white : colors.black, marginBottom: sub ? 24 : 0 }}>
					{title}
					{titleAccent && (
						<span style={{ display: 'inline-block', background: onDark ? colors.yellow : colors.rose, color: onDark ? colors.black : colors.white, padding: '0 18px', marginLeft: 12, transform: 'rotate(-1.5deg)', border, boxShadow: shadow }}>{titleAccent}</span>
					)}
				</motion.h1>
				{sub && (
					<motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
						style={{ fontFamily: fonts.body, fontSize: 26, fontWeight: 600, color: onDark ? 'rgba(255,255,255,0.85)' : '#444', maxWidth: 900, margin: '0 auto' }}>
						{sub}
					</motion.p>
				)}
			</div>
		</Slide>
	);
}
