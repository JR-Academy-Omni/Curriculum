import { colors } from '../ui';
import { PartFrame, TermCards, Punch, Mark } from './_shared';

// Policy：资料不够时的四条路
export default function S11_Fallback() {
	return (
		<PartFrame part="policy" title="资料不够，怎么办？">
			<TermCards minHeight={250} items={[
				{ zh: '停下，不做', term: 'Fail', d: '「现在没法处理退款。」', color: colors.red },
				{ zh: '问客户', term: 'Ask', d: '「请问是哪一笔扣款？」', color: colors.yellow },
				{ zh: '再查一次', term: 'Retrieve', d: '重新查账户现在的状态。', color: colors.blue },
				{ zh: '转人工', term: 'Escalate', d: '交给有权限的专员。', color: colors.purple },
			]} />
			<Punch delay={0.7}>四条路都可以，就是不能 <Mark color={colors.red}>瞎编</Mark>。</Punch>
		</PartFrame>
	);
}
