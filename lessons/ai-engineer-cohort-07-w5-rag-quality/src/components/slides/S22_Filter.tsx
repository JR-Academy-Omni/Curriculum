import { colors } from '../ui';
import { PartFrame, DeltaTable, CaseChips, Punch, Mark, RunLine, RETRIEVAL_RUNS } from './_shared';

// exp-03-filter-current vs baseline（compare-vs-20261023-112550-baseline.md）
export default function S22_Filter() {
	return (
		<PartFrame part="knob" title="旋钮 1 · Metadata filter：只找生效的版本" titleSize={48} subtitle="只改一处：检索时加条件 status = current。">
			<DeltaTable rows={[
				{ label: 'top-k 混进作废版本的题', base: '5', exp: '0', good: true },
				{ label: '有失败的题', base: '6', exp: '3', good: true },
				{ label: 'evidence recall@k', base: '0.853', exp: '0.853' },
			]} />
			<div style={{ marginTop: 16 }}><CaseChips label="修好的题" ids={['G02', 'G03', 'G04']} color={colors.green} /></div>
			<Punch delay={0.8} size={28}>平均分没动，失败却少了一半：它<Mark>正好对上了失败的原因</Mark>。</Punch>
			<RunLine>{RETRIEVAL_RUNS}</RunLine>
		</PartFrame>
	);
}
