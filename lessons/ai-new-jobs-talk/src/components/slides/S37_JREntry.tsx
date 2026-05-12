import { Slide, Inner, Title, Card, Grid, colors, fonts } from '../ui';

const COURSES = [
	{
		icon: '🎯',
		slug: 'ai-essentials-bootcamp',
		titleZh: 'AI 必修课',
		titleEn: 'AI Essentials Bootcamp',
		level: '零基础 · 全员必修',
		duration: '10 小时 · 33 节课',
		pitch: '入门最快的路径 —— 如果你不知道从哪开始，就从这里。',
	},
	{
		icon: '🧠',
		slug: 'ai-engineer-bootcamp',
		titleZh: 'AI Engineer 训练营',
		titleEn: 'AI Engineer Bootcamp',
		level: '中级 · 工程师向',
		duration: '12 周',
		pitch: 'LangChain + RAG + Agent + Fine-tuning + LLM Ops 全栈。',
	},
	{
		icon: '📐',
		slug: 'business-analyst',
		titleZh: 'AI 产品经理 (BA) 训练营',
		titleEn: 'AI Product Manager Bootcamp',
		level: '零基础 · 业务向',
		duration: '4-6 个月 + 实习',
		pitch: '含真实商业项目实习 —— 业务 / 咨询 / PM 转型主路径。',
	},
];

export default function S37_JREntry() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<div style={{ marginBottom: 28, width: '100%' }}>
					<div style={{
						display: 'inline-block', padding: '6px 14px', background: colors.red,
						color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 12,
					}}>CHAPTER 5 · JR 学习入口</div>
					<Title size="52px">如果你想<span style={{ color: colors.red }}>系统学</span> · 从这 3 个入口开始</Title>
				</div>
				<Grid cols={3} gap={22} style={{ width: '100%' }}>
					{COURSES.map(c => (
						<Card key={c.slug} bg={colors.white} style={{ padding: 28, minHeight: 380, display: 'flex', flexDirection: 'column' }}>
							<div style={{ fontSize: 48, marginBottom: 12 }}>{c.icon}</div>
							<div style={{ fontSize: 26, fontWeight: 900, marginBottom: 4 }}>{c.titleZh}</div>
							<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#888', marginBottom: 16 }}>{c.titleEn}</div>
							<div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
								<span style={{ padding: '3px 10px', background: '#f5f5f5', border: '1px solid #ddd', fontSize: 12, fontWeight: 700 }}>{c.level}</span>
								<span style={{ padding: '3px 10px', background: '#f5f5f5', border: '1px solid #ddd', fontSize: 12, fontWeight: 700 }}>{c.duration}</span>
							</div>
							<div style={{ fontSize: 15, lineHeight: 1.65, color: '#222', marginBottom: 20 }}>{c.pitch}</div>
							<div style={{
								marginTop: 'auto', padding: '10px 14px', background: colors.dark, color: colors.yellow,
								fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, wordBreak: 'break-all',
							}}>/program-course/introduction/{c.slug}</div>
						</Card>
					))}
				</Grid>
			</Inner>
		</Slide>
	);
}
