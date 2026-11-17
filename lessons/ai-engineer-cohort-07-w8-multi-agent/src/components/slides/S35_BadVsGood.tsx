import { colors } from '../ui';
import { Box, Cols, Page, Say } from './_parts';

export default function S35_BadVsGood() {
	return (
		<Page part="第 6 部分 · 聊天框回答" title="左边这条任务，缺了什么？">
		  <Cols n={2} gap={20}>
		    <Box title="差的派活" bg={colors.red} size={24}>
		      “帮我处理一下 R-102 的情况。”
		    </Box>
		    <Box title="好的派活" bg={colors.green} size={21}>
		      Resident R-102, shift S-2026-11-20-PM.<br />
		      Draft ONE progress note with create_progress_note_draft.<br />
		      Report: resident_id | draft_id or NOT COVERED | observation ids used | anything policy says must go to the RN.<br />
		      If a tool error says not retryable, report NOT COVERED with the error.
		    </Box>
		  </Cols>
		  <Say>差的那条：没有班次、不知道“处理”是写还是查、不知道回报格式、不知道失败了怎么报。</Say>
		</Page>
	);
}
