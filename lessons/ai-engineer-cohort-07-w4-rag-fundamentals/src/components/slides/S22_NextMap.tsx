import { colors } from '../ui';
import { PartFrame, Rows, Punch, muted } from './_shared';

// 后续地图：每个工具修哪一层（只放图，不展开）
export default function S22_NextMap() {
	return (
		<PartFrame part="wrap" title="后续地图：每个工具修哪一层">
			<Rows color={colors.blue} fontSize={27} pad={12} gap={11} items={[
				{ say: 'Hybrid search：向量加关键词，补上精确匹配', term: 'Retrieval' },
				{ say: 'Query rewrite：先改写问题，比如把「去年」换成 2025', term: 'Retrieval' },
				{ say: 'Rerank：先多取一些，再重新排序', term: 'Retrieval' },
				{ say: 'RAGAS：一套评估工具，量检索，也量回答', term: 'Retrieval + Generation' },
			]} />
			<Punch delay={0.8} size={23} mt={22}><span style={{ color: muted }}>后面的课再展开。今天记住：先知道错在哪层，再挑工具。</span></Punch>
		</PartFrame>
	);
}
