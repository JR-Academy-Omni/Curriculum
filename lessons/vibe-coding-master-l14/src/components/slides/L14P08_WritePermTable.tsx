import { motion } from 'framer-motion';
import { Page, Head, ActBadge, WritePermTable, colors, fonts, radii } from '../deck';

/**
 * P08 · 写权限表 ⭐⭐ 独占 · 全课核心产物 · 立论在这
 * 🔴 纪律 7：第三列视觉上必须最重。学员会想只填前两列，
 *   而第三列（批准立在什么上面）是这节课存在的理由。
 * 🔴 这一页必须让学员拍照，讲师要主动说一句。
 */
export default function L14P08_WritePermTable() {
	return (
		<Page>
			<ActBadge act={2} />
			<Head sub="每一行是一类写操作。每一行都要回答四个问题。">
				写权限不是一个开关
			</Head>

			<WritePermTable
				rows={[
					{ where: '邮箱草稿' },
					{ where: '仓库提交' },
					{ where: '工单系统' },
					{ where: '聊天通知' },
				]}
				strength={{
					strong: <>往工单系统写 —— 依据是<strong>一封能重新打开来读的邮件</strong>。任何人都能回去核。</>,
					weak: <>往聊天发通知 —— 依据是<strong>一通电话，由提出需求的人转述</strong>。⚠️ 这是一项批准在<strong>仍然算作批准</strong>的前提下，最弱的形式。</>,
				}}
			/>

			<motion.div
				initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.45 }}
				style={{
					marginTop: 'auto', padding: '18px 24px', borderRadius: radii.panel,
					background: colors.dark, color: colors.white,
					boxShadow: `9px 9px 0 rgba(56,182,255,.6)`,
				}}
			>
				<div style={{ fontFamily: fonts.mono, fontSize: 14, letterSpacing: 2, color: colors.blue, marginBottom: 8 }}>今天唯一一次点明</div>
				<div style={{ fontFamily: fonts.heading, fontSize: 38, fontWeight: 900, letterSpacing: -1.2, lineHeight: 1.3 }}>
					权限不是一个开关，是一张<span style={{ color: colors.yellow }}>一行一行批出来的表</span>。
				</div>
				<div style={{ fontSize: 21, lineHeight: 1.6, color: 'rgba(255,255,255,.66)', marginTop: 12 }}>
					真正起作用的限制，不在「谁按那个按钮」，在<strong style={{ color: colors.white }}>这项批准立在什么上面</strong>。
					后者读者可以核查，按钮不能。
				</div>
			</motion.div>
		</Page>
	);
}
