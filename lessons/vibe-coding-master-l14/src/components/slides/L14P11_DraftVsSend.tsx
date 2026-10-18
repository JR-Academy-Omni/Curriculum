import { Page, Head, ActBadge, TwoCol, colors, radii } from '../deck';
import { motion } from 'framer-motion';

/**
 * P11 · 草稿 / 发送 / 提交，三行一起讲
 * 🔴 底部那条必须写死：最容易犯的错是把第三行当第二行（不敢让它提交），
 *   或者把第一行当第二行（不敢让它起草）。两种错都会让这套东西没法用。
 */
export default function L14P11_DraftVsSend() {
	return (
		<Page>
			<ActBadge act={2} />
			<Head sub="一个具体到可以直接抄的判例。这三行必须一起讲，拆开讲就会出错。">
				起草和发送之间那条线
			</Head>

			<TwoCol
				head={['这个行为', '判定，以及为什么']}
				rows={[
					[
						<strong style={{ fontSize: 23 }}>在操作者自己的邮箱里建一封草稿</strong>,
						<><strong style={{ color: colors.green }}>算起草，可以做。</strong><br />它没到任何人手里，移动之前可见，<strong>不可逆那一步由人执行</strong>。</>,
					],
					[
						<strong style={{ fontSize: 23 }}>把它发出去</strong>,
						<><strong style={{ color: colors.red }}>禁止。</strong><br />不可逆，而且已经到了别人那里。</>,
					],
					[
						<strong style={{ fontSize: 23 }}>往仓库提交一个文件</strong>,
						<><strong style={{ color: colors.blue }}>不触发通信禁令。</strong><br />但它是归档，受另一条留存规则管。</>,
					],
				]}
			/>

			<motion.div
				initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.45 }}
				style={{
					marginTop: 'auto', padding: '20px 24px', borderRadius: radii.panel,
					background: colors.dark, color: colors.white, boxShadow: `9px 9px 0 rgba(56,182,255,.55)`,
					fontSize: 24, lineHeight: 1.6,
				}}
			>
				最容易犯的错是<strong style={{ color: colors.yellow }}>把第三行当成第二行</strong>（不敢让它提交），
				或者<strong style={{ color: colors.yellow }}>把第一行当成第二行</strong>（不敢让它起草）。
				<br />
				<strong>两种错都会让这套东西没法用</strong> —— 一个什么都不敢碰的 agent，和没有 agent 是一样的。
			</motion.div>
		</Page>
	);
}
