import { DeckFrame, Table, Panel, Label, colors } from '../kit';

export default function P08_Eval() {
	return <DeckFrame tag="第 3 步 · Eval" title="写完先打分：不过线就退回，不能直接给你" subtitle="打分的是另一个 Agent，按 rules/3-eval.md 的评分卡。写的人很难挑自己的错。" accent={colors.red}>
		<div style={{ display: 'grid', gridTemplateColumns: '1.3fr .7fr', gap: 24 }}>
			<Table size={20} widths="1.5fr 2fr .6fr" head={['评分项', '怎么判', '分']} rows={[
				['事实有来源', '每个数字、规定、引用都能在来源里找到', '0–2'],
				['不踩红线', 'brand.md 里「不能说的话」一条都没出现', '0–2'],
				['开头给结论', '第一段读完就知道答案', '0–2'],
				['有我的经历', '至少一处只有我能写的内容', '0–2'],
				['语气对', '像 brand.md 里描述的那样说话', '0–2'],
				['对用户有用', '读完知道下一步做什么', '0–2'],
			]} />
			<div style={{ display: 'grid', gap: 16, alignContent: 'start' }}>
				<Panel bg={colors.green}><Label>通过</Label><div style={{ fontSize: 21, lineHeight: 1.5, marginTop: 10 }}>总分 ≥ 9，并且前两项都是满分 → 进入发布</div></Panel>
				<Panel bg={colors.yellow}><Label>不过</Label><div style={{ fontSize: 21, lineHeight: 1.5, marginTop: 10 }}>按 eval 写的问题重写<b>一次</b>，再打一次分</div></Panel>
				<Panel bg="#ffe9e9"><Label bg={colors.red}>还不过</Label><div style={{ fontSize: 21, lineHeight: 1.5, marginTop: 10 }}>needs-human：开一个 Issue 叫你，附上 eval 结果</div></Panel>
			</div>
		</div>
	</DeckFrame>;
}
