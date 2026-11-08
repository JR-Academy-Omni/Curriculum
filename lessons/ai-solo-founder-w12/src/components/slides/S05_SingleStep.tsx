import { DeckFrame, Panel, Label, Node, Arrow, colors } from '../kit';

export default function S05_SingleStep() {
	return <DeckFrame tag="02 · 形态 1 · 定时单步" title="最简单的一种：到点去看，写给你结论" subtitle="一个触发，一个产出。你醒来读 5 分钟的简报，而不是自己刷一小时。" accent={colors.yellow}>
		<div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 6 }}>
			<Node bg={colors.yellow} title="每天 08:00" sub="时间触发" style={{ width: 230 }} />
			<Arrow />
			<Node title="读 5–10 个信息源" sub="只看最近 48 小时" style={{ width: 290 }} />
			<Arrow />
			<Node title="挑 3 件最重要的" sub="每件写清：对我的用户意味着什么" style={{ width: 390 }} />
			<Arrow />
			<Node bg={colors.green} title="brief.md" sub="每件附来源链接" style={{ width: 230 }} />
		</div>
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, marginTop: 30 }}>
			<Panel><Label>判断在哪</Label><div style={{ fontSize: 24, lineHeight: 1.55, marginTop: 14 }}>「挑 3 件」和「对我的用户意味着什么」。只翻译新闻，就没有判断，也就没有价值。</div></Panel>
			<Panel bg="#ffe9e9"><Label bg={colors.red}>它怎么失败</Label><div style={{ fontSize: 24, lineHeight: 1.55, marginTop: 14 }}>信息源打不开，它照样交给你一份看起来很像样的简报，内容是编的。你得有办法知道它这次其实没看到。</div></Panel>
		</div>
	</DeckFrame>;
}
