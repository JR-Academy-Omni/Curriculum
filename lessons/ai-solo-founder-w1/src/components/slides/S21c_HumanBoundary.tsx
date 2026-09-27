import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const SAFE = ['整理公开资料', '生成访谈问题草稿', '归纳脱敏记录', '比较替代方案', '起草内部清单'];
const HUMAN = ['联系或承诺客户', '发送报价或合同', '法律、税务和持牌判断', '付款与账号授权', '发布对外内容'];

export default function S21c_HumanBoundary() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead tag="AI OS 的责任边界" tagBg={colors.red} title="AI 可以准备；责任、承诺和高风险决定必须由人确认" sub="这条边界写进 SoT。模型再自信，也不能自行扩大权限。" />
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
					<div style={{ border, boxShadow: shadow, background: '#D9F2E4', padding: '24px 26px' }}><div style={{ fontFamily: fonts.mono, color: '#176c42', fontWeight: 900 }}>AI 可以先做</div>{SAFE.map((item) => <div key={item} style={{ marginTop: 14, borderBottom: '2px solid #111', paddingBottom: 9, fontSize: 21, fontWeight: 850 }}>✓ {item}</div>)}</div>
					<div style={{ border, boxShadow: shadow, background: '#FFE9E4', padding: '24px 26px' }}><div style={{ fontFamily: fonts.mono, color: colors.red, fontWeight: 900 }}>必须由你确认</div>{HUMAN.map((item) => <div key={item} style={{ marginTop: 14, borderBottom: '2px solid #111', paddingBottom: 9, fontSize: 21, fontWeight: 850 }}>✋ {item}</div>)}</div>
				</div>
				<Punchline>课堂不上传客户原始资料、私人邮箱、合同、财务数据、密码或账号权限。</Punchline>
			</Body>
		</Slide>
	);
}
