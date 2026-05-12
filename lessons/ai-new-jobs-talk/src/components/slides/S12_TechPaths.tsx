import { Slide, Inner, Title, Card, Grid, colors, fonts } from '../ui';

const PATHS = [
	{
		name: 'AI Engineer 路径',
		color: colors.techPurple,
		jobs: ['AI Engineer', 'FDE', 'Context Engineer', 'RAG Engineer', 'AI Agent Developer', 'Knowledge Architect'],
		jrCourse: 'AI Engineer Bootcamp · 12 周',
		desc: '面向想做模型应用、Agent 系统的工程师',
	},
	{
		name: 'Prompt / 提示词路径',
		color: colors.red,
		jobs: ['Prompt Engineer', 'AI Trainer', 'AI Automation Specialist'],
		jrCourse: 'AI 必修课 + Prompt Master',
		desc: '面向想从"用得好 AI"切入而非"写 LLM"的人',
	},
	{
		name: 'MLOps / DevOps 路径',
		color: colors.indigo,
		jobs: ['MLOps Engineer', 'AI Red Teamer', 'Algorithm Bias Auditor', 'AI Adoption Specialist'],
		jrCourse: 'DevOps Bootcamp + AI Adoption Bootcamp',
		desc: '面向 DevOps / SRE / 系统背景的工程师转向',
	},
];

export default function S12_TechPaths() {
	return (
		<Slide bg={colors.techBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<div style={{ marginBottom: 28, width: '100%' }}>
					<div style={{
						display: 'inline-block', padding: '6px 14px', background: colors.techPurple,
						color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 12,
					}}>CHAPTER 1 · 学习路径</div>
					<Title size="48px">13 个岗位 → <span style={{ color: colors.techPurple }}>3 条学习路径</span></Title>
					<p style={{ fontSize: 18, color: '#444', marginTop: 8 }}>
						不需要把 13 个岗位都学一遍 —— 同一条路径下的岗位技能高度重叠。
					</p>
				</div>
				<Grid cols={3} gap={20} style={{ width: '100%' }}>
					{PATHS.map(p => (
						<Card key={p.name} bg={colors.white} style={{ padding: 24, minHeight: 340 }}>
							<div style={{
								display: 'inline-block', padding: '4px 12px', background: p.color,
								color: colors.white, fontSize: 13, fontWeight: 700, marginBottom: 14,
							}}>{p.name}</div>
							<div style={{
								fontSize: 14, lineHeight: 1.7, color: '#222', marginBottom: 16,
							}}>{p.desc}</div>
							<div style={{
								fontFamily: fonts.mono, fontSize: 11, color: '#666', letterSpacing: 1.5, marginBottom: 8,
							}}>覆盖岗位</div>
							<div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
								{p.jobs.map(j => (
									<span key={j} style={{
										padding: '3px 8px', background: '#f5f5f5', border: '1px solid #ccc',
										fontSize: 11, color: '#444',
									}}>{j}</span>
								))}
							</div>
							<div style={{
								padding: '10px 14px', background: colors.dark, color: colors.yellow,
								fontFamily: fonts.mono, fontSize: 13, fontWeight: 700,
							}}>→ {p.jrCourse}</div>
						</Card>
					))}
				</Grid>
			</Inner>
		</Slide>
	);
}
