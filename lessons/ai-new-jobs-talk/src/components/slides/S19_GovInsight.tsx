import { Slide, Inner, Title, Card, Grid, colors, fonts } from '../ui';

const PILLARS = [
	{ label: '业务', desc: '懂客户、懂利润、懂组织 KPI' },
	{ label: '技术', desc: '不要求会写模型，但要看懂 RAG / Agent / 风险点' },
	{ label: '沟通', desc: '能在董事会、法务、工程团队之间翻译' },
];

const BACKGROUND_PATH = [
	{ from: '产品经理', to: 'AI PM / CAIO' },
	{ from: '律师 / 合规', to: 'AI Ethics Officer' },
	{ from: '咨询顾问', to: 'CAIO / 人机协作负责人' },
	{ from: '业务运营', to: 'AI PM / AI Revenue Officer' },
	{ from: '数据分析', to: 'AI PM / CAIO' },
];

export default function S19_GovInsight() {
	return (
		<Slide bg={colors.govBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<div style={{ marginBottom: 28, width: '100%' }}>
					<div style={{
						display: 'inline-block', padding: '6px 14px', background: colors.govOrange,
						color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 12,
					}}>CHAPTER 2 · 关键洞察</div>
					<Title size="48px">5 个治理岗的<span style={{ color: colors.govOrange }}>共同公式</span></Title>
				</div>

				<Grid cols={3} gap={20} style={{ width: '100%', marginBottom: 32 }}>
					{PILLARS.map(p => (
						<Card key={p.label} bg={colors.white} style={{ padding: 28, textAlign: 'center' }}>
							<div style={{ fontSize: 56, fontWeight: 900, color: colors.govOrange, marginBottom: 10 }}>{p.label}</div>
							<div style={{ fontSize: 16, lineHeight: 1.6, color: '#333' }}>{p.desc}</div>
						</Card>
					))}
				</Grid>

				<div style={{
					padding: '20px 28px', background: colors.dark, color: colors.white, width: '100%',
				}}>
					<div style={{
						fontFamily: fonts.mono, fontSize: 12, color: colors.yellow,
						fontWeight: 700, letterSpacing: 2, marginBottom: 14,
					}}>典型转型路径 · 5-10 年工作经验的你</div>
					<Grid cols={5} gap={12} style={{ width: '100%' }}>
						{BACKGROUND_PATH.map(b => (
							<div key={b.from} style={{ textAlign: 'center' }}>
								<div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{b.from}</div>
								<div style={{ fontSize: 20, color: colors.yellow, lineHeight: 1 }}>↓</div>
								<div style={{ fontSize: 14, color: colors.yellow, marginTop: 4 }}>{b.to}</div>
							</div>
						))}
					</Grid>
				</div>
			</Inner>
		</Slide>
	);
}
