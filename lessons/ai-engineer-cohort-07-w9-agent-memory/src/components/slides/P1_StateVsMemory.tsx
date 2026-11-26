import { Box, Cols, PartCover, Page, Quiz, Say, Tbl } from './_parts';

// 第 1 部分 · Agent State 与 Memory 的区别（10 分钟）

export function C04_Part1() {
	return <PartCover n="1" title="State 和 Memory" question="Agent “记得”一件事，到底存在哪里？" minutes="10 分钟" />;
}

export function S05_FourThings() {
	return (
		<Page part="第 1 部分" title="常被混在一起的四样东西">
			<Tbl size={20} widths="200px 1.2fr 160px 1.3fr" head={['', '是什么', '活多久', '例子（Claude Code）']} rows={[
				['Context window', '这一次模型调用能看到的全部内容', '一次调用', '这次发给模型的 system prompt、CLAUDE.md、对话、tool results'],
				['Agent state', <>控制，不是内容。<b>Task state</b>：任务进行到哪、预算、等谁批准。<b>Session state</b>：是谁、能做什么</>, '一个任务 / 一个 session', 'To-do 列表、等你点的权限确认；permission mode'],
				['Memory', <>以后还能再读到的信息，带规则。<b>短期</b>：session 内。<b>长期</b>：活过 session，TTL 可长可短</>, '按规则定', <>短期：这次对话里说的“先改 README”<br />长期：CLAUDE.md、MEMORY.md 里记下的偏好</>],
				['Vector store', '一种存储，加上按相似度检索', '看你怎么删', '把所有对话 embed 进去的索引，里面放什么都行'],
			]} />
			<Say>Context window 只是本次可见的内容；vector store 只是存储和检索。两者都不自动等于可靠的 Memory。</Say>
		</Page>
	);
}

export function S06_TwoTraps() {
	return (
		<Page part="第 1 部分" title="两个常见的误会">
			<Cols n={2}>
				<Box title="把 context window 当 Memory" size={23}>
					<div>→ 窗口满了就截断，丢什么没人决定</div>
					<div>→ 下一个 session 什么都没有了</div>
					<div>→ 模型“记得”，只是因为你又把它放进去了</div>
				</Box>
				<Box title="把 vector store 当 Memory" size={23}>
					<div>→ 所有对话都 embed 进去</div>
					<div>→ 没有 owner、没有 scope、没有删除规则</div>
					<div>→ 搜出来“相似”，不等于是真的、现在还对、这个人能看</div>
				</Box>
			</Cols>
			<Say>Memory = 存储 + 规则。规则是：谁能写、写什么、谁能读、留多久、怎么改、怎么删。</Say>
		</Page>
	);
}

export function S07_Check1() {
	return (
		<Quiz part="第 1 部分" q="下面哪个算 Memory？"
			options={['A. 这一轮 prompt 里放进去的 package.json 内容', 'B. Agent 记录的“第 3 步：等你确认 npm run build”', 'C. 下周新 session 还能读到的“测试用 vitest”，有来源和确认人', 'D. 一个装着历次对话的 vector index']}
			answer="C"
			why="A 是 context，B 是 task state，D 只是存储：没有来源、确认和规则，只是能搜到的文本。" />
	);
}
