import { motion } from 'framer-motion';
import { colors, fonts, border, shadow, FS, SYMPTOMS } from '../deck';

// P01 · 这五句，你们中了哪几句
// 🔴 开场不讲课。先让学员在聊天框认领一条症状，票最多那条全程当例子（埋点 1）。
// 🔴 「你们那儿」是故意不说「你们公司」的 —— 单位可以小到三个人，
//    甚至只有你和你那几个 agent（蓝图 §1.0）。讲师要把这一段说出口。
// 🔴 五句里 1/4 偏大规模、5 偏小组。5 票多 = 这班偏小组，第 1 步走小规模读法。
export default function L13P01_Symptoms() {
	return (
		<div style={{
			width: '100%', height: '100%', background: colors.dark, position: 'relative',
			padding: '64px 72px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 34,
		}}>
			<motion.div
				initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
				style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}
			>
				<span style={{
					fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, letterSpacing: 3,
					padding: '6px 14px', background: colors.yellow, color: colors.black, border,
				}}>
					第十三节
				</span>
				<span style={{ fontSize: 20, color: 'rgba(255,255,255,0.45)' }}>
					把一条没人执行的规矩，变成一个会自己拦人的仓库
				</span>
			</motion.div>

			<motion.h1
				initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
				style={{
					fontFamily: fonts.heading, fontSize: 68, fontWeight: 900, lineHeight: 1.1,
					color: colors.white, letterSpacing: -2,
				}}
			>
				这五句，<span style={{ color: colors.yellow }}>你们中了哪几句？</span>
			</motion.h1>

			<div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
				{SYMPTOMS.map((s, i) => (
					<motion.div
						key={s.n}
						initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: 0.3 + i * 0.09 }}
						style={{ display: 'flex', alignItems: 'center', gap: 16 }}
					>
						<span style={{
							width: 40, height: 40, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
							fontFamily: fonts.mono, fontSize: 20, fontWeight: 700,
							background: colors.white, color: colors.black, border, boxShadow: '3px 3px 0 #000',
						}}>{s.n}</span>
						<span style={{ fontSize: 30, color: colors.white, fontWeight: 500 }}>{s.t}</span>
						{s.scale && (
							<span style={{
								fontFamily: fonts.mono, fontSize: 13, letterSpacing: 1,
								color: 'rgba(255,255,255,0.3)', border: '1px solid rgba(255,255,255,0.2)',
								padding: '2px 8px',
							}}>{s.scale}</span>
						)}
					</motion.div>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.6 }}
				style={{
					border: `3px solid ${colors.yellow}`, padding: '16px 22px', boxShadow: shadow,
					background: 'rgba(255,222,89,0.07)',
				}}
			>
				<div style={{ fontSize: FS.body, color: colors.white, lineHeight: 1.65 }}>
					今天我会一直说「<b style={{ color: colors.yellow }}>你们那儿</b>」，不说「你们公司」。
					一家公司、一个部门、一个项目组、三个人的小队，
					<b style={{ color: colors.yellow }}>甚至只有你和你那几个 agent</b>，都算。
					<br />
					判据只有一条：<b style={{ color: colors.yellow }}>有没有超过一个动作者，会碰同一批东西。</b>
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
				style={{ fontSize: 19, color: 'rgba(255,255,255,0.42)', fontFamily: fonts.mono }}
			>
				聊天框打编号 · 一到五 · 打两个也行
			</motion.div>
		</div>
	);
}
