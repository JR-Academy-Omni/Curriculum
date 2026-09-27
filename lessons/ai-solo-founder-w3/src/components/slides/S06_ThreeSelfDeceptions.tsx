import { Slide, colors, fonts } from '../ui';
import { Body, SlideHead, DeckTable, Punchline, SourceNote } from '../DeckTable';

// CH1 · outline L09 step ① 后半 —— indie hacker 常见的三种自我欺骗
export default function S06_ThreeSelfDeceptions() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="§1 · 三种自我欺骗"
					tagBg={colors.red}
					title="自己做生意的人，最常骗自己的三件事"
					sub="不是因为蠢。是因为这三件事在当下都让人感觉良好——而且都能持续好几个月不被戳破。"
				/>

				<DeckTable
					fontSize={19}
					cols={[
						{ label: '自我欺骗', w: '1fr' },
						{ label: '听起来像什么', w: '1.35fr' },
						{ label: '真相', w: '1.35fr' },
						{ label: '当场体检', w: '1.3fr' },
					]}
					rows={[
						[
							<span>
								<b style={{ fontSize: 21 }}>把兴趣当市场</b>
								<br />
								<span style={{ fontSize: 14, color: '#888' }}>最常见</span>
							</span>,
							<span>「这个问题我自己天天遇到，肯定很多人也遇到」</span>,
							<span>
								你遇到 ≠ 有人愿意付钱解决。<b>很多真问题的市场价就是 0</b>——因为忍一忍也能过。
							</span>,
							<span style={{ background: '#fff3cd' }}>
								除了你自己，你能<b>点名</b>说出几个人上个月真的被它卡住？
							</span>,
						],
						[
							<span>
								<b style={{ fontSize: 21 }}>把工具当生意</b>
								<br />
								<span style={{ fontSize: 14, color: '#888' }}>技术背景的人高发</span>
							</span>,
							<span>「我做了一个能自动完成 X 的工具，还挺好用的」</span>,
							<span>
								工具是功能，生意是<b>有人反复为一个结果付钱</b>。功能可以被抄、被送、被大厂顺手做进去。
							</span>,
							<span style={{ background: '#fff3cd' }}>
								如果明天有人免费送一个一样的，你还剩<b>什么</b>？
							</span>,
						],
						[
							<span>
								<b style={{ fontSize: 21 }}>把忙碌当进展</b>
								<br />
								<span style={{ fontSize: 14, color: '#888' }}>最耗时间</span>
							</span>,
							<span>「这周做了官网、配了域名、跑通了自动化、改了三版 logo」</span>,
							<span>
								这些都是<b>你自己一个人就能完成的事</b>——所以它们最舒服。真正的进展一定牵扯到外面的人。
							</span>,
							<span style={{ background: '#fff3cd' }}>
								过去两周，有<b>几件事</b>是必须有外人参与才算完成的？
							</span>,
						],
					]}
				/>

				<Punchline bg={colors.dark}>
					三条的共同点：<u>它们都不需要你去面对一个可能说「不」的人。</u>今天下午那 35 分钟，就是专门用来面对的。
				</Punchline>

				<SourceNote>
					来源：<b>outline.json · L09 step ①</b>原文「对照 indie hacker 常见的三种自我欺骗：把兴趣当市场、把工具当生意、把忙碌当进展」。
					<b style={{ marginLeft: 8, fontFamily: fonts.body }}>「听起来像什么 / 真相 / 当场体检」三列为本 deck 展开，非原文，讲师可按自己的说法改。</b>
				</SourceNote>
			</Body>
		</Slide>
	);
}
