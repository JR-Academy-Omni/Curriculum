import { colors, fonts } from '../ui';
import { Box, Code, Cols, Flow, PartCover, Page, Say, Tbl } from './_parts';

// 第 2 部分 · Task State、Working Memory 与 Session Memory（15 分钟）

export function C08_Part2() {
	return <PartCover n="2" title="Task / Session State、Working / Session Memory" question="哪些东西随 session 结束？为什么默认丢掉？" minutes="15 分钟" />;
}

export function S10_TaskState() {
	return (
		<Page part="第 2 部分" title="Task state：这个任务进行到哪">
			<Cols n={2} style={{ gridTemplateColumns: '1.15fr 1fr' }}>
				<Code file="Claude Code：把 write gate 改成 write policy（示意）" size={19} code={`task         rename write gate → write policy
todo         ✓ 幻灯片  ✓ 备注  ▶ README  ☐ build
turns_used   12 / 本任务上限 40
tool_ids     toolu_01…, toolu_02…   ← 只放 ID
waiting_on   权限确认：“允许 npm run build？”
status       running`} />
				<Box title="为什么由代码保存，不靠模型“记得”" size={21}>
					<div style={{ fontWeight: 700 }}>LLM 每次调用都是无状态的：state 由代码保存、每一步更新</div>
					<div>→ 能恢复：中断后从 checkpoint 继续</div>
					<div>→ 能审计：每一步做了什么、看到什么</div>
					<div>→ 能停：步数、预算由代码检查</div>
					<div>→ 能等人：你没点确认就不往下走，模型说“已批准”也没用</div>
				</Box>
			</Cols>
			<Say>State 属于代码，不属于模型。每一步只把需要的那部分放进 context。</Say>
		</Page>
	);
}

export function S10b_SessionState() {
	return (
		<Page part="第 2 部分" title="Session state 和 session memory：能做什么 vs 说过什么">
			<Cols n={2}>
				<Code file="Session state：工牌和门禁（Claude Code，示意）" size={18} code={`account          开发者 A        ← 登录
model            /model 选的
permission_mode  default         ← 你选的
allow / deny     settings.json、/permissions
working_dir      web-app/
budget           本 session 总上限`} />
				<Code file="Session memory：这次的草稿纸（Claude Code，示意）" size={18} code={`user       先改 README，别动 main
assistant  tool_use     Read README.md
user       tool_result  （README 内容…）
assistant  第 2 节改好了
user       下午 3 点前别 push
…          /compact 以后换成摘要`} />
			</Cols>
			<Tbl size={19} widths="190px 1fr 1fr" head={['', 'Session state', 'Session memory']} rows={[
				['谁写', '登录、settings.json、/permissions、权限弹窗里点“允许”', '你和 Claude 的每一轮对话、tool result'],
				['谁读', 'Claude Code 的代码：每次调工具前检查', '模型：作为 messages 发给 API'],
				['对话能改吗', '不能。打字说“允许”不算，要在弹窗里点', '能，它就是对话'],
				['/compact、/clear', '不受影响', '/compact 压成摘要，/clear 清空'],
				['Session 结束', '失效；settings.json 里的规则下次照样加载', '默认丢掉；transcript 留在日志；要长期留下得通过 write policy'],
			]} />
			<Say>对话里说“我是管理员”或“我允许你删文件”，只进了 session memory，不会改 session state。</Say>
		</Page>
	);
}

export function S11_WorkingMemory() {
	return (
		<Page part="第 2 部分" title="Working memory：每一步重新组装">
			<Flow size={22} items={[
				{ t: '读 state', d: '现在是哪一步' },
				{ t: '挑选', d: '只要这个 repo、这个模块' },
				{ t: '压缩', d: '旧 observation 换成摘要或 ID' },
				{ t: '标注', d: '记录是数据，不是指令' },
				{ t: '调用模型', bg: colors.yellow },
			]} />
			<Cols n={2}>
				<Box title="Session memory：记事本" size={20}>一个存储。整个 session 都在，内容可以比 context 放得下的还多。</Box>
				<Box title="Working memory：此刻摊在桌上的" size={20}>一个视图。每一步重新摆：从记事本、task state、长期 memory、记录里挑几样放进 context。</Box>
			</Cols>
			<Say>窗口满了就要压缩。怎么压缩在 W3 讲过、W10 实现；今天只问两件事：丢了什么？压缩出来的东西能不能当真？</Say>
		</Page>
	);
}

