import { Slide, Inner, Title, Card, Tag, colors, fonts } from '../ui';

export default function S36_DoDFormula() {
	return <Slide bg={colors.green}><Inner center><Tag bg={colors.dark}>微软产品组 · DAILY STAND-UP</Tag><Title size="56px" style={{ margin: '18px 0 26px' }}>今天先解除数据权限阻塞</Title><Card bg={colors.white} style={{ maxWidth: 1160, textAlign: 'left' }}><p style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 900 }}>三问</p><p style={{ fontSize: 31, lineHeight: 1.55, fontWeight: 900, marginTop: 16 }}>完成了什么？今天交付什么？被什么阻塞？</p><p style={{ fontSize: 20, marginTop: 18 }}>工程等待安全确认数据权限：先解阻塞，不新增功能。</p></Card></Inner></Slide>;
}