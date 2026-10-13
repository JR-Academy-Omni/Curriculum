import { colors } from '../ui';
import { PartFrame, Rows, Punch, SourceLine } from './_shared';

// Lifecycle：怎么拿、怎么收
export default function S17_Load() {
	return (
		<PartFrame part="lifecycle" title="资料怎么拿，怎么收" subtitle="上节课看过 Claude Code 怎么做这四件事，今天给它们起名字。">
			<Rows color={colors.green} fontSize={28} pad={11} gap={10} items={[
				{ say: '先给目录，需要再给全文', term: 'Progressive disclosure' },
				{ say: '用到的时候才去取', term: 'Just-in-time loading' },
				{ say: '历史太长，缩成摘要再继续', term: 'Compaction' },
				{ say: '用完的工具返回，清掉', term: 'Tool-result cleanup' },
			]} />
			<Punch delay={0.8} size={27} mt={18}>代价：现取更慢；清理会让缓存失效，要一次清够。</Punch>
			<SourceLine>Anthropic, Effective context engineering for AI agents；Context editing 文档。</SourceLine>
		</PartFrame>
	);
}
