import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

export default function S21_RoleAmplifier() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '90%', maxWidth: 1360, height: '85%', padding: '34px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 30 }}>
					<motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}
						style={{ background: colors.white, border, boxShadow: shadow, padding: '26px 26px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 15.5, fontWeight: 700, color: '#999', marginBottom: 12 }}>你的工作变了</div>
						<div style={{ fontFamily: fonts.body, fontSize: 22.5, color: '#999', textDecoration: 'line-through', marginBottom: 8 }}>过去 = 生产内容</div>
						<div style={{ fontFamily: fonts.heading, fontSize: 29.5, fontWeight: 900, color: colors.black, lineHeight: 1.25 }}>现在 = <span style={{ color: colors.rose }}>维护一份真相</span></div>
						<div style={{ fontFamily: fonts.body, fontSize: 19, fontWeight: 600, color: '#555', marginTop: 8 }}>内容，让 pipeline 去生产。</div>
					</motion.div>

					<motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
						style={{ background: colors.dark, color: colors.white, border, boxShadow: `6px 6px 0 ${colors.rose}`, padding: '26px 26px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 15.5, fontWeight: 700, color: colors.yellow, marginBottom: 12 }}>失败模式 · 反面教材</div>
						<div style={{ fontFamily: fonts.body, fontSize: 20, fontWeight: 600, lineHeight: 1.6 }}>
							没有真相 → 每个平台各写各的 → 每次跟 AI 从零交代 → 品牌<b style={{ color: colors.rose }}>精神分裂</b> → 越用 AI 越乱
						</div>
					</motion.div>
				</div>

				<motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
					style={{ textAlign: 'center' }}>
					<div style={{ display: 'inline-block', padding: '20px 40px', background: colors.rose, color: colors.white, border, boxShadow: `8px 8px 0 ${colors.dark}`, fontFamily: fonts.heading, fontSize: 29.5, fontWeight: 900, lineHeight: 1.35 }}>
						AI 是放大器 ——<br />真相对了，放大 <span style={{ color: colors.yellow }}>100 倍</span>；真相是空的，它把混乱也放大 100 倍
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
