import { colors } from '../ui';
import { PartFrame, TermCards } from './_shared';

// Lifecycle：换新、作废、扔掉
export default function S18_Update() {
	return (
		<PartFrame part="lifecycle" title="资料会变：换新、作废、扔掉">
			<TermCards minHeight={320} items={[
				{ zh: '换新', term: 'Refresh', d: '办退款之前，把账户状态重新查一次。', color: colors.green },
				{ zh: '作废', term: 'Invalidation', d: '早上查的旧状态还在，标上「已过期，不能用」。', color: colors.yellow },
				{ zh: '扔掉', term: 'Eviction', d: '看完的 40 条交易记录，移出上下文。', color: colors.red },
			]} />
		</PartFrame>
	);
}
