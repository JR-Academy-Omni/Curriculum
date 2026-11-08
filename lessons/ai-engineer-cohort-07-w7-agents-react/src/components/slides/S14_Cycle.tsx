import { colors } from '../ui';
import { Flow, Page, Say } from './_parts';

export default function S14_Cycle() {
	return (
		<Page part="第 2 部分" at={["01_control.py · react_loop()"]} title="ReAct：做一步，看结果，再决定">
		  <Flow size={30} items={[
		    { t: 'Action', d: '模型提出：调用哪个工具，什么参数', bg: colors.yellow },
		    { t: 'Observation', d: '代码执行后，把结果交回模型', bg: colors.blue },
		    { t: '下一步决策', d: '继续调用工具，或者结束', bg: colors.green },
		  ]} />
		  <Say>ReAct = Reasoning + Acting。关键是结果会改变下一步，而不是一次把计划想完。
		    <div style={{ fontWeight: 500, fontSize: 23, marginTop: 6 }}>ReAct 不是 thinking 模式：thinking 是一次调用里想得更深，ReAct 是多轮里去外面查事实。</div>
		  </Say>
		</Page>
	);
}
