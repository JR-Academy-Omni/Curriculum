import { Slide, colors, fonts } from '../ui';
import { Body, SlideHead, DeckTable, Punchline } from '../DeckTable';

// OPC 适配 5 维自评 —— 来源：W1_RUNSHEET.md §3「14:30–14:35 OPC 适配 5 维自评」表 + 讲师那句实话
const dim = (t: string) => <b style={{ fontSize: 22 }}>{t}</b>;
const score = (t: string, bg: string) => (
	<span
		style={{
			fontFamily: fonts.mono,
			fontWeight: 700,
			background: bg,
			padding: '4px 10px',
			border: '2px solid #000',
		}}
	>
		{t}
	</span>
);

export default function S15_SelfCheck() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="① 自评 · 14:30–14:35"
					title="OPC 适配 5 维自评"
					sub="当场发纸、当场打分（1–5），不收上来 —— 这是给你自己看的。"
					tagBg={colors.green}
				/>

				<DeckTable
					fontSize={20}
					cols={[
						{ label: '维度', w: '0.85fr' },
						{ label: '问题', w: '1.5fr' },
						{ label: '1 分', w: '0.8fr', align: 'center' },
						{ label: '5 分', w: '1fr', align: 'center' },
					]}
					rows={[
						[dim('财务储备'), '没有额外收入能撑多久', score('< 3 个月', '#FFE9E4'), score('> 12 个月', '#D9F2E4')],
						[dim('时间承诺'), '每周真能挤出多少小时', score('< 5h', '#FFE9E4'), score('> 20h', '#D9F2E4')],
						[dim('心智成熟'), '半年没结果你会怎样', score('会放弃', '#FFE9E4'), score('能接受、继续调', '#D9F2E4')],
						[dim('行业积累'), '你的专业能不能变成产品', score('没想过', '#FFE9E4'), score('已经有人问我要', '#D9F2E4')],
						[
							<span style={{ background: colors.yellow, padding: '2px 8px' }}>{dim('抗孤独')}</span>,
							'没人跟你说话能不能扛',
							score('需要团队氛围', '#FFE9E4'),
							score('一个人也能推进', '#D9F2E4'),
						],
					]}
				/>

				<Punchline bg={colors.dark}>
					「抗孤独」这条最多人低估。一人公司最难的不是技术，是<u>没人跟你讨论、没人给你反馈、没人替你扛</u>。
					<span style={{ display: 'block', marginTop: 6, fontSize: 18, color: colors.yellow }}>
						这也是为什么每节课中段都留 30 分钟分享和交流，W1 就开始 —— 这 15 周你不是一个人在做。
					</span>
				</Punchline>
			</Body>
		</Slide>
	);
}
