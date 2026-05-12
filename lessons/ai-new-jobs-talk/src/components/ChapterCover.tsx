import { motion } from 'framer-motion';
import { Slide, Inner, Title, colors, fonts } from './ui';

interface Props {
	chapter: string;
	count: string;
	title: string;
	subtitle?: string;
	bg: string;
	accent: string;
}

export default function ChapterCover({ chapter, count, title, subtitle, bg, accent }: Props) {
	return (
		<Slide bg={bg}>
			<Inner center>
				<div style={{ textAlign: 'center' }}>
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4 }}
						style={{
							display: 'inline-block', padding: '8px 18px', background: colors.black,
							color: colors.white, fontFamily: fonts.mono, fontSize: 14, fontWeight: 700,
							letterSpacing: 3, marginBottom: 24,
						}}
					>{chapter}</motion.div>
					<motion.div
						initial={{ opacity: 0, scale: 0.3, rotate: -8 }}
						animate={{ opacity: 1, scale: 1, rotate: 0 }}
						transition={{ duration: 0.7, delay: 0.25, type: 'spring', stiffness: 160, damping: 12, mass: 0.9 }}
						style={{
							fontFamily: fonts.mono, fontSize: 220, fontWeight: 700, color: accent,
							lineHeight: 0.9, marginBottom: 16,
						}}
					>{count}</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
					>
						<Title size="80px" style={{ maxWidth: 1100, margin: '0 auto' }}>{title}</Title>
					</motion.div>
					{subtitle && (
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.4, delay: 1.0 }}
							style={{ fontSize: 24, color: '#444', marginTop: 24, maxWidth: 900, marginLeft: 'auto', marginRight: 'auto' }}
						>
							{subtitle}
						</motion.p>
					)}
				</div>
			</Inner>
		</Slide>
	);
}
