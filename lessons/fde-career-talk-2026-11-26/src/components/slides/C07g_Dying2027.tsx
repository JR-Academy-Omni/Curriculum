import { useState } from 'react';
import { motion } from 'framer-motion';
import { Slide } from '../ui';
import { colors, fonts } from '../kit';
import { StillScope, useStill, ini } from '../live';
import { assetPath } from '../ui';
import '../cover3d/cover3d.css';

// 取自 jracademy.ai/career-impact-map 的高暴露职业（careers.ts，riskLevel = High）；
// owner 2026-11-26：Graphic Designer、Video Editor、Actor 是 owner 加的，不在职业影响地图里；用海外通用的英文岗位名；只写代码的 Software Engineer 列为消失（owner 2026-11-26）；墓碑式设计
const JOBS: [string, string][] = [
	['Software Engineer', 'AI Engineer'],
	['Grad / Junior Developer', 'AI-ready Software Engineer'],
	['Front-end Developer', 'AI Full-stack Engineer'],
	['QA Tester', 'AI Automation Specialist'],
	['IT Support', 'AI Automation Specialist'],
	['Data Analyst', 'AI Data Analyst'],
	['Data Entry Clerk', 'Data Quality Specialist'],
	['Operations Assistant', 'Operations Analyst'],
	['Bookkeeping Accountant', 'AI Finance Analyst'],
	['Bookkeeper', 'AI Finance Analyst'],
	['Marketing Coordinator', 'AI Marketing Operator'],
	['Ad Buyer', 'AI Growth Marketer'],
	['SDR', 'AI-assisted Sales Rep'],
	['Cold Caller', 'AI-assisted Sales Rep'],
	['HR Assistant', 'AI HR Operations'],
	['Resume Screener', 'AI Talent Partner'],
	['UI/UX Designer', 'Product Designer'],
	['Graphic Designer', 'AI Brand Designer'],
	['Video Editor', 'AI Video Producer'],
	['Actor', 'Live Performer'],
	['Business Analyst', 'AI Product Manager / FDE'],
	['Paralegal', 'Legal Operations Specialist'],
	['Document Reviewer', 'Legal Operations Specialist'],
	['Customer Service Rep', 'AI Customer Success Manager'],
	['Call Center Agent', 'AI Support Specialist'],
	['Executive Assistant', 'Chief of Staff'],
	['Receptionist', 'AI Office Manager'],
];
const ROWS = [0, 7, 14, 21];
// 由远到近：后排小而暗，前排大而亮
const ROW_STYLE = [
	{ w: 152, h: 112, name: 13, dim: .88 },
	{ w: 168, h: 124, name: 14, dim: .92 },
	{ w: 184, h: 134, name: 14.5, dim: .96 },
	{ w: 200, h: 146, name: 15.5, dim: 1 },
];
const ENGRAVE = { color: '#ffffff', textShadow: '0 1px 2px rgba(0,0,0,.9)' };

function Stone({ name, to, row, k, idx, still }: { name: string; to: string; row: number; k: number; idx: number; still: boolean }) {
	const st = ROW_STYLE[row];
	const shape = row === 0 ? (idx % 3) : (idx * 7 + row) % 2; // 0 拱顶 1 方碑 2 十字架（只放在最后一排，避免压到上一排）
	const radius = shape === 1 ? '14px 14px 6px 6px' : '50% 50% 6px 6px / 38% 38% 6px 6px';
	return <motion.div initial={ini(still, { rotateX: 82, opacity: 0, transformPerspective: 700 })} animate={{ rotateX: 0, opacity: 1, transformPerspective: 700 }}
		transition={{ delay: still ? 0 : row * .28 + k * .06, type: 'spring', stiffness: 150, damping: 17 }}
		style={{ position: 'relative', width: st.w, height: st.h + 22, display: 'flex', flexDirection: 'column', alignItems: 'center', filter: `brightness(${st.dim})`, transformOrigin: '50% 100%' }}>
		{shape === 2 && <div aria-hidden style={{ position: 'absolute', top: -26, left: '50%', transform: 'translateX(-50%)', width: 14, height: 34, background: 'linear-gradient(180deg,#5d586b,#3c3848)', borderRadius: 3 }}>
			<div style={{ position: 'absolute', top: 8, left: -10, width: 34, height: 11, background: 'linear-gradient(180deg,#5d586b,#3c3848)', borderRadius: 3 }} />
		</div>}
		<div style={{ width: '100%', height: st.h, borderRadius: radius, background: 'linear-gradient(160deg, #5f5a6e 0%, #45414f 45%, #2f2c38 100%)', boxShadow: 'inset 3px 3px 0 rgba(255,255,255,.08), inset -4px -6px 0 rgba(0,0,0,.35), 0 10px 18px rgba(0,0,0,.45)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '10px 10px 8px', boxSizing: 'border-box', position: 'relative', overflow: 'hidden' }}>
			<div aria-hidden style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,.07), transparent 55%)' }} />
			<span style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 13, letterSpacing: 4, ...ENGRAVE }}>R · I · P</span>
			<span style={{ fontFamily: fonts.heading, fontSize: st.name, fontWeight: 800, lineHeight: 1.18, marginTop: 3, ...ENGRAVE }}>{name}</span>
			<span style={{ fontFamily: 'Georgia, serif', fontSize: 11, fontStyle: 'italic', marginTop: 2, ...ENGRAVE }}>2026 – 2027</span>
			<span style={{ marginTop: 5, fontSize: 10.5, fontWeight: 700, color: '#ffcf70', textShadow: '0 0 8px rgba(255,190,80,.55)', lineHeight: 1.2 }}>Reborn as {to}</span>
		</div>
		<div aria-hidden style={{ width: st.w * 1.25, height: 22, marginTop: -6, borderRadius: '50%', background: 'radial-gradient(ellipse at center, #1f2a1c 0%, #141b13 60%, transparent 72%)' }} />
	</motion.div>;
}

