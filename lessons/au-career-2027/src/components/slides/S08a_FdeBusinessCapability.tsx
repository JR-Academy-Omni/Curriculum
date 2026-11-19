import { DeckFrame, Table } from '../kit';
import { Source } from '../career';
import { sources } from '../../data/sources';

export default function S08a_FdeBusinessCapability() {
	return <DeckFrame tag="FDE BUSINESS · 匠人培养路径" title="FDE Business 需要什么能力，怎么练？" titleSize={54} subtitle="把客户问题写成方案，亲手验证 AI 工作流，再带着结果向客户争取试点。">
		<Table head={['匠人课程的三项学习成果', '实际怎么练']} widths="1fr 2fr" size={25} rows={[
			['客户问题与 Solution Proposal', '调查部门目标和重复工作，比较可选方案。写清第一版做什么、要花多少钱、需要谁配合，以及希望客户批准什么。'],
			['可演示的 AI 工作流与验证', '用询盘练销售跟进：把不同渠道的客户放进跟进队列，识别重复线索和退订要求。亲手跑一遍，对着原始记录核对结果。'],
			['Pitch 与个人项目材料', '第 7 周向运营、财务和 IT 展示方案。客户削减预算后，当场调整范围，再争取试点决定。第 8 周交付试点建议和交接材料。'],
		]} />
		<Source links={[[ '匠人 FDE Business · 学习成果与训练安排', sources.jrFdeBusiness ]]} />
	</DeckFrame>;
}
