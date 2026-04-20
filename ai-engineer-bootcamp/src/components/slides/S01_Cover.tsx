import { motion } from 'framer-motion';
import { Slide, colors, fonts } from '../ui';

export default function S01_Cover() {
	return (
		<Slide bg={colors.dark} style={{ position: 'relative' }}>
			{/* 几何装饰色块 */}
			<div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
				<motion.div
					initial={{ x: -260, rotate: -10 }}
					animate={{ x: 0, rotate: -10 }}
					transition={{ duration: 0.6 }}
					style={{ position: 'absolute', top: -100, left: -140, width: '52%', height: '130%', background: colors.indigo }}
				/>
				<motion.div
					initial={{ y: 260 }}
					animate={{ y: 0 }}
					transition={{ duration: 0.55, delay: 0.1 }}
					style={{ position: 'absolute', bottom: -60, right: -40, width: 440, height: 440, background: colors.teal, transform: 'rotate(14deg)', border: `4px solid ${colors.black}` }}
				/>
				<motion.div
					initial={{ scale: 0, rotate: 0 }}
					animate={{ scale: 1, rotate: 18 }}
					transition={{ duration: 0.4, delay: 0.3 }}
					style={{ position: 'absolute', top: 50, right: 200, width: 130, height: 130, background: colors.yellow, border: `3px solid ${colors.black}` }}
				/>
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.4, delay: 0.45 }}
					style={{ position: 'absolute', bottom: 120, left: '38%', width: 60, height: 60, background: colors.red, border: `3px solid ${colors.black}`, transform: 'rotate(-8deg)' }}
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

				{/* 公开课小标 */}
				<motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 }} style={{ marginBottom: 16, display: 'flex', gap: 10, alignItems: 'center' }}>
					<span style={{ padding: '6px 14px', background: colors.red, color: colors.white, fontFamily: fonts.mono, fontWeight: 700, fontSize: 14, border: `3px solid ${colors.black}`, boxShadow: `3px 3px 0 ${colors.black}`, transform: 'rotate(-2deg)' }}>
						LIVE 公开课
					</span>
					<span style={{ fontFamily: fonts.mono, fontSize: 14, color: 'rgba(255,255,255,0.7)', fontWeight: 700 }}>
						FREE · 60 min
					</span>
				</motion.div>

				{/* 主标题 */}
				<motion.h1
					initial={{ opacity: 0, x: -60 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.3, duration: 0.5 }}
					style={{
						fontFamily: fonts.heading,
						fontSize: 'clamp(44px, 6.5vw, 96px)',
						fontWeight: 900,
						lineHeight: 1,
						letterSpacing: -3,
						color: colors.white,
						textShadow: `4px 4px 0 ${colors.black}`,
					}}
				>
					AI Engineer<br />
					<span style={{ display: 'inline-block', padding: '0 22px', background: colors.yellow, color: colors.black, border: `4px solid ${colors.black}`, boxShadow: `6px 6px 0 ${colors.black}`, transform: 'rotate(-1.5deg)', marginTop: 10 }}>
						Bootcamp
					</span>
					<span style={{ display: 'inline-block', marginLeft: 18, padding: '0 16px', background: colors.red, color: colors.white, border: `4px solid ${colors.black}`, boxShadow: `5px 5px 0 ${colors.black}`, transform: 'rotate(2deg)', fontSize: 'clamp(28px, 4vw, 54px)', verticalAlign: 'middle' }}>
						第 5 期
					</span>
				</motion.h1>

				{/* 副标题 */}
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} style={{ marginTop: 30 }}>
					<p style={{ fontFamily: fonts.heading, fontSize: 'clamp(18px, 2.3vw, 28px)', fontWeight: 700, color: 'rgba(255,255,255,0.95)', borderLeft: `5px solid ${colors.teal}`, paddingLeft: 16, lineHeight: 1.35 }}>
						2026 最稳的技术饭碗<br />
						<span style={{ color: colors.yellow }}>从"会用"到"会做"</span>的完整闭环
					</p>
				</motion.div>

				{/* Tag 组 */}
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }} style={{ marginTop: 28, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
					<span style={{ padding: '10px 20px', background: colors.teal, border: `3px solid ${colors.black}`, boxShadow: `4px 4px 0 ${colors.black}`, fontFamily: fonts.mono, fontSize: 15, fontWeight: 700 }}>183 节课</span>
					<span style={{ padding: '10px 20px', background: colors.white, border: `3px solid ${colors.black}`, boxShadow: `4px 4px 0 ${colors.black}`, fontFamily: fonts.mono, fontSize: 15, fontWeight: 700 }}>10 Phase 全栈</span>
					<span style={{ padding: '10px 20px', background: colors.yellow, border: `3px solid ${colors.black}`, boxShadow: `4px 4px 0 ${colors.black}`, fontFamily: fonts.mono, fontSize: 15, fontWeight: 700 }}>12 周 + 12 周 P3 孵化</span>
				</motion.div>

				{/* 讲师 + 日期 */}
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }} style={{ marginTop: 36, display: 'flex', alignItems: 'center', gap: 22, fontFamily: fonts.mono, fontSize: 14, color: 'rgba(255,255,255,0.75)', fontWeight: 700 }}>
						{/* TODO: 替换为真实讲师名 */}
						<span>讲师 · Yanbo · JR Academy 创始人</span>
						<span style={{ width: 1, height: 18, background: 'rgba(255,255,255,0.3)' }} />
						{/* TODO: 替换为真实日期 */}
						<span>2026 May · TBD</span>
				</motion.div>
			</div>
		</Slide>
	);
}
