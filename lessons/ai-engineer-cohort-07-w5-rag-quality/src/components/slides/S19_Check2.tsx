import { motion } from 'framer-motion';
import { colors, fonts, radii } from '../ui';
import { Quiz, card, muted } from './_shared';

// 检查点 2：读 baseline 报告，先修什么（runs/20261027-144153-baseline/report.md）
const stats = [
	{ k: 'Retrieval 失败', v: '6' },
	{ k: 'Grounding 失败', v: '5' },
	{ k: 'Citation 失败', v: '1' },
	{ k: 'No-answer 失败', v: '1' },
	{ k: 'top-k 混进作废版本的题', v: '5' },
];

export default function S19_Check2() {
	return (
		<Quiz part="report" title="检查点 2：读这份报告，先修什么？"
			left={
				<div style={{ display: 'grid', gap: 8 }}>
					{stats.map((s, i) => (
						<motion.div key={s.k} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25, delay: 0.15 + i * 0.07 }}
							style={{ ...card, display: 'flex', alignItems: 'center', gap: 12, padding: '8px 16px' }}>
							<span style={{ fontSize: 22, fontWeight: 800, flex: 1 }}>{s.k}</span>
							<span style={{ fontFamily: fonts.mono, fontSize: 26, fontWeight: 700, background: colors.yellow, borderRadius: radii.pill, padding: '0 14px' }}>{s.v}</span>
						</motion.div>
					))}
					<div style={{ fontSize: 16, fontFamily: fonts.mono, color: muted }}>baseline · 20 道题 · 本地 qwen3:14b</div>
				</div>
			}
			options={[
				{ text: '先换一个更强的模型', ok: false },
				{ text: '先解决作废版本混进检索', ok: true },
				{ text: '先改 prompt', ok: false },
			]}
			explain={<>Retrieval 最多，6 条里 4 条混进了作废版本；Grounding 的 5 条里还有 2 条是裁判错。</>}
		/>
	);
}
