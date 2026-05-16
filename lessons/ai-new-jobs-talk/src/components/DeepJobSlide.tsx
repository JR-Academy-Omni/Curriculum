import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { Slide, Inner, Half, Title, colors, fonts, border, shadow, shadowSm } from './ui';
import type { DeepJob, RegionCode, RegionSnapshot } from '../data/jobs';

interface Props {
	job: DeepJob;
	accentColor: string;
	accentBg: string;
	chapterTag: string;
	promoBanner?: ReactNode;
}

const REGIONS: { code: RegionCode; flag: string; name: string; nameEn: string }[] = [
	{ code: 'us', flag: '🇺🇸', name: '美国', nameEn: 'USA' },
	{ code: 'au', flag: '🇦🇺', name: '澳洲', nameEn: 'AU' },
	{ code: 'sg', flag: '🇸🇬', name: '新加坡', nameEn: 'SG' },
	{ code: 'cn', flag: '🇨🇳', name: '中国', nameEn: 'CN' },
];

function RegionCard({
	flag, name, nameEn, snap, delay,
}: {
	flag: string; name: string; nameEn: string;
	snap: RegionSnapshot | undefined;
	delay: number;
}) {
	if (!snap) {
		return (
			<motion.div
				initial={{ opacity: 0, y: 12 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.35, delay, ease: 'easeOut' }}
				style={{
					background: '#f4f4f4', border: '2px dashed #bbb', padding: 14,
					minHeight: 200, display: 'flex', flexDirection: 'column',
				}}
			>
				<div style={{ fontSize: 24, marginBottom: 4, fontWeight: 900 }}>{flag} {name}</div>
				<div style={{ fontFamily: fonts.mono, fontSize: 11, color: '#888', letterSpacing: 1, marginBottom: 12 }}>{nameEn}</div>
				<div style={{
					marginTop: 'auto', fontSize: 14, color: '#888', fontStyle: 'italic',
				}}>暂无该国数据</div>
			</motion.div>
		);
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 14, scale: 0.96 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
			style={{
				background: colors.white, border, boxShadow: shadowSm, padding: 14,
				minHeight: 200, display: 'flex', flexDirection: 'column',
			}}
		>
			<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
				<div>
					<div style={{ fontSize: 22, fontWeight: 900, lineHeight: 1 }}>{flag} {name}</div>
					<div style={{ fontFamily: fonts.mono, fontSize: 11, color: '#888', letterSpacing: 1, marginTop: 3 }}>{nameEn}</div>
				</div>
				{snap.visaFriendly && snap.visaFriendly !== 'n/a' && (
					<div style={{
						padding: '3px 8px', background: colors.dark, color: colors.yellow,
						fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, letterSpacing: 0.5,
					}}>
						VISA {snap.visaFriendly}
					</div>
				)}
			</div>

			<div style={{ fontSize: 12, color: '#222', lineHeight: 1.45, marginBottom: 8, fontWeight: 500 }}>
				{snap.salary || <span style={{ color: '#999', fontStyle: 'italic' }}>薪资数据不足</span>}
			</div>

			{snap.topEmployers && snap.topEmployers.length > 0 && (
				<div style={{ marginBottom: 8 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 10, color: '#888', letterSpacing: 1, marginBottom: 3 }}>TOP</div>
					<div style={{ fontSize: 12, color: '#444', lineHeight: 1.4 }}>
						{snap.topEmployers.slice(0, 4).join(' · ')}
					</div>
				</div>
			)}

			{snap.insight && (
				<div style={{
					marginTop: 'auto', padding: '8px 10px', background: '#faf9f5',
					borderLeft: '3px solid #d97757', fontSize: 12, lineHeight: 1.45, color: '#222',
				}}>
					{snap.insight}
				</div>
			)}
		</motion.div>
	);
}

