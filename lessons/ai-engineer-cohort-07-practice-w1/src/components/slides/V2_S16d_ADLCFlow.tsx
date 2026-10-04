// Migrated teaching page; original source: lessons/vibe-coding-master-l2/src/components/slides/S16d_ADLCFlow.tsx
import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../courseUi';

const stages = [
	{ n: '①', title: '拿到需求', en: 'Requirements', sub: '确认问题 · 负责人 · 项目范围', color: colors.blue },
	{ n: '②', title: '写 PRD', en: 'Define', sub: '目标 · 验收 · 权限 · 红线', color: colors.purple },
	{ n: '③', title: '开发', en: 'Build', sub: '受控实现 · 测试 · 人工验收', color: colors.yellow },
	{ n: '④', title: '部署', en: 'Deploy', sub: '获准发布 · 验证实际结果', color: colors.green },
	{ n: '⑤', title: '分析反馈', en: 'Analyze', sub: '记录证据 · 回流新需求', color: colors.red },
];

const positions = [
	{ left: 400, top: 10 },
	{ left: 780, top: 112 },
	{ left: 705, top: 306 },
	{ left: 105, top: 306 },
	{ left: 30, top: 112 },
];

const loopSegments = [
	'M 530 62 C 690 64 796 104 880 168',
	'M 918 218 C 902 282 842 326 744 354',
	'M 650 390 C 552 416 402 416 304 390',
	'M 216 354 C 118 326 58 282 42 218',
	'M 78 168 C 162 104 268 64 428 62',
];

function StageCard({ stage, i }: { stage: typeof stages[number]; i: number }) {
	const pos = positions[i];
	const darkText = stage.color === colors.yellow || stage.color === colors.green;
	return (
		<div
			style={{
				position: 'absolute',
				left: pos.left,
				top: pos.top,
				width: 250,
				zIndex: 3,
			}}
		>
			<div
				style={{
				background: colors.white,
					borderRadius: 18,
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
					<div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, color: '#475467', marginTop: 5 }}>
						{stage.en}
					</div>
				</div>
			</div>
			<div style={{ marginTop: 10, fontSize: 15, fontWeight: 800, color: '#475467', lineHeight: 1.35 }}>
				{stage.sub}
			</div>
			</div>
		</div>
	);
}

function ConnectedLoop() {
	return (
		<svg
			width="100%"
			height="100%"
			viewBox="0 0 1060 430"
			style={{ position: 'absolute', inset: 0, overflow: 'visible', zIndex: 0 }}
		>
			<defs>
				<marker id="adlc-arrow" markerWidth="18" markerHeight="16" refX="16" refY="8" orient="auto" markerUnits="userSpaceOnUse">
					<path d="M 2 2 L 17 8 L 2 14 z" fill={colors.red} stroke={colors.black} strokeWidth="1.5" />
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
					strokeWidth={5}
					strokeLinecap="round"
					strokeDasharray="13 11"
					markerEnd="url(#adlc-arrow)"
					filter="url(#adlc-shadow)"
					animate={{ strokeDashoffset: [0, -52] }}
					transition={{
						strokeDashoffset: { repeat: Infinity, duration: 1.2, ease: 'linear' },
					}}
				/>
			))}
		</svg>
	);
}

export default function V2_S16d_ADLCFlow() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', gap: 13, padding: '30px 38px' }}>
				<div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20 }}>
					<div>
						<Tag bg={colors.purple}>ADLC · 五步概览</Tag>
						<Title size="46px" style={{ marginTop: 10, marginBottom: 0 }}>
							ADLC 闭环：<span style={{ background: colors.yellow, padding: '0 10px' }}>人负责，Agent 执行</span>
						</Title>
						<div style={{ marginTop: 8, fontFamily: fonts.mono, fontSize: 15, fontWeight: 900, color: '#667085' }}>
							本课 ADLC = Agent Development Lifecycle · 智能体开发生命周期
						</div>
					</div>
					<div style={{ width: 310, background: colors.white, borderRadius: 18, border, boxShadow: shadowSm, padding: '12px 14px', fontSize: 16, fontWeight: 900, lineHeight: 1.45 }}>
						人定方向、验收与发布审批<br />
						Agent 在授权范围内执行
					</div>
				</div>

				<div style={{ flex: '0 0 auto', position: 'relative', height: 430, width: 1060, maxWidth: '100%', alignSelf: 'center' }}>
					<ConnectedLoop />
					<div
						style={{
							position: 'absolute',
							left: 390,
							top: 148,
							width: 280,
							background: colors.dark,
							borderRadius: 22,
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
						<div style={{ fontSize: 52, fontWeight: 900, lineHeight: 1, background: colors.red, borderRadius: 8, display: 'inline-block', padding: '4px 18px' }}>
							Agent
						</div>
						<div style={{ marginTop: 15, fontSize: 18, fontWeight: 900, color: colors.yellow }}>
							有范围、有权限的任务
						</div>
						<div style={{ marginTop: 8, fontFamily: fonts.mono, fontSize: 13, color: '#B9C0D4', lineHeight: 1.45 }}>
							实现 → 检查 → 获准发布<br />
							反馈形成下一轮任务
						</div>
					</div>

					{stages.map((s, i) => <StageCard key={s.n} stage={s} i={i} />)}

					<div style={{ position: 'absolute', left: 190, top: 76, background: colors.yellow, borderRadius: 8, border: `2px solid ${colors.dark}`, boxShadow: shadowSm, padding: '7px 12px', fontFamily: fonts.mono, fontSize: 13, fontWeight: 900, zIndex: 4 }}>
						↻ 回到起点 · 再迭代
					</div>
				</div>

				<div
					style={{ alignSelf: 'stretch', background: colors.dark, color: colors.white, borderRadius: 18, border, boxShadow: shadow, padding: '12px 20px', fontSize: 16, lineHeight: 1.42 }}
				>
					<span style={{ color: colors.yellow, fontFamily: fonts.mono, fontWeight: 900 }}>项目管理仍然成立：</span>{' '}
					这是本课定义；ADLC 讲生命周期，SDD 指导需求到代码，二者互补。{' '}
					<span style={{ background: colors.yellow, color: colors.black, borderRadius: 8, padding: '0 7px', fontWeight: 900 }}>
						人保留验收与审批责任
					</span>{' '}
					部署是闭环节点，不是默认授权。
				</div>
			</Inner>
		</Slide>
	);
}
