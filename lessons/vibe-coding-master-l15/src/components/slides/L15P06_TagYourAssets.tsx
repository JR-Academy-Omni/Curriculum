import { motion } from 'framer-motion';
import { Page, Head, ActBadge, ChatSignal, colors, fonts, border, radii } from '../deck';

/**
 * P06 · 动手 回去给自己的资产表标 scope
 * 落点是学员自己发现：大部分是第一层 + 没进 git。
 * 🔴 这一页不给结论，让表自己说话。只收数字，不收内容（沿用 L10 不许要求投屏那条）。
 */
export default function L15P06_TagYourAssets() {
	return (
		<Page bg={colors.dark}>
			<ActBadge act={1} mode="动手" />
			<Head color={colors.white} sub={<span style={{ color: 'rgba(255,255,255,.6)' }}>
				回到开头那张表，给每一行标一个数字。
			</span>}>
				标你自己的那张表
			</Head>

			<div style={{ display: 'flex', gap: 18, marginTop: 10 }}>
				{[
					{ n: '1', t: '装给你自己的', c: colors.blue },
					{ n: '2', t: '跟着项目走、而且进 git 的', c: colors.teal },
					{ n: '3', t: '只是这台机器上的临时偏好', c: colors.orange },
				].map((x, i) => (
					<motion.div
						key={x.n}
						initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.15 + i * 0.13, duration: 0.45 }}
						style={{
							flex: 1, padding: '22px 24px', background: 'rgba(255,255,255,.07)',
							border: `2px solid rgba(255,255,255,.3)`, borderRadius: radii.card,
							display: 'flex', alignItems: 'center', gap: 16,
						}}
					>
						<span style={{
							width: 46, height: 46, flexShrink: 0, borderRadius: radii.pill, border,
							background: x.c, color: colors.black, display: 'flex', alignItems: 'center', justifyContent: 'center',
							fontFamily: fonts.heading, fontSize: 25, fontWeight: 900,
						}}>{x.n}</span>
						<span style={{ fontSize: 22, color: colors.white, lineHeight: 1.45 }}>{x.t}</span>
					</motion.div>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.85, type: 'spring', stiffness: 160, damping: 17 }}
				style={{
					marginTop: 46, padding: '30px 36px', background: colors.yellow,
					border, borderRadius: radii.panel, boxShadow: `8px 8px 0 ${colors.red}`,
				}}
			>
				<div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 800, letterSpacing: 2, color: '#7a6a1f' }}>
					标完之后，我只问一句
				</div>
				<div style={{ fontFamily: fonts.heading, fontSize: 46, fontWeight: 900, letterSpacing: -1.5, marginTop: 12, lineHeight: 1.3 }}>
					你那张表上，有几行是 <span style={{ color: colors.red }}>1</span>，而且<span style={{ textDecoration: 'underline', textDecorationThickness: 4 }}>没进 git</span>？
				</div>
			</motion.div>

			<ChatSignal>只发数字，不要发内容</ChatSignal>
		</Page>
	);
}
