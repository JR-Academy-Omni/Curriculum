import { motion } from 'framer-motion';
import { colors, fonts } from './ui';

// 两张通信拓扑 —— SoT：蓝图 v1.0 §11.2
//
//   Subagent                      Agent Team
//            ┌→ A → 回报 ┐            A ↔ B
//   Lead ────├→ B → 回报 ├→ 汇总       ↘ ↙
//            └→ C → 回报 ┘             C
//   成员之间不需要直接连线              ↕
//                                     Lead
//                             + shared task list
//
// ⚠️ 讲法纪律（§11.2）：不要说「Team 更高级」。
//    只强调 Team 多了成员间通信和共享协调，因此门槛更高。

const NAVY = '#10162f';

function Node({
	x, y, w, h, fill, label, textColor = '#fff', delay = 0,
}: {
	x: number; y: number; w: number; h: number; fill: string;
	label: string; textColor?: string; delay?: number;
}) {
	return (
		<motion.g
			initial={{ opacity: 0, scale: 0.85 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.3, delay, ease: [0.16, 1, 0.3, 1] }}
			style={{ transformOrigin: `${x + w / 2}px ${y + h / 2}px` }}
		>
			<rect x={x + 4} y={y + 4} width={w} height={h} fill="#000" />
			<rect x={x} y={y} width={w} height={h} fill={fill} stroke="#000" strokeWidth={3} />
			<text
				x={x + w / 2} y={y + h / 2 + 1}
				textAnchor="middle" dominantBaseline="middle"
				fill={textColor} fontFamily={fonts.body} fontSize={19} fontWeight={800}
			>{label}</text>
		</motion.g>
	);
}

function Defs({ palette }: { palette: string[] }) {
	return (
		<defs>
			{palette.map((c) => (
				<marker
					key={c} id={`t-arrow-${c.replace('#', '')}`}
					viewBox="0 0 10 10" refX={9} refY={5}
					markerWidth={5} markerHeight={5} orient="auto-start-reverse"
				>
					<path d="M 0 0 L 10 5 L 0 10 z" fill={c} />
				</marker>
			))}
		</defs>
	);
}

function Link({
	d, color: c, dashed, delay = 0, width = 3, arrow = true, both = false,
}: { d: string; color: string; dashed?: boolean; delay?: number; width?: number; arrow?: boolean; both?: boolean }) {
	const id = `url(#t-arrow-${c.replace('#', '')})`;
	return (
		<motion.path
			initial={{ pathLength: 0, opacity: 0 }}
			animate={{ pathLength: 1, opacity: 1 }}
			transition={{ duration: 0.4, delay, ease: 'easeOut' }}
			d={d} fill="none" stroke={c} strokeWidth={width}
			strokeDasharray={dashed ? '8 6' : undefined}
			markerEnd={arrow ? id : undefined}
			markerStart={both ? id : undefined}
		/>
	);
}

/** 左图 · Subagent：成员之间不需要直接连线 */
export function TopoSubagent({ height = 300 }: { height?: number }) {
	const spoke = colors.blue;
	return (
		<svg viewBox="0 0 560 300" style={{ width: '100%', height, display: 'block' }}>
			<Defs palette={[spoke, NAVY]} />

			{/* Hub → 三路 */}
			<Link d="M 196 128 C 240 128, 240 52, 288 52" color={spoke} delay={0.2} />
			<Link d="M 196 150 L 288 150" color={spoke} delay={0.28} />
			<Link d="M 196 172 C 240 172, 240 248, 288 248" color={spoke} delay={0.36} />

			{/* 三路 → 回报（虚线，只回结论） */}
			<Link d="M 400 52 C 470 52, 480 150, 490 150" color={NAVY} dashed delay={0.5} width={2.5} />
			<Link d="M 400 150 L 490 150" color={NAVY} dashed delay={0.56} width={2.5} />
			<Link d="M 400 248 C 470 248, 480 150, 490 150" color={NAVY} dashed delay={0.62} width={2.5} />

			<Node x={60} y={122} w={136} h={56} fill={NAVY} label="Lead / Hub" />
			<Node x={288} y={30} w={112} h={44} fill={colors.white} textColor="#000" label="A" delay={0.24} />
			<Node x={288} y={128} w={112} h={44} fill={colors.white} textColor="#000" label="B" delay={0.32} />
			<Node x={288} y={226} w={112} h={44} fill={colors.white} textColor="#000" label="C" delay={0.4} />

			<motion.text
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}
				x={280} y={294} textAnchor="middle"
				fill="#666" fontFamily={fonts.body} fontSize={18} fontWeight={700}
			>成员之间不需要直接连线</motion.text>
		</svg>
	);
}

/** 右图 · Agent Team：成员互通 + 共享任务列表 */
export function TopoTeam({ height = 300 }: { height?: number }) {
	const mesh = colors.purple;
	return (
		<svg viewBox="0 0 560 300" style={{ width: '100%', height, display: 'block' }}>
			<Defs palette={[mesh, NAVY, colors.orange]} />

			{/* 成员互通：A ↔ B，A ↔ C，B ↔ C */}
			<Link d="M 208 52 L 344 52" color={mesh} delay={0.3} width={4} both />
			<Link d="M 190 74 L 246 122" color={mesh} delay={0.38} width={4} both />
			<Link d="M 362 74 L 306 122" color={mesh} delay={0.44} width={4} both />

			{/* C ↕ Lead */}
			<Link d="M 276 166 L 276 214" color={NAVY} delay={0.55} width={3} both />

			{/* 共享任务列表 */}
			<Link d="M 150 60 C 90 90, 84 180, 128 236" color={colors.orange} dashed delay={0.7} width={2.5} arrow={false} />
			<Link d="M 410 60 C 470 90, 476 180, 432 236" color={colors.orange} dashed delay={0.76} width={2.5} arrow={false} />

			<Node x={96} y={30} w={112} h={44} fill={colors.white} textColor="#000" label="A" delay={0.2} />
			<Node x={344} y={30} w={112} h={44} fill={colors.white} textColor="#000" label="B" delay={0.26} />
			<Node x={220} y={122} w={112} h={44} fill={colors.white} textColor="#000" label="C" delay={0.32} />
			<Node x={196} y={214} w={160} h={48} fill={NAVY} label="Lead" delay={0.5} />
			<Node x={112} y={236} w={0} h={0} fill="none" label="" />

			<motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
				<rect x={60} y={272} width={440} height={26} fill={colors.orange} stroke="#000" strokeWidth={2.5} />
				<text x={280} y={286} textAnchor="middle" fill="#000" fontFamily={fonts.body} fontSize={17} fontWeight={800}>
					shared task list
				</text>
			</motion.g>

			<motion.text
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
				x={280} y={196} textAnchor="middle"
				fill={mesh} fontFamily={fonts.body} fontSize={18} fontWeight={800}
			>紫线 = 成员直接互发消息</motion.text>
		</svg>
	);
}
