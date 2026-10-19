import { colors } from '../ui';
import { PartFrame, Rows, Punch, Mark } from './_shared';

// CareKind 边界
export default function S17_CareKind() {
	return (
		<PartFrame part="answer" title="CareKind：这条线画在哪">
			<Rows color={colors.orange} fontSize={28} pad={13} gap={12} items={[
				{ say: '课上用的是虚构的政策，不是真实文件', term: 'Synthetic policy' },
				{ say: '住户的个人信息，不放进通用的向量索引', term: 'No resident PII' },
				{ say: '政策证据只用来回答，不自动做临床、用药、监管申报的决定', term: 'Human decides' },
			]} />
			<Punch delay={0.8} size={31} mt={28}>RAG 给的是证据，<Mark>做决定的是人</Mark>。</Punch>
		</PartFrame>
	);
}
