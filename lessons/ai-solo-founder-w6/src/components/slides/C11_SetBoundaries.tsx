import { Slide, Inner, Title, Highlight, Tag, colors } from '../ui';

export default function C11_SetBoundaries() {
	return <Slide bg={colors.darkBg}><Inner center>
		<Tag bg={colors.yellow} color={colors.black}>PART 2 · 目标与边界</Tag>
		<Title white size="76px" style={{ margin: '24px 0' }}>先定边界，<br />再谈<Highlight color={colors.red}>努力</Highlight></Title>
		<p style={{ color: colors.white, fontSize: 24 }}>Goal · Outcome · Appetite</p>
	</Inner></Slide>;
}