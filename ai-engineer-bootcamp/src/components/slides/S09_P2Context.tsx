import PhaseSlide from '../PhaseSlide';
import { phases } from '../../data/phases';

export default function S09_P2Context() {
	return (
		<PhaseSlide
			phase={phases[1]}
			whyItMatters="Prompt Engineering 是起点，Context Engineering 才是系统设计。你以后写 RAG、写 Agent、写 MCP，都在这一层上盖楼。"
			representativeLessons={[
				'Context Engineering Playbook',
				'Vibe Coding 实战',
				'Building Your First GPT',
			]}
		/>
	);
}
