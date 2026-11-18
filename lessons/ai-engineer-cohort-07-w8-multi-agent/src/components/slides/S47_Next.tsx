import { colors, fonts } from '../ui';
import { Box, Page, Say, Tbl } from './_parts';

export default function S47_Next() {
	return (
		<Page part="收尾" title="先证明一个 Agent 不够，再拆">
		  <Tbl size={24} widths="230px 1fr" head={['接下来', '内容']} rows={[
		    ['W8 实践课', '提取 Data Layer，把 CareKind 接成 MCP tools 和 CLI'],
		    ['W9', 'Agent Memory；实践课做 Bounded CareKind Agent（单 Agent）'],
		    ['W10–W11', 'Harness、长期记忆；跨组织的 Agent 协作（A2A）放在 W11 治理'],
		  ]} />
		  <Say>本课不布置作业。代码在课程仓库的 w8/ 文件夹，课后可以自己跑 single 和 team 对比。</Say>
		  <Box title="课外 · 讲师自己的项目（不属于课程内容）" bg={colors.white} size={20}>
		    <div><span style={{ fontFamily: fonts.mono }}>mcp-simplr.au</span>：帮你在一天内把原型部署到生产环境</div>
		    <div><span style={{ fontFamily: fonts.mono }}>github.com/MCP-Simplr/Harness-Engineering-Framework</span>：在写代码时帮你的 harness engineering 框架</div>
		  </Box>
		</Page>
	);
}
