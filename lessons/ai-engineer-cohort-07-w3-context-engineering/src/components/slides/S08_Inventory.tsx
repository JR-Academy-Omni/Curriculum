import { colors } from '../ui';
import { PartFrame, Rows, Punch } from './_shared';

// Source：每份资料看五项标签
export default function S08_Inventory() {
	return (
		<PartFrame part="source" title="每份资料，先看五项标签" subtitle="例：一份退款政策文档。">
			<Rows color={colors.green} fontSize={28} pad={11} gap={10} items={[
				{ say: '谁负责维护它', term: 'Owner' },
				{ say: '它是从哪里来的', term: 'Provenance' },
				{ say: '现在还有效吗', term: 'Freshness' },
				{ say: '内容可不可信', term: 'Trust' },
				{ say: '这位客户能不能看', term: 'Permission' },
			]} />
			<Punch delay={0.8} size={28} mt={18}>说不清这五项的资料，不放进上下文。</Punch>
		</PartFrame>
	);
}
