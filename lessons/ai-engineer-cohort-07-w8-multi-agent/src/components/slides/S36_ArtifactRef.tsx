import { colors } from '../ui';
import { Box, Cols, Page, Say } from './_parts';

export default function S36_ArtifactRef() {
	return (
		<Page part="第 6 部分" title="传引用，不传内容">
		  <Cols n={2}>
		    <Box title="把内容贴进消息" bg={colors.red} size={23}>
		      <div>→ 每转一手多一份 token</div>
		      <div>→ 转述时会改写、丢字</div>
		      <div>→ 副本过期了也不知道</div>
		      <div>→ 审计时说不清依据是哪一版</div>
		    </Box>
		    <Box title="传 ID 和路径" bg={colors.green} size={23}>
		      <div>→ draft_id、observation id、政策条款号</div>
		      <div>→ 谁要看，谁用工具去读原件</div>
		      <div>→ 结论能追回到记录</div>
		      <div>→ Managed Agents 里也可以传容器里的文件路径</div>
		    </Box>
		  </Cols>
		  <Say>Checker 拿到的是 draft_id，自己用 get_draft 去读，不是协调者转述的版本。</Say>
		</Page>
	);
}
