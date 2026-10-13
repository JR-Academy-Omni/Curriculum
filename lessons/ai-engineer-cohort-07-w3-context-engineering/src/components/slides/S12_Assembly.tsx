import { colors } from '../ui';
import { PartFrame, Rows } from './_shared';

// Assembly：怎么排
export default function S12_Assembly() {
	return (
		<PartFrame part="assembly" title="怎么排：每一轮现拼">
			<Rows color={colors.orange} fontSize={27} pad={10} gap={9} items={[
				{ say: '每一轮按当前任务重新拼，不套固定模板', term: 'Runtime, not template' },
				{ say: '每部分给多少位置', term: 'Token allocation' },
				{ say: '不变的放前面，会变的放后面', term: 'Priority / Order' },
				{ say: '同一段内容只留一份', term: 'Dedup' },
				{ say: '太长的缩短', term: 'Compression' },
				{ say: '两份说法不一样，听更新、更权威的', term: 'Conflict resolution' },
			]} />
		</PartFrame>
	);
}
