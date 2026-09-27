import { Slide, colors, fonts } from '../ui';
import { Body, SlideHead, DeckTable, Punchline } from '../DeckTable';

export default function S23_Homework() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="§6 · 本周动作"
					tagBg={colors.orange}
					title="这周的任务：把全套做出来"
					sub="今天台上演示的是一场活动，你手上那个才是重点——公司、产品、服务都行，流程一模一样。"
				/>

				<DeckTable
					fontSize={20}
					cols={[
						{ label: '', w: '58px', align: 'center' },
						{ label: '做什么', w: '1.2fr' },
						{ label: '做到什么程度算完成', w: '1.5fr' },
					]}
					rows={[
						[
							<span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 24 }}>1</span>,
							<b>把你自己那件事写清楚</b>,
							<span>
								七个问题都答上，<b>颜色给到具体编号</b>，「不做的事」至少 3 条
							</span>,
						],
						[
							<span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 24 }}>2</span>,
							<b>定好你的品牌</b>,
							<span>能打开的样式页 + 过「换一样东西再做一遍」那一关</span>,
						],
						[
							<span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 24 }}>3</span>,
							<b>把网页放到网上</b>,
							<span>
								<b style={{ background: colors.yellow, padding: '0 6px' }}>一个手机能打开的公网链接</b>，发到群里
							</span>,
						],
						[
							<span style={{ fontFamily: fonts.mono, fontWeight: 700, fontSize: 24 }}>4</span>,
							<b>自己验一次</b>,
							<span>改说明里一个数字 → 重新生成 → 确认网页跟着变了</span>,
						],
					]}
				/>

				<Punchline bg={colors.dark}>
					下周现场第一件事：<u>群里的链接，我们随机打开几个一起看。</u>没链接的，说说卡在哪一步——卡住不丢人，不说才丢人。
				</Punchline>
			</Body>
		</Slide>
	);
}
