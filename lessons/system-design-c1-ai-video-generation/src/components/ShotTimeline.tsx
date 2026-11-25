import { useMemo, useState } from 'react';
import { colors, fonts } from './kit';
import { Interactive, Scrubber, Slider, Stat, Toggle } from './labkit';

type Span = { lane: number; from: number; to: number; label: string; color: string; text?: string };

const SHOTS = [
	{ name: '镜头 01', gen: 40 },
	{ name: '镜头 02', gen: 50 },
	{ name: '镜头 03', gen: 45 },
];
const REVIEW = 5;
const COMPOSE = 15;
const LANES = [...SHOTS.map(s => s.name), 'FFmpeg 合成'];

/** 按模型并发上限排队：每个生成任务占一个槽位，先就绪的先上 */
function schedule(limit: number, rejectSecond: boolean) {
	const slots = Array.from({ length: limit }, () => 0);
	const take = (ready: number, dur: number) => {
		const i = slots.indexOf(Math.min(...slots));
		const from = Math.max(slots[i], ready);
		slots[i] = from + dur;
		return { from, to: from + dur };
	};
	const spans: Span[] = [];
	const approved: number[] = [];
	SHOTS.forEach((shot, lane) => {
		const g = take(0, shot.gen);
		spans.push({ lane, ...g, label: `生成 v1 · ${shot.gen}s`, color: colors.purple, text: colors.white });
		const rejected = rejectSecond && lane === 1;
		spans.push({ lane, from: g.to, to: g.to + REVIEW, label: rejected ? '退回' : '通过', color: rejected ? colors.red : colors.yellow, text: rejected ? colors.white : colors.dark });
		approved[lane] = g.to + REVIEW;
	});
	let calls = SHOTS.length;
	if (rejectSecond) {
		const g = take(approved[1], SHOTS[1].gen);
		spans.push({ lane: 1, ...g, label: `生成 v2 · ${SHOTS[1].gen}s`, color: colors.green });
		spans.push({ lane: 1, from: g.to, to: g.to + REVIEW, label: '通过', color: colors.yellow });
		approved[1] = g.to + REVIEW;
		calls += 1;
	}
	const composeFrom = Math.max(...approved);
	spans.push({ lane: 3, from: composeFrom, to: composeFrom + COMPOSE, label: '合成成片', color: colors.orange });
	return { spans, total: composeFrom + COMPOSE, calls };
}

export default function ShotTimeline() {
	const [limit, setLimit] = useState(3);
	const [mode, setMode] = useState('ok');
	const [t, setT] = useState(0);
	const reject = mode === 'reject';
	const { spans, total, calls } = useMemo(() => schedule(limit, reject), [limit, reject]);
	const max = Math.ceil(total / 10) * 10 + 10;
	const pct = (v: number) => `${(v / max) * 100}%`;
	const running = spans.filter(s => s.from <= t && t < s.to);
	const status = t >= total ? '成片完成。' + (reject ? '第一、三镜直接复用，只为第二镜多付了一次模型调用。' : '三镜一次通过。')
		: running.length ? `正在进行：${running.map(s => `${LANES[s.lane]} ${s.label.split(' · ')[0]}`).join('，')}` : '等待模型并发槽位';

	return <Interactive style={{ display: 'grid', gap: 14 }}>
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: 22, alignItems: 'center' }}>
			<div style={{ display: 'grid', gap: 12 }}>
				<Toggle options={[{ key: 'ok', label: '三镜都通过' }, { key: 'reject', label: '第二镜审核不通过' }]} value={mode} onChange={k => { setMode(k); setT(0); }} />
				<Slider label="模型并发上限" value={limit} min={1} max={3} unit="个任务" onChange={v => { setLimit(v); setT(0); }} />
			</div>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
				<Stat label="出成片总耗时" value={`${total} s`} hot />
				<Stat label="模型调用次数" value={`${calls} 次`} note={reject ? '三镜全部重做要 6 次' : undefined} />
				<Stat label="复用的镜头" value={reject ? '2 个' : '—'} note={reject ? '01、03 不重跑' : undefined} dark />
			</div>
		</div>
		<div style={{ background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 20, padding: '12px 20px 8px' }}>
			{LANES.map((lane, i) => <div key={lane} style={{ display: 'grid', gridTemplateColumns: '150px 1fr', alignItems: 'center', height: 52, borderTop: i ? '1px solid rgba(16,22,47,.1)' : undefined }}>
				<div style={{ fontSize: 19, fontWeight: 800 }}>{lane}</div>
				<div style={{ position: 'relative', height: '100%' }}>
					{spans.filter(s => s.lane === i).map(s => {
						const done = Math.max(0, Math.min(1, (t - s.from) / (s.to - s.from)));
						return <div key={`${s.label}-${s.from}`} title={s.label} style={{ position: 'absolute', left: pct(s.from), width: pct(s.to - s.from), top: 9, bottom: 9, borderRadius: 9, border: `1.5px solid ${colors.dark}`, background: `linear-gradient(90deg, ${s.color} ${done * 100}%, ${s.color}55 ${done * 100}%)`, color: s.text ?? colors.dark, fontSize: 15, fontWeight: 800, display: 'flex', alignItems: 'center', paddingLeft: 8, overflow: 'hidden', whiteSpace: 'nowrap' }}>
							{s.to - s.from >= 10 ? s.label : ''}
						</div>;
					})}
					<div style={{ position: 'absolute', left: pct(Math.min(t, max)), top: 0, bottom: 0, width: 2, background: colors.red, pointerEvents: 'none' }} />
				</div>
			</div>)}
			<div style={{ display: 'grid', gridTemplateColumns: '150px 1fr' }}>
				<span />
				<div style={{ position: 'relative', height: 20, fontFamily: fonts.mono, fontSize: 14, color: '#514c48' }}>
					{Array.from({ length: max / 30 + 1 }, (_, k) => k * 30).filter(s => s <= max).map(s => <span key={s} style={{ position: 'absolute', left: pct(s), transform: s ? 'translateX(-50%)' : undefined }}>{s}s</span>)}
				</div>
			</div>
		</div>
		<Scrubber value={Math.min(t, max)} max={max} onChange={setT} />
		<div aria-live="polite" style={{ background: colors.dark, color: colors.white, borderRadius: 18, padding: '12px 22px', fontSize: 22, fontWeight: 800 }}>
			<span style={{ color: colors.yellow, marginRight: 14 }}>{Math.floor(t)}s</span>{status}
		</div>
	</Interactive>;
}
