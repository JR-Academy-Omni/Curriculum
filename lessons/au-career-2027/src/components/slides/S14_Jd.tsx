import { DeckFrame, Table } from '../kit';
import { NoteLine, Source } from '../career';
import { sources } from '../../data/sources';

export default function S14_Jd() {
	return <DeckFrame tag="拿真实 JD 自测" title="先圈动词，再找你的项目证据" subtitle="选一个方向，把 JD 里的一项责任写成你能在面试现场打开的成果。">
		<Table head={['方向与 JD', '雇主要你负责什么', '面试打开什么']} widths=".91fr 1.1fr 1.22fr" size={20} rows={[
			['AI Engineer · Accenture', '开发、评估和部署 Agentic 系统。', '你负责的代码、评估结果、上线后的故障处理。'],
			['FDE · Endla / OpenAI', 'Endla 从访谈做到启用。OpenAI 写生产代码并跟踪采用。', 'Business 带可跑的流程和试点数字。Tech 带架构、代码、评估与交接。'],
			['AI Product Manager · MYOB', '对 LLM 产品的路线图、体验、质量和商业成果负责。', '原型、一个发布决定和影响这个决定的评估证据。'],
			['IT Sales · Salesforce', 'Commercial AE 负责推进机会、协调售前、签约。', '一单你推进过的商机，标明预算人、采购阻力、你的动作和结果。'],
		]} />
		<NoteLine>现在这份经历能证明哪一项？下一份工作需要你多负责哪一段？</NoteLine>
		<Source links={[[ 'Accenture AI 工程', sources.ai ], [ 'Endla FDE', sources.endla ], [ 'OpenAI FDE', sources.fde ], [ 'MYOB AI 产品', sources.pmMyob ], [ 'Salesforce 商业销售', sources.salesAe ]]} />
	</DeckFrame>;
}
