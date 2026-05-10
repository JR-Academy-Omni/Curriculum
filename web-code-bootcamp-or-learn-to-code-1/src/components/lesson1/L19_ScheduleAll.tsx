import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

// 颜色按图分组：粉=项目经验线 / 蓝=求职动作线 / 橙=面试线
const PINK = '#f4b5d3';
const BLUE = '#b3e0f5';
const ORANGE = '#ffd5a0';

// grid 列定义（9 周列 + 1 标签列）：
//   col 1 = label (180px)
//   col 2 = W1-4
//   col 3 = W5-8
//   col 4 = W7-8
//   col 5 = W9-10
//   col 6 = W11-12
//   col 7 = W13-16
//   col 8 = W16-20
//   col 9 = W22-26
//   col 10 = W27-52
const WEEKS = ['1-4', '5-8', '7-8', '9-10', '11-12', '13-16', '16-20', '22-26', '27-52'];

interface Bar { from: number; to: number; text: string; color: string; badge?: boolean; }
interface Lane { label: string; bars: Bar[]; }

const LANES: Lane[] = [
	{
		label: '项目经验阶段',
		bars: [
			{ from: 2, to: 10, text: 'CAREER MATE AI', color: PINK },
			{ from: 10, to: 11, text: 'P3 多段经验', color: PINK },
		],
	},
	{
		label: 'P3 经验阶段',
		bars: [
			{ from: 6, to: 7, text: 'P3', color: PINK, badge: true },
			{ from: 7, to: 10, text: '企业商业级别 AI 项目（团队）', color: PINK },
		],
	},
	{
		label: '实习经验阶段',
		bars: [
			{ from: 9, to: 11, text: '实习经验（可以多段）', color: PINK },
		],
	},
	{
		label: 'LinkedIn 运营',
		bars: [
			{ from: 3, to: 7, text: '扩大 CONNECTION · 增强 PROFILE IMPRESSION', color: BLUE },
			{ from: 7, to: 10, text: 'LINKEDIN OPEN TO WORK', color: BLUE },
		],
	},
	{
		label: '投递简历',
		bars: [
			{ from: 3, to: 6, text: 'JUNIOR / GRADUATE 见到就投', color: BLUE },
			{ from: 6, to: 9, text: '5 次/天 (MID)', color: BLUE },
			{ from: 9, to: 11, text: '集中更大范围投递', color: BLUE },
		],
	},
	{
		label: '修改简历 (1v1)',
		bars: [
			{ from: 6, to: 7, text: '第一次修改', color: BLUE },
			{ from: 7, to: 9, text: '多次修改 · 反复迭代', color: BLUE },
		],
	},
	{
		label: '工作内推',
		bars: [
			{ from: 8, to: 10, text: '内推阶段 · 内推简历库', color: BLUE },
		],
	},
	{
		label: '面试准备',
		bars: [
			{ from: 7, to: 10, text: '面试资源 · 找内推 · PAIRING · 故事话术', color: ORANGE },
		],
	},
	{
		label: '面试辅导',
		bars: [
			{ from: 8, to: 10, text: '面试辅导', color: ORANGE },
		],
	},
];

