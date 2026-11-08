import { DeckFrame, Panel, Label, Steps, PromptCard, colors } from '../kit';

export default function P06_Research() {
	return <DeckFrame tag="第 1 步 · 话题调查" title="每天 9 点：今天写什么，让它先查一遍" subtitle="话题调查不是「随便搜点新闻」。它要同时读外面发生了什么，和你的记忆：你的用户是谁、以前什么题目有人看。" accent={colors.yellow}>
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
			<Panel>
				<Label bg={colors.yellow} color={colors.dark}>它按这个顺序做</Label>
				<div style={{ marginTop: 16 }}><Steps size={21} items={[
					<>读记忆：<b>memory/brand.md</b>（用户是谁）、<b>learnings.md</b>（什么题目有人看）、最近 7 天写过的题目</>,
					<>读 <b>memory/sources.md</b> 里的信息源，只看最近 48 小时</>,
					<>找出 3–5 个候选，每个写一句：和我的用户有什么关系</>,
					<>按规则打分（相关 / 时效 / 我有没有经验可写 / 会不会带来咨询），排序</>,
					<>写到 <b>topics/今天日期.md</b>，每个题目附来源</>,
				]} /></div>
			</Panel>
			<div style={{ display: 'grid', gap: 18, alignContent: 'start' }}>
				<PromptCard label="对 CODEX 说">{`今天是 2026-11-08。按 AGENTS.md，执行 rules/1-research.md。`}</PromptCard>
				<Panel bg="#ffe9e9"><Label bg={colors.red}>什么时候它应该说「今天不写」</Label><div style={{ fontSize: 21, lineHeight: 1.55, marginTop: 12 }}>所有候选分数都低于你定的线，或者跟最近 7 天重复。交 skipped，比硬凑一个题目强。</div></Panel>
			</div>
		</div>
	</DeckFrame>;
}
