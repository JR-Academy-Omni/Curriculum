import { Box, Cols, PartCover, Page, Quiz, Say, Tbl } from './_parts';

// 第 5 部分 · User、project、team、organisation scope 与权限（10 分钟）

export function C25_Part5() {
	return <PartCover n="5" title="Scope 与权限" question="这条 memory 属于谁？谁能看到？" minutes="10 分钟" />;
}

export function S26_Scopes() {
	return (
		<Page part="第 5 部分" title="四种 scope">
			<Tbl size={19} widths="160px 1.2fr 1fr 1.2fr 1.1fr" head={['Scope', '例子', 'Owner', '谁能读', '谁能写']} rows={[
				['user', '开发者 A：回复用要点格式', '这位开发者', '只有本人的 session', '本人（同意后）'],
				['project', 'web-app 测试用 vitest', '项目 maintainer', '有这个 repo 权限的人', '确认后写入，如 repo 的 CLAUDE.md，走 PR'],
				['team', '平台组本周 on-call 重点', 'Team lead', '本组成员', 'Team lead'],
				['organisation', '公司规则：不提交密钥', '公司', '全体员工', '安全负责人（如 managed policy）'],
			]} />
			<Say>Scope 决定 owner、读权限、写权限和删除责任。没有 scope 的 memory 不该存在。</Say>
		</Page>
	);
}

export function S27_Leaks() {
	return (
		<Page part="第 5 部分" title="跨角色读取：泄露通常发生在哪">
			<Cols n={2}>
				<Box title="三种常见泄露" size={22}>
					<div>1. 向量检索没加 scope 过滤，搜出了别的客户项目的代码和配置</div>
					<div style={{ marginTop: 8 }}>2. 先取 top-k 再过滤，结果常常是空的，于是有人把过滤拿掉了</div>
					<div style={{ marginTop: 8 }}>3. Agent 用 CI 的服务账号去读，绕过了开发者本人的权限</div>
				</Box>
				<Box title="怎么做" size={22}>
					<div>→ Scope 是存储的分区（namespace / tenant），不是可有可无的 metadata</div>
					<div>→ 检索用调用者的身份，不用 Agent 的身份</div>
					<div>→ 跨角色读取（外包人员、别的 team）每次检查并审计</div>
					<div>→ W8 的子 Agent 只拿到派给它的 scope</div>
				</Box>
			</Cols>
			<Say>Agent 的权限不能大于它代表的那个人。</Say>
		</Page>
	);
}

export function S28_Check5() {
	return (
		<Quiz part="第 5 部分" q="开发者 A 在 web-app 里工作，她没有 payments repo 的权限。她的 Agent 能读到哪些？（可多选）"
			options={['A. web-app 里已确认的“测试用 vitest”', 'B. payments repo 的项目 memory', 'C. 开发者 B 的格式偏好', 'D. 公司规则“不提交密钥”']}
			answer="A 和 D"
			why="B 是她没有权限的 repo；C 是别人的 user scope。D 是全公司共享的规则。" />
	);
}
