import { motion } from 'framer-motion';
import { DeckFrame, colors, fonts } from '../kit';

const s = [
	['0', '记忆', '你的品牌、产品、受众、语气、过往文章、规则，全部放进一个 GitHub 仓库', colors.dark],
	['1', '话题调查', '读记忆 + 外部信息源，挑出今天最值得写的题目', colors.yellow],
	['2', '生成', '按选题写一篇公众号文章 + 一个网页版本', colors.blue],
	['3', 'Eval', '按评分卡打分；不过线就退回重写，还不过就叫你', colors.red],
	['4', '发布', '你点 Merge：网页自动上线，公众号排版稿准备好', colors.green],
] as const;

export default function P02_OneLine() {
	return <DeckFrame tag="今天只讲一条线" title="一条内容自动化，五个步骤" subtitle="话题调查、写作、Eval、发布，都是这一条自动化的一部分。发布后的反馈再写回记忆，明天选题会更准。">
		<div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 16, marginTop: 8 }}>
			{s.map(([n, t, d, c], i) => <motion.div key={t} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 + i * .14 }} style={{ position: 'relative', background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 22, padding: '20px 18px', borderTop: `14px solid ${c}`, minHeight: 330 }}>
				<div style={{ fontFamily: fonts.mono, fontSize: 26, fontWeight: 700 }}>{n}</div>
				<div style={{ fontSize: 34, fontWeight: 900, marginTop: 6 }}>{t}</div>
				<div style={{ fontSize: 21, lineHeight: 1.5, marginTop: 12 }}>{d}</div>
				{i < 4 && <div style={{ position: 'absolute', right: -18, top: 150, fontSize: 30, fontWeight: 900, zIndex: 2 }}>→</div>}
			</motion.div>)}
		</div>
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} style={{ marginTop: 20, background: colors.yellow, borderRadius: 18, padding: '14px 22px', fontSize: 24, fontWeight: 800 }}>
			↺ 反馈：发布后的阅读、收藏、咨询，写回记忆里的 learnings.md，下一次话题调查会先读它。
		</motion.div>
	</DeckFrame>;
}
