import { Slide, colors, fonts } from '../ui';
import { Body, SlideHead, DeckTable, Punchline, SourceNote } from '../DeckTable';

// CH3 · 尺子 Ⅱ —— 竞争：现在这些人的钱正付给谁
export default function S14_RulerCompetition() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="§3 · 尺子 Ⅱ · 竞争"
					tagBg={colors.orange}
					title="别问「有没有竞品」，问「这笔钱现在正付给谁」"
					sub="你说「市场上还没有人做这个」，通常有两种可能：一是你没找到，二是这件事根本没人愿意花钱。"
				/>

				<DeckTable
					fontSize={17.5}
					headFontSize={14}
					cellPad="11px 14px"
					cols={[
						{ label: '客户现在怎么解决', w: '1fr' },
						{ label: '他为此付出什么', w: '1.15fr' },
						{ label: '你要抢的是什么', w: '1.3fr' },
						{ label: '你打得过吗', w: '1.25fr' },
					]}
					rows={[
						[
							<b>什么都不做，忍着</b>,
							'时间、心情、偶尔的损失',
							'不是钱，是他的「懒得改」',
							<span style={{ background: '#ffe3e0' }}>最难打。要么让他痛到受不了，要么让改变成本接近 0</span>,
						],
						[
							<b>用 Excel / 手工做</b>,
							'他自己或员工的工时',
							'那几个小时的工时钱',
							<span>算给他看：这几小时值多少钱，你收多少</span>,
						],
						[
							<b>雇人 / 找实习生做</b>,
							'工资，而且是每月都付',
							'一部分人力预算',
							<span style={{ background: '#e6f7ea' }}>最好打。预算已经在了，只是换个去处</span>,
						],
						[
							<b>已经在用某个软件</b>,
							'订阅费 + 已经习惯了',
							'订阅费 + 迁移的意愿',
							<span>要明显更好，不是差不多好。切换是有成本的</span>,
						],
						[
							<b>外包给别的公司 / 顾问</b>,
							'项目费，通常不便宜',
							'整个项目预算',
							<span style={{ background: '#e6f7ea' }}>你有行业积累的话，这是最容易切进去的一格</span>,
						],
					]}
				/>

				<Punchline bg={colors.red}>
					「没有竞争对手」几乎不存在。<u>只要这件事真的困扰过谁，他一定已经在用某种方式对付它了。</u>
					找出那个方式，你才知道自己要抢的到底是哪一笔钱。
				</Punchline>

				<SourceNote>
					来源：<b>outline.json · L09 step ③</b>「竞争看的是『现在这些人的钱正付给谁』，包括 Excel 和实习生这种非软件替代方案」。
					<b style={{ fontFamily: fonts.body, marginLeft: 6 }}>表内五行为本 deck 按该原则整理的分类，不含任何具体公司或价格。</b>
				</SourceNote>
			</Body>
		</Slide>
	);
}
