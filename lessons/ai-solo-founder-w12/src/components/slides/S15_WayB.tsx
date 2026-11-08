import { motion } from 'framer-motion';
import { DeckFrame, Panel, Label, colors, fonts } from '../kit';

const flow = [
	['到点', 'GitHub Actions 定时触发', colors.yellow],
	['查上游', '上一段的回执是不是 done？不是就停', colors.white],
	['Agent 做这一段', 'codex-action 读任务卡执行', colors.red],
	['验回执', '没交回执、缺产物，都记成 needs-human', colors.white],
	['存档 + 日报', '产物提交回仓库，有历史可查', colors.green],
] as const;

export default function S15_WayB() {
	return <DeckFrame tag="03 · 做法 ②③ · 在 GitHub 上跑" title="GitHub 管时间和规矩，Codex 只管判断" subtitle="这些代码由 Codex 帮你写。你要讲清楚的是：几点跑、跑哪一段、怎样算做成。" accent={colors.red} bg="#fbf8f3">
		<div style={{ display: 'grid', gridTemplateColumns: '1.2fr .8fr', gap: 24 }}>
			<div style={{ display: 'grid', gap: 12 }}>
				{flow.map(([t, d, c], i) => <motion.div key={t} initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .15 + i * .12 }} style={{ display: 'grid', gridTemplateColumns: '60px 230px 1fr', alignItems: 'center', gap: 14, background: c, border: `2px solid ${colors.dark}`, borderRadius: 18, padding: '14px 18px' }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 22, fontWeight: 700 }}>{i + 1}</span>
					<span style={{ fontSize: 26, fontWeight: 900 }}>{t}</span>
					<span style={{ fontSize: 21, lineHeight: 1.4 }}>{d}</span>
				</motion.div>)}
			</div>
			<div style={{ display: 'grid', gap: 18, alignContent: 'start' }}>
				<Panel><Label>分工</Label><div style={{ fontSize: 22, lineHeight: 1.55, marginTop: 12 }}>第 1、2、4、5 步是固定规则，交给代码，每次都一样、不会出错。只有第 3 步需要判断，交给 Agent。</div></Panel>
				<Panel bg="#ffe9e9"><Label bg={colors.red}>先想好</Label><div style={{ fontSize: 22, lineHeight: 1.55, marginTop: 12 }}>云端跑 Agent 按 API 用量计费。先给 key 设每月用量上限，key 只放在仓库的 Secrets 里，不写进任何文件。</div></Panel>
			</div>
		</div>
	</DeckFrame>;
}