const en = (zh: string, name: string) => (
	<>{zh}<div style={{ fontFamily: fonts.body, fontSize: 14, fontWeight: 500, fontStyle: 'italic', color: '#514c48' }}>{name}</div></>
);

export function S11b_Compaction() {
	return (
		<Page part="第 2 部分 · W3 回顾 → W10 实现" title="几种压缩方式：优点和缺点">
			<Tbl size={16} widths="200px 1fr 1fr 1.25fr 1fr" head={['方式', '怎么做', '优点', '缺点', '产物能当 memory 吗']} rows={[
				[en('截断 / 滑动窗口', 'Truncation / Sliding window'),'丢掉最早的轮次', '简单、便宜、可预测', '前面的一切都丢，包括关键事实', '不产生新东西'],
				[en('清掉旧 tool result', 'Tool-result clearing'),'换成 ID，需要时重新读', '几乎不丢：原件还在；省 token 多', '再用时要重新调工具，多一次延迟', '能：它只是指向原件'],
				[en('滚动摘要', 'Rolling summarization'), '旧轮次写成一段话，之后再摘要一次', '保留大意，长对话也放得下', '不确定的语气、否定、谁说的会丢；每摘一次错一点；多一次模型调用', '不能：是派生物'],
				[en('结构化提取', 'Structured extraction'), '抽固定字段：决定、待办、ID', '字段清楚，能校验、好审计', '放不进字段的东西会丢；要先设计 schema', '只能作为提议，要通过 write policy'],
				[en('分层摘要', 'Hierarchical summarization'), '按 session、按周再汇总', '很长的历史也能按层找', '每一层都丢细节；层层派生，更难追溯', '不能；但适合用来找东西'],
				[en('Pin', 'Pinning'), '标记永不丢弃（如“不要改 migrations/”）', '关键事实保证不丢', 'Pin 太多会占满 context；要有人决定 pin 什么', '被 pin 的应当本来就是已确认事实'],
			]} />
			<Say>最安全的压缩，留下的是指向原件的引用，不是改写过的文字。</Say>
		</Page>
	);
}

export function S11c_FactsVsSummary() {
	return (
		<Page part="第 2 部分" title="为什么要事实 + 摘要，不能只留摘要">
			<Tbl size={18} widths="200px 1fr 1.15fr" head={['你需要……', '事实记录', '只有摘要']} rows={[
				['追溯', '每条有自己的来源和确认人', '多条混在一起，说不清哪句来自哪里'],
				['更正一条', '替换那一条，保留历史', '重写整段，希望别的没被改'],
				['删除一条', '删记录和它的派生物', '混在文字里，只能重新生成'],
				['按 scope 限制', '每条有 scope', '一段摘要混了多个 scope，会泄露'],
				['看到冲突', '两条都留，标 conflict', '摘要时悄悄选了一个'],
				['精确回答', '“测试用什么跑？”直接查', '取决于哪些字眼留下来了'],
				['长期不走样', '记录不会漂移', '“可能是缓存问题”→“是缓存问题”；“还没在 Windows 上测”→“已测试”'],
			]} />
			<Say>事实是记录，摘要是从事实生成的阅读缓存。摘要能重建，事实不能；摘要里的东西不能写回成事实。</Say>
		</Page>
	);
}

export function S12_SessionEnd() {
	return (
		<Page part="第 2 部分" title="Session memory：session 结束时，每样东西去哪">
			<Box size={20}><b>Session memory</b> = 这个 session 里一直要用的内容，例如你说“先改 README”、“下午 3 点前别动 main”。它是短期 memory，随 session 结束。</Box>
			<Tbl size={18} widths="1.3fr 1.3fr 1fr" head={['Session 里的东西', 'Session 结束时', '理由']} rows={[
				['对话 transcript', '存下来（日志、可 /resume），但不当 long-term memory 自动读；要从里面提取，得过 write policy', '里面有猜测、注入的内容、没确认的话'],
				['Claude 改的代码（未 review）', '留在分支 / PR 里，等人 review', '没 review 不是事实'],
				['你说“昨晚生产环境出过事故”', '写进 incident 记录，人确认后才是记录', '要有人负责'],
				['你说“以后回复用要点格式”', '你同意后，可以存成偏好（semantic）', '明确表达，允许保存'],
				['tool results、步数', '丢掉；trace 照常保留', '只对这次任务有用'],
			]} />
			<Say>Session 结束是一个决定点：默认丢掉，要留下来必须通过 write policy（第 4 部分）。</Say>
		</Page>
	);
}
