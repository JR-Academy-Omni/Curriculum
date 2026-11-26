import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Panel, Label, colors, fonts } from './kit';
import { useStill, ini, Toggle, Hint, useCycle } from './live';

// 内容层组件：FDE Tech / Business 两页共用。数据全部取自 jracademy.ai 两门课程页（2026-11-26 回读）。
export type Week = { en: string; zh: string; out: string };
export type Group = { name: string; why: string; tasks: string[] };
export type Phase = { from: number; to: number; label: string };

export function CoursePath({ weeks, groups, phases, accent, outputs, cases }: { weeks: Week[]; groups: Group[]; phases?: Phase[]; accent: string; outputs: string[]; cases: string }) {
	const still = useStill();
	const { at: w, pick: setW, hover } = useCycle(weeks.length, 2400, still);
	const [g, setG] = useState(0);
	const n = weeks.length;
	const wk = weeks[w];
	const grp = groups[g];
	return <div>
		<div style={{ display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 22 }}>
			{/* 周次步进 */}
			<div {...hover} style={{ display: 'flex' }}><Panel style={{ padding: '16px 22px', flex: 1 }}>
				<div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><Label>{n} 周怎么推进</Label>{!still && <span style={{ marginLeft: 'auto' }}><Hint>自动按周播放；点数字就停下</Hint></span>}</div>
				<div style={{ position: 'relative', height: phases ? 70 : 46, marginTop: 14 }}>
					<div style={{ position: 'absolute', left: 18, right: 18, top: 18, height: 4, background: 'rgba(16,22,47,.15)', borderRadius: 2 }} />
					<motion.div initial={ini(still, { width: 0 })} animate={{ width: still ? 'calc(100% - 36px)' : `calc((100% - 36px) * ${w / (n - 1)})` }} transition={{ duration: .4 }} style={{ position: 'absolute', left: 18, top: 18, height: 4, background: accent, borderRadius: 2 }} />
					{!still && w < n - 1 && <div key={w} className="dash-run" style={{ position: 'absolute', left: `calc(18px + (100% - 36px) * ${w / (n - 1)})`, width: `calc((100% - 36px) / ${n - 1})`, top: 18, height: 4, color: accent === colors.yellow ? '#c99a00' : colors.red }} />}
					<div style={{ position: 'absolute', left: 0, right: 0, top: 0, display: 'flex', justifyContent: 'space-between' }}>
						{weeks.map((_, i) => <button key={i} type="button" className="live-toggle" onClick={() => setW(i)} aria-label={`第 ${i + 1} 周`} aria-pressed={i === w}
							style={{ width: 38, height: 38, borderRadius: '50%', border: `2px solid ${colors.dark}`, cursor: still ? 'default' : 'pointer', fontFamily: fonts.mono, fontWeight: 800, fontSize: 15, background: !still && i === w ? colors.yellow : (still || i < w) ? accent : colors.white, color: (still || i < w) && !(i === w && !still) && accent === colors.dark ? colors.white : colors.dark, transition: 'background .25s' }}>{i + 1}</button>)}
					</div>
					{phases && <div style={{ position: 'absolute', left: 0, right: 0, top: 46, height: 20 }}>
						{phases.map(p => <span key={p.label} style={{ position: 'absolute', left: `calc(${(p.from - 1) / n * 100}% + 2px)`, width: `calc(${(p.to - p.from + 1) / n * 100}% - 4px)`, height: 20, borderRadius: 6, background: 'rgba(16,22,47,.08)', fontSize: 13, fontWeight: 800, textAlign: 'center', lineHeight: '20px', whiteSpace: 'nowrap', overflow: 'hidden' }}>{p.label}</span>)}
					</div>}
				</div>
				{still
					? <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px 14px', marginTop: 10 }}>
						{weeks.map((x, i) => <div key={x.en} style={{ fontSize: 12.5, lineHeight: 1.35 }}><b>W{i + 1} {x.en}</b>：{x.out}</div>)}
					</div>
					: <AnimatePresence mode="wait">
						<motion.div key={w} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: .2 }} style={{ marginTop: 12 }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: colors.red }}>WEEK {w + 1}</div>
							<div style={{ fontSize: 24, fontWeight: 900, lineHeight: 1.25, marginTop: 2 }}>{wk.en}</div>
							<div style={{ fontSize: 18, lineHeight: 1.5, marginTop: 8 }}>{wk.zh}</div>
							<div style={{ fontSize: 17, lineHeight: 1.45, marginTop: 10, background: '#fff6d6', border: `2px solid ${colors.dark}`, borderRadius: 12, padding: '8px 12px' }}><b>这周交：</b>{wk.out}</div>
							<div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
								<Toggle active={false} size={15} onClick={() => setW(x => Math.max(0, x - 1))}>← 上一周</Toggle>
								<Toggle active size={15} onClick={() => setW(x => Math.min(n - 1, x + 1))}>下一周 →</Toggle>
							</div>
						</motion.div>
					</AnimatePresence>}
			</Panel></div>
			{/* 30 项任务 */}
			<Panel bg={colors.dark} style={{ color: colors.white, padding: '16px 20px' }}>
				<Label bg={colors.yellow} color={colors.dark}>30 项任务，按类练</Label>
				<div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
					{groups.map((x, i) => <button key={x.name} type="button" className="live-toggle" onClick={() => setG(i)} aria-pressed={i === g}
						style={{ fontFamily: fonts.body, fontSize: 15, fontWeight: 800, cursor: still ? 'default' : 'pointer', padding: '5px 11px', borderRadius: 999, border: `2px solid ${colors.white}`, background: !still && i === g ? colors.yellow : 'transparent', color: !still && i === g ? colors.dark : colors.white }}>{x.name} · {x.tasks.length}</button>)}
				</div>
				{still
					? <div style={{ display: 'grid', gap: 6, marginTop: 12 }}>{groups.map(x => <div key={x.name} style={{ fontSize: 13, lineHeight: 1.4 }}><b style={{ color: colors.yellow }}>{x.name}</b>：{x.why}</div>)}</div>
					: <AnimatePresence mode="wait">
						<motion.div key={g} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: .2 }}>
							<div style={{ fontSize: 17, lineHeight: 1.45, color: '#e6e4ef', marginTop: 12 }}>{grp.why}</div>
							<div style={{ display: 'grid', gridTemplateColumns: grp.tasks.length > 6 ? '1fr 1fr' : '1fr', gap: 6, marginTop: 10 }}>
								{grp.tasks.map((t, i) => <motion.div key={t} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * .04 }}
									style={{ fontSize: grp.tasks.length > 6 ? 15 : 17, fontWeight: 700, background: 'rgba(255,255,255,.08)', borderRadius: 8, padding: '6px 10px', borderLeft: `4px solid ${accent === colors.dark ? colors.red : accent}` }}>{t}</motion.div>)}
							</div>
						</motion.div>
					</AnimatePresence>}
			</Panel>
		</div>
		<div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 16, alignItems: 'center', background: colors.yellow, border: `2px solid ${colors.dark}`, borderRadius: 16, padding: '10px 18px' }}>
			<span style={{ fontSize: 17, fontWeight: 900 }}>最后交出</span>
			<span style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>{outputs.map(o => <span key={o} style={{ fontSize: 16, fontWeight: 800, background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 999, padding: '4px 12px' }}>{o}</span>)}</span>
		</div>
		<div style={{ fontSize: 14, color: '#514c48', marginTop: 8 }}>{cases}</div>
	</div>;
}
