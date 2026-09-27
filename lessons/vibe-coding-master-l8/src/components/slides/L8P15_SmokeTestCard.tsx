import { motion } from 'framer-motion';
import { colors, fonts, border, shadow } from '../ui';
import { Page, PageHead, PracticeBoard, Note } from '../deck';

// P15 · Smoke test 验收卡（蓝图 §6.2 / §10 的 70–76 分钟）
// 🚫 实践页：不出现案例答案。这里做的还是 PING/PONG，不碰正式案例。
// ⚠️ §10.1-3：最小 Team 验证不过，不进入正式 Lab。

export default function L8P15_SmokeTestCard() {
	return (
		<Page>
			<PageHead
				phase="do" time="70–76 min"
				title="Smoke test 验收卡"
				sub={<>三条<strong>全过</strong>才进正式 Lab。过不了就先修，不要硬着头皮往下走。</>}
			/>

			<PracticeBoard
				doWhat={
					<>
						在你刚建好的 Team 上跑一次通信验证 —— <strong>还不是正式案例</strong>：
						<div style={{ margin: '14px 0' }}>
							<div style={{ border: `3px solid ${colors.black}`, background: colors.dark, color: '#e8e8f0', padding: '14px 18px', fontFamily: fonts.mono, fontSize: 22, lineHeight: 1.6 }}>
								A → B：PING<br />
								B → A：PONG<br />
								B：把共享任务标为 completed
							</div>
						</div>
						然后回到 Lead 视角，确认它<strong>看得到</strong>任务状态变化。
						<br /><br />
						<strong style={{ color: colors.red }}>消息必须由你自己发</strong>，不能让 Lead 代转。
					</>
				}
				criteria={[
					'A 的消息真的出现在 B 的会话里',
					'B 回复了，且 A 能看到',
					'共享任务状态发生过变化',
					'Lead 看得到这次状态变化',
				]}
				stopAt="76 min"
				warn={<>只有 <strong>Lead ↔ 成员</strong> 的往返 → 那是 Subagent，<strong style={{ color: colors.red }}>不算 Team</strong>。</>}
			/>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, delay: 0.3 }}
				style={{ display: 'flex', gap: 16, alignItems: 'center', border, boxShadow: shadow, background: colors.white, padding: '14px 24px' }}
			>
				<span style={{
					background: colors.red, color: colors.white, padding: '6px 16px',
					fontSize: 22, fontWeight: 800, whiteSpace: 'nowrap',
				}}>课堂纪律</span>
				<span style={{ fontSize: 24, fontWeight: 800, color: colors.dark, lineHeight: 1.4 }}>
					Smoke test 不过，<span style={{ background: colors.yellow, padding: '0 8px' }}>不进入正式 Lab</span>。
				</span>
				<span style={{ marginLeft: 'auto', fontFamily: fonts.mono, fontSize: 22, color: '#888' }}>
					过不了 → 举手换备用实验环境
				</span>
			</motion.div>

			<Note>这一步的产物要留：<strong style={{ color: colors.dark }}>成员名单截图 + 任务状态截图 + A→B 消息</strong>，它们是过关证据的前三项。</Note>
		</Page>
	);
}
