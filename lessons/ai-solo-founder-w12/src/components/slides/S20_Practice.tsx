import { motion } from 'framer-motion';
import { DeckFrame, colors, fonts } from '../kit';

export const tasks = [
	['01', '每日行业简报', '定时单步', '读 5 个信息源，写今天最重要的 3 件事', colors.yellow],
	['02', '竞品页面监控', '巡检', '盯 2 个页面，和上次比较，变了才报', colors.green],
	['03', '客户邮件分诊', '事件', '一批来信分成 3 类，各起草回复', colors.blue],
	['04', '选题排序 + 草稿', '小接力', '先排出 3 个选题，再写第 1 名的草稿', colors.red],
	['05', '旧内容批量改写', '批量', '5 篇旧文改成新版本，断了能接着做', colors.purple],
	['06', '每周数据小结', '闭环', '读一份导出的数据表，写周报和异常', colors.orange],
] as const;

export default function S20_Practice() {
	return <DeckFrame tag="05 · 练习 30 分钟" title="六个小任务，挑一个做完" subtitle="互相独立，难度差不多。选和你的生意最像的那个，30 分钟内跑通并交回执。" accent={colors.red}>
		<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
			{tasks.map(([n, t, k, d, c], i) => <motion.div key={n} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 + i * .07 }} style={{ background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 22, padding: '18px 22px', borderTop: `14px solid ${c}` }}>
				<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700 }}>{n}</span>
					<span style={{ fontSize: 17, fontWeight: 800, background: c, borderRadius: 999, padding: '4px 12px' }}>{k}</span>
				</div>
				<div style={{ fontSize: 30, fontWeight: 900, marginTop: 8 }}>{t}</div>
				<div style={{ fontSize: 20, lineHeight: 1.45, marginTop: 8 }}>{d}</div>
			</motion.div>)}
		</div>
		<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18, marginTop: 20 }}>
			{[['0–5 分钟', '打开课程包，填 business.md'], ['5–25 分钟', '把任务卡交给 Codex，跑通一次，核对产出'], ['25–30 分钟', '弄坏它一次，看回执；跑通就设成 Automation']].map(([t, d]) => <div key={t} style={{ background: colors.dark, color: colors.white, borderRadius: 18, padding: '14px 20px' }}><div style={{ fontFamily: fonts.mono, fontSize: 18, color: colors.yellow, fontWeight: 700 }}>{t}</div><div style={{ fontSize: 22, fontWeight: 700, marginTop: 6 }}>{d}</div></div>)}
		</div>
	</DeckFrame>;
}
