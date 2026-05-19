import { motion } from 'framer-motion';
import { Slide, Inner, Title, colors, fonts, border, shadow } from '../ui';

// 2x2 矩阵 —— 用户核心理论
// 你不是 Stakeholder + 被动接任务 → AI 先吃你
// X 轴: 主动 / 被动 ; Y 轴: 非 Stakeholder / Stakeholder

interface Quadrant {
	id: string;
	row: 'top' | 'bottom';   // top = 主动, bottom = 被动
	col: 'left' | 'right';   // left = 非 Stakeholder, right = Stakeholder
	risk: 'danger' | 'warning' | 'transition' | 'safe';
	title: string;
	subtitle: string;
	verdict: string;
	jobs: string[];
}

const QUADRANTS: Quadrant[] = [
	{
		id: 'q1',
		row: 'top',
		col: 'right',
		risk: 'safe',
		title: '主动 + Stakeholder',
		subtitle: 'Active + Stakeholder',
		verdict: '顶配 · 安全',
		jobs: [
			'Founder / Co-founder',
			'Exec / 决策型 PM',
			'Senior IC（主动定义 roadmap）',
			'Investor / Operator 双栖',
		],
	},
	{
		id: 'q2',
		row: 'top',
		col: 'left',
		risk: 'transition',
		title: '主动 + 非 Stakeholder',
		subtitle: 'Active + Non-Stakeholder',
		verdict: '还能转型',
		jobs: [
			'Intrapreneur（内部创业 IC）',
			'Tech Lead (主动改流程)',
			'Solo creator / 自媒体',
			'Career Switcher · 主动学习的人',
		],
	},
	{
		id: 'q3',
		row: 'bottom',
		col: 'right',
		risk: 'warning',
		title: '被动 + Stakeholder',
		subtitle: 'Passive + Stakeholder',
		verdict: '慢慢滑 · 警告',
		jobs: [
			'惯性 Senior Manager',
			'职务在但不再思考的中层',
			'决策延误型 Director',
			'"等指令" Stakeholder',
		],
	},
	{
		id: 'q4',
		row: 'bottom',
		col: 'left',
		risk: 'danger',
		title: '被动 + 非 Stakeholder',
		subtitle: 'Passive + Non-Stakeholder',
		verdict: 'AI 先吃这一批',
		jobs: [
			'Junior CRUD Dev · Manual QA',
			'Junior Data Analyst · Bookkeeper',
			'Admin Assistant · 排程 Coord',
			'Paralegal · Junior Designer',
		],
	},
];

const RISK_STYLE: Record<Quadrant['risk'], { bg: string; tagBg: string; tagText: string; label: string; verdictColor: string }> = {
	safe: {
		bg: '#dcfce7',
		tagBg: '#16a34a',
		tagText: colors.white,
		label: '✓ SAFE',
		verdictColor: '#16a34a',
	},
	transition: {
		bg: '#fef9c3',
		tagBg: colors.fast,
		tagText: colors.white,
		label: '↗ TRANSITION',
		verdictColor: colors.fast,
	},
	warning: {
		bg: '#fed7aa',
		tagBg: '#ea580c',
		tagText: colors.white,
		label: '⚠ WARNING',
		verdictColor: '#ea580c',
	},
	danger: {
		bg: '#fecaca',
		tagBg: colors.explosive,
		tagText: colors.white,
		label: '✕ DANGER',
		verdictColor: colors.explosive,
	},
};

