import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const sources = [
	['Microsoft Learn · What is Agile?', '增量交付、团队协作、持续规划与持续学习'],
	['Azure Boards · Work Items', 'Epic → Feature → Story / Requirement → Task 工作层级'],
	['Scrum Guide · Scrum Guides', '透明、检查、调整；Sprint Goal；Review / Retro；DoD'],
	['Basecamp · Shape Up', 'Appetite、Fixed Time / Variable Scope 与 Hill Chart'],
	['Eric Ries · Lean Startup', 'Build–Measure–Learn 与可验证学习'],
	['Gary Klein · Premortem', '假设项目已失败，提前暴露风险'],
	['Kanban Guide · Intercom RICE', '限制 WIP；同层候选的相对优先级'],
	['NCI · Implementation Intentions', 'If–Then 规则把触发情景连接到行动'],
	['Microsoft Learn · AI agents', 'Agent 编排、工具边界、人工监督与责任治理'],
];

export default function S53_Sources() {
	return <Slide bg={colors.warmBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.dark}>APPENDIX · RESEARCH BASIS</Tag><Title size="46px" style={{ margin: '14px 0 18px' }}>方法有出处，组合与案例由本课程负责</Title><Grid cols={2} gap={11}>{sources.map(([title, body], index) => <CardSm key={title} bg={index % 2 ? colors.white : colors.yellow} style={{ minHeight: 76 }}><h3 style={{ fontSize: 17 }}>{title}</h3><p style={{ fontSize: 14, marginTop: 6 }}>{body}</p></CardSm>)}</Grid><p style={{ fontSize: 14, marginTop: 14 }}>learn.microsoft.com · scrumguides.org · basecamp.com/shapeup · theleanstartup.com · hbr.org · kanbanguides.org · intercom.com · cancercontrol.cancer.gov</p></Inner></Slide>;
}