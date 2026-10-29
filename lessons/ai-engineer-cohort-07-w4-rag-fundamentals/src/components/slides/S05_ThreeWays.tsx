import { colors } from '../ui';
import { PartFrame, TermCards, Punch, Mark, SourceLine } from './_shared';

// 定位：知识这一格的三种填法（接第 4 页学员给的办法）
export default function S05_ThreeWays() {
	return (
		<PartFrame part="position" title="知识这一格，有三种填法">
			<TermCards minHeight={330} items={[
				{ zh: '全部放进去', term: 'Long context', color: colors.yellow, d: <>知识库小就直接放。<br />代价是上节课讲过的：窗口有上限，每次都按 token 付钱。</> },
				{ zh: '让 agent 自己去找', term: 'Agentic search', color: colors.blue, d: <>像 Claude Code 用 grep 翻文件：检索是一个工具，循环调用。</> },
				{ zh: '先建索引，再查', term: 'Indexed RAG', color: colors.orange, d: <>提前切块、建索引；请求时按相似度取 top-k。<br /><b>今天主讲这一种。</b></> },
			]} />
			<Punch delay={0.8} size={30} mt={26}>后两种才需要检索：<Mark>retrieval ≠ embedding</Mark>，向量只是其中一种做法。</Punch>
			<SourceLine>Anthropic, Introducing Contextual Retrieval（2024-09）：知识库小于 20 万 token 时，可以整个放进 prompt。</SourceLine>
		</PartFrame>
	);
}
