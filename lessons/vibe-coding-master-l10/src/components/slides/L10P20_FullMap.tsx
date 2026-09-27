import { motion } from 'framer-motion';
import { colors, border, shadow } from '../ui';
import { Page, PageHead, MoveRow, Note } from '../deck';

// P20 · 全图：四条搬运 + 那条退化（蓝图 §11.2 P20「全课核心页」）
// 🔴 退化那条的箭头方向是 开放区 ──▶ 隐藏区，**不是反过来**（§20 最终检查）。
//    它是唯一一条流出开放区的，前三条都是流入。
// 收口立论落在这一页。

export default function L10P20_FullMap() {
	return (
		<Page>
			<PageHead
				phase="talk"
				title="全图：三条往里搬，一条往外漏"
				sub="记这四行就够了。四个格子的名字忘了都没关系。"
			/>

			<div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1, minHeight: 0, justifyContent: 'center' }}>
				<MoveRow from="hidden" to="开放区" verb="落盘" src="L1–L3" delay={0.05} />
				<MoveRow from="blind" to="开放区" verb="先让它说" src="L6 · L9" delay={0.13} />
				<MoveRow from="unknown" to="盲区 / 隐藏区" verb="设计实验" src="L7" delay={0.21} />

				<motion.div
					initial={{ opacity: 0 }} animate={{ opacity: 1 }}
					transition={{ duration: 0.3, delay: 0.34 }}
					style={{ height: 2, background: '#ddd', margin: '2px 0' }}
				/>

				<MoveRow from="open" to="隐藏区" verb="退化" src="Johari 里没有这条" degrade delay={0.4} />
			</div>

			<motion.div
				initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, delay: 0.55 }}
				style={{ border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '22px 28px', flexShrink: 0 }}
			>
				<div style={{ fontSize: 34, fontWeight: 900, lineHeight: 1.4 }}>
					开放区不是你<span style={{ background: colors.red, padding: '0 10px' }}>达成</span>的状态，
					是你<span style={{ background: colors.green, color: colors.black, padding: '0 10px' }}>维护</span>的状态。
				</div>
			</motion.div>

			<Note>
				前三条你都学过，只是没有名字。第四条你没学过 —— 它是从这张图里推出来的，不是从前面九节课里总结的。
			</Note>
		</Page>
	);
}
