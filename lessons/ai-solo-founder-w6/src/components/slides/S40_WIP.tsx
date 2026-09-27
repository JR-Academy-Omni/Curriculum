import { Slide, Inner, Title, Grid, Card, Tag, colors } from '../ui';

const columns = [['LATER', '自动生成长报告'], ['READY', '反馈入口已定义'], ['DOING · 2', '可信问答 + 来源引用'], ['BLOCKED', '等待隐私评审'], ['DONE', '试点用户完成测试']];

export default function S40_WIP() {
	return <Slide bg={colors.white}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.red}>微软产品组 · KANBAN</Tag><Title size="52px" style={{ margin: '14px 0 24px' }}>隐私评审堵住了：停止继续开功能</Title><Grid cols={5} gap={12}>{columns.map(([title, body], index) => <Card key={title} bg={[colors.warmBg, colors.yellow, colors.red, colors.blue, colors.green][index]} style={{ padding: '18px 12px', minHeight: 150 }}><h3 style={{ fontSize: 19 }}>{title}</h3><p style={{ fontSize: 16, marginTop: 16 }}>{body}</p></Card>)}</Grid><p style={{ fontSize: 21, fontWeight: 900, marginTop: 24 }}>Doing 上限 2 项；全队先处理 Blocked。</p></Inner></Slide>;
}