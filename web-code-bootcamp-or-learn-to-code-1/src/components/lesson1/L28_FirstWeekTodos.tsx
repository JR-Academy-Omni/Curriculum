import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import VideoFrame from './VideoFrame';

const TODOS = [
	{ d: 'Day 1', task: '今天 (现在) — 加微信群 + 留言自我介绍 (姓名 / 城市 / 0 → 6 个月想到哪)', done: '已发邀请' },
	{ d: 'Day 1-2', task: '装环境 — Cursor / Claude Code / Node.js 18+ / Git / GitHub 账号', done: '装好录屏发群' },
	{ d: 'Day 2-3', task: '走完 M1 Launchpad（Quest：装 Cursor + 写第一个 Prompt）', done: 'Lab 跑通即可' },
	{ d: 'Day 3-4', task: '提 PR 到 jr-academy-students Repo · README 加自己介绍', done: 'Tutor Review' },
	{ d: 'Day 4-7', task: 'M3 Web Fundamentals 头 5 节 + HTML/CSS Lab 1-3', done: '开始有产出' },
	{ d: 'Day 7', task: '直播 #1 · 2026-04-12 周日 · 7pm AEST · Office Hours Q&A', done: '日历邀请见群公告' },
];

export default function L28_FirstWeekTodos() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative', overflow: 'hidden' }}>
			<VideoFrame
				src="videos/square-2.mp4"
				width={200} height={200}
				position={{ top: 60, right: 72 }}
				rotate={-3}
				caption="DAY 1 → 7"
			/>
			<div style={{ position: 'relative', zIndex: 1, width: '94%', maxWidth: 1500, padding: '32px 48px' }}>
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 22 }}
				>
					<div style={{
						display: 'inline-block', padding: '6px 14px',
						background: colors.red, color: colors.white,
						fontFamily: fonts.mono, fontSize: 17, fontWeight: 900, letterSpacing: 2,
						border, boxShadow: shadowSm, marginBottom: 14,
					}}>
						06 · WEEK 1 CHECKLIST
					</div>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 76, fontWeight: 900,
						letterSpacing: -2, lineHeight: 1, color: colors.black,
					}}>
						离开教室前的<br />
						<span style={{
							display: 'inline-block', background: colors.yellow,
							padding: '0 18px', border: `4px solid ${colors.black}`,
							boxShadow: `6px 6px 0 ${colors.black}`, marginTop: 8,
						}}>
							7 天行动清单
						</span>
					</h2>
				</motion.div>

				<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
					{TODOS.map((t, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.35, delay: 0.2 + i * 0.07 }}
							style={{
								background: colors.white, border, boxShadow: shadowSm,
								padding: '14px 18px',
								display: 'grid', gridTemplateColumns: '110px 1fr 200px', gap: 16, alignItems: 'center',
							}}
						>
							<div style={{
								background: colors.dark, color: colors.yellow,
								fontFamily: fonts.mono, fontSize: 17, fontWeight: 900,
								letterSpacing: 1, padding: '6px 12px', textAlign: 'center',
								border: `2.5px solid ${colors.black}`,
							}}>
								{t.d}
							</div>
							<div style={{
								fontFamily: fonts.body, fontSize: 20, color: colors.black,
								fontWeight: 600, lineHeight: 1.4,
							}}>
								{t.task}
							</div>
							<div style={{
								fontFamily: fonts.mono, fontSize: 15, color: colors.green,
								fontWeight: 800, letterSpacing: 1, textAlign: 'right',
							}}>
								✓ {t.done}
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.9 }}
					style={{
						marginTop: 24, padding: '14px 24px',
						background: colors.indigo, color: colors.white,
						border, boxShadow: `6px 6px 0 ${colors.yellow}`,
						fontFamily: fonts.heading, fontSize: 22, fontWeight: 900,
						letterSpacing: -0.3, textAlign: 'center', lineHeight: 1.4,
					}}>
					不要"等一切准备好再开始" — <span style={{ background: colors.yellow, color: colors.black, padding: '0 8px', border: `2px solid ${colors.black}` }}>第一周 commit 第一行就赢了 70%</span>
				</motion.div>
			</div>
		</Slide>
	);
}
