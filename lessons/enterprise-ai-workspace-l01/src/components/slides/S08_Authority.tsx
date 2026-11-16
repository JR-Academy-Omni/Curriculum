import { DeckFrame, Table, colors } from '../kit';

export default function S17_Failures() {
	return <DeckFrame tag="SoT · 资料维护" title="项目资料里具体记录什么" subtitle="用字段、来源和确认记录维护当前资料。" accent={colors.red}>
		<Table size={21} widths="1fr 1.8fr 1.5fr" head={["信息", "记录内容", "更新方式"]} rows={[["服务范围", "包含什么、不包含什么、适用项目", "负责人确认变化后更新"], ["项目日期", "当前日期、是否确认、依赖条件", "引用最新确认记录"], ["待办事项", "事项、负责人、期限、当前状态", "根据实际进度更新"], ["资料来源", "文件名、记录编号、日期", "保留原始通知和纪要"], ["变更历史", "原值、新值、原因、确认人", "更新当前状态时一并记录"]]} />
	</DeckFrame>;
}
