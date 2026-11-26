import { useEffect, useRef } from 'react';
import type { MouseEvent } from 'react';
import { assetPath } from '../ui';
import { fonts } from '../kit';
import { StillScope, useStill } from '../live';
import Globe from '../cover3d/Globe';
import '../cover3d/cover3d.css';

// 封面：参照 talk-deck-3d 公司介绍封面（星空、极光、流动地面、3D 地球、环绕卡片、立体铭牌）
const CX = 1150, CY = 450, GLOBE = 760;
// 环绕卡片：课件里引用过的真实 FDE／AI 落地岗位（第 15、19、20 页来源）
const ORBIT: { logo?: string; co: string; role: string }[] = [
	{ logo: 'logos/openai.png', co: 'OpenAI · Sydney', role: 'Forward Deployed Engineer' },
	{ logo: 'logos/palantir.png', co: 'Palantir · Australia', role: 'FDSE Internship' },
	{ logo: 'logos/fis.png', co: 'FIS · Melbourne', role: 'Forward Deployed Engineer' },
	{ co: 'Databricks · Sydney', role: 'Sr. Forward Deployed Engineer' },
	{ logo: 'logos/nab.png', co: 'NAB · Melbourne', role: 'Senior Consultant, AI Engineer' },
	{ co: 'Deloitte · Sydney', role: 'Forward Deployed Engineer' },
	{ logo: 'logos/sap.png', co: 'SAP · Southbank', role: 'Business AI Architect' },
];

function Stars({ still }: { still: boolean }) {
	const ref = useRef<HTMLCanvasElement>(null);
	useEffect(() => {
		const cv = ref.current!, ctx = cv.getContext('2d')!;
		cv.width = 1600; cv.height = 900;
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
	}, [still]);
	return <canvas ref={ref} aria-hidden style={{ position: 'absolute', inset: 0, width: 1600, height: 900 }} />;
}

