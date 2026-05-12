import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, colors, fonts, border, shadow } from './ui';
import type { DeepJob } from '../data/jobs';

interface Props {
	job: DeepJob;
	accentColor: string;
	accentBg: string;
	chapterTag: string;
}

export default function DeepJobSlide({ job, accentColor, accentBg, chapterTag }: Props) {
	return (
		<Slide bg={accentBg}>
			<Inner style={{ flexDirection: 'column', gap: 24 }}>
				{/* Header */}
				<div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
					<div>
						<motion.div
							initial="hidden"
							animate="visible"
							variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
							style={{ display: 'flex', gap: 10, marginBottom: 12 }}
						>
							<motion.span
								variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
								style={{
									padding: '5px 12px', background: colors.black, color: colors.white,
									fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, letterSpacing: 2,
								}}
							>{chapterTag}</motion.span>
							<motion.span
								variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
								style={{
									padding: '5px 12px', background: accentColor, color: colors.white,
									fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, letterSpacing: 1,
								}}
							>BORN {job.bornYear}</motion.span>
							{job.growthNote && (
								<motion.span
									variants={{ hidden: { opacity: 0, scale: 0.6 }, visible: { opacity: 1, scale: 1 } }}
									transition={{ type: 'spring', stiffness: 350, damping: 14 }}
									style={{
										padding: '5px 12px', background: colors.yellow, color: colors.black,
										fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, letterSpacing: 1,
									}}
								>{job.growthNote}</motion.span>
							)}
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.45, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
						>
							<Title size="52px" style={{ lineHeight: 1.05 }}>{job.nameZh}</Title>
							{job.nameEn && job.nameEn !== job.nameZh && (
								<div style={{ fontFamily: fonts.mono, fontSize: 18, color: '#555', marginTop: 6 }}>{job.nameEn}</div>
							)}
						</motion.div>
					</div>
					<motion.div
						initial={{ opacity: 0, scale: 0.6, x: 20 }}
						animate={{ opacity: 1, scale: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.4, type: 'spring', stiffness: 220, damping: 14 }}
						style={{ textAlign: 'right' }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#666', letterSpacing: 2 }}>SALARY · USD</div>
						<div style={{ fontSize: 28, fontWeight: 900, color: accentColor, fontFamily: fonts.mono }}>{job.salaryRange}</div>
					</motion.div>
				</div>

				{/* Pitch */}
				<motion.div
					initial={{ opacity: 0, scaleX: 0.96, originX: 0 }}
					animate={{ opacity: 1, scaleX: 1 }}
					transition={{ duration: 0.5, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
					style={{
						padding: '16px 20px', background: colors.white, border, borderLeft: `8px solid ${accentColor}`,
						fontSize: 22, fontWeight: 700, lineHeight: 1.4,
					}}
				>
					{job.pitch}
				</motion.div>

				{/* Story + Sidebar */}
				<div style={{ display: 'flex', gap: 24, width: '100%', flex: 1 }}>
					<Half>
						<motion.div
							initial={{ opacity: 0, y: 24 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
							style={{ background: colors.white, border, boxShadow: shadow, padding: 24, height: '100%' }}
						>
							<div style={{
								fontFamily: fonts.mono, fontSize: 12, color: accentColor,
								fontWeight: 700, letterSpacing: 2, marginBottom: 12,
							}}>THE STORY</div>
							<div style={{ fontSize: 16, lineHeight: 1.7, color: '#222' }}>{job.story}</div>
						</motion.div>
					</Half>
					<motion.div
						initial="hidden"
						animate="visible"
						variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.85 } } }}
						style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}
					>
						<motion.div
							variants={{ hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0 } }}
							transition={{ duration: 0.4, ease: 'easeOut' }}
							style={{ background: colors.white, border, boxShadow: shadow, padding: 20 }}
						>
							<div style={{ fontFamily: fonts.mono, fontSize: 11, color: '#666', fontWeight: 700, letterSpacing: 2, marginBottom: 10 }}>核心技能</div>
							<motion.div
								initial="hidden"
								animate="visible"
								variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 1.0 } } }}
								style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}
							>
								{job.skills.map(s => (
									<motion.span
										key={s}
										variants={{ hidden: { opacity: 0, scale: 0.7 }, visible: { opacity: 1, scale: 1 } }}
										transition={{ duration: 0.25, ease: 'easeOut' }}
										style={{
											padding: '4px 10px', background: accentColor, color: colors.white,
											fontSize: 13, fontWeight: 700,
										}}
									>{s}</motion.span>
								))}
							</motion.div>
						</motion.div>
						<motion.div
							variants={{ hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0 } }}
							transition={{ duration: 0.4, ease: 'easeOut' }}
							style={{ background: colors.white, border, boxShadow: shadow, padding: 20 }}
						>
							<div style={{ fontFamily: fonts.mono, fontSize: 11, color: '#666', fontWeight: 700, letterSpacing: 2, marginBottom: 10 }}>典型雇主</div>
							<div style={{ fontSize: 14, lineHeight: 1.7, color: '#222' }}>{job.hiring.join(' · ')}</div>
						</motion.div>
						{job.jrCourses && job.jrCourses.length > 0 && (
							<motion.div
								variants={{ hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0 } }}
								transition={{ duration: 0.4, ease: 'easeOut' }}
								style={{ background: colors.dark, border, boxShadow: shadow, padding: 20 }}
							>
								<div style={{ fontFamily: fonts.mono, fontSize: 11, color: colors.yellow, fontWeight: 700, letterSpacing: 2, marginBottom: 10 }}>
									JR 学习路径
								</div>
								<div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
									{job.jrCourses.map(c => (
										<div key={c.slug} style={{ fontSize: 14, color: colors.white, lineHeight: 1.5 }}>
											→ {c.titleZh}
										</div>
									))}
								</div>
							</motion.div>
						)}
						{job.sourceUrl && (
							<motion.div
								variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
								transition={{ duration: 0.3 }}
								style={{
									padding: '8px 12px', background: colors.dark, color: colors.yellow,
									fontFamily: fonts.mono, fontSize: 11, letterSpacing: 1,
								}}
							>
								SOURCE · {job.sourceUrl}
							</motion.div>
						)}
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
