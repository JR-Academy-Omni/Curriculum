import { motion } from 'framer-motion';
import { Slide, Inner, Title, colors, fonts, border, shadow } from '../ui';

// P00 封面：Subagent · 给 context 分家
// SoT：蓝图 v1.0 §17-5 建议标题
export default function L7P00_Cover() {
	const chips = ['该不该派', '怎么派', '怎么收'];
	return (
		<Slide bg={colors.warmBg}>
			<Inner center>
				<div style={{ textAlign: 'center' }}>
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4 }}
						style={{
							display: 'inline-block', padding: '8px 20px',
							background: colors.black, color: colors.yellow,
							fontFamily: fonts.mono, fontSize: 14, fontWeight: 700,
							letterSpacing: 3, marginBottom: 28,
						}}>
						VIBE CODING 大师课 · 第七节
					</motion.div>

					<Title size="80px" style={{ lineHeight: 1.08, marginBottom: 16 }}>
						<motion.span
							initial={{ opacity: 0, y: 24 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.15 }}
							style={{ display: 'block' }}
						>
							<motion.span
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
								style={{ display: 'inline-block', background: colors.blue, color: colors.white, padding: '0 24px', fontFamily: fonts.mono }}
							>Subagent</motion.span>
						</motion.span>
					</Title>

					<motion.p
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.5 }}
						style={{ fontSize: 27, fontWeight: 800, color: colors.dark, marginBottom: 20 }}>
						给 context <span style={{ background: colors.yellow, padding: '0 10px' }}>分家</span>
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 18 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.72 }}
						style={{ display: 'inline-flex', gap: 10, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
						{chips.map((c, i) => (
							<span key={c} style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
								<span style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, background: colors.white, color: colors.black, border: `2px solid ${colors.black}`, padding: '5px 12px' }}>{c}</span>
								{i < chips.length - 1 && <span style={{ color: colors.red, fontWeight: 900 }}>→</span>}
							</span>
						))}
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.95 }}
						style={{
							display: 'inline-flex', gap: 16, alignItems: 'center',
							padding: '16px 28px', marginTop: 26,
							background: colors.white, border, boxShadow: shadow,
						}}>
						<span style={{ fontFamily: fonts.mono, fontSize: 14, color: '#666', letterSpacing: 2 }}>JR ACADEMY</span>
						<span style={{ fontSize: 18, fontWeight: 700 }}>不是多一个人手，是多一个独立的 context</span>
					</motion.div>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 1.15 }}
						style={{ marginTop: 20, fontSize: 14, color: '#999', fontFamily: fonts.mono, letterSpacing: 1 }}>
						← → 翻页 · F 全屏 · V 开摄像头
					</motion.p>
				</div>
			</Inner>
		</Slide>
	);
}
