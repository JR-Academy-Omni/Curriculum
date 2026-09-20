import { Slide, Inner, Title, Grid, Card, Tag, colors } from '../ui';

export default function S12_OutputOutcome() {
	return <Slide bg={colors.white}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
		<Tag bg={colors.red}>从愿望到结果</Tag><Title size="56px" style={{ margin: '16px 0 30px' }}>“办好活动”无法指导今天</Title>
		<Grid cols={3} gap={20}>
			<Card bg={colors.warmBg}><h3 style={{ fontSize: 24 }}>愿望</h3><p style={{ fontSize: 28, fontWeight: 900, marginTop: 20 }}>办好 Demo Day</p></Card>
			<Card bg={colors.yellow}><h3 style={{ fontSize: 24 }}>可交付物</h3><p style={{ fontSize: 28, fontWeight: 900, marginTop: 20 }}>完成议程、报名与现场方案</p></Card>
			<Card bg={colors.green}><h3 style={{ fontSize: 24 }}>可观察结果</h3><p style={{ fontSize: 26, fontWeight: 900, marginTop: 20 }}>参与者完成展示、反馈与会后连接</p></Card>
		</Grid>
		<p style={{ fontSize: 21, marginTop: 30 }}>结果描述的是外部世界发生了什么，不是你忙了什么。</p>
	</Inner></Slide>;
}