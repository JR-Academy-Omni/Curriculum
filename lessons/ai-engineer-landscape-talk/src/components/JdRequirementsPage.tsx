import { useState } from 'react';
import { motion } from 'framer-motion';
import { Slide, Title, colors, fonts, border, shadowSm } from './ui';
import { STAGES, NOW_LABEL } from '../data/auAiTimeline';
import { JD_SOURCE_LINE, type JdRequirement } from '../data/auJdSkills';

// JD 技能要求页的共用版式（内容层，非引擎）：S10 AI Engineer / S11 FDE 复用。
// 顶部一排阶段按钮承接前面的时间线：点（或悬停）某个阶段，高亮“这个阶段留到今天的要求”。
export default function JdRequirementsPage({ kicker, title, reqs, footer }: { kicker: string; title: string; reqs: JdRequirement[]; footer: string }) {
	const [pinned, setPinned] = useState<number | null>(null);
	const [hover, setHover] = useState<number | null>(null);
	const focus = hover ?? pinned;

	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '100%', height: '100%', padding: '34px 64px 54px', display: 'flex', flexDirection: 'column', gap: 12 }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
					style={{ display: 'flex', alignItems: 'center', gap: 14, height: 50 }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, padding: '4px 10px', background: colors.yellow, border: `2px solid ${colors.black}`, whiteSpace: 'nowrap' }}>
						{NOW_LABEL} · {kicker}
					</span>
					<Title size="36px">{title}</Title>
				</motion.div>

				{/* 阶段筛选：和时光机页同一条九阶段时间轴 */}
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.15 }}
					style={{ display: 'flex', alignItems: 'center', gap: 6, height: 46 }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, marginRight: 6, whiteSpace: 'nowrap' }}>这条要求是哪个阶段留下的？</span>
					{STAGES.map((st, i) => {
						const n = i + 1;
						const used = reqs.some((r) => r.stages.includes(n));
						const on = focus === n;
						return (
							<button key={st.name} disabled={!used}
								onMouseEnter={() => used && setHover(n)} onMouseLeave={() => setHover(null)}
								onClick={() => setPinned(pinned === n ? null : n)}
								style={{
									flex: 1, minWidth: 0, height: '100%', padding: '0 8px', cursor: used ? 'pointer' : 'default', textAlign: 'left',
									fontFamily: fonts.body, fontSize: 12.5, lineHeight: 1.2, fontWeight: 700, color: colors.black, overflow: 'hidden',
									border: `2px solid ${colors.black}`, background: on ? colors.yellow : pinned === n ? colors.green : colors.white, opacity: used ? 1 : 0.35,
								}}>
								<span style={{ fontFamily: fonts.mono, color: colors.red }}>{n}</span> {st.name}
							</button>
						);
					})}
				</motion.div>

				<div style={{ flex: 1, minHeight: 0, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: '1.6fr 1fr 1fr', gap: 12 }}>
					{reqs.map((r, i) => {
						const lit = focus !== null && r.stages.includes(focus);
						const dim = focus !== null && !lit;
						return (
							<motion.div key={r.title}
								initial={{ opacity: 0, y: 24 }}
								animate={{ opacity: dim ? 0.3 : 1, y: 0, scale: lit ? 1.02 : 1 }}
								transition={{ duration: 0.3, delay: focus === null ? 0.2 + i * 0.06 : 0 }}
								style={{
									position: 'relative', minHeight: 0, overflow: 'hidden', padding: '12px 16px',
									background: lit ? colors.yellow : colors.white, border, boxShadow: shadowSm,
								}}>
								<div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
									<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: colors.red }}>{String(i + 1).padStart(2, '0')}</span>
									<span style={{ fontFamily: fonts.heading, fontSize: 21, fontWeight: 900, marginRight: 'auto', whiteSpace: 'nowrap' }}>{r.title}</span>
									{r.badge && (
										<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, padding: '2px 8px', background: colors.red, color: colors.white, border: `2px solid ${colors.black}`, transform: 'rotate(3deg)' }}>{r.badge}</span>
									)}
									{r.stages.map((n) => (
										<span key={n} title={STAGES[n - 1].name} style={{
											fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, padding: '2px 7px', whiteSpace: 'nowrap',
											background: focus === n ? colors.black : colors.green, color: focus === n ? colors.white : colors.black, border: `2px solid ${colors.black}`,
										}}>
											阶段 {n}
										</span>
									))}
								</div>
								<p style={{ fontSize: 16, lineHeight: 1.5, margin: 0 }}>
									{r.detail}
									{r.source && <span style={{ fontFamily: fonts.mono, fontSize: 11, color: colors.dark, opacity: 0.6 }}>　来源：{r.source}</span>}
								</p>
								{r.note && (
									<p style={{ fontSize: 14.5, lineHeight: 1.45, margin: '6px 0 0', padding: '5px 8px', background: lit ? colors.white : colors.yellow, border: `2px solid ${colors.black}` }}>
										<b style={{ fontFamily: fonts.mono, fontSize: 12 }}>讲者观点 · 重点　</b>{r.note}
									</p>
								)}
							</motion.div>
						);
					})}
				</div>

				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.8 }} style={{ marginRight: 96 }}>
					<p style={{ fontSize: 14.5, lineHeight: 1.5, fontWeight: 500, margin: 0 }}>{footer}</p>
					<p style={{ fontFamily: fonts.mono, fontSize: 11, color: colors.dark, opacity: 0.6, margin: '3px 0 0' }}>
						{JD_SOURCE_LINE}；“阶段 N” 为讲者归因，非 JD 原文
					</p>
				</motion.div>
			</div>
		</Slide>
	);
}
