import { Slide, Inner, Title, Card, Tag, colors, fonts } from '../ui';

export default function S15_SevenDayResult() {
	return <Slide bg={colors.green}><Inner center>
		<Tag bg={colors.dark}>暖场例子 · 一周边界</Tag><Title size="58px" style={{ margin: '20px 0 28px' }}>7 天后，什么证据值得存在？</Title>
		<Card bg={colors.white} style={{ maxWidth: 980, textAlign: 'left' }}><p style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 900 }}>WEEKLY OUTCOME</p><p style={{ fontSize: 32, lineHeight: 1.45, fontWeight: 900, marginTop: 18 }}>目标用户能走完一次核心流程，团队记录中断点，并获得是否愿意再次使用的真实反馈。</p><p style={{ fontSize: 20, marginTop: 20 }}>Appetite：限定一周团队容量；超出就减少范围，不降低可用底线。</p></Card>
	</Inner></Slide>;
}