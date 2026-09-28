import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P16：完成回执 —— 统一格式 + 审一份坏回执
// SoT：蓝图 v1.0 §9.11
const RECEIPT = `status: complete | partial | blocked

## outcome
- 最终结论或交付物：______

## evidence
- 结论 → 文件 / 行号 / 命令输出 / 测试：______

## changes
- 修改过的文件：______（只读任务填 none）

## validation
- 实际运行：______
- 结果：pass / fail / not_run（原因）

## assumptions_and_gaps
- 假设：______
- 未检查：______
- 已知风险：______

## handoff
- 主 Agent 下一步需要决定或执行：______`;

const BAD = [
	{ f: 'evidence', bad: '「排查了鉴权模块，未发现异常」', why: '没有出处。哪个文件？哪一行？' },
	{ f: 'not_checked', bad: '（整段没有）', why: '你不知道它跳过了什么' },
	{ f: 'validation', bad: '「测试应该通过」', why: '「应该」= 没跑。这是 L6 的进度幻觉' },
];

export default function L7P18_Receipt() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<div style={{ flex: '0 0 47%' }}>
					<div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
						<Tag bg={colors.dark}>收</Tag>
					</div>
					<Title size="38px" style={{ marginBottom: 12 }}>
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
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.red, letterSpacing: 1.4, fontWeight: 700, marginBottom: 8 }}>
						课堂审一份反例
					</div>
					<p style={{ fontSize: 15.5, color: '#555', lineHeight: 1.6, marginBottom: 14 }}>
						这份回执读起来很顺，结论也说得通。<strong>但它一条都不可验收。</strong>
					</p>

					<div style={{ border, boxShadow: shadow, background: colors.white, marginBottom: 18 }}>
						<div style={{ display: 'flex', background: '#f2f2f2', borderBottom: '2px solid #ddd' }}>
							<div style={{ flex: '0 0 116px', padding: '8px 13px', fontFamily: fonts.mono, fontSize: 11.5, fontWeight: 700, color: '#666', letterSpacing: 1 }}>字段</div>
							<div style={{ flex: 1.1, padding: '8px 13px', fontFamily: fonts.mono, fontSize: 11.5, fontWeight: 700, color: '#666', letterSpacing: 1, borderLeft: '2px solid #ddd' }}>它写了什么</div>
							<div style={{ flex: 1, padding: '8px 13px', fontFamily: fonts.mono, fontSize: 11.5, fontWeight: 700, color: colors.red, letterSpacing: 1, borderLeft: '2px solid #ddd' }}>问题</div>
						</div>
						{BAD.map((b, i) => (
							<motion.div
								key={b.f}
								initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.35, delay: 0.3 + i * 0.13 }}
								style={{ display: 'flex', alignItems: 'stretch', borderBottom: i < BAD.length - 1 ? '2px solid #eee' : 'none' }}
							>
								<div style={{ flex: '0 0 116px', padding: '11px 13px', fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: colors.dark, display: 'flex', alignItems: 'center' }}>
									{b.f}
								</div>
								<div style={{ flex: 1.1, padding: '11px 13px', fontSize: 13.5, color: '#666', borderLeft: '2px solid #eee', display: 'flex', alignItems: 'center', lineHeight: 1.45, fontStyle: 'italic' }}>
									{b.bad}
								</div>
								<div style={{ flex: 1, padding: '11px 13px', fontSize: 13.5, color: colors.red, borderLeft: '2px solid #eee', display: 'flex', alignItems: 'center', lineHeight: 1.45, fontWeight: 600 }}>
									{b.why}
								</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.72 }}
						style={{ border, boxShadow: shadow, background: '#fff2f2', padding: '14px 17px', marginBottom: 16 }}
					>
						<div style={{ fontSize: 16.5, fontWeight: 800, color: colors.dark, lineHeight: 1.55 }}>
							把它退回到<span style={{ color: colors.red }}>「可验收」</span>为止。
						</div>
						<div style={{ marginTop: 6, fontSize: 14, color: '#666', lineHeight: 1.55 }}>
							缺 evidence、缺 not_checked、把没跑的测试写成「应该通过」——
							<strong>缺一项就不能进汇总矩阵。</strong>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.92 }}
						style={{
							padding: '14px 18px', background: colors.dark, color: colors.white,
							border, boxShadow: shadow, fontSize: 16.5, fontWeight: 700, lineHeight: 1.55, textAlign: 'center',
						}}
					>
						回执的作用不是「让它交作业」，<br />
						是<span style={{ color: colors.yellow }}>逼它把「没做什么」也说出来。</span>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
