import { Slide, colors, fonts } from '../ui';
import { Body, SlideHead, DeckTable, Punchline } from '../DeckTable';

// 今天你会带走什么 —— 过关线
// ⚠️ 本页三件套由本次课重新定义的内容拟定，未取自 outline.json 原 W4 description（原文是交付物清单/报价单方向）。
//    上台前请 Lightman 过一眼。
export default function S02_Takeaways() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="§0 · 过关线"
					title="今天你会带走什么"
					sub="三样东西，都能拿出来给人看。不是“听懂了”，是下课前你自己那个事也走了一遍。"
				/>

				<DeckTable
					fontSize={21}
					cols={[
						{ label: '#', w: '64px', align: 'center' },
						{ label: '你会做出来', w: '1fr' },
						{ label: '做到什么程度算数', w: '2fr' },
					]}
					rows={[
						[
							<span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 26 }}>1</span>,
							<span>
								<b>一份写清楚的说明</b>
								<br />
								<span style={{ fontSize: 14.5, color: '#888' }}>行话叫 PRD / SoT</span>
							</span>,
							<span>
								你想做的那件事——你的公司、你的产品、你的服务、一场活动都行——
								<b style={{ background: colors.yellow, padding: '0 6px' }}>写成一页字，AI 能照着干活</b>，不是只存在你脑子里
							</span>,
						],
						[
							<span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 26 }}>2</span>,
							<span>
								<b>一套定死的品牌</b>
								<br />
								<span style={{ fontSize: 14.5, color: '#888' }}>就是 VI / 设计规范 / branding</span>
							</span>,
							<span>
								名字、颜色、字体、口气、logo、吉祥物、周边——一次定死。
								<b>之后不管做海报、周边还是网页，出来都是一家人</b>
							</span>,
						],
						[
							<span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 26 }}>3</span>,
							<span>
								<b>一个能打开的网页</b>
								<br />
								<span style={{ fontSize: 14.5, color: '#888' }}>行话叫 landing page</span>
							</span>,
							<span>
								发给人，他点开就知道你在干嘛。
								<b style={{ background: colors.yellow, padding: '0 6px' }}>改说明里一个字，网页跟着变</b>
							</span>,
						],
					]}
				/>

				<Punchline bg={colors.red}>
					今天最值钱的一句：你不再一样一样地做东西。<u>你只维护那份说明，剩下的全是它生出来的。</u>
				</Punchline>
			</Body>
		</Slide>
	);
}
