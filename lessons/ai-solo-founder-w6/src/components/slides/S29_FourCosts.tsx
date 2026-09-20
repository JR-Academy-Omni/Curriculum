import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const costs = [['主数据风险', '物料与供应商口径不一致'], ['库存风险', '新旧系统重复计数'], ['切账风险', '财务期间与业务上线冲突'], ['采用风险', '关键用户不会或不愿使用']];

export default function S29_FourCosts() {
	return <Slide bg={colors.yellow}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.dark}>PREMORTEM · 事前验尸</Tag><Title size="54px" style={{ margin: '15px 0 28px' }}>假设上线首日失败，它最可能怎么失败？</Title><Grid cols={4} gap={16}>{costs.map(([title, body], index) => <CardSm key={title} bg={index < 2 ? colors.red : colors.white} style={{ minHeight: 155 }}><h3 style={{ fontSize: 24 }}>{title}</h3><p style={{ fontSize: 18, lineHeight: 1.5, marginTop: 16 }}>{body}</p></CardSm>)}</Grid><p style={{ fontSize: 21, fontWeight: 900, marginTop: 26 }}>风险不是登记后等待；高风险项必须进入本轮验证和演练。</p></Inner></Slide>;
}