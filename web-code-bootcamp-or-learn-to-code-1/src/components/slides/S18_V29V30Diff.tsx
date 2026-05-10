import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { courseMeta, v29v30Diff } from '../../data/modules';

export default function S18_V29V30Diff() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1400, padding: '26px 28px', display: 'flex', flexDirection: 'column', gap: 18 }}>
				<motion.div
					initial={{ opacity: 0, y: -16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
				>
					<div style={{ display: 'inline-block', padding: '5px 14px', background: colors.red, color: colors.white, fontFamily: fonts.mono, fontSize: 15, fontWeight: 900, letterSpacing: 2, border, boxShadow: shadowSm, marginBottom: 12 }}>
						V29 → V30 · DIFF
					</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: '52px', fontWeight: 900, lineHeight: 1.1, letterSpacing: -1.5, margin: 0 }}>
						第 29 期 → 第 30 期 ·{' '}
						<span style={{ display: 'inline-block', padding: '0 12px', background: colors.yellow, border, boxShadow: `5px 5px 0 ${colors.black}`, transform: 'rotate(-1deg)' }}>
							新增 {v29v30Diff.lessonsDelta}+ 节
						</span>{' '}
					</h2>
					<p style={{ fontFamily: fonts.mono, fontSize: '19px', color: '#555', fontWeight: 700, marginTop: 10, letterSpacing: 0.5 }}>
						V29 基线：{courseMeta.v29Lessons} 节 · {courseMeta.v29Modules} Module ——— V30：{courseMeta.totalLessons} 节 · 10 Module · 28 期全部录播保留
					</p>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2 }}
						style={{ background: colors.white, border, boxShadow: shadow, padding: '18px 20px' }}
					>
						<div style={{ display: 'inline-block', padding: '4px 10px', background: colors.red, color: colors.white, fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, marginBottom: 14, letterSpacing: 1 }}>
							V30 NEW · 3 个新 Module
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
							{v29v30Diff.newModules.map((m, i) => (
								<motion.div
									key={m.name}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.3 + i * 0.1 }}
									style={{ borderLeft: `4px solid ${colors.red}`, paddingLeft: 12 }}
								>
									<div style={{ fontFamily: fonts.heading, fontSize: '18px', fontWeight: 900, color: colors.black, letterSpacing: -0.3, marginBottom: 4 }}>
										{m.name}
									</div>
									<div style={{ fontFamily: fonts.body, fontSize: 15, color: '#555', fontWeight: 500, lineHeight: 1.4 }}>
										{m.reason}
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.3 }}
						style={{ background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '18px 20px' }}
					>
						<div style={{ display: 'inline-block', padding: '4px 10px', background: colors.yellow, color: colors.black, fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, marginBottom: 14, letterSpacing: 1 }}>
							升级扩展 · 3 个加厚 Module
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
							{v29v30Diff.expandedModules.map((m, i) => (
								<motion.div
									key={m.name}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.4 + i * 0.1 }}
									style={{ borderLeft: `4px solid ${colors.yellow}`, paddingLeft: 12 }}
								>
									<div style={{ fontFamily: fonts.heading, fontSize: '18px', fontWeight: 900, color: colors.yellow, letterSpacing: -0.3, marginBottom: 4 }}>
										{m.name}
									</div>
									<div style={{ fontFamily: fonts.body, fontSize: 15, color: 'rgba(255,255,255,0.8)', fontWeight: 500, lineHeight: 1.4 }}>
										{m.detail}
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.8 }}
					style={{ background: colors.black, color: colors.white, border, boxShadow: `5px 5px 0 ${colors.yellow}`, padding: '14px 20px', display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'space-between', alignItems: 'center' }}
				>
					<span style={{ fontFamily: fonts.heading, fontSize: '20px', fontWeight: 900, letterSpacing: -0.3 }}>
						只加不减 — <span style={{ color: colors.yellow }}>28 期 195 节录播全部保留</span>，作为 V30 的基础 + 扩展材料
					</span>
					<span style={{ fontFamily: fonts.mono, fontSize: 15, color: colors.yellow, fontWeight: 700 }}>
						SEO slug 不变 · 8 年积累不浪费
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}
