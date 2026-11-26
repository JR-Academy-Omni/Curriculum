import { useState } from 'react';
import { motion } from 'framer-motion';
import { DeckFrame, Panel, Label, colors, fonts } from '../kit';
import { StillScope, useStill, ini, Count, Toggle, Hint } from '../live';

type Key = 'tech' | 'ai';
const DATA: Record<Key, { tab: string; unit: string; bars: { year: string; note: string; value: number; approx?: boolean }[]; big: string; bigNote: string; points: string[]; src: string }> = {
	tech: {
		tab: '全球科技行业裁员',
		unit: '被裁人数',
		bars: [{ year: '2025', note: '全年', value: 122606 }, { year: '2026', note: '截至 11 月下旬', value: 150717, approx: true }],
		big: '+23%',
		bigNote: '2026 年还没过完，已经比 2025 全年多',
		points: ['涉及 375 家公司', '只算科技公司；各家统计的数差别很大'],
		src: 'Layoffs.fyi',
	},
	ai: {
		tab: '美国 · 把 AI 列为原因',
		unit: '裁员公告人数',
		bars: [{ year: '2025', note: '全年', value: 54836 }, { year: '2026', note: '截至 10 月', value: 121401 }],
		big: '2.2 倍',
		bigNote: '约占 2026 年美国全部裁员的 20%',
		points: ['3 月起，AI 连续五个月是排第一的原因', '10 月只有 1,265 人，是全年最低的一个月'],
		src: 'Challenger, Gray & Christmas 2026 年 8 月、10 月数据；只算美国公司公开宣布的裁员',
	},
};
const MAX = 160000;

function Chart({ k, H = 330, w = 170 }: { k: Key; H?: number; w?: number }) {
	const still = useStill();
	const d = DATA[k];
	return <div style={{ position: 'relative', height: H + 70, marginTop: 18 }}>
		{[0, 40000, 80000, 120000, 160000].map(t => <div key={t} style={{ position: 'absolute', left: 70, right: 0, top: H - (t / MAX) * H, borderTop: t ? '1px dashed rgba(16,22,47,.18)' : `2px solid ${colors.dark}` }}>
			<span style={{ position: 'absolute', left: -70, top: -11, width: 60, textAlign: 'right', fontFamily: fonts.mono, fontSize: 15, color: '#514c48' }}>{t / 1000}K</span>
		</div>)}
		<div style={{ position: 'absolute', left: 110, right: 40, top: 0, height: H, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around' }}>
			{d.bars.map((b, i) => {
				const h = (b.value / MAX) * H;
				return <div key={b.year} style={{ width: w, position: 'relative', height: H, display: 'flex', alignItems: 'flex-end' }}>
					<motion.div initial={ini(still, { height: 0 })} animate={{ height: h }} transition={{ duration: .7, delay: i * .18, ease: [0.16, 1, 0.3, 1] }}
						style={{ width: '100%', background: i ? colors.red : '#d8d4ce', border: `2px solid ${colors.dark}`, borderBottom: 'none', borderRadius: '14px 14px 0 0', boxShadow: i ? `6px 0 0 ${colors.dark}` : 'none' }} />
					<motion.div initial={ini(still, { opacity: 0 })} animate={{ opacity: 1, bottom: h + 10 }} transition={{ delay: .3 + i * .18 }} style={{ position: 'absolute', left: 0, right: 0, bottom: h + 10, textAlign: 'center', fontSize: w < 160 ? 28 : 34, fontWeight: 900, whiteSpace: 'nowrap' }}>
						{b.approx ? '约 ' : ''}<Count value={b.value} />
					</motion.div>
					<div style={{ position: 'absolute', left: 0, right: 0, top: H + 10, textAlign: 'center' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 22, fontWeight: 700 }}>{b.year}</div>
						<div style={{ fontSize: 16, color: '#514c48' }}>{b.note}</div>
					</div>
				</div>;
			})}
		</div>
	</div>;
}

function Both() {
	return <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 26 }}>
		{(Object.keys(DATA) as Key[]).map(key => <Panel key={key} style={{ padding: '18px 24px' }}>
			<div style={{ display: 'flex', alignItems: 'center', gap: 14 }}><Label>{DATA[key].tab}</Label><span style={{ fontSize: 34, fontWeight: 900, color: colors.red, whiteSpace: 'nowrap' }}>{DATA[key].big}</span></div>
			<div style={{ fontSize: 18, fontWeight: 700, marginTop: 8 }}>{DATA[key].bigNote}</div>
			<div style={{ height: 30 }} />
			<Chart k={key} H={280} w={150} />
			<div style={{ fontSize: 14, color: '#514c48' }}>{DATA[key].points.join('；')}。来源：{DATA[key].src}</div>
		</Panel>)}
	</div>;
}

function Body() {
	const still = useStill();
	const [k, setK] = useState<Key>('tech');
	const d = DATA[k];
	if (still) return <Both />;
	return <div style={{ display: 'grid', gridTemplateColumns: '1.45fr .85fr', gap: 26 }}>
		<Panel style={{ padding: '20px 26px' }}>
			<div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
				{(Object.keys(DATA) as Key[]).map(key => <Toggle key={key} active={k === key} onClick={() => setK(key)}>{DATA[key].tab}</Toggle>)}
				<span style={{ marginLeft: 'auto' }}><Hint>点按钮切换</Hint></span>
			</div>
			<Chart key={k} k={k} />
			<div style={{ fontSize: 15, color: '#514c48' }}>纵轴：{d.unit} · 来源：{d.src}</div>
		</Panel>
		<Panel bg={colors.dark} style={{ color: colors.white, display: 'flex', flexDirection: 'column', gap: 16 }}>
			<Label bg={colors.yellow} color={colors.dark}>{d.tab}</Label>
			<motion.div key={k} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
				<div style={{ fontSize: 84, fontWeight: 900, color: colors.yellow, lineHeight: 1, textShadow: '1px 1px 0 #c99a00, 2px 2px 0 #c99a00, 3px 3px 0 #b88a00, 4px 4px 0 #b88a00, 5px 5px 0 #a67c00, 6px 6px 0 #a67c00, 7px 7px 0 #8f6b00, 14px 18px 26px rgba(0,0,0,.55)', transform: 'perspective(700px) rotateY(-14deg) rotateX(6deg)', transformOrigin: '0 50%' }}>{d.big}</div>
				<div style={{ fontSize: 25, fontWeight: 800, lineHeight: 1.4 }}>{d.bigNote}</div>
				{d.points.map(p => <div key={p} style={{ fontSize: 21, lineHeight: 1.5, color: '#d8d8dd', borderTop: '1px solid rgba(255,255,255,.15)', paddingTop: 12 }}>{p}</div>)}
			</motion.div>
		</Panel>
	</div>;
}

export default function C03_LayoffNumbers() {
	return <DeckFrame tag="01 · AI 和裁员" title="今年的裁员，已经比去年多" subtitle="先看数字，再看这些数字背后到底是不是 AI。">
		<StillScope><Body /></StillScope>
	</DeckFrame>;
}
