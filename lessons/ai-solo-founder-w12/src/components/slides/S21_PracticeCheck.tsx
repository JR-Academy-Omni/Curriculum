import { DeckFrame, Panel, Label, Check, colors } from '../kit';

export default function S21_PracticeCheck() {
	return <DeckFrame tag="05 · 练习 30 分钟" title="怎样算跑通" subtitle="不管选了哪一个，都按这三条检查。" accent={colors.red}>
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 22 }}>
			<Panel style={{ borderTop: `14px solid ${colors.green}` }}><Label bg={colors.green} color={colors.dark}>1 · 有产出</Label><div style={{ fontSize: 23, lineHeight: 1.55, marginTop: 14 }}>output/ 里有任务卡要求的文件，用的是你自己的生意和信息源。</div></Panel>
			<Panel style={{ borderTop: `14px solid ${colors.yellow}` }}><Label bg={colors.yellow} color={colors.dark}>2 · 有回执</Label><div style={{ fontSize: 23, lineHeight: 1.55, marginTop: 14 }}>status.json 写了状态和原因；产出里的事实都附了来源。</div></Panel>
			<Panel style={{ borderTop: `14px solid ${colors.red}` }}><Label bg={colors.red}>3 · 弄坏过一次</Label><div style={{ fontSize: 23, lineHeight: 1.55, marginTop: 14 }}>按任务卡最后的「弄坏它」做一次，回执变成 skipped 或 needs-human，而不是一份编出来的结果。</div></Panel>
		</div>
		<div style={{ marginTop: 26 }}><Check>做完的人：把它设成 Codex App 里的 Automation，明天早上看它有没有自己跑</Check></div>
	</DeckFrame>;
}
