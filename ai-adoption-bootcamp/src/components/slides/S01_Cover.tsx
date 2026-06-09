import { motion } from 'framer-motion';
import { Slide, colors, fonts } from '../ui';

export default function S01_Cover() {
	return (
		<Slide bg={colors.black} style={{ position: 'relative' }}>
			<div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
				<motion.div
					initial={{ x: -200, rotate: -8 }}
					animate={{ x: 0, rotate: -8 }}
					transition={{ duration: 0.6 }}
					style={{ position: 'absolute', top: -80, left: -100, width: '55%', height: '120%', background: colors.indigo }}
				/>
				<motion.div
					initial={{ y: 200 }}
					animate={{ y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					style={{ position: 'absolute', bottom: -40, right: -20, width: 400, height: 400, background: colors.teal, transform: 'rotate(12deg)', border: `4px solid ${colors.black}` }}
				/>
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.4, delay: 0.3 }}
					style={{ position: 'absolute', top: 60, right: 180, width: 120, height: 120, background: colors.yellow, border: `3px solid ${colors.black}`, transform: 'rotate(15deg)' }}
				/>
			</div>

			<div style={{ position: 'relative', zIndex: 1, width: '90%', maxWidth: 1400, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: 60 }}>
				<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
					<div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '8px 20px', background: colors.white, border: `3px solid ${colors.black}`, boxShadow: `5px 5px 0 ${colors.black}`, marginBottom: 32 }}>
						<div style={{ width: 36, height: 36, borderRadius: 6, background: colors.black, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: fonts.heading, fontWeight: 900, fontSize: 18 }}>JR</div>
						<span style={{ fontFamily: fonts.heading, fontSize: 16, fontWeight: 800 }}>匠人学院 JR ACADEMY</span>
					</div>
				</motion.div>

				<motion.h1
					initial={{ opacity: 0, x: -60 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.3, duration: 0.5 }}
					style={{
						fontFamily: fonts.heading, fontSize: 'clamp(48px, 7vw, 100px)',
						fontWeight: 900, lineHeight: 1, letterSpacing: -3, color: colors.white,
						textShadow: `4px 4px 0 ${colors.black}`,
					}}
				>
					AI 工作流<br />
					<span style={{ display: 'inline-block', padding: '0 20px', background: colors.yellow, color: colors.black, border: `4px solid ${colors.black}`, boxShadow: `6px 6px 0 ${colors.black}`, transform: 'rotate(-1deg)', marginTop: 8 }}>
						提效营
					</span>
					<br />
					<span style={{ fontSize: 'clamp(36px, 5vw, 72px)', color: 'rgba(255,255,255,0.7)' }}>AI Workflow Bootcamp</span>
				</motion.h1>

				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} style={{ marginTop: 32 }}>
					<p style={{ fontFamily: fonts.heading, fontSize: 'clamp(18px, 2.5vw, 28px)', fontWeight: 700, color: 'rgba(255,255,255,0.9)', borderLeft: `5px solid ${colors.teal}`, paddingLeft: 16 }}>
						把 AI 装进你部门的工作流 — 8 周搭出 5 个 SOP + 1 份 ROI 报告
					</p>
				</motion.div>

				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} style={{ marginTop: 32, display: 'flex', gap: 16 }}>
					<span style={{ padding: '10px 24px', background: colors.teal, border: `3px solid ${colors.black}`, boxShadow: `4px 4px 0 ${colors.black}`, fontFamily: fonts.mono, fontSize: 16, fontWeight: 700 }}>在岗提效</span>
					<span style={{ padding: '10px 24px', background: colors.white, border: `3px solid ${colors.black}`, boxShadow: `4px 4px 0 ${colors.black}`, fontFamily: fonts.mono, fontSize: 16, fontWeight: 700 }}>不是转职课</span>
					<span style={{ padding: '10px 24px', border: `3px solid ${colors.white}`, color: colors.white, fontFamily: fonts.mono, fontSize: 16, fontWeight: 700 }}>8 周完成</span>
				</motion.div>
			</div>
		</Slide>
	);
}
