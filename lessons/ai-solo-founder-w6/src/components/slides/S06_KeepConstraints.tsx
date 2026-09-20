import { Slide, Inner, Title, Grid, Card, Tag, colors } from '../ui';

const columns = [
	{ title: '传统长反馈', color: colors.red, items: ['一次规划全部范围', '数月后才看到完整结果', '错误在末期集中暴露', '变更意味着大规模返工', '进度常等于已花成本'] },
	{ title: 'Agile 短反馈', color: colors.green, items: ['先选一小批高价值工作', '每轮交付可检查结果', '风险与误解尽早暴露', '下一轮吸收真实变化', '进度等于可验证价值'] },
];

export default function S06_KeepConstraints() {
	return <Slide bg={colors.warmBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
		<Tag bg={colors.dark}>WHY AGILE WORKS</Tag>
		<Title size="56px" style={{ margin: '16px 0 28px' }}>速度来自更短的反馈距离，不是让人跑更快</Title>
		<Grid cols={2} gap={30}>{columns.map(column => <Card key={column.title} bg={column.color}>
			<h3 style={{ fontSize: 32, marginBottom: 16 }}>{column.title}</h3>
			{column.items.map(item => <div key={item} style={{ fontSize: 21, fontWeight: 800, padding: '9px 0' }}>→ {item}</div>)}
		</Card>)}</Grid>
	</Inner></Slide>;
}