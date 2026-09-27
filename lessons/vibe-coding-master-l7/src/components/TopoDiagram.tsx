import { motion } from 'framer-motion';
import { colors, fonts } from './ui';

// 两张通信拓扑图 —— 本节全课的视觉主角。
// P03 两张同屏对比，P04 / P05 各自放大讲。
// 内容 SoT：蓝图 §2 对照表 + §9.1 的两张 ASCII 图。

const NAVY = '#10162f';

function Node({
	x, y, w, h, fill, label, sub, textColor = '#fff', delay = 0,
}: {
	x: number; y: number; w: number; h: number; fill: string;
	label: string; sub?: string; textColor?: string; delay?: number;
}) {
	return (
		<motion.g
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.35, delay, ease: [0.16, 1, 0.3, 1] }}
			style={{ transformOrigin: `${x + w / 2}px ${y + h / 2}px` }}
		>
			<rect x={x + 4} y={y + 4} width={w} height={h} fill="#000" />
			<rect x={x} y={y} width={w} height={h} fill={fill} stroke="#000" strokeWidth={3} />
			<text
				x={x + w / 2} y={sub ? y + h / 2 - 4 : y + h / 2 + 1}
				textAnchor="middle" dominantBaseline="middle"
				fill={textColor} fontFamily={fonts.body} fontSize={15} fontWeight={800}
			>{label}</text>
			{sub && (
				<text
					x={x + w / 2} y={y + h / 2 + 15}
					textAnchor="middle" dominantBaseline="middle"
					fill={textColor} fontFamily={fonts.mono} fontSize={10.5} opacity={0.85}
				>{sub}</text>
			)}
		</motion.g>
	);
}

function Link({
	d, color: c, dashed, delay = 0, width = 2.5, arrow = true,
}: { d: string; color: string; dashed?: boolean; delay?: number; width?: number; arrow?: boolean }) {
	return (
		<motion.path
			initial={{ pathLength: 0, opacity: 0 }}
			animate={{ pathLength: 1, opacity: 1 }}
			transition={{ duration: 0.5, delay, ease: 'easeOut' }}
			d={d} fill="none" stroke={c} strokeWidth={width}
			strokeDasharray={dashed ? '7 5' : undefined}
			markerEnd={arrow ? `url(#arrow-${c.replace('#', '')})` : undefined}
		/>
	);
}

function Defs({ palette }: { palette: string[] }) {
	return (
		<defs>
			{palette.map((c) => (
				<marker
					key={c} id={`arrow-${c.replace('#', '')}`}
					viewBox="0 0 10 10" refX={9} refY={5}
					markerWidth={5} markerHeight={5} orient="auto-start-reverse"
				>
					<path d="M 0 0 L 10 5 L 0 10 z" fill={c} />
				</marker>
			))}
		</defs>
	);
}

/** 结构 A：Hub-and-spoke —— 子 Agent 之间没有任何连线，这是它和 Team 的唯一硬区别 */
export function TopoSubagent({ height = 300, showCaption = true }: { height?: number; showCaption?: boolean }) {
	const spoke = colors.blue;
	return (
		<svg viewBox="0 0 580 300" style={{ width: '100%', height, display: 'block' }}>
			<Defs palette={[spoke, NAVY]} />

			{/* 你 → 主 Agent */}
			<Link d="M 74 150 L 118 150" color={NAVY} delay={0.15} />
			{/* Hub → 三路（出） */}
			<Link d="M 250 128 C 300 128, 300 46, 366 46" color={spoke} delay={0.35} />
			<Link d="M 250 150 L 366 150" color={spoke} delay={0.45} />
			<Link d="M 250 172 C 300 172, 300 254, 366 254" color={spoke} delay={0.55} />
			{/* 三路 → Hub（回，虚线表示只回结论） */}
			<Link d="M 508 74 C 545 100, 545 200, 254 190" color={NAVY} dashed delay={0.75} width={2} />
			<Link d="M 508 178 C 530 200, 400 205, 254 196" color={NAVY} dashed delay={0.85} width={2} />
			<Link d="M 508 282 C 545 292, 300 240, 254 202" color={NAVY} dashed delay={0.95} width={2} />

			<Node x={20} y={132} w={54} h={36} fill={colors.white} textColor="#000" label="你" delay={0} />
			<Node x={118} y={118} w={132} h={64} fill={NAVY} label="主 Agent" sub="HUB" delay={0.2} />
			<Node x={366} y={24} w={142} h={44} fill={colors.white} textColor="#000" label="子 Agent A" delay={0.4} />
			<Node x={366} y={128} w={142} h={44} fill={colors.white} textColor="#000" label="子 Agent B" delay={0.5} />
			<Node x={366} y={232} w={142} h={44} fill={colors.white} textColor="#000" label="子 Agent C" delay={0.6} />

			{showCaption && (
				<motion.text
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}
					x={290} y={296} textAnchor="middle"
					fill="#555" fontFamily={fonts.body} fontSize={13} fontWeight={600}
				>子 Agent 之间没有连线 —— 分工、补 context、冲突处理都经过 Hub</motion.text>
			)}
		</svg>
	);
}

