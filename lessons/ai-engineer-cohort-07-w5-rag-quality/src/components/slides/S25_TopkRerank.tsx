import { colors } from '../ui';
import { PartFrame, Side, DeltaTable, Punch, Mark, RunLine, RETRIEVAL_RUNS } from './_shared';

// exp-01-topk5、exp-06-rerank vs baseline：都没有修好任何一道题
export default function S25_TopkRerank() {
	return (
		<PartFrame part="knob" title="旋钮 4、5 · top-k 和 rerank：这次都没帮上忙" titleSize={44}>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
				<Side label="top-k：3 → 5" labelBg={colors.blue}>
					<DeltaTable fontSize={22} rows={[
						{ label: 'precision@k', base: '0.314', exp: '0.188', good: false },
						{ label: '混进作废版本', base: '5', exp: '9', good: false },
						{ label: '修好的题', base: '', exp: '0' },
					]} />
				</Side>
				<Side label="rerank：先取 10 个，再重排取 3 个" labelBg={colors.purple} delay={0.3}>
					<DeltaTable fontSize={22} rows={[
						{ label: '检索延迟 p50', base: '2.9 ms', exp: '67.6 ms', good: false },
						{ label: '混进作废版本', base: '5', exp: '7', good: false },
						{ label: '修好的题', base: '', exp: '0' },
					]} />
				</Side>
			</div>
			<Punch delay={0.8} size={28}>失败的原因是作废版本，<Mark>多找几块、重新排序都修不了它</Mark>。</Punch>
			<RunLine>{RETRIEVAL_RUNS}</RunLine>
		</PartFrame>
	);
}
