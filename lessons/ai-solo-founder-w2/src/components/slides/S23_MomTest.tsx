import { Slide, colors } from '../ui';
import { Body, SlideHead, DeckTable, Punchline } from '../DeckTable';

export default function S23_MomTest() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="本周你自己要做的那件事"
					tagBg={colors.green}
					title="五场访谈：别问「你愿意付费吗」"
					sub="嘴上说愿意、掏钱时全跑，是这一步最常见的翻车方式。问过去的行为，不问未来的意愿。"
				/>
				<DeckTable
					fontSize={19}
					cellPad="12px 15px"
					cols={[
						{ label: '别这样问', w: '1fr', accent: '#FFE9E4' },
						{ label: '改成这样问', w: '1.15fr', accent: '#D9F2E4' },
						{ label: '你实际在挖什么', w: '1fr' },
					]}
					rows={[
						['这个产品你会买吗？', '你上个月遇到这个问题几次？', '频率——不常发生的问题没人付钱解决'],
						['你觉得这个功能好不好？', '上一次遇到的时候，你具体怎么处理的？', '现有替代——包括「忍着不处理」'],
						['你愿意付多少钱？', '你为这件事已经花过什么？钱、时间还是人工？', '已投入——花过钱的人才是买家'],
						['你觉得我这个想法怎么样？', '这件事归谁管？谁批预算？', '决策链——用的人和付钱的人常常不是同一个'],
						['你还有什么建议吗？', '还有谁跟你有一样的问题？能帮我引荐吗？', '下一批用户——问得到引荐才说明痛点是真的'],
					]}
				/>
				<Punchline bg={colors.dark}>
					这一轮<span style={{ color: colors.yellow }}>只挖事实，不推销</span>。你一开始卖，对方就开始客气，客气之后的话全都不能用。
				</Punchline>
			</Body>
		</Slide>
	);
}