/** 结构 B：Team —— 成员之间互相连线 + 一块共享任务板 */
export function TopoTeam({ height = 300, showCaption = true }: { height?: number; showCaption?: boolean }) {
	const mesh = colors.purple;
	return (
		<svg viewBox="0 0 580 300" style={{ width: '100%', height, display: 'block' }}>
			<Defs palette={[mesh, NAVY, colors.orange]} />

			{/* 你 ↔ Lead */}
			<Link d="M 74 132 L 112 132" color={NAVY} delay={0.15} />
			{/* Lead ↔ 三名成员 */}
			<Link d="M 244 112 C 290 96, 300 52, 336 46" color={NAVY} delay={0.3} />
			<Link d="M 244 132 L 428 132" color={NAVY} delay={0.4} />
			<Link d="M 244 152 C 290 168, 300 212, 336 218" color={NAVY} delay={0.5} />
			{/* 成员之间互通（这三条是 Team 的全部意义） */}
			<Link d="M 400 68 C 452 84, 470 100, 470 112" color={mesh} delay={0.7} width={3} arrow={false} />
			<Link d="M 470 154 C 470 172, 452 190, 400 202" color={mesh} delay={0.8} width={3} arrow={false} />
			<Link d="M 348 68 C 322 110, 322 158, 348 198" color={mesh} delay={0.9} width={3} arrow={false} />
			{/* 全员 ↔ 共享任务板 */}
			<Link d="M 178 158 L 178 246" color={colors.orange} dashed delay={1.0} width={2} arrow={false} />
			<Link d="M 368 68 L 300 246" color={colors.orange} dashed delay={1.05} width={2} arrow={false} />
			<Link d="M 470 154 L 360 250" color={colors.orange} dashed delay={1.1} width={2} arrow={false} />
			<Link d="M 368 198 L 330 248" color={colors.orange} dashed delay={1.15} width={2} arrow={false} />

			<Node x={20} y={114} w={54} h={36} fill={colors.white} textColor="#000" label="你" delay={0} />
			<Node x={112} y={100} w={132} h={58} fill={NAVY} label="Team Lead" sub="LEAD" delay={0.2} />
			<Node x={336} y={24} w={128} h={44} fill={colors.white} textColor="#000" label="Teammate A" delay={0.35} />
			<Node x={428} y={110} w={128} h={44} fill={colors.white} textColor="#000" label="Teammate B" delay={0.45} />
			<Node x={336} y={196} w={128} h={44} fill={colors.white} textColor="#000" label="Teammate C" delay={0.55} />
			<Node x={150} y={246} w={210} h={40} fill={colors.orange} label="共享任务板 + 信箱" delay={1.0} />

			{showCaption && (
				<motion.text
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
					x={470} y={272} textAnchor="middle"
					fill={mesh} fontFamily={fonts.body} fontSize={13} fontWeight={800}
				>紫线 = 成员互通</motion.text>
			)}
		</svg>
	);
}
