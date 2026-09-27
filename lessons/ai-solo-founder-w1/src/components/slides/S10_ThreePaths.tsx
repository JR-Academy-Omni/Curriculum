import { Slide, colors } from '../ui';
import { Body, SlideHead, DeckTable, Punchline } from '../DeckTable';

// ① 三条路的决策对照 —— 来源：W1_RUNSHEET.md §3「14:05–14:20 三条路的决策对照」7 行表；
// 叙事参考 public/session-deck.html #6「创业先分清哪一种」，并与产品验证路径的 Paid Evidence 口径对齐。
const opc = (t: string) => <b style={{ fontWeight: 800 }}>{t}</b>;

export default function S10_ThreePaths() {
	return (
		<Slide bg={colors.warmBg}>
			<Body style={{ padding: '40px 56px 36px' }}>
				<SlideHead
					tag="① 先选适合你的做法"
					title="你可以做产品、服务，也可以改造现有生意"
					titleSize="clamp(32px, 2.9vw, 44px)"
					sub="这门课不要求你融资，也不要求你做 AI 产品。先从你熟悉的行业、客户和问题开始。"
				/>

				<DeckTable
					fontSize={19}
					headFontSize={17}
					cellPad="10px 16px"
					cols={[
						{ label: '想清楚这件事', w: '1.05fr' },
						{ label: '融资型创业', w: '1fr' },
						{ label: '传统生意', w: '0.9fr' },
						{ label: '小团队 / 一人公司', w: '1.75fr', accent: '#FFE9E4' },
					]}
					rows={[
						['钱从哪里来', '投资人', '贷款或自有资金', opc('先靠收入支持下一步')],
						['怎么扩大', '融资、快速招人', '门店、设备、员工', opc('先用工具、流程和合作伙伴')],
						['先看什么结果', '增长和下一轮融资', '营业额与现金流', opc('客户是否付费、复购或推荐')],
						['可以卖什么', '通常是可规模化产品', '商品或线下服务', opc('软件、实体产品、专业服务都可以')],
						['AI 放在哪里', '可能就是产品本身', '改善部分经营流程', opc('用于调研、交付、营销和运营')],
						['你主要做什么', '组团队、找资金、定方向', '管理日常经营', opc('把专业能力做成可重复的交付')],
					]}
				/>

				<Punchline bg={colors.dark}>
					这门课主要训练<span style={{ background: colors.red, padding: '0 8px' }}>小团队也能使用的方法</span>
					：把问题说清楚，做出最小交付，再用真实客户反应判断下一步。
					<span style={{ display: 'block', marginTop: 8, fontSize: 18, fontWeight: 600, color: colors.yellow }}>
						以后要招人、开店或融资都可以；第一周先把生意本身讲明白。
					</span>
				</Punchline>
			</Body>
		</Slide>
	);
}
