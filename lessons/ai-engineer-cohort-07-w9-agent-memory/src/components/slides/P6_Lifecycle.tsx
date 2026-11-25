import { colors } from '../ui';
import { Box, Flow, PartCover, Page, Quiz, Say, Tbl } from './_parts';

// 第 6 部分 · TTL、retention、update、delete 与 consent（10 分钟）

export function C29_Part6() {
	return <PartCover n="6" title="TTL、Retention、更正、删除、Consent" question="这条 memory 能用多久？要留多久？怎么删干净？" minutes="10 分钟" />;
}

export function S30_TtlRetention() {
	return (
		<Page part="第 6 部分" title="TTL 和 retention 是两个时钟">
			<Tbl size={21} widths="140px 1fr 1fr" head={['', 'TTL', 'Retention']} rows={[
				['回答', '还能拿来用多久', '记录必须 / 可以保存多久'],
				['谁定', '按 memory 类型和内容', '法规和公司政策'],
				['到期以后', '标为 stale，不再自动读入；要用先复核', '归档、销毁或去标识'],
				['例子', '“API 只走 v2”：90 天后复核', '审计日志按公司政策保存，不能提前删'],
			]} />
			<Box size={21}><b>TTL 可以很短，规则一样。</b>例：“main 的 CI 坏了，先别合并”（开发者确认，project scope，TTL 1 天）。</Box>
			<Say>过期不等于删除，删除也不等于过期。两个时钟分开管。</Say>
		</Page>
	);
}

export function S31_UpdateDelete() {
	return (
		<Page part="第 6 部分" title="更正：默认保留历史；删除：要删干净">
			<Box title="更正：三种情况" size={20}>
				<div>→ <b>别人要依赖的事实</b>（“API 走 v1”→“v2”）：默认 supersede。新记录替代旧的，旧的留作历史，写明谁改的、为什么</div>
				<div>→ <b>本人的偏好</b>（“要点格式”→“段落”）：直接替换就行，旧的没有保留价值</div>
				<div>→ <b>错的个人信息、被投毒的内容</b>：旧的不能留，按下面的删除流程处理</div>
			</Box>
			<div style={{ fontFamily: 'inherit', fontWeight: 800, fontSize: 22 }}>删除要传到每一处。前提：每个副本都带 memory_id 或 derived_from，删除按 ID 级联：</div>
			<Flow size={20} items={[
				{ t: '主存储' },
				{ t: '向量索引', d: 'metadata 带 memory_id' },
				{ t: '缓存', d: 'key 带 memory_id' },
				{ t: '派生物', d: '摘要、生成的 memory，看 derived_from' },
				{ t: '备份', d: '到期删除，或删加密密钥' },
				{ t: '审计', d: '记“删了”，不记内容', bg: colors.yellow },
			]} />
			<Say>派生物也是 memory。删了原件、留着摘要，等于没删。</Say>
		</Page>
	);
}

export function S32_Consent() {
	return (
		<Page part="第 6 部分" title="Consent：先问能不能收，再问怎么存">
			<Tbl size={20} widths="190px 1fr" head={['问题', 'Coding Agent 的做法']} rows={[
				['什么需要同意', '关于人的信息：偏好、日程（“下周请病假”）。完成任务不需要的个人信息不收'],
				['谁能同意', '本人。别人代说的（“B 不喜欢被 review”）不算'],
				['怎么记', '同意本身也是一条记录：谁、什么时候、范围、怎么撤回'],
				['撤回以后', '停止读取，按删除流程处理，包括用它生成的东西'],
				['依据', '澳洲 Privacy Act / APPs：只收必要的个人信息，健康信息是 sensitive information，一般要同意（APP 3）；不再需要时销毁或去标识（APP 11）；本人可以查阅和更正（APP 12、13）。日志里客户的邮箱、电话也是个人信息'],
			]} />
			<Say>Memory 就是在收集个人信息。</Say>
		</Page>
	);
}

export function S33_Check6() {
	return (
		<Quiz part="第 6 部分" q="开发者 B 要求删除“下周请病假”这条 memory。哪一项做法不够？"
			options={['A. 删除主存储里的记录', 'B. 删除向量索引里的 embedding', 'C. 只把记录标为 inactive，摘要里的“请病假”保留', 'D. 写一条审计：谁请求、什么时候删的']}
			answer="C"
			why="标 inactive 的记录还可能被读到；摘要是派生物，也要处理。" />
	);
}
