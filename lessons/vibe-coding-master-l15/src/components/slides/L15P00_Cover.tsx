import { motion } from 'framer-motion';
import { Page, colors, fonts, border, radii } from '../deck';

/**
 * P00 · 封面
 * 课名《它碰过什么》+ 副标题「你凭什么敢在睡觉的时候让它跑」
 * 视觉要点（PRD §3）：让「能碰什么」和「碰过什么」在同屏形成对照，Part 2 做成角标。
 * 悬念不留给标题 —— 留给 P07 翻车②和 P27 收口。
 */
export default function L15P00_Cover() {
	return (
		<Page bg={colors.dark} style={{ justifyContent: 'center', padding: '0 92px' }}>
			{/* Part 2 角标 */}
			<motion.div
				initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
				style={{ position: 'absolute', top: 54, right: 64, textAlign: 'right' }}
			>
				<span style={{
					display: 'inline-block', fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, letterSpacing: 2,
					padding: '8px 14px', borderRadius: radii.label, background: colors.yellow, color: colors.black, border,
				}}>PART 2</span>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
				style={{ fontFamily: fonts.mono, fontSize: 19, letterSpacing: 3, color: 'rgba(255,255,255,.5)' }}
			>
				VIBE CODING 大师课 · 第十五节
			</motion.div>

			{/* 两个课名的对照 —— 上节课灰，这节课亮 */}
			<div style={{ display: 'flex', alignItems: 'flex-end', gap: 28, marginTop: 26, flexWrap: 'wrap' }}>
				<motion.h2
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.5 }}
					style={{
						fontFamily: fonts.heading, fontSize: 56, fontWeight: 900, letterSpacing: -2,
						color: 'rgba(255,255,255,.26)', textDecoration: 'line-through',
						textDecorationColor: 'rgba(255,255,255,.18)', margin: 0,
					}}
				>
					《它能碰什么》
				</motion.h2>
				<motion.h1
					initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.4, type: 'spring', stiffness: 170, damping: 16 }}
					style={{ fontFamily: fonts.heading, fontSize: 112, fontWeight: 900, letterSpacing: -5, color: colors.white, margin: 0, lineHeight: 1 }}
				>
					《它<span style={{ color: colors.yellow }}>碰过</span>什么》
				</motion.h1>
			</div>

			<motion.p
				initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.72, duration: 0.5 }}
				style={{ fontFamily: fonts.heading, fontSize: 40, fontWeight: 800, color: colors.white, marginTop: 40, letterSpacing: -1 }}
			>
				你凭什么敢在<span style={{
					backgroundImage: `linear-gradient(transparent 62%, ${colors.red} 62%, ${colors.red} 93%, transparent 93%)`,
				}}>睡觉的时候</span>让它跑
			</motion.p>

			<motion.p
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.5 }}
				style={{ fontSize: 23, lineHeight: 1.7, color: 'rgba(255,255,255,.58)', marginTop: 22, maxWidth: 1060 }}
			>
				上节课那张表上每一行都是事前的一句话。<br />
				今天我们去看事后 —— 以及看完之后，第一次把它放出去自己跑。
			</motion.p>
		</Page>
	);
}
