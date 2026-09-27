import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const checks = [
	['目标', '结果是否可观察，而非“做好项目”'],
	['拆解', '是否按交付物和价值流，而非部门罗列'],
	['任务', '是否有唯一 Owner、依赖和明确产出'],
	['验收', '是否能由团队外的人判断完成'],
	['Trim', '是否真的移出范围，并安排 Review'],
];

export default function S52b_WorkshopRubric() {
	return <Slide bg={colors.yellow}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
		<Tag bg={colors.dark}>RUBRIC · 讲评标准</Tag>
		<Title size="50px" style={{ margin: '15px 0 24px' }}>好计划不是写得满，而是五个问题都能回答</Title>
		<Grid cols={5} gap={13}>{checks.map(([title, body], index) => <CardSm key={title} bg={index === 4 ? colors.green : colors.white} style={{ minHeight: 165 }}><div style={{ fontSize: 34, fontWeight: 900 }}>0{index + 1}</div><h3 style={{ fontSize: 22, margin: '8px 0' }}>{title}</h3><p style={{ fontSize: 15, lineHeight: 1.45 }}>{body}</p></CardSm>)}</Grid>
		<div style={{ marginTop: 24, padding: '14px 18px', background: colors.red, fontSize: 18, fontWeight: 900 }}>常见失败：所有项都是 Must · 用 RICE 制造假精确 · 把活动当结果 · 没有反馈时间</div>
		<p style={{ fontSize: 19, fontWeight: 900, marginTop: 18 }}>每组 90 秒：结论、取舍、首个 Sprint、验收证据。</p>
	</Inner></Slide>;
}
