import { motion } from 'framer-motion';
import DeepJobSlide from '../DeepJobSlide';
import { MISSING_JOBS } from '../../data/jobs';
import { colors, fonts, border, shadow } from '../ui';

const SOLO_FOUNDER_URL = 'https://jiangren.com.au/curriculum/ai-solo-founder-bootcamp/';

function SoloFounderPromo() {
	return (
		<motion.a
			href={SOLO_FOUNDER_URL}
			target="_blank"
			rel="noopener noreferrer"
			initial={{ opacity: 0, y: 16 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 1.35, ease: [0.16, 1, 0.3, 1] }}
			style={{
				display: 'block',
				marginTop: 12,
				width: '100%',
				background: colors.dark,
				border,
				boxShadow: shadow,
				padding: '14px 18px',
				textDecoration: 'none',
				color: colors.white,
			}}
		>
			<div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
				{/* 左：JR badge + slogan */}
				<div style={{
					padding: '6px 10px',
					background: colors.yellow,
					color: colors.black,
					fontFamily: fonts.mono,
					fontSize: 11,
					fontWeight: 800,
					letterSpacing: 1.5,
					flexShrink: 0,
				}}>
					🇦🇺 JR ACADEMY · AU 专属
				</div>
				{/* 中：课程标题 + 卖点 */}
				<div style={{ flex: 1, minWidth: 0 }}>
					<div style={{
						fontSize: 18,
						fontWeight: 900,
						letterSpacing: 0.5,
						color: colors.yellow,
						marginBottom: 2,
					}}>
						AI 一人创业营 · 11 周线下
					</div>
					<div style={{
						fontSize: 12,
						color: '#ccc',
						lineHeight: 1.5,
					}}>
						墨尔本主场 + 悉尼 / 布里斯班卫星 · 35 节直播 · Demo Day 现场展示 · 含 ABN 注册 + Grant 申请实操
					</div>
				</div>
				{/* 右：CTA */}
				<div style={{
					padding: '8px 16px',
					background: colors.yellow,
					color: colors.black,
					fontFamily: fonts.mono,
					fontSize: 13,
					fontWeight: 800,
					letterSpacing: 1,
					flexShrink: 0,
				}}>
					查看详情 →
				</div>
			</div>
		</motion.a>
	);
}

export default function S29_VibeCoder() {
	return (
		<DeepJobSlide
			job={MISSING_JOBS[0]}
			accentColor={colors.yellow}
			accentBg="#fef9d9"
			chapterTag="CHAPTER 4 · MISSING"
			promoBanner={<SoloFounderPromo />}
		/>
	);
}