function Body() {
	const still = useStill();
	const [dead, setDead] = useState(still);
	const btn = (on: boolean, bg: string, fg: string) => ({ fontFamily: fonts.body, fontSize: 18, fontWeight: 900, cursor: still ? 'default' : 'pointer', padding: '8px 20px', borderRadius: 999, border: `2.5px solid ${dead ? '#8e88a8' : colors.dark}`, background: on ? bg : 'transparent', color: on ? fg : dead ? '#cfcbe0' : colors.dark, whiteSpace: 'nowrap' as const, flexShrink: 0 });
	return <div data-night={dead || undefined} style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
		{dead && <img src={assetPath('brand/logo-zh-white.png')} alt="" style={{ position: 'absolute', top: 18, right: 22, height: 30, zIndex: 60 }} />}
		{/* 夜景背景 */}
		<motion.div aria-hidden initial={false} animate={{ opacity: dead ? 1 : 0 }} transition={{ duration: .8 }} style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 78% 8%, #3a3560 0%, #1b1830 38%, #0d0b18 100%)' }}>
			<div className="c3d-floor" style={{ height: 360, opacity: .32 }}><div /></div>
			<div style={{ position: 'absolute', right: 150, top: 150, width: 74, height: 74, borderRadius: '50%', background: '#f3eccd', boxShadow: '0 0 60px 18px rgba(243,236,205,.25)' }} />
			{[...Array(26)].map((_, i) => <span key={i} style={{ position: 'absolute', left: `${(i * 37) % 100}%`, top: `${(i * 23) % 30}%`, width: 2, height: 2, borderRadius: 1, background: 'rgba(255,255,255,.5)' }} />)}
			<div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '62%', background: 'linear-gradient(180deg, transparent 0%, #121a12 30%, #0b0f0a 100%)' }} />
			<motion.div animate={still ? {} : { x: [-40, 40, -40] }} transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
				style={{ position: 'absolute', left: -80, right: -80, bottom: 30, height: 120, background: 'radial-gradient(ellipse at center, rgba(200,200,230,.13), transparent 70%)' }} />
		</motion.div>
		<div style={{ position: 'absolute', inset: 0, padding: '62px 64px 40px', display: 'flex', flexDirection: 'column', gap: 12 }}>
			<div style={{ display: 'flex', alignItems: 'center', gap: 14, height: 52 }}>
				<div style={{ lineHeight: 1.15 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: colors.red, letterSpacing: 1 }}>01 · 哪些岗位会消失</div>
					<div style={{ fontFamily: dead ? 'Georgia, serif' : fonts.heading, fontSize: 28, fontWeight: 900, whiteSpace: 'nowrap', color: dead ? '#e9e4f5' : colors.dark, letterSpacing: dead ? 1 : 0 }}>{dead ? `In Memoriam · 2026–2027：这 ${JOBS.length} 个岗位` : `这 ${JOBS.length} 个岗位，过去都在招`}</div>
				</div>
				<button type="button" className="live-toggle" onClick={() => setDead(false)} aria-pressed={!dead} style={{ ...btn(!dead, colors.yellow, colors.dark), marginLeft: 16 }}>过去</button>
				<button type="button" className="live-toggle" onClick={() => setDead(true)} aria-pressed={dead} style={btn(dead, '#b3261e', colors.white)}>2026–2027 →</button>
				<span style={{ marginLeft: 'auto', fontSize: 12, color: dead ? '#8e88a8' : '#514c48', textAlign: 'right', lineHeight: 1.45 }}>来源：匠人学院职业影响地图 jracademy.ai/career-impact-map 高暴露职业<br />Graphic Designer、Video Editor、Actor 为讲者补充</span>
			</div>
			{dead
				? <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 0 }}>
					{ROWS.map((start, r) => <div key={r} style={{ display: 'flex', justifyContent: 'center', gap: 14 + r * 4, marginTop: r ? -6 : 0 }}>
						{JOBS.slice(start, start + 7).map(([name, to], k) => <Stone key={name} name={name} to={to} row={r} k={k} idx={start + k} still={still} />)}
					</div>)}
				</div>
				: <div style={{ flex: 1, minHeight: 0, display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gridTemplateRows: 'repeat(4, 1fr)', gap: 10 }}>
					{JOBS.map(([name], i) => <motion.div key={name} initial={ini(still, { opacity: 0, y: 10 })} animate={{ opacity: 1, y: 0 }} transition={{ delay: still ? 0 : i * .02 }}
						style={{ border: `2px solid ${colors.dark}`, borderRadius: 14, background: colors.white, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '10px 14px', gap: 8, boxShadow: '4px 4px 0 rgba(16,22,47,.1)' }}>
						<span style={{ fontFamily: fonts.heading, fontSize: 19, fontWeight: 900, lineHeight: 1.2 }}>{name}</span>
						<span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5, fontWeight: 800, color: '#2f8a1f' }}>
							<motion.span animate={still ? {} : { opacity: [1, .3, 1] }} transition={{ duration: 1.6, repeat: Infinity }} style={{ width: 8, height: 8, borderRadius: 4, background: '#22c55e' }} />Hiring
						</span>
					</motion.div>)}
				</div>}
		</div>
	</div>;
}

export default function C07g_Dying2027() {
	return <Slide bg={colors.warmBg} style={{ position: 'relative' }}>
		<StillScope><Body /></StillScope>
	</Slide>;
}
