import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { courseMeta } from '../../data/modules';

const includes = [
	{ icon: '📚', label: `${courseMeta.totalLessons} 节课 · 全部回放` },
	{ icon: '🧪', label: `${courseMeta.interactiveLabs}+ Interactive Lab` },
	{ icon: '🤖', label: `${courseMeta.quests} Quest AI Tutor 带练` },
	{ icon: '🎥', label: `${courseMeta.liveClasses} 节直播 + 答疑` },
	{ icon: '🚀', label: 'P3 真实企业项目 + Demo Day' },
	{ icon: '🎯', label: 'Career Coach 1v1 + 猎头内推' },
];

export default function S23_PricingCta() {
	return (
		<Slide bg={colors.dark} style={{ position: 'relative', overflow: 'hidden' }}>
			<div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
				<motion.div
					initial={{ x: -200, rotate: -12 }}
					animate={{ x: 0, rotate: -12 }}
					transition={{ duration: 0.6 }}
					style={{ position: 'absolute', top: -80, left: -120, width: 400, height: 400, background: colors.red, opacity: 0.25, border: `4px solid ${colors.black}` }}
				/>
				<motion.div
					initial={{ scale: 0, rotate: 8 }}
					animate={{ scale: 1, rotate: 8 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					style={{ position: 'absolute', bottom: -60, right: -60, width: 320, height: 320, background: colors.yellow, opacity: 0.18, border: `4px solid ${colors.black}` }}
				/>
			</div>

			<div style={{ position: 'relative', zIndex: 1, width: '94%', maxWidth: 1400, padding: '28px 32px', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 24, alignItems: 'center' }}>
				<div>
					<motion.div
						initial={{ opacity: 0, y: -16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4 }}
						style={{ marginBottom: 20 }}
					>
						<div style={{ display: 'inline-block', padding: '5px 14px', background: colors.red, color: colors.white, fontFamily: fonts.mono, fontSize: 15, fontWeight: 900, letterSpacing: 2, border, boxShadow: shadowSm, marginBottom: 14 }}>
							第 30 期 · 招生中
						</div>
						<h2 style={{ fontFamily: fonts.heading, fontSize: '70px', fontWeight: 900, lineHeight: 1, letterSpacing: -2, color: colors.white, margin: 0 }}>
							准备好，<br />
							<span style={{ display: 'inline-block', padding: '0 14px', background: colors.yellow, color: colors.black, border, boxShadow: `5px 5px 0 ${colors.black}`, transform: 'rotate(-1deg)', marginTop: 10 }}>
								6 个月
							</span>{' '}
							后脱胎换骨
						</h2>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
						style={{ background: colors.white, border, boxShadow: `8px 8px 0 ${colors.red}`, padding: '20px 22px' }}
					>
						<div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8 }}>
							<div style={{ fontFamily: fonts.heading, fontSize: '60px', fontWeight: 900, color: colors.black, letterSpacing: -2 }}>
								${courseMeta.promoTuition}
							</div>
							<div style={{ fontFamily: fonts.mono, fontSize: 17, color: '#888', textDecoration: 'line-through', fontWeight: 700 }}>
								${courseMeta.tuition}
							</div>
							<div style={{ padding: '3px 8px', background: colors.red, color: colors.white, fontFamily: fonts.mono, fontSize: 13, fontWeight: 900, border: `2px solid ${colors.black}` }}>
								公开课福利
							</div>
						</div>
						<div style={{ fontFamily: fonts.body, fontSize: 16, color: '#333', fontWeight: 600 }}>
							开课 {courseMeta.commenceDate} · 结课 {courseMeta.completeDate} · 6 个月 · 可分期
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.6 }}
						style={{ marginTop: 18, padding: '12px 16px', background: 'rgba(255,255,255,0.08)', border: `2px dashed ${colors.yellow}` }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 14, color: colors.yellow, fontWeight: 800, letterSpacing: 1, marginBottom: 4 }}>
							✓ 公开课观众专属福利
						</div>
						<div style={{ fontFamily: fonts.body, fontSize: 16, color: colors.white, fontWeight: 600 }}>
							扫码加顾问 → 提"第 30 期公开课" → 锁定 9 折优惠 + 1v1 学前评估
						</div>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, x: 30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.4 }}
					style={{ background: colors.white, border, boxShadow: shadow, padding: '20px 22px' }}
				>
					<div style={{ display: 'inline-block', padding: '4px 10px', background: colors.black, color: colors.yellow, fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, marginBottom: 14, letterSpacing: 1 }}>
						$5,360 包含
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
						{includes.map((inc, i) => (
							<motion.div
								key={inc.label}
								initial={{ opacity: 0, x: -10 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.5 + i * 0.07 }}
								style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: fonts.body, fontSize: '18px', color: colors.black, fontWeight: 600 }}
							>
								<span style={{ fontSize: 20, width: 26, textAlign: 'center' }}>{inc.icon}</span>
								<span>{inc.label}</span>
							</motion.div>
						))}
					</div>
					<div style={{ marginTop: 16, padding: '10px 12px', background: colors.yellow, border: `2px solid ${colors.black}`, fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, textAlign: 'center', letterSpacing: 0.5 }}>
						👉 报名官网: jiangren.com.au/programs/web-code-bootcamp-or-learn-to-code
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
