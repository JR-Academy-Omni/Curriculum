import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const questions = [['Premortem', '先假设失败，找真正风险'], ['Kanban', 'Stop starting, start finishing'], ['RICE', '只比较同层候选，不制造假精确'], ['If–Then', '预先约定异常触发与行动'], ['Capacity', '从真实容量承诺，不从愿望倒推加班']];

export default function S46_SundayReview() {
	return <Slide bg={colors.green}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.dark}>EXPERT RULES · 5–8</Tag><Title size="53px" style={{ margin: '15px 0 26px' }}>把风险、流动和承诺变成可操作规则</Title><Grid cols={5} gap={14}>{questions.map(([title, body], index) => <CardSm key={title} bg={index === 3 ? colors.red : colors.white} style={{ minHeight: 155 }}><h3 style={{ fontSize: 21 }}>{title}</h3><p style={{ fontSize: 16, lineHeight: 1.45, marginTop: 16 }}>{body}</p></CardSm>)}</Grid><p style={{ marginTop: 25, fontSize: 20, fontWeight: 900 }}>共同原则：用可见证据代替乐观，用明确取舍代替全面推进。</p></Inner></Slide>;
}