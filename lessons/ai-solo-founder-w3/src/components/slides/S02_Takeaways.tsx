import { Slide, colors, fonts } from '../ui';
import { Body, SlideHead, DeckTable, Punchline, SourceNote } from '../DeckTable';

// 今天你会带走什么 —— 三样东西逐字取自 outline.json L09「📋 现场过关」，未改写
export default function S02_Takeaways() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="§0 · 过关线"
					title="今天你会带走什么"
					sub="三样东西，都是能写下来、能被别人挑错的。不是“想明白了”，是纸上有字、字上有数。"
				/>

				<DeckTable
					fontSize={20}
					cols={[
						{ label: '#', w: '60px', align: 'center' },
						{ label: '你会带走', w: '1.1fr' },
						{ label: '写成什么样算数', w: '2fr' },
					]}
					rows={[
						[
							<span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 26 }}>1</span>,
							<span>
								<b>一条能算的赚钱算式</b>
								<br />
								<span style={{ fontSize: 14.5, color: '#888' }}>不是「应该能赚」，是能按计算器</span>
							</span>,
							<span>
								<b style={{ background: colors.yellow, padding: '0 6px' }}>客单价 × 目标单量 − 可变成本 = 月毛利</b>
								，四个数字你都填得出来，并且知道单量从哪个渠道来
							</span>,
						],
						[
							<span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 26 }}>2</span>,
							<span>
								<b>一个交付形态结论</b>
								<br />
								<span style={{ fontSize: 14.5, color: '#888' }}>四选一，不能选两个</span>
							</span>,
							<span>
								软件 / 做成标准品的服务 / 信息产品 / 混合——<b>选一个，并写清客户买的是「工具」还是「结果」</b>
							</span>,
						],
						[
							<span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 26 }}>3</span>,
							<span>
								<b>一个定价模型 + 价格 anchor</b>
								<br />
								<span style={{ fontSize: 14.5, color: '#888' }}>anchor = 你敢开口的那个数</span>
							</span>,
							<span>
								五种收钱方式选一种，配一个具体价格，<b>并且这个价格能对上你的形态</b>——对不上的当场会被叫停
							</span>,
						],
						[
							<span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 26, color: '#999' }}>+</span>,
							<span>
								<b>Top 2 结构性风险</b>
								<br />
								<span style={{ fontSize: 14.5, color: '#888' }}>附赠，但最值钱</span>
							</span>,
							<span>最可能让这门生意死掉的两件事，各配一句「我打算怎么办」</span>,
						],
					]}
				/>

				<Punchline bg={colors.red}>
					这三样今天下课前必须写完，因为它们直接进本周那份<u>一页商业验证报告</u>——W3 的过关物。
				</Punchline>

				<SourceNote>
					来源：<b>outline.json · L09「📋 现场过关」</b>原文——「每人带走三样东西：一条能算的赚钱算式、一个明确的交付形态结论、一个定好的定价模型与价格
					anchor」。Top 2 风险取自同一节的 step ⑥ 与 L11 一页报告验收项。
				</SourceNote>
			</Body>
		</Slide>
	);
}
