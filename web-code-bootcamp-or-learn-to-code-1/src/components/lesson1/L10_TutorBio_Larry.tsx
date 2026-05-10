import TutorBio from './_TutorBio';
import { colors } from '../ui';

export default function L10_TutorBio_Larry() {
	return (
		<TutorBio
			name="Larry Jiang"
			role="AI Technical Architect"
			org="Healthcare / Banking GenAI"
			accentColor={colors.red}
			icon="🤖"
			bullets={[
				'专攻 GenAI in Healthcare 和 Banking Risk Management',
				'AWS / Azure 双云 · OpenAI API · LangChain 实战',
				'熟 Embeddings / RAG / Transformer 内部原理',
				'本课负责：AI Engineering & AI Integration 全段',
				'Building RAG from Scratch in JavaScript 教学者',
			]}
			stack={['LangChain', 'OpenAI API', 'Embeddings', 'RAG', 'Transformer', 'Python']}
			quote="RAG 不是调 API。学员一定要从零写一遍 retrieval pipeline 才知道哪里会塌。"
		/>
	);
}
