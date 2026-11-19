import { colors } from '../ui';
import { Box, Cols, Page, Say } from './_parts';

export default function S39b_Compounding() {
	return (
		<Page part="第 7 部分" at={['carekind.py · get_resident_context()']} title="错误累积：一个坏输出，污染整条下游">
		  <Cols n={2}>
		    <Box title="怎么发生" bg={colors.red} size={21}>
		      <div style={{ color: colors.white }}>→ Drafter 把未确认的转写当成事实写进 Draft</div>
		      <div style={{ color: colors.white }}>→ Checker 读的是协调者的转述，不是原件</div>
		      <div style={{ color: colors.white }}>→ 协调者把“看起来没问题”汇总成结论</div>
		      <div style={{ color: colors.white }}>→ 每过一手都更像真的，越往下越难发现</div>
		    </Box>
		    <Box title="怎么挡" bg={colors.green} size={21}>
		      <div>→ 每个交接点用代码校验：schema、只认已确认的记录</div>
		      <div>→ 传引用：下游读原件，不读转述</div>
		      <div>→ 独立检查：另一个 Agent、只读权限，最好换个模型</div>
		      <div>→ 出错就标出来，停下这一支，不往下传</div>
		      <div>→ 每个结论都能追到来源</div>
		    </Box>
		  </Cols>
		  <Say>CareKind：R-102 那条未确认的语音转写在后台就被挡掉，到不了 Draft。</Say>
		</Page>
	);
}
