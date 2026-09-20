import { Slide, Inner, Half, Title, Card, Tag, colors } from '../ui';

export default function S51_ReviewSchedule() {
	return <Slide bg={colors.blue}><Inner split><Half><Tag bg={colors.dark}>把反馈写进日历</Tag><Title size="58px" style={{ margin: '18px 0' }}>没有固定 Review，<br />就没有 Agile 闭环</Title></Half><Half><Card bg={colors.white}><h3 style={{ fontSize: 27 }}>创建重复反馈事件</h3>{['选择每周固定时间与 30 分钟时长', '邀请能验收结果的利益相关者', '附上目标、看板和验收条件', '前半段 Review 结果', '后半段 Retro 并确定一个改进'].map((item, index) => <p key={item} style={{ fontSize: 19, fontWeight: 800, margin: '14px 0' }}>{index + 1}. {item}</p>)}</Card></Half></Inner></Slide>;
}