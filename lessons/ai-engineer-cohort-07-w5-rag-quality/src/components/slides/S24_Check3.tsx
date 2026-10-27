import { useState } from 'react';
import { colors } from '../ui';
import { PartFrame, DeltaTable, CaseChips, RevealButton, Punch, Mark, RunLine, RETRIEVAL_RUNS, SourceLine } from './_shared';

// 检查点 3：hybrid 上不上（exp-05-hybrid vs baseline）。没有唯一答案
export default function S24_Check3() {
	const [open, setOpen] = useState(false);
	return (
		<PartFrame part="knob" title="检查点 3 · Hybrid：上，还是不上？" titleSize={48} subtitle="只改一处：向量检索 → 向量 + 关键词（BM25）。在聊天框写“上”或“不上”，加一句理由。">
			<DeltaTable fontSize={24} rows={[
				{ label: 'evidence recall@k', base: '0.853', exp: '0.765', good: false },
				{ label: 'MRR', base: '0.853', exp: '0.735', good: false },
				{ label: '有失败的题', base: '6', exp: '5', good: true },
				{ label: '检索延迟 p50', base: '2.9 ms', exp: '4.1 ms', good: false },
			]} />
			<div style={{ display: 'flex', gap: 30, marginTop: 14 }}>
				<CaseChips label="修好的题" ids={['G04 · 带狗']} color={colors.green} />
				<CaseChips label="新坏的题" ids={[]} color={colors.red} />
			</div>
			<div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginTop: 14 }}>
				<RevealButton open={open} label="怎么想" onClick={() => setOpen((v) => !v)} />
				{open && <Punch delay={0} size={25} mt={4}>没有标准答案。平均分说“不上”，逐题看说“可以考虑”：<Mark>先打开 G04 和掉分的那几道</Mark>，再决定。</Punch>}
			</div>
			<RunLine>{RETRIEVAL_RUNS}</RunLine>
			<SourceLine>hybrid = 向量 + BM25，见 Anthropic《Introducing Contextual Retrieval》</SourceLine>
		</PartFrame>
	);
}
