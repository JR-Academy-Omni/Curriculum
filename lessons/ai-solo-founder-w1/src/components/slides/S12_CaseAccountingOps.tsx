import { Slide, colors, fonts } from '../ui';
import { Body, SlideHead, DeckTable, Punchline } from '../DeckTable';

const f = (n: string, name: string) => (
	<span><b style={{ fontFamily: fonts.mono, color: colors.red }}>{n}</b> · <b>{name}</b></span>
);

export default function S12_CaseAccountingOps() {
	return (
		<Slide bg={colors.warmBg}>
			<Body style={{ padding: '34px 54px 28px' }}>
				<SlideHead
					tag="Opportunity Card · 案例 A 跟着拆"
					tagBg={colors.orange}
					title="一家会计事务所，怎样把月末追资料做得更稳？"
					titleSize="clamp(27px, 2.45vw, 38px)"
					sub="这是教学用合成场景，不是真实公司案例；下面的数字都是待验证目标，不是已经发生的成绩。"
				/>

				<DeckTable
					fontSize={17}
					headFontSize={15}
					cellPad="9px 14px"
					cols={[
						{ label: '机会卡字段', w: '1.15fr' },
						{ label: '课堂案例 A · 现有会计服务的经营改造', w: '2.85fr', accent: '#FFE9E4' },
					]}
					rows={[
						[f('1', '目标用户'), '澳洲 5–20 人的 bookkeeping / accounting firm；能从协会与现有人脉列出 5 家。'],
						[f('2', '问题'), '当月末资料不齐时，员工很难快速知道缺什么、谁来补，导致反复追问和关账延期（待验证）。'],
						[f('3', '现在怎么解决'), '员工翻邮件和附件，用 Excel 手工列缺失项，再逐个联系客户。'],
						[f('4', '为什么不好'), '资料分散、重复复制、容易漏项；实际花多少时间和返工多少，目前还没有数据。'],
						[f('5', '初步方案'), '帮助小型事务所用 AI 归类脱敏附件并起草缺失清单，由专业人员复核后联系客户。'],
						[f('6', '本周验证'), '访谈 5 家、收集 3 次月末追资料案例、比较 3 个现有工具，并询问是否愿为改进后的服务付费。'],
					]}
				/>

				<Punchline bg={colors.dark}>
					客户买的是<u>更省心、更准时的会计服务</u>，不是一个 AI 产品。AI 只是事务所内部整理和起草的工具。
				</Punchline>
			</Body>
		</Slide>
	);
}
