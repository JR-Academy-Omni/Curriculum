import { Code, Cols, Mono, Page, Say, Tbl } from './_parts';

export default function S34_Contract() {
	return (
		<Page part="第 6 部分" at={['prompts.py · SHIFT_LEAD']} title="派活契约：W7 的交接单，反过来用">
		  <Cols n={2} style={{ gridTemplateColumns: '1fr 1.15fr' }}>
		    <Tbl size={17} widths="190px 1fr" head={['W7 交接单', '派活时写什么']} rows={[
		      [<Mono>case</Mono>, '哪位住户、哪个班次'],
		      [<Mono>context</Mono>, '只给 ID，让它自己去读原件，不贴内容'],
		      [<Mono>next_step</Mono>, '要它做的一件具体的事'],
		      [<><Mono>done</Mono> / <Mono>side_effects</Mono></>, '回报格式：写了哪份 Draft，还是 NOT COVERED'],
		      [<Mono>reason_code</Mono>, '失败了怎么报'],
		      [<Mono>trace_id</Mono>, '回报带 observation ids，能追来源'],
		      ['W7 没有的', '工具、期限、什么时候算完：写在配置和代码里'],
		    ]} />
		    <Code file="好的派活（prompts.py 里是英文版）" size={16} code={"任务       写一条 progress note Draft\n案件       R-102 / 班次 S-2026-11-20-PM\n背景       只给 ID，用工具读已确认的记录\n算完       Draft 写好，或确认写不了\n失败怎么报 工具说 not retryable →\n           NOT COVERED + 错误原文\n回报格式   resident_id | draft_id 或\n           NOT COVERED | observation ids |\n           要交给 RN 的事\n─────────────────────────────\n工具       配置里只有：读记录、查政策、写 Draft\n期限       session 3 美元上限，15 分钟墙钟"} />
		  </Cols>
		  <Say>差的派活：“帮我处理一下 R-102 的情况。”和 W7 那张差的交接单一样，接手的一方只能从头查。</Say>
		</Page>
	);
}
