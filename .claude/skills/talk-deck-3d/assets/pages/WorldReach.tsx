import { useEffect, useState } from 'react';
import { Page, asset, c, f } from '../kit';
import { cityXY, worldPath } from '../../data/worldmap';

const cities = [['sydney', '悉尼'], ['melbourne', '墨尔本'], ['brisbane', '布里斯班'], ['adelaide', '阿德莱德'], ['perth', '珀斯'], ['singapore', '新加坡'], ['kl', '吉隆坡']];
// 国家标注 [坐标键, 名称, 横向偏移, 纵向偏移]
const countries: [string, string, number, number][] = [['uk', '英国', 0, -14], ['china', '中国', 0, -14], ['usa', '美国', 0, -14], ['canada', '加拿大', 0, -14], ['nz', '新西兰', 6, 28]];

export default function WorldReach() {
	const [tick, setTick] = useState(0);
	useEffect(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const id = window.setInterval(() => setTick((t) => t + 1), 2800);
		return () => window.clearInterval(id);
	}, []);
	const hub = cityXY.brisbane;
	return (
		<Page night>
			<div style={{ padding: '44px 96px 0' }}>
				<h1 style={{ fontFamily: f.h, fontWeight: 700, fontSize: 60, lineHeight: 1.2 }}>走向国际</h1>
				<p style={{ fontSize: 22, color: c('on-night-muted'), marginTop: 6 }}>从澳大利亚出发，服务全球华人。在这些城市，我们把大家请到线下见面。</p>
			</div>
			<div style={{ position: 'absolute', left: 250, top: 150, width: 1100, perspective: 1500 }}>
				<svg viewBox="0 0 1000 500" style={{ width: '100%', display: 'block', transform: 'rotateX(24deg)', transformOrigin: '50% 60%', overflow: 'visible', filter: 'drop-shadow(0 26px 22px rgba(0,0,0,0.55))' }}>
					<path d={worldPath} fill="#322c52" stroke="#5b5488" strokeWidth={0.6} />
					{['china', 'singapore', 'nz', 'uk', 'usa', 'canada'].map((k, i) => {
						const [x, y] = cityXY[k];
						const d = `M${hub[0]},${hub[1]} Q${(hub[0] + x) / 2},${Math.min(hub[1], y) - Math.abs(x - hub[0]) * 0.22 - 20} ${x},${y}`;
						return <path key={k} d={d} fill="none" stroke="#ffd43b" strokeWidth={1.4} strokeDasharray="6 5" opacity={0.75}><animate attributeName="stroke-dashoffset" from="22" to="0" dur={`${1.1 + i * 0.12}s`} repeatCount="indefinite" /></path>;
					})}
					{cities.map(([k]) => {
						const [x, y] = cityXY[k];
						return (
							<g key={k}>
								<circle cx={x} cy={y} r={4} fill={k === 'brisbane' ? '#ff7a66' : '#ffd43b'} />
								<circle cx={x} cy={y} r={4} fill="none" stroke="#ffd43b"><animate attributeName="r" from="4" to="16" dur="1.8s" repeatCount="indefinite" /><animate attributeName="opacity" from="1" to="0" dur="1.8s" repeatCount="indefinite" /></circle>
							</g>
						);
					})}
					{countries.map(([k, name, dx, dy]) => {
						const [x, y] = cityXY[k];
						return <g key={k}><circle cx={x} cy={y} r={4} fill="#ffd43b" /><text x={x + dx} y={y + dy} textAnchor="middle" fontSize={16} fontWeight={700} fill="#f4f1fb">{name}</text></g>;
					})}
					<text x={hub[0] + 14} y={hub[1] - 6} fontSize={15} fontWeight={700} fill="#ffd43b">总部 · 布里斯班</text>
				</svg>
			</div>
			<div style={{ position: 'absolute', left: 70, right: 70, bottom: 66, display: 'grid', gridTemplateColumns: 'repeat(7, minmax(0, 1fr))', gap: 14 }}>
				{cities.map(([k, name], i) => (
					<figure key={k} className="flip" style={{ position: 'relative', height: 196, borderRadius: c('r-input'), overflow: 'hidden', border: `4px solid ${c('canvas-pure')}`, boxShadow: '0 18px 30px -12px rgba(0,0,0,0.7)' }}>
						{[1, 2].map((n) => <img key={n} src={asset(`cities/${k}-${n}.webp`)} alt={`${name}线下活动现场`} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: (tick + i) % 2 === n - 1 ? 1 : 0, transition: 'opacity 0.9s' }} />)}
						<figcaption style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '22px 10px 8px', background: 'linear-gradient(transparent, rgba(23,20,42,0.92))', color: '#fff', fontWeight: 700, fontSize: 21, textAlign: 'center' }}>{name}</figcaption>
					</figure>
				))}
			</div>
		</Page>
	);
}
