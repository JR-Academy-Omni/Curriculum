import { DeckFrame, Table } from '../kit';
import { NoteLine } from '../career';

export default function S13_Compare() {
	return <DeckFrame tag="把岗位放回自己的处境" title="同一段后端经历，可以走三条路" subtitle="你做过企业系统集成，负责 API、权限和上线。你想保住收入，同时争取更多责任。">
		<Table head={['路径', '这段经历怎么用', '下一步确认什么']} widths=".8fr 1.4fr 1.3fr" size={24}
			rows={[
				['内部转岗', '接下内部服务台的 AI 搜索，把权限、检索和评估接起来。', '能否拿到实际职责？岗位级别和调薪由谁决定？'],
				['同岗跳槽', '用 API、集成和稳定性成果，找职责更大的 Software Engineer 岗。', '同城同级有多少招聘？底薪和合同是否符合底线？'],
				['转相邻岗位', '先看 AI Engineer。若做过客户访谈、部署和验收，再看 FDE Tech。', '目标 JD 多出的那项责任，是否有证据能拿去面试？'],
			]} />
		<NoteLine>先选一份现在能投的，再选一份多负责一件事、值得准备的。</NoteLine>
	</DeckFrame>;
}
