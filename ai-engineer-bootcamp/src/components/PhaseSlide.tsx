import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, shadowSm } from './ui';
import type { PhaseInfo } from '../data/phases';

interface PhaseSlideProps {
	phase: PhaseInfo;
	whyItMatters: string;
	representativeLessons: string[];
}

/**
 * 通用 Phase 详情 slide（S08-S17 共用）
 * 左 Phase 徽章 + 标题 + summary，左下 highlights，右下职业对应卡片 + why-it-matters
 */
export default function PhaseSlide({ phase, whyItMatters, representativeLessons }: PhaseSlideProps) {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', gap: 20, paddingTop: 28, paddingBottom: 28 }}>
				{/* V5 新增横幅 */}
				{phase.isV5New && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4 }}
						style={{
							alignSelf: 'flex-start',
							padding: '6px 18px',
							background: colors.red,
							color: colors.yellow,
							border,
							boxShadow: shadowSm,
							fontFamily: fonts.mono,
							fontSize: 13,
							fontWeight: 800,
							letterSpacing: 1,
							transform: 'rotate(-1.5deg)',
						}}
					>
						🔥 V5 第五期独家新增
					</motion.div>
				)}

				{/* 顶部：徽章 + 标题 + 统计 */}
				<div style={{ display: 'flex', gap: 24, alignItems: 'stretch', width: '100%' }}>
					{/* 左上：Phase 徽章 */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4 }}
						style={{
							minWidth: 140,
							background: phase.color,
							border,
							boxShadow: shadow,
							padding: '18px 20px',
							color: colors.white,
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							textAlign: 'center',
						}}
					>
						<div style={{ fontFamily: fonts.mono, fontWeight: 800, fontSize: 14, opacity: 0.9, letterSpacing: 2 }}>{phase.code}</div>
						<div style={{ fontSize: 44, lineHeight: 1, margin: '6px 0' }}>{phase.icon}</div>
						<div style={{ fontFamily: fonts.mono, fontWeight: 800, fontSize: 22 }}>{phase.lessons}</div>
						<div style={{ fontFamily: fonts.mono, fontSize: 11, opacity: 0.85, letterSpacing: 1 }}>LESSONS</div>
					</motion.div>

					{/* 右上：标题区 */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: 0.1 }}
						style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: 0 }}
					>
						<div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 4 }}>
							<span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: phase.color, letterSpacing: 2 }}>
								PHASE {phase.num}
							</span>
							<span style={{ padding: '3px 12px', background: colors.dark, color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 700 }}>
								{phase.live} 节直播
							</span>
							<span style={{ padding: '3px 12px', background: colors.yellow, color: colors.black, border: `2px solid ${colors.black}`, fontFamily: fonts.mono, fontSize: 12, fontWeight: 700 }}>
								{phase.lab} 个 Lab
							</span>
						</div>
						<Title size="clamp(28px,3.8vw,46px)" style={{ lineHeight: 1.1 }}>{phase.name}</Title>
						<div style={{ fontFamily: fonts.heading, fontSize: 'clamp(13px,1.4vw,17px)', color: '#555', fontWeight: 700, marginTop: 4 }}>
							{phase.nameCn}
						</div>
						<p style={{ fontSize: 'clamp(13px,1.4vw,17px)', color: '#333', marginTop: 10, lineHeight: 1.5 }}>
							{phase.summary}
						</p>
					</motion.div>
				</div>

				{/* 中部：左 highlights / 右职业对应 + why */}
				<div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 24, width: '100%', flex: 1, minHeight: 0 }}>
					{/* 左：highlights */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.2 }}
						style={{
							background: colors.white,
							border,
							boxShadow: shadow,
							padding: '20px 24px',
							borderLeft: `8px solid ${phase.color}`,
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, color: phase.color, letterSpacing: 2, marginBottom: 10 }}>
							核心内容 HIGHLIGHTS
						</div>
						<ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
							{phase.highlights.map((h, i) => (
								<motion.li
									key={i}
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
									style={{
										padding: '6px 0',
										fontSize: 'clamp(13px,1.35vw,17px)',
										fontWeight: 600,
										borderBottom: i < phase.highlights.length - 1 ? '1px dashed #ddd' : 'none',
										display: 'flex',
										gap: 10,
									}}
								>
									<span style={{ color: phase.color, fontWeight: 900, fontFamily: fonts.mono }}>→</span>
									<span>{h}</span>
								</motion.li>
							))}
						</ul>
					</motion.div>

					{/* 右：职业对应 + why */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.3 }}
						style={{ display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}
					>
						{/* 职业对应 */}
						<div
							style={{
								background: colors.dark,
								color: colors.white,
								border,
								boxShadow: shadow,
								padding: '16px 20px',
							}}
						>
							<div style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, color: colors.yellow, letterSpacing: 2, marginBottom: 6 }}>
								学完可以胜任
							</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 'clamp(16px,1.8vw,22px)', fontWeight: 800, lineHeight: 1.3 }}>
								{phase.jobOutcome}
							</div>
						</div>

						{/* Why it matters */}
						<div
							style={{
								background: colors.yellow,
								border,
								boxShadow: shadow,
								padding: '16px 20px',
								flex: 1,
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
							}}
						>
							<div style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, color: colors.black, letterSpacing: 2, marginBottom: 8 }}>
								为什么这一层重要
							</div>
							<p style={{ fontSize: 'clamp(13px,1.35vw,16px)', fontWeight: 600, color: colors.black, lineHeight: 1.5, margin: 0 }}>
								{whyItMatters}
							</p>
						</div>
					</motion.div>
				</div>

				{/* 底部：代表 lesson Tags */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.4, delay: 0.5 }}
					style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', width: '100%' }}
				>
					<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, color: '#666', letterSpacing: 1 }}>
						代表 LESSON ·
					</span>
					{representativeLessons.map((l, i) => (
						<Tag key={i} bg={phase.color} color={colors.white}>{l}</Tag>
					))}
				</motion.div>
			</Inner>
		</Slide>
	);
}
