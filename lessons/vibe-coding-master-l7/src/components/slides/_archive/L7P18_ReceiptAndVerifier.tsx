import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P18：两种结构都要收证据、做验收 —— 完成回执 + verifier
// SoT：蓝图 §9.9 完成回执 + §9.10 三件事区分表
const RECEIPT = `status: complete | partial | blocked

## outcome        最终结论或交付物
## evidence       结论 → 文件 / 行号 / 命令输出 / 测试
## changes        修改过的文件（只读任务填 none）
## validation     实际运行了什么 → pass / fail / not_run（原因）
## assumptions_and_gaps
                  假设 · 未检查 · 已知风险
## handoff        主 Agent / Lead 下一步要决定什么`;

const THREE = [
	{ act: '再完整搜索一遍', should: '通常不应该', color: colors.red, why: '等于付两次探索成本' },
	{ act: '打开关键证据、抽查路径', should: '应该', color: colors.green, why: '验证结论可追溯' },
	{ act: '执行 brief 里的测试或验收命令', should: '必须', color: colors.dark, why: '判据来自 Agent 自述之外' },
];

export default function L7P18_ReceiptAndVerifier() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<div style={{ flex: '0 0 47%' }}>
					<div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
						<Tag bg={colors.dark}>两种结构通用</Tag>
					</div>
					<Title size="36px" style={{ marginBottom: 12 }}>
						完成回执：<span style={{ background: colors.yellow, padding: '0 8px' }}>同一个格式收尾</span>
					</Title>
					<motion.pre
						initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.15 }}
						style={{
							border, boxShadow: shadow, background: colors.dark, color: '#e8e8f0',
							padding: '16px 18px', fontFamily: fonts.mono, fontSize: 13, lineHeight: 1.78,
							whiteSpace: 'pre-wrap', margin: 0,
						}}
					>
						{RECEIPT}
					</motion.pre>

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.5 }}
						style={{ marginTop: 16, border, boxShadow: shadow, background: '#fff2f2', padding: '13px 16px' }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.red, fontWeight: 700, letterSpacing: 1.2, marginBottom: 6 }}>
							课堂审一份反例
						</div>
						<div style={{ fontSize: 15, lineHeight: 1.6, color: '#444' }}>
							结论写得很顺，但<strong>没有出处</strong>、没有 <span style={{ fontFamily: fonts.mono }}>not_checked</span>、
							把没运行的测试写成「应该通过」。让学员把它退回到<strong>可验收</strong>为止。
						</div>
					</motion.div>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<Title size="36px" style={{ marginBottom: 12 }}>
						不重做探索，<span style={{ background: colors.yellow, padding: '0 8px' }}>但要独立验收</span>
					</Title>

					<div style={{ border, boxShadow: shadow, background: colors.white, marginBottom: 18 }}>
						{THREE.map((t, i) => (
							<motion.div
								key={t.act}
								initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.35, delay: 0.25 + i * 0.13 }}
								style={{ display: 'flex', alignItems: 'stretch', borderBottom: i < THREE.length - 1 ? '2px solid #eee' : 'none' }}
							>
								<div style={{ flex: 1, padding: '12px 15px', fontSize: 15, fontWeight: 600, color: colors.dark, display: 'flex', alignItems: 'center', lineHeight: 1.4 }}>
									{t.act}
								</div>
								<div style={{ flex: '0 0 92px', borderLeft: '2px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
									<span style={{
										fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 700, padding: '4px 9px',
										background: t.color, color: t.color === colors.red || t.color === colors.dark ? colors.white : colors.black,
									}}>{t.should}</span>
								</div>
								<div style={{ flex: '0 0 168px', padding: '12px 14px', borderLeft: '2px solid #eee', fontSize: 13, color: '#666', display: 'flex', alignItems: 'center', lineHeight: 1.4 }}>
									{t.why}
								</div>
							</motion.div>
						))}
					</div>

					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.blue, letterSpacing: 1.4, fontWeight: 700, marginBottom: 10 }}>
						合格 verifier 长什么样
					</div>
					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.7 }}
						style={{ border, boxShadow: shadow, background: colors.white, padding: '14px 17px', marginBottom: 14 }}
					>
						{[
							'只拿到成品、需求和验收规则 —— 不看你怎么做的',
							'逐条输出 pass / fail / cannot_determine + 证据',
							'优先只读，不替实现者顺手改代码',
							'所有必选 criterion 都 pass 才给总体 green',
						].map((s) => (
							<div key={s} style={{ display: 'flex', gap: 9, alignItems: 'flex-start', marginBottom: 7 }}>
								<span style={{ color: colors.blue, fontWeight: 900, flex: '0 0 auto' }}>▸</span>
								<span style={{ fontSize: 14.5, color: '#444', lineHeight: 1.45 }}>{s}</span>
							</div>
						))}
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }}
						style={{
							padding: '13px 17px', background: colors.dark, color: colors.white,
							border, boxShadow: shadow, fontSize: 16, fontWeight: 700, lineHeight: 1.55,
						}}
					>
						「再找一个 Agent 看看」<span style={{ color: colors.red }}>不是 verifier</span>。
						<div style={{ marginTop: 5, fontSize: 14.5, fontWeight: 500, opacity: 0.85 }}>
							独立 Agent 的价值是<span style={{ color: colors.yellow }}>补充不同视角</span>，不是制造第二份自信。
							确定性测试仍优先于模型判断；高风险内容仍需要人类验收。
						</div>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
