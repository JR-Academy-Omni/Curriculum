import { motion } from 'framer-motion';
import { colors, fonts, border, shadow } from '../ui';

// P00 · 封面
// 🔴 本节**不做标题悬念**（与 L10 / L11 刻意不同，蓝图 §5.1）：
//    课名直接就叫 Claude Hook，屏幕上就写着，index.html 的 <title> 也写着。
//    悬念留给第三幕「它会咬你」，不留给标题。
export default function L12P00_Cover() {
	return (
		<div style={{
			width: '100%', height: '100%', background: colors.dark, position: 'relative',
			display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
			gap: 30, overflow: 'hidden',
		}}>
			{/* 背景：淡淡的生命周期时点，暗示「在固定的点上介入」 */}
			<div style={{
				position: 'absolute', inset: 0, opacity: 0.05, pointerEvents: 'none',
				display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
				paddingBottom: 70,
				fontFamily: fonts.mono, fontSize: 26, letterSpacing: 4, color: colors.white,
				whiteSpace: 'pre', lineHeight: 2.4, textAlign: 'center',
			}}>
				{'SessionStart   UserPromptSubmit   PreToolUse\nPostToolUse   Stop   SessionEnd'}
			</div>

			<motion.span
				initial={{ opacity: 0, y: -14 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				style={{
					fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, letterSpacing: 4,
					color: colors.yellow, zIndex: 1,
				}}
			>
				VIBE CODING 大师课 · 第十二节
			</motion.span>

			<motion.h1
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ type: 'spring', stiffness: 150, damping: 16, delay: 0.12 }}
				style={{
					fontFamily: fonts.heading, fontSize: 'clamp(84px, 9vw, 150px)', fontWeight: 900,
					color: colors.white, letterSpacing: -4, lineHeight: 1, zIndex: 1,
				}}
			>
				Claude Hook
			</motion.h1>

			<motion.div
				initial={{ opacity: 0, y: 18 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.42, duration: 0.5 }}
				style={{
					border, background: colors.yellow, boxShadow: shadow,
					padding: '16px 34px', zIndex: 1,
				}}
			>
				<span style={{
					fontFamily: fonts.heading, fontSize: 34, fontWeight: 800, color: colors.black, letterSpacing: -0.5,
				}}>
					把「我跟它说过」变成「它绕不过去」
				</span>
			</motion.div>

			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.75, duration: 0.6 }}
				style={{
					fontSize: 23, color: 'rgba(255,255,255,0.55)', zIndex: 1,
					marginTop: 8, lineHeight: 1.75, textAlign: 'center', maxWidth: 900,
				}}
			>
				前十一节给你的东西，全都是<b style={{ color: 'rgba(255,255,255,0.85)' }}>说给它听</b>的。
				<br />
				今天给你第一个<b style={{ color: colors.yellow }}>它不能不照做</b>的。
			</motion.p>
		</div>
	);
}
