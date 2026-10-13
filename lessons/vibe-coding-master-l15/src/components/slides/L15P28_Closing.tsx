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

			{/* 🔴 这一页只有那一句话。
			    收口后面那段「十五节课我们造了很多东西……」是【讲师口播】，不上屏 ——
			    见 RUNSHEET P28。印在屏幕上会把那句话稀释掉。 */}
		</Page>
	);
}
