import { colors } from '../ui';
import { PartFrame, Rows, Punch, Mark } from './_shared';

// Validation：五个评价指标
export default function S16_Metrics() {
	return (
		<PartFrame part="validation" title="怎么知道改对了：五个指标">
			<Rows color={colors.purple} fontSize={28} pad={11} gap={10} items={[
				{ say: '任务做成了吗', term: 'Task success rate' },
				{ say: '每个任务花多少', term: 'Input tokens / cost' },
				{ say: '变快了吗', term: 'Latency' },
				{ say: '该拿的资料拿到了吗', term: 'Retrieval recall' },
				{ say: '有没有违反关键约束', term: 'Constraint violation rate' },
			]} />
			<Punch delay={0.8} size={28} mt={18}>token 降了不算成功。<Mark>成功率和约束</Mark> 没变差，才算。</Punch>
		</PartFrame>
	);
}
