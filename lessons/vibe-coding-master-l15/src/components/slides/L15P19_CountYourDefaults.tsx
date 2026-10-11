import { motion } from 'framer-motion';
import { Page, ActBadge, ChatSignal, colors, fonts, border, radii } from '../deck';

/**
 * P19 · 收数（📊）—— 这是 P20 反转的引信
 * 🔴 时机写死：学员刚装成功、成就感最高的时候问。
 * 🔴 只收数字，不收内容（沿用 L10 不许要求投屏那条纪律）。
 *    讲师不评论、不念出来、不挑最大的那个说话。
 */
export default function L15P19_CountYourDefaults() {
	return (
		<Page bg={colors.dark} style={{ justifyContent: 'center' }}>
			<ActBadge act={4} mode="收数" />

			<motion.div
				initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
				style={{ fontFamily: fonts.mono, fontSize: 18, letterSpacing: 3, color: 'rgba(255,255,255,.45)' }}
			>
				包做完了，装上了，跑起来了
			</motion.div>

			<motion.h2
				initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.55 }}
				style={{
					fontFamily: fonts.heading, fontSize: 46, fontWeight: 900, letterSpacing: -1.5,
					color: colors.white, lineHeight: 1.35, marginTop: 20, maxWidth: 1300,
				}}
			>
				打开你那个包，从头到尾看一遍，<br />数一数里面有几处是这样的：
			</motion.h2>

			<motion.div
				initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.55, type: 'spring', stiffness: 160, damping: 17 }}
				style={{
					marginTop: 32, padding: '30px 36px', background: colors.yellow,
					border, borderRadius: radii.panel, boxShadow: `8px 8px 0 ${colors.red}`, alignSelf: 'flex-start',
				}}
			>
				<div style={{ fontFamily: fonts.heading, fontSize: 40, fontWeight: 900, lineHeight: 1.4, letterSpacing: -1 }}>
					这个地方我做了一个选择，<br />
					但我<span style={{ textDecoration: 'underline', textDecorationThickness: 5 }}>没在任何地方说过</span>我为什么这么选。
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95, duration: 0.5 }}
				style={{ marginTop: 28, fontSize: 21, color: 'rgba(255,255,255,.55)', lineHeight: 1.8, maxWidth: 1180 }}
			>
				钩子挂在哪个时机 · 技能默认做什么、不做什么 —— <br />你都定了，但你没写为什么。
			</motion.div>

			<ChatSignal>
				<strong style={{ color: colors.yellow }}>只发数字</strong>，不要发内容
			</ChatSignal>
		</Page>
	);
}
