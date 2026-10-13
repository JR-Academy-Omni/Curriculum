import { motion } from 'framer-motion';
import { Page, Head, ActBadge, colors, fonts, border, radii } from '../deck';

/**
 * P25 · 有一格，填不出来（⭐）
 *
 * ⚠️⚠️ 脱敏纪律（PRD §2 纪律 4、5）：
 *    只说「一套真实在运转的系统」。不点名，不说是谁的，不给任何文件数量。
 * 🔴 视觉上要让那个空格很显眼 —— 它是这一页的全部。
 * 论点：一份流程文件最大的价值，可能是它的某一格填不出来。
 */
export default function L15P25_TheEmptyOwner() {
	const row = (label: string, value: string, empty?: boolean) => (
		<div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', borderTop: `2px solid ${colors.black}` }}>
			<div style={{
				padding: '13px 20px', fontFamily: fonts.mono, fontSize: 17, fontWeight: 700,
				borderRight: `2px solid ${colors.black}`, color: '#888', background: '#faf6f2',
			}}>{label}</div>
			<div style={{
				padding: '13px 20px', fontSize: 21,
				background: empty ? colors.red : colors.white,
				color: empty ? colors.white : '#444',
				fontWeight: empty ? 900 : 400,
				fontFamily: empty ? fonts.mono : undefined,
				letterSpacing: empty ? 3 : undefined,
			}}>{value}</div>
		</div>
	);

	return (
		<Page>
			<ActBadge act={5} />
			<Head sub="一套真实在运转的系统里，每一份流程文件都有负责人。只有一份例外。">
				有一格，填不出来
			</Head>

			<motion.div
				initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.5 }}
				style={{
					border, borderRadius: radii.card, overflow: 'hidden',
					boxShadow: `8px 8px 0 rgba(255,222,89,.92)`, maxWidth: 1100,
				}}
			>
				<div style={{
					padding: '12px 20px', background: colors.dark, color: colors.white,
					fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, letterSpacing: 1,
				}}>
					一个人离开之后，怎么把他的权限收回来
				</div>
				{row('触发', '有人离开')}
				{row('步骤', '逐项回收，逐项记录')}
				{row('负责人', '（ 空 ）', true)}
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75, duration: 0.5 }}
				style={{ marginTop: 24, fontSize: 23, lineHeight: 1.75, maxWidth: 1160 }}
			>
				<strong>那顶帽子本来就没有人戴。</strong>这份文件存在的理由，就是把这件事摆到台面上。
			</motion.div>

			<motion.div
				initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 1.05, type: 'spring', stiffness: 170, damping: 17 }}
				style={{
					marginTop: 'auto', padding: '22px 32px', background: colors.yellow,
					border, borderRadius: radii.panel, boxShadow: `8px 8px 0 ${colors.black}`,
				}}
			>
				<div style={{ fontFamily: fonts.heading, fontSize: 33, fontWeight: 900, lineHeight: 1.45 }}>
					写不下去，不是你没写完。<br />
					是你找到了这个组织里<span style={{ color: colors.red }}>真正的那个洞</span>。
				</div>
			</motion.div>
		</Page>
	);
}
