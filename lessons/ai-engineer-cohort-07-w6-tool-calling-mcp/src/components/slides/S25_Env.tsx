import { colors } from '../ui';
import { PartFrame, Terminal, Rows, Punch, Mark, RunLine, DEMO_RUN } from './_shared';

// env 不会自动继承：MCP Python SDK 的 get_default_environment() 只传白名单变量（mcp/client/stdio.py，research/demo-runs.md 第 4 节）
export default function S25_Env() {
	return (
		<PartFrame part="cli" title="门禁卡，不会自动带过去">
			<Terminal fontSize={19} lines={[
				'$ export ORDERS_API_TOKEN=demo-token',
				'$ fastmcp list refund_server.py',
				'    TOKEN = os.environ["ORDERS_API_TOKEN"]',
				"KeyError: 'ORDERS_API_TOKEN'",
			]} />
			<div style={{ marginTop: 18 }}>
				<Rows color={colors.orange} fontSize={24} pad={12} gap={10} items={[
					{ say: '我们用的 client（MCP Python SDK）拉起 server 时，只传 PATH 这类少数几个变量', term: '为什么' },
					{ say: '别的 client 规矩不一样。不管哪个，都把密钥写进配置的 env（上一页的 -e 或 "env"）', term: '怎么办' },
				]} />
			</div>
			<Punch delay={0.8} size={27}>门禁卡要<Mark>随单发</Mark>，不能指望部门自己有。</Punch>
			<RunLine>{DEMO_RUN} · MCP Python SDK mcp/client/stdio.py：get_default_environment()</RunLine>
		</PartFrame>
	);
}
