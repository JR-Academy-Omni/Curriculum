import { colors } from '../ui';
import { PartFrame, TermCards, Punch, Mark } from './_shared';

// 今天用的系统：老师的 reference RAG（carekind-reference-rag/README.md、configs/baseline.yaml）
export default function S07_System() {
	return (
		<PartFrame part="frame" title="今天用的这套系统" subtitle="一个回答家属问题的政策机器人。资料都是虚构的，没有任何住户个人信息。">
			<TermCards minHeight={290} items={[
				{ zh: '9 份政策', term: 'Corpus', color: colors.green, d: <>探视政策有两版：v1 已作废，v2 生效。还有 1 份只给员工看。</> },
				{ zh: '20 道考题', term: 'Golden cases', color: colors.blue, d: <>每道题写好了标准答案和证据，3 道应该拒答。</> },
				{ zh: '一套最朴素的配置', term: 'Baseline', color: colors.orange, d: <>每 120 字切一块；只用向量检索；取 top-3；不过滤版本。</> },
			]} />
			<Punch delay={0.7} size={29}>今天所有数字都来自这套系统<Mark>真实跑出来的结果</Mark>。</Punch>
		</PartFrame>
	);
}
