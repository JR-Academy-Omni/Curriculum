import { Box, Code, Cols, Mono, Page } from './_parts';

export default function S23_QueryClient() {
	return (
		<Page part="第 3 部分" at={["agent.py · run_agent()"]} title="两种用法：query() 和 ClaudeSDKClient">
		  <Cols n={2}>
		    <Box title={<Mono>query()</Mono>}>一次性任务：发一个 prompt，消息流出来，结束。<br /><br />想象成：派一次活。</Box>
		    <Box title={<Mono>ClaudeSDKClient</Mono>}>保持连接，可以连续对话、用 hooks、中途 <Mono>interrupt()</Mono>。<br /><br />想象成：开着一条热线。</Box>
		  </Cols>
		  <Code file="demo/agent.py" size={21} code={"async with ClaudeSDKClient(options=agent_options) as client:\n    await client.query(prompt)\n    async for message in client.receive_response():\n        printer.feed(message)"} />
		</Page>
	);
}
