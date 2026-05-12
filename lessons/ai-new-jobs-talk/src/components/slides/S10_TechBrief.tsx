import { Slide, Inner, Title, Card, Grid, colors, fonts } from '../ui';
import { TECH_BRIEF } from '../../data/jobs';

export default function S10_TechBrief() {
	return (
		<Slide bg={colors.techBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<div style={{ marginBottom: 28, width: '100%' }}>
					<div style={{
						display: 'inline-block', padding: '6px 14px', background: colors.techPurple,
						color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 12,
					}}>CHAPTER 1 · 技术岗其余 9 个</div>
					<Title size="48px">一句话带过 · <span style={{ color: colors.techPurple }}>9 个细分技术岗</span></Title>
				</div>
				<Grid cols={3} gap={16} style={{ width: '100%' }}>
					{TECH_BRIEF.map(j => (
						<Card key={j.id} bg={colors.white} style={{ padding: 18, minHeight: 158 }}>
							<div style={{ fontSize: 18, fontWeight: 900, marginBottom: 4, lineHeight: 1.2 }}>{j.nameZh}</div>
							<div style={{ fontFamily: fonts.mono, fontSize: 11, color: '#888', marginBottom: 6 }}>{j.nameEn}</div>
							<div style={{
								fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: colors.techPurple, marginBottom: 8,
							}}>{j.salaryRange}</div>
							<div style={{ fontSize: 13, lineHeight: 1.55, color: '#333' }}>{j.oneLiner}</div>
						</Card>
					))}
				</Grid>
			</Inner>
		</Slide>
	);
}
