import { DeckFrame, AnimatedGroup, Panel, Label, colors } from '../deck';
import { Quote, muted, Takeaway } from '../lesson';

// 引文为讲师当时对 Claude 说的原话（2026-10-17 对话）
export default function S14_Fail1() {
	return (
		<DeckFrame tag="04 · AI 会犯错，怎么管住它" title="翻车一：AI 悄悄删了一条规则" subtitle="我让它把流程图做成网页上的「框架」页。页面很漂亮，但「赛道年均增长 ≥10%」那条不见了，几个步骤的顺序也被它调了。" accent={colors.purple}>
			<div style={{ display: 'flex', flexDirection: 'column', gap: 22, height: '100%' }}>
				<AnimatedGroup delay={.15}><Quote who="我当时的原话" color={colors.purple}>你为什么要漏掉这些东西？</Quote></AnimatedGroup>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, flex: 1, minHeight: 0 }}>
					<AnimatedGroup delay={.3} style={{ display: 'flex' }}><Panel style={{ flex: 1 }}>
						<Label bg={colors.red}>事后它自己的解释</Label>
						<div style={{ fontSize: 22, lineHeight: 1.6, marginTop: 16 }}>那条规则当时没有数据支撑，AI 觉得「做不到的就不写了」，顺手还按它觉得更顺的逻辑重排了步骤。问题是，这个决定本该我来做。</div>
					</Panel></AnimatedGroup>
					<AnimatedGroup delay={.42} style={{ display: 'flex' }}><Panel bg={colors.dark} style={{ flex: 1, color: colors.white }}>
						<Label bg={colors.green} color={colors.dark}>改成这样</Label>
						<div style={{ fontSize: 22, lineHeight: 1.6, marginTop: 16 }}>逐框照抄流程图，一条不少；没有数据的写「暂无数据，待核实」；程序做法和图不一样的单独标红。这条要求写进了记忆文件，每次新对话都会读到。</div>
					</Panel></AnimatedGroup>
				</div>
				<div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
					<Takeaway>不许 AI 替你删规则，做不到就标出来</Takeaway>
					<span style={{ fontSize: 19, color: muted }}>检查方法：让它把产出和原图逐条对一遍，列出差异。</span>
				</div>
			</div>
		</DeckFrame>
	);
}
