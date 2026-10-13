import { motion } from 'framer-motion';
import { Page, ActBadge, ThreeBeats, colors, fonts, radii } from '../deck';

/**
 * P21 · 反转 ⭐⭐ 独占
 * 🔴 纪律 8：底部必须写死「这是对人工审批说的，不是对审批说的」。
 *   讲错了学员回去会把审批全撤掉。
 * 🔴 三条理由，第三条最硬、最大：被扣住的合并会让仓库说谎。
 */
export default function L14P21_Reversal() {
	return (
		<Page bg={colors.dark} style={{ justifyContent: 'center' }}>
			<ActBadge act={5} />

			<motion.h2
				initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
				style={{
					fontFamily: fonts.heading, fontSize: 50, fontWeight: 900, letterSpacing: -1.8,
					color: colors.white, lineHeight: 1.3, marginBottom: 36,
				}}
			>
				你刚才给自己的表加了审批人。<br />
				<span style={{ color: colors.red }}>那一步，多半不是保障，是失效模式。</span>
			</motion.h2>

			<ThreeBeats
				numbered
				color={colors.white}
				bg={colors.dark}
				lines={[
					<>那个按钮<span style={{ color: colors.yellow }}>从来就不是控制点</span> —— 本来就没有自动检查的话，一次为了等人而扣住的合并，增加的是延迟，不是审查</>,
					<>它<span style={{ color: colors.yellow }}>不是一次审查</span> —— 没有人真的在读那些改动。一个被执行、却从不被真正行使的步骤，会训练所有人把它当形式</>,
					<>被扣住的合并<span style={{ color: colors.red }}>会让仓库说谎</span></>,
				]}
			/>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 0.5 }}
				style={{ fontSize: 22, lineHeight: 1.6, color: 'rgba(255,255,255,.62)', marginTop: 18, paddingLeft: 40 }}
			>
				一个改动挂了三天，那三天里文件写着「只起草，不发送」，
				而实际上它已经在按一份<strong style={{ color: colors.white }}>已经合并的授权</strong>发送了。
				<strong style={{ color: colors.yellow }}>那次延迟什么也没阻止，它生产了一份有据可查的自相矛盾。</strong>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.1, duration: 0.5 }}
				style={{
					marginTop: 36, padding: '20px 26px', borderRadius: radii.panel,
					background: 'rgba(255,222,89,.14)', border: `2px solid ${colors.yellow}`,
					fontSize: 25, lineHeight: 1.6, color: colors.white,
				}}
			>
				<strong style={{ color: colors.yellow, fontFamily: fonts.heading, fontSize: 28 }}>⚠️ 这是对「人工审批」说的，不是对「审批」说的。</strong>
				<br />
				结论是：<strong>把关口放在「检查绿不绿」上，不要放在「谁点了合并」上。</strong>
				<br />
				<strong style={{ color: colors.yellow }}>检查是可核查的，按钮不是。</strong>
			</motion.div>
		</Page>
	);
}
