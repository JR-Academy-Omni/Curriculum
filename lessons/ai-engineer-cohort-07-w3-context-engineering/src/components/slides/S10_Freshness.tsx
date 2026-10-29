import { colors } from '../ui';
import { PartFrame, TermCards, Punch, Mark } from './_shared';

// Policy：Freshness 不等于 Recency（上节课讲的是 recency）
export default function S10_Freshness() {
	return (
		<PartFrame part="policy" title="“还有效”和“离得近”，是两回事">
			<TermCards minHeight={270} items={[
				{ zh: '离现在近不近', term: 'Recency', d: <>客户 20 轮之前说：「只能退回原卡。」<br />离得很远，但 <b>仍然有效</b>。</>, color: colors.yellow },
				{ zh: '现在还有没有效', term: 'Freshness', d: <>早上查到账户「审核中」，一直留在上下文里。<br />离得不远，但 <b>可能已经变了</b>。</>, color: colors.blue },
			]} />
			<Punch delay={0.7}>决定去留，看 <Mark color={colors.blue}>还有没有效</Mark>，不看离得远不远。</Punch>
		</PartFrame>
	);
}
