import { motion } from 'framer-motion';
import { colors, fonts, border, shadow } from '../ui';
import { Page, PageHead, Verdict, Note } from '../deck';

// P01 · 今天的完成标准（蓝图 §0.1 + §9.4）
// 这一页把成败判据当场交给学员，让他们有权在下课时判老师不合格。
// 🔴 这是第一幕唯一允许「讲」的一段（0–3 min，§5 例外条款）。
// 🔴 仍然不许出现四格。

export default function L10P01_Contract() {
	return (
		<Page>
			<PageHead
				phase="talk"
				title={<>今天的完成标准：<span style={{ background: colors.yellow, padding: '0 10px' }}>一段你回去真会用的话</span></>}
			/>

			<div style={{ display: 'flex', gap: 22, flex: 1, minHeight: 0 }}>
				<motion.div
					initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4 }}
					style={{ flex: 1, border, boxShadow: shadow, background: colors.white, display: 'flex', flexDirection: 'column' }}
				>
					<div style={{ background: colors.green, color: colors.black, padding: '11px 20px', borderBottom: border, fontSize: 22, fontWeight: 900 }}>
						✅ 这节课成立
					</div>
					<div style={{ padding: '24px 26px', fontSize: 27, fontWeight: 700, lineHeight: 1.55, color: colors.dark, flex: 1 }}>
						下课的时候，你手上有<span style={{ background: colors.yellow, padding: '0 8px' }}>一段话</span>。
						<div style={{ fontSize: 23, fontWeight: 500, color: '#666', marginTop: 14, lineHeight: 1.55 }}>
							你回去做下一个真实任务时，会把它粘贴进去的那段话。不是四个抽象问题，是你自己的措辞。
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4, delay: 0.12 }}
					style={{ flex: 1, border, boxShadow: shadow, background: colors.white, display: 'flex', flexDirection: 'column' }}
				>
					<div style={{ background: colors.red, color: colors.white, padding: '11px 20px', borderBottom: border, fontSize: 22, fontWeight: 900 }}>
						❌ 这节课失败
					</div>
					<div style={{ padding: '24px 26px', fontSize: 27, fontWeight: 700, lineHeight: 1.55, color: colors.dark, flex: 1 }}>
						你离场时的感觉是
						<span style={{ background: colors.red, color: colors.white, padding: '0 8px' }}>「思路更清楚了」</span>。
						<div style={{ fontSize: 23, fontWeight: 500, color: '#666', marginTop: 14, lineHeight: 1.55 }}>
							那是听讲座的感觉。听讲座不改变你回去之后的动作，所以那等于今天白来。
						</div>
					</div>
				</motion.div>
			</div>

			<Verdict label="判据在你手上，不在我手上">
				一个学完的人，回去做下一个真实任务时，
				<span style={{ background: colors.yellow, color: colors.black, padding: '0 8px' }}>动作和没学的人不一样吗</span>
				？下课时你自己回答这句。
			</Verdict>

			<Note>
				前九节我给你的是动作。今天给你的是一张能自己推出动作的图 —— 但它只在你回去真的用它的时候才算数。
			</Note>
		</Page>
	);
}
