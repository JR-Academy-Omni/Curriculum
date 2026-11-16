import { DeckFrame, Table, colors } from '../kit';

export default function S17_Failures() {
	return <DeckFrame tag="PROJECT BRIEF · 更新资料" title="项目简报：更新后" subtitle="资料截止 2027-04-07 · 依据 UP02" accent={colors.red}>
		<Table size={21} widths="1fr 1.8fr 1.5fr" head={["字段", "当前 SoT", "状态"]} rows={[["目标开工", "2027-04-15", "客户期望；未确认"], ["工程范围", "墙面、地毯、会议室局部更新", "未增加电气工程"], ["墙面色号", "W-02", "已确认"], ["报价分项", "草稿已完成", "报价未批准"], ["进场要求", "物业清单已取得", "进入许可未批准"], ["下一步", "Alex 4 月 8 日前跟进地毯与预算", "待跟进"]]} />
	</DeckFrame>;
}
