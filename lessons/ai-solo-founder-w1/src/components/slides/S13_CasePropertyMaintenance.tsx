import { Slide, colors, fonts } from '../ui';
import { Body, SlideHead, DeckTable, Punchline } from '../DeckTable';

const f = (n: string, name: string) => (
	<span><b style={{ fontFamily: fonts.mono, color: colors.blue }}>{n}</b> · <b>{name}</b></span>
);

export default function S13_CasePropertyMaintenance() {
	return (
		<Slide bg={colors.white}>
			<Body style={{ padding: '34px 54px 28px' }}>
				<SlideHead
					tag="Opportunity Card · 案例 B 对答案"
					tagBg={colors.blue}
					title="维修请求散在邮件和短信里，能不能做成一条可卖的工作流？"
					titleSize="clamp(27px, 2.45vw, 38px)"
					sub="同样是教学用合成场景。对照上一页的小组答案：差异最大的是问题、方案缺口，还是验证动作？"
				/>

				<DeckTable
					fontSize={17}
					headFontSize={15}
					cellPad="9px 14px"
					cols={[
						{ label: '机会卡字段', w: '1.15fr' },
						{ label: '课堂案例 B · 物业维修工单助手', w: '2.85fr', accent: '#DCEBFF' },
					]}
					rows={[
						[f('1', '目标用户'), '管理约 100–500 套房源、没有专职维修协调团队的独立 property manager。'],
						[f('2', '问题'), '当报修资料散在邮件和短信里时，经理很难一次收齐可分派信息，导致反复追问和漏单（待验证）。'],
						[f('3', '现在怎么解决'), '经理在邮件、短信和表格间复制，再凭经验判断紧急程度并联系技工。'],
						[f('4', '为什么不好'), '资料分散、重复追问、依赖个人经验；漏单率与实际工时目前还没有数据。'],
						[f('5', '初步方案'), '帮助独立物业经理用 AI 整理报修信息并起草工单，由经理批准紧急等级、供应商和费用。'],
						[f('6', '本周验证'), '访谈 5 位经理、收集 3 个真实工单案例、比较 3 种替代工具，并询问是否愿意付试点费。'],
					]}
				/>

				<Punchline bg={colors.dark}>
					这里没有“客户已经需要”的结论；<u>少漏单、少追问</u>只是接下来必须被真人证据挑战的假设。
				</Punchline>
			</Body>
		</Slide>
	);
}
