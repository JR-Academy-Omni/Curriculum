import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P11：Subagent 的收口 —— 三份完成回执 → Hub 汇总矩阵
// SoT：蓝图 §9.4 汇总矩阵 + §6.8 四个必答问题
const COLS = ['范围', '关键结论', '证据', '冲突 / 缺口', '主 Agent 决定'];
const SCOPES = [
	{ s: 'API', c: colors.blue },
	{ s: 'Client', c: colors.green },
	{ s: 'Config / Test', c: colors.orange },
];

const QUESTIONS = [
	'三路任务覆盖了原问题的全部范围吗？',
	'两条结论是否互相矛盾？',
	'每条关键结论是否能追溯到文件、行号、命令输出或测试？',
	'哪些地方没有检查、无法验证或只是假设？',
];

export default function L7P14_SummaryMatrix() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', justifyContent: 'center', gap: 0 }}>
				<div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
					<Tag bg={colors.blue}>结构 A 的收口</Tag>
				</div>
				<Title size="40px" style={{ marginBottom: 6 }}>
					三份完成回执 → <span style={{ background: colors.yellow, padding: '0 8px' }}>一张汇总矩阵</span>
				</Title>
				<p style={{ fontSize: 17, color: '#555', fontWeight: 600, marginBottom: 16 }}>
					<span style={{ color: colors.red, fontWeight: 800 }}>不允许</span>把三份报告直接拼起来 —— 拼接不会暴露冲突和缺口，矩阵才会。
				</p>

				<div style={{ display: 'flex', gap: 22, alignItems: 'flex-start' }}>
					<div style={{ flex: 1.35 }}>
						{/* 表头 */}
						<div style={{ display: 'flex', background: colors.dark, color: colors.white, border, borderBottom: 'none' }}>
							{COLS.map((c, i) => (
								<div key={c} style={{
									flex: i === 0 ? '0 0 122px' : 1, padding: '9px 12px',
									fontFamily: fonts.mono, fontSize: 11.5, letterSpacing: 1.2, fontWeight: 700,
									borderLeft: i > 0 ? '2px solid rgba(255,255,255,0.2)' : 'none',
									color: i === 4 ? colors.yellow : colors.white,
								}}>{c}</div>
							))}
						</div>
						{/* 表体 */}
						<div style={{ border, boxShadow: shadow, background: colors.white }}>
							{SCOPES.map((r, i) => (
								<motion.div
									key={r.s}
									initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.35, delay: 0.15 + i * 0.12 }}
									style={{ display: 'flex', borderBottom: i < SCOPES.length - 1 ? '2px solid #eee' : 'none', height: 66 }}
								>
									<div style={{ flex: '0 0 122px', padding: '10px 12px', display: 'flex', alignItems: 'center' }}>
										<span style={{ fontFamily: fonts.mono, fontSize: 13.5, fontWeight: 700, background: r.c, color: colors.white, padding: '4px 10px' }}>{r.s}</span>
									</div>
									{[1, 2, 3, 4].map((n) => (
										<div key={n} style={{ flex: 1, borderLeft: '2px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
											<span style={{ width: '62%', height: 2, background: '#e2e2e2' }} />
										</div>
									))}
								</motion.div>
							))}
						</div>
						<motion.div
							initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
							style={{ marginTop: 12, fontSize: 14.5, color: '#666', lineHeight: 1.55 }}
						>
							最后一列是<strong style={{ color: colors.dark }}>主 Agent 的活</strong>：矩阵填满不等于收口，
							要有人对冲突和缺口做决定。
						</motion.div>
					</div>

					<div style={{ flex: 1 }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.red, letterSpacing: 1.4, fontWeight: 700, marginBottom: 10 }}>
							汇总必须回答的四个问题
						</div>
						{QUESTIONS.map((q, i) => (
							<motion.div
								key={q}
								initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.35, delay: 0.4 + i * 0.11 }}
								style={{ display: 'flex', gap: 11, alignItems: 'flex-start', marginBottom: 11 }}
							>
								<span style={{
									flex: '0 0 auto', fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 700,
									background: colors.dark, color: colors.yellow, padding: '4px 9px',
								}}>{i + 1}</span>
								<span style={{ fontSize: 16, fontWeight: 600, color: colors.dark, lineHeight: 1.45 }}>{q}</span>
							</motion.div>
						))}

						<motion.div
							initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.9 }}
							style={{
								marginTop: 8, padding: '13px 16px', background: colors.dark, color: colors.white,
								border, boxShadow: shadow, fontSize: 16.5, fontWeight: 800, lineHeight: 1.5,
							}}
						>
							多 Agent 改变的是<span style={{ color: colors.yellow }}>信息怎样流动</span>，
							不会转移<span style={{ color: colors.yellow }}>最终验收责任</span>。
						</motion.div>
					</div>
				</div>
			</Inner>
		</Slide>
	);
}
