import type { ReactNode } from 'react';
import { colors, fonts } from '../ui';
import { Box, Cols, PartCover, Page, Say, Tbl } from './_parts';

// 第 8 部分 · Coding Agent Memory architecture 与面试表达（10 分钟）

export function C39_Part8() {
	return <PartCover n="8" title="Coding Agent Memory 架构与面试表达" question="把今天的规则放进一张图，再用七步讲出来" minutes="10 分钟" />;
}

const Arrow = ({ children }: { children?: ReactNode }) => (
	<div style={{ alignSelf: 'center', textAlign: 'center', fontSize: 30, fontWeight: 900, lineHeight: 1 }}>
		⇄{children && <div style={{ fontSize: 14, fontWeight: 700, fontFamily: fonts.mono, marginTop: 4 }}>{children}</div>}
	</div>
);

const Store = ({ t, d }: { t: string; d: string }) => (
	<Box size={17} style={{ padding: '8px 14px' }}><b>{t}</b>：{d}</Box>
);

export function S40_Architecture() {
	return (
		<Page part="第 8 部分" title="Coding Agent Memory 架构（以 Claude Code 为例）">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 80px 1.15fr 80px 1.2fr', gap: 8, alignItems: 'stretch' }}>
				<div style={{ display: 'grid', gap: 12 }}>
					<Box title="Coding Agent" size={18}>只有 task / session state。通过工具读、提议写，不直接碰存储。Procedural（CLAUDE.md、skills）由人写，Agent 只读。</Box>
					<Box title="可以成为事实的来源" size={18} bg={colors.warmBg}>repo 里的文件、CI 结果、已合并的 PR、开发者确认过的</Box>
					<Box title="只能提议" size={18} bg="#ffd6d6">transcript、未 review 的代码、模型推断、网页和 issue 内容</Box>
				</div>
				<Arrow>tool</Arrow>
				<Box title="Memory service" size={19} bg={colors.dark}>
					<div>→ Write policy（六个检查）</div>
					<div>→ Read policy：scope、权限、过期</div>
					<div>→ 冲突标记，交人处理</div>
					<div>→ 更正 supersede，删除传播</div>
					<div>→ Consent 记录</div>
					<div>→ 每次读写都进审计</div>
				</Box>
				<Arrow />
				<div style={{ display: 'grid', gap: 8 }}>
					<Store t="Session store" d="任务结束就丢" />
					<Store t="Episodic log" d="指向原件：CI、PR" />
					<Store t="Project facts" d="semantic，人确认" />
					<Store t="Preferences" d="关于人的 semantic，有 consent" />
					<Store t="Audit log" d="谁、何时、读写了什么" />
				</div>
			</div>
			<Say>W9 实践课只做最左边的 task / session state。中间和右边在 W10 实践课实现。</Say>
		</Page>
	);
}

export function S41_Tools() {
	return (
		<Page part="第 8 部分" title="现成实现：拿 memory contract 去对">
			<Tbl size={18} widths="230px 1.3fr 1fr" head={['实现', '提供什么', '还要自己做']} rows={[
				['LangGraph Checkpointer + Store', 'Checkpointer 按 thread 保存 state；Store 按 namespace 存跨 thread 的数据', 'Write policy、确认、consent、删除传播'],
				['Mem0', '从对话中提取 memory，按 user / agent / run 区分，检索', '判断来源是否已确认；冲突交人'],
				['Zep', '带时间的知识图谱，事实有有效期', 'Scope 权限、consent、哪些能写'],
				['LangMem', '从对话中提取 semantic / episodic / procedural memory', '同上'],
				['Letta（原 MemGPT）', 'Agent 自己管理分层 memory', '限制 Agent 自己改 memory 的权限'],
				['Claude memory tool', 'Agent 用工具读写一个 memory 目录，存储在你自己那边', '所有规则'],
			]} />
			<Say>这些是实现案例，不是 Memory 的定义。选型时逐项对：contract 里的字段，它有哪些，哪些要你补。</Say>
		</Page>
	);
}

