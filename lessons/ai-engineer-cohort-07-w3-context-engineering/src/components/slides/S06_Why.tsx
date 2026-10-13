import { colors } from '../ui';
import { PartFrame, TermCards, Punch, Mark, SourceLine } from './_shared';

// 为什么要管上下文：容量和质量（成本与缓存上节课讲过）
export default function S06_Why() {
	return (
		<PartFrame part="why" title="放得下，不等于应该放">
			<TermCards minHeight={250} items={[
				{ zh: '容量有上限', term: 'Context Window', d: '一次调用能放的总量是固定的。放不下的时候，必须决定留什么。', color: colors.blue },
				{ zh: '注意力有限', term: 'Attention budget', d: '每多放一个 token，都在分走模型的注意力。', color: colors.orange },
				{ zh: '越多越容易漏看', term: 'Context rot', d: '内容越多，模型越容易漏掉或记错其中的信息。', color: colors.red },
			]} />
			<Punch delay={0.7}>目标：<Mark>最小的一组、信息量最高的 token</Mark>。</Punch>
			<SourceLine>Anthropic, Effective context engineering for AI agents（2025-09）。成本与缓存见上节课。</SourceLine>
		</PartFrame>
	);
}
