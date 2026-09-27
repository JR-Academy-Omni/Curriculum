import { motion } from 'framer-motion';
import { colors, border } from '../ui';
import { Page, PageHead, Code, Note } from '../deck';

/**
 * P16 · 铁律：正确的失败方式 ⭐⭐ 反转
 * 🔴 §10.1 铁律 4：这一页之前，deck 里不许出现「宁可不做」这个意思的
 *    任何表述。前面全在教「怎么让它跑下去」，这一页反过来。
 * 讲师必须点破机制：默认情况下 Agent 把「完成任务」排在「保护你的意图」
 * 前面。这句话是给它一个比完成任务优先级更高的合法退出 ——
 * 没有这个出口，它只剩绕道一条路。
 */
export default function L11P16_IronLaw() {
	return (
		<Page bg={colors.dark}>
			<PageHead phase="talk" title={<span style={{ color: colors.white }}>正确的失败方式</span>} />

			<motion.div
				initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.45 }}
				style={{
					border: `3px solid ${colors.yellow}`, boxShadow: `8px 8px 0 ${colors.red}`,
					background: colors.white, padding: '34px 40px', flexShrink: 0,
				}}
			>
				<div style={{ fontSize: 40, fontWeight: 900, lineHeight: 1.45, color: colors.black }}>
					宁可交回一句<span style={{ background: colors.yellow, padding: '0 8px' }}>「我没做，因为 X」</span>，
					<br />也不要交回一个它<span style={{ color: colors.red }}>猜着做完</span>的结果。
				</div>
			</motion.div>

			<Code label="可以直接抄进任务书的一段" size={23} style={{ flexShrink: 0 }}>
{`遇到你不确定的地方，不要猜，不要绕。
停下来，把「卡在哪、缺什么、需要谁拍板」写进回执，然后正常结束。

没做完不算失败，猜着做完才算。`}
			</Code>

			<div style={{ flex: 1 }} />

			<Note style={{ color: '#aab' }}>
				机制：默认情况下它把「完成任务」排在「保护你的意图」前面。
				这段话的作用是<strong style={{ color: colors.yellow }}>给它一个比完成任务优先级更高的合法退出</strong> ——
				没有这个出口，它只剩绕道一条路。
			</Note>
		</Page>
	);
}
