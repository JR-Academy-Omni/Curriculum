import { motion } from 'framer-motion';
import { Page, colors, fonts } from '../deck';

/**
 * P28 · 收口（⭐⭐⭐ 独占一屏）
 *
 * 🔴🔴 PRD §0.6 铁律：本节是全系列最后一节。
 *    这一页之后【什么都没有】—— 没有下节课、没有推荐、没有二维码。
 *    讲师课上也不许在这句之后补话，除了「谢谢大家」。
 *
 * 这句话同时收掉四样：三层 scope（进不了 git 的东西作者走了就没了）、
 * 凭据不属于包、四件要说出口的决定、还在跑的定时任务。
 */
export default function L15P28_Closing() {
	return (
		<Page bg={colors.dark} style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 100px' }}>
			<motion.h2
				initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
				style={{
					fontFamily: fonts.heading, fontSize: 64, fontWeight: 900,
					lineHeight: 1.3, letterSpacing: -2, color: colors.white, maxWidth: 1340,
				}}
			>
				一套系统的真正考验，<br />
				不是它<span style={{ color: 'rgba(255,255,255,.42)' }}>跑得多好</span>，<br />
				是它的<span style={{ color: colors.yellow }}>作者离开之后</span>它还在不在。
			</motion.h2>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }}
				transition={{ delay: 2.4, duration: 1.2 }}
				style={{ marginTop: 58, fontSize: 24, lineHeight: 1.9, color: 'rgba(255,255,255,.5)', maxWidth: 1060 }}
			>
				十五节课，我们一起造了很多东西。<br />
				今天这一节，我们没有造任何新的 —— 我们只是把它们装到了一台不是你的机器上。<br />
				<span style={{ color: 'rgba(255,255,255,.78)' }}>
					因为前面十四节造的所有东西，只有在它离开你之后还能工作，才算真的造出来了。
				</span>
			</motion.div>
		</Page>
	);
}
