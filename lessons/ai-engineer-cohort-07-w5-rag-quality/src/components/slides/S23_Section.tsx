import { colors } from '../ui';
import { PartFrame, DeltaTable, CaseChips, Punch, Mark, RunLine, RETRIEVAL_RUNS } from './_shared';

// exp-02-section-chunk vs baseline：recall 上升，但新坏 G05（compare-vs-20261023-112550-baseline.md）
export default function S23_Section() {
	return (
		<PartFrame part="knob" title="旋钮 2 · 按小节切块：平均分涨了，一道题坏了" titleSize={46} subtitle="只改一处：每 120 字切一块 → 按小节切。">
			<DeltaTable rows={[
				{ label: 'evidence recall@k', base: '0.853', exp: '0.941', good: true },
				{ label: 'top-k 混进作废版本的题', base: '5', exp: '9', good: false },
				{ label: '有失败的题', base: '6', exp: '7', good: false },
			]} />
			<div style={{ display: 'grid', gap: 10, marginTop: 16 }}>
				<CaseChips label="修好的题" ids={[]} color={colors.green} />
				<CaseChips label="新坏的题" ids={['G05 · VF-02 表在哪里可以拿到？']} color={colors.red} />
			</div>
			<Punch delay={0.8} size={28}>只看平均分，会以为它更好；<Mark>逐题看，它多坏了一道</Mark>。</Punch>
			<RunLine>{RETRIEVAL_RUNS}</RunLine>
		</PartFrame>
	);
}
