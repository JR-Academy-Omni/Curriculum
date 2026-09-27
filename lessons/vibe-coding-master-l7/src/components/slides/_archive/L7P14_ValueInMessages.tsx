import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P14：Team 的价值发生在消息里 —— 只保留三类关键消息
// SoT：蓝图 §9.6 的三类消息记录
const MSGS = [
	{
		tag: 'DISCOVERY', color: colors.blue,
		field: '新证据是什么，它影响谁',
		eg: 'A → B：刷新请求的时间戳比 401 早 40ms，你那边的轮换窗口可能要重算。',
	},
	{
		tag: 'CONFLICT', color: colors.orange,
		field: '哪两条结论冲突，各自证据',
		eg: 'B 说轮换正常（日志 L214）；C 复现出同一窗口失败（test:auth #7）。两条都附证据，不投票。',
	},
	{
		tag: 'DECISION', color: colors.green,
		field: 'Team 如何裁决，谁继续做什么',
		eg: 'Lead：以 C 的复现为准，关闭「客户端缓存」假设；B 改查轮换的并发路径。',
	},
];

export default function L7P14_ValueInMessages() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<div style={{ flex: '0 0 36%' }}>
					<div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
						<Tag bg={colors.purple}>Lab B 讲评</Tag>
					</div>
					<Title size="40px" style={{ marginBottom: 14, lineHeight: 1.2 }}>
						Team 的价值<br />
						<span style={{ background: colors.yellow, padding: '0 8px' }}>发生在消息里</span>
					</Title>
					<p style={{ fontSize: 17, lineHeight: 1.7, color: '#444', marginBottom: 20 }}>
						成员各自的调查过程，Subagent 也能做。
						<strong style={{ color: colors.purple }}>Team 多出来的东西，全部在成员之间那几条消息上。</strong>
					</p>

					<div style={{ border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '14px 18px', marginBottom: 16 }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.yellow, letterSpacing: 1.4, fontWeight: 700, marginBottom: 7 }}>
							关键消息记录只保留三类
						</div>
						<div style={{ fontSize: 15, lineHeight: 1.6, opacity: 0.9 }}>
							不是把聊天记录全导出来。<strong>只有这三类会改变后续行动</strong>，其它都是噪音。
						</div>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.9 }}
						style={{ border, boxShadow: shadow, background: '#fff2f2', padding: '13px 16px' }}
					>
						<div style={{ fontSize: 15.5, fontWeight: 700, color: colors.dark, lineHeight: 1.55 }}>
							一条 <span style={{ fontFamily: fonts.mono, color: colors.orange }}>CONFLICT</span> 都没有的 Team，
							大概率是<span style={{ color: colors.red }}>三个不说话的 Subagent</span>。
						</div>
					</motion.div>
				</div>

				<div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16, justifyContent: 'center' }}>
					{MSGS.map((m, i) => (
						<motion.div
							key={m.tag}
							initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.42, delay: 0.2 + i * 0.18 }}
							style={{ border, boxShadow: shadow, background: colors.white }}
						>
							<div style={{ display: 'flex', alignItems: 'center', gap: 12, background: m.color, padding: '9px 16px' }}>
								<span style={{
									fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, letterSpacing: 1.5,
									color: m.color === colors.green ? colors.black : colors.white,
								}}>[{m.tag}]</span>
								<span style={{
									fontSize: 14.5, fontWeight: 700,
									color: m.color === colors.green ? colors.black : colors.white, opacity: 0.9,
								}}>{m.field}</span>
							</div>
							<div style={{
								padding: '13px 17px', fontFamily: fonts.mono, fontSize: 14, lineHeight: 1.65,
								color: '#333', borderLeft: `5px solid ${m.color}`,
							}}>
								{m.eg}
							</div>
						</motion.div>
					))}

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}
						style={{ fontSize: 13.5, color: '#888', textAlign: 'right', fontStyle: 'italic' }}
					>
						※ 例句为示意，课堂用当天真实跑出来的消息替换
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
