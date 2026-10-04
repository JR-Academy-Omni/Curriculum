import { motion } from 'framer-motion';
import { Page, ActBadge, ChatSignal, colors, fonts, radii } from '../deck';

/** P02 · 承接句 + 聊天框问题。上节课造了会自己拦人的仓库，但它现在没有消费者。 */
export default function L14P02_Handoff() {
	return (
		<Page bg={colors.dark} style={{ justifyContent: 'center' }}>
			<ActBadge act={1} />

			<motion.div
				initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
				style={{ fontSize: 27, lineHeight: 1.8, color: 'rgba(255,255,255,.72)', maxWidth: 1180 }}
			>
				上节课你造了一个会自己拦人的仓库。<br />
				<strong style={{ color: colors.yellow }}>但它现在没有消费者</strong> —— 没有任何 AI 在读它。<br />
				<br />
				你回去第一天就会撞上这个问题：
			</motion.div>

			<motion.div
				initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.5 }}
				style={{
					marginTop: 26, padding: '22px 28px', borderRadius: radii.panel,
					borderLeft: `8px solid ${colors.red}`, background: 'rgba(255,255,255,.06)',
					fontSize: 30, lineHeight: 1.6, color: colors.white, maxWidth: 1180,
				}}
			>
				「我建好了。<strong>然后呢？AI 在哪？它凭什么读我这些文件？它能改吗？谁拦着它？</strong>」
			</motion.div>

			<motion.h2
				initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 1, type: 'spring', stiffness: 170, damping: 16 }}
				style={{
					fontFamily: fonts.heading, fontSize: 58, fontWeight: 900, letterSpacing: -2,
					color: colors.white, marginTop: 46, lineHeight: 1.25,
				}}
			>
				所以今天不是「怎么让它能干更多事」，<br />
				是<span style={{ color: colors.yellow }}>它能碰什么，以及你凭什么知道</span>。
			</motion.h2>

			<ChatSignal>💬 一句话打在聊天框：<strong style={{ color: 'rgba(255,255,255,.8)', marginLeft: 6 }}>你的 agent 现在能碰什么？</strong></ChatSignal>
		</Page>
	);
}