export function S42_Interview() {
	return (
		<Page part="第 8 部分 · 面试" title="七步回答“这个 Agent 的 memory 怎么设计”">
			<Tbl size={20} widths="70px 220px 1fr" head={['', '先回答', '说出的取舍']} rows={[
				['1', '分清', '哪些是 state，哪些真的要跨 session（多数不需要）'],
				['2', '类型', 'Episodic、semantic、procedural 各存什么；procedural 谁能改'],
				['3', '写入', 'Write policy：只收已确认来源，Agent 只能提议'],
				['4', 'Scope', 'User / project / team / org；读的时候用调用者的权限'],
				['5', '生命周期', 'TTL、retention、更正不覆盖、删除传播、consent'],
				['6', '风险', '冲突、过期、provenance、poisoning'],
				['7', '怎么证明', '跨 session recall、越权、过期、冲突、poisoning 测试；审计记录'],
			]} />
			<Say>第 1 步最常被跳过：先说哪些东西不用记。</Say>
		</Page>
	);
}

export function S43_RedFlags() {
	return (
		<Page part="第 8 部分 · 面试" title="会被追问到底的回答，和更难的追问">
			<Cols n={3}>
				<Box title="“所有对话都存进 vector DB”" size={17}>谁能搜到？什么时候删？embedding 和摘要怎么删？</Box>
				<Box title="“让模型自己决定记什么”" size={17}>推断写成事实，出错谁负责？被注入了怎么办？</Box>
				<Box title="“用户要删，我们删主表”" size={17}>向量索引、缓存、摘要、备份呢？有审计吗？</Box>
			</Cols>
			<Tbl size={18} widths="300px 1fr" head={['更难的追问', '答题要点']} rows={[
				['Poisoning 已经发生了，怎么办？', '① 隔离：按 provenance 找出同一来源、同一 session 写的记录，停止读取 ② 查影响：审计看谁读过，derived_from 找派生物 ③ 回滚：恢复被 supersede 的版本，删除级联 ④ 补漏：收紧 write policy，把这个例子加进 eval'],
				['Working memory 里的内容错了，怎么修？', 'Working memory 每一步重新组装，修来源，不修 context：来自 long-term → 更正那条 memory；来自坏摘要 → 回原文重读或 pin 事实；来自 tool result → 重跑。错的内容已在对话历史里，要明确更正，或回退 / 开新 session（Claude Code：/rewind、/clear）'],
				['怎么看 working memory 里到底有什么？', 'Trace 每次 LLM 调用实际发出的内容，每段带 memory_id 或 source，才能追回原件。Claude Code：/context 看各部分占多少 token，transcript 看完整对话；框架用 LangSmith 等 trace 工具'],
				['Memory 越来越多，检索越来越差？', 'TTL 和复核清掉过期的；合并重复的 semantic；先按 scope 和类型过滤再检索；用跨 session recall 测试量化，不靠感觉'],
				['删了 memory，但内容已经被写进代码或 PR？', 'derived_from 只管 memory 系统内部。repo 里的内容要另走流程（改代码、改 PR，重写 git 历史要谨慎）。所以个人信息一开始就不该进代码和 commit'],
			]} />
			<Say>好的回答从规则开始，不从存储开始。</Say>
		</Page>
	);
}

export function S44_Next() {
	return (
		<Page part="收尾" title="记下来之前先问：谁确认的、给谁看、留多久、怎么删">
			<Tbl size={21} widths="230px 1fr" head={['接下来', '内容']} rows={[
				['W9 实践课 · L119', 'Bounded Agent：state / action / observation、tool loop、allowlist、终止、human review、trace。只用 task / session state'],
				['W10 理论课 · L138', 'Production Agent Harness'],
				['W10 实践课 · C7P10', 'Safe Long-Term Memory：write policy、scoped retrieval、TTL、冲突 / 更正 / 删除、poisoning 测试、跨 session recall'],
				['选修 · L134a', 'W10 之后，用 Mem0 实现并验证同一份 memory contract'],
			]} />
			<Say>本课不布置作业。</Say>
		</Page>
	);
}
