import { motion } from 'framer-motion';
import { Slide, Inner, Title, colors, fonts, border } from '../ui';

// X 轴 4 个季度时间点：2023 Q1 / 2024 Q1 / 2025 Q1 / 2026 Q1
// Y 轴 baseline = 100（2023 Q1 招聘 index）—— 上方涨 / 下方跌

interface Line {
	name: string;
	change: string;
	color: string;
	points: number[];
	direction: 'up' | 'down';
}

const LINES: Line[] = [
	// 上升 5 条
	{ name: 'AI Agent Developer', change: '+986%', color: '#16a34a', points: [100, 220, 500, 1086], direction: 'up' },
	{ name: 'AI Adoption Specialist', change: '+380%', color: '#22c55e', points: [100, 130, 280, 480], direction: 'up' },
	{ name: 'AI Engineer', change: '+300%', color: '#10b981', points: [100, 180, 280, 400], direction: 'up' },
	{ name: 'GEO Specialist', change: '+240%', color: '#06b6d4', points: [100, 150, 240, 340], direction: 'up' },
	{ name: 'AI Trainer', change: '+112%', color: '#0891b2', points: [100, 130, 180, 212], direction: 'up' },
	// 下降 5 条 —— JR 学员核心人群熟悉的岗位（来源 /career-impact-map High Risk）
	{ name: 'Bookkeeper', change: '-35%', color: '#fb923c', points: [100, 92, 78, 65], direction: 'down' },
	{ name: 'Marketing Coordinator', change: '-42%', color: '#fca5a5', points: [100, 90, 76, 58], direction: 'down' },
	{ name: 'Admin Assistant', change: '-45%', color: '#f87171', points: [100, 88, 72, 55], direction: 'down' },
	{ name: 'BI Dashboard Analyst', change: '-52%', color: '#ef4444', points: [100, 84, 64, 48], direction: 'down' },
	{ name: 'CRUD Developer', change: '-65%', color: '#dc2626', points: [100, 78, 50, 35], direction: 'down' },
];

const X_LABELS = ['2023 Q1', '2024 Q1', '2025 Q1', '2026 Q1'];

// Chart 几何
const CHART_W = 1320;
const CHART_H = 560;
const PAD_L = 70;
const PAD_R = 220;
const TOP_H = 340;     // 上方诞生区高度
const BOTTOM_H = 160;  // 下方消失区高度
const PAD_T = 20;
const BASELINE_Y = PAD_T + TOP_H;
const PLOT_W = CHART_W - PAD_L - PAD_R;

const BORN_MAX = 1100;
const DYING_MIN = 30;

function yFor(line: Line, value: number): number {
	if (line.direction === 'up') {
		// 100 → baselineY；BORN_MAX → PAD_T
		return BASELINE_Y - ((value - 100) / (BORN_MAX - 100)) * TOP_H;
	}
	// 100 → baselineY；DYING_MIN → baselineY + BOTTOM_H
	return BASELINE_Y + ((100 - value) / (100 - DYING_MIN)) * BOTTOM_H;
}

function xFor(idx: number): number {
	return PAD_L + (idx / 3) * PLOT_W;
}

