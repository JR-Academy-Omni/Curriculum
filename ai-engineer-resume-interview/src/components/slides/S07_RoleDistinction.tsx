import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

interface Role {
	name: string;
	core: string;
	tech: string;
	output: string;
	heat: string;
	heatNote: string;
	bg: string;
	highlight?: boolean;
}

const roles: Role[] = [
	{
		name: 'AI Engineer',
		core: '把 LLM 集成到产品',
		tech: 'RAG / Agent / MCP / Eval',
		output: 'AI 功能 + 评估体系',
		heat: '🔥🔥🔥',
		heatNote: '当前最稀缺',
		bg: colors.yellow,
		highlight: true,
	},
	{
		name: 'ML Engineer',
		core: '训练 / 微调模型',
		tech: 'PyTorch / 分布式训练',
		output: '模型 + 论文',
		heat: '🔥',
		heatNote: 'PhD 门槛高',
		bg: colors.white,
	},
	{
		name: 'Prompt Engineer',
		core: '写好 Prompt',
		tech: 'Prompt 模板 + 调优',
		output: 'Prompt 库',
		heat: '🔥',
		heatNote: '正被 AIE 吞并',
		bg: colors.white,
	},
	{
		name: 'Full Stack',
		core: '写应用',
		tech: 'React / API / DB',
		output: 'Web 应用',
		heat: '🔥',
		heatNote: '红海，AI 加持成 AIE',
		bg: colors.white,
	},
];

const columns: { label: string; key: keyof Pick<Role, 'core' | 'tech' | 'output' | 'heat'> }[] = [
	{ label: '核心工作', key: 'core' },
	{ label: '关键技术', key: 'tech' },
	{ label: '工作产出', key: 'output' },
	{ label: '招聘热度', key: 'heat' },
];

export default function S07_RoleDistinction() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1400, height: '90%', padding: '24px 36px', display: 'flex', flexDirection: 'column' }}>
				{/* 顶部小标 */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}
				>
					<span style={{ padding: '6px 16px', background: colors.dark, color: colors.white, fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, border, boxShadow: `3px 3px 0 ${colors.red}` }}>
						ROLE COMPARE
					</span>
					<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: '#666' }}>
						别再投错岗了
					</span>
				</motion.div>

				{/* 标题 */}
				<motion.h2
					initial={{ opacity: 0, x: -40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.15 }}
					style={{
						fontFamily: fonts.heading,
						fontSize: '38px',
						fontWeight: 900,
						lineHeight: 1.2,
						letterSpacing: -1,
						marginBottom: 18,
					}}
				>
					AI Engineer <span style={{ color: colors.red }}>≠</span> ML Engineer <span style={{ color: colors.red }}>≠</span> Prompt Engineer <span style={{ color: colors.red }}>≠</span> Full Stack
				</motion.h2>

				{/* 对比表 */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 0.5 }}
					style={{
						flex: 1,
						background: colors.white,
						border,
						boxShadow: shadow,
						display: 'grid',
						gridTemplateColumns: '160px repeat(4, 1fr)',
						gridAutoRows: '1fr',
						overflow: 'hidden',
					}}
				>
					{/* 表头 */}
					<div style={{ background: colors.dark, color: colors.white, padding: '14px 12px', fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, borderRight: `2px solid ${colors.black}`, borderBottom: `2px solid ${colors.black}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						维度
					</div>
					{roles.map((r) => (
						<div
							key={r.name}
							style={{
								background: r.highlight ? colors.yellow : colors.dark,
								color: r.highlight ? colors.black : colors.white,
								padding: '14px 12px',
								fontFamily: fonts.heading,
								fontSize: 17,
								fontWeight: 900,
								borderRight: `2px solid ${colors.black}`,
								borderBottom: `2px solid ${colors.black}`,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								textAlign: 'center',
								lineHeight: 1.2,
								letterSpacing: -0.5,
							}}
						>
							{r.name}
						</div>
					))}

					{/* 数据行 — 平铺到 grid，避免 fragment 嵌套 */}
					{columns.flatMap((col, ci) => {
						const isLastRow = ci === columns.length - 1;
						const cells = [
							<div
								key={`label-${col.key}`}
								style={{
									background: colors.warmBg,
									padding: '12px 12px',
									fontFamily: fonts.mono,
									fontSize: 13,
									fontWeight: 700,
									borderRight: `2px solid ${colors.black}`,
									borderBottom: isLastRow ? 'none' : `2px solid ${colors.black}`,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									textAlign: 'center',
									color: colors.dark,
								}}
							>
								{col.label}
							</div>,
							...roles.map((r) => (
								<div
									key={`${col.key}-${r.name}`}
									style={{
										background: r.highlight ? '#fffce0' : colors.white,
										padding: '12px 14px',
										fontFamily: fonts.body,
										fontSize: col.key === 'heat' ? 22 : 14.5,
										fontWeight: col.key === 'heat' ? 900 : 600,
										borderRight: `2px solid ${colors.black}`,
										borderBottom: isLastRow ? 'none' : `2px solid ${colors.black}`,
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										justifyContent: 'center',
										textAlign: 'center',
										lineHeight: 1.4,
									}}
								>
									<div>{r[col.key]}</div>
									{col.key === 'heat' && (
										<div style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, color: r.highlight ? colors.red : '#888', marginTop: 4 }}>
											{r.heatNote}
										</div>
									)}
								</div>
							)),
						];
						return cells;
					})}
				</motion.div>

				{/* 一行落点 */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.95 }}
					style={{ marginTop: 18, textAlign: 'center' }}
				>
					<div style={{ display: 'inline-block', padding: '14px 28px', background: colors.dark, color: colors.white, border, boxShadow: `6px 6px 0 ${colors.yellow}`, fontFamily: fonts.heading, fontSize: 22, fontWeight: 900, lineHeight: 1.3, letterSpacing: -0.5 }}>
						今天的 AI Engineer = <span style={{ color: colors.yellow }}>Full Stack + AI Engineering Core</span>
						<br />
						<span style={{ fontSize: 18, fontWeight: 700, color: 'rgba(255,255,255,0.85)' }}>下一个 5 年最稀缺的岗位</span>
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
