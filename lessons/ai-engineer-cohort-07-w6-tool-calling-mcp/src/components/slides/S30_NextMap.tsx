import { colors } from '../ui';
import { PartFrame, Rows } from './_shared';

// 后续地图（第七期排课：W7 理论 Agents & ReAct；C7P08 Data Layer + MCP；C7P09 Bounded Agent）
export default function S30_NextMap() {
	return (
		<PartFrame part="wrap" title="接下来">
			<Rows color={colors.blue} fontSize={26} pad={14} gap={12} items={[
				{ say: '客服自己决定下一张派什么单，一张接一张', term: 'W7 · Agent loop' },
				{ say: '把你项目的数据层，做成真的 MCP server 接上', term: 'W8 Practice' },
				{ say: '让 agent 在限定范围里自己循环办事', term: 'W9 Practice' },
				{ say: '远程 MCP、OAuth 登录、云上部署、集中看日志', term: '以后 · production', dim: true },
			]} />
		</PartFrame>
	);
}
