import { colors } from '../ui';
import { Box, Cols, Page, Say } from './_parts';

export default function S24_ManagedModel() {
	return (
		<Page part="第 4 部分 · Managed Agents" title="Coordinator、roster、thread">
		  <Cols n={3}>
		    <Box title="Coordinator" bg={colors.yellow} size={22}>
		      session 绑定的那个 Agent。拿到自动加上的派活工具，决定派给谁、派几个，最后汇总。
		    </Box>
		    <Box title="Roster" size={22}>
		      协调者能派活的名单，最多 20 个。每项可以写死版本：<br /><code>{'{type: "agent", id, version}'}</code>
		    </Box>
		    <Box title="Thread" size={22}>
		      每次派活开一个线程：自己的对话历史、模型、system、工具。线程之间共享容器里的文件，不共享对话。
		    </Box>
		  </Cols>
		  <Cols n={3}>
		    <Box title="只有一层" size={21}>roster 里的 Agent 不能再有自己的 roster。</Box>
		    <Box title="有上限" size={21}>每个 session 最多 25 个子线程；预算是整个 session 共用的一个上限。</Box>
		    <Box title="看得见" size={21}>派活和回报都是事件：<code>thread_created</code>、<code>thread_message_sent / received</code>。</Box>
		  </Cols>
		  <Say>版本固定的意义：子 Agent 改了 prompt，协调者不会在你不知道的时候用上新版本。</Say>
		</Page>
	);
}
