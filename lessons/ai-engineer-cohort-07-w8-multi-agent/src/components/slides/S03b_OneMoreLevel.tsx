import { colors } from '../ui';
import { Box, Cols, Page, Say } from './_parts';

export default function S03b_OneMoreLevel() {
	return (
		<Page part="第 1 部分 · 接上 W7" title="阶梯只多一级：Multi-agent">
		  <Cols n={2}>
		    <Box title="谁决定下一步" size={23}>
		      <div>Single call：没有下一步</div>
		      <div>Workflow：代码，步骤写死</div>
		      <div>Single agent：模型，看查到什么</div>
		      <div style={{ fontWeight: 700 }}>Multi-agent（今天）：协调者把子任务派给别的 Agent</div>
		    </Box>
		    <Box title="CareKind 里不让模型决定的事" bg={colors.yellow} size={23}>
		      <div>代码保证：谁能读哪位住户；只用已确认的观察；Draft 只写一次</div>
		      <div>人负责：确认 Draft；临床判断；事件要不要上报</div>
		    </Box>
		  </Cols>
		  <Say bg={colors.red}><span style={{ color: colors.white }}>每往上一级，成本、延迟和出错的地方都会增加。R-106 要不要上报是责任，不是能力：模型再强也交给人。</span></Say>
		</Page>
	);
}
