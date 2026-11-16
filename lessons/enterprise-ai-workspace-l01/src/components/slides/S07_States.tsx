import { DeckFrame, Table, colors } from '../kit';

export default function S17_Failures() {
	return <DeckFrame tag="项目状态" title="期望日期、确认日期与批准状态" subtitle="同一条记录要保留原文表达和确认条件。" accent={colors.red}>
		<Table size={21} widths="1fr 1.8fr 1.5fr" head={["输入资料", "当前可写入的信息", "不能据此认定"]} rows={[["客户希望 4 月 12 日开工", "期望日期：4 月 12 日；待确认", "已经承诺 4 月 12 日开工"], ["报价分项草稿已完成", "报价草稿：已完成", "客户已经批准报价"], ["已取得物业进场要求", "物业要求清单：已取得", "进入许可已批准"], ["墙面色号 W-02 已确认", "墙面选材：W-02", "地毯和全部选材已确认"]]} />
	</DeckFrame>;
}
