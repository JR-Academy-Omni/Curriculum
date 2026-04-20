import PhaseSlide from '../PhaseSlide';
import { phases } from '../../data/phases';

export default function S10_P3Rag() {
	return (
		<PhaseSlide
			phase={phases[2]}
			whyItMatters="企业 AI 落地 90% 场景都是 RAG。45 节全栈 RAG 是所有 AI Engineer Bootcamp 里最厚的 —— GraphRAG、Hybrid Search、AWS Bedrock 生产部署全部覆盖。"
			representativeLessons={[
				'RAG from Scratch',
				'LangChain Core Constructs',
				'RAGAS Framework',
				'用 AWS 构建 RAG 应用',
			]}
		/>
	);
}
