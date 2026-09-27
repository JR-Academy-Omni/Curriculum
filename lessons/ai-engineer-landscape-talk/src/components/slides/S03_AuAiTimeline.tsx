import { motion } from 'framer-motion';
import { Slide, Title, GrowBar, colors, fonts, border } from '../ui';
import {
	STAGES, YEAR_TICKS, NOW_MONTH, NOW_LABEL, AXIS_MONTHS,
	TIMELINE_TITLE, TIMELINE_SUBTITLE, TIMELINE_FOOTNOTE, monthIndex, pct,
} from '../../data/auAiTimeline';

const LABEL_W = 340;
const ROW_H = 60;
const BAR_TOP = 21;
const BAR_H = 18;

// 进程图总览 —— 九个阶段的甘特图：橙点 = 全球技术披露，绿条 = 澳洲落地窗口，虚线 = 预期延续
export default function S03_AuAiTimeline() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '100%', height: '100%', padding: '44px 72px 64px', display: 'flex', flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
					<Title size="46px">{TIMELINE_TITLE}</Title>
					<p style={{ fontSize: 20, fontWeight: 500, color: colors.dark, opacity: 0.75, margin: '8px 0 18px' }}>{TIMELINE_SUBTITLE}</p>
				</motion.div>

				{/* 图例 */}
				<motion.div
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.15 }}
					style={{ display: 'flex', gap: 32, fontSize: 16, fontWeight: 700, marginBottom: 10, alignItems: 'center' }}>
					<span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
						<span style={{ width: 14, height: 14, borderRadius: '50%', background: colors.red, border: `2px solid ${colors.black}` }} />
						全球技术披露
					</span>
					<span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
						<span style={{ width: 36, height: 14, background: colors.green, border: `2px solid ${colors.black}` }} />
						澳洲落地窗口（估计）
					</span>
					<span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
						<span style={{ width: 36, height: 14, border: `2px dashed ${colors.black}` }} />
						预期延续
					</span>
				</motion.div>

				{/* 年份刻度 */}
				<div style={{ display: 'flex', height: 24, padding: '0 21px 0 3px' }}>
					<div style={{ width: LABEL_W, flex: 'none' }} />
					<div style={{ position: 'relative', flex: 1 }}>
						{YEAR_TICKS.map(([m, y]) => (
							<span key={y} style={{ position: 'absolute', left: pct(m), paddingLeft: 6, fontFamily: fonts.mono, fontSize: 15, fontWeight: 700 }}>{y}</span>
						))}
					</div>
				</div>

				{/* 九行 */}
				<div style={{ background: colors.white, border, padding: '6px 18px 6px 0' }}>
					{STAGES.map((s, i) => {
						const a = monthIndex(s.au[0]);
						const b = Math.min(monthIndex(s.au[1]), AXIS_MONTHS);
						const e = Math.min(b, NOW_MONTH);
						const futStart = Math.max(a, NOW_MONTH);
						const delay = 0.25 + i * 0.08;
						return (
							<div key={s.name} style={{ display: 'flex', alignItems: 'center', height: ROW_H }}>
								<motion.div
									initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, delay }}
									style={{ width: LABEL_W, flex: 'none', paddingLeft: 18, fontSize: 19, fontWeight: 700, whiteSpace: 'nowrap' }}>
									<span style={{ display: 'inline-block', width: 30, fontFamily: fonts.mono, color: colors.red }}>{i + 1}</span>
									{s.name}
								</motion.div>
								<div style={{ position: 'relative', flex: 1, height: '100%' }}>
									{YEAR_TICKS.map(([m, y]) => (
										<div key={y} style={{ position: 'absolute', top: 0, bottom: 0, left: pct(m), borderLeft: `1px solid ${colors.black}`, opacity: 0.12 }} />
									))}
									<div style={{ position: 'absolute', top: 0, bottom: 0, left: pct(NOW_MONTH), borderLeft: `2px dashed ${colors.dark}`, opacity: 0.55 }} />
									{e > a && (
										<div style={{ position: 'absolute', left: 0, right: 0, top: BAR_TOP, height: BAR_H }}>
											<GrowBar delay={delay} left={pct(a)} width={pct(e - a)} color={colors.green} />
										</div>
									)}
									{b > NOW_MONTH && (
										<motion.div
											initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: delay + 0.5 }}
											style={{ position: 'absolute', top: BAR_TOP, height: BAR_H, left: pct(futStart), width: pct(b - futStart), border: `2px dashed ${colors.black}` }}
										/>
									)}
									{s.global.map((g) => (
										<motion.div
											key={g.label} title={g.label}
											initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
											transition={{ type: 'spring', stiffness: 260, damping: 16, delay: delay + 0.3 }}
											style={{
												position: 'absolute', top: BAR_TOP + 1, left: pct(monthIndex(g.at)), marginLeft: -8,
												width: 16, height: 16, borderRadius: '50%', background: colors.red, border: `2px solid ${colors.black}`,
											}}
										/>
									))}
								</div>
							</div>
						);
					})}
				</div>

				{/* “现在”标注 */}
				<div style={{ display: 'flex', height: 26, marginTop: 6, paddingLeft: 3 }}>
					<div style={{ width: LABEL_W, flex: 'none' }} />
					<div style={{ position: 'relative', flex: 1, marginRight: 18 }}>
						<span style={{
							position: 'absolute', left: pct(NOW_MONTH), transform: 'translateX(-50%)', whiteSpace: 'nowrap',
							fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, background: colors.yellow, padding: '2px 10px', border: `2px solid ${colors.black}`,
						}}>
							{NOW_LABEL}
						</span>
					</div>
				</div>

				<p style={{ marginTop: 'auto', fontSize: 14, color: colors.dark, opacity: 0.65 }}>{TIMELINE_FOOTNOTE}</p>
			</div>
		</Slide>
	);
}
