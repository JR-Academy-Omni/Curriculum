import { motion } from 'framer-motion';
import { DeckFrame, Panel, Label, PromptCard, colors } from '../kit';

const loop = [['发布', colors.green], ['3 天后看数据', colors.white], ['写进 learnings.md', colors.yellow], ['下次话题调查先读它', colors.dark]] as const;

export default function P09_Learnings() {
	return <DeckFrame tag="第 3 步的另一半 · 发布后的反馈" title="Eval 有两次：发布前打分，发布后看结果" subtitle="发布前的打分防止出错；发布后的数据告诉你什么题目真的有人要。第二种要写回记忆，不然每天都在重新猜。" accent={colors.orange}>
		<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
			{loop.map(([t, c], i) => <motion.div key={t} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 + i * .12 }} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
				<div style={{ background: c, color: c === colors.dark ? colors.white : colors.dark, border: `2px solid ${colors.dark}`, borderRadius: 18, padding: '18px 22px', fontSize: 26, fontWeight: 900, whiteSpace: 'nowrap' }}>{t}</div>
				{i < loop.length - 1 && <span style={{ fontSize: 30, fontWeight: 900 }}>→</span>}
			</motion.div>)}
		</div>
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 28 }}>
			<PromptCard label="memory/learnings.md 长这样">{`- 11-05「BAS 截止日」：阅读高、收藏高 → 讲具体日期和步骤的题目有人存
- 11-06「AI 行业新闻点评」：阅读低 → 我的用户不关心行业八卦
- 11-07 网页「GST 除以 11」：搜索进来的人多 → 这类问题适合做网页`}</PromptCard>
			<div style={{ display: 'grid', gap: 18, alignContent: 'start' }}>
				<Panel><Label>谁来写</Label><div style={{ fontSize: 22, lineHeight: 1.55, marginTop: 12 }}>数据可以由 Agent 每周读一次后台导出，写成建议；<b>写进 learnings.md 要你点头</b>（同样是一个 PR）。</div></Panel>
				<Panel bg={colors.yellow}><Label>这就是「记忆越用越厚」</Label><div style={{ fontSize: 22, lineHeight: 1.55, marginTop: 12, fontWeight: 700 }}>第一周它在猜；一个月后，它是按你的真实数据在选题。</div></Panel>
			</div>
		</div>
	</DeckFrame>;
}
