import { motion } from 'framer-motion';
import { DeckFrame, colors, fonts } from '../kit';

const steps = [
	['09:00', '选题雷达', '读信息源，按我的规则打分排序', 'topics.json', colors.yellow],
	['10:00', '写文章', '只读 topics.json 里排第 1 的那个', 'article.md', colors.red],
	['12:00', '视频脚本', '把文章改成 60 秒口播 + 分镜', 'storyboard.json', colors.blue],
	['12:30', '主编审稿', '挑错、核对来源，决定能不能送审', 'review.md', colors.green],
] as const;

export default function S06_Chain() {
	return <DeckFrame tag="02 · 形态 2 · 定时接力" title="下一步，只读上一步交出来的东西" subtitle="每一段都是一个独立的 Agent 任务。它们之间不靠记忆，靠文件。" accent={colors.red} bg="#fbf8f3">
		<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18, marginTop: 10 }}>
			{steps.map(([t, n, d, f, c], i) => <motion.div key={n} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .15 + i * .2 }} style={{ position: 'relative' }}>
				<div style={{ background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 22, padding: '20px 20px', borderTop: `14px solid ${c}`, minHeight: 300 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 22, fontWeight: 700 }}>{t}</div>
					<div style={{ fontSize: 32, fontWeight: 900, marginTop: 8 }}>{n}</div>
					<div style={{ fontSize: 21, lineHeight: 1.5, marginTop: 12 }}>{d}</div>
					<div style={{ marginTop: 20, background: colors.dark, color: colors.white, borderRadius: 12, padding: '10px 14px', fontFamily: fonts.mono, fontSize: 18 }}>→ {f}</div>
				</div>
				{i < 3 && <div style={{ position: 'absolute', right: -22, top: 140, fontSize: 34, fontWeight: 900, zIndex: 2 }}>→</div>}
			</motion.div>)}
		</div>
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginTop: 24 }}>
			<div style={{ background: colors.yellow, borderRadius: 18, padding: '16px 22px', fontSize: 23, fontWeight: 800, lineHeight: 1.45 }}>为什么要拆成几段：每段的任务小、好检查；哪段坏了，只重跑那一段。</div>
			<div style={{ background: '#ffe9e9', borderRadius: 18, padding: '16px 22px', fontSize: 23, fontWeight: 800, lineHeight: 1.45 }}>最危险的情况：9 点那段没做成，10 点那段照样跑，拿着空文件硬写。</div>
		</div>
	</DeckFrame>;
}
