import { motion } from 'framer-motion';
import { Page, ActBadge, ThreeBeats, colors, fonts, radii } from '../deck';

/**
 * P15 · 三连问 —— 翻车② 的点破
 * 🔴 三句一句都不能省，每句要等学员回答。第三句之后停。
 */
export default function L14P15_ZeroOrUnknown() {
	return (
		<Page bg={colors.dark} style={{ justifyContent: 'center' }}>
			<ActBadge act={3} />

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
				style={{ fontFamily: fonts.mono, fontSize: 16, letterSpacing: 2.5, color: colors.red, marginBottom: 28 }}
			>
				三句，一句一句问，每句等他们回答
			</motion.div>

			<ThreeBeats
				numbered
				color={colors.white}
				bg={colors.dark}
				lines={[
					<>它报了 <span style={{ color: colors.yellow, fontFamily: fonts.mono }}>0</span>。这个 0 是什么意思？</>,
					<>真的吗？<span style={{ color: colors.yellow }}>它查到了吗？</span></>,
					<>那它<span style={{ color: colors.red }}>凭什么</span>报 0？</>,
				]}
			/>

			<motion.div
				initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
				style={{
					marginTop: 54, padding: '26px 30px', borderRadius: radii.panel,
					background: 'rgba(255,87,87,.14)', border: `2px solid ${colors.red}`,
					fontFamily: fonts.heading, fontSize: 44, fontWeight: 900,
					color: colors.white, lineHeight: 1.35, letterSpacing: -1.4, textAlign: 'center',
				}}
			>
				<span style={{ fontFamily: fonts.mono, color: colors.yellow }}>「0」</span>
				{' '}和{' '}
				<span style={{ color: colors.yellow }}>「我不知道」</span>
				<br />被写成了同一个字。
			</motion.div>
		</Page>
	);
}
