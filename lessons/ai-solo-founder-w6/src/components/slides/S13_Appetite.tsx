import { Slide, Inner, Half, Title, Highlight, Tag, Card, colors } from '../ui';

export default function S13_Appetite() {
	return <Slide bg={colors.yellow}><Inner split>
		<Half><Tag bg={colors.dark}>SHAPE UP · APPETITE</Tag><Title size="58px" style={{ margin: '18px 0' }}>不是问“要多久”<br />而是问<Highlight>“给多久”</Highlight></Title></Half>
		<Half><Card bg={colors.white}><p style={{ fontSize: 22, lineHeight: 1.7 }}><strong>Estimate：</strong>从想做的方案出发，预测它需要多久。<br /><br /><strong>Appetite：</strong>先规定值得投入多少时间，再设计装得下的方案。</p><div style={{ marginTop: 22, padding: 16, background: colors.green, fontSize: 21, fontWeight: 900 }}>管理原则：先定投入边界，再谈功能范围。</div></Card></Half>
	</Inner></Slide>;
}