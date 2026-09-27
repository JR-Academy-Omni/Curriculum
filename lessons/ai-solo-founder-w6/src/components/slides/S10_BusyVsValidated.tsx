import { Slide, Inner, Title, Grid, Card, Tag, colors } from '../ui';

export default function S10_BusyVsValidated() {
	return <Slide bg={colors.warmBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
		<Tag bg={colors.dark}>ONLINE FIRST · A OR B?</Tag><Title size="54px" style={{ margin: '15px 0 28px' }}>同样一周，你选哪条路线？</Title>
		<Grid cols={2} gap={28}>
			<Card bg={colors.red}><h3 style={{ fontSize: 32 }}>A · 忙碌版</h3><p style={{ fontSize: 23, lineHeight: 1.7, marginTop: 16 }}>主视觉 → 周边 → 长文案 → 豪华舞台</p><strong style={{ fontSize: 20 }}>看起来像大活动，核心依赖仍未验证。</strong></Card>
			<Card bg={colors.green}><h3 style={{ fontSize: 32 }}>B · 验证版</h3><p style={{ fontSize: 23, lineHeight: 1.7, marginTop: 16 }}>锁定场地 → 确认嘉宾 → 开放报名 → 跑一次彩排</p><strong style={{ fontSize: 20 }}>先消灭会让项目失败的未知。</strong></Card>
		</Grid>
	</Inner></Slide>;
}