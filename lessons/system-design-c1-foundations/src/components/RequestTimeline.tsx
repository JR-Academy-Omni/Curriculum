import { useState } from 'react';
import { colors, fonts } from './kit';
import { Interactive, Scrubber, Toggle } from './labkit';

type Span = { lane: number; from: number; to: number; label: string; color: string; text?: string };
type Moment = { at: number; sees: string; backstage?: boolean };
type Scenario = { key: string; label: string; spans: Span[]; marks: { lane: number; at: number; label: string }[]; moments: Moment[] };

const LANES = ['浏览器', 'Web 服务', '消息队列', 'Worker / 转码', '存储'];
const MAX = 120;
const POLLS = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];

const SCENARIOS: Scenario[] = [
	{
		key: 'sync', label: '同步等结果',
		spans: [
			{ lane: 0, from: 0, to: 30, label: '转圈等待', color: colors.yellow },
			{ lane: 1, from: 0, to: 90, label: '连接一直被占着', color: colors.blue },
			{ lane: 3, from: 0, to: 90, label: '转码 90 秒', color: colors.purple, text: colors.white },
			{ lane: 4, from: 90, to: 93, label: '写成品', color: colors.orange },
		],
		marks: [{ lane: 0, at: 30, label: '超时' }],
		moments: [
			{ at: 0, sees: '上传完成，页面转圈等结果' },
			{ at: 30, sees: '网关 30 秒超时，页面显示失败。但后台还在转码' },
			{ at: 90, sees: '转码其实做完了，可用户已经看到失败，可能重新上传一次', backstage: true },
		],
	},
	{
		key: 'async', label: '异步：队列 + Worker',
		spans: [
			{ lane: 0, from: 0, to: 1, label: '提交', color: colors.yellow },
			{ lane: 1, from: 0, to: 1, label: '建任务', color: colors.blue },
			{ lane: 2, from: 1, to: 2, label: '排队', color: colors.green },
			{ lane: 3, from: 2, to: 92, label: '转码 90 秒', color: colors.purple, text: colors.white },
			{ lane: 4, from: 92, to: 94, label: '写成品 + ready', color: colors.orange },
		],
		marks: POLLS.map(at => ({ lane: 0, at, label: '' })),
		moments: [
			{ at: 0, sees: '上传完成，正在提交' },
			{ at: 1, sees: '拿到任务编号 job-42，可以关掉页面' },
			{ at: 10, sees: '刷新进度：处理中' },
			{ at: 100, sees: '下一次查询看到 ready，可以播放' },
		],
	},
	{
		key: 'fault', label: 'Worker 中断',
		spans: [
			{ lane: 0, from: 0, to: 1, label: '提交', color: colors.yellow },
			{ lane: 1, from: 0, to: 1, label: '建任务', color: colors.blue },
			{ lane: 2, from: 1, to: 2, label: '排队', color: colors.green },
			{ lane: 3, from: 2, to: 92, label: 'Worker A 转码', color: colors.purple, text: colors.white },
			{ lane: 4, from: 92, to: 93, label: '成品', color: colors.orange },
			{ lane: 2, from: 93, to: 103, label: '等确认', color: '#d9f2cc' },
			{ lane: 3, from: 104, to: 106, label: 'B 核对', color: colors.green },
			{ lane: 4, from: 106, to: 107, label: 'ready', color: colors.orange },
		],
		marks: [...POLLS.map(at => ({ lane: 0, at, label: '' })), { lane: 3, at: 93, label: 'A 退出' }, { lane: 2, at: 103, label: '重投' }],
		moments: [
			{ at: 0, sees: '上传完成，正在提交' },
			{ at: 1, sees: '拿到任务编号 job-42，可以关掉页面' },
			{ at: 10, sees: '刷新进度：处理中' },
			{ at: 93, sees: '成品已写好，Worker A 在更新状态前退出', backstage: true },
			{ at: 103, sees: '10 秒没收到确认，队列把同一任务重新投递', backstage: true },
			{ at: 106, sees: 'Worker B 发现成品完好，不再转码，只补 ready', backstage: true },
			{ at: 110, sees: '下一次查询看到 ready，可以播放，只有一份成品' },
		],
	},
];

const pct = (t: number) => `${(t / MAX) * 100}%`;

