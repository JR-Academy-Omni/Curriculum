import { DeckFrame, Table, colors } from '../kit';

export default function S17_Failures() {
	return <DeckFrame tag="SoT · 处理变更" title="从客户通知更新项目资料" subtitle="客户提出新的期望日期，但其他条件没有同时得到确认。" accent={colors.red}>
		<Table size={21} widths="1fr 1.8fr 1.5fr" head={["步骤", "本次处理", "保留的信息"]} rows={[["读取", "对照客户更新通知与当前项目资料", "旧目标日期：4 月 12 日"], ["列出变化", "新期望日期：4 月 15 日", "进入许可、供应商交期仍未知"], ["确认", "负责人确认可更新期望日期", "仍不是已确认开工日期"], ["写回", "更新项目当前状态并记录来源", "原值、新值和通知编号"], ["重新输出", "按更新后的资料生成简报 v2", "保留简报 v1"]]} />
	</DeckFrame>;
}
