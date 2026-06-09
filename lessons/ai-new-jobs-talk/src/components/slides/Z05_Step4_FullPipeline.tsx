import { motion } from 'framer-motion';
import { Slide, Inner, Title, colors, fonts, border, shadow } from '../ui';

// 圆形 pipeline diagram —— 5 个核心节点 + 中央反馈学习 hub
interface Node {
	id: string;
	label: string;
	sub: string;
	angle: number;  // 度数，0 = 正上方，顺时针
	color: string;
}

const NODES: Node[] = [
	{ id: 'collect', label: '数据采集', sub: 'Reddit / X / RSS', angle: 0, color: colors.indigo },
	{ id: 'decide', label: '选题决策', sub: 'AI agent 排 Top 3', angle: 72, color: colors.techPurple },
	{ id: 'generate', label: '4 平台生成', sub: '文案 + 配图', angle: 144, color: colors.orange },
	{ id: 'publish', label: '发布', sub: 'Buffer 自动 schedule', angle: 216, color: colors.green },
	{ id: 'track', label: '追踪 + 回流', sub: '6h · 24h · 7d 指标', angle: 288, color: colors.blue },
];

const CENTER_X = 360;
const CENTER_Y = 280;
const RADIUS = 200;
const NODE_W = 150;
const NODE_H = 64;

function polar(angle: number, r: number) {
	// angle 0 = 顶部，顺时针
	const rad = ((angle - 90) * Math.PI) / 180;
	return {
		x: CENTER_X + r * Math.cos(rad),
		y: CENTER_Y + r * Math.sin(rad),
	};
}

const COMPARE = [
	{
		side: 'TRADITIONAL',
		bg: '#fee2e2',
		color: colors.red,
		team: '传统营销团队 · 6 人',
		detail: [
			'2 人选题 + 文案',
			'1 人设计配图',
			'1 人多平台发布',
			'2 人监控数据 + 复盘',
		],
		time: '4 hours/day',
		output: '4 平台 · 1x output',
	},
	{
		side: 'AI-NATIVE',
		bg: '#dcfce7',
		color: '#16a34a',
		team: 'AI-native 团队 · 1 人',
		detail: [
			'Pipeline 自动跑',
			'AI agent 自选题',
			'AI 自动生图发布',
			'1 人监控 + 调权重',
		],
		time: '30 min/day',
		output: '4 平台 · 3x output',
	},
];

