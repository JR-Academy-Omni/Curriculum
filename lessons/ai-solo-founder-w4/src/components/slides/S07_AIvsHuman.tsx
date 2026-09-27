import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, SourceNote } from '../DeckTable';

const AI_CAN = [
	'把一句话定位扩成完整策划案',
	'生成合作方名单话术、跟进清单模板',
	'Design System / logo / 吉祥物 / 海报',
	'landing page 代码 + 文案',
	'报名确认、提醒、跟进消息的初稿',
	'活动后的复盘表、素材二次分发',
];

const HUMAN_MUST = [
	{ t: '拍板定位', w: '“办给谁”这一句只能你定。AI 给的是选项，不是决定' },
	{ t: '真人跟进', w: '高意向的人必须真人联系。AI 写初稿，你改完再发' },
	{ t: '隐私 consent', w: '收联系方式必须明示。报名页 / 现场 / 留资表三处都要有' },
	{ t: '合作方承诺', w: '答应赞助商什么，只能你签字。AI 不许替你许诺' },
	{ t: '现场应变', w: '人没来、设备坏了、嘉宾迟到——这些没有 prompt' },
];

export default function S07_AIvsHuman() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="§1 · 边界"
					tagBg={colors.red}
					title="哪些交给 AI，哪些你必须自己干"
					sub="这条线画不清，要么你累死，要么你出事。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 22 }}>
					{/* AI 能干 */}
					<div style={{ background: '#D9F2E4', border, boxShadow: shadow, padding: '20px 22px 22px' }}>
						<div
							style={{
								fontFamily: fonts.heading,
								fontSize: 24,
								fontWeight: 900,
								marginBottom: 14,
								display: 'flex',
								alignItems: 'center',
								gap: 10,
							}}
						>
							<span style={{ background: colors.black, color: colors.green, padding: '2px 10px', fontFamily: fonts.mono, fontSize: 15 }}>
								AI
							</span>
							交给它，你去干别的
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
							{AI_CAN.map((a) => (
								<div key={a} style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
									<span style={{ fontFamily: fonts.mono, fontWeight: 700, color: colors.black, marginTop: 1 }}>✓</span>
									<span style={{ fontSize: 17, lineHeight: 1.45 }}>{a}</span>
								</div>
							))}
						</div>
						<div style={{ marginTop: 16, paddingTop: 14, borderTop: `2px dashed ${colors.black}`, fontSize: 15, lineHeight: 1.5 }}>
							共同点：<b>有明确输入、产出可以被你一眼检查</b>。
						</div>
					</div>

					{/* 人必须干 */}
					<div style={{ background: '#FFE9E4', border, boxShadow: shadow, padding: '20px 22px 22px' }}>
						<div
							style={{
								fontFamily: fonts.heading,
								fontSize: 24,
								fontWeight: 900,
								marginBottom: 14,
								display: 'flex',
								alignItems: 'center',
								gap: 10,
							}}
						>
							<span style={{ background: colors.red, color: colors.white, padding: '2px 10px', fontFamily: fonts.mono, fontSize: 15 }}>
								你
							</span>
							这些不能外包给模型
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
							{HUMAN_MUST.map((h) => (
								<div key={h.t} style={{ display: 'grid', gridTemplateColumns: '116px 1fr', gap: 12, alignItems: 'baseline' }}>
									<span style={{ fontWeight: 800, fontSize: 17 }}>{h.t}</span>
									<span style={{ fontSize: 15.5, lineHeight: 1.45, color: '#3a3a3a' }}>{h.w}</span>
								</div>
							))}
						</div>
						<div style={{ marginTop: 16, paddingTop: 14, borderTop: `2px dashed ${colors.black}`, fontSize: 15, lineHeight: 1.5 }}>
							共同点：<b>做错了要负责的，AI 负不了这个责</b>。
						</div>
					</div>
				</div>

				<SourceNote>
					隐私 consent 三 touchpoint、高意向 24h 内真人首触，取自 JR 内部活动运营口径（jr-academy-memory/events）。对外文案红线：不承诺 offer / PR / 收入结果。
				</SourceNote>
			</Body>
		</Slide>
	);
}
