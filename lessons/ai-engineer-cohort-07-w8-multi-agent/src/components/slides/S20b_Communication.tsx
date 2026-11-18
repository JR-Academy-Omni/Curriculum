import { Page, Say, Tbl } from './_parts';

export default function S20b_Communication() {
	return (
		<Page part="第 3 部分" title="Agent 之间怎么传信息：发消息，还是共享黑板">
		  <Tbl size={19} widths="150px 1fr 1fr" head={['', 'Message passing', 'Shared blackboard / memory']} rows={[
		    ['怎么做', '协调者发任务，子 Agent 回报', '大家读写同一个地方：文件、数据库、白板'],
		    ['好处', '谁对谁说了什么，一清二楚；上下文天然隔离', '不用层层转述；后来的人能看到全貌'],
		    ['风险', '每转述一次就可能走样；协调者成为瓶颈', '同时写会冲突；谁写的、哪一版、过没过期都要管'],
		    ['必须配', '委派契约和固定的回报格式（第 6 部分）', '写入规则：谁能写哪块、带来源和版本、用完清掉'],
		    ['CareKind', '派活和回报走线程消息', 'Draft 存在后台，checker 凭 draft_id 自己去读；线程共享容器文件'],
		  ]} />
		  <Say>常见做法是两种混用：消息里只放任务和引用，事实放在共享的记录里。</Say>
		</Page>
	);
}
