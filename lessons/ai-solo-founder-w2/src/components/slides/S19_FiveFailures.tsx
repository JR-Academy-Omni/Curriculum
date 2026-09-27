import { Slide, colors } from '../ui';
import { Body, SlideHead, DeckTable, Punchline } from '../DeckTable';

export default function S19_FiveFailures() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="⑥ 验收 · 五个失败模式"
					tagBg={colors.red}
					title="这五个坑，你这周至少会踩到两个"
					sub="现在挑出你最可能踩的两个，当场把兜底加上——不要等它坏了一周你才发现。"
				/>
				<DeckTable
					fontSize={18.5}
					cellPad="12px 15px"
					cols={[
						{ label: '失败模式', w: '1fr' },
						{ label: '它长什么样', w: '1.15fr' },
						{ label: '兜底怎么加', w: '1.25fr' },
					]}
					rows={[
						[<b>机器睡了没跑</b>, '第二天早上没收到简报，你以为它坏了', '要么让机器别睡，要么换成关机也能跑的排程通道'],
						[<b>接口调用被限流</b>, '跑到一半断掉，输出只有半截', '加重试和错峰；别把五条排在同一分钟'],
						[<b>输入太大塞不下</b>, '内容被截断，结论建立在残缺资料上', '先摘要再送；或者分批处理后再汇总'],
						[<b>推出来没人看</b>, '连着七天的报告堆在邮箱里，一封没打开', '改成一眼能看完的卡片式；看不完说明交付物写太长了'],
						[<b>答错了没人发现</b>, <span style={{ color: colors.red, fontWeight: 800 }}>最贵的一个——它自信地错了七天</span>, '加一条常识校验规则 + 异常告警；每周人工抽查一次'],
					]}
				/>
				<Punchline bg={colors.dark}>
					前四个让你少收到东西，第五个让你收到<span style={{ color: colors.yellow }}>错的东西还当真</span>。抽查那条别省。
				</Punchline>
			</Body>
		</Slide>
	);
}
