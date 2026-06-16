import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

interface Node { id: string; label: string; sub: string; angle: number; color: string; }
const NODES: Node[] = [
	{ id: 'collect', label: '数据采集', sub: 'Reddit / X / RSS', angle: 0, color: colors.indigo },
	{ id: 'decide', label: '选题决策', sub: 'AI 排 Top 3', angle: 72, color: colors.purple },
	{ id: 'generate', label: '4 平台生成', sub: '文案 + 配图', angle: 144, color: colors.orange },
	{ id: 'publish', label: '发布', sub: '自动 schedule', angle: 216, color: colors.green },
	{ id: 'track', label: '追踪 + 回流', sub: '6h·24h·7d', angle: 288, color: colors.blue },
];
const CX = 360, CY = 280, R = 200, NW = 150, NH = 64;
const polar = (a: number, r: number) => { const rad = ((a - 90) * Math.PI) / 180; return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) }; };

const COMPARE = [
	{ side: 'TRADITIONAL', bg: '#fff0f0', color: '#c0392b', team: '传统营销团队 · 6 人', detail: ['2 人选题 + 文案', '1 人设计配图', '1 人多平台发布', '2 人监控 + 复盘'], time: '4 hours/day', output: '4 平台 · 1x' },
	{ side: 'AI-NATIVE', bg: '#f0fdf4', color: '#16a34a', team: 'AI-native · 1 人', detail: ['Pipeline 自动跑', 'AI 自选题', 'AI 自动生图发布', '1 人监控 + 调权重'], time: '30 min/day', output: '4 平台 · 3x' },
];

export default function S14_Step4Loop() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1500, height: '88%', padding: '22px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ marginBottom: 12 }}>
					<div style={{ display: 'inline-block', padding: '6px 14px', background: colors.dark, color: colors.yellow, fontFamily: fonts.mono, fontSize: 16.5, fontWeight: 700, letterSpacing: 2, marginBottom: 10 }}>STEP 4 · 完整 PIPELINE + 反馈闭环</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: '42.5px', fontWeight: 900, letterSpacing: -1 }}>一个会<span style={{ color: colors.rose }}>自我进化</span>的系统 · 这就是 <span style={{ color: colors.dark }}>AI-native</span> 团队</h2>
				</motion.div>

				<div style={{ display: 'flex', gap: 18, alignItems: 'stretch' }}>
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}
						style={{ width: 700, background: colors.white, border, boxShadow: shadow, padding: 12 }}>
						<svg viewBox={`0 0 ${CX * 2} ${CY * 2 + 40}`} width="100%" height="auto" style={{ display: 'block' }}>
							{NODES.map((node, i) => {
								const next = NODES[(i + 1) % NODES.length];
								const from = polar(node.angle, R), to = polar(next.angle, R);
								return <motion.path key={`arc-${node.id}`} d={`M ${from.x} ${from.y} A ${R} ${R} 0 0 1 ${to.x} ${to.y}`} fill="none" stroke={colors.black} strokeWidth={2} strokeDasharray="4 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }} />;
							})}
							{NODES.map((node, i) => {
								const p = polar(node.angle, R);
								return <motion.line key={`fb-${node.id}`} x1={CX} y1={CY} x2={p.x} y2={p.y} stroke={colors.rose} strokeWidth={1.5} strokeDasharray="2 4" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.55 }} transition={{ duration: 0.5, delay: 1.6 + i * 0.08 }} />;
							})}
							<motion.g initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 1.4, type: 'spring', stiffness: 220, damping: 14 }} style={{ transformOrigin: `${CX}px ${CY}px` }}>
								<circle cx={CX} cy={CY} r={70} fill={colors.rose} stroke={colors.black} strokeWidth={3} />
								<text x={CX} y={CY - 14} fontSize={13} fontFamily="Space Mono" fill={colors.yellow} fontWeight={700} textAnchor="middle" letterSpacing={1.5}>FEEDBACK</text>
								<text x={CX} y={CY + 4} fontSize={17.5} fontFamily="DM Sans" fill={colors.white} fontWeight={900} textAnchor="middle">反馈学习</text>
								<text x={CX} y={CY + 24} fontSize={12} fontFamily="Space Mono" fill={colors.white} textAnchor="middle" opacity={0.85}>更新 prompt + 权重</text>
							</motion.g>
							{NODES.map((node, i) => {
								const p = polar(node.angle, R);
								return (
									<motion.g key={node.id} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.45, delay: 0.4 + i * 0.12, type: 'spring', stiffness: 220, damping: 14 }} style={{ transformOrigin: `${p.x}px ${p.y}px` }}>
										<rect x={p.x - NW / 2} y={p.y - NH / 2} width={NW} height={NH} fill={colors.white} stroke={colors.black} strokeWidth={2.5} />
										<rect x={p.x - NW / 2} y={p.y - NH / 2} width={NW} height={8} fill={node.color} />
										<text x={p.x} y={p.y + 4} fontSize={16.5} fontFamily="DM Sans" fontWeight={900} fill={colors.black} textAnchor="middle">{node.label}</text>
										<text x={p.x} y={p.y + 22} fontSize={12} fontFamily="Space Mono" fill="#555" textAnchor="middle">{node.sub}</text>
									</motion.g>
								);
							})}
							<motion.text x={CX} y={CY * 2 + 30} fontSize={13} fontFamily="Space Mono" fill={colors.rose} textAnchor="middle" fontWeight={700} letterSpacing={1.5} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 2.2 }}>↑ 互动数据回流 · AI 分析 hook 转化 / 时段 · 自动调权重</motion.text>
						</svg>
					</motion.div>

					<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14, minWidth: 0 }}>
						{COMPARE.map((c, idx) => (
							<motion.div key={c.side} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45, delay: 0.7 + idx * 0.2 }}
								style={{ flex: 1, background: c.bg, border, boxShadow: shadow, padding: '16px 18px', display: 'flex', flexDirection: 'column' }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 15.5, color: c.color, letterSpacing: 2, marginBottom: 6, fontWeight: 700 }}>{c.side}</div>
								<div style={{ fontFamily: fonts.heading, fontSize: 21, fontWeight: 900, marginBottom: 10 }}>{c.team}</div>
								<div style={{ fontFamily: fonts.body, fontSize: 16.5, color: '#444', lineHeight: 1.6, marginBottom: 10 }}>{c.detail.map((d) => <div key={d}>· {d}</div>)}</div>
								<div style={{ marginTop: 'auto', display: 'flex', gap: 8 }}>
									{[{ l: 'TIME', v: c.time }, { l: 'OUTPUT', v: c.output }].map((m) => (
										<div key={m.l} style={{ flex: 1, background: colors.dark, color: colors.white, padding: '6px 10px' }}>
											<div style={{ fontFamily: fonts.mono, fontSize: 13, opacity: 0.7, letterSpacing: 1.5 }}>{m.l}</div>
											<div style={{ fontFamily: fonts.heading, fontSize: 16.5, fontWeight: 900 }}>{m.v}</div>
										</div>
									))}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</Slide>
	);
}
