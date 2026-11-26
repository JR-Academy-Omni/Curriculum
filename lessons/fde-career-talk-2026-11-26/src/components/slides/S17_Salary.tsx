import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DeckFrame, Panel, Label, colors, fonts } from '../kit';
import { StillScope, useStill, ini, Toggle, Hint } from '../live';

const bands = [
	{ city: 'Sydney', level: 'Tech lead', low: 230, high: 270 },
	{ city: 'Sydney', level: 'Senior', low: 180, high: 240 },
	{ city: 'Melbourne', level: 'Senior', low: 175, high: 230 },
	{ city: 'Brisbane', level: 'Senior', low: 160, high: 215 },
];
const MIN = 140, MAX = 300, W = 560, TICKS = [160, 200, 240, 280];
const x = (v: number) => ((v - MIN) / (MAX - MIN)) * W;
const CITIES = ['全部', 'Sydney', 'Melbourne', 'Brisbane'];

function Body() {
	const still = useStill();
	const [city, setCity] = useState('全部');
	const [pick, setPick] = useState<number | null>(null);
	const lit = (i: number) => (pick !== null ? pick === i : city === '全部' || bands[i].city === city);
	const shown = pick !== null ? bands[pick] : null;
	return <div style={{ display: 'grid', gridTemplateColumns: '1.45fr .8fr', gap: 28 }}>
		<Panel style={{ padding: '20px 26px' }}>
			<div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
				<Label>澳洲 FDE 底薪 · 千澳元 · 中间一半人的区间</Label>
				{!still && CITIES.map(c => <Toggle key={c} size={16} active={city === c && pick === null} onClick={() => { setCity(c); setPick(null); }}>{c}</Toggle>)}
			</div>
			<div style={{ position: 'relative', marginTop: 20, marginLeft: 180, width: W, height: 4 * 62 + 30 }} role="img" aria-label="Sydney Tech lead 230 到 270，Sydney Senior 180 到 240，Melbourne Senior 175 到 230，Brisbane Senior 160 到 215，单位千澳元">
				{TICKS.map((t, i) => <motion.div key={t} initial={ini(still, { scaleY: 0 })} animate={{ scaleY: 1 }} transition={{ delay: i * .06, duration: .4 }} style={{ position: 'absolute', left: x(t), top: 0, bottom: 26, borderLeft: '1px dashed rgba(16,22,47,.25)', transformOrigin: 'top' }}>
					<span style={{ position: 'absolute', top: 4 * 62 + 6, left: -18, fontFamily: fonts.mono, fontSize: 15, color: '#514c48' }}>{t}</span>
				</motion.div>)}
				{bands.map((b, i) => <div key={b.city + b.level} onClick={() => setPick(pick === i ? null : i)} style={{ position: 'absolute', left: -180, top: i * 62, width: W + 180, height: 48, cursor: still ? 'default' : 'pointer' }}>
					<div style={{ position: 'absolute', left: 0, top: 2, width: 170, opacity: lit(i) ? 1 : .35, transition: 'opacity .25s' }}><div style={{ fontSize: 22, fontWeight: 900 }}>{b.city}</div><div style={{ fontSize: 16, color: '#514c48' }}>{b.level}</div></div>
					<motion.div initial={ini(still, { width: 0 })} animate={{ width: x(b.high) - x(b.low), opacity: lit(i) ? 1 : .3 }} transition={{ delay: still ? 0 : .3 + i * .12, duration: .55, ease: [0.16, 1, 0.3, 1] }}
						style={{ position: 'absolute', left: 180 + x(b.low), top: 4, height: 40, background: i === 0 ? colors.dark : colors.yellow, border: `2px solid ${colors.dark}`, borderRadius: 10, boxSizing: 'border-box', boxShadow: pick === i ? `4px 4px 0 ${colors.red}` : 'none' }} />
					<span style={{ position: 'absolute', left: 180 + x(b.low) - 46, top: 12, fontFamily: fonts.mono, fontSize: 17, fontWeight: 700, opacity: lit(i) ? 1 : .35 }}>{b.low}</span>
					<span style={{ position: 'absolute', left: 180 + x(b.high) + 8, top: 12, fontFamily: fonts.mono, fontSize: 17, fontWeight: 700, opacity: lit(i) ? 1 : .35 }}>{b.high}</span>
				</div>)}
			</div>
			<div style={{ minHeight: 40, marginTop: 8, display: 'flex', alignItems: 'center', gap: 12 }}>
				<AnimatePresence mode="wait">
					{shown ? <motion.span key={pick} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} style={{ fontSize: 22, fontWeight: 800 }}>
						{shown.city} · {shown.level}：A${shown.low}K–{shown.high}K，上下限差 {shown.high - shown.low}K
					</motion.span> : <motion.span key="hint" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><Hint>点城市按钮，或直接点某一条</Hint></motion.span>}
				</AnimatePresence>
			</div>
			<div style={{ fontSize: 15, color: '#514c48' }}>来源：Re:Sourced《What Is a Forward Deployed Engineer? (2026 Guide)》，2026-07-07，已接受 offer 的底薪</div>
		</Panel>
		<Panel bg={colors.dark} style={{ color: colors.white, display: 'flex', flexDirection: 'column', gap: 14 }}>
			<Label bg={colors.yellow} color={colors.dark}>一个公开样本</Label>
			<div style={{ fontSize: 24, fontWeight: 700 }}>OpenAI · 旧金山 · FDE</div>
			<div style={{ fontSize: 52, fontWeight: 900, color: colors.yellow, lineHeight: 1.1 }}>US$185K–300K</div>
			<div style={{ fontSize: 21, lineHeight: 1.5 }}>底薪区间，股权另算。这是美国岗位、美元，不和左边直接比。</div>
			<div style={{ marginTop: 'auto', fontSize: 15, color: '#d8d8dd' }}>来源：OpenAI 公开职位</div>
		</Panel>
	</div>;
}

export default function S17_Salary() {
	return <DeckFrame tag="03 · 薪酬" title="澳洲资深 FDE：底薪 A$160K–240K" subtitle="市场区间不等于任何人的薪资承诺；同一个城市，职级和公司差别很大。" accent={colors.purple}>
		<StillScope><Body /></StillScope>
	</DeckFrame>;
}
