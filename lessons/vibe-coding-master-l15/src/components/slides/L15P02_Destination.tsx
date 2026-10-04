import { motion } from 'framer-motion';
import { Page, colors, fonts, border, radii } from '../deck';

/**
 * P02 · 终点宣告 ⭐⭐ 独占（蓝图 §0.2 / §0.3）
 * 🔴 整节课挂在这一页上。开场不宣布终点，后面四幕全是表格（蓝图 §0.9 两头压的第一头）。
 * 四个小格 = 四幕 = 开那个东西的四个条件。静态版用不同透明度暗示「会被逐幕点亮」。
 * ⚠️ 这一页不许写「分水岭」—— 那是讲师知识（§0.2b），不是学员这一刻需要的。
 */
const CONDITIONS = [
	{ n: '一', t: '它得先留下痕迹', s: '没人在场的时候，痕迹是唯一存在的东西' },
	{ n: '二', t: '痕迹得有人读', s: '没人在场的时候，没有人会主动去看' },
	{ n: '三', t: '出事得撤得回来', s: '没人在场的时候，撤回窗口在你睡觉时关掉' },
	{ n: '四', t: '你得攒够放手的证据', s: '这就是开关前面那把锁' },
];

export default function L15P02_Destination() {
	return (
		<Page bg={colors.dark} style={{ justifyContent: 'center' }}>
			<motion.div
				initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
				style={{ textAlign: 'center' }}
			>
				<span style={{
					fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, letterSpacing: 3,
					padding: '7px 16px', borderRadius: radii.label, background: colors.teal, color: colors.black, border,
				}}>今天的终点</span>
			</motion.div>

			<motion.h2
				initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.2, type: 'spring', stiffness: 170, damping: 16 }}
				style={{
					fontFamily: fonts.heading, fontSize: 62, fontWeight: 900, lineHeight: 1.26, letterSpacing: -2,
					color: colors.white, textAlign: 'center', margin: '26px auto 0', maxWidth: 1240,
				}}
			>
				这节课结束的时候，你会<span style={{ color: colors.yellow }}>真的打开一个定时任务</span>
				<br />,, 而且你会说得出凭什么
			</motion.h2>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }}
				style={{ textAlign: 'center', fontSize: 25, color: 'rgba(255,255,255,.56)', marginTop: 20 }}
			>
				前面四幕，全部是开它的条件
			</motion.div>

			<div style={{ display: 'flex', gap: 18, marginTop: 44 }}>
				{CONDITIONS.map((c, i) => (
					<motion.div
						key={c.n}
						initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.75 + i * 0.12, duration: 0.4 }}
						style={{
							flex: 1, minWidth: 0, padding: '20px 18px',
							background: 'rgba(255,255,255,.055)',
							border: `2px solid rgba(255,255,255,.22)`, borderRadius: radii.card,
							display: 'flex', flexDirection: 'column', gap: 10,
						}}
					>
						<span style={{
							width: 38, height: 38, borderRadius: '50%', flexShrink: 0,
							background: 'rgba(255,255,255,.1)', border: `2px solid rgba(255,255,255,.3)`,
							display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
							fontFamily: fonts.mono, fontSize: 17, fontWeight: 800, color: 'rgba(255,255,255,.72)',
						}}>{c.n}</span>
						<div style={{ fontFamily: fonts.heading, fontSize: 25, fontWeight: 900, color: colors.white, lineHeight: 1.3 }}>{c.t}</div>
						<div style={{ fontSize: 17, lineHeight: 1.5, color: 'rgba(255,255,255,.46)' }}>{c.s}</div>
					</motion.div>
				))}
			</div>
		</Page>
	);
}
