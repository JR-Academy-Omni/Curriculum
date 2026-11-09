import { colors } from '../ui';
import { Page, Tbl } from './_parts';

export default function S03_Footprint() {
	return (
		<Page part="开场" title="我们走到哪了">
		  <Tbl size={24} widths="110px 1fr" head={['周', '你已经会的']} rows={[
		    ['W1', 'GenAI 全景，AI 工程的开发流程'],
		    ['W2', 'Token、Context Window、Cache'],
		    ['W3', 'Context Engineering：放什么、不放什么'],
		    ['W4', 'RAG：Embedding、检索、引用'],
		    ['W5', 'RAG 质量：怎么测、怎么改'],
		    ['W6', 'Tool Calling、MCP、CLI：模型提出调用，代码执行'],
		    [<span style={{ color: colors.red }}>W7</span>, <strong>今天：让模型决定下一步，代码守住边界</strong>],
		  ]} />
		</Page>
	);
}
