import { motion } from 'framer-motion';
import { DeckFrame, Table, colors, fonts } from '../kit';

const day = [
	['09:00', '话题调查', 'Agent', colors.yellow],
	['09:10', '写公众号 + 网页', 'Agent', colors.blue],
	['09:25', 'Eval 打分，不过就重写一次', 'Agent', colors.red],
	['09:30', '开 PR（或开 Issue 叫你）', 'Agent', colors.white],
	['10:00', '你看 PR，点 Merge', '你', colors.dark],
	['10:01', '网页上线；公众号稿准备好', '自动', colors.green],
] as const;

export default function P11_Daily() {
	return <DeckFrame tag="把四步串起来" title="每天早上，它把这一整条跑完，你只花 5 分钟" subtitle="同一个仓库、同一套 rules，本地和云端都能跑。区别只是谁来按时叫醒它。">
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
			<div style={{ display: 'grid', gap: 10 }}>
				{day.map(([t, d, who, c], i) => <motion.div key={t} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .1 + i * .1 }} style={{ display: 'grid', gridTemplateColumns: '90px 1fr 70px', alignItems: 'center', gap: 12, background: c, color: c === colors.dark ? colors.white : colors.dark, border: `2px solid ${colors.dark}`, borderRadius: 16, padding: '12px 16px' }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 20, fontWeight: 700 }}>{t}</span>
					<span style={{ fontSize: 22, fontWeight: 800 }}>{d}</span>
					<span style={{ fontSize: 18, fontWeight: 700, textAlign: 'right' }}>{who}</span>
				</motion.div>)}
			</div>
			<Table size={19} widths=".8fr 1fr 1fr" head={['', '本地 Agent', '云端 Agent']} rows={[
				['用什么', 'Codex App 的 Automation', 'GitHub Actions + codex-action'],
				['谁叫醒它', '你电脑上的定时', 'GitHub 的定时（UTC 时间）'],
				['电脑要开着', '要', '不用'],
				['费用', '你的 Codex 订阅', '按 API 用量计费，先设上限'],
				['读的记忆', '同一个仓库', '同一个仓库'],
			]} />
		</div>
	</DeckFrame>;
}
