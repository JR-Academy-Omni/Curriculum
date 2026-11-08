import { colors } from '../ui';
import { Box, Code, Cols, Page } from './_parts';

export default function S33_MaxVsLoop() {
	return (
		<Page part="第 5 部分" at={["guards.py · LoopDetector.is_looping()", "agent.py · make_gate()"]} title="max steps 是兜底，循环检测是提前发现">
		  <Cols n={2}>
		    <Box title="Maximum steps" bg={colors.white}>数步数，到上限就停。<br />一定会触发，但要等撞线，前面的钱已经花了。</Box>
		    <Box title="循环检测" bg={colors.yellow}>同样的工具、同样的参数反复出现，提前叫停。<br />更早发现，但只能抓到它定义过的模式。</Box>
		  </Cols>
		  <Code file="demo/guards.py" size={20} code={"def is_looping(self, tool: str, args: dict) -> bool:\n    key = tool + json.dumps(args, sort_keys=True, ensure_ascii=False)\n    self.counts[key] = self.counts.get(key, 0) + 1\n    return self.counts[key] >= self.limit"} />
		</Page>
	);
}
