import { motion } from 'framer-motion';
import { Slide, Inner, Title, colors, fonts, border, shadow } from './ui';
import type { DeepJob } from '../data/jobs';

interface Props {
	job: DeepJob;
	accentColor: string;
	accentBg: string;
	chapterTag: string;
}

const RESOURCE_TYPE_ZH: Record<string, string> = {
	course: '课程',
	book: '书',
	repo: 'GitHub',
	tool: '工具',
	video: '视频',
	article: '文章',
};

export default function DeepJobTransitionSlide({ job, accentColor, accentBg, chapterTag }: Props) {
	const whoFits = job.whoFits ?? [];
	const howToBecome = job.howToBecome ?? [];
	const example = job.transitionExample;
	const resources = job.recommendedResources ?? [];

	return (
		<Slide bg={accentBg}>
			<Inner style={{ flexDirection: 'column', gap: 20 }}>
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
							>怎么成为</motion.span>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.45, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
						>
							<Title size="44px" style={{ lineHeight: 1.05 }}>{job.title}</Title>
							<div style={{ fontSize: 16, color: '#444', marginTop: 6, fontWeight: 600, letterSpacing: 0.3 }}>
								适合谁 + 怎么转过来
							</div>
						</motion.div>
					</div>
					<motion.div
						initial={{ opacity: 0, scale: 0.6, x: 20 }}
						animate={{ opacity: 1, scale: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.4, type: 'spring', stiffness: 220, damping: 14 }}
						style={{ textAlign: 'right' }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 11, color: '#666', letterSpacing: 2 }}>SALARY</div>
						<div style={{ fontSize: 20, fontWeight: 900, color: accentColor, fontFamily: fonts.mono }}>{job.salaryRange}</div>
					</motion.div>
				</div>

				{/* Body: 两栏 */}
				<div style={{ display: 'flex', gap: 20, width: '100%', flex: 1, minHeight: 0 }}>
					{/* 左 · 适合谁 */}
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
						style={{
							flex: 1, background: colors.white, border, boxShadow: shadow,
							padding: 22, display: 'flex', flexDirection: 'column', gap: 14,
						}}
					>
						<div style={{
							fontFamily: fonts.mono, fontSize: 12, color: accentColor,
							fontWeight: 700, letterSpacing: 2,
						}}>具备什么 · 适合谁</div>
						<motion.div
							initial="hidden"
							animate="visible"
							variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.7 } } }}
							style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
						>
							{whoFits.map((item, i) => (
								<motion.div
									key={i}
									variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0 } }}
									transition={{ duration: 0.35, ease: 'easeOut' }}
									style={{
										display: 'flex', gap: 12, alignItems: 'flex-start',
										padding: '8px 0', borderLeft: `3px solid ${accentColor}`, paddingLeft: 12,
									}}
								>
									<div style={{ flex: 1 }}>
										<div style={{ fontSize: 15, fontWeight: 800, color: colors.black, marginBottom: 3 }}>
											{item.trait}
										</div>
										<div style={{ fontSize: 13, color: '#333', lineHeight: 1.5 }}>
											{item.detail}
										</div>
									</div>
								</motion.div>
							))}
						</motion.div>
					</motion.div>

					{/* 右 · 怎么转型 */}
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
						style={{
							flex: 1, background: colors.white, border, boxShadow: shadow,
							padding: 22, display: 'flex', flexDirection: 'column', gap: 14,
						}}
					>
						<div style={{
							fontFamily: fonts.mono, fontSize: 12, color: accentColor,
							fontWeight: 700, letterSpacing: 2,
						}}>需要什么 · 怎么转过来</div>
						<motion.div
							initial="hidden"
							animate="visible"
							variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.85 } } }}
							style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
						>
							{howToBecome.map((item, i) => (
								<motion.div
									key={i}
									variants={{ hidden: { opacity: 0, x: 16 }, visible: { opacity: 1, x: 0 } }}
									transition={{ duration: 0.35, ease: 'easeOut' }}
									style={{
										display: 'flex', gap: 12, alignItems: 'flex-start',
									}}
								>
									<div style={{
										minWidth: 28, height: 28, background: accentColor,
										color: colors.white, fontWeight: 900, fontSize: 14,
										display: 'flex', alignItems: 'center', justifyContent: 'center',
										fontFamily: fonts.mono,
									}}>
										{i + 1}
									</div>
									<div style={{ flex: 1 }}>
										<div style={{ fontSize: 14, fontWeight: 800, color: colors.black, marginBottom: 3 }}>
											{item.step}
										</div>
										<div style={{ fontSize: 13, color: '#333', lineHeight: 1.5 }}>
											{item.detail}
										</div>
									</div>
								</motion.div>
							))}
						</motion.div>
					</motion.div>
				</div>

				{/* 底部 · 案例 + 资源 */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
					style={{ display: 'flex', gap: 16, width: '100%' }}
				>
					{example && (
						<div style={{
							flex: 1.2, background: colors.dark, border, boxShadow: shadow,
							padding: '14px 18px', color: colors.white,
						}}>
							<div style={{
								fontFamily: fonts.mono, fontSize: 11, color: colors.yellow,
								fontWeight: 700, letterSpacing: 2, marginBottom: 6,
							}}>真实转型案例</div>
							<div style={{ fontSize: 13, fontWeight: 800, marginBottom: 4 }}>{example.who}</div>
							<div style={{ fontSize: 12, color: '#ccc', lineHeight: 1.55 }}>{example.story}</div>
						</div>
					)}
					{resources.length > 0 && (
						<div style={{
							flex: 1.8, background: colors.white, border, boxShadow: shadow,
							padding: '14px 18px',
						}}>
							<div style={{
								fontFamily: fonts.mono, fontSize: 11, color: '#666',
								fontWeight: 700, letterSpacing: 2, marginBottom: 8,
							}}>推荐资源</div>
							<div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
								{resources.map((r, i) => (
									<span key={i} style={{
										padding: '4px 10px', background: accentBg, color: colors.black,
										fontSize: 12, fontWeight: 700, border: `1.5px solid ${colors.black}`,
										display: 'inline-flex', alignItems: 'center', gap: 6,
									}}>
										<span style={{
											fontFamily: fonts.mono, fontSize: 10, color: accentColor, fontWeight: 800,
										}}>{RESOURCE_TYPE_ZH[r.type] ?? r.type}</span>
										{r.name}
									</span>
								))}
							</div>
						</div>
					)}
				</motion.div>
			</Inner>
		</Slide>
	);
}
