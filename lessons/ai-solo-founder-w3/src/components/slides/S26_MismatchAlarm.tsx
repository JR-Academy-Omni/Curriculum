import { Slide, colors, fonts } from '../ui';
import { Body, SlideHead, DeckTable, Punchline, SourceNote } from '../DeckTable';

// CH5 收口 · outline L09 step ⑥ —— 明显对不上的组合 + 定价模型对应 W7 收款方式
export default function S26_MismatchAlarm() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="§6 · 现场挑错"
					tagBg={colors.red}
					title="这几种组合，讲师现场就会叫停"
					sub="不是不准这么做，是这么做的人后面几乎都在同一个地方摔了一跤。写完先自查一遍。"
				/>

				<DeckTable
					fontSize={16.5}
					headFontSize={13.5}
					cellPad="9px 13px"
					cols={[
						{ label: '你写的组合', w: '1.15fr' },
						{ label: '会发生什么', w: '1.5fr' },
						{ label: '改成什么', w: '1.2fr' },
					]}
					rows={[
						[
							<b>订阅 × 一年才用两次</b>,
							<span style={{ background: '#ffe3e0' }}>第二、三个月他就取消了。你花力气拉来的人，全从这个洞漏走</span>,
							<span>改成按次收，或做成混合：一次性做起来 + 小额维护费</span>,
						],
						[
							<b>先免费再收费 × 你还没有流量</b>,
							'免费用户来了几十个，转化成付费的是 0，服务器和你的时间照样在烧',
							<span>先直接收钱。等你有了稳定的流量来源，再考虑放免费入口</span>,
						],
						[
							<b>一次性买断 × 你每个月都要维护</b>,
							'钱收完了，活没完。做得越久越亏，还不好意思跟客户开口',
							<span>拆成两笔：交付费 + 之后的维护费，合同里写清各自包含什么</span>,
						],
						[
							<b>按人头收 × 卖给个人</b>,
							'个人就一个人，没有第二个「人头」可收，这个模型的杠杆完全用不上',
							<span>要么改成单价订阅，要么把客户换成有团队的公司</span>,
						],
						[
							<b>做软件 × 客户买的是结果</b>,
							<span style={{ background: '#ffe3e0' }}>他不想学一个工具，他想要事情被办好。你做的功能他一个都不会用</span>,
							<span>改成「做成标准品的服务」——同一套 AI 流程，你替他跑，交付成品</span>,
						],
					]}
					rowBg={['#fff5f3', undefined, undefined, undefined, '#fff5f3']}
				/>

				<div style={{ marginTop: 14, background: colors.dark, border: '3px solid #000', boxShadow: '6px 6px 0px #000', padding: '13px 20px', color: colors.white }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.yellow, letterSpacing: 1.5, marginBottom: 9 }}>
						顺便记一下：你今天选的收钱方式，决定了 W7 那周你要接哪种收款
					</div>
					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, fontSize: 15, lineHeight: 1.4 }}>
						{[
							{ k: '一次性买断', v: '一次性付款链接' },
							{ k: '订阅', v: '订阅 / 自动续费' },
							{ k: '按人头收（B 端）', v: '开发票走公司流程' },
							{ k: '混合', v: '拆成多个产品分别收' },
						].map((x) => (
							<div key={x.k} style={{ border: '2px solid #55606d', padding: '8px 11px' }}>
								<div style={{ fontWeight: 800, color: colors.yellow }}>{x.k}</div>
								<div style={{ color: '#c8d0d8', marginTop: 4 }}>→ {x.v}</div>
							</div>
						))}
					</div>
				</div>

				<Punchline bg={colors.red}>
					今天定下来的这个组合，<u>W7 那周你就要拿它去真的收第一笔钱</u>。现在改，比那天改便宜得多。
				</Punchline>

				<SourceNote>
					来源：<b>outline.json · L09 step ⑥</b>「讲师和 AI Tutor 现场挑战明显对不上的组合（选订阅但产品一年用两次，churn 必死）……最后明确这个定价模型对应 W7 哪种接入方式：一次性 = Stripe Checkout / 订阅 = Subscriptions / B2B = Custom invoicing / 混合 = 多产品组合」。
					<b style={{ fontFamily: fonts.body, marginLeft: 6 }}>本页按大白话口径写成收款「方式」，具体支付平台留到 W7 讲。</b>
				</SourceNote>
			</Body>
		</Slide>
	);
}
