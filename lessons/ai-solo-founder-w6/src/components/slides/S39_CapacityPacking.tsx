import { Slide, Inner, Half, Title, Card, Tag, colors } from '../ui';

export default function S39_CapacityPacking() {
	return <Slide bg={colors.yellow}><Inner split><Half><Tag bg={colors.dark}>微软产品组 · CAPACITY GATE</Tag><Title size="56px" style={{ margin: '18px 0' }}>容量决定承诺，<br />不是需求数量</Title><p style={{ fontSize: 21 }}>先保护试点和安全工作。</p></Half><Half><Card bg={colors.white}>{['① 确认真实可用容量', '② 扣除固定支持工作', '③ 保留安全评审缓冲', '④ 装入本轮 Must', '⑤ 其余回到 Backlog'].map(item => <p key={item} style={{ fontSize: 21, fontWeight: 800, margin: '15px 0' }}>{item}</p>)}</Card></Half></Inner></Slide>;
}