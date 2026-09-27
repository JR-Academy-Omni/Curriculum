import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, SlideHead, SourceNote } from '../DeckTable';

const CHAIN = [
	{ t: '报名', ai: '表单自动收 + 自动回确认信', you: '设计那 1 个资格问题' },
	{ t: '提醒', ai: '活动前 3 天 / 前 1 天自动发', you: '定发什么、什么语气' },
	{ t: '签到', ai: '扫码签到、自动记录到表', you: '现场认人、招呼人' },
	{ t: '现场', ai: '拍照素材自动归档', you: '所有需要临场判断的事' },
	{ t: '跟进', ai: '按标签生成个性化初稿', you: '高意向的，你自己发' },
	{ t: '复盘', ai: '汇总数字、出复盘表', you: '判断值不值得再办' },
];

export default function S22_ExecAutomation() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="§5 · 执行"
					tagBg={colors.blue}
					title="活动当天前后，哪些可以让它自己转"
					sub="做完品牌和网页只是开始。真正耗人的是报名到跟进这条链。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12, marginBottom: 18 }}>
					{CHAIN.map((c, i) => (
						<div key={c.t} style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
							<div
								style={{
									fontFamily: fonts.heading,
									fontSize: 21,
									fontWeight: 900,
									textAlign: 'center',
									padding: '8px 0',
									background: colors.black,
									color: colors.white,
									position: 'relative',
								}}
							>
								{c.t}
								{i < CHAIN.length - 1 ? (
									<span
										style={{
											position: 'absolute',
											right: -9,
											top: '50%',
											transform: 'translateY(-50%)',
											color: colors.black,
											fontSize: 18,
											zIndex: 2,
										}}
									>
										▶
									</span>
								) : null}
							</div>
							<div style={{ background: '#D9F2E4', border, boxShadow: shadowSm, padding: '11px 11px', minHeight: 108 }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 11.5, fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>AI</div>
								<div style={{ fontSize: 14.5, lineHeight: 1.4 }}>{c.ai}</div>
							</div>
							<div style={{ background: '#FFE9E4', border, boxShadow: shadowSm, padding: '11px 11px', minHeight: 92 }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 11.5, fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>你</div>
								<div style={{ fontSize: 14.5, lineHeight: 1.4 }}>{c.you}</div>
							</div>
						</div>
					))}
				</div>

				<div style={{ background: colors.dark, border, padding: '16px 20px', color: colors.white, fontSize: 16.5, lineHeight: 1.55 }}>
					看这一排你会发现规律：<b style={{ color: colors.yellow }}>AI 干的全是「重复且有明确规则」的</b>，
					你干的全是<b style={{ color: colors.yellow }}>「需要判断和需要是个人」的</b>。
					这条线不会因为模型更强而移动多少——因为另一半本来就不是能力问题。
				</div>

				<SourceNote>
					跟进节奏（高意向 24h 内首触、72h 价值内容、7d 收口）取自 JR 内部活动运营口径。免费活动到场率经验值约 50%——要坐满 25 人，按 50 人招。
				</SourceNote>
			</Body>
		</Slide>
	);
}