function pathFor(line: Line): string {
	return line.points
		.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xFor(i).toFixed(1)} ${yFor(line, v).toFixed(1)}`)
		.join(' ');
}

export default function S02_ContrastData() {
	// label 反碰撞 —— 上下区分开处理
	const ups = LINES
		.filter(l => l.direction === 'up')
		.map(l => ({ line: l, y: yFor(l, l.points[l.points.length - 1]) }))
		.sort((a, b) => a.y - b.y);
	const downs = LINES
		.filter(l => l.direction === 'down')
		.map(l => ({ line: l, y: yFor(l, l.points[l.points.length - 1]) }))
		.sort((a, b) => a.y - b.y);
	const MIN_GAP = 30;
	for (let i = 1; i < ups.length; i++) {
		if (ups[i].y - ups[i - 1].y < MIN_GAP) ups[i].y = ups[i - 1].y + MIN_GAP;
	}
	for (let i = 1; i < downs.length; i++) {
		if (downs[i].y - downs[i - 1].y < MIN_GAP) downs[i].y = downs[i - 1].y + MIN_GAP;
	}
	const labelLines = [...ups, ...downs];

	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', gap: 14 }}>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ width: '100%' }}
				>
					<div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
						<span style={{
							padding: '5px 12px', background: colors.dark, color: colors.white,
							fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, letterSpacing: 2,
						}}>过去 36 个月 · 招聘 INDEX</span>
						<span style={{
							padding: '5px 12px', background: '#16a34a', color: colors.white,
							fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, letterSpacing: 1,
						}}>↑ 上升 5 个</span>
						<span style={{
							padding: '5px 12px', background: colors.explosive, color: colors.white,
							fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, letterSpacing: 1,
						}}>↓ 下降 5 个</span>
					</div>
					<Title size="44px">
						这些岗位<span style={{ color: '#16a34a' }}>刚刚诞生</span> · 那些岗位<span style={{ color: colors.explosive }}>正在消失</span>
					</Title>
				</motion.div>

				{/* Chart */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.3, delay: 0.15 }}
					style={{ background: colors.white, border, padding: 12, width: '100%' }}
				>
					<svg viewBox={`0 0 ${CHART_W} ${CHART_H}`} width="100%" height="auto" style={{ display: 'block' }}>
						{/* 上方水平 grid */}
						{[200, 500, 1000].map(v => {
							const y = yFor({ direction: 'up' } as Line, v);
							return (
								<g key={`gu-${v}`}>
									<line x1={PAD_L} y1={y} x2={CHART_W - PAD_R} y2={y} stroke="#eaeaea" strokeDasharray="3 3" strokeWidth={1} />
									<text x={PAD_L - 8} y={y + 3} fontSize={10} fontFamily="Space Mono" fill="#aaa" textAnchor="end">{v}</text>
								</g>
							);
						})}
						{/* 下方水平 grid */}
						{[50, DYING_MIN].map(v => {
							const y = yFor({ direction: 'down' } as Line, v);
							return (
								<g key={`gd-${v}`}>
									<line x1={PAD_L} y1={y} x2={CHART_W - PAD_R} y2={y} stroke="#eaeaea" strokeDasharray="3 3" strokeWidth={1} />
									<text x={PAD_L - 8} y={y + 3} fontSize={10} fontFamily="Space Mono" fill="#aaa" textAnchor="end">{v}</text>
								</g>
							);
						})}

						{/* 中央 BASELINE = 100 —— 粗黑线 */}
						<line
							x1={PAD_L} y1={BASELINE_Y} x2={CHART_W - PAD_R} y2={BASELINE_Y}
							stroke={colors.black} strokeWidth={2.5}
						/>
						<text x={PAD_L - 8} y={BASELINE_Y + 4} fontSize={12} fontFamily="Space Mono" fontWeight={700} fill={colors.black} textAnchor="end">100</text>
						<text x={CHART_W - PAD_R + 8} y={BASELINE_Y + 4} fontSize={10} fontFamily="Space Mono" fontWeight={700} fill={colors.black}>
							BASELINE
						</text>

						{/* X 轴 ticks + labels */}
						{X_LABELS.map((lbl, i) => {
							const x = xFor(i);
							return (
								<g key={lbl}>
									<line x1={x} y1={PAD_T} x2={x} y2={BASELINE_Y + BOTTOM_H + 4}
										stroke="#eaeaea" strokeDasharray="2 4" strokeWidth={0.8} />
									<text x={x} y={BASELINE_Y + BOTTOM_H + 22} fontSize={11} fontFamily="Space Mono"
										fill="#666" textAnchor="middle" fontWeight={700}>{lbl}</text>
								</g>
							);
						})}

						{/* 上方区域背景淡绿 */}
						<rect x={PAD_L} y={PAD_T} width={PLOT_W} height={TOP_H} fill="#16a34a" opacity={0.04} />
						{/* 下方区域背景淡红 */}
						<rect x={PAD_L} y={BASELINE_Y} width={PLOT_W} height={BOTTOM_H} fill={colors.explosive} opacity={0.04} />

						{/* 区域标签 */}
						<text x={PAD_L + 12} y={PAD_T + 22} fontSize={11} fontFamily="Space Mono" fill="#16a34a" fontWeight={700} letterSpacing={1.5}>
							↑ NEW JOBS · 招聘暴涨
						</text>
						<text x={PAD_L + 12} y={BASELINE_Y + BOTTOM_H - 8} fontSize={11} fontFamily="Space Mono" fill={colors.explosive} fontWeight={700} letterSpacing={1.5}>
							↓ DYING JOBS · 招聘萎缩
						</text>

						{/* 10 条 line */}
						{LINES.map((line, i) => (
							<motion.path
								key={line.name}
								d={pathFor(line)}
								fill="none"
								stroke={line.color}
								strokeWidth={2.5}
								strokeLinecap="round"
								strokeLinejoin="round"
								initial={{ pathLength: 0 }}
								animate={{ pathLength: 1 }}
								transition={{ duration: 1.5, delay: 0.4 + i * 0.07, ease: 'easeOut' }}
							/>
						))}

						{/* 起点圆点（2023 Q1 = 100，所有 10 条共享同一点）*/}
						<motion.circle
							cx={xFor(0)} cy={BASELINE_Y} r={5}
							fill={colors.white} stroke={colors.black} strokeWidth={2}
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ duration: 0.3, delay: 0.3, type: 'spring', stiffness: 300, damping: 14 }}
						/>

						{/* 终点圆点 + 反碰撞 label */}
						{labelLines.map(({ line, y: adjY }, i) => {
							const realX = xFor(line.points.length - 1);
							const realY = yFor(line, line.points[line.points.length - 1]);
							return (
								<g key={`lbl-${line.name}`}>
									<motion.circle
										cx={realX} cy={realY} r={5}
										fill={line.color} stroke={colors.black} strokeWidth={1.5}
										initial={{ scale: 0 }}
										animate={{ scale: 1 }}
										transition={{ duration: 0.3, delay: 2.0 + i * 0.04, type: 'spring', stiffness: 300, damping: 14 }}
									/>
									<motion.line
										x1={realX + 6} y1={realY}
										x2={CHART_W - PAD_R + 4} y2={adjY}
										stroke={line.color} strokeWidth={1} strokeDasharray="2 2"
										initial={{ opacity: 0 }}
										animate={{ opacity: 0.5 }}
										transition={{ duration: 0.3, delay: 2.1 + i * 0.04 }}
									/>
									<motion.text
										x={CHART_W - PAD_R + 10} y={adjY + 1}
										fontSize={12} fontWeight={700} fontFamily="DM Sans" fill={colors.dark}
										initial={{ opacity: 0, x: -4 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.3, delay: 2.2 + i * 0.04 }}
									>{line.name}</motion.text>
									<motion.text
										x={CHART_W - PAD_R + 10} y={adjY + 15}
										fontSize={11} fontWeight={700} fontFamily="Space Mono" fill={line.color}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 0.3, delay: 2.3 + i * 0.04 }}
									>{line.change}</motion.text>
								</g>
							);
						})}
					</svg>
				</motion.div>

				{/* Source */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.4, delay: 2.5 }}
					style={{
						fontFamily: fonts.mono, fontSize: 11, color: '#777', letterSpacing: 0.5,
						width: '100%', textAlign: 'right',
					}}
				>
					SOURCE · LinkedIn Workforce Report · LinkedIn Emerging Jobs 2025 · WEF Future of Jobs · Indeed Hiring Insights · WQR 2024 · AgFunder
				</motion.div>
			</Inner>
		</Slide>
	);
}
