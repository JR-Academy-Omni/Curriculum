import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const tasks = ['找场地', '做主视觉', '邀请嘉宾', '写主持稿', '开放报名', '找摄影', '安排茶歇', '准备胸牌', '做签到表', '设计议程', '招志愿者', '检查音响', '发提醒', '准备备选嘉宾', '安排动线', '收反馈', '跟进线索', '做复盘'];

export default function S09_MessyBacklog() {
	return <Slide bg={colors.white}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
		<Tag bg={colors.orange}>BEFORE</Tag><Title size="52px" style={{ margin: '14px 0 22px' }}>18 条都合理，所以 18 条都危险</Title>
		<Grid cols={6} gap={12}>{tasks.map((task, index) => <CardSm key={task} bg={index % 3 === 0 ? colors.warmBg : colors.white} style={{ fontSize: 17, fontWeight: 800, minHeight: 56 }}>{task}</CardSm>)}</Grid>
		<p style={{ marginTop: 24, fontSize: 22, fontWeight: 900 }}>清单越长不代表项目越清楚：缺的是层级、负责人、依赖和验收。</p>
	</Inner></Slide>;
}