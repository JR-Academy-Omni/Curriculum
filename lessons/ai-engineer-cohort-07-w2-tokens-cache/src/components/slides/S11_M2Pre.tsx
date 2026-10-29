import { TestSlide } from './_shared';

// M2 前测：自己仓库里谁占 context 最多
export default function S11_M2Pre() {
	return (
		<TestSlide
			module="M2"
			kind="pre"
			question="在你自己的项目里用了一小时 Claude Code，context 里谁占得最多？"
			items={['CLAUDE.md 和 memory', 'MCP 工具的定义', 'Messages：读过的文件、命令输出、来回的对话']}
		/>
	);
}
