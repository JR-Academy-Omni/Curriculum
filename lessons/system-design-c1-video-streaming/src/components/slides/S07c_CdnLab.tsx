import { useState } from 'react';
import { motion } from 'framer-motion';
import { DeckFrame, Panel, colors } from '../kit';
import { Interactive, Slider, Stat } from '../labkit';

const gbps = (v: number) => (v >= 10 ? Math.round(v).toLocaleString('en-US') : v.toFixed(1));

export default function S07c_CdnLab() {
	const [viewers, setViewers] = useState(10000);
	const [bitrate, setBitrate] = useState(1.8);
	const [hit, setHit] = useState(95);

	const edge = (viewers * bitrate) / 1000;
	const origin = edge * (1 - hit / 100);
	const tbPerHour = (edge * 3600) / 8 / 1000;
	const width = (v: number) => `${Math.max(1.5, (v / edge) * 100)}%`;

	return <DeckFrame tag="P10 · 带宽 · 互动" title="CDN 计算器：观众越多，源站越要躲在后面" subtitle="简化模型：回源 ≈ 观众侧总出口 × (1 − 命中率)。真实回源还取决于边缘节点数和缓存键。" titleSize={50}>
		<Interactive style={{ display: 'grid', gridTemplateColumns: '.9fr 1.1fr', gap: 26 }}>
			<Panel style={{ display: 'grid', gap: 20, padding: 24 }}>
				<Slider label="同时观看人数" value={viewers} min={100} max={100000} step={100} unit="人" onChange={setViewers} />
				<Slider label="平均码率" value={bitrate} min={0.5} max={8} step={0.1} unit="Mb/s" onChange={setBitrate} format={v => v.toFixed(1)} />
				<Slider label="CDN 命中率" value={hit} min={50} max={99.9} step={0.1} unit="%" onChange={setHit} format={v => v.toFixed(1)} />
			</Panel>
			<div style={{ display: 'grid', gap: 14, alignContent: 'start' }}>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
					<Stat label="观众侧总出口" value={`${gbps(edge)} Gb/s`} note="人数 × 码率" hot />
					<Stat label="源站回源" value={`${gbps(origin)} Gb/s`} note="经过 CDN 之后" dark />
					<Stat label="每小时流量" value={`${tbPerHour.toFixed(1)} TB`} note="按观众侧出口" />
				</div>
				<div style={{ background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 18, padding: '16px 20px', display: 'grid', gap: 12 }}>
					{([['没有 CDN：源站要扛', edge, colors.red], ['有 CDN：源站只扛', origin, colors.green]] as const).map(([label, v, c]) =>
						<div key={label} style={{ display: 'grid', gap: 6 }}>
							<div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 19, fontWeight: 800 }}><span>{label}</span><span>{gbps(v)} Gb/s</span></div>
							<div style={{ height: 22, background: '#f1ebe3', borderRadius: 999, overflow: 'hidden' }}>
								<motion.div animate={{ width: width(v) }} transition={{ duration: .3 }} style={{ height: '100%', background: c, borderRadius: 999 }} />
							</div>
						</div>)}
				</div>
				<div style={{ background: colors.dark, color: colors.white, borderRadius: 18, padding: '14px 20px', fontSize: 20, lineHeight: 1.45 }}>
					→ {origin > 10 ? `回源 ${gbps(origin)} Gb/s，源站扛不住：提高命中率，或在 CDN 和源站之间再加一层缓存` : `回源 ${gbps(origin)} Gb/s，源站压力可控；瓶颈在 CDN 的总出口和费用`}
				</div>
			</div>
		</Interactive>
	</DeckFrame>;
}
