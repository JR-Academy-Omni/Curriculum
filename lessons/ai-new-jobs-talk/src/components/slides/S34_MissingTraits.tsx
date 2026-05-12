import { Slide, Inner, Title, Card, Grid, colors, fonts } from '../ui';

const TRAITS = [
	{
		no: '01',
		title: '2025 之后才形成',
		desc: '不是从老岗位"改名升级"，是真正的新工种 —— Vibe Coder 2025-02 才被命名，具身智能 2024 起被资本重押。',
	},
	{
		no: '02',
		title: '雇主已在发公开 JD',
		desc: 'Figure AI / OpenAI / Scale AI 等公司 careers 页都能直接搜到 —— 不是 LinkedIn 上的营销 title，是真实在招的岗位。',
	},
	{
		no: '03',
		title: '中文媒体还没大量报道',
		desc: '中文世界还没形成系统盘点 —— 这意味着进入这些岗位的人将吃到信息差红利。',
	},
];

export default function S34_MissingTraits() {
	return (
		<Slide bg="#fef9d9">
			<Inner style={{ flexDirection: 'column' }}>
				<div style={{ marginBottom: 28, width: '100%' }}>
					<div style={{
						display: 'inline-block', padding: '6px 14px', background: colors.black,
						color: colors.yellow, fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 12,
					}}>CHAPTER 4 · 共同特征</div>
					<Title size="48px">这 4 个工种 · <span style={{ color: colors.red }}>三个共同特征</span></Title>
				</div>
				<Grid cols={3} gap={20} style={{ width: '100%', marginBottom: 24 }}>
					{TRAITS.map(t => (
						<Card key={t.no} bg={colors.white} style={{ padding: 28, minHeight: 240 }}>
							<div style={{
								fontFamily: fonts.mono, fontSize: 48, fontWeight: 700,
								color: colors.red, lineHeight: 1, marginBottom: 12,
							}}>{t.no}</div>
							<div style={{ fontSize: 24, fontWeight: 900, marginBottom: 12 }}>{t.title}</div>
							<div style={{ fontSize: 15, lineHeight: 1.65, color: '#333' }}>{t.desc}</div>
						</Card>
					))}
				</Grid>
				<div style={{
					padding: '20px 28px', background: colors.dark, color: colors.white, width: '100%', textAlign: 'center',
				}}>
					<div style={{
						fontFamily: fonts.mono, fontSize: 12, color: colors.yellow,
						fontWeight: 700, letterSpacing: 3, marginBottom: 8,
					}}>暗示</div>
					<div style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.3 }}>
						现在进入 = <span style={{ color: colors.yellow }}>早期红利</span> · 等所有中文媒体开始盘点的时候，红利就消失了
					</div>
				</div>
			</Inner>
		</Slide>
	);
}
