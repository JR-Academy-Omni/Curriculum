import { Slide, colors, fonts } from '../ui';
import { Body, SlideHead, DeckTable, Punchline } from '../DeckTable';

export default function S02_Takeaways() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="今天的过关线"
					tagBg={colors.red}
					title="三小时后，你要有一个真的在替你干活的 agent"
					sub="本周真实动作：给 agent 接权限、写工作内容、排定时任务，然后你自己去约 5 个真实用户。"
				/>
				<DeckTable
					fontSize={21}
					cols={[
						{ label: '#', w: '64px', align: 'center' },
						{ label: '带走什么', w: '1.15fr' },
						{ label: '下课前怎样验收', w: '2fr' },
					]}
					rows={[
						[<span style={{ fontFamily: fonts.mono, fontWeight: 900, fontSize: 26 }}>1</span>, <b>一个接好权限的 agent</b>, '主线只装一条；五类权限按边界给完，敏感目录已经排除'],
						[<span style={{ fontFamily: fonts.mono, fontWeight: 900, fontSize: 26 }}>2</span>, <b>一份 agent 工作说明书</b>, '任务范围、输入源、交付物规格、何时停下来找人、输出送到哪，五段写全'],
						[<span style={{ fontFamily: fonts.mono, fontWeight: 900, fontSize: 26 }}>3</span>, <b>5 条 Agent Schedule</b>, '每条有 cron 表达式，并且已经手动触发过一次、看到真实输出'],
					]}
				/>
				<Punchline bg={colors.dark}>
					卧槽点在周中才出现：<span style={{ color: colors.yellow }}>你没动一根手指，竞品和痛点报告自己推到了你手机上。</span>
				</Punchline>
			</Body>
		</Slide>
	);
}
