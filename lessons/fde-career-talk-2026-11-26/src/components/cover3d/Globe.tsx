import { useEffect, useRef } from 'react';
import { land } from './land';

// 三个市场的城市 [纬度, 经度]：第一个悉尼为起点；澳洲、美国、中国
const places: [number, number][] = [[-33.87, 151.21], [-37.81, 144.96], [-27.47, 153.03], [37.77, -122.4], [40.71, -74.0], [39.9, 116.4], [31.23, 121.47]];
const rad = Math.PI / 180;
type V = [number, number, number];
const vec = (lat: number, lon: number): V => [Math.cos(lat * rad) * Math.sin(lon * rad), Math.sin(lat * rad), Math.cos(lat * rad) * Math.cos(lon * rad)];
const dots: V[] = [];
for (let i = 0; i < land.length; i += 2) dots.push(vec(land[i], land[i + 1]));

/** canvas 3D 地球：点阵陆地、悉尼飞往中美的弧线，缓慢摆动（改自 talk-deck-3d 的 Globe）。 */
export default function Globe({ size = 760, still }: { size?: number; still: boolean }) {
	const ref = useRef<HTMLCanvasElement>(null);
	useEffect(() => {
		const canvas = ref.current!, ctx = canvas.getContext('2d')!, dpr = 2;
		canvas.width = canvas.height = size * dpr;
		const R = size * 0.4, mid = size / 2, tilt = 8 * rad;
		const hubs = places.map(([a, b]) => vec(a, b));
		let frame = 0;
		const draw = (ms: number) => {
			const center = (150 + (still ? 0 : Math.sin(ms / 9000) * 40)) * rad;
			const ca = Math.cos(-center), sa = Math.sin(-center), ct = Math.cos(tilt), st = Math.sin(tilt);
			const project = ([x, y, z]: V, k = 1) => {
				const x1 = x * ca + z * sa, z1 = -x * sa + z * ca;
				const y2 = y * ct - z1 * st, z2 = y * st + z1 * ct;
				return { x: mid + x1 * R * k, y: mid - y2 * R * k, z: z2 };
			};
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, size, size);
			const glow = ctx.createRadialGradient(mid, mid, R * 0.9, mid, mid, R * 1.24);
			glow.addColorStop(0, 'rgba(93,174,255,0.38)'); glow.addColorStop(1, 'rgba(93,174,255,0)');
			ctx.fillStyle = glow; ctx.beginPath(); ctx.arc(mid, mid, R * 1.24, 0, 7); ctx.fill();
			const ball = ctx.createRadialGradient(mid - R * 0.4, mid - R * 0.45, R * 0.1, mid, mid, R);
			ball.addColorStop(0, '#3b3566'); ball.addColorStop(1, '#17142a');
			ctx.fillStyle = ball; ctx.beginPath(); ctx.arc(mid, mid, R, 0, 7); ctx.fill();
			for (const d of dots) {
				const p = project(d); if (p.z < 0) continue;
				ctx.fillStyle = `rgba(190,214,255,${0.18 + p.z * 0.72})`;
				ctx.beginPath(); ctx.arc(p.x, p.y, 1.1 + p.z * 1.5, 0, 7); ctx.fill();
			}
			ctx.lineWidth = 2;
			hubs.slice(3).forEach((to, n) => {
				const from = hubs[0];
				const pts = Array.from({ length: 49 }, (_, i) => {
					const t = i / 48;
					const m: V = [from[0] + (to[0] - from[0]) * t, from[1] + (to[1] - from[1]) * t, from[2] + (to[2] - from[2]) * t];
					const len = Math.hypot(...m) || 1;
					return project([m[0] / len, m[1] / len, m[2] / len], 1 + Math.sin(Math.PI * t) * 0.22);
				});
				ctx.strokeStyle = 'rgba(255,212,59,0.78)'; ctx.beginPath();
				let pen = false;
				for (const p of pts) { if (p.z < -0.05) { pen = false; continue; } if (pen) ctx.lineTo(p.x, p.y); else ctx.moveTo(p.x, p.y); pen = true; }
				ctx.stroke();
				const head = pts[Math.floor((((still ? 0.6 : ms / 2600) + n * 0.21) % 1) * 48)];
				if (head.z > 0) { ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(head.x, head.y, 3.4, 0, 7); ctx.fill(); }
			});
			hubs.forEach((h, i) => {
				const p = project(h); if (p.z < 0) return;
				const pulse = still ? 0.5 : (ms / 1400 + i * 0.13) % 1;
				ctx.strokeStyle = `rgba(255,212,59,${1 - pulse})`; ctx.beginPath(); ctx.arc(p.x, p.y, 4 + pulse * 14, 0, 7); ctx.stroke();
				ctx.fillStyle = i === 0 ? '#ff7a66' : '#ffd43b'; ctx.beginPath(); ctx.arc(p.x, p.y, i === 0 ? 7 : 4.5, 0, 7); ctx.fill();
			});
			if (!still) frame = requestAnimationFrame(draw);
		};
		frame = requestAnimationFrame(draw);
		return () => cancelAnimationFrame(frame);
	}, [size, still]);
	return <canvas ref={ref} role="img" aria-label="3D 地球：从悉尼连到美国和中国，对应课上讲的三个 FDE 市场" style={{ width: size, height: size, display: 'block' }} />;
}
