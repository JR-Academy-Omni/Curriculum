import { DeckFrame, Panel, Label, PromptCard, colors } from '../kit';

export default function S14_WayA() {
	return <DeckFrame tag="03 · 做法 ① · 在你电脑上跑" title="Codex App 里的定时任务：最快上手" subtitle="把一段你本来会手动说的话，设成每天几点自动说一遍。" accent={colors.blue}>
		<div style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 24, height: '100%' }}>
			<PromptCard label="AUTOMATION 指令 · 每天 08:00" size={22}>{`今天是今天的日期。
按 AGENTS.md 的规则，执行 tasks/01-daily-brief/TASK.md。
产出写到 output/今天的日期/01-daily-brief/。
最后写回执 status.json：done / skipped / needs-human，写清原因。`}</PromptCard>
			<div style={{ display: 'grid', gap: 18, alignContent: 'start' }}>
				<Panel><Label>好处</Label><div style={{ fontSize: 22, lineHeight: 1.55, marginTop: 12 }}>不写代码，不用服务器，用你的订阅。有的 Automation 还能回到同一个对话接着做。</div></Panel>
				<Panel bg="#ffe9e9"><Label bg={colors.red}>限制</Label><div style={{ fontSize: 22, lineHeight: 1.55, marginTop: 12 }}>电脑合上、Codex 关了就不会跑。适合「晚一点也没关系」的事。</div></Panel>
				<div style={{ fontSize: 18, lineHeight: 1.5, color: '#514c48' }}>功能细节以开课当天 Codex 官方说明为准。</div>
			</div>
		</div>
	</DeckFrame>;
}
