import { motion } from 'framer-motion';
import { DeckFrame, Panel, Label, colors, fonts } from '../kit';

const st = [
	['done', '做完了，产物齐全，满足完成判据', '下一段接着跑', colors.green],
	['skipped', '按规则不该做：今天没有好选题、上游没完成', '下一段不跑', colors.yellow],
	['needs-human', '卡住了，需要你判断：来源打不开、事实对不上', '日报里叫你', colors.red],
] as const;

export default function S07_Contract() {
	return <DeckFrame tag="02 · 接力的规矩" title="每一段做完，都要交一张回执" subtitle="状态只有三种。下一段开始前，先看上一段的回执是不是 done。">
		<div style={{ display: 'grid', gridTemplateColumns: '1.25fr .75fr', gap: 24, height: '100%' }}>
			<div style={{ display: 'grid', gap: 16 }}>
				{st.map(([k, d, n, c], i) => <motion.div key={k} initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .15 + i * .12 }} style={{ display: 'grid', gridTemplateColumns: '210px 1fr 170px', alignItems: 'center', gap: 18, background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 20, padding: '18px 22px' }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 24, fontWeight: 700, background: c, borderRadius: 999, padding: '8px 16px', textAlign: 'center' }}>{k}</span>
					<span style={{ fontSize: 23, lineHeight: 1.45 }}>{d}</span>
					<span style={{ fontSize: 21, fontWeight: 800 }}>{n}</span>
				</motion.div>)}
				<div style={{ fontSize: 22, lineHeight: 1.5, fontWeight: 700, padding: '6px 4px' }}>什么都没交回来，也是一种结果：一律当作 needs-human，这就是报警。</div>
			</div>
			<Panel bg="#0f1428" style={{ color: '#f3f0e8' }}>
				<Label bg={colors.yellow} color={colors.dark}>status.json</Label>
				<pre style={{ fontFamily: fonts.mono, fontSize: 18, lineHeight: 1.6, marginTop: 18, whiteSpace: 'pre-wrap' }}>{`{
  "stage": "article",
  "date": "2026-11-08",
  "status": "needs-human",
  "reason": "...",
  "outputs": [],
  "evidence": ["https://..."]
}`}</pre>
				<div style={{ fontSize: 19, lineHeight: 1.5, marginTop: 10 }}>reason 写的是：第 2 段引用的数字在来源里找不到。</div>
			</Panel>
		</div>
	</DeckFrame>;
}
