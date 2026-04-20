import PhaseSlide from '../PhaseSlide';
import { phases } from '../../data/phases';

export default function S11_P4Capability() {
	return (
		<PhaseSlide
			phase={phases[3]}
			whyItMatters="MCP 是 Anthropic 2024 推出的标准，现在是 Claude Code / Cursor 的基础设施。V5 从 1 节扩展到 6 节全链路，含源码解读 + 2 个实战项目。学会它你就能把任何业务工具接进 AI。"
			representativeLessons={[
				'Introducing MCP',
				'MCP Server 构建',
				'MCP 源码解读',
				'MCP 实战项目 01',
			]}
		/>
	);
}
