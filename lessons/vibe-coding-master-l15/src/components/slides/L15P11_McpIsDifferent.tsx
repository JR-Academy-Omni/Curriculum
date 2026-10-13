import { motion } from 'framer-motion';
import { Page, Head, ActBadge, colors, fonts, border, radii } from '../deck';

/**
 * P11 · 第六类不一样 —— 包能带能力，不能带钥匙
 * 接第十四节第三幕（连接器与外部凭据）。
 * 🔴 轻轻放下，不展开。这是埋点，P26 离职清单第三类回收。
 */
export default function L15P11_McpIsDifferent() {
	const card = (title: string, items: string[], c: string, ok: boolean) => (
		<motion.div
			initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
			transition={{ delay: ok ? 0.2 : 0.38, duration: 0.45 }}
			style={{
				flex: 1, padding: '24px 26px', background: colors.white,
				border, borderRadius: radii.panel, boxShadow: `6px 6px 0 ${c}`,
			}}
		>
			<div style={{
				display: 'inline-block', fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, letterSpacing: 1,
				background: c, color: ok ? colors.black : colors.white, border: `2px solid ${colors.black}`,
				borderRadius: radii.label, padding: '4px 12px',
			}}>{ok ? '包带得走' : '包带不走'}</div>
			<div style={{ fontSize: 29, fontWeight: 900, marginTop: 15 }}>{title}</div>
			<ul style={{ margin: '14px 0 0', paddingLeft: 22 }}>
				{items.map(t => (
					<li key={t} style={{ fontSize: 21, color: '#555', lineHeight: 1.75 }}>{t}</li>
				))}
			</ul>
		</motion.div>
	);

	return (
		<Page>
			<ActBadge act={2} />
			<Head sub="第十四节讲过的连接器。">第六类不一样</Head>

			<div style={{ display: 'flex', gap: 22 }}>
				{card('怎么连到外面去', ['连到哪里去', '用什么方式连', '连不上的时候怎么办'], colors.teal, true)}
				{card('那把钥匙', ['账号与密码', '访问令牌', '任何一次性授权'], colors.red, false)}
			</div>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.5 }}
				style={{ marginTop: 26, fontSize: 24, lineHeight: 1.75 }}
			>
				别人拿到的是结构。<strong>钥匙他得自己准备。</strong>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.95, type: 'spring', stiffness: 170, damping: 17 }}
				style={{
					marginTop: 'auto', alignSelf: 'flex-start', padding: '20px 30px',
					background: colors.yellow, border, borderRadius: radii.panel, boxShadow: `8px 8px 0 ${colors.black}`,
				}}
			>
				<div style={{ fontFamily: fonts.heading, fontSize: 32, fontWeight: 900, lineHeight: 1.4 }}>
					一个能把钥匙一起交出去的包，<br />是你根本<span style={{ color: colors.red }}>不该</span>交出去的包。
				</div>
			</motion.div>
		</Page>
	);
}
