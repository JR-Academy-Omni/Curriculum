import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

export default function S23_RiskFirst() {
	return <Slide bg={colors.white}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.orange}>DEFINITION OF READY / DONE</Tag><Title size="51px" style={{ margin: '14px 0 24px' }}>开工与完成，都必须能由别人判断</Title><Grid cols={3} gap={20}>
		<CardSm bg={colors.red}><h3 style={{ fontSize: 25 }}>模糊任务</h3><p style={{ fontSize: 21, marginTop: 20 }}>迁移客户数据<br />确保没有问题</p></CardSm>
		<CardSm bg={colors.yellow}><h3 style={{ fontSize: 25 }}>Ready · 可开工</h3><p style={{ fontSize: 18, marginTop: 16, lineHeight: 1.55 }}>模型已冻结<br />样本已脱敏<br />Owner 已确认<br />回滚路径明确</p></CardSm>
		<CardSm bg={colors.green}><h3 style={{ fontSize: 25 }}>Done · 可验收</h3><p style={{ fontSize: 18, marginTop: 16, lineHeight: 1.55 }}>关键字段对账通过<br />异常有处置记录<br />安全与业务签核<br />回滚演练完成</p></CardSm>
	</Grid><p style={{ marginTop: 28, fontSize: 21, fontWeight: 900 }}>Microsoft Azure Boards：验收条件帮助团队与客户建立共同理解。</p></Inner></Slide>;
}