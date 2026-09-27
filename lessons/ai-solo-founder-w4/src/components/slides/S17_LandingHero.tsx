import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const THREE = [
	{
		n: '①',
		t: '一句话说清：为谁，解决什么',
		bad: 'Beerops — 一场不一样的聚会',
		good: '（现场按 SoT 的定位那句改写）',
		why: '他三秒内要判断「这跟我有关吗」。形容词回答不了这个问题。',
	},
	{
		n: '②',
		t: '一个证据',
		bad: '广受好评 · 好评如潮',
		good: '上一场来了多少人 / 参与者原话 / 现场照片 / 合作方 logo',
		why: '第一场没有数据？就用真实的东西：谁在办、办给谁、场地在哪。不许编。',
	},
	{
		n: '③',
		t: '一个明确的 CTA',
		bad: '了解更多',
		good: '「报名（免费，限 30 人）」——动作 + 门槛 + 稀缺',
		why: '按钮上写的是他要做的动作，不是你希望他产生的感受。',
	},
];

export default function S17_LandingHero() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="§4 · landing"
					tagBg={colors.blue}
					title="首屏三件套——别的都可以先不做"
					sub="访客只看首屏就决定走不走。下面写得再好，他也翻不到。"
				/>

				<div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
					{THREE.map((x) => (
						<div
							key={x.n}
							style={{
								display: 'grid',
								gridTemplateColumns: '52px 1fr',
								gap: 14,
								background: colors.white,
								border,
								boxShadow: shadow,
								padding: '14px 18px',
							}}
						>
							<div style={{ fontFamily: fonts.heading, fontSize: 34, fontWeight: 900, color: colors.blue }}>{x.n}</div>
							<div>
								<div style={{ fontFamily: fonts.heading, fontSize: 22, fontWeight: 900, marginBottom: 9 }}>{x.t}</div>
								<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 8 }}>
									<div style={{ padding: '7px 11px', background: '#FFE9E4', borderLeft: `4px solid ${colors.red}`, fontSize: 15.5 }}>
										<b>✗ </b>
										{x.bad}
									</div>
									<div style={{ padding: '7px 11px', background: '#D9F2E4', borderLeft: `4px solid ${colors.green}`, fontSize: 15.5 }}>
										<b>✓ </b>
										{x.good}
									</div>
								</div>
								<div style={{ fontSize: 15, color: '#555', lineHeight: 1.45 }}>{x.why}</div>
							</div>
						</div>
					))}
				</div>

				<Punchline bg={colors.dark}>
					首屏写完，自己念一遍。<u>如果把活动名换成别人的活动，这段话依然成立——那就等于什么都没说。</u>
				</Punchline>
			</Body>
		</Slide>
	);
}
