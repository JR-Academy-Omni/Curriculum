import { Slide, Inner, Title, Grid, Card, Tag, colors } from '../ui';

export default function S41_IfThen() {
	return <Slide bg={colors.blue}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.dark}>微软产品组 · IF–THEN</Tag><Title size="54px" style={{ margin: '15px 0 28px' }}>敏感数据风险出现，立即停止该场景</Title><Grid cols={2} gap={28}><Card bg={colors.red}><h3 style={{ fontSize: 26 }}>错误做法</h3><p style={{ fontSize: 28, fontWeight: 900, marginTop: 24 }}>继续试点，等问题确认后再处理</p></Card><Card bg={colors.green}><h3 style={{ fontSize: 26 }}>触发规则</h3><p style={{ fontSize: 24, fontWeight: 900, lineHeight: 1.5, marginTop: 18 }}>停止场景 → 标记 Blocked → 安全法务定义恢复条件。</p></Card></Grid></Inner></Slide>;
}