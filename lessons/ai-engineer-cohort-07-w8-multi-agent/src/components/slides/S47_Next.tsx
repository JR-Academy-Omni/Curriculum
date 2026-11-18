import { Page, Say, Tbl } from './_parts';

export default function S47_Next() {
	return (
		<Page part="收尾" title="先证明一个 Agent 不够，再拆">
		  <Tbl size={24} widths="230px 1fr" head={['接下来', '内容']} rows={[
		    ['W8 实践课', '提取 Data Layer，把 CareKind 接成 MCP tools 和 CLI'],
		    ['W9', 'Agent Memory；实践课做 Bounded CareKind Agent（单 Agent）'],
		    ['W10–W11', 'Harness、长期记忆；跨组织的 Agent 协作（A2A）放在 W11 治理'],
		    ['编码 Agent 框架', 'github.com/MCP-Simplr/Harness-Engineering-Framework：Claude Code 的 Agent 团队模板'],
		    ['原型上线', 'mcp-simplr.au：用托管的 auth、payments 模块，一天内把原型部署到生产环境'],
		  ]} />
		  <Say>本课不布置作业。代码在课程仓库的 w8/ 文件夹，课后可以自己跑 single 和 team 对比。</Say>
		</Page>
	);
}
