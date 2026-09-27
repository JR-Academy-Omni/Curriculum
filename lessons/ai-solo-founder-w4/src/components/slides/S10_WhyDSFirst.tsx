import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

export default function S10_WhyDSFirst() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="§2 · 做品牌"
					tagBg={colors.purple}
					title="做品牌：为什么要先说好，再让它出图"
					sub="这一章就是给你的东西做品牌 —— VI、设计规范、branding，说的都是这件事。顺序反了，你会得到十张单看都行、放一起像十个不同活动的图。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
					<div style={{ background: '#FFE9E4', border, boxShadow: shadow, padding: '20px 22px' }}>
						<div style={{ fontFamily: fonts.heading, fontSize: 25, fontWeight: 900, marginBottom: 14 }}>
							不先说好的下场
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 16.5, lineHeight: 1.5 }}>
							<div>「帮我做一张活动海报」→ 出来一张紫色的</div>
							<div>「再来一张朋友圈图」→ 出来一张蓝色的</div>
							<div>「做个网页 banner」→ 又变绿了</div>
							<div style={{ marginTop: 6, paddingTop: 12, borderTop: `2px dashed ${colors.black}` }}>
								你每次都要重新描述一遍想要什么，而且<b>每次描述都不完全一样</b>，所以每次结果都不一样。
							</div>
							<div style={{ fontWeight: 800 }}>
								最后你花的时间不是做图，是<span style={{ background: colors.yellow, padding: '0 5px' }}>反复解释你想要什么</span>。
							</div>
						</div>
					</div>

					<div style={{ background: '#D9F2E4', border, boxShadow: shadow, padding: '20px 22px' }}>
						<div style={{ fontFamily: fonts.heading, fontSize: 25, fontWeight: 900, marginBottom: 14 }}>
							先说好的做法
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 16.5, lineHeight: 1.5 }}>
							<div>先说死一次：用哪个红、用什么字、口气是「直接 / 松弛 / 不端着」</div>
							<div>之后每次让它出东西，<b>把这段一起发过去</b></div>
							<div>海报、吉祥物、网页——都是照着同一张单子做的</div>
							<div style={{ marginTop: 6, paddingTop: 12, borderTop: `2px dashed ${colors.black}` }}>
								你说一次，用二十次。<b>一个人做事的品牌就长这样</b>——不需要几十页的 VI 手册，需要一张 AI 每次都能照着来的单子。
							</div>
						</div>
					</div>
				</div>

				<Punchline bg={colors.red}>
					这张单子不是给设计师看的，<u>是给 AI 看的</u>。检验标准只有一条：把它发过去，出来的东西是不是每次都像同一家。
				</Punchline>
			</Body>
		</Slide>
	);
}
