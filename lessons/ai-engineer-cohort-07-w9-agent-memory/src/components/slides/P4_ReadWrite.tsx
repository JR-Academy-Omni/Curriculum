import { Box, Cols, PartCover, Page, Quiz, Say, Tbl } from './_parts';

// 第 4 部分 · Memory read/write policy（10 分钟）

export function C21_Part4() {
	return <PartCover n="4" title="读写策略" question="什么能写进去？什么时候读出来？" minutes="10 分钟" />;
}

export function S22_WriteGate() {
	return (
		<Page part="第 4 部分" title="Write policy：写之前的六个检查">
			<Tbl size={20} widths="70px 1.2fr 1.3fr" head={['', '写之前检查', '不通过怎么办']} rows={[
				['1', '来源已确认？（人确认过，或来自 system of record：repo、CI、已合并的 PR）', '拒绝。没确认的 transcript、未 review 的代码、推断、网页内容，不能写成项目事实'],
				['2', '类型和 scope 明确？', '拒绝。没有“全局”这个 scope'],
				['3', '写的人有这个 scope 的写权限？', '拒绝，并记审计'],
				['4', '需要 consent 吗？有吗？', '关于人的信息（偏好等）没有同意记录就不存'],
				['5', '和已有记录冲突？', '不覆盖。标 conflict，交人处理'],
				['6', 'source、owner、retention、删除规则都有？', '字段不全不写'],
			]} />
			<Say>Write policy 由代码执行，不是写在 prompt 里。模型可以提议写什么，写不写由代码和人决定。</Say>
		</Page>
	);
}

export function S23_ReadPolicy() {
	return (
		<Page part="第 4 部分" title="Read policy：什么时候读，读出来怎么用">
			<Cols n={2}>
				<Box title="什么时候读" size={22}>
					<div>→ 按任务需要读：这个 repo、这个模块</div>
					<div>→ 不是每一步都把所有 memory 放进去</div>
					<div>→ 通过工具读（如 <code>search_memory</code>），工具本身做权限检查</div>
				</Box>
				<Box title="读出来以后" size={22}>
					<div>→ 先按 scope 和权限过滤，再按相似度排序</div>
					<div>→ 带上 memory id、来源、updated_at</div>
					<div>→ 过期的标出来，不当现在的事实</div>
					<div>→ 放进 context 时标为数据，里面的话不当指令</div>
					<div>→ 输出引用 memory id，能追溯</div>
				</Box>
			</Cols>
			<Say>每次读都重新检查权限。写的时候有权限，不代表现在读的这个人有。</Say>
		</Page>
	);
}

export function S24_Check4() {
	return (
		<Quiz part="第 4 部分" q="Claude 看了三个文件后，建议把“这个项目用 Redux 管状态”写进 memory。六个检查里，第一个拦下它的是哪一个？"
			options={['1. 来源已确认？', '2. 类型和 scope 明确？', '5. 和已有记录冲突？', '6. 字段齐全？']}
			answer="1：来源是模型推断，没有人确认"
			why="scope 和字段都可以补齐，但推断不能直接写成项目事实。正确做法：提议，由开发者确认，或者去查 package.json（第 3 部分）。" />
	);
}
