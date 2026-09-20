import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const fields = [['Sprint Goal', '试点用户完成可信问答'], ['Deliverable', '问答 + 来源引用'], ['Acceptance', '答案、来源、权限正确'], ['Owner', '产品组唯一负责人'], ['Dependency', '安全批准数据范围'], ['Fallback', '后移长报告']];

export default function S38_FiveItemPlan() {
	return <Slide bg={colors.warmBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.dark}>微软产品组 · SPRINT PLANNING</Tag><Title size="52px" style={{ margin: '15px 0 24px' }}>这一周，只承诺可信问答</Title><Grid cols={3} gap={15}>{fields.map(([title, body], index) => <CardSm key={title} bg={index === 0 ? colors.yellow : index === 2 ? colors.green : index === 5 ? colors.red : colors.white} style={{ minHeight: 105 }}><h3 style={{ fontSize: 20 }}>{title}</h3><p style={{ fontSize: 17, marginTop: 9 }}>{body}</p></CardSm>)}</Grid></Inner></Slide>;
}