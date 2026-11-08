import { motion } from 'framer-motion';
import { DeckFrame, colors, fonts } from '../kit';

export const forms = [
	['定时单步', '到点做一件事', '每天 8 点写行业简报', colors.yellow, 'schedule'],
	['定时接力', '下一步读上一步的结果', '9 点选题 → 10 点写文 → 12 点视频脚本', colors.red, 'push + paths'],
	['事件触发', '有事发生就马上做', '客户来信 → 起草回复', colors.blue, 'issues'],
	['监控巡检', '定时看，有变化才叫你', '竞品改价、网站打不开', colors.green, 'schedule + git diff'],
	['批量回填', '一次性的大活', '100 篇旧文改英文版', colors.purple, 'workflow_dispatch'],
	['反馈闭环', '结果回来，改明天的做法', '看数据，提 PR 改选题规则', colors.orange, 'schedule → PR'],
] as const;

export default function S04_Map() {
	return <DeckFrame tag="02 · 自动化地图" title="六种自动化形态" subtitle="按「被什么触发、交出什么」来分。每一种在 GitHub 上都有现成的触发器。">
		<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
			{forms.map(([n, d, e, c, g], i) => <motion.div key={n} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12 + i * .08 }} style={{ background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 22, padding: '16px 22px', borderLeft: `14px solid ${c}` }}>
				<div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700 }}>0{i + 1}</div>
				<div style={{ fontSize: 30, fontWeight: 900, marginTop: 4 }}>{n}</div>
				<div style={{ fontSize: 22, fontWeight: 700, marginTop: 8 }}>{d}</div>
				<div style={{ fontSize: 20, marginTop: 10, color: '#514c48', lineHeight: 1.45 }}>例：{e}</div>
				<div style={{ marginTop: 10, display: 'inline-block', fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, background: colors.dark, color: colors.white, borderRadius: 999, padding: '4px 12px' }}>GitHub：{g}</div>
			</motion.div>)}
		</div>
		<div style={{ marginTop: 20, fontSize: 22, fontWeight: 700, background: colors.dark, color: colors.white, borderRadius: 18, padding: '14px 22px' }}>
			另外一道闸贯穿全部六种：<span style={{ color: colors.yellow }}>审批闸</span>，自动做到草稿为止；在 GitHub 上就是 Pull Request，你点 Merge 才生效。
		</div>
	</DeckFrame>;
}
