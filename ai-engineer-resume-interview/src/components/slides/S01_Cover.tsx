import { motion } from 'framer-motion';
import { Slide, colors, fonts } from '../ui';

export default function S01_Cover() {
	return (
		<Slide bg={colors.dark} style={{ position: 'relative' }}>
			{/* 几何装饰色块 */}
			<div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
				<motion.div
					initial={{ x: -240, rotate: -8 }}
					animate={{ x: 0, rotate: -8 }}
					transition={{ duration: 0.6 }}
					style={{ position: 'absolute', top: -100, left: -120, width: '48%', height: '130%', background: colors.indigo }}
				/>
				<motion.div
					initial={{ y: 240 }}
					animate={{ y: 0 }}
					transition={{ duration: 0.55, delay: 0.1 }}
					style={{ position: 'absolute', bottom: -80, right: -40, width: 420, height: 420, background: colors.teal, transform: 'rotate(12deg)', border: `4px solid ${colors.black}` }}
				/>
				<motion.div
					initial={{ scale: 0, rotate: 0 }}
					animate={{ scale: 1, rotate: 16 }}
					transition={{ duration: 0.4, delay: 0.3 }}
					style={{ position: 'absolute', top: 60, right: 220, width: 120, height: 120, background: colors.yellow, border: `3px solid ${colors.black}` }}
				/>
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.4, delay: 0.45 }}
					style={{ position: 'absolute', bottom: 130, left: '40%', width: 56, height: 56, background: colors.red, border: `3px solid ${colors.black}`, transform: 'rotate(-8deg)' }}
				/>
			</div>

			{/* 主体内容 */}
			<div style={{ position: 'relative', zIndex: 1, width: '90%', maxWidth: 1400, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: 60 }}>
				{/* 品牌徽章 */}
				<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
					<div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '8px 20px', background: colors.white, border: `3px solid ${colors.black}`, boxShadow: `5px 5px 0 ${colors.black}`, marginBottom: 28 }}>
						<div style={{ width: 36, height: 36, borderRadius: 6, background: colors.black, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: fonts.heading, fontWeight: 900, fontSize: 18 }}>JR</div>
						<span style={{ fontFamily: fonts.heading, fontSize: 16, fontWeight: 800 }}>匠人学院 JR ACADEMY</span>
					</div>
				</motion.div>

				{/* 直播小标 */}
				<motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 }} style={{ marginBottom: 16, display: 'flex', gap: 10, alignItems: 'center' }}>
					<span style={{ padding: '6px 14px', background: colors.red, color: colors.white, fontFamily: fonts.mono, fontWeight: 700, fontSize: 14, border: `3px solid ${colors.black}`, boxShadow: `3px 3px 0 ${colors.black}`, transform: 'rotate(-2deg)' }}>
						LIVE 直播
					</span>
					<span style={{ fontFamily: fonts.mono, fontSize: 14, color: 'rgba(255,255,255,0.7)', fontWeight: 700 }}>
						内部学员课 · 3 hours
					</span>
				</motion.div>

				{/* 主标题 */}
				<motion.h1
					initial={{ opacity: 0, x: -60 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.3, duration: 0.5 }}
					style={{
						fontFamily: fonts.heading,
						fontSize: 'clamp(56px, 8vw, 92px)',
						fontWeight: 900,
						lineHeight: 1.05,
						letterSpacing: -2,
						color: colors.white,
						textShadow: `4px 4px 0 ${colors.black}`,
					}}
				>
					<span style={{ letterSpacing: -3 }}>AI Engineer</span><br />
					<span style={{ display: 'inline-block', padding: '10px 32px', background: colors.yellow, color: colors.black, border: `4px solid ${colors.black}`, boxShadow: `6px 6px 0 ${colors.black}`, transform: 'rotate(-1.5deg)', marginTop: 18, fontFamily: "'Noto Sans SC', sans-serif", letterSpacing: 2, lineHeight: 1.2, textShadow: 'none' }}>
						简历 + 面试
					</span>
				</motion.h1>

				{/* 副标题 */}
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} style={{ marginTop: 30 }}>
					<p style={{ fontFamily: fonts.heading, fontSize: '30px', fontWeight: 700, color: 'rgba(255,255,255,0.95)', borderLeft: `5px solid ${colors.teal}`, paddingLeft: 16, lineHeight: 1.35 }}>
						今晚 3 小时<br />
						<span style={{ color: colors.yellow }}>让你的简历值钱</span>
					</p>
				</motion.div>

				{/* Footer */}
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }} style={{ marginTop: 44, display: 'flex', alignItems: 'center', gap: 22, fontFamily: fonts.mono, fontSize: 14, color: 'rgba(255,255,255,0.75)', fontWeight: 700 }}>
					<span>JR Academy</span>
					<span style={{ width: 1, height: 18, background: 'rgba(255,255,255,0.3)' }} />
					<span>AI Engineer × AI Web 全栈班 · 内部课</span>
					<span style={{ width: 1, height: 18, background: 'rgba(255,255,255,0.3)' }} />
					<span>2026</span>
				</motion.div>
			</div>
		</Slide>
	);
}