function Orbit({ still }: { still: boolean }) {
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const nodes = Array.from(ref.current!.children) as HTMLElement[];
		let frame = 0, start = 0;
		const draw = (ms: number) => {
			start ||= ms;
			nodes.forEach((el, i) => {
				const a = (still ? 0 : (ms - start) / 6800) + (i / nodes.length) * Math.PI * 2 + 0.9;
				const depth = Math.sin(a);
				const x = CX + Math.cos(a) * 330, y = CY + depth * 170 - Math.cos(a) * 80;
				el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${0.74 + depth * 0.26})`;
				el.style.zIndex = depth > 0 ? '4' : '1';
				el.style.opacity = String(depth > 0 ? 1 : 0.5 + (1 + depth) * 0.4);
			});
			if (!still) frame = requestAnimationFrame(draw);
		};
		draw(0);
		if (!still) frame = requestAnimationFrame(draw);
		return () => cancelAnimationFrame(frame);
	}, [still]);
	return <div ref={ref}>
		{ORBIT.map(o => <div key={o.co} style={{ position: 'absolute', left: 0, top: 0, display: 'flex', alignItems: 'center', gap: 11, padding: '10px 18px 10px 10px', borderRadius: 999, background: 'rgba(255,255,255,.96)', color: '#1f1b2d', boxShadow: '0 14px 34px -8px rgba(0,0,0,.65), 0 0 26px rgba(93,174,255,.3)', whiteSpace: 'nowrap' }}>
			<div style={{ width: 44, height: 44, borderRadius: '50%', background: '#fff', border: '1px solid #e7e3dc', display: 'grid', placeItems: 'center', fontFamily: fonts.heading, fontWeight: 900, fontSize: 18 }}>
				{o.logo ? <img src={assetPath(o.logo)} alt="" style={{ maxWidth: 32, maxHeight: 32 }} /> : o.co[0]}
			</div>
			<div><div style={{ fontWeight: 800, fontSize: 18 }}>{o.co}</div><div style={{ fontSize: 14, color: '#6b6680' }}>{o.role}</div></div>
		</div>)}
	</div>;
}

function Body() {
	const still = useStill();
	const onMove = (e: MouseEvent<HTMLDivElement>) => {
		const r = e.currentTarget.getBoundingClientRect();
		e.currentTarget.style.setProperty('--px', String(((e.clientX - r.left) / r.width) * 2 - 1));
		e.currentTarget.style.setProperty('--py', String(((e.clientY - r.top) / r.height) * 2 - 1));
	};
	const onLeave = (e: MouseEvent<HTMLDivElement>) => { e.currentTarget.style.setProperty('--px', '0'); e.currentTarget.style.setProperty('--py', '0'); };
	return <div data-night style={{ position: 'absolute', inset: 0, background: '#0d0b1c', overflow: 'hidden', color: '#f4f1ff' }}>
		<img src={assetPath('brand/logo-zh-white.png')} alt="" style={{ position: 'absolute', top: 18, right: 22, height: 30, zIndex: 60 }} />
		<div className="c3d-scene" onMouseMove={still ? undefined : onMove} onMouseLeave={onLeave} style={{ position: 'absolute', inset: 0 }}>
			<div className="c3d-aurora" aria-hidden />
			<Stars still={still} />
			<div className="c3d-floor" aria-hidden><div /></div>
			<div style={{ position: 'absolute', left: CX - GLOBE / 2, top: CY - GLOBE / 2, zIndex: 2 }}><Globe size={GLOBE} still={still} /></div>
			<Orbit still={still} />
			<div className="c3d-stage" style={{ zIndex: 6, pointerEvents: 'none' }}>
				<div style={{ position: 'absolute', left: 110, top: 120, width: 720, transform: 'translateZ(90px)' }}>
					<div className="c3d-in"><p style={{ fontSize: 22, fontWeight: 800, color: '#ffd43b' }}>匠人学院公开课 · 2026.11.26 · 线上 60 分钟</p></div>
					<div className="c3d-slab c3d-in" style={{ animationDelay: '.15s', marginTop: 26 }}>
						<div style={{ fontFamily: fonts.heading, fontWeight: 900, color: '#1f1b2d', lineHeight: 1 }}>
							<span style={{ fontSize: 64, letterSpacing: -2, verticalAlign: 'middle' }}>一场讲懂</span>
							<span style={{ fontSize: 150, letterSpacing: -6, marginLeft: 14, verticalAlign: 'middle', color: '#ff5757', textShadow: '1px 1px 0 #10162f, 2px 2px 0 #10162f, 3px 3px 0 #10162f, 4px 4px 0 #10162f, 5px 5px 0 #10162f, 6px 6px 0 #10162f' }}>FDE</span>
						</div>
					</div>
					<div className="c3d-in" style={{ animationDelay: '.35s' }}>
						<h1 className="c3d-shine" style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 40, lineHeight: 1.35, marginTop: 44, whiteSpace: 'nowrap' }}>FDE 做什么、怎么入行、该补什么</h1>
						<p style={{ fontSize: 22, color: '#d8d4ea', marginTop: 12 }}>Forward Deployed Engineer · Lightman Wang</p>
					</div>
					<div className="c3d-in" style={{ animationDelay: '.55s', display: 'flex', gap: 26, marginTop: 46 }}>
						{[['+1,523%', '中国 FDE 岗位同比'], ['643 → 5,330', 'Indeed FDE 岗位一年'], ['A$160–240K', '澳洲资深 FDE 底薪']].map(([n, l]) => <div key={l} style={{ borderLeft: '3px solid #ffd43b', paddingLeft: 16 }}>
							<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 32, lineHeight: 1.15, whiteSpace: 'nowrap' }}>{n}</div>
							<div style={{ fontSize: 16, color: '#b9b4cf' }}>{l}</div>
						</div>)}
					</div>
				</div>
			</div>
		</div>
	</div>;
}

export default function S01_Cover() {
	return <div style={{ width: '100%', height: '100%', position: 'relative' }}>
		<StillScope><Body /></StillScope>
	</div>;
}
