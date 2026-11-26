import { useEffect, useRef } from 'react';
import { land } from '../data/land';

// 匠人覆盖的城市与国家 [纬度, 经度]，第一个是总部
const places: [number, number][] = [[-27.47, 153.03], [-33.87, 151.21], [-37.81, 144.96], [1.35, 103.82], [3.14, 101.69], [39.9, 116.4], [-36.85, 174.76], [51.5, -0.12], [37.77, -122.4], [43.65, -79.38]];

const rad = Math.PI / 180;
type V = [number, number, number];
const vec = (lat: number, lon: number): V => [Math.cos(lat * rad) * Math.sin(lon * rad), Math.sin(lat * rad), Math.cos(lat * rad) * Math.cos(lon * rad)];
const dots: V[] = [];
for (let i = 0; i < land.length; i += 2) dots.push(vec(land[i], land[i + 1]));

/** 用 canvas 画的 3D 地球：点阵陆地、从总部飞出的弧线，缓慢自转。 */
export default function Globe({ size = 620 }: { size?: number }) {
	const ref = useRef<HTMLCanvasElement>(null);
	useEffect(() => {
		const canvas = ref.current!;
		const ctx = canvas.getContext('2d')!;
		const dpr = 2;
		canvas.width = canvas.height = size * dpr;
		const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const R = size * 0.4, mid = size / 2, tilt = 6 * rad;
		const hubs = places.map(([a, b]) => vec(a, b));
		let frame = 0;
		const draw = (ms: number) => {
			// 在亚太上空来回摆动，让大部分标记保持可见
			const center = (108 + (still ? 0 : Math.sin(ms / 9000) * 38)) * rad;
			const ca = Math.cos(-center), sa = Math.sin(-center), ct = Math.cos(tilt), st = Math.sin(tilt);
			const project = ([x, y, z]: V, k = 1) => {
				const x1 = x * ca + z * sa, z1 = -x * sa + z * ca;
				const y2 = y * ct - z1 * st, z2 = y * st + z1 * ct;
				return { x: mid + x1 * R * k, y: mid - y2 * R * k, z: z2 };
			};
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			ctx.clearRect(0, 0, size, size);
			const glow = ctx.createRadialGradient(mid, mid, R * 0.9, mid, mid, R * 1.24);
			glow.addColorStop(0, 'rgba(93,174,255,0.38)'); glow.addColorStop(1, 'rgba(93,174,255,0)');
			ctx.fillStyle = glow; ctx.beginPath(); ctx.arc(mid, mid, R * 1.24, 0, 7); ctx.fill();
			const ball = ctx.createRadialGradient(mid - R * 0.4, mid - R * 0.45, R * 0.1, mid, mid, R);
			ball.addColorStop(0, '#3b3566'); ball.addColorStop(1, '#17142a');
			ctx.fillStyle = ball; ctx.beginPath(); ctx.arc(mid, mid, R, 0, 7); ctx.fill();
			for (const d of dots) {
				const p = project(d);
				if (p.z < 0) continue;
				ctx.fillStyle = `rgba(190,214,255,${0.18 + p.z * 0.72})`;
				ctx.beginPath(); ctx.arc(p.x, p.y, 1.1 + p.z * 1.5, 0, 7); ctx.fill();
			}
			// 弧线
			ctx.lineWidth = 2;
			hubs.slice(3).forEach((to, n) => {
				const from = hubs[0];
				const pts = Array.from({ length: 49 }, (_, i) => {
					const t = i / 48;
					const m: V = [from[0] + (to[0] - from[0]) * t, from[1] + (to[1] - from[1]) * t, from[2] + (to[2] - from[2]) * t];
					const len = Math.hypot(...m) || 1;
					return project([m[0] / len, m[1] / len, m[2] / len], 1 + Math.sin(Math.PI * t) * 0.2);
				});
				ctx.strokeStyle = 'rgba(255,212,59,0.75)';
				ctx.beginPath();
				let pen = false;
				for (const p of pts) {
					if (p.z < -0.05) { pen = false; continue; }
					if (pen) ctx.lineTo(p.x, p.y); else ctx.moveTo(p.x, p.y);
					pen = true;
				}
				ctx.stroke();
				const head = pts[Math.floor((((still ? 0.6 : ms / 2600) + n * 0.17) % 1) * 48)];
				if (head.z > 0) { ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(head.x, head.y, 3.2, 0, 7); ctx.fill(); }
			});
			hubs.forEach((h, i) => {
				const p = project(h);
				if (p.z < 0) return;
				const pulse = still ? 0.5 : (ms / 1400 + i * 0.13) % 1;
				ctx.strokeStyle = `rgba(255,212,59,${1 - pulse})`; ctx.beginPath(); ctx.arc(p.x, p.y, 4 + pulse * 14, 0, 7); ctx.stroke();
				ctx.fillStyle = i === 0 ? '#ff7a66' : '#ffd43b'; ctx.beginPath(); ctx.arc(p.x, p.y, i === 0 ? 7 : 4.5, 0, 7); ctx.fill();
			});
			if (!still) frame = requestAnimationFrame(draw);
		};
		frame = requestAnimationFrame(draw);
		return () => cancelAnimationFrame(frame);
	}, [size]);
	return <canvas ref={ref} role="img" aria-label="3D 地球：从布里斯班总部连接到匠人覆盖的城市与国家" style={{ width: size, height: size, display: 'block' }} />;
}
