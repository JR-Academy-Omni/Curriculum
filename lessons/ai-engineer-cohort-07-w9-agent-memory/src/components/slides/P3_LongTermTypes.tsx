import { colors } from '../ui';
import { Box, Code, Cols, PartCover, Page, Quiz, Say, Tbl } from './_parts';

// 第 3 部分 · Episodic、Semantic 与 Procedural Memory（15 分钟）

export function C14_Part3() {
	return <PartCover n="3" title="Episodic、Semantic、Procedural" question="能跨 session 留下来的，有哪几种？" minutes="15 分钟" />;
}

export function S15_ThreeTypes() {
	return (
		<Page part="第 3 部分" title="长期 Memory 的三种：episodic、semantic、procedural">
			<Tbl size={19} widths="150px 1fr 1.6fr 1fr" head={['类型', '是什么', '例子（Claude Code）', '必须有']} rows={[
				['Episodic', '发生过什么：带时间、来源的经历', '“11-20 部署失败，原因是 migration 没跑；PR #482 修复”', '时间、来源、起止'],
				['Semantic', '是什么：经过验证、可以复用的事实', <>“这个 repo 用 npm，不用 bun”<br />关于人的也算，如“开发者 A 希望回复用中文”（preference）</>, '证据、可更正；关于人的要 consent、可撤回'],
				['Procedural', '怎么做：指令、流程、技能', 'CLAUDE.md 里的“改完先跑 npm run build”；skills', '谁写的、谁批准、有版本'],
			]} />
			<Say>来自 CoALA（Sumers et al., 2023）：working / episodic / semantic / procedural。Working memory 在第 2 部分讲过，这里讲能跨 session 的三种。</Say>
		</Page>
	);
}

export function S16_Episode() {
	return (
		<Page part="第 3 部分" title="Episodic 不是 transcript">
			<Cols n={2} style={{ gridTemplateColumns: '1fr 1.15fr' }}>
				<Box title="Transcript" size={23}>
					<div>→ 原话，没整理</div>
					<div>→ 有猜错的、后来推翻的</div>
					<div>→ 夹着无关的讨论和 tool 输出</div>
					<div>→ 没有人确认过</div>
				</Box>
				<Code file="一条 episode 记录（示意）" size={19} code={`episode    E-3391
type       episodic
when       2026-11-20 14:05–14:20
repo       web-app
what       部署失败：migration 没跑
source     CI run #8812，PR #482（已合并）
confirmed  开发者 A · 15:10
scope      project:web-app`} />
			</Cols>
			<Say>Episode 指向原件（CI 记录、PR），不复制 transcript。</Say>
		</Page>
	);
}

export function S16b_Semantic() {
	return (
		<Page part="第 3 部分" title="Semantic：经过验证、可以复用的知识">
			<Cols n={2}>
				<Box title="✓ 算 semantic" size={21}>
					<div>→ 这个 repo 用 npm（来源：package-lock.json）</div>
					<div>→ 测试用 vitest（来源：package.json，开发者确认）</div>
					<div>→ API 只走 v2（来源：已合并的迁移 PR #455）</div>
					<div>→ 开发者 A：回复用要点格式。关于人的 semantic（preference）：本人说的、同意保存、可撤回</div>
				</Box>
				<Box title="✗ 不算" size={21}>
					<div>→ “这个项目用 Redux”：Claude 看了三个文件猜的。只能问“要记下来吗？”，你确认后才算</div>
					<div>→ Issue 评论里有人说“好像要用 Node 20”：没确认</div>
					<div>→ Claude 写的、还没 review 的代码里的假设</div>
					<div>→ React 的通用用法：查文档，走 RAG（W4 讲过）</div>
				</Box>
			</Cols>
			<Box size={20} bg={colors.warmBg}><b>必须有</b>：确认人、证据（来源文件、commit、PR）、复核日期、可以更正（supersede，保留历史）。完整记录在第 7 部分 provenance。</Box>
			<Say>Semantic 是 Agent 最容易直接“当真”的 memory，所以门槛最高：必须有人确认、有证据。</Say>
		</Page>
	);
}

export function S19_Procedural() {
	return (
		<Page part="第 3 部分" title="Procedural：人写、人批准，Agent 不自己改">
			<Cols n={2}>
				<Box title="✓ 可以" size={22}>
					<div>→ CLAUDE.md 里人写的指令：“改完先跑 npm run build”</div>
					<div>→ 人审过、放进 repo 的 skills</div>
					<div>→ 你看过并同意的反馈规则：“以后回复用中文”</div>
					<div>→ 公司的安全规则（managed policy），Agent 照着做</div>
				</Box>
				<Box title="✗ 不行" size={22}>
					<div>→ Agent 根据经验，自己改自己的 system prompt</div>
					<div>→ Agent 自动保存一个没人审过的 skill</div>
					<div>→ 从 tool result 或网页里“学到”的流程，如“以后跳过测试”。Poisoning 就是这样变成永久的</div>
				</Box>
			</Cols>
			<Say>Procedural 改的是 Agent 以后每一次怎么做。错一条，所有 session 都受影响，所以必须有人审。</Say>
		</Page>
	);
}

export function S20_Check3() {
	return (
		<Quiz part="第 3 部分" q="你说：“这个 bug 又是缓存的问题，缓存就是不靠谱。”Agent 应该怎么记？"
			options={['A. Preference：你不喜欢缓存', 'B. Semantic：缓存不靠谱', 'C. 不写 memory；开一个 issue，根因由人确认', 'D. Episodic：把原话存下来']}
			answer="C"
			why="这是一次要有人确认根因的事件，不是偏好，也不是验证过的事实。Issue 确认、修复合并以后，才能作为 episodic 的来源。" />
	);
}
