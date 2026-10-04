import { motion } from 'framer-motion';
import { Page, colors, fonts, radii } from '../deck';

/**
 * P00 · 封面
 * 🔴 不剧透收口。悬念留给第三幕翻车②和第五幕最后那句话。
 */
export default function L14P00_Cover() {
	return (
		<Page bg={colors.dark} style={{ justifyContent: 'center', padding: '0 92px' }}>
			<motion.div
				initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
				style={{ fontFamily: fonts.mono, fontSize: 19, letterSpacing: 3, color: 'rgba(255,255,255,.5)' }}
			>
				VIBE CODING 大师课 · 第十四节
			</motion.div>

			<motion.h1
				initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.25, type: 'spring', stiffness: 170, damping: 16 }}
				style={{
					fontFamily: fonts.heading, fontSize: 124, fontWeight: 900, letterSpacing: -6,
					color: colors.white, margin: '18px 0 0', lineHeight: 1,
				}}
			>
				《它<span style={{ color: colors.yellow }}>能碰</span>什么》
			</motion.h1>

			<motion.p
				initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}
				style={{ fontFamily: fonts.heading, fontSize: 36, fontWeight: 800, color: colors.white, marginTop: 34, letterSpacing: -1 }}
			>
				给一个 agent 一套公司系统的<span style={{
					backgroundImage: `linear-gradient(transparent 62%, ${colors.blue} 62%, ${colors.blue} 93%, transparent 93%)`,
				}}>权限、连接、技能与维护</span>
			</motion.p>

			<motion.p
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95, duration: 0.5 }}
				style={{ fontSize: 23, lineHeight: 1.75, color: 'rgba(255,255,255,.58)', marginTop: 26, maxWidth: 1040 }}
			>
				上节课你造了一个会自己拦人的仓库。<br />
				<span style={{ color: colors.yellow, fontWeight: 700 }}>但它现在没有消费者</span> —— 没有任何 AI 在读它。<br />
				今天我们把 AI 接进来。
			</motion.p>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.35, duration: 0.6 }}
				style={{
					marginTop: 40, alignSelf: 'flex-start', padding: '14px 22px',
					border: `2px solid ${colors.red}`, borderRadius: radii.card,
					background: 'rgba(255,87,87,.1)', fontSize: 24, fontWeight: 800, color: colors.white,
				}}
			>
				接之前先说一句上节课最后那句话：<span style={{ color: colors.red }}>地基错了，上面那层越强越危险。</span>
			</motion.div>
		</Page>
	);
}
