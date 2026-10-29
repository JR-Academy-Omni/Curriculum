import { colors } from '../ui';
import { PartFrame, Rows, Punch, Mark, RunLine, muted } from './_shared';

// 四类失败（reference RAG 的 failure taxonomy）。R 和 G 是 W4 讲过的两层，今天多两类
export default function S08_FourFailures() {
	return (
		<PartFrame part="failure" title="答错了，分四类">
			<Rows color={colors.red} fontSize={28} pad={13} gap={12} items={[
				{ say: '该找到的那一块，没进 top-k', term: 'Retrieval', note: '上节课讲过' },
				{ say: '说的话，没有证据撑着', term: 'Grounding', note: '上节课讲过' },
				{ say: '引用指错了：指向别的块、作废的版本，或根本没引用', term: 'Citation' },
				{ say: '该拒答却答了；有证据却拒答', term: 'No-answer' },
			]} />
			<Punch delay={0.8} size={29}>No-answer 有两个方向：<Mark>over-answer</Mark>（强答）和 <Mark color={colors.blue}>false refusal</Mark>（误拒）。</Punch>
			<div style={{ marginTop: 12, fontSize: 22, fontWeight: 700, color: muted, lineHeight: 1.5 }}>
				强答的例子（G15）：“家属可以在养老院过夜陪护吗？”资料里没有。一个模型却拿“住户外出过夜”的规定来答。
			</div>
			<RunLine>G15：reference RAG baseline 完整运行 · 作答：本地 bonsai-2 · 2026-10-27</RunLine>
		</PartFrame>
	);
}
