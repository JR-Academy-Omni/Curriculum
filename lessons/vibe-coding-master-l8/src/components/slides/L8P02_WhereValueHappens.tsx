import { motion } from 'framer-motion';
import { colors, border, shadow } from '../ui';
import { Page, PageHead, Verdict, Note, FS } from '../deck';

// P02 · Team 的价值发生在哪 —— 全节立论（蓝图 §1.2）+ 诚实边界（§1.3）
// ⚠️ §1.3 必须讲：不要声称「只有 Team 才能发现某个结论」。
//    一个优秀的 Lead 也能手动转发证据。Team 提供的是能力，不是唯一性。

const PROVIDES = [
	'成员拥有独立 context',
	'成员能直接互发消息',
	'全队共享任务状态',
	'发现、阻塞与任务重分配可以在工作过程中发生',
	'Lead 不必充当每一条信息的人工中转站',
];

export default function L8P02_WhereValueHappens() {
	return (
		<Page>
			<PageHead phase="talk" time="5–15 min" title="Team 的价值发生在哪" />

			<Verdict label="全节立论">
				Agent Team 的价值，不是多开几个 Agent；
				是让<span style={{ background: colors.yellow, color: colors.black, padding: '0 10px' }}>一名成员的新证据</span>，
				在任务结束前<span style={{ background: colors.yellow, color: colors.black, padding: '0 10px' }}>改变另一名成员的下一步</span>。
			</Verdict>

			<div style={{ display: 'flex', gap: 24, flex: 1, minHeight: 0 }}>
				{/* 诚实边界 —— §1.3 */}
				<motion.div
					initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4, delay: 0.15 }}
					style={{ flex: 1, border: `3px solid ${colors.orange}`, background: '#fff8e5', padding: '22px 26px' }}
				>
					<div style={{ fontSize: 23, fontWeight: 800, color: colors.orange, marginBottom: 12, letterSpacing: 1 }}>
						⚠️ 一条必须讲清的诚实边界
					</div>
					<div style={{ fontSize: FS.body, lineHeight: 1.6, color: colors.dark }}>
						Team <strong>并不会</strong>让某个结论「在结构上只有 Team 才能发现」。
						<br /><br />
						一个优秀的 Lead <strong>也可以</strong>手动收集并转发证据。
					</div>
					<div style={{ marginTop: 18, paddingTop: 16, borderTop: `2px dashed ${colors.orange}`, fontSize: 23, fontWeight: 800, color: colors.dark, lineHeight: 1.5 }}>
						所以选择 Team 是<span style={{ background: colors.orange, color: colors.white, padding: '0 8px' }}>收益与协调成本的比较</span>，
						不是能力等级判断。
					</div>
				</motion.div>

				{/* Team 真正提供的 */}
				<motion.div
					initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4, delay: 0.25 }}
					style={{ flex: 1, border, boxShadow: shadow, background: colors.white, display: 'flex', flexDirection: 'column' }}
				>
					<div style={{
						background: colors.purple, color: colors.white, padding: '10px 22px',
						borderBottom: border, fontSize: 23, fontWeight: 800,
					}}>Team 真正提供的是</div>
					<div style={{ padding: '18px 24px', display: 'flex', flexDirection: 'column', gap: 13, flex: 1, justifyContent: 'center' }}>
						{PROVIDES.map((p, i) => (
							<div key={p} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
								<span style={{ color: colors.purple, fontSize: 22, fontWeight: 900, lineHeight: 1.4 }}>·</span>
								<span style={{ fontSize: 23, lineHeight: 1.45, color: colors.dark, fontWeight: i === 4 ? 800 : 600 }}>{p}</span>
							</div>
						))}
					</div>
				</motion.div>
			</div>

			<Note>
				反过来说：<strong style={{ color: colors.dark }}>如果禁止成员直接通信，任务仍能以同样顺序、同样质量完成，就不该开 Team。</strong>
			</Note>
		</Page>
	);
}