export default function L19_ScheduleAll() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '96%', maxWidth: 1720, padding: '22px 28px' }}>
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 14 }}
				>
					<div style={{
						display: 'inline-block', padding: '5px 12px',
						background: colors.indigo, color: colors.white,
						fontFamily: fonts.mono, fontSize: 16, fontWeight: 900, letterSpacing: 2,
						border, boxShadow: shadowSm, marginBottom: 10,
					}}>
						SCHEDULE · P3 与授课并行
					</div>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 52, fontWeight: 900,
						letterSpacing: -2, lineHeight: 1, color: colors.black,
					}}>
						不是"上完课才做项目" · <span style={{ color: colors.indigo }}>P3 / 求职动作 / 面试 全程并行</span>
					</h2>
					<div style={{
						marginTop: 6, fontFamily: fonts.body, fontSize: 19, color: '#555',
						fontWeight: 600, lineHeight: 1.4,
					}}>
						到 Week 16-20 你已经在投简历 + 准备面试 · 同时还在做团队 P3 + 写代码
					</div>
				</motion.div>

				<div style={{
					background: colors.white, border, boxShadow: shadow,
					padding: '18px 22px', position: 'relative',
				}}>
					{/* Header row: 空 + 9 个 week 标签 */}
					<div style={{
						display: 'grid', gridTemplateColumns: '180px repeat(9, 1fr) 80px',
						gap: 4, marginBottom: 8, paddingBottom: 8, borderBottom: `2px solid ${colors.black}`,
					}}>
						<div />
						{WEEKS.map((w) => (
							<div key={w} style={{
								fontFamily: fonts.mono, fontSize: 14, fontWeight: 800,
								color: '#666', textAlign: 'center', letterSpacing: 1,
							}}>
								WEEK<br />{w}
							</div>
						))}
						<div style={{
							fontFamily: fonts.mono, fontSize: 14, fontWeight: 900,
							color: PINK, textAlign: 'center', letterSpacing: 2,
						}}>
							→
						</div>
					</div>

					{/* 9 个 lane */}
					{LANES.map((lane, li) => (
						<motion.div
							key={lane.label}
							initial={{ opacity: 0, x: -10 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.3, delay: 0.15 + li * 0.04 }}
							style={{
								display: 'grid',
								gridTemplateColumns: '180px repeat(9, 1fr) 80px',
								gap: 4,
								alignItems: 'center',
								minHeight: 38,
								borderBottom: li < LANES.length - 1 ? `1px solid #ece4d8` : 'none',
								padding: '4px 0',
							}}
						>
							<div style={{
								fontFamily: fonts.body, fontSize: 17, fontWeight: 800,
								color: colors.black, paddingRight: 8, lineHeight: 1.2,
							}}>
								{lane.label}
							</div>

							{lane.bars.map((bar, bi) => (
								<div
									key={bi}
									style={{
										gridColumn: `${bar.from} / ${bar.to}`,
										background: bar.color,
										border: `2px solid ${colors.black}`,
										borderRadius: bar.badge ? 6 : 22,
										padding: bar.badge ? '4px 8px' : '6px 12px',
										fontFamily: bar.badge ? fonts.mono : fonts.body,
										fontSize: bar.badge ? 16 : 12,
										fontWeight: 900,
										color: colors.black,
										textAlign: 'center',
										whiteSpace: 'nowrap',
										overflow: 'hidden',
										textOverflow: 'ellipsis',
										boxShadow: '2px 2px 0 rgba(0,0,0,0.18)',
										letterSpacing: bar.badge ? 1 : 0.2,
									}}
								>
									{bar.text}
								</div>
							))}

							{/* 最右一列 OFFER 标 */}
							{li === 0 && (
								<div style={{
									gridColumn: '11 / 12',
									gridRow: `1 / span ${LANES.length}`,
									background: PINK,
									border: `3px solid ${colors.black}`,
									borderRadius: 8,
									padding: '20px 6px',
									fontFamily: fonts.heading, fontSize: 28, fontWeight: 900,
									color: colors.black, letterSpacing: 4, textAlign: 'center',
									writingMode: 'vertical-rl' as const,
									textOrientation: 'mixed' as const,
									alignSelf: 'stretch',
									display: 'flex', alignItems: 'center', justifyContent: 'center',
									boxShadow: '4px 4px 0 #000',
								}}>
									OFFER
								</div>
							)}
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.7 }}
					style={{
						marginTop: 16,
						display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12,
					}}
				>
					{[
						{ k: 'Week 1-10', l: '主课 + CareerMate 项目', s: '同时建 LinkedIn / 投简历' },
						{ k: 'Week 11-20', l: 'P3 团队真项目', s: '简历 1v1 / 内推 / 面试 PAIRING 同步开始' },
						{ k: 'Week 22-52', l: '集中投递 + 面试 + 实习', s: '12 个月 Career Support 跟到拿 offer' },
					].map((m) => (
						<div key={m.l} style={{
							background: colors.dark, color: colors.white,
							border, boxShadow: shadowSm, padding: '12px 16px',
						}}>
							<div style={{
								fontFamily: fonts.heading, fontSize: 22, fontWeight: 900,
								color: colors.yellow, letterSpacing: -0.5, lineHeight: 1.1,
							}}>
								{m.k}
							</div>
							<div style={{
								fontFamily: fonts.body, fontSize: 17, color: colors.white,
								fontWeight: 700, marginTop: 4, lineHeight: 1.3,
							}}>
								{m.l}
							</div>
							<div style={{
								fontFamily: fonts.mono, fontSize: 14, color: 'rgba(255,255,255,0.6)',
								fontWeight: 600, marginTop: 4, lineHeight: 1.3,
							}}>
								{m.s}
							</div>
						</div>
					))}
				</motion.div>
			</div>
		</Slide>
	);
}
