import { motion } from 'framer-motion';
import { Slide, Inner, colors, fonts, border, shadow } from '../ui';

export default function S01_Cover() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner center>
				<div style={{ textAlign: 'center' }}>
					<motion.div initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'inline-block', padding: '8px 20px', background: colors.black, color: colors.yellow, fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, letterSpacing: 3, marginBottom: 28 }}>JR ACADEMY · AI 一人创业营 · WEEK 1</motion.div>
					<motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} style={{ fontFamily: fonts.heading, fontSize: 'clamp(64px, 6.2vw, 96px)', fontWeight: 900, lineHeight: 1.04, letterSpacing: -2, marginBottom: 18 }}>
						搭起你的 <span style={{ display: 'inline-block', background: colors.red, color: colors.white, padding: '0 22px' }}>创业 AI OS</span>
					</motion.h1>
					<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} style={{ fontFamily: fonts.mono, fontSize: 24, letterSpacing: 2, color: '#555' }}>BUSINESS · SINGLE SOURCE OF TRUTH · PERSONAL AI OS</motion.p>
					<motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} style={{ display: 'inline-flex', gap: 18, padding: '18px 28px', marginTop: 34, background: colors.white, border, boxShadow: shadow, fontSize: 22, fontWeight: 850 }}>
						<span>理解创业</span><span style={{ color: colors.red }}>→</span><span>建立 SoT</span><span style={{ color: colors.red }}>→</span><span>让 AI 按同一份真相工作</span>
					</motion.div>
					<p style={{ marginTop: 28, fontSize: 14, color: '#888', fontFamily: fonts.mono }}>← → 翻页 · F 全屏 · V 开摄像头</p>
				</div>
			</Inner>
		</Slide>
	);
}
