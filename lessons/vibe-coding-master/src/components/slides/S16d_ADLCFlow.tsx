import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

const stages = [
	{ n: '①', title: '拿到需求', en: 'Requirements', sub: '看见要解决的问题', color: colors.blue },
	{ n: '②', title: '写 PRD', en: 'Define', sub: '目标 · 输入 · 输出 · 红线', color: colors.purple },
	{ n: '③', title: '开发', en: 'Build', sub: '写前端 · 后端 · 测试', color: colors.yellow },
	{ n: '④', title: '部署', en: 'Deploy', sub: '上线到能访问', color: colors.green },
	{ n: '⑤', title: '分析反馈', en: 'Analyze', sub: '看数据，发现新需求', color: colors.red },
];

const positions = [
	{ left: 512, top: 54 },
	{ left: 858, top: 158 },
	{ left: 790, top: 408 },
	{ left: 232, top: 408 },
	{ left: 166, top: 158 },
];

const loopSegments = [
	'M 640 88 C 730 94 805 118 910 186',
	'M 930 245 C 930 320 880 378 806 430',
	'M 676 474 C 560 528 448 528 334 474',
	'M 218 430 C 144 376 92 314 96 245',
	'M 116 186 C 220 118 292 94 384 88',
];

function StageCard({ stage, i }: { stage: typeof stages[number]; i: number }) {
	const pos = positions[i];
	const darkText = stage.color === colors.yellow || stage.color === colors.green;
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.92, y: 10 }}
			animate={{ opacity: 1, scale: 1, y: 0 }}
			transition={{ delay: 0.2 + i * 0.08, duration: 0.3 }}
			style={{
				position: 'absolute',
				left: pos.left,
				top: pos.top,
				width: 250,
				transform: 'translate(-50%, -50%)',
				background: colors.white,
				border,
				boxShadow: shadowSm,
				padding: '14px 16px',
			}}
		>
			<div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
				<div
					style={{
						width: 36,
						height: 36,
						borderRadius: '999px',
						background: stage.color,
						border: `3px solid ${colors.black}`,
						color: darkText ? colors.black : colors.white,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						fontWeight: 900,
						fontSize: 18,
					}}
				>
					{stage.n}
				</div>
				<div>
					<div style={{ fontSize: 24, fontWeight: 900, color: colors.dark, lineHeight: 1.05 }}>{stage.title}</div>
					<div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, color: stage.color, marginTop: 5 }}>
						{stage.en}
					</div>
				</div>
			</div>
			<div style={{ marginTop: 10, fontSize: 15, fontWeight: 800, color: '#475467', lineHeight: 1.35 }}>
				{stage.sub}
			</div>
		</motion.div>
	);
}

function ConnectedLoop() {
	return (
		<svg
			width="100%"
			height="100%"
			viewBox="0 0 1024 535"
			style={{ position: 'absolute', inset: 0, overflow: 'visible', zIndex: 0 }}
		>
			<defs>
				<marker id="adlc-arrow" markerWidth="14" markerHeight="14" refX="12" refY="7" orient="auto" markerUnits="strokeWidth">
					<path d="M 0 0 L 14 7 L 0 14 z" fill={colors.red} stroke={colors.black} strokeWidth="1.5" />
				</marker>
				<filter id="adlc-shadow" x="-20%" y="-20%" width="140%" height="140%">
					<feDropShadow dx="3" dy="3" stdDeviation="0" floodColor="#000" floodOpacity="1" />
				</filter>
			</defs>
			{loopSegments.map((d, i) => (
				<motion.path
					key={d}
					d={d}
					fill="none"
					stroke={colors.red}
					strokeWidth={6}
					strokeLinecap="round"
					strokeDasharray="14 12"
					markerEnd="url(#adlc-arrow)"
					filter="url(#adlc-shadow)"
					initial={{ pathLength: 0, opacity: 0 }}
					animate={{ pathLength: 1, opacity: 1, strokeDashoffset: [0, -52] }}
					transition={{
						pathLength: { delay: 0.2 + i * 0.08, duration: 0.45 },
						opacity: { delay: 0.2 + i * 0.08, duration: 0.2 },
						strokeDashoffset: { repeat: Infinity, duration: 1.2, ease: 'linear' },
					}}
				/>
			))}
		</svg>
	);
}

export default function S16d_ADLCFlow() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', gap: 16, padding: '34px 38px' }}>
				<div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20 }}>
					<div>
						<Tag bg={colors.purple}>ADLC</Tag>
						<Title size="46px" style={{ marginTop: 10, marginBottom: 0 }}>
							一个 <span style={{ background: colors.yellow, padding: '0 10px' }}>Agent</span> 跑完整个闭环
						</Title>
						<div style={{ marginTop: 8, fontFamily: fonts.mono, fontSize: 15, fontWeight: 900, color: '#667085' }}>
							Agent Development Lifecycle · 智能体开发生命周期
						</div>
					</div>
					<div style={{ width: 310, background: colors.white, border, boxShadow: shadowSm, padding: '12px 14px', fontSize: 16, fontWeight: 900, lineHeight: 1.45 }}>
						你给方向 + 把关<br />
						Agent 端到端执行
					</div>
				</div>

				<div style={{ flex: 1, position: 'relative', minHeight: 535 }}>
					<ConnectedLoop />
					<div
						style={{
							position: 'absolute',
							left: '50%',
							top: '50%',
							width: 330,
							transform: 'translate(-50%, -50%)',
							background: colors.dark,
							color: colors.white,
							border,
							boxShadow: shadow,
							padding: '24px 24px',
							textAlign: 'center',
							zIndex: 2,
						}}
					>
						<motion.div
							animate={{ rotate: 360 }}
							transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
							style={{ fontSize: 44, lineHeight: 1, color: colors.yellow, marginBottom: 8 }}
						>
							⟳
						</motion.div>
						<div style={{ fontSize: 52, fontWeight: 900, lineHeight: 1, background: colors.red, display: 'inline-block', padding: '4px 18px' }}>
							Agent
						</div>
						<div style={{ marginTop: 15, fontSize: 18, fontWeight: 900, color: colors.yellow }}>
							整份 PRD 交给它
						</div>
						<div style={{ marginTop: 8, fontFamily: fonts.mono, fontSize: 13, color: '#B9C0D4', lineHeight: 1.45 }}>
							开发 → 测试 → 部署 → 分析<br />
							跑完再回到新需求
						</div>
					</div>

					{stages.map((s, i) => <StageCard key={s.n} stage={s} i={i} />)}

					<div style={{ position: 'absolute', left: 280, top: 32, background: colors.yellow, border: `2px solid ${colors.dark}`, boxShadow: shadowSm, padding: '7px 12px', fontFamily: fonts.mono, fontSize: 13, fontWeight: 900, zIndex: 3 }}>
						↻ 回到起点 · 再迭代
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.55 }}
					style={{ alignSelf: 'stretch', background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '13px 22px', fontSize: 17, lineHeight: 1.48 }}
				>
					<span style={{ color: colors.yellow, fontFamily: fonts.mono, fontWeight: 900 }}>本质区别 = 开发流程不一样：</span>{' '}
					传统 SDLC / Agile = PRD 拆成 user story，分给一堆人做；ADLC ={' '}
					<span style={{ background: colors.yellow, color: colors.black, padding: '0 7px', fontWeight: 900 }}>
						整份 PRD 直接交给一个 Agent
					</span>{' '}
					端到端跑完开发、测试、部署。
				</motion.div>
			</Inner>
		</Slide>
	);
}
