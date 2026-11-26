import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DeckFrame, Panel, Label, colors, fonts } from '../kit';
import { StillScope, useStill, ini, Count, Toggle, Hint } from '../live';

const LEVELS = {
	before: { tab: '以前的起点', bar: .38, items: ['会一门语言和一个框架', '照着写好的需求写功能', '需求、测试、上线有别人管'] },
	now: { tab: '现在的起点', bar: .86, items: ['把任务拆给 AI，再审它写的代码', '懂系统：接入、权限、部署，出了问题能查', '会评估：知道 AI 什么时候会错、怎么测', '懂业务，能和人讲清取舍、对结果负责'] },
};
type L = keyof typeof LEVELS;

function Postings() {
	const still = useStill();
	const W = 240;
	const bars = [{ label: '整体招聘', v: -7 }, { label: '软件开发', v: 15 }];
	return <div>
		<div style={{ fontSize: 16, fontWeight: 800 }}>2025 年 2 月（Claude Code 发布）以来，美国招聘岗位变化</div>
		<div style={{ position: 'relative', height: 2 * 52 + 6, marginTop: 10 }}>
			<div style={{ position: 'absolute', left: 110 + W / 2, top: 0, bottom: 0, borderLeft: `2px solid ${colors.dark}` }} />
			{bars.map((b, i) => {
				const w = (Math.abs(b.v) / 20) * (W / 2);
				return <div key={b.label} style={{ position: 'absolute', top: i * 52, left: 0, right: 0, height: 42 }}>
					<span style={{ position: 'absolute', left: 0, top: 10, fontSize: 17, fontWeight: 800 }}>{b.label}</span>
					<motion.span initial={ini(still, { width: 0 })} animate={{ width: w }} transition={{ delay: still ? 0 : .2 + i * .2, duration: .5 }}
						style={{ position: 'absolute', top: 6, height: 30, [b.v < 0 ? 'right' : 'left']: b.v < 0 ? `calc(100% - ${110 + W / 2}px)` : 110 + W / 2, background: b.v < 0 ? '#d8d4ce' : colors.blue, border: `2px solid ${colors.dark}`, borderRadius: 7, boxSizing: 'border-box' }} />
					<span style={{ position: 'absolute', top: 9, left: b.v < 0 ? 110 + W / 2 - w - 62 : 110 + W / 2 + w + 8, fontSize: 20, fontWeight: 900 }}>{b.v > 0 ? '+' : '−'}<Count value={Math.abs(b.v)} />%</span>
				</div>;
			})}
		</div>
		<div style={{ fontSize: 16, fontWeight: 800, marginTop: 12 }}>回来的是什么岗位？</div>
		<div style={{ display: 'flex', height: 40, marginTop: 8, border: `2px solid ${colors.dark}`, borderRadius: 10, overflow: 'hidden' }}>
			<motion.div initial={ini(still, { width: '0%' })} animate={{ width: '71%' }} transition={{ delay: still ? 0 : .7, duration: .6 }} style={{ background: colors.dark, color: colors.white, display: 'flex', alignItems: 'center', paddingLeft: 12, fontSize: 17, fontWeight: 900, whiteSpace: 'nowrap' }}>资深岗位 71%</motion.div>
			<div style={{ flex: 1, background: '#f4f1ec', display: 'flex', alignItems: 'center', paddingLeft: 10, fontSize: 15, fontWeight: 700 }}>其他</div>
		</div>
		<div style={{ fontSize: 15, lineHeight: 1.5, marginTop: 10 }}>另有 37% 的新增，是标题里直接写着 AI 的岗位。和 2020 年比，软件开发招聘仍少 27.5%。</div>
		<div style={{ fontSize: 13, color: '#514c48', marginTop: 8 }}>来源：Indeed Hiring Lab，2026 年 7 月</div>
	</div>;
}

function Body() {
	const still = useStill();
	const [lv, setLv] = useState<L>(still ? 'now' : 'before');
	const cur = LEVELS[lv];
	return <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: 24 }}>
		<Panel style={{ padding: '18px 22px' }}><Postings /></Panel>
		<Panel bg={colors.dark} style={{ color: colors.white, padding: '18px 22px', display: 'grid', gridTemplateColumns: '120px 1fr', gap: 18 }}>
			{/* 入门门槛：切换时升高 */}
			<div style={{ position: 'relative', height: '100%', minHeight: 320, background: 'rgba(255,255,255,.06)', borderRadius: 14, overflow: 'hidden' }}>
				<motion.div initial={ini(still, { height: '0%' })} animate={{ height: `${cur.bar * 100}%` }} transition={{ type: 'spring', stiffness: 120, damping: 16 }}
					style={{ position: 'absolute', left: 0, right: 0, bottom: 0, background: lv === 'now' ? colors.red : colors.yellow, borderTop: `3px solid ${colors.white}` }} />
				<span style={{ position: 'absolute', left: 0, right: 0, top: 10, textAlign: 'center', fontSize: 15, fontWeight: 800 }}>入门门槛</span>
				{lv === 'now' && <motion.div initial={ini(still, { opacity: 0 })} animate={{ opacity: 1 }} transition={{ delay: still ? 0 : .4 }} style={{ position: 'absolute', left: 0, right: 0, bottom: `${LEVELS.before.bar * 100}%`, borderTop: `3px dashed ${colors.dark}` }}><span style={{ position: 'absolute', right: 6, top: 2, fontSize: 14, fontWeight: 800, color: colors.dark }}>以前</span></motion.div>}
			</div>
			<div>
				<div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
					{!still && (Object.keys(LEVELS) as L[]).map(k => <Toggle key={k} size={16} active={lv === k} tone={k === 'now' ? colors.red : colors.yellow} onClick={() => setLv(k)}>{LEVELS[k].tab}</Toggle>)}
					{still && <Label bg={colors.yellow} color={colors.dark}>现在的起点</Label>}
				</div>
				<AnimatePresence mode="wait">
					<motion.div key={lv} initial={ini(still, { opacity: 0, x: 14 })} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -14 }} transition={{ duration: .22 }} style={{ display: 'grid', gap: 10, marginTop: 14 }}>
						{cur.items.map((t, i) => <motion.div key={t} initial={ini(still, { opacity: 0, y: 8 })} animate={{ opacity: 1, y: 0 }} transition={{ delay: still ? 0 : .1 + i * .08 }}
							style={{ fontSize: 21, fontWeight: 800, lineHeight: 1.4, borderLeft: `4px solid ${lv === 'now' ? colors.red : colors.yellow}`, paddingLeft: 12 }}>{t}</motion.div>)}
					</motion.div>
				</AnimatePresence>
				{!still && <div style={{ marginTop: 14 }}><Hint>点按钮，看门槛怎么升高</Hint></div>}
				<div style={{ marginTop: 14, fontSize: 18, lineHeight: 1.5, color: '#e6e4ef' }}>写代码这一步变便宜了，<b style={{ color: colors.yellow }}>决定写什么、证明它对</b>的那部分变贵了。</div>
			</div>
		</Panel>
	</div>;
}

export default function C07c_NewStart() {
	return <DeckFrame tag="01 · 软件工程师呢" title="AI Coding 不是终点，是一个更高的起点" subtitle="软件开发岗位在回来，但回来的，是要求更高的那一部分。">
		<StillScope><Body /></StillScope>
	</DeckFrame>;
}