export default function DeepJobSlide({ job, accentColor, accentBg, chapterTag, promoBanner }: Props) {
	return (
		<Slide bg={accentBg}>
			<Inner style={{ flexDirection: 'column', gap: 14, height: '92%' }}>
				{/* Header */}
				<div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
					<div>
						<motion.div
							initial="hidden"
							animate="visible"
							variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
							style={{ display: 'flex', gap: 8, marginBottom: 8 }}
						>
							<motion.span
								variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
								style={{
									padding: '5px 12px', background: colors.black, color: colors.white,
									fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 1.5,
								}}
							>{chapterTag}</motion.span>
							<motion.span
								variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
								style={{
									padding: '5px 12px', background: accentColor, color: colors.white,
									fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 1,
								}}
							>BORN {job.bornYear}</motion.span>
							{job.growthNote && (
								<motion.span
									variants={{ hidden: { opacity: 0, scale: 0.6 }, visible: { opacity: 1, scale: 1 } }}
									transition={{ type: 'spring', stiffness: 350, damping: 14 }}
									style={{
										padding: '5px 12px', background: colors.yellow, color: colors.black,
										fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 1,
									}}
								>{job.growthNote}</motion.span>
							)}
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.45, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
						>
							<Title size="52px" style={{ lineHeight: 1.05 }}>{job.title}</Title>
							{job.subtitle && (
								<div style={{ fontSize: 19, color: '#444', marginTop: 8, fontWeight: 600, letterSpacing: 0.3 }}>{job.subtitle}</div>
							)}
						</motion.div>
					</div>
					<motion.div
						initial={{ opacity: 0, scale: 0.6, x: 20 }}
						animate={{ opacity: 1, scale: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.3, type: 'spring', stiffness: 220, damping: 14 }}
						style={{ textAlign: 'right' }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, color: '#666', letterSpacing: 2 }}>GLOBAL SALARY</div>
						<div style={{ fontSize: 28, fontWeight: 900, color: accentColor, fontFamily: fonts.mono }}>{job.salaryRange}</div>
					</motion.div>
				</div>

				{/* Pitch */}
				<motion.div
					initial={{ opacity: 0, scaleX: 0.96, originX: 0 }}
					animate={{ opacity: 1, scaleX: 1 }}
					transition={{ duration: 0.5, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
					style={{
						padding: '14px 20px', background: colors.white, border, borderLeft: `8px solid ${accentColor}`,
						fontSize: 20, fontWeight: 700, lineHeight: 1.4,
					}}
				>
					{job.pitch}
				</motion.div>

				{/* Story + Sidebar */}
				<div style={{ display: 'flex', gap: 14, width: '100%', flex: 1, minHeight: 0 }}>
					<Half>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
							style={{ background: colors.white, border, boxShadow: shadow, padding: 20, height: '100%' }}
						>
							<div style={{
								fontFamily: fonts.mono, fontSize: 13, color: accentColor,
								fontWeight: 700, letterSpacing: 2, marginBottom: 10,
							}}>THE STORY</div>
							<div style={{ fontSize: 15, lineHeight: 1.65, color: '#222' }}>{job.story}</div>
						</motion.div>
					</Half>
					<motion.div
						initial="hidden"
						animate="visible"
						variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.7 } } }}
						style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}
					>
						<motion.div
							variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
							transition={{ duration: 0.4, ease: 'easeOut' }}
							style={{ background: colors.white, border, boxShadow: shadowSm, padding: 16 }}
						>
							<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#666', fontWeight: 700, letterSpacing: 1.5, marginBottom: 8 }}>核心技能</div>
							<div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
								{job.skills.map(s => (
									<motion.span
										key={s}
										variants={{ hidden: { opacity: 0, scale: 0.7 }, visible: { opacity: 1, scale: 1 } }}
										transition={{ duration: 0.22, ease: 'easeOut' }}
										style={{
											padding: '4px 10px', background: accentColor, color: colors.white,
											fontSize: 13, fontWeight: 700,
										}}
									>{s}</motion.span>
								))}
							</div>
						</motion.div>
						{job.jrCourses && job.jrCourses.length > 0 && (
							<motion.div
								variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
								transition={{ duration: 0.4, ease: 'easeOut' }}
								style={{ background: colors.dark, border, boxShadow: shadowSm, padding: 16, flex: 1 }}
							>
								<div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.yellow, fontWeight: 700, letterSpacing: 1.5, marginBottom: 8 }}>
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
									padding: '6px 10px', background: colors.dark, color: colors.yellow,
									fontFamily: fonts.mono, fontSize: 9, letterSpacing: 0.5,
								}}
							>
								SOURCE · {job.sourceUrl}
							</motion.div>
						)}
					</motion.div>
				</div>

				{/* 4-Region Snapshot Row */}
				<div style={{ width: '100%' }}>
					<motion.div
						initial={{ opacity: 0, x: -10 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: 0.9 }}
						style={{
							display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6,
						}}
					>
						<span style={{
							padding: '5px 12px', background: colors.dark, color: colors.yellow,
							fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 1.5,
						}}>4-REGION SNAPSHOT</span>
						<span style={{ fontSize: 13, color: '#666', fontStyle: 'italic' }}>
							数据源 LinkedIn / Levels.fyi / SEEK / Glassdoor / Morgan McKinley / 脉脉 / BOSS · 详见 research/*.md
						</span>
					</motion.div>
					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
						{REGIONS.map((r, i) => (
							<RegionCard
								key={r.code}
								flag={r.flag}
								name={r.name}
								nameEn={r.nameEn}
								snap={job.regions?.[r.code]}
								delay={1.0 + i * 0.08}
							/>
						))}
					</div>
				</div>
				{promoBanner}
			</Inner>
		</Slide>
	);
}
