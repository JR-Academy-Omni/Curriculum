import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { phases } from '../../data/phases';

function truncate(text: string, max = 30) {
	if (text.length <= max) return text;
	return text.slice(0, max) + '…';
}

export default function S06_CapabilityMap() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1400, height: '90%', padding: '28px 30px', display: 'flex', flexDirection: 'column' }}>
				{/* 顶部标题 */}
				<motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 12 }}>
					<div style={{ display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap' }}>
						<h2 style={{ fontFamily: fonts.heading, fontSize: 'clamp(28px,3.8vw,48px)', fontWeight: 900, color: colors.black, letterSpacing: -1, lineHeight: 1.1 }}>
							AI Engineer <span style={{ background: colors.yellow, padding: '0 10px', border: `3px solid ${colors.black}`, boxShadow: `4px 4px 0 ${colors.black}`, display: 'inline-block', transform: 'rotate(-1deg)' }}>到底要会什么？</span>
						</h2>
					</div>
					<p style={{ marginTop: 8, fontFamily: fonts.heading, fontSize: 'clamp(14px,1.6vw,19px)', fontWeight: 700, color: '#444' }}>
						<span style={{ fontFamily: fonts.mono, color: colors.red, fontWeight: 800 }}>10 个能力层</span>，缺一层你的 AI 产品就跑不起来
					</p>
				</motion.div>

				{/* 10 张 Phase CardSm 2x5 */}
				<div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: 14, marginBottom: 14 }}>
					{phases.map((p, i) => (
						<motion.div
							key={p.num}
							initial={{ opacity: 0, y: 20, scale: 0.95 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							transition={{ delay: 0.08 + i * 0.05, duration: 0.35 }}
							style={{
								background: colors.white,
								border,
								boxShadow: shadowSm,
								display: 'flex',
								flexDirection: 'column',
								position: 'relative',
								overflow: 'hidden',
							}}
						>
							{/* 顶部 color stripe */}
							<div style={{ height: 8, background: p.color, flexShrink: 0 }} />

							{/* V5 NEW 徽章 */}
							{p.isV5New && (
								<div style={{ position: 'absolute', top: 12, right: -22, padding: '3px 24px', background: colors.red, color: colors.white, fontFamily: fonts.mono, fontSize: 10, fontWeight: 900, transform: 'rotate(30deg)', border: `2px solid ${colors.black}`, boxShadow: `2px 2px 0 ${colors.black}`, letterSpacing: 1 }}>
									V5 NEW
								</div>
							)}

							<div style={{ padding: '12px 14px', flex: 1, display: 'flex', flexDirection: 'column' }}>
								{/* Phase code + icon */}
								<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
									<span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 900, padding: '3px 10px', background: p.color, color: colors.white, border: `2px solid ${colors.black}` }}>
										{p.code}
									</span>
									<span style={{ fontSize: 22, lineHeight: 1 }}>{p.icon}</span>
								</div>

								{/* 英文名（大标题） */}
								<div style={{ fontFamily: fonts.heading, fontSize: 'clamp(15px,1.6vw,20px)', fontWeight: 900, color: colors.black, lineHeight: 1.15, marginBottom: 4, letterSpacing: -0.4 }}>
									{p.name}
								</div>
								{/* 中文名（小标题） */}
								<div style={{ fontFamily: fonts.heading, fontSize: 'clamp(13px,1.25vw,16px)', fontWeight: 700, color: '#555', lineHeight: 1.2, marginBottom: 10 }}>
									{p.nameCn}
								</div>

								{/* summary 截断 */}
								<div style={{ fontSize: 'clamp(12px,1.2vw,14px)', color: '#333', lineHeight: 1.45, fontWeight: 500 }}>
									{truncate(p.summary, 38)}
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* 底部 CTA */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.9 }}
					style={{ textAlign: 'center' }}
				>
					<span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '10px 22px', background: colors.black, color: colors.white, fontFamily: fonts.heading, fontSize: 'clamp(14px,1.6vw,18px)', fontWeight: 800, border, boxShadow: `5px 5px 0 ${colors.yellow}` }}>
						接下来，我们一层一层打开
						<motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>
							<span style={{ color: colors.yellow }}>→</span>
						</motion.span>
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}
