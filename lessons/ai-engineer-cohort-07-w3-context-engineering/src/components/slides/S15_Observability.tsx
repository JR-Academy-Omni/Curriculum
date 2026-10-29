import { colors } from '../ui';
import { PartFrame, Rows, Punch } from './_shared';

// Validation：每次调用记四件事
export default function S15_Observability() {
	return (
		<PartFrame part="validation" title="每次调用，记下四件事">
			<Rows color={colors.purple} items={[
				{ say: '用的是哪一版上下文', term: 'Context version' },
				{ say: '放进去的是哪几份资料', term: 'Source IDs' },
				{ say: '哪些放了、哪些没放，为什么', term: 'Selected / excluded reasons' },
				{ say: '每部分占了多少', term: 'Token allocation' },
			]} />
			<Punch delay={0.8}>模型答错了，翻记录就知道是哪份资料的问题。</Punch>
		</PartFrame>
	);
}
