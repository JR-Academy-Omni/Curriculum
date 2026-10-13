import { motion } from 'framer-motion';
import { Page, colors, fonts, border, radii } from '../deck';

/**
 * P02 · 终点宣告（⭐⭐ 独占一屏）
 * 整节课挂在这一页上。一句大字 + 下方三个小格（三幕=三个条件）。
 * 三格后面会被逐幕点亮，静态版用透明度暗示。
 */
const GATES = [
	{ k: '一', t: '先看见你造的东西散在哪', c: colors.blue },
	{ k: '二', t: '再看别人是怎么交的', c: colors.teal },
	{ k: '三', t: '然后把自己的打成同样的形状', c: colors.yellow },
];

export default function L15P02_Destination() {
	return (
		<Page bg={colors.dark} style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
			<motion.h2
				initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
				style={{
					fontFamily: fonts.heading, fontSize: 62, fontWeight: 900, lineHeight: 1.28,
					letterSpacing: -2, color: colors.white, maxWidth: 1280,
				}}
			>
				今天结束的时候，你会把这张表里<br />
				至少<span style={{ color: colors.yellow }}>三样东西</span>，装到一台<span style={{
					backgroundImage: `linear-gradient(transparent 60%, ${colors.red} 60%, ${colors.red} 92%, transparent 92%)`,
				}}>不是你这台</span>的环境上，<br />
				并且让它<span style={{ color: colors.yellow }}>真的生效</span>。
			</motion.h2>

			<motion.p
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }}
				style={{ fontSize: 25, color: 'rgba(255,255,255,.58)', marginTop: 26, lineHeight: 1.7 }}
			>
				不是拷过去。也不是写一份文档告诉别人该怎么拷。<strong style={{ color: colors.white }}>是装上去。</strong>
			</motion.p>

			<div style={{ display: 'flex', gap: 22, marginTop: 52 }}>
				{GATES.map((g, i) => (
					<motion.div
						key={g.k}
						initial={{ opacity: 0, y: 16 }} animate={{ opacity: 0.42, y: 0 }}
						transition={{ delay: 0.9 + i * 0.16, duration: 0.5 }}
						style={{
							width: 328, padding: '20px 22px', textAlign: 'left',
							background: 'rgba(255,255,255,.06)', border: `2px solid rgba(255,255,255,.26)`,
							borderRadius: radii.card,
						}}
					>
						<span style={{
							display: 'inline-block', fontFamily: fonts.mono, fontSize: 14, fontWeight: 800,
							padding: '3px 10px', borderRadius: radii.label, background: g.c, color: colors.black, border,
						}}>{g.k}</span>
						<div style={{ fontSize: 22, color: colors.white, marginTop: 13, lineHeight: 1.5 }}>{g.t}</div>
					</motion.div>
				))}
			</div>
		</Page>
	);
}
