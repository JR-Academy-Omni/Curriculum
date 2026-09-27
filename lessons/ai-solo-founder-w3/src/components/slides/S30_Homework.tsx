import { Slide, colors, fonts } from '../ui';
import { Body, SlideHead, DeckTable, Punchline, SourceNote } from '../DeckTable';

// CH7 · 本周任务 —— 来源：outline.json L10（60min）+ L11（60min，W3 过关物）
export default function S30_Homework() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="§8 · 本周任务"
					tagBg={colors.orange}
					title="下课之后这周要做的两件事"
					sub="两件加起来两小时。第二件是本周的过关物——没有它，下周你没东西可讲。"
				/>

				<DeckTable
					fontSize={17.5}
					headFontSize={14}
					cellPad="12px 15px"
					cols={[
						{ label: '', w: '54px', align: 'center' },
						{ label: '任务', w: '1.05fr' },
						{ label: '具体做什么', w: '1.9fr' },
						{ label: '交付什么算过', w: '1.35fr' },
						{ label: '用时', w: '78px', align: 'center' },
					]}
					rows={[
						[
							<span style={{ fontFamily: fonts.mono, fontSize: 24, fontWeight: 700 }}>1</span>,
							<span>
								<b>5 个 idea → 1 个</b>
								<br />
								<span style={{ fontSize: 13.5, color: '#888' }}>选品决策矩阵</span>
							</span>,
							<span>
								把 W2 挖到的痛点按「出现频次 + 有没有付费信号」排序，砍掉「真实但没人付钱」和「有人付钱但 AI 做不了」的，留 5 个，各写 100 字。
								再让 AI 扮演目标用户反问一遍，砍到 1 个。
							</span>,
							<span>
								5 份 100 字说明 + 每个按<b>五个维度</b>打分（市场规模 / 付费意愿 / AI 可行性 / 你的不公平优势 / 半年内能不能做到第一个收入目标），最后锁 1 个并写「为什么是它」
							</span>,
							<span style={{ fontFamily: fonts.mono }}>60 min</span>,
						],
						[
							<span style={{ fontFamily: fonts.mono, fontSize: 24, fontWeight: 700, color: colors.red }}>2</span>,
							<span>
								<b style={{ background: colors.yellow, padding: '0 6px' }}>一页商业验证报告</b>
								<br />
								<span style={{ fontSize: 13.5, color: '#888' }}>本周过关物</span>
							</span>,
							<span>把今天现场写的那四段补完整：证据 / 算式 / 形态定价 / 裁决。今天写不下的、写「不知道」的地方，这周去补上。</span>,
							<span>
								<b>真的只有一页</b>；每个数字能追到出处（哪场访谈、哪个竞品页、哪次计算）；结论明确，不含糊
							</span>,
							<span style={{ fontFamily: fonts.mono }}>60 min</span>,
						],
					]}
				/>

				<Punchline bg={colors.dark}>
					<b style={{ color: colors.yellow }}>「你的不公平优势」这一维最值钱</b>——
					<u>你那 5 到 15 年的职业积累，落在哪个 idea 上是别人抄不走的？</u>那个通常就是答案。
				</Punchline>

				<SourceNote>
					来源：<b>outline.json · L10</b>「5 个 idea → 1 个：选品决策矩阵」（60min，五维度评分与验收标准逐条取自原文）与 <b>L11</b>「一页商业验证报告（W3 过关物）」（60min，四段结构与验收逐条取自原文）。
					<b style={{ fontFamily: fonts.body, marginLeft: 6 }}>L10 原文第五维写作「6 个月内能否做出 $1k MRR」，本页按不承诺金钱结果的红线改述为「半年内能不能做到第一个收入目标」。</b>
				</SourceNote>
			</Body>
		</Slide>
	);
}
