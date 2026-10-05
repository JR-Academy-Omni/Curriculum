import { motion } from 'framer-motion';
import { Slide, Inner, Title, colors, fonts, border, shadow } from '../ui';

// 封面
export default function S01_Cover() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner center>
				<div style={{ textAlign: 'center' }}>
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4 }}
						style={{ display: 'inline-block', padding: '8px 20px', background: colors.black, color: colors.yellow, fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, letterSpacing: 3, marginBottom: 28 }}>
						JR ACADEMY · 第七期 · W2 理论课
					</motion.div>

					<Title size="84px" style={{ lineHeight: 1.15, marginBottom: 28 }}>
						<motion.span initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} style={{ display: 'block' }}>
							Tokens, Context Windows
						</motion.span>
						<motion.span initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} style={{ display: 'block' }}>
							&amp;{' '}
							<span style={{ display: 'inline-block', background: colors.red, color: colors.white, padding: '0 24px', margin: '0 8px' }}>Cache</span>
							Efficiency
						</motion.span>
					</Title>

					<motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} style={{ fontSize: 30, fontWeight: 700, lineHeight: 1.5 }}>
						用你每天在用的 Claude Code / Codex，亲手量出 token 和 cache
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.85 }}
						style={{ display: 'inline-flex', gap: 16, alignItems: 'center', padding: '16px 30px', marginTop: 32, background: colors.white, border, boxShadow: shadow }}>
						<span style={{ fontFamily: fonts.mono, fontSize: 15, opacity: 0.6, letterSpacing: 2 }}>COHORT 7 · WEEK 2</span>
						<span style={{ fontSize: 22, fontWeight: 700 }}>90 分钟 · 边讲边跑</span>
					</motion.div>

					<p style={{ marginTop: 24, fontSize: 14, opacity: 0.5, fontFamily: fonts.mono, letterSpacing: 1 }}>← → 翻页 · F 全屏 · C 开摄像头</p>
				</div>
			</Inner>
		</Slide>
	);
}