export default function Z05_Step4_FullPipeline() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', gap: 0 }}>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 12, width: '100%' }}
				>
					<div style={{
						display: 'inline-block', padding: '6px 14px', background: colors.red,
						color: colors.white, fontFamily: fonts.mono, fontSize: 14,
						fontWeight: 700, letterSpacing: 2, marginBottom: 10,
					}}>STEP 4 · 完整 PIPELINE + 反馈学习闭环</div>
					<Title size="42px">
						一个会<span style={{ color: colors.red }}>自我进化</span>的系统 ·
						这就是 <span style={{ color: colors.techPurple }}>AI-native</span> 团队
					</Title>
				</motion.div>

				{/* Body —— 左 SVG diagram + 右对比 */}
				<div style={{ display: 'flex', gap: 18, width: '100%', alignItems: 'stretch' }}>
					{/* SVG Pipeline */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.4, delay: 0.2 }}
						style={{
							width: 720, background: colors.white, border, boxShadow: shadow,
							padding: 12, position: 'relative',
						}}
					>
						<svg viewBox={`0 0 ${CENTER_X * 2} ${CENTER_Y * 2 + 40}`} width="100%" height="auto" style={{ display: 'block' }}>
							{/* 圆形连接线 (5 段弧表示 pipeline 顺序) */}
							{NODES.map((node, i) => {
								const next = NODES[(i + 1) % NODES.length];
								const from = polar(node.angle, RADIUS);
								const to = polar(next.angle, RADIUS);
								return (
									<motion.path
										key={`arc-${node.id}`}
										d={`M ${from.x} ${from.y} A ${RADIUS} ${RADIUS} 0 0 1 ${to.x} ${to.y}`}
										fill="none"
										stroke={colors.black}
										strokeWidth={2}
										strokeDasharray="4 4"
										initial={{ pathLength: 0 }}
										animate={{ pathLength: 1 }}
										transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
									/>
								);
							})}

							{/* 中心 → 各节点的反馈线（虚线红） */}
							{NODES.map((node, i) => {
								const p = polar(node.angle, RADIUS);
								return (
									<motion.line
										key={`feedback-${node.id}`}
										x1={CENTER_X} y1={CENTER_Y}
										x2={p.x} y2={p.y}
										stroke={colors.red}
										strokeWidth={1.5}
										strokeDasharray="2 4"
										initial={{ pathLength: 0, opacity: 0 }}
										animate={{ pathLength: 1, opacity: 0.55 }}
										transition={{ duration: 0.5, delay: 1.6 + i * 0.08 }}
									/>
								);
							})}

							{/* 中心 hub —— 反馈学习层 */}
							<motion.g
								initial={{ scale: 0, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								transition={{ duration: 0.5, delay: 1.4, type: 'spring', stiffness: 220, damping: 14 }}
								style={{ transformOrigin: `${CENTER_X}px ${CENTER_Y}px` }}
							>
								<circle cx={CENTER_X} cy={CENTER_Y} r={70}
									fill={colors.red} stroke={colors.black} strokeWidth={3} />
								<text x={CENTER_X} y={CENTER_Y - 14}
									fontSize={11} fontFamily="Space Mono" fill={colors.yellow}
									fontWeight={700} textAnchor="middle" letterSpacing={1.5}>FEEDBACK</text>
								<text x={CENTER_X} y={CENTER_Y + 4}
									fontSize={15} fontFamily="DM Sans" fill={colors.white}
									fontWeight={900} textAnchor="middle">反馈学习</text>
								<text x={CENTER_X} y={CENTER_Y + 24}
									fontSize={10} fontFamily="Space Mono" fill={colors.white}
									textAnchor="middle" opacity={0.85}>更新 prompt + 权重</text>
							</motion.g>

							{/* 5 个节点 */}
							{NODES.map((node, i) => {
								const p = polar(node.angle, RADIUS);
								return (
									<motion.g
										key={node.id}
										initial={{ scale: 0, opacity: 0 }}
										animate={{ scale: 1, opacity: 1 }}
										transition={{
											duration: 0.45, delay: 0.4 + i * 0.12,
											type: 'spring', stiffness: 220, damping: 14,
										}}
										style={{ transformOrigin: `${p.x}px ${p.y}px` }}
									>
										<rect
											x={p.x - NODE_W / 2} y={p.y - NODE_H / 2}
											width={NODE_W} height={NODE_H}
											fill={colors.white} stroke={colors.black} strokeWidth={2.5}
										/>
										<rect
											x={p.x - NODE_W / 2} y={p.y - NODE_H / 2}
											width={NODE_W} height={8}
											fill={node.color}
										/>
										<text
											x={p.x} y={p.y + 4}
											fontSize={14} fontFamily="DM Sans" fontWeight={900}
											fill={colors.black} textAnchor="middle"
										>{node.label}</text>
										<text
											x={p.x} y={p.y + 22}
											fontSize={10} fontFamily="Space Mono"
											fill="#555" textAnchor="middle"
										>{node.sub}</text>
									</motion.g>
								);
							})}

							{/* 数据回流箭头标注 */}
							<motion.text
								x={CENTER_X} y={CENTER_Y * 2 + 30}
								fontSize={11} fontFamily="Space Mono"
								fill={colors.red} textAnchor="middle"
								fontWeight={700} letterSpacing={1.5}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.4, delay: 2.2 }}
							>↑ 互动数据回流 · AI 分析 hook 转化 / 时段表现 · 自动调权重</motion.text>
						</svg>
					</motion.div>

					{/* 右侧对比 */}
					<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14, minWidth: 0 }}>
						{COMPARE.map((c, idx) => (
							<motion.div
								key={c.side}
								initial={{ opacity: 0, x: 30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.45, delay: 0.7 + idx * 0.2 }}
								style={{
									flex: 1, background: c.bg, border, boxShadow: shadow,
									padding: '16px 18px', display: 'flex', flexDirection: 'column',
								}}
							>
								<div style={{
									fontFamily: fonts.mono, fontSize: 13, color: c.color,
									letterSpacing: 2, marginBottom: 6, fontWeight: 700,
								}}>{c.side}</div>
								<div style={{ fontSize: 18, fontWeight: 900, marginBottom: 10 }}>
									{c.team}
								</div>
								<div style={{ fontSize: 14, color: '#444', lineHeight: 1.6, marginBottom: 10 }}>
									{c.detail.map((d) => (
										<div key={d}>· {d}</div>
									))}
								</div>
								<div style={{
									marginTop: 'auto', display: 'flex', gap: 8,
								}}>
									<div style={{
										flex: 1, background: colors.black, color: colors.white,
										padding: '6px 10px',
									}}>
										<div style={{
											fontFamily: fonts.mono, fontSize: 11, opacity: 0.7,
											letterSpacing: 1.5,
										}}>TIME</div>
										<div style={{ fontSize: 14, fontWeight: 900 }}>{c.time}</div>
									</div>
									<div style={{
										flex: 1, background: colors.black, color: colors.white,
										padding: '6px 10px',
									}}>
										<div style={{
											fontFamily: fonts.mono, fontSize: 11, opacity: 0.7,
											letterSpacing: 1.5,
										}}>OUTPUT</div>
										<div style={{ fontSize: 14, fontWeight: 900 }}>{c.output}</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</Inner>
		</Slide>
	);
}
