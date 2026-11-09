import { colors } from '../ui';
import { Box, Code, Cols, Mono, Page } from './_parts';

export default function S24_AllowedTools() {
	return (
		<Page part="第 3 部分" at={["sdk_common.py · options()"]} title="容易踩的坑：allowed_tools 不是白名单" bg={colors.white}>
		  <Code file="demo/sdk_common.py" size={19} code={"tools=[],                      # 关掉内置 Read/Bash 等，Agent 只剩退款工具\nmcp_servers={\"refund\": {\"type\": \"stdio\", \"command\": sys.executable,\n                        \"args\": [str(HERE / \"refund_server.py\")]}},\nstrict_mcp_config=True,        # 不加载本机其它 MCP 配置\nsetting_sources=[],            # 不读本机 settings / CLAUDE.md\nallowed_tools=[tool_name(t) for t in allowed],  # 自动批准，不是“只能用这些”\npermission_mode=\"dontAsk\",     # 没批准的直接拒绝，不弹窗"} />
		  <Cols n={2}>
		    <Box title={<Mono>tools=[]</Mono>} bg={colors.green}>关掉内置工具。不写的话，Agent 默认带着 Read、Bash 这些。</Box>
		    <Box title={<Mono>allowed_tools</Mono>} bg={colors.yellow}>自动批准列表，<strong>不会</strong>移除其它工具。其它工具交给 permission mode 判断。</Box>
		  </Cols>
		</Page>
	);
}
