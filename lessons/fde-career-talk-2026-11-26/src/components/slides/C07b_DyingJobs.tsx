import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DeckFrame, Panel, Label, colors, fonts } from '../kit';
import { StillScope, useStill, ini, Count, Toggle, Hint } from '../live';

type Key = 'us' | 'young' | 'au';
type Bar = { label: string; v: number; plus?: boolean; base?: boolean };
const DATA: Record<Key, { tab: string; title: string; bars: Bar[]; note: string; src: string }> = {
	us: {
		tab: '美国招聘',
		title: '招聘岗位数，和 2020 年 2 月比',
		bars: [{ label: '整体招聘', v: 0, base: true }, { label: '软件开发', v: -27.5 }, { label: '市场营销', v: -30, plus: true }, { label: '数据分析', v: -38 }],
		note: '整体招聘基本持平，这几类却少了三到四成。软件开发近一年有回升，但 71% 的新增是资深岗位。',
		src: 'Indeed Hiring Lab 招聘指数，2026 年 6–7 月',
	},
	young: {
		tab: '年轻人最先受影响',
		title: '22–25 岁就业人数变化（2022-11 → 2026-06）',
		bars: [{ label: 'AI 最难做的职业', v: 10, base: true }, { label: 'AI 最能做的职业', v: -11 }],
		note: '不是把老员工裁掉，而是不再招新人：入门那一级最先没了。',
		src: 'Stanford Digital Economy Lab，2026-08 更新，基于 ADP 美国工资数据',
	},
	au: {
		tab: '澳洲',
		title: '就业人数增长（2022-11 起）',
		bars: [{ label: '受 AI 影响最小的职业', v: 9.5, base: true }, { label: '受 AI 影响最大的职业', v: 5.6 }],
		note: '澳洲还没到成批减少，但差距已经拉开。官方判断最容易被替代的是普通文员、前台、会计文员、簿记、数据录入。',
		src: 'Jobs and Skills Australia《Our Gen AI Transition》2025；DEWR 就业数据分析',
	},
};
const MIN = -40, MAX = 15, W = 470;
const x = (v: number) => ((v - MIN) / (MAX - MIN)) * W;

const dying = [
	{ job: '数据分析', why: '取数、做报表、写周报，业务自己问 AI 就能出' },
	{ job: '翻译、校对、技术写作', why: 'AI 能做的事和日常工作重合最多' },
	{ job: '文案和内容外包', why: '按字数、按件计费的活最先被替' },
	{ job: '客服、电话销售、接线', why: '文字和语音 Agent 都已经能上线' },
	{ job: '文员、前台、数据录入、簿记', why: '澳洲官方列为最容易被替代' },
	{ job: '初级开发', why: '增删改查交给 AI，团队只招资深' },
];

function Chart({ k }: { k: Key }) {
	const still = useStill();
	const d = DATA[k];
	return <div style={{ marginTop: 14 }}>
		<div style={{ fontSize: 17, fontWeight: 800, marginBottom: 10 }}>{d.title}</div>
		<div style={{ position: 'relative', marginLeft: 150, width: W, height: d.bars.length * 56 + 26 }}>
			{[-40, -30, -20, -10, 0, 10].map(t => <div key={t} style={{ position: 'absolute', left: x(t), top: 0, bottom: 24, borderLeft: t === 0 ? `2px solid ${colors.dark}` : '1px dashed rgba(16,22,47,.2)' }}>
				<span style={{ position: 'absolute', bottom: -24, left: -16, fontFamily: fonts.mono, fontSize: 13, color: '#514c48' }}>{t > 0 ? `+${t}` : t}%</span>
			</div>)}
			{d.bars.map((b, i) => {
				const left = b.v < 0 ? x(b.v) : x(0), w = Math.abs(x(b.v) - x(0));
				return <div key={b.label} style={{ position: 'absolute', left: -150, top: i * 56 + 4, width: W + 150, height: 40 }}>
					<span style={{ position: 'absolute', left: 0, top: 9, width: 140, fontSize: 17, fontWeight: 800, lineHeight: 1.2 }}>{b.label}</span>
					<motion.span initial={ini(still, { width: 0, left: 150 + x(0) })} animate={{ width: Math.max(w, 4), left: 150 + left }} transition={{ delay: still ? 0 : .15 + i * .12, duration: .55, ease: [0.16, 1, 0.3, 1] }}
						style={{ position: 'absolute', top: 4, height: 32, background: b.base ? '#d8d4ce' : colors.red, border: `2px solid ${colors.dark}`, borderRadius: 8, boxSizing: 'border-box' }} />
					<span style={{ position: 'absolute', top: 8, left: 150 + (b.v < 0 ? left - 92 : x(0) + w + 8), width: 84, textAlign: b.v < 0 ? 'right' : 'left', fontSize: 20, fontWeight: 900, color: b.base ? colors.dark : colors.red }}>
						{b.v === 0 ? '≈ 0' : <>{b.v > 0 ? '+' : '−'}<Count value={Math.abs(b.v)} format={n => (Number.isInteger(Math.abs(b.v)) ? Math.round(n).toString() : n.toFixed(1))} />%{b.plus ? '+' : ''}</>}
					</span>
				</div>;
			})}
		</div>
	</div>;
}

