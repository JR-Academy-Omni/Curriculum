import { motion } from 'framer-motion';
import { colors, fonts, border, shadow } from '../ui';
import { Page, PageHead, PracticeBoard, FS } from '../deck';

// P18 · Conflict → Decision（蓝图 §8.4 / §9.6 · 99–113 分钟）
// 🚫 实践页纪律：**只显示消息和验收格式**，不显示案例答案。
//    这里的 DECISION 骨架是空字段，学员自己填。

export default function L8P18_ConflictToDecision() {
	return (
		<Page>
			<PageHead
				phase="do" time="99–113 min"
				title="Conflict → Decision → 外部验收"
				sub={<>Lead 收口。<strong>不要采用多数意见，也不要把 completed 当作验收。</strong></>}
			/>

			<div style={{ display: 'flex', gap: 18, flex: 1, minHeight: 0 }}>
				{/* 左：两个格式骨架（只有字段，没有答案） */}
				<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
					<motion.div
						initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.35, delay: 0.08 }}
						style={{ border, boxShadow: shadow, background: colors.dark, flex: 1 }}
					>
						<div style={{
							background: colors.orange, color: colors.white, padding: '8px 18px',
							fontFamily: fonts.mono, fontSize: FS.note, fontWeight: 700, letterSpacing: 1.4,
							borderBottom: `3px solid ${colors.black}`,
						}}>[CONFLICT]</div>
						<pre style={{
							margin: 0, padding: '14px 18px', color: '#e8e8f0',
							fontFamily: fonts.mono, fontSize: FS.code, lineHeight: 1.7, whiteSpace: 'pre-wrap',
						}}>{`claim_A: ______
claim_B: ______
evidence_A: ______
evidence_B: ______
decider_needed: ______`}</pre>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.35, delay: 0.18 }}
						style={{ border, boxShadow: shadow, background: colors.dark, flex: 1.25 }}
					>
						<div style={{
							background: colors.green, color: colors.black, padding: '8px 18px',
							fontFamily: fonts.mono, fontSize: FS.note, fontWeight: 700, letterSpacing: 1.4,
							borderBottom: `3px solid ${colors.black}`,
						}}>[DECISION]</div>
						<pre style={{
							margin: 0, padding: '14px 18px', color: '#e8e8f0',
							fontFamily: fonts.mono, fontSize: FS.code, lineHeight: 1.7, whiteSpace: 'pre-wrap',
						}}>{`decision: ______
deciding_evidence: ______
owner_next: ______
verification: ______
unchecked_scope: ______`}</pre>
					</motion.div>
				</div>

				{/* 右：Lead 验收动作 */}
				<div style={{ flex: 1.1 }}>
					<PracticeBoard
						doWhat={
							<>
								Lead 按顺序做五件事：
								<ol style={{ margin: '12px 0 0 22px', fontSize: 23, lineHeight: 1.75, color: '#444' }}>
									<li>列出 A、B、C 的关键 claim 与<strong>原始证据</strong></li>
									<li>指出冲突或证据缺口</li>
									<li>按 <strong>HANDOUT 的 Lead 验收 Prompt</strong>，用<strong>具体输入</strong>独立核对</li>
									<li>检查候选结论能否解释用户症状的<strong>每一个</strong>细节</li>
									<li>输出 <span style={{ fontFamily: fonts.mono }}>[DECISION]</span></li>
								</ol>
							</>
						}
						criteria={[
							'deciding_evidence 不是「大家都同意」',
							'验收动作来自成员自述之外',
							'未检查范围被明确写出来',
							'证据不足时，decision 写「无法判断 + 缺什么」',
						]}
						stopAt="113 min"
					/>
				</div>
			</div>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, delay: 0.4 }}
				style={{ border: `3px solid ${colors.dark}`, background: colors.white, padding: '14px 24px' }}
			>
				<div style={{ fontSize: 25, fontWeight: 800, color: colors.dark, lineHeight: 1.45 }}>
					只找到根因但<strong style={{ color: colors.red }}>没有协作证据</strong>，Lab 不完整；
					有漂亮消息但<strong style={{ color: colors.red }}>没有外部验收</strong>，也不完整。
				</div>
			</motion.div>
		</Page>
	);
}
