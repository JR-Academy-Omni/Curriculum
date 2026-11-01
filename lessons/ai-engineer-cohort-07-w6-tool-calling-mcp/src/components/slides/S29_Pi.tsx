import { colors } from '../ui';
import { PartFrame, TermTable, Punch, Mark, SourceLine } from './_shared';

// Pi 的三层对照（github.com/earendil-works/pi；earendil.com/posts/you-said-no-mcp/ 2026-09-29：MCP 已内置进 core）
export default function S29_Pi() {
	return (
		<PartFrame part="wrap" title="拿 Pi 对照：三层，各管一件事" subtitle="Pi 是一个 AI 编程工具，它的代码正好把三层拆成了三个包。">
			<TermTable color={colors.purple} rows={[
				{ term: 'pi-ai', say: '统一的模型接口：换一家模型，不用改代码', co: '能换不同客服专员的招聘渠道' },
				{ term: 'pi-agent-core', say: 'agent runtime：派单、看回执、决定下一步的那套流程', co: '客服的工作流程' },
				{ term: 'pi-coding-agent', say: '装好全套的命令行工具，打开就能用', co: '一张配齐了的客服工位' },
			]} />
			<Punch delay={0.8} size={27}>Pi 现在能接 MCP，但它是<Mark>派单的一方</Mark>，不是用来写后台部门的 SDK。</Punch>
			<SourceLine>github.com/earendil-works/pi · earendil.com 2026-09-29《Why we changed our minds》：MCP 已内置进 Pi core</SourceLine>
		</PartFrame>
	);
}