function Body() {
	const still = useStill();
	const [k, setK] = useState<Key>('us');
	const keys = Object.keys(DATA) as Key[];
	return <div style={{ display: 'grid', gridTemplateColumns: '1.12fr .88fr', gap: 24 }}>
		<Panel style={{ padding: '16px 22px' }}>
			{still
				? <Chart k="us" />
				: <>
					<div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
						{keys.map(key => <Toggle key={key} size={16} active={k === key} onClick={() => setK(key)}>{DATA[key].tab}</Toggle>)}
						<span style={{ marginLeft: 'auto' }}><Hint>点按钮切换</Hint></span>
					</div>
					<Chart key={k} k={k} />
				</>}
			<AnimatePresence mode="wait">
				<motion.div key={still ? 'still' : k} initial={ini(still, { opacity: 0, y: 8 })} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} style={{ marginTop: 18, fontSize: 19, fontWeight: 700, lineHeight: 1.5, borderLeft: `5px solid ${colors.red}`, paddingLeft: 12 }}>
					{still ? keys.map(key => <div key={key} style={{ fontSize: 15, lineHeight: 1.45, marginBottom: 4 }}><b>{DATA[key].tab}：</b>{DATA[key].note}</div>) : DATA[k].note}
				</motion.div>
			</AnimatePresence>
			<div style={{ fontSize: 13, color: '#514c48', marginTop: 10 }}>来源：{still ? keys.map(key => DATA[key].src).join('；') : DATA[k].src}</div>
		</Panel>
		<Panel bg={colors.dark} style={{ color: colors.white, padding: '16px 20px' }}>
			<Label bg={colors.yellow} color={colors.dark}>最先消失的岗位</Label>
			<div style={{ display: 'grid', gap: 2, marginTop: 10 }}>
				{dying.map((d, i) => <motion.div key={d.job} initial={ini(still, { opacity: 0, x: 18 })} animate={{ opacity: 1, x: 0 }} transition={{ delay: still ? 0 : .3 + i * .1 }}
					style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: 8, alignItems: 'start', borderTop: i ? '1px solid rgba(255,255,255,.12)' : 'none', padding: '8px 0' }}>
					<span aria-hidden style={{ fontSize: 20, color: colors.red, lineHeight: 1.2 }}>✕</span>
					<div><div style={{ fontSize: 21, fontWeight: 900 }}>{d.job}</div><div style={{ fontSize: 15, lineHeight: 1.4, color: '#d8d8dd', marginTop: 2 }}>{d.why}</div></div>
				</motion.div>)}
			</div>
			<div style={{ fontSize: 12, color: '#a9a7b8', marginTop: 8, lineHeight: 1.45 }}>依据：Indeed、Stanford、微软 2025 研究、Jobs and Skills Australia 2025</div>
		</Panel>
	</div>;
}

export default function C07b_DyingJobs() {
	return <DeckFrame tag="01 · 哪些岗位在消失" title="这些岗位，正在消失" subtitle="共同点：入门那一级、按规则重复的活最先没。">
		<StillScope><Body /></StillScope>
	</DeckFrame>;
}