export default function RequestTimeline() {
	const [key, setKey] = useState('async');
	const [t, setT] = useState(0);
	const scenario = SCENARIOS.find(s => s.key === key) ?? SCENARIOS[0];
	const now = [...scenario.moments].reverse().find(m => m.at <= t) ?? scenario.moments[0];

	return <Interactive style={{ display: 'grid', gap: 16 }}>
		<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20 }}>
			<Toggle options={SCENARIOS.map(s => ({ key: s.key, label: s.label }))} value={key} onChange={k => { setKey(k); setT(0); }} />
			<span style={{ fontSize: 17, color: '#514c48' }}>课堂假设：转码 90 秒，网关超时 30 秒，确认超时 10 秒，每 10 秒查一次进度</span>
		</div>
		<div style={{ background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 20, padding: '16px 20px 10px' }}>
			{LANES.map((lane, i) => <div key={lane} style={{ display: 'grid', gridTemplateColumns: '150px 1fr', alignItems: 'center', height: 54, borderTop: i ? '1px solid rgba(16,22,47,.1)' : undefined }}>
				<div style={{ fontSize: 19, fontWeight: 800 }}>{lane}</div>
				<div style={{ position: 'relative', height: '100%' }}>
					{scenario.spans.filter(s => s.lane === i).map(s => {
						const done = Math.max(0, Math.min(1, (t - s.from) / Math.max(.001, s.to - s.from)));
						return <div key={`${s.label}-${s.from}`} style={{ position: 'absolute', left: pct(s.from), width: `max(${pct(s.to - s.from)}, 6px)`, top: 9, bottom: 9, borderRadius: 9, border: `1.5px solid ${colors.dark}`, background: `linear-gradient(90deg, ${s.color} ${done * 100}%, ${s.color}55 ${done * 100}%)`, color: s.text ?? colors.dark, fontSize: 15, fontWeight: 800, display: 'flex', alignItems: 'center', paddingLeft: 8, whiteSpace: 'nowrap', overflow: 'visible' }}>
							{s.to - s.from >= 8 ? s.label : ''}
						</div>;
					})}
					{scenario.spans.filter(s => s.lane === i && s.to - s.from < 8).map(s =>
						<div key={`lbl-${s.label}-${s.from}`} style={{ position: 'absolute', left: `calc(${pct(s.to)} + 6px)`, top: 15, fontSize: 14, fontWeight: 700, whiteSpace: 'nowrap', opacity: t >= s.from ? 1 : .45 }}>{s.label}</div>)}
					{scenario.marks.filter(m => m.lane === i).map(m =>
						<div key={`${m.at}-${m.label}`} style={{ position: 'absolute', left: pct(m.at), top: m.label ? 4 : 20, width: m.label ? 3 : 8, height: m.label ? 46 : 8, marginLeft: m.label ? -1 : -4, borderRadius: 4, background: m.label ? colors.red : colors.dark, opacity: t >= m.at ? 1 : .3 }}>
							{m.label && <span style={{ position: 'absolute', top: -2, left: 6, fontSize: 14, fontWeight: 800, color: colors.red, whiteSpace: 'nowrap' }}>{m.label}</span>}
						</div>)}
					<div style={{ position: 'absolute', left: pct(t), top: 0, bottom: 0, width: 2, background: colors.red, pointerEvents: 'none' }} />
				</div>
			</div>)}
			<div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', marginTop: 2 }}>
				<span />
				<div style={{ position: 'relative', height: 20, fontFamily: fonts.mono, fontSize: 14, color: '#514c48' }}>
					{[0, 30, 60, 90, 120].map(s => <span key={s} style={{ position: 'absolute', left: pct(s), transform: s === MAX ? 'translateX(-100%)' : s ? 'translateX(-50%)' : undefined }}>{s}s</span>)}
				</div>
			</div>
		</div>
		<Scrubber value={t} max={MAX} onChange={setT} />
		<div aria-live="polite" style={{ background: colors.dark, color: colors.white, borderRadius: 18, padding: '14px 22px', fontSize: 24, fontWeight: 800 }}>
			<span style={{ color: colors.yellow, marginRight: 14 }}>{now.backstage ? '后台在做' : '用户看到'}</span>{now.sees}
		</div>
	</Interactive>;
}
