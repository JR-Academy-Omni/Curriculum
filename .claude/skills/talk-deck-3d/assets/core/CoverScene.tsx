import { useEffect, useRef } from 'react';
import Globe from './Globe';
import { asset, c } from './kit';
import { offers } from '../data/offers';

const pick = (name: string, company: string) => offers.find((o) => o.name === name && o.company === company)!;
// 绕地球飞行的真实 Offer（取自首页）
const orbit = [pick('W同学', 'Canva'), pick('Ke', 'Atlassian'), pick('Daisy', 'Macquarie Group'), pick('David', 'AWS'), pick('Chen', 'Atlassian'), pick('Zhou同学', 'Nab'), pick('Guang', 'Canva'), pick('Aurora', 'Deloitte')].filter(Boolean);

const CX = 1170, CY = 455, GLOBE = 800;

/** 星空：星点朝观众方向飞来。 */
function Stars() {
	const ref = useRef<HTMLCanvasElement>(null);
	useEffect(() => {
		const cv = ref.current!, ctx = cv.getContext('2d')!;
		cv.width = 1600; cv.height = 900;
		const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const stars = Array.from({ length: 420 }, (_, i) => ({ x: ((i * 7919) % 2000) - 1000, y: ((i * 6151) % 1200) - 600, z: ((i * 4231) % 1000) + 1 }));
		let frame = 0;
		const draw = () => {
			ctx.clearRect(0, 0, 1600, 900);
			for (const s of stars) {
				if (!still) { s.z -= 1.1; if (s.z < 1) s.z = 1000; }
				const k = 420 / s.z, x = CX + s.x * k, y = CY + s.y * k;
				if (x < 0 || x > 1600 || y < 0 || y > 900) continue;
				const near = 1 - s.z / 1000;
				ctx.fillStyle = `rgba(214,226,255,${0.15 + near * 0.75})`;
				ctx.beginPath(); ctx.arc(x, y, 0.6 + near * 1.7, 0, 7); ctx.fill();
			}
			if (!still) frame = requestAnimationFrame(draw);
		};
		frame = requestAnimationFrame(draw);
		return () => cancelAnimationFrame(frame);
	}, []);
	return <canvas ref={ref} aria-hidden style={{ position: 'absolute', inset: 0, width: 1600, height: 900 }} />;
}

/** Offer 卡片沿倾斜轨道环绕地球：近处放大在前，远处缩小转到地球背后。 */
function Orbit() {
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const nodes = Array.from(ref.current!.children) as HTMLElement[];
		const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		let frame = 0, start = 0;
		const draw = (ms: number) => {
			start ||= ms;
			nodes.forEach((el, i) => {
				const a = (still ? 0 : (ms - start) / 6200) + (i / nodes.length) * Math.PI * 2 + 0.9;
				const depth = Math.sin(a); // -1 最远，1 最近
				const x = CX + Math.cos(a) * 340, y = CY + depth * 175 - Math.cos(a) * 85;
				el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${0.74 + depth * 0.26})`;
				el.style.zIndex = depth > 0 ? '4' : '1';
				el.style.opacity = String(depth > 0 ? 1 : 0.5 + (1 + depth) * 0.4);
			});
			if (!still) frame = requestAnimationFrame(draw);
		};
		draw(0);
		if (!still) frame = requestAnimationFrame(draw);
		return () => cancelAnimationFrame(frame);
	}, []);
	return (
		<div ref={ref}>
			{orbit.map((o) => (
				<div key={o.name + o.company} style={{ position: 'absolute', left: 0, top: 0, display: 'flex', alignItems: 'center', gap: 11, padding: '10px 18px 10px 10px', borderRadius: 999, background: 'rgba(255,255,255,0.96)', color: c('ink'), boxShadow: '0 14px 34px -8px rgba(0,0,0,0.65), 0 0 26px rgba(93,174,255,0.3)', whiteSpace: 'nowrap' }}>
					<div style={{ width: 44, height: 44, borderRadius: '50%', background: '#fff', border: `1px solid ${c('hairline')}`, display: 'grid', placeItems: 'center' }}><img src={asset(`offers/${o.logo}`)} alt="" style={{ maxWidth: 34, maxHeight: 34 }} /></div>
					<div><div style={{ fontWeight: 700, fontSize: 18 }}>{o.name} → {o.company}</div><div style={{ fontSize: 14, color: c('slate') }}>{o.role || 'Offer'}</div></div>
				</div>
			))}
		</div>
	);
}

export default function CoverScene() {
	return (
		<>
			<div className="aurora" aria-hidden />
			<Stars />
			<div className="floor" aria-hidden><div /></div>
			<div style={{ position: 'absolute', left: CX - GLOBE / 2, top: CY - GLOBE / 2, zIndex: 2 }}><Globe size={GLOBE} /></div>
			<Orbit />
		</>
	);
}
