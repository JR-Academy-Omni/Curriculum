import { motion } from 'framer-motion';
import { Page, ActBadge, ChatSignal, colors, fonts, border, radii } from '../deck';

/**
 * P23 · 动手⑦ 把四格补上（✅ 终端）
 * 🔴 第四格写死：不许写「我」。这句是 P28 收口的半截，提前半小时埋下去。
 * 课前包模板：p23-handover-template.md
 */
const FOUR = ['它会碰什么', '它什么时候会自己跑', '它依赖什么外部凭据', '它坏了之后谁修'];

export default function L15P23_FillYourFour() {
	return (
		<Page bg={colors.dark}>
			<ActBadge act={4} mode="动手 ⑦" />

			<h2 style={{
				fontFamily: fonts.heading, fontSize: 48, fontWeight: 900, letterSpacing: -1.5,
				color: colors.white, lineHeight: 1.25, margin: '6px 0 0',
			}}>
				回到你的包，<span style={{ color: colors.yellow }}>把这四格补上去</span>
			</h2>
			<p style={{ fontSize: 22, color: 'rgba(255,255,255,.58)', marginTop: 14, lineHeight: 1.7 }}>
				一格一句话就够。不要写长 —— 写长了没人读，那又回到说明文档那个问题了。
			</p>

			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 26 }}>
				{FOUR.map((t, i) => (
					<motion.div
						key={t}
						initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 + i * 0.11, duration: 0.42 }}
						style={{
							padding: '16px 20px', background: 'rgba(255,255,255,.07)',
							border: `2px solid rgba(255,255,255,.3)`, borderRadius: radii.card,
							display: 'flex', alignItems: 'center', gap: 14,
						}}
					>
						<span style={{
							fontFamily: fonts.mono, fontSize: 17, fontWeight: 800,
							color: colors.yellow, flexShrink: 0,
						}}>{i + 1}</span>
						<span style={{ fontSize: 23, color: colors.white }}>{t}</span>
					</motion.div>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.85, type: 'spring', stiffness: 165, damping: 17 }}
				style={{
					marginTop: 30, padding: '22px 30px', background: colors.red,
					border, borderRadius: radii.panel, boxShadow: `8px 8px 0 ${colors.yellow}`,
				}}
			>
				<div style={{ fontFamily: fonts.heading, fontSize: 32, fontWeight: 900, color: colors.white, lineHeight: 1.45 }}>
					第四格有一个要求：<span style={{ background: colors.yellow, color: colors.black, padding: '0 8px', borderRadius: radii.label }}>不许写「我」</span><br />
					写「暂时没人」是诚实的。写「我」是逃避的 —— 因为你总有一天不在。
				</div>
			</motion.div>

			<ChatSignal>补完发 <strong style={{ color: colors.yellow }}>1</strong></ChatSignal>
		</Page>
	);
}
