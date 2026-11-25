import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { colors, fonts } from './kit';

/**
 * 课堂互动工具的外层。SlideEngine 在 window 上监听触摸滑动翻页，
 * 这里拦住触摸事件，拖滑块或旋转 3D 视图时不会误翻页。
 */
export function Interactive({ children, style }: { children: ReactNode; style?: CSSProperties }) {
	const stop = (e: { stopPropagation: () => void }) => e.stopPropagation();
	return <div onTouchStart={stop} onTouchEnd={stop} onTouchMove={stop} style={style}>{children}</div>;
}

export function Slider({ label, value, min, max, step = 1, unit, onChange, format }: {
	label: string;
	value: number;
	min: number;
	max: number;
	step?: number;
	unit?: string;
	onChange: (v: number) => void;
	format?: (v: number) => string;
}) {
	return <label style={{ display: 'grid', gap: 8 }}>
		<span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontSize: 21, fontWeight: 700 }}>
			<span>{label}</span>
			<span style={{ fontFamily: fonts.mono, fontSize: 22, color: colors.red }}>{format ? format(value) : value.toLocaleString('en-US')}{unit ? ` ${unit}` : ''}</span>
		</span>
		<input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(Number(e.target.value))}
			style={{ width: '100%', accentColor: colors.red, height: 28, cursor: 'pointer' }} />
	</label>;
}

export function Stat({ label, value, note, dark = false, hot = false }: { label: string; value: ReactNode; note?: ReactNode; dark?: boolean; hot?: boolean }) {
	return <div style={{ background: dark ? colors.dark : hot ? colors.yellow : colors.white, color: dark ? colors.white : colors.dark, border: `2px solid ${colors.dark}`, borderRadius: 18, padding: '14px 18px' }}>
		<div style={{ fontSize: 17, fontWeight: 700, opacity: .85 }}>{label}</div>
		<div style={{ fontSize: 34, fontWeight: 900, lineHeight: 1.15, marginTop: 4 }}>{value}</div>
		{note && <div style={{ fontSize: 17, marginTop: 4, lineHeight: 1.35, opacity: .85 }}>{note}</div>}
	</div>;
}

/** 时间轴拖动条 + 播放按钮。value 为秒 */
export function Scrubber({ value, max, onChange, step = 1, playLabel = '播放', pauseLabel = '暂停' }: {
	value: number;
	max: number;
	onChange: (v: number) => void;
	step?: number;
	playLabel?: string;
	pauseLabel?: string;
}) {
	const [playing, setPlaying] = useState(false);
	const valueRef = useRef(value);
	valueRef.current = value;
	useEffect(() => {
		if (!playing) return;
		const id = window.setInterval(() => {
			const nextValue = valueRef.current + max / 120;
			if (nextValue >= max) { onChange(max); setPlaying(false); return; }
			onChange(nextValue);
		}, 50);
		return () => window.clearInterval(id);
	}, [playing, max, onChange]);
	return <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
		<button type="button" onClick={() => { if (!playing && valueRef.current >= max) onChange(0); setPlaying(p => !p); }}
			style={{ fontSize: 20, fontWeight: 800, padding: '10px 18px', borderRadius: 999, border: `2px solid ${colors.dark}`, background: playing ? colors.white : colors.yellow, color: colors.dark, cursor: 'pointer', minWidth: 104 }}>
			{playing ? pauseLabel : playLabel}
		</button>
		<input type="range" min={0} max={max} step={step} value={value} aria-label="时间" onChange={e => { setPlaying(false); onChange(Number(e.target.value)); }}
			style={{ flex: 1, accentColor: colors.red, height: 28, cursor: 'pointer' }} />
		<span style={{ fontFamily: fonts.mono, fontSize: 24, fontWeight: 700, minWidth: 92, textAlign: 'right' }}>{Math.floor(value)} s</span>
	</div>;
}

export function Toggle({ options, value, onChange }: { options: { key: string; label: string }[]; value: string; onChange: (k: string) => void }) {
	return <div role="group" style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
		{options.map(o => <button key={o.key} type="button" aria-pressed={value === o.key} onClick={() => onChange(o.key)}
			style={{ fontSize: 19, fontWeight: 800, padding: '9px 16px', borderRadius: 12, border: `2px solid ${colors.dark}`, background: value === o.key ? colors.yellow : colors.white, color: colors.dark, cursor: 'pointer' }}>{o.label}</button>)}
	</div>;
}

export const fmtBytes = (mb: number) => {
	if (mb >= 1_000_000) return `${(mb / 1_000_000).toFixed(1)} TB`;
	if (mb >= 1_000) return `${(mb / 1_000).toFixed(mb >= 100_000 ? 0 : 1)} GB`;
	return `${Math.round(mb)} MB`;
};
