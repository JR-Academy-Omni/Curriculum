import { DeckFrame, Table, colors } from '../kit';

export default function S17_Failures() {
	return <DeckFrame tag="PROJECT UPDATE · 新通知" title="更新通知：变了什么，什么没变" subtitle="UP02 · 2027-04-07" accent={colors.red}>
		<Table size={21} widths="1fr 1.8fr 1.5fr" head={["事项", "新信息", "仍待确认"]} rows={[["目标开工", "客户期望改为 2027-04-15", "进入许可、供应商交期"], ["选材", "墙面色号 W-02 已确认", "地毯选型"], ["报价", "Sam 已完成报价分项草稿", "预算、报价批准"], ["进场要求", "Casey 已取得物业要求清单", "进入许可、现场文件完整性"], ["下一步", "Alex 4 月 8 日前跟进地毯与预算", "Jordan 的最新进度"]]} />
	</DeckFrame>;
}
