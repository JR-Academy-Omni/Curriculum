import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

// 中段 30min Founder Exchange —— 每节现场课的固定环节（Lightman 2026-08-01 定案：位置在中段，不是开场）
const FLOW = [
	{ t: '0–12 min', h: '1–2 人上台', d: '讲这周的真实进展：做了什么、卡在哪、下一步' },
	{ t: '12–22 min', h: '围绕 ta 提问', d: '不是鼓掌，是问真问题——数据从哪来、为什么这么定' },
	{ t: '22–30 min', h: '自由交流', d: '找能帮你的人，或你能帮的人。组队也在这发生' },
];

export default function S16_FounderExchange() {
	return (
		<Slide bg={colors.yellow}>
			<Body>
				<SlideHead
					tag="§3 · 中场 · 30 min"
					tagBg={colors.white}
					title="Founder Exchange"
					sub="这半小时不是休息。是这门课最贵的部分——同一个房间里，都是在真做事的人。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginBottom: 20 }}>
					{FLOW.map((f) => (
						<div key={f.t} style={{ background: colors.white, border, boxShadow: shadow, padding: '18px 20px', minHeight: 180 }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: '#777', letterSpacing: 1 }}>{f.t}</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 24, fontWeight: 900, margin: '10px 0 12px' }}>{f.h}</div>
							<div style={{ fontSize: 16.5, lineHeight: 1.5 }}>{f.d}</div>
						</div>
					))}
				</div>

				<div style={{ background: colors.dark, border, padding: '18px 22px' }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.yellow, letterSpacing: 1.5, marginBottom: 10 }}>
						上台的人：这三句话讲完就下来
					</div>
					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, color: colors.white, fontSize: 17, lineHeight: 1.5 }}>
						<div>
							<b style={{ color: colors.yellow }}>1 ·</b> 这周我做了什么（拿出来，不要形容）
						</div>
						<div>
							<b style={{ color: colors.yellow }}>2 ·</b> 我卡在哪（具体到某一步）
						</div>
						<div>
							<b style={{ color: colors.yellow }}>3 ·</b> 我需要什么帮助（说清楚要谁做什么）
						</div>
					</div>
				</div>

				<Punchline bg={colors.red}>
					台下的规矩：<u>别给鼓励，给信息。</u>「加油」帮不到他，「我上个月踩过这个坑，是因为…」才帮得到。
				</Punchline>
			</Body>
		</Slide>
	);
}
