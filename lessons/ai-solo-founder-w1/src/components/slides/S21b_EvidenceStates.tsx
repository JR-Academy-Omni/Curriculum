import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const STATES = [
	['写出来', 'SoT 有一个清楚的当前版本；不确定的内容仍标“假设”或“待验证”。', '#F3F0EA'],
	['跑一次', 'AI 基于 SoT 完成一项任务，你能发现并修正至少一处错误。', '#DCEBFF'],
	['拿证据', '真人行为、成本、承诺或付款改变了判断，才更新下一版 SoT。', '#D9F2E4'],
];

export default function S21b_EvidenceStates() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead tag="不要把三个阶段混在一起" tagBg={colors.red} title="写完，不等于做过；做过，也不等于市场验证" sub="AI 可以帮助前两个阶段，第三个阶段必须回到真实客户。" />
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
					{STATES.map(([title, body, bg], index) => <div key={title} style={{ border, boxShadow: shadow, background: bg, padding: '27px 24px', minHeight: 270 }}><div style={{ fontFamily: fonts.mono, color: colors.red, fontSize: 18, fontWeight: 900 }}>0{index + 1}</div><div style={{ marginTop: 20, fontFamily: fonts.heading, fontSize: 34, fontWeight: 950 }}>{title}</div><div style={{ marginTop: 16, fontSize: 20, lineHeight: 1.5 }}>{body}</div></div>)}
				</div>
				<Punchline bg={colors.dark}>W1 的过关线：<span style={{ color: colors.yellow }}>SoT 可用、AI OS 跑通、下一步证据明确。</span>不是“市场已经验证”。</Punchline>
			</Body>
		</Slide>
	);
}
