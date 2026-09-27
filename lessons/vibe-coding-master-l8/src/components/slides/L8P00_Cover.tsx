import { motion } from 'framer-motion';
import { colors, fonts, border, shadow } from '../ui';
import { Page, FS } from '../deck';

// P00 · 封面 —— 明确今天亲手创建（蓝图 §12.2 / §11.1）
// 老师第一句话就是这一页的副标题，不能软化成「今天我们看看 Agent Team」。

export default function L8P00_Cover() {
	return (
		<Page style={{ justifyContent: 'center', alignItems: 'center', gap: 0 }}>
			<div style={{ textAlign: 'center', maxWidth: 1240 }}>
				<motion.div
					initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.35 }}
					style={{
						display: 'inline-block', padding: '8px 22px',
						background: colors.black, color: colors.yellow,
						fontFamily: fonts.mono, fontSize: 18, fontWeight: 700,
						letterSpacing: 3, marginBottom: 26,
					}}
				>
					VIBE CODING 大师课 · 第八节
				</motion.div>

				<motion.h1
					initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.45, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
					style={{
						fontFamily: fonts.heading, fontSize: 82, fontWeight: 900,
						lineHeight: 1.08, letterSpacing: -1, marginBottom: 14,
					}}
				>
					<span style={{ background: colors.purple, color: colors.white, padding: '0 22px', fontFamily: fonts.mono }}>
						Agent Team
					</span>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.3 }}
					style={{ fontSize: 34, fontWeight: 800, color: colors.dark, marginBottom: 34 }}
				>
					从「多开 context」到<span style={{ background: colors.yellow, padding: '0 12px' }}>共同完成任务</span>
				</motion.p>

				{/* 课程合同 —— 今天的完成标准 */}
				<motion.div
					initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.45, delay: 0.45 }}
					style={{ border, boxShadow: shadow, background: colors.white, textAlign: 'left' }}
				>
					<div style={{
						background: colors.dark, color: colors.white, padding: '12px 26px',
						borderBottom: border, fontSize: 23, fontWeight: 800, letterSpacing: 1,
					}}>
						今天的完成标准
					</div>
					<div style={{ padding: '24px 30px', fontSize: 29, fontWeight: 700, lineHeight: 1.6, color: colors.dark }}>
						不是「看过 Agent Team」，是<span style={{ background: colors.yellow, padding: '0 8px' }}>你自己创建一支</span>、
						让两个成员<span style={{ background: colors.yellow, padding: '0 8px' }}>互发一条会改变工作的消息</span>，
						并由 <span style={{ background: colors.yellow, padding: '0 8px' }}>Lead 验收结果</span>。
					</div>
				</motion.div>

				<motion.p
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.7 }}
					style={{ marginTop: 26, fontSize: FS.note, color: '#999', fontFamily: fonts.mono, letterSpacing: 1 }}
				>
					120 分钟 · 先讲后做 · 课堂仓库 star-mansions（锁定 commit） · ← → 翻页 · F 全屏
				</motion.p>
			</div>
		</Page>
	);
}
