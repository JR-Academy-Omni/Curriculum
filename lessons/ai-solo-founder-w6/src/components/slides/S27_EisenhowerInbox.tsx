import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const cells = [['库存数量无法对账', '重要 + 紧急：立即处理', colors.red], ['完成关键用户演练', '重要 + 不紧急：排入本轮', colors.green], ['临时增加报表字段', '紧急但非关键：缩短或转交', colors.yellow], ['“旧系统有，也要照搬”', '不重要 + 不紧急：不进入', colors.warmBg]];

export default function S27_EisenhowerInbox() {
	return <Slide bg={colors.white}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.yellow} color={colors.black}>EISENHOWER · 只管临时入口</Tag><Title size="51px" style={{ margin: '14px 0 24px' }}>紧急程度能管插单，不能决定上线范围</Title><Grid cols={2} gap={16}>{cells.map(([title, body, color]) => <CardSm key={title} bg={color} style={{ minHeight: 112 }}><h3 style={{ fontSize: 22 }}>{title}</h3><p style={{ fontSize: 17, marginTop: 9 }}>{body}</p></CardSm>)}</Grid><p style={{ fontSize: 20, marginTop: 24, fontWeight: 900 }}>本轮目标：采购到库存的核心价值流可运行、可对账、可回退。</p></Inner></Slide>;
}