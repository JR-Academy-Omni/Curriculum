import { useState } from 'react';
import { motion } from 'framer-motion';
import { Slide, Title, colors, fonts, border, shadow, shadowSm } from '../ui';
import { EVAL_QUESTION, EVAL_LANES, EVAL_CONSUMER, EVAL_ANSWER_OPEN, EVAL_ANSWER_CLOSE } from '../../data/interviewEval';

// 承接 JD 页的“Evals 最稀缺”：面试里它长什么样。左边题面，右边图示 + 回答骨架。
// 悬停 / 点击某条 lane，图和对应的那句回答一起高亮。
export default function S12b_InterviewEval() {
	const [pinned, setPinned] = useState<number | null>(null);
	const [hover, setHover] = useState<number | null>(null);
	const focus = hover ?? pinned;
	const q = EVAL_QUESTION;

	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '100%', height: '100%', padding: '34px 64px 54px', display: 'flex', flexDirection: 'column', gap: 14 }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
					style={{ display: 'flex', alignItems: 'center', gap: 14, height: 50 }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, padding: '4px 10px', background: colors.yellow, border: `2px solid ${colors.black}`, whiteSpace: 'nowrap' }}>
						面试题示例 · Evals
					</span>
					<Title size="36px">JD 里最稀缺的 Evals，面试是这样问的</Title>
				</motion.div>

				<div style={{ flex: 1, minHeight: 0, display: 'flex', gap: 22 }}>
					{/* 题面 */}
					<motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45, delay: 0.15 }}
						style={{ width: 430, flex: 'none', display: 'flex', flexDirection: 'column', background: colors.white, border, boxShadow: shadow }}>
						<div style={{ padding: '10px 18px', background: colors.dark, color: colors.white, display: 'flex', alignItems: 'center', gap: 10 }}>
							<span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, padding: '2px 8px', background: colors.red, border: `2px solid ${colors.white}` }}>Q</span>
							<span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700 }}>{q.role}</span>
							<span style={{ fontFamily: fonts.mono, fontSize: 12, opacity: 0.7, marginLeft: 'auto' }}>{q.kind}</span>
						</div>
						<div style={{ flex: 1, minHeight: 0, padding: '16px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 10 }}>
							<div>
								<p style={{ fontFamily: fonts.heading, fontSize: 23, fontWeight: 800, lineHeight: 1.32, margin: 0 }}>“{q.question}”</p>
								<p style={{ fontSize: 16, lineHeight: 1.5, margin: '10px 0 0', color: colors.dark, opacity: 0.8 }}>{q.questionZh}</p>
							</div>
							<div>
								<div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, marginBottom: 6 }}>FOLLOW-UPS</div>
								{q.followUps.map((f, i) => (
									<motion.div key={f} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
										style={{ display: 'flex', gap: 8, fontSize: 16, lineHeight: 1.4, padding: '6px 0', borderTop: `2px dashed ${colors.black}` }}>
										<span style={{ fontFamily: fonts.mono, fontWeight: 700, color: colors.red }}>{i + 1}</span>
										<span>{f}</span>
									</motion.div>
								))}
							</div>
							<div style={{ padding: '10px 12px', background: colors.yellow, border: `2px solid ${colors.black}` }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, marginBottom: 4 }}>面试官在看什么 · 讲者观点</div>
								{q.lookingFor.map((t) => (
									<div key={t} style={{ fontSize: 15.5, lineHeight: 1.55, fontWeight: 500 }}>✓ {t}</div>
								))}
							</div>
						</div>
					</motion.div>

					{/* 图示 + 回答 */}
					<div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
						<div style={{ flex: 'none', display: 'grid', gridTemplateColumns: '1fr 158px', gap: 26 }}>
							<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }} onMouseLeave={() => setHover(null)}>
								{EVAL_LANES.map((lane, li) => {
									const dim = focus !== null && focus !== li;
									return (
										<motion.div key={lane.name}
											initial={{ opacity: 0, x: 30 }} animate={{ opacity: dim ? 0.3 : 1, x: 0 }}
											transition={{ duration: 0.35, delay: focus === null ? 0.3 + li * 0.15 : 0 }}
											onMouseEnter={() => setHover(li)} onClick={() => setPinned(pinned === li ? null : li)}
											style={{ display: 'flex', alignItems: 'stretch', gap: 6, height: 92, cursor: 'pointer' }}>
											<div style={{ width: 120, flex: 'none', padding: '8px 10px', background: colors[lane.color], border, boxShadow: focus === li ? shadowSm : 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
												<div style={{ fontFamily: fonts.heading, fontSize: 17, fontWeight: 900, whiteSpace: 'nowrap' }}>{lane.name}</div>
												<div style={{ fontFamily: fonts.mono, fontSize: 11.5, fontWeight: 700, lineHeight: 1.35 }}>{lane.scope}<br />{lane.cadence}</div>
											</div>
											{lane.steps.map((s, si) => (
												<div key={s.title} style={{ display: 'flex', alignItems: 'center', gap: 6, flex: 1, minWidth: 0 }}>
													<span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700 }}>→</span>
													<div style={{
														position: 'relative', flex: 1, minWidth: 0, height: '100%', padding: '7px 9px', overflow: 'visible',
														background: s.hot ? colors.red : colors.white, color: s.hot ? colors.white : colors.black,
														border: `2px solid ${colors.black}`, borderTop: `6px solid ${s.hot ? colors.black : colors[lane.color]}`,
													}}>
														<div style={{ fontFamily: fonts.heading, fontSize: 15, fontWeight: 900, lineHeight: 1.2, whiteSpace: 'nowrap' }}>{s.title}</div>
														<div style={{ fontSize: 12.5, lineHeight: 1.35, marginTop: 3 }}>{s.detail}</div>
														{s.feedsNext && (
															<span style={{ position: 'absolute', left: '50%', bottom: -13, transform: 'translateX(-50%)', zIndex: 2, fontFamily: fonts.mono, fontSize: 10.5, fontWeight: 700, padding: '0 6px', background: colors.warmBg, border: `2px dashed ${colors.black}`, whiteSpace: 'nowrap' }}>
																↓ {s.feedsNext}
															</span>
														)}
													</div>
													{si === lane.steps.length - 1 && <span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700 }}>→</span>}
												</div>
											))}
										</motion.div>
									);
								})}
							</div>
							<motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.8 }}
								style={{ marginLeft: -20, padding: '12px 12px', background: colors.green, border, boxShadow: shadowSm, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8 }}>
								<div style={{ fontFamily: fonts.heading, fontSize: 18, fontWeight: 900 }}>{EVAL_CONSUMER.title}</div>
								{EVAL_CONSUMER.items.map((t) => (
									<div key={t} style={{ fontSize: 13, lineHeight: 1.4, fontWeight: 500 }}>{t}</div>
								))}
							</motion.div>
						</div>

						{/* 回答骨架 */}
						<motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 1 }}
							style={{ flex: 1, minHeight: 0, marginRight: 8, padding: '12px 18px', background: colors.dark, color: colors.white, border, boxShadow: shadow, display: 'flex', flexDirection: 'column', gap: 6 }}>
							<div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
								<span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, padding: '2px 8px', background: colors.green, color: colors.black, border: `2px solid ${colors.white}` }}>A</span>
								<span style={{ fontFamily: fonts.mono, fontSize: 12, opacity: 0.7 }}>示例回答（简化版）· 悬停或点击上面的 lane 对照</span>
							</div>
							<p style={{ fontSize: 18, lineHeight: 1.45, fontWeight: 700, margin: 0, color: colors.yellow }}>{EVAL_ANSWER_OPEN}</p>
							{EVAL_LANES.map((lane, li) => {
								const lit = focus === li;
								return (
									<div key={lane.name} onMouseEnter={() => setHover(li)} onMouseLeave={() => setHover(null)}
										style={{
											flex: '1 1 0', minHeight: 0, display: 'flex', alignItems: 'center', gap: 12, padding: '0 10px',
											background: lit ? colors.white : 'transparent', color: lit ? colors.black : colors.white,
											opacity: focus !== null && !lit ? 0.4 : 1, borderLeft: `6px solid ${colors[lane.color]}`, transition: 'all 0.2s',
										}}>
										<span style={{ width: 86, flex: 'none', fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: lit ? colors.black : colors[lane.color] }}>{lane.name}</span>
										<span style={{ fontSize: 17, lineHeight: 1.45 }}>{lane.answer}</span>
									</div>
								);
							})}
							<p style={{ fontSize: 16.5, lineHeight: 1.45, margin: 0, marginRight: 80, opacity: 0.9 }}>{EVAL_ANSWER_CLOSE}</p>
						</motion.div>
					</div>
				</div>
			</div>
		</Slide>
	);
}
