import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const steps = [['00–03', '选项目', '你正在推进的真实项目'], ['03–08', '定结果', '明确用户、期限与证据'], ['08–15', '画拆解树', '3 个交付物，各 2 个任务'], ['15–22', '写任务卡', 'Owner、依赖、验收'], ['22–27', '过四道门', '留下本轮真实容量'], ['27–30', '设反馈点', 'Review 时间与参与者']];

export default function S49_ThirtyMinuteRunbook() {
	return <Slide bg={colors.yellow}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.dark}>操作步骤清单</Tag><Title size="52px" style={{ margin: '14px 0 22px' }}>30 分钟，完成最小闭环</Title><Grid cols={3} gap={14}>{steps.map(([time, title, body], index) => <CardSm key={time} bg={index === 5 ? colors.green : colors.white} style={{ minHeight: 105 }}><strong>{time}</strong><h3 style={{ fontSize: 21, margin: '7px 0' }}>{title}</h3><p style={{ fontSize: 15 }}>{body}</p></CardSm>)}</Grid></Inner></Slide>;
}