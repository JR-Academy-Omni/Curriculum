import { motion } from 'framer-motion';
import { colors, fonts, border, shadow, assetPath } from '../ui';

/**
 * P00 · 封面
 * 🔴 蓝图 §20 第 1 条：标题是「你不在的时候」，不是课名。
 *    这一页不许出现「定时 / Schedule / Cron / 自动化」任何一个词 ——
 *    真名要到第三幕才出现，封面剧透等于把第一幕作废。
 */
export default function L11P00_Cover() {
	return (
		<div style={{
			width: '100%', height: '100%', background: colors.dark,
			display: 'flex', flexDirection: 'column', justifyContent: 'center',
			padding: '0 100px', position: 'relative', overflow: 'hidden',
		}}>
			{/* 背景：一排熄灭的窗户，只有一扇亮着 —— 夜里还在跑的那个 */}
			<div style={{
				position: 'absolute', inset: 0, opacity: 0.07,
				display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gridTemplateRows: 'repeat(6, 1fr)', gap: 14, padding: 40,
			}}>
				{Array.from({ length: 72 }).map((_, i) => (
					<div key={i} style={{ background: i === 40 ? colors.yellow : colors.white, opacity: i === 40 ? 1 : 0.25 }} />
				))}
			</div>

			<motion.img
				src={assetPath('logo-zh-full.svg')} alt="JR Academy"
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
				style={{ height: 40, width: 'auto', marginBottom: 44, filter: 'brightness(0) invert(1)', alignSelf: 'flex-start', position: 'relative' }}
			/>

			<motion.div
				initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5, delay: 0.15 }}
				style={{ position: 'relative' }}
			>
				<span style={{
					display: 'inline-block', background: colors.yellow, color: colors.black,
					padding: '7px 20px', fontSize: 21, fontWeight: 900,
					border: `3px solid ${colors.black}`, boxShadow: `5px 5px 0 ${colors.red}`,
					marginBottom: 30,
				}}>Vibe Coding 大师课 · 第十一节</span>
			</motion.div>

			<motion.h1
				initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.55, delay: 0.3 }}
				style={{
					fontFamily: fonts.heading, fontSize: 'clamp(80px, 9vw, 132px)', fontWeight: 900,
					color: colors.white, lineHeight: 1.02, letterSpacing: -3, position: 'relative',
				}}
			>
				你不在的<br />
				<span style={{ color: colors.yellow }}>时候</span>
			</motion.h1>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.55 }}
				style={{
					marginTop: 40, background: colors.white, border,
					boxShadow: shadow, padding: '20px 28px', maxWidth: 860, position: 'relative',
				}}
			>
				<div style={{ fontSize: 27, fontWeight: 700, color: colors.dark, lineHeight: 1.5 }}>
					前十节课，你都在旁边看着。
				</div>
				<div style={{ fontSize: 27, fontWeight: 900, color: colors.red, lineHeight: 1.5, marginTop: 4 }}>
					今天这节，你不在。
				</div>
			</motion.div>
		</div>
	);
}
