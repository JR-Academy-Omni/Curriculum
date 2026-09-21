import { useState } from 'react';
import { motion } from 'framer-motion';
import { Slide, Title, CountUp, colors, fonts, border, shadowSm } from '../ui';
import { CURRICULUM_TITLE, CURRICULUM_STATS, JD_TAGS, PHASES, type JdTag } from '../../data/curriculum';

const PHASE_COLORS = [colors.industryCyan, colors.blue, colors.indigo, colors.purple, colors.explosive, colors.red, colors.orange, colors.yellow, colors.green, colors.teal];
const MAX_LESSONS = Math.max(...PHASES.map((p) => p.lessons));

const tagBtn = (active: boolean) => ({
	fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, padding: '6px 12px', cursor: 'pointer', whiteSpace: 'nowrap', flex: 'none', color: colors.black,
	border: `2px solid ${colors.black}`, background: active ? colors.yellow : colors.white,
	boxShadow: active ? 'none' : shadowSm, transform: active ? 'translate(3px, 3px)' : 'none',
} as const);

// 课程大纲：10 个 Phase 两列排开；点上方 JD 要求，高亮对应的 Phase（承接前面的 JD 分析）
export default function S15_Curriculum() {
	const [tag, setTag] = useState<JdTag | null>(null);
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '100%', height: '100%', padding: '34px 64px 54px', display: 'flex', flexDirection: 'column', gap: 12 }}>
				<div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
					<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} style={{ marginRight: 'auto' }}>
						<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, padding: '4px 10px', background: colors.yellow, border: `2px solid ${colors.black}` }}>课程大纲</span>
						<Title size="30px" style={{ marginTop: 8, whiteSpace: 'nowrap' }}>{CURRICULUM_TITLE}</Title>
					</motion.div>
					{CURRICULUM_STATS.map((s, i) => (
						<motion.div key={s.label}
							initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 240, damping: 16, delay: 0.2 + i * 0.1 }}
							style={{ width: 118, textAlign: 'center', padding: '8px 0', background: colors.white, border, boxShadow: shadowSm }}>
							<CountUp value={s.value} duration={1.2} style={{ fontFamily: fonts.mono, fontSize: 32, fontWeight: 700, lineHeight: 1.1 }} />
							<div style={{ fontSize: 13, fontWeight: 700 }}>{s.label}</div>
						</motion.div>
					))}
					<span style={{ width: 150, flex: 'none' }} />
				</div>

				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.3 }} style={{ display: 'flex', alignItems: 'center', gap: 8, height: 38 }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, marginRight: 4, whiteSpace: 'nowrap' }}>前面 JD 要的，在哪学？</span>
					{JD_TAGS.map((t) => (
						<button key={t.key} onClick={() => setTag(tag === t.key ? null : t.key)} style={tagBtn(tag === t.key)}>{t.label}</button>
					))}
				</motion.div>

				<div style={{ flex: 1, minHeight: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'repeat(5, 1fr)', gridAutoFlow: 'column', gap: '10px 18px' }}>
					{PHASES.map((p, i) => {
						const lit = tag !== null && !!p.jdTags?.includes(tag);
						const dim = tag !== null && !lit;
						const c = PHASE_COLORS[i];
						return (
							<motion.div key={p.id}
								initial={{ opacity: 0, x: i < 5 ? -30 : 30 }}
								animate={{ opacity: dim ? 0.3 : 1, x: 0, scale: lit ? 1.02 : 1 }}
								transition={tag === null ? { duration: 0.4, delay: 0.35 + (i % 5) * 0.08 } : { duration: 0.25 }}
								style={{ minHeight: 0, overflow: 'hidden', display: 'flex', alignItems: 'center', gap: 14, padding: '0 16px', background: lit ? colors.yellow : colors.white, border, boxShadow: shadowSm }}>
								<span style={{ flex: 'none', fontFamily: fonts.mono, fontSize: 17, fontWeight: 700, padding: '8px 10px', background: c, border: `2px solid ${colors.black}` }}>{p.id}</span>
								<div style={{ flex: 1, minWidth: 0 }}>
									<div style={{ display: 'flex', alignItems: 'baseline', gap: 10, whiteSpace: 'nowrap' }}>
										<span style={{ fontFamily: fonts.heading, fontSize: 22, fontWeight: 900 }}>{p.name}</span>
										<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, opacity: 0.7 }}>{p.en}</span>
										{p.isNew && <span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, padding: '1px 6px', background: colors.red, color: colors.white, border: `2px solid ${colors.black}` }}>NEW</span>}
									</div>
									<div style={{ fontSize: 15, marginTop: 4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.topics.join(' · ')}</div>
									<div style={{ position: 'relative', height: 8, marginTop: 8 }}>
										<motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.7, delay: 0.6 + (i % 5) * 0.08, ease: 'easeOut' }}
											style={{ width: `${(p.lessons / MAX_LESSONS) * 100}%`, height: '100%', background: c, border: `1px solid ${colors.black}`, transformOrigin: 'left' }} />
									</div>
								</div>
								<span style={{ flex: 'none', width: 64, textAlign: 'right', fontFamily: fonts.mono, fontSize: 20, fontWeight: 700, color: colors.red }}>{p.lessons} 节</span>
							</motion.div>
						);
					})}
				</div>
			</div>
		</Slide>
	);
}
