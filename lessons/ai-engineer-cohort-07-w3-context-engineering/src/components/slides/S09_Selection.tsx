import { colors } from '../ui';
import { PartFrame, Rows, Punch } from './_shared';

// Policy：五条标准
export default function S09_Selection() {
	return (
		<PartFrame part="policy" title="挑哪些放进去：五条标准">
			<Rows color={colors.blue} fontSize={28} pad={11} gap={10} items={[
				{ say: '和这次的问题有关', term: 'Relevance', note: '上节课讲过' },
				{ say: '现在还有效', term: 'Freshness' },
				{ say: '知道它从哪里来', term: 'Provenance' },
				{ say: '这个人有权看', term: 'Permission' },
				{ say: '是现行的、说了算的版本', term: 'Authority', note: '上节课讲过' },
			]} />
			<Punch delay={0.8} size={28} mt={18}>五条都过，才放进去。</Punch>
		</PartFrame>
	);
}
