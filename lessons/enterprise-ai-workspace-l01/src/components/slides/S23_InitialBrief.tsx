import { DeckFrame, Table, colors } from '../kit';

export default function S17_Failures() {
	return <DeckFrame tag="PROJECT BRIEF · 当前资料" title="项目简报：更新前" subtitle="Harbour Office Refresh · 资料截止 2027-04-02" accent={colors.red}>
		<Table size={21} widths="1fr 1.8fr 1.5fr" head={["事项", "当前记录", "来源"]} rows={[["项目范围", "墙面、地毯、会议室局部更新；不含电气", "PB01-1–2"], ["目标开工", "2027-04-12，未确认；依赖许可与交期", "PB01-3"], ["报价", "未提供草稿完成记录；报价未批准；未提供金额", "PB01-4 / MN01-1"], ["Sam", "2027-04-05 前整理报价分项", "MN01-1"], ["Casey", "2027-04-06 前确认物业进场要求", "MN01-2"], ["Alex / Jordan", "跟进选材预算 / 整理供应商文件；期限待确认", "MN01-3–4"]]} />
	</DeckFrame>;
}
