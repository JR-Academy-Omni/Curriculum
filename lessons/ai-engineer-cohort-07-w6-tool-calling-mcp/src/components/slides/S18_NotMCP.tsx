import { colors } from '../ui';
import { PartFrame, Rows, Punch, Mark } from './_shared';

// MCP 的边界：不是普通 API、不自动给权限、不要求 agent 循环（W6 正文范围）
export default function S18_NotMCP() {
	return (
		<PartFrame part="mcp" title="MCP 不是什么">
			<Rows color={colors.green} fontSize={27} pad={15} gap={14} items={[
				{ say: '不是某个部门自己的办事窗口：普通 API 各有各的规矩，MCP 是大家共用的规范', term: '≠ 普通 API' },
				{ say: '按规范接上了，不等于什么单都能办：权限还得我们自己管', term: '≠ 自动给权限' },
				{ say: '规范只管工单怎么传，不管客服会不会自己连着派好几张单', term: '≠ Agent' },
			]} />
			<Punch delay={0.8} size={29}>MCP 只做一件事：<Mark>规定工具怎么接进来</Mark>。</Punch>
		</PartFrame>
	);
}
