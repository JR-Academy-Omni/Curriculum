import { colors } from '../ui';
import { Box, Cols, Page, Say } from './_parts';

export default function S07_StayDeterministic() {
	return (
		<Page part="第 1 部分" title="哪些事永远不交给 Agent">
		  <Cols n={2}>
		    <Box title="交给代码（确定性）" bg={colors.green} size={24}>
		      <div>→ 权限：谁能读哪位住户的记录</div>
		      <div>→ 只读已确认的观察，跳过未确认转写</div>
		      <div>→ Draft 只能写一次，状态永远是 Draft</div>
		      <div>→ 导出、写回 system of record</div>
		    </Box>
		    <Box title="交给人" bg={colors.yellow} size={24}>
		      <div>→ 确认 Draft（对应角色的员工）</div>
		      <div>→ 临床判断</div>
		      <div>→ 事件是否需要上报、报给谁</div>
		      <div>→ 和家属沟通</div>
		    </Box>
		  </Cols>
		  <Say>Agent 只做“下一步取决于查到什么”的部分。其余的写死在代码里，或交给人。</Say>
		</Page>
	);
}
