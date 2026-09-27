import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const FIELDS = ['具体客户', '问题场景与后果', '现在怎么处理', '现有做法的缺口', '初步产品 / 服务 / 改造方案', '本周验证动作'];

export default function S16d_WriteCard() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead tag="现在写自己的版本" tagBg={colors.red} title="完成 Opportunity Card v0.1" sub="先独立写，再进入 Founder Exchange。写不确定的地方时，直接标“待验证”。" />
				<div style={{ display: 'grid', gridTemplateColumns: '0.72fr 1.65fr', gap: 22 }}>
					<div style={{ border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '26px 24px', display: 'grid', placeItems: 'center', textAlign: 'center' }}>
						<div><div style={{ fontFamily: fonts.mono, color: colors.yellow, fontSize: 16, fontWeight: 800 }}>独立填写</div><div style={{ fontFamily: fonts.heading, fontSize: 78, fontWeight: 950, lineHeight: 1.1, marginTop: 8 }}>20</div><div style={{ fontSize: 24, fontWeight: 900 }}>分钟</div></div>
					</div>
					<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
						{FIELDS.map((field, index) => <div key={field} style={{ border, background: [colors.white, '#FFF6D6', '#DCEBFF'][index % 3], padding: '16px 18px', minHeight: 105 }}><div style={{ fontFamily: fonts.mono, color: colors.red, fontWeight: 900 }}>0{index + 1}</div><div style={{ marginTop: 8, fontSize: 20, lineHeight: 1.3, fontWeight: 900 }}>{field}</div><div style={{ marginTop: 10, borderBottom: '2px solid #111' }} /></div>)}
					</div>
				</div>
				<Punchline>完成标准：同学能复述，AI 不需要猜，明天就知道先做什么。</Punchline>
			</Body>
		</Slide>
	);
}
