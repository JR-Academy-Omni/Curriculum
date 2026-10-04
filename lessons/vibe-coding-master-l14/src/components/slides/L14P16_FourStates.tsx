import { motion } from 'framer-motion';
import { Page, Head, ActBadge, FourStates, colors, fonts, radii } from '../deck';

/**
 * P16 · 四态结果模型 ⭐⭐ 独占
 * 🔴 failed 那一格最大最刺眼 —— 它是收口第一条静默失败的来源。
 * 🔴 底部那条规则是全页的操作要点：分支判断看错误，不看结果集长度。
 */
export default function L14P16_FourStates() {
	return (
		<Page>
			<ActBadge act={3} />
			<Head sub="结果不能只有「有」和「没有」两种。工具报错和空结果，是两件完全不同的事。">
				它必须能说出四种话
			</Head>

			<FourStates states={[
				{ key: 'ok', meaning: '成功，确实找到了东西', report: '报 n 条' },
				{ key: 'zero', meaning: '成功，而且确实是空的', report: '报 0（真零）' },
				{ key: 'partial', meaning: '成功了，但没拿全', report: '报 n，标不完整' },
				{ key: 'failed', meaning: '重试之后仍然失败', report: '报 FAILED，绝不报 0', danger: true },
			]} />

			<motion.div
				initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.45 }}
				style={{
					marginTop: 28, padding: '16px 22px', borderRadius: radii.card,
					border: `2px solid ${colors.dark}`, background: colors.yellow,
					fontSize: 26, fontWeight: 900, fontFamily: fonts.heading, letterSpacing: -0.8,
				}}
			>
				规则：分支判断看<span style={{ textDecoration: 'underline' }}>错误</span>，不看<span style={{ textDecoration: 'underline' }}>结果集长度</span>。
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.5 }}
				style={{ marginTop: 18, fontSize: 21, lineHeight: 1.65, color: '#5a524c' }}
			>
				还有一条配套的：<strong>每次连接失败的输出里必须有三件事</strong> ——
				哪个连接挂了（而且说明这是认证问题，不是没有数据）、这次没能覆盖什么（所以本次结论不成立）、
				<strong style={{ color: colors.red }}>以及恢复它的确切一步</strong>。
				最后那件通常是缺的，而缺了它，「它现在坏了」就会变成「它一直是坏的」。
			</motion.div>
		</Page>
	);
}
