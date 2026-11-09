import { colors, fonts } from '../ui';
import { Page, Say, Tbl } from './_parts';

export default function S52b_Patterns() {
	return (
		<Page part="第 8 部分" title="先选设计模式，再选框架">
		  <Tbl size={23} widths="300px 1fr 1fr" head={['设计模式', '是什么', '在本课']} rows={[
		    ['Single-agent', '一个模型、一组工具、一段 system prompt', <><code style={{ fontFamily: fonts.mono }}>agent.py</code></>],
		    ['ReAct', '循环：想、做、看结果，直到得出答案', '手写循环，只记录 Action 和 Observation'],
		    ['Human-in-the-loop', '在检查点暂停，等人审批或修正', '超过 500 元的退款'],
		    ['Multi-agent', 'Sequential、Coordinator、Swarm 等', 'W8 再讲'],
		  ]} />
		  <Say>从单个 Agent 开始。一个 Agent 忙不过来时，才拆成多个。</Say>
		  <div style={{ fontFamily: fonts.mono, fontSize: 15, color: colors.black }}>来源：Google Cloud Architecture Center，Agentic AI 设计模式指南</div>
		</Page>
	);
}
