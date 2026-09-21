import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Slide, Title, assetPath, colors, fonts, border, shadow, shadowSm } from '../ui';
import { ARCH_GROUPS, ARCH_NODES, ARCH_EDGES, SOURCE_SYSTEMS, FLOW_LEGEND, TALK_STEPS, FOLLOW_UPS, ARCH_ICON_NOTE, type FlowKind, type NodeKind } from '../../data/gcpArchitecture';

const FLOW_COLOR: Record<FlowKind, string> = { sync: colors.black, identity: colors.teal, ingest: colors.blue, trace: colors.purple };
const FLOW_DASH: Record<FlowKind, string | undefined> = { sync: undefined, identity: '7 5', ingest: '7 5', trace: '3 4' };
const NODE_BG: Record<NodeKind, string> = { plain: colors.white, compute: colors.techBg, managed: colors.govBg, data: colors.industryBg };

// 排课页之后：项目做完，面试官让你画架构图。左边是图（GCP 版），右边是讲解顺序。
// 点右侧步骤（或按 1–6）只亮这一段链路；再点一次、按 0 或 Esc 恢复全图。
export default function S17_ArchitectureDiagram() {
	const [step, setStep] = useState<number | null>(null);
	const cur = step === null ? null : TALK_STEPS[step];

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			const n = Number(e.key);
			if (n >= 1 && n <= TALK_STEPS.length) setStep((s) => (s === n - 1 ? null : n - 1));
			if (e.key === '0' || e.key === 'Escape') setStep(null);
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, []);

	const nodeOn = (id: string) => !cur || cur.nodes.includes(id);
	const edgeOn = (id: string) => !cur || cur.edges.includes(id);
	const groupOn = (id: string) => !cur || cur.groups.includes(id) || id === 'cloud' || id === 'vpc';

	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '100%', height: '100%', padding: '30px 64px 50px', display: 'flex', flexDirection: 'column', gap: 10 }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
					style={{ display: 'flex', alignItems: 'center', gap: 14, height: 46 }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, padding: '4px 10px', background: colors.yellow, border: `2px solid ${colors.black}`, whiteSpace: 'nowrap' }}>
						Demo Day 之后 · 面试现场
					</span>
					<Title size="34px">“画一下你这套 Agent 系统的架构？”</Title>
				</motion.div>

				<div style={{ flex: 1, minHeight: 0, display: 'flex', gap: 20 }}>
					{/* 架构图 */}
					<div style={{ position: 'relative', width: 1180, height: 724, flex: 'none' }}>
						{ARCH_GROUPS.map((g, i) => (
							<motion.div key={g.id} initial={{ opacity: 0 }} animate={{ opacity: groupOn(g.id) ? 1 : 0.25 }} transition={{ duration: 0.3, delay: cur ? 0 : 0.1 + i * 0.06 }}
								style={{ position: 'absolute', left: g.x, top: g.y, width: g.w, height: g.h, border: `2px dashed ${colors[g.color]}` }}>
								<span style={{
									position: 'absolute', top: 4, fontFamily: fonts.heading, fontSize: 12, fontWeight: 900, whiteSpace: 'nowrap',
									...(g.titleAlign === 'right' ? { right: 10 } : g.titleAlign === 'center' ? { left: '50%', transform: 'translateX(-50%)' } : { left: g.titleX ?? 10 }),
								}}>{g.title}</span>
								{g.id === 'sources' && (
									<div style={{ position: 'absolute', left: 10, right: 10, top: 30, bottom: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
										{SOURCE_SYSTEMS.map((s) => (
											<div key={s} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, background: colors.white, border: `2px solid ${colors.black}` }}>{s}</div>
										))}
									</div>
								)}
							</motion.div>
						))}

						<svg width={1180} height={724} style={{ position: 'absolute', left: 0, top: 0, overflow: 'visible' }}>
							<defs>
								{FLOW_LEGEND.map((f) => (
									<marker key={f.kind} id={`arch-arrow-${f.kind}`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
										<path d="M0 0 L10 5 L0 10 z" fill={FLOW_COLOR[f.kind]} />
									</marker>
								))}
							</defs>
							{ARCH_EDGES.filter((e) => e.d).map((e, i) => (
								<motion.path key={e.id} d={e.d} fill="none" stroke={FLOW_COLOR[e.kind]} strokeWidth={edgeOn(e.id) && cur ? 3.5 : 2} strokeDasharray={FLOW_DASH[e.kind]}
									markerEnd={`url(#arch-arrow-${e.kind})`}
									initial={{ opacity: 0 }} animate={{ opacity: edgeOn(e.id) ? 1 : 0.1 }} transition={{ duration: 0.3, delay: cur ? 0 : 0.7 + i * 0.05 }} />
							))}
						</svg>

						{ARCH_EDGES.filter((e) => e.label).map((e) => (
							<motion.span key={e.id} initial={{ opacity: 0 }} animate={{ opacity: edgeOn(e.id) ? 1 : 0.12 }} transition={{ duration: 0.3, delay: cur ? 0 : 1.6 }} style={{
								position: 'absolute', left: e.lx, top: e.ly, transform: 'translate(-50%, -50%)', padding: '0 4px', background: colors.warmBg,
								fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, color: FLOW_COLOR[e.kind], whiteSpace: 'nowrap',
							}}>{e.label}</motion.span>
						))}

						{ARCH_NODES.map((n, i) => (
							<motion.div key={n.id} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: nodeOn(n.id) ? 1 : 0.18, scale: 1 }}
								transition={{ duration: 0.3, delay: cur ? 0 : 0.25 + i * 0.04 }}
								style={{
									position: 'absolute', left: n.x, top: n.y, width: n.w, height: n.h, padding: '4px 7px', overflow: 'hidden',
									display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 3,
									background: NODE_BG[n.kind], border: `2px solid ${colors.black}`, boxShadow: cur && nodeOn(n.id) ? shadowSm : 'none',
								}}>
								<div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
									{n.icon && <img src={assetPath(`logos/${n.icon}`)} alt="" style={{ width: 28, height: 28, flex: 'none', objectFit: 'contain' }} />}
									<div style={{ minWidth: 0 }}>
										<div style={{ fontFamily: fonts.heading, fontSize: 12.5, fontWeight: 900, lineHeight: 1.2 }}>{n.title}</div>
										{n.sub && <div style={{ fontSize: 10.5, lineHeight: 1.25, marginTop: 1 }}>{n.sub}</div>}
									</div>
								</div>
								{n.pill && <div style={{ fontSize: 9.5, lineHeight: 1.25, fontWeight: 700, padding: '2px 5px', background: colors.red, color: colors.white, border: `1.5px solid ${colors.black}` }}>{n.pill}</div>}
							</motion.div>
						))}

						{/* 图例 */}
						<div style={{ position: 'absolute', left: 1030, top: 62, width: 150 }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 11.5, fontWeight: 700, marginBottom: 4 }}>Legend</div>
							{FLOW_LEGEND.map((f) => (
								<div key={f.kind} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11.5, lineHeight: 1.9 }}>
									<svg width={40} height={8}><path d="M0 4 H38" stroke={FLOW_COLOR[f.kind]} strokeWidth={2.5} strokeDasharray={FLOW_DASH[f.kind]} /></svg>
									{f.label}
								</div>
							))}
						</div>
					</div>

					{/* 讲解顺序 */}
					<motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45, delay: 0.5 }}
						style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700 }}>讲解顺序 · 示例话术（按 1–6）</div>
						{TALK_STEPS.map((s, i) => {
							const on = step === i;
							return (
								<button key={s.title} onClick={() => setStep(on ? null : i)}
									style={{ textAlign: 'left', cursor: 'pointer', padding: '6px 10px', fontFamily: fonts.body, color: colors.black, background: on ? colors.yellow : colors.white, border, boxShadow: on ? shadow : 'none', opacity: cur && !on ? 0.55 : 1 }}>
									<div style={{ fontFamily: fonts.heading, fontSize: 15.5, fontWeight: 900 }}>
										<span style={{ fontFamily: fonts.mono, color: colors.red }}>{i + 1}</span> {s.title}
									</div>
									{on && <div style={{ fontSize: 13.5, lineHeight: 1.45, marginTop: 3 }}>{s.say}</div>}
								</button>
							);
						})}
						<div style={{ marginTop: 'auto', marginBottom: 26, padding: '8px 10px', background: colors.dark, color: colors.white, border }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 11.5, fontWeight: 700, color: colors.yellow, marginBottom: 4 }}>画完之后常见的追问 · 讲者观点</div>
							{FOLLOW_UPS.map((q) => (
								<div key={q} style={{ fontSize: 13, lineHeight: 1.5 }}>· {q}</div>
							))}
						</div>
					</motion.div>
				</div>

				<p style={{ fontFamily: fonts.mono, fontSize: 11, color: colors.dark, opacity: 0.6, margin: 0, marginRight: 96 }}>{ARCH_ICON_NOTE}</p>
			</div>
		</Slide>
	);
}
