import { motion } from 'framer-motion';
import { colors, border, shadow } from '../ui';
import { Page, PageHead, Note } from '../deck';

// P09 · 全节立论（蓝图 §1.2）
// 🔴 这里不许停下来讨论。学员会想聊「所以我那次失败是因为……」，
//    老师收一句「记住它，一会儿讲评时说」，往下走。
// 三句常见归因全部接回 L6：「它今天不行」不是诊断，是放弃诊断。

const BLAME = [
	{ said: '「这个模型不行」', real: '你没告诉它的那件事，它确实不知道' },
	{ said: '「我 prompt 没写好」', real: '不是措辞问题，是有一整格信息你没搬过去' },
	{ said: '「它今天不行」', real: 'L6 说过：这不是诊断，是放弃诊断' },
];

export default function L10P09_Thesis() {
	return (
		<Page>
			<PageHead phase="talk" title="所以，协作为什么会失败" />

			<motion.div
				initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.45 }}
				style={{ border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '32px 38px', flexShrink: 0 }}
			>
				<div style={{ fontSize: 44, fontWeight: 900, lineHeight: 1.4 }}>
					协作失败<span style={{ background: colors.yellow, color: colors.black, padding: '0 10px' }}>几乎从不是能力问题</span>，
					<br />
					是<span style={{ background: colors.red, padding: '0 10px' }}>信息分布</span>问题。
				</div>
			</motion.div>

			<div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1, minHeight: 0, justifyContent: 'center' }}>
				{BLAME.map((b, i) => (
					<motion.div
						key={b.said}
						initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.35, delay: 0.25 + i * 0.1 }}
						style={{ display: 'flex', alignItems: 'stretch', border, boxShadow: '4px 4px 0 #000', background: colors.white }}
					>
						<div style={{
							flex: '0 0 330px', background: '#f4f4f8', borderRight: border,
							padding: '15px 18px', fontSize: 24, fontWeight: 800, color: '#777',
							display: 'flex', alignItems: 'center',
						}}>{b.said}</div>
						<div style={{ padding: '15px 20px', fontSize: 24, lineHeight: 1.4, color: colors.dark, display: 'flex', alignItems: 'center' }}>
							{b.real}
						</div>
					</motion.div>
				))}
			</div>

			<Note>
				三句都是能力归因，三句都查不出东西。今天起，这三句先当<strong>信息分布问题</strong>查一遍。
			</Note>
		</Page>
	);
}
