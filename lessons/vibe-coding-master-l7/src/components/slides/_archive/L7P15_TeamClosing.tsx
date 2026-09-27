import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P15：Agent Team 的收口 —— 任务板完成 ≠ 外部验收完成
// SoT：蓝图 §6.8「成员『已经达成一致』不是外部判据」
const TASKS = [
	{ t: '排查客户端缓存与刷新时序', o: 'A' },
	{ t: '排查服务端 token 轮换', o: 'B' },
	{ t: '复现测试环境配置差异', o: 'C' },
	{ t: '汇总根因与排除证据', o: 'Lead' },
];

const GAPS = [
	'根因结论追溯得到文件 / 行号 / 命令输出吗？',
	'另外两个假设的<strong>排除</strong>有反证，还是只是「没查到」？',
	'验收判据是不是全部真的执行过？',
	'成员没检查的范围，标出来了吗？',
];

export default function L7P15_TeamClosing() {
	return (
		<Slide bg={colors.darkBg}>
			<Inner split>
				<div style={{ flex: '0 0 46%' }}>
					<div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
						<Tag bg={colors.purple}>结构 B 的收口</Tag>
						<Tag bg={colors.red}>最危险的一刻</Tag>
					</div>
					<Title size="42px" white style={{ marginBottom: 16, lineHeight: 1.2 }}>
						任务板完成<br />
						<span style={{ color: colors.red }}>≠</span> 外部验收完成
					</Title>

					{/* 全绿任务板 */}
					<div style={{ border: `3px solid ${colors.white}`, background: 'rgba(255,255,255,0.06)' }}>
						<div style={{
							background: colors.orange, color: colors.black, padding: '8px 14px',
							fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 700, letterSpacing: 1.2,
						}}>
							共享任务板
						</div>
						<div style={{ padding: '10px 14px' }}>
							{TASKS.map((t, i) => (
								<motion.div
									key={t.t}
									initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.3, delay: 0.2 + i * 0.11 }}
									style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 0' }}
								>
									<span style={{ color: colors.green, fontSize: 16, fontWeight: 900 }}>✓</span>
									<span style={{ flex: 1, fontSize: 14.5, color: 'rgba(255,255,255,0.9)' }}>{t.t}</span>
									<span style={{ fontFamily: fonts.mono, fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{t.o}</span>
									<span style={{
										fontFamily: fonts.mono, fontSize: 11, fontWeight: 700,
										background: colors.green, color: colors.black, padding: '2px 8px',
									}}>completed</span>
								</motion.div>
							))}
						</div>
					</div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
						style={{ marginTop: 16, fontSize: 17, color: colors.yellow, fontWeight: 800, lineHeight: 1.55 }}
					>
						成员「已经达成一致」<br />不是外部判据。
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}
						style={{ marginTop: 8, fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}
					>
						成员可以在团队内交换证据、暴露矛盾、调整任务 ——
						但 <strong style={{ color: colors.white }}>Team Lead 仍要做最终收敛与验收</strong>。
					</motion.div>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.red, letterSpacing: 1.4, fontWeight: 700, marginBottom: 12 }}>
						全绿之后，Lead 还要问
					</div>
					{GAPS.map((g, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.35, delay: 0.4 + i * 0.12 }}
							style={{
								border: `3px solid ${colors.white}`, boxShadow: `5px 5px 0 ${colors.red}`,
								background: colors.white, padding: '12px 16px', marginBottom: 14,
								display: 'flex', gap: 11, alignItems: 'flex-start',
							}}
						>
							<span style={{
								flex: '0 0 auto', fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 700,
								background: colors.dark, color: colors.yellow, padding: '3px 9px',
							}}>{i + 1}</span>
							<span
								style={{ fontSize: 16, fontWeight: 600, color: colors.dark, lineHeight: 1.45 }}
								dangerouslySetInnerHTML={{ __html: g }}
							/>
						</motion.div>
					))}

					<motion.div
						initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.45, delay: 0.95 }}
						style={{
							marginTop: 6, padding: '15px 20px', background: colors.red, color: colors.white,
							border: `3px solid ${colors.white}`, boxShadow: shadow,
							fontSize: 18, fontWeight: 800, lineHeight: 1.5, textAlign: 'center',
						}}
					>
						信息流动方式变了，<br />验收责任<span style={{ color: colors.yellow }}>没有跟着流走</span>。
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