export default function C04_DyingPattern() {
	const q1 = QUADRANTS.find(q => q.id === 'q1')!;
	const q2 = QUADRANTS.find(q => q.id === 'q2')!;
	const q3 = QUADRANTS.find(q => q.id === 'q3')!;
	const q4 = QUADRANTS.find(q => q.id === 'q4')!;
	const grid = [
		[q2, q1],  // top row: 主动 — 左非SH, 右SH
		[q4, q3],  // bottom row: 被动 — 左非SH, 右SH
	];

	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', gap: 12 }}>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ width: '100%' }}
				>
					<div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
						<span style={{
							padding: '5px 12px', background: colors.dark, color: colors.white,
							fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, letterSpacing: 2,
						}}>CORE THEORY · 2×2 MATRIX</span>
					</div>
					<Title size="50px">
						为什么 AI <span style={{ color: colors.explosive }}>先吃这批人</span>？
					</Title>
					<div style={{
						marginTop: 12, padding: '10px 18px',
						background: colors.black, color: colors.white,
						display: 'inline-block', fontSize: 22, fontWeight: 700, lineHeight: 1.4,
					}}>
						核心定理：<span style={{ color: colors.yellow }}>你不是 Stakeholder + 被动接任务</span> → AI 会先吃你。
					</div>
				</motion.div>

				{/* 2x2 Matrix with axis labels */}
				<div style={{ display: 'flex', width: '100%', flex: 1, gap: 8, minHeight: 0 }}>
					{/* Y-axis label */}
					<div style={{
						flexShrink: 0, width: 28, display: 'flex', flexDirection: 'column',
						alignItems: 'center', justifyContent: 'space-between',
						paddingTop: 16, paddingBottom: 30,
					}}>
						<div style={{
							writingMode: 'vertical-rl', transform: 'rotate(180deg)',
							fontFamily: fonts.mono, fontSize: 14, fontWeight: 700,
							letterSpacing: 2, color: colors.dark,
						}}>↑ 主动定义工作</div>
						<div style={{
							writingMode: 'vertical-rl', transform: 'rotate(180deg)',
							fontFamily: fonts.mono, fontSize: 14, fontWeight: 700,
							letterSpacing: 2, color: colors.explosive,
						}}>↓ 被动接受任务</div>
					</div>

					{/* Matrix + X-axis labels */}
					<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6, minHeight: 0 }}>
						{/* Grid */}
						<motion.div
							initial="hidden"
							animate="visible"
							variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
							style={{
								flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr',
								gridTemplateRows: '1fr 1fr', gap: 8, minHeight: 0,
							}}
						>
							{grid.flat().map((q) => {
								const style = RISK_STYLE[q.risk];
								return (
									<motion.div
										key={q.id}
										variants={{
											hidden: { opacity: 0, scale: 0.9 },
											visible: { opacity: 1, scale: 1 },
										}}
										transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
										style={{
											border, boxShadow: shadow, background: style.bg,
											padding: '14px 16px', display: 'flex', flexDirection: 'column',
											position: 'relative', minHeight: 0,
										}}
									>
										{/* Risk tag top-right */}
										<div style={{
											position: 'absolute', top: -10, right: -8,
											padding: '4px 10px', background: style.tagBg, color: style.tagText,
											fontFamily: fonts.mono, fontSize: 11, fontWeight: 800,
											letterSpacing: 1.5, border: `2px solid ${colors.black}`,
										}}>{style.label}</div>

										<div style={{
											fontFamily: fonts.mono, fontSize: 10, color: '#666',
											letterSpacing: 1.5, fontWeight: 700, marginBottom: 4,
										}}>{q.subtitle}</div>
										<div style={{ fontSize: 24, fontWeight: 900, lineHeight: 1.2, marginBottom: 6 }}>
											{q.title}
										</div>
										<div style={{
											fontFamily: fonts.mono, fontSize: 17, fontWeight: 800,
											color: style.verdictColor, marginBottom: 12,
											letterSpacing: 0.5,
										}}>
											→ {q.verdict}
										</div>

										<div style={{
											fontSize: 16, color: '#333', lineHeight: 1.65, flex: 1,
											borderTop: '1px dashed rgba(0,0,0,0.2)', paddingTop: 10,
										}}>
											{q.jobs.map((j) => (
												<div key={j} style={{ marginBottom: 3 }}>· {j}</div>
											))}
										</div>
									</motion.div>
								);
							})}
						</motion.div>

						{/* X-axis labels */}
						<div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 8px' }}>
							<div style={{
								fontFamily: fonts.mono, fontSize: 14, fontWeight: 700,
								letterSpacing: 2, color: colors.explosive,
							}}>← 非 Stakeholder (不能决策)</div>
							<div style={{
								fontFamily: fonts.mono, fontSize: 14, fontWeight: 700,
								letterSpacing: 2, color: '#16a34a',
							}}>Stakeholder (能决策) →</div>
						</div>
					</div>
				</div>

				{/* Closing statement */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 1.0 }}
					style={{ width: '100%', textAlign: 'center' }}
				>
					<span style={{
						display: 'inline-block', padding: '14px 28px', background: colors.dark, color: colors.white,
						fontSize: 22, fontWeight: 900, letterSpacing: 0.3,
					}}>
						不是岗位<span style={{ color: colors.explosive }}>消失</span>，是
						<span style={{ color: colors.yellow }}> Q4 → Q1 </span>
						的人有未来 · 你的下一步是
						<span style={{ color: colors.yellow }}> 主动 + 拿到决策权</span>
					</span>
				</motion.div>
			</Inner>
		</Slide>
	);
}
