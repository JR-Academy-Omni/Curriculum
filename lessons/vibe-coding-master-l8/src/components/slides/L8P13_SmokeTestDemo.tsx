import { motion } from 'framer-motion';
import { colors, fonts, border, shadow } from '../ui';
import { Page, PageHead, Code, Note } from '../deck';

// P13 · Smoke test：四个证明 —— 老师演示（蓝图 §6.2 / §11.5）
// ⚠️ 老师用一次性演示 Team，**不读正式案例文件**，演示完立即清理，
//    不让它污染正式 Lab。这一页只展示「要看到哪四个证据」，不含案例内容。

const PROOFS = [
	{ n: '1', k: '成员名单', d: 'Lead 之外至少两名 teammate，名字与指令一致', must: true },
	{ n: '2', k: '共享任务', d: '创建一条任务，由某名 teammate 认领并改变状态', must: true },
	{ n: '3', k: '直接消息', d: 'A 发给 B，B 的会话明确收到并回复', must: true },
	{ n: '4', k: 'Lead 视角', d: 'Lead 能看到任务状态，并收到抄送结论', must: false },
];

export default function L8P13_SmokeTestDemo() {
	return (
		<Page>
			<PageHead
				phase="watch" time="50–55 min"
				title="Smoke test：四个证明"
				sub={<>老师演示一次。<strong>1、2、3 全通过，才进入正式 Lab。</strong></>}
			/>

			<div style={{ display: 'flex', gap: 22, flex: 1, minHeight: 0 }}>
				<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
					{PROOFS.map((p, i) => (
						<motion.div
							key={p.n}
							initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.3, delay: 0.08 + i * 0.09 }}
							style={{
								display: 'flex', border, background: colors.white, flex: 1,
								boxShadow: p.must ? '5px 5px 0 #000' : '4px 4px 0 #000',
								outline: p.must ? `3px solid ${colors.green}` : undefined,
								outlineOffset: p.must ? 3 : undefined,
							}}
						>
							<div style={{
								flexShrink: 0, width: 54, background: p.must ? colors.green : '#aaa',
								color: p.must ? colors.black : colors.white,
								display: 'flex', alignItems: 'center', justifyContent: 'center',
								fontFamily: fonts.mono, fontSize: 26, fontWeight: 700,
							}}>{p.n}</div>
							<div style={{ flex: 1, padding: '12px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
								<div style={{ fontSize: 25, fontWeight: 800, color: colors.dark }}>
									{p.k}
									{!p.must && <span style={{ fontSize: 17, color: '#999', fontWeight: 600, marginLeft: 10 }}>（加分，不卡关）</span>}
								</div>
								<div style={{ fontSize: 22, color: '#666', lineHeight: 1.4, marginTop: 3 }}>{p.d}</div>
							</div>
						</motion.div>
					))}
				</div>

				<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
					<Code label="老师演示用的一次性 Team · 不碰案例文件">{`创建两个 teammates：alpha 和 beta。
创建共享任务「确认团队通信可用」。
让 alpha 认领任务并给 beta 发消息：
  PING alpha-to-beta
让 beta 收到后回复：
  PONG beta-to-alpha
并把任务标为 completed。
先不要做其他工作。`}</Code>

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.35, delay: 0.4 }}
						style={{
							border: `3px solid ${colors.red}`, background: '#fff2f2',
							padding: '16px 22px', flex: 1, display: 'flex', alignItems: 'center',
						}}
					>
						<div style={{ fontSize: 23, lineHeight: 1.55, color: colors.dark }}>
							演示只看 <strong>成员 · 任务 · PING · PONG</strong> 四个证据。
							<br /><br />
							演示结束<strong style={{ color: colors.red }}>立即清理</strong>，
							不让它污染正式 Lab。
						</div>
					</motion.div>
				</div>
			</div>

			<Note>
				⚠️ 成员创建了但<strong style={{ color: colors.dark }}>不能互发消息</strong> → 按 Subagent 处理，修复设置后重建，本节<strong>不算过关</strong>（§14）。
			</Note>
		</Page>
	);
}
