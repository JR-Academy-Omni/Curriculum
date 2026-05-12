import { Slide, Inner, Title, Card, Grid, colors, fonts } from '../ui';
import { INDUSTRY_BRIEF } from '../../data/jobs';

export default function S25_IndustryBrief() {
	return (
		<Slide bg={colors.industryBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<div style={{ marginBottom: 32, width: '100%' }}>
					<div style={{
						display: 'inline-block', padding: '6px 14px', background: colors.industryCyan,
						color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 12,
					}}>CHAPTER 3 · 行业岗其余 2 个</div>
					<Title size="48px">一句话带过 · <span style={{ color: colors.industryCyan }}>2 个细分行业岗</span></Title>
				</div>
				<Grid cols={2} gap={28} style={{ width: '100%' }}>
					{INDUSTRY_BRIEF.map(j => (
						<Card key={j.id} bg={colors.white} style={{ padding: 32, minHeight: 260 }}>
							<div style={{ fontSize: 30, fontWeight: 900, marginBottom: 6 }}>{j.nameZh}</div>
							<div style={{ fontFamily: fonts.mono, fontSize: 14, color: '#888', marginBottom: 16 }}>{j.nameEn}</div>
							<div style={{
								fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, color: colors.industryCyan, marginBottom: 20,
							}}>{j.salaryRange}</div>
							<div style={{ fontSize: 18, lineHeight: 1.65, color: '#222' }}>{j.oneLiner}</div>
						</Card>
					))}
				</Grid>
			</Inner>
		</Slide>
	);
}
