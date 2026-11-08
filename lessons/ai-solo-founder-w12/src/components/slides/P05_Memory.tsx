import { DeckFrame, Panel, Label, colors, fonts } from '../kit';

const tree = [
	['memory/', '记忆：Agent 每次都先读这里', true],
	['  brand.md', '我是谁、卖什么、卖给谁、语气、不能说的话', false],
	['  sources.md', '每天要看的信息源', false],
	['  past-posts/', '你写过、反响好的文章', false],
	['  learnings.md', '发布后学到的：哪类题目有人看', false],
	['rules/', '每一步怎么做：任务卡', true],
	['  1-research.md · 2-write.md · 3-eval.md', '', false],
	['topics/  drafts/  evals/', '每天的产出，按日期存', true],
	['site/', '网页：合并后自动上线', true],
	['AGENTS.md', '总规则：先读记忆，最后交状态', true],
] as const;

export default function P05_Memory() {
	return <DeckFrame tag="第 0 步 · 记忆" title="先把你的生意写进一个仓库" subtitle="不用一次写完。今天先写品牌和信息源，之后每发一篇，记忆就厚一点。" accent={colors.dark}>
		<div style={{ display: 'grid', gridTemplateColumns: '1.25fr .75fr', gap: 24 }}>
			<div style={{ background: '#0f1428', color: '#f3f0e8', borderRadius: 22, padding: '22px 26px' }}>
				{tree.map(([p, d, top]) => <div key={p} style={{ display: 'grid', gridTemplateColumns: '430px 1fr', gap: 12, padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 20, color: top ? colors.yellow : '#f3f0e8', whiteSpace: 'pre' }}>{p}</span>
					<span style={{ fontSize: 19, lineHeight: 1.45 }}>{d}</span>
				</div>)}
			</div>
			<div style={{ display: 'grid', gap: 18, alignContent: 'start' }}>
				<Panel><Label>为什么是文件</Label><div style={{ fontSize: 22, lineHeight: 1.55, marginTop: 12 }}>聊天记录会丢，每个工具的「记忆」各管各的。写成文件放进仓库：本地、云端、换哪个 Agent 都读同一份，改了什么也有历史。</div></Panel>
				<Panel bg={colors.yellow}><Label>最重要的一份</Label><div style={{ fontSize: 22, lineHeight: 1.55, marginTop: 12, fontWeight: 700 }}>brand.md 里的「不能说的话」。Agent 不知道你的红线，它就会踩。</div></Panel>
			</div>
		</div>
	</DeckFrame>;
}
