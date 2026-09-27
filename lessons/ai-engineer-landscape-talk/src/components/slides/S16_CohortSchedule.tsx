import { useState } from 'react';
import { motion } from 'framer-motion';
import { Slide, Title, CountUp, colors, fonts, border, shadow, shadowSm } from '../ui';
import { COHORT_STATS, COHORT_TRACKS, COHORT_QUOTE, COHORT_GROWTH, COHORT_PROJECT, COHORT_SOURCE, COHORT_WEEKS, MILESTONES } from '../../data/cohort7Schedule';

// 上一页的 10 个 Phase 是知识范围；这一页是真正的 13 周排课：每周理论 + Lab，一个项目长成 enterprise 级 Agent 系统。
// 悬停 / 点击某一周：右侧“系统”只亮到这一周为止已经搭好的部分。
export default function S16_CohortSchedule() {
	const [pinned, setPinned] = useState<number | null>(null);
	const [hover, setHover] = useState<number | null>(null);
	const focus = hover ?? pinned;
	const milestoneOf = (w: number) => MILESTONES.findIndex((m) => w >= m.from && w <= m.to);

	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '100%', height: '100%', padding: '34px 64px 54px', display: 'flex', flexDirection: 'column', gap: 10 }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
					style={{ display: 'flex', alignItems: 'center', gap: 14, height: 56 }}>
					<div style={{ marginRight: 'auto' }}>
						<span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, padding: '3px 10px', background: colors.yellow, border: `2px solid ${colors.black}` }}>
							第七期 · 真正的排课
						</span>
						<Title size="30px" style={{ marginTop: 6, whiteSpace: 'nowrap' }}>每周一场理论，一场 Lab 把它做出来</Title>
					</div>
					{COHORT_STATS.map((s) => (
						<div key={s.label} style={{ padding: '4px 14px', background: colors.white, border, boxShadow: shadowSm, textAlign: 'center' }}>
							<CountUp value={s.value} duration={1.2} suffix={s.suffix} style={{ fontFamily: fonts.mono, fontSize: 28, fontWeight: 700, lineHeight: 1.1 }} />
							<div style={{ fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap' }}>{s.label}</div>
						</div>
					))}
					<div style={{ width: 150, flex: 'none' }} />
				</motion.div>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.15 }}
					style={{ fontSize: 17, fontWeight: 500, lineHeight: 1.4, margin: 0 }}>
					{COHORT_QUOTE}
				</motion.p>

				<div style={{ flex: 1, minHeight: 0, display: 'flex', gap: 28 }}>
					{/* 13 周双线 */}
					<div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 4 }} onMouseLeave={() => setHover(null)}>
						<div style={{ display: 'grid', gridTemplateColumns: '58px 1fr 34px 1fr', alignItems: 'center', height: 24, fontFamily: fonts.mono, fontSize: 13, fontWeight: 700 }}>
							<span />
							<span>{COHORT_TRACKS.theory}</span>
							<span />
							<span style={{ color: colors.red }}>{COHORT_TRACKS.practice}</span>
						</div>
						{COHORT_WEEKS.map((w, i) => {
							const m = MILESTONES[milestoneOf(w.week)];
							const on = focus === w.week;
							const future = focus !== null && w.week > focus;
							return (
								<motion.div key={w.week}
									initial={{ opacity: 0, x: -24 }} animate={{ opacity: future ? 0.3 : 1, x: 0 }}
									transition={{ duration: 0.3, delay: focus === null ? 0.25 + i * 0.05 : 0 }}
									onMouseEnter={() => setHover(w.week)} onClick={() => setPinned(pinned === w.week ? null : w.week)}
									style={{ flex: '1 1 0', minHeight: 0, display: 'grid', gridTemplateColumns: '58px 1fr 34px 1fr', alignItems: 'stretch', cursor: 'pointer' }}>
									<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, background: colors[m.color], border: `2px solid ${colors.black}`, marginRight: 8 }}>
										W{w.week}
									</div>
									{w.theory ? (
										<div style={{ display: 'flex', alignItems: 'center', padding: '0 12px', fontSize: 15.5, fontWeight: 500, background: on ? colors.yellow : colors.white, border: `2px solid ${colors.black}`, whiteSpace: 'nowrap', overflow: 'hidden' }}>
											{w.theory}
										</div>
									) : (
										<div style={{ display: 'flex', alignItems: 'center', padding: '0 12px', fontFamily: fonts.mono, fontSize: 13, border: `2px dashed ${colors.black}`, opacity: 0.6 }}>理论线 W12 结束</div>
									)}
									<span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: colors.red }}>{w.theory ? '→' : ''}</span>
									<div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '0 12px', fontSize: 15.5, fontWeight: 700, background: on ? colors.yellow : colors.white, border: `2px solid ${colors.black}`, boxShadow: `3px 3px 0 ${colors.red}`, whiteSpace: 'nowrap', overflow: 'hidden' }}>
										<span style={{ fontFamily: fonts.mono, fontSize: 11, padding: '1px 5px', background: colors.red, color: colors.white }}>LAB</span>
										{w.practice}
										{w.practiceNote && <span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 400 }}>· {w.practiceNote}</span>}
									</div>
								</motion.div>
							);
						})}
					</div>

					{/* 系统在长大 */}
					<motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45, delay: 0.5 }}
						style={{ width: 380, flex: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
						<div style={{ padding: '12px 16px', background: colors.dark, color: colors.white, border, boxShadow: shadow }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: colors.yellow }}>最终产出</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 25, fontWeight: 900, lineHeight: 1.25, margin: '2px 0 4px' }}>Enterprise 级 Agent 系统</div>
							<div style={{ fontSize: 14, lineHeight: 1.45 }}>{COHORT_GROWTH}</div>
							<div style={{ fontFamily: fonts.mono, fontSize: 11.5, opacity: 0.7, marginTop: 3 }}>{COHORT_PROJECT}</div>
						</div>
						<div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column-reverse', gap: 6 }}>
							{MILESTONES.map((m, mi) => {
								const built = focus === null || m.from <= focus;
								const current = focus !== null && focus >= m.from && focus <= m.to;
								return (
									<motion.div key={m.weeks}
										initial={{ opacity: 0, y: 20 }} animate={{ opacity: built ? 1 : 0.2, y: 0, scale: current ? 1.03 : 1 }}
										transition={{ duration: 0.3, delay: focus === null ? 0.7 + mi * 0.12 : 0 }}
										style={{ flex: '1 1 0', minHeight: 0, display: 'flex', alignItems: 'center', gap: 10, padding: '0 14px', background: colors[m.color], border, boxShadow: current ? shadowSm : 'none' }}>
										<span style={{ width: 66, flex: 'none', fontFamily: fonts.mono, fontSize: 13, fontWeight: 700 }}>{m.weeks}</span>
										<span style={{ fontFamily: fonts.heading, fontSize: 17, fontWeight: 900, lineHeight: 1.2 }}>{m.label}</span>
									</motion.div>
								);
							})}
						</div>
					</motion.div>
				</div>

				<p style={{ fontFamily: fonts.mono, fontSize: 11, color: colors.dark, opacity: 0.6, margin: 0, marginRight: 96 }}>
					{COHORT_SOURCE} · 悬停某一周，看系统搭到了哪一层
				</p>
			</div>
		</Slide>
	);
}
