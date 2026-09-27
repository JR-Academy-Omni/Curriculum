import { motion } from 'framer-motion';
import { colors, fonts, border, shadow } from '../ui';
import { Page, PageHead, Note, FS } from '../deck';

// P10 · 三类关键消息 —— 通信协议（蓝图 §8.4 / §8.5）
// deck 只放骨架字段；完整模板在 HANDOUT。
// ⚠️ blocked 是任务状态，不另造一套消息分类（§8.4 末）。

const MSG = [
	{
		tag: 'DISCOVERY', c: colors.blue,
		when: '发现会改变别人方向的证据',
		fields: ['observed', 'evidence', 'why_you_need_it'],
	},
	{
		tag: 'CONFLICT', c: colors.orange,
		when: '与别人的结论冲突',
		fields: ['claim_A / claim_B', 'evidence_A / evidence_B', 'decider_needed'],
	},
	{
		tag: 'DECISION', c: colors.green,
		when: 'Lead 裁决并指派下一步',
		fields: ['decision', 'deciding_evidence', 'owner_next', 'verification'],
	},
];

export default function L8P10_Messages() {
	return (
		<Page>
			<PageHead
				phase="talk" time="42–50 min"
				title="三类关键消息"
				sub={<>只有这三类会<strong>改变后续行动</strong>。其余都是噪音。</>}
			/>

			<div style={{ display: 'flex', gap: 20, flex: 1, minHeight: 0 }}>
				{MSG.map((m, i) => (
					<motion.div
						key={m.tag}
						initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.35, delay: 0.08 + i * 0.1 }}
						style={{ flex: 1, border, boxShadow: shadow, background: colors.white, display: 'flex', flexDirection: 'column' }}
					>
						<div style={{
							background: m.c, color: colors.white, padding: '11px 20px',
							borderBottom: border, fontFamily: fonts.mono, fontSize: 24, fontWeight: 700, letterSpacing: 1,
						}}>[{m.tag}]</div>

						<div style={{ padding: '16px 20px', borderBottom: '2px dashed #ddd' }}>
							<div style={{ fontSize: FS.note, color: '#999', letterSpacing: 1, fontWeight: 700, marginBottom: 6 }}>什么时候发</div>
							<div style={{ fontSize: 23, fontWeight: 700, color: colors.dark, lineHeight: 1.4 }}>{m.when}</div>
						</div>

						<div style={{ padding: '16px 20px', flex: 1, display: 'flex', flexDirection: 'column', gap: 9 }}>
							<div style={{ fontSize: FS.note, color: '#999', letterSpacing: 1, fontWeight: 700 }}>必填字段</div>
							{m.fields.map((f) => (
								<div key={f} style={{
									fontFamily: fonts.mono, fontSize: FS.code, color: colors.dark,
									background: '#f4f4f8', padding: '7px 12px', borderLeft: `4px solid ${m.c}`,
								}}>{f}</div>
							))}
						</div>
					</motion.div>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, delay: 0.45 }}
				style={{ display: 'flex', gap: 18 }}
			>
				<div style={{ flex: 1.4, border: `3px solid ${colors.dark}`, background: colors.white, padding: '14px 22px' }}>
					<div style={{ fontSize: 25, fontWeight: 800, color: colors.dark, lineHeight: 1.45 }}>
						传证据，不只传结论 —— 对方必须能<span style={{ background: colors.yellow, padding: '0 8px' }}>独立核对原始证据</span>。
					</div>
				</div>
				<div style={{ flex: 1, border: '3px solid #ccc', background: '#fafafa', padding: '14px 22px' }}>
					<div style={{ fontSize: 23, color: '#666', lineHeight: 1.45 }}>
						<code style={{ fontFamily: fonts.mono, fontSize: 22 }}>blocked</code> 是<strong>任务状态</strong>，
						不另造一套消息分类。阻塞时写清「缺什么、等谁」。
					</div>
				</div>
			</motion.div>

			<Note>完整消息模板（含可直接复制的字段骨架）在 <strong style={{ color: colors.dark }}>HANDOUT</strong>。</Note>
		</Page>
	);
}
