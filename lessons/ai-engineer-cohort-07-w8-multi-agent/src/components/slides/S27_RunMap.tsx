import { colors } from '../ui';
import { Box, Cols, Page, Say } from './_parts';

export default function S27_RunMap() {
	return (
		<Page part="第 4 部分" at={['handover.py', 'carekind.py · Backend.call()']} title="刚才那次运行，经过了哪里">
		  <Cols n={3} gap={14}>
		    <Box title="我们的进程：handover.py" bg={colors.green} size={21}>
		      <div>开 session，设 3 美元上限</div>
		      <div>读事件流，打印协作轨迹</div>
		      <div>回答每一次工具调用</div>
		      <div>15 分钟墙钟上限</div>
		    </Box>
		    <Box title="Anthropic：Managed Agents session" bg={colors.yellow} size={21}>
		      <div>Shift lead 线程（协调者）</div>
		      <div>Note drafter 线程 × 每位住户</div>
		      <div>Policy checker 线程 × 1</div>
		      <div>advisor 咨询（需要时）</div>
		    </Box>
		    <Box title="CareKind 后台：carekind.py" bg={colors.green} size={21}>
		      <div>按调用者名字查权限</div>
		      <div>只返回已确认记录</div>
		      <div>Draft 幂等，交给 RN 去重</div>
		      <div>每次调用写一行审计</div>
		    </Box>
		  </Cols>
		  <Say>子线程的工具调用也会转发到主事件流上，带着它的 thread id。所以我们知道是谁在调用，并按调用者检查权限。</Say>
		</Page>
	);
}
