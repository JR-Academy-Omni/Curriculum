import { Slide, Inner, Title, Card, Grid, colors, fonts } from '../ui';

const PATHS = [
	{
		bg: colors.techBg,
		accent: colors.techPurple,
		from: '技术背景',
		fromDetail: '前端 / 后端 / 全栈 / SDE',
		to: ['AI Engineer', 'AI Agent Developer', 'RAG Engineer', 'FDE'],
		path: 'AI Engineer Bootcamp · 12 周',
	},
	{
		bg: colors.govBg,
		accent: colors.govOrange,
		from: '业务 / 产品背景',
		fromDetail: 'PM / BA / 咨询 / 运营',
		to: ['AI Product Manager', 'AI Adoption Specialist', 'CAIO 路径'],
		path: 'AI 必修课 + Business Analyst Bootcamp',
	},
	{
		bg: colors.industryBg,
		accent: colors.industryCyan,
		from: '非技术背景',
		fromDetail: '法律 / 合规 / SEO / 内容 / 行业专家',
		to: ['AI Ethics Officer', 'GEO Specialist', 'AI Finance Compliance'],
		path: 'AI 必修课 + Digital Marketing / 行业深耕',
	},
];

export default function S36_ThreePaths() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<div style={{ marginBottom: 28, width: '100%' }}>
					<div style={{
						display: 'inline-block', padding: '6px 14px', background: colors.red,
						color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 12,
					}}>CHAPTER 5 · 转型路径</div>
					<Title size="56px">三条<span style={{ color: colors.red }}>典型转型路径</span></Title>
					<p style={{ fontSize: 18, color: '#444', marginTop: 8 }}>
						从你现在的背景出发 —— 不是"全部从头学"，是"在你已有的基础上加 AI"。
					</p>
				</div>
				<Grid cols={3} gap={24} style={{ width: '100%' }}>
					{PATHS.map(p => (
						<Card key={p.from} bg={p.bg} style={{ padding: 28, minHeight: 360, display: 'flex', flexDirection: 'column' }}>
							<div style={{
								fontFamily: fonts.mono, fontSize: 12, color: '#444', letterSpacing: 2, marginBottom: 8,
							}}>FROM</div>
							<div style={{ fontSize: 28, fontWeight: 900, marginBottom: 6 }}>{p.from}</div>
							<div style={{ fontSize: 14, color: '#444', marginBottom: 20 }}>{p.fromDetail}</div>

							<div style={{
								fontFamily: fonts.mono, fontSize: 12, color: p.accent, letterSpacing: 2, marginBottom: 8,
							}}>→ TO</div>
							<div style={{ marginBottom: 20 }}>
								{p.to.map(t => (
									<div key={t} style={{ fontSize: 17, fontWeight: 700, marginBottom: 4 }}>
										<span style={{ color: p.accent }}>→ </span>{t}
									</div>
								))}
							</div>

							<div style={{
								marginTop: 'auto', padding: '10px 14px', background: colors.dark, color: colors.yellow,
								fontFamily: fonts.mono, fontSize: 12, fontWeight: 700,
							}}>JR 路径 · {p.path}</div>
						</Card>
					))}
				</Grid>
			</Inner>
		</Slide>
	);
}
