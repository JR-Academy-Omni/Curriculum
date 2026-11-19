import { DeckFrame, Table } from '../kit';
import { Source } from '../career';
import { sources } from '../../data/sources';

export default function ProductComparison() {
	return <DeckFrame tag="产品职责对照" title="传统 Product Manager vs AI Product Manager" titleSize={51}
		subtitle="用同一个会议助手看区别。AI PM 要判断 AI 能做什么、设计 Agent，再用 AI Coding 做出可运行的原型。">
		<Table head={['产品决定', '传统 Product Manager', 'AI Product Manager']} widths=".63fr 1.04fr 1.67fr" size={23} rows={[
			['哪些功能用 AI', '用户填任务，系统按规则校验字段、定时提醒。', '让模型从纪要理解语义、提取行动项。提醒时间用规则，没约定截止日就请用户补。'],
			['怎么设计 Agent', '定义录入、编辑、指派和提醒的交互流程。', '定 Agent 的目标、可读资料和可调用工具。读纪要 → 查任务板去重 → 让用户确认 → 创建任务。'],
			['怎么做原型', '做交互原型，验证用户能否顺利完成任务。', '用 Codex 或 Claude Code 搭一个能跑的 Agent，接上纪要输入和任务工具，现场跑通整条流程。'],
			['怎么验收', '验证保存、权限和提醒是否按需求运行。', '用真实类型的纪要检查漏提、错填、重复建任务和未经确认写入，决定是否上线。'],
		]} />
		<Source links={[[ 'MYOB · AI 产品质量与原型', sources.pmMyob ], [ 'Suntory · AI 用例与验证', sources.pm ]]} />
	</DeckFrame>;
}
