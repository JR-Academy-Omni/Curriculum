import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const scopes = [['必须有', '核心流程、反馈入口、基础数据保护'], ['可以人工', '通知、客服、首次交付'], ['明确不做', '复杂自动化、高级报表、多语言']];

export default function S14_FixedTime() {
	return <Slide bg={colors.warmBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
		<Tag bg={colors.blue}>FIXED TIME · VARIABLE SCOPE</Tag><Title size="58px" style={{ margin: '16px 0 28px' }}>时间固定，范围必须会变</Title>
		<Grid cols={3} gap={22}>{scopes.map(([title, body], index) => <CardSm key={title} bg={[colors.green, colors.yellow, colors.red][index]} style={{ minHeight: 180 }}><h3 style={{ fontSize: 29 }}>{title}</h3><p style={{ fontSize: 20, lineHeight: 1.55, marginTop: 18 }}>{body}</p></CardSm>)}</Grid>
		<p style={{ fontSize: 22, fontWeight: 900, marginTop: 30 }}>质量底线不变。先砍“做什么”，不是砍“能不能用”。</p>
	</Inner></Slide>;
}