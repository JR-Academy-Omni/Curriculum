import { motion } from 'framer-motion';
import { ActBadge, colors, fonts, border, shadow } from '../deck';

// P14 · 它只挡得住你说得清的那部分 ⭐⭐ 反转页
// 🔴 P14 之前，全场不许出现过任何「hook 也有挡不住的」表述（蓝图 §10.1 铁律 5）。
// 🔴 P14 和 P15 一口气讲完，中间不许休息、不许答疑（铁律 7）——
//    拆开，P14 就变成一页丧气话。
// 🔥 回收埋点 2：「判据是一行 if —— 这不是巧合。」
// 这一页和 L11「绿灯不等于成功」是同一个结构：
//    一个让你安心的信号，和它实际保证了什么，中间有个缺口。
export default function L12P14_OnlyWhatYouCanSay() {
	return (
		<div style={{
			width: '100%', height: '100%', background: colors.dark, position: 'relative',
			display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
			padding: '0 90px', gap: 34,
		}}>
			<ActBadge act={4} />

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				style={{ fontSize: 24, color: 'rgba(255,255,255,0.5)', textAlign: 'center', lineHeight: 1.7 }}
			>
				我们挂的每一条，判据都是<b style={{ color: colors.yellow }}>一行 if</b>。
				<br />
				这不是巧合 —— <b style={{ color: colors.white }}>hook 的力量来自确定性，确定性来自它不动脑。</b>
			</motion.div>

			<motion.h2
				initial={{ opacity: 0, y: 26 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.35, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
				style={{
					fontFamily: fonts.heading, fontSize: 'clamp(52px, 5.6vw, 82px)', fontWeight: 900,
					lineHeight: 1.22, letterSpacing: -2, color: colors.white, textAlign: 'center',
				}}
			>
				hook 挡得住的，
				<br />
				只有<span style={{ color: colors.yellow }}>你说得清</span>的那部分。
			</motion.h2>

			<motion.div
				initial={{ opacity: 0, y: 18 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.75, duration: 0.5 }}
				style={{ display: 'flex', gap: 22 }}
			>
				{[
					{ q: '「别动 .env」', s: '你说得清', r: '挂得上', ok: true },
					{ q: '「别写得太复杂」', s: '你说不清', r: '挂不上', ok: false },
				].map((x) => (
					<div key={x.q} style={{
						border, background: x.ok ? colors.green : '#3a3a52',
						boxShadow: x.ok ? shadow : 'none',
						padding: '20px 30px', minWidth: 330, textAlign: 'center',
					}}>
						<div style={{
							fontSize: 26, fontWeight: 800, marginBottom: 8,
							color: x.ok ? colors.black : 'rgba(255,255,255,0.85)',
						}}>
							{x.q}
						</div>
						<div style={{
							fontFamily: fonts.mono, fontSize: 16,
							color: x.ok ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.45)',
						}}>
							{x.s}　→　<b style={{ fontSize: 19 }}>{x.r}</b>
						</div>
					</div>
				))}
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.15, duration: 0.6 }}
				style={{
					borderTop: `3px solid ${colors.red}`, paddingTop: 20, marginTop: 8,
					fontSize: 27, color: colors.white, textAlign: 'center', lineHeight: 1.6, maxWidth: 1050,
				}}
			>
				而你挂了三个 hook 之后，<b style={{ color: colors.red }}>很容易以为自己被保护了</b>。
				<br />
				说不清的那部分还在。<b style={{ color: colors.yellow }}>只是现在你不看它了。</b>
			</motion.div>
		</div>
	);
}
