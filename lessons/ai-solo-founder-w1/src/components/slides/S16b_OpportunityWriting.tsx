import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

export default function S16b_OpportunityWriting() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="机会卡 · 写具体"
					tagBg={colors.red}
					title="先缩小用户，再写问题；最后才写方案"
					sub="如果一句话可以套在任何行业上，它就还不够具体。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.45fr', gap: 22 }}>
					<div style={{ border, boxShadow: shadowSm, background: '#FFE9E4', padding: '18px 20px' }}>
						<div style={{ fontFamily: fonts.mono, color: colors.red, fontWeight: 800, fontSize: 14 }}>用户 · 从宽到窄</div>
						{['澳洲中小企业', '华人装修公司', '在澳洲经营 1–5 人装修公司的老板'].map((text, index) => (
							<div key={text} style={{ marginTop: 13, padding: '10px 12px', border: '2px solid #111', background: index === 2 ? colors.yellow : colors.white, fontSize: 18, fontWeight: 800 }}>{index + 1}. {text}</div>
						))}
						<div style={{ marginTop: 14, fontSize: 14, lineHeight: 1.45, fontWeight: 700 }}>
							其他合格写法：毕业半年内、准备回国找工作的澳洲留学生；每周制作大量短视频的小型教育机构市场人员。
						</div>
					</div>

					<div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
						<div style={{ border, boxShadow: shadowSm, background: '#DCEBFF', padding: '18px 20px' }}>
							<div style={{ fontFamily: fonts.mono, color: '#2457a6', fontWeight: 800, fontSize: 14 }}>问题句式</div>
							<div style={{ marginTop: 10, fontSize: 22, lineHeight: 1.45, fontWeight: 900 }}>当 ______ 发生时，______ 类型的用户很难 ______，导致 ______。</div>
							<div style={{ marginTop: 10, fontSize: 16, lineHeight: 1.5 }}>当小型装修公司同时接多个项目时，老板很难及时整理客户电话、报价和工人安排，导致漏单、重复沟通和延期。</div>
						</div>

						<div style={{ border, boxShadow: shadowSm, background: '#D9F2E4', padding: '18px 20px' }}>
							<div style={{ fontFamily: fonts.mono, color: '#176c42', fontWeight: 800, fontSize: 14 }}>方案句式 · 只写一句</div>
							<div style={{ marginTop: 10, fontSize: 22, lineHeight: 1.45, fontWeight: 900 }}>我们帮助 ______，通过 ______，实现 ______。</div>
							<div style={{ marginTop: 10, fontSize: 16, lineHeight: 1.5 }}>我们帮助澳洲小型装修公司，通过 AI 电话记录和报价草稿，减少客户跟进与行政工作。</div>
						</div>
					</div>
				</div>

				<Punchline bg={colors.red}>AI 的价值要落到一个具体变化：<u>更快、更便宜或更简单。</u></Punchline>
			</Body>
		</Slide>
	);
}
