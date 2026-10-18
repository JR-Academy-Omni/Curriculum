import { motion } from 'framer-motion';
import { Page, Head, ActBadge, colors, fonts, radii } from '../deck';

/**
 * P09 · 填自己的那张表 🎯 全课核心动手，十分钟，不许压
 * 🔴 学员一定会想只填前两列。第三列的「不许空」角标是这一页的全部重点。
 */
const COLS = [
	{ h: '写到哪', s: '一类写操作', w: 1 },
	{ h: '谁批准的', s: '一个具体的角色，不是「团队同意」', w: 1.1 },
	{ h: '批准立在什么上面', s: '一封能重新打开来读的东西？还是一通电话？', w: 1.7, key: true },
	{ h: '什么时候能升级', s: '从「每次有人盯着」到「无人值守」，要什么证据', w: 1.2 },
];

export default function L14P09_FillYourOwn() {
	return (
		<Page>
			<ActBadge act={2} mode="🎯 动手" />
			<Head sub="用你们公司真实的那几行。编的公司永远答得上「这个数谁定的」，也永远不疼。">
				现在填你自己的
			</Head>

			<div style={{ display: 'flex', gap: 16, flex: 1, minHeight: 0 }}>
				{COLS.map((c, i) => (
					<motion.div
						key={c.h}
						initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.15 + i * 0.12, duration: 0.42 }}
						style={{
							flex: c.w, minWidth: 0, display: 'flex', flexDirection: 'column',
							border: `2px solid ${colors.dark}`, borderRadius: radii.panel, overflow: 'hidden',
							background: c.key ? colors.dark : colors.white,
							color: c.key ? colors.white : colors.black,
							boxShadow: c.key ? `10px 10px 0 rgba(255,222,89,.95)` : `6px 6px 0 rgba(255,222,89,.72)`,
							position: 'relative',
						}}
					>
						{c.key && (
							<div style={{
								position: 'absolute', top: 12, right: 12, zIndex: 2,
								fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, letterSpacing: 1,
								padding: '5px 10px', borderRadius: radii.label,
								background: colors.red, color: colors.white,
							}}>不许空</div>
						)}
						<div style={{ padding: '18px 18px 14px' }}>
							<div style={{
								fontFamily: fonts.heading, fontSize: c.key ? 28 : 24, fontWeight: 900,
								letterSpacing: -0.6, color: c.key ? colors.yellow : colors.black,
							}}>{c.h}</div>
							<div style={{ fontSize: 17, lineHeight: 1.5, opacity: .68, marginTop: 7 }}>{c.s}</div>
						</div>
						{/* 空行骨架 */}
						<div style={{ flex: 1, borderTop: `2px solid ${c.key ? 'rgba(255,255,255,.22)' : 'rgba(16,22,47,.16)'}` }}>
							{[0, 1, 2, 3].map(n => (
								<div key={n} style={{
									height: '25%',
									borderBottom: n < 3 ? `1px dashed ${c.key ? 'rgba(255,255,255,.16)' : 'rgba(16,22,47,.12)'}` : 'none',
									background: c.key ? 'rgba(255,222,89,.1)' : 'transparent',
								}} />
							))}
						</div>
					</motion.div>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.5 }}
				style={{ marginTop: 20, fontSize: 21, lineHeight: 1.6, color: '#5a524c' }}
			>
				💬 填完三行以上在聊天框打 <strong>1</strong>。
				<strong style={{ color: colors.red }}>第三列空着的不算</strong> ——
				写不出依据的那一行，说明那条权限其实从来没有人批过。
			</motion.div>
		</Page>
	);
}
