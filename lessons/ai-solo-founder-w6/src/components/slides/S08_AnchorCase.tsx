import { Slide, Inner, Half, Title, Tag, Card, colors } from '../ui';

export default function S08_AnchorCase() {
	return <Slide bg={colors.yellow}><Inner split>
		<Half><Tag bg={colors.dark}>暖场例子 · 先找手感</Tag><Title size="62px" style={{ margin: '18px 0' }}>三周后，举办线下创业 Demo Day</Title><p style={{ fontSize: 22, lineHeight: 1.55 }}>目标清楚，但场地、嘉宾、招募、现场和跟进互相依赖。最危险的不是任务少，而是每个人都在“准备活动”。</p></Half>
		<Half><Card bg={colors.white}><h3 style={{ fontSize: 28, marginBottom: 18 }}>当前现实</h3>{['时间：三周，日期不可移动', '团队：市场、运营、创业导师', '依赖：场地、嘉宾、参与者', '目标：参与者完成展示、交流与有效跟进'].map(item => <p key={item} style={{ fontSize: 20, fontWeight: 800, margin: '14px 0' }}>→ {item}</p>)}</Card></Half>
	</Inner></Slide>;
}