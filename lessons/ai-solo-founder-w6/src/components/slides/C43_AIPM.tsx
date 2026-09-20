import { Slide, Inner, Title, Highlight, Tag, colors } from '../ui';

export default function C43_AIPM() {
	return <Slide bg={colors.darkBg}><Inner center><Tag bg={colors.purple}>PART 4 · 方法提炼</Tag><Title white size="72px" style={{ margin: '24px 0' }}>高手不是方法更多，<br />而是知道<Highlight color={colors.red}>何时用哪一个</Highlight></Title><p style={{ color: colors.white, fontSize: 24 }}>方向 · 边界 · 风险 · 优先级 · 流动 · 反馈</p></Inner></Slide>;
}