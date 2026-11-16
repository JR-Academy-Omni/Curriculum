import { DeckFrame, Table, colors } from '../kit';

export default function S17_Failures() {
	return <DeckFrame tag="课程安排" title="今天的 120 分钟" subtitle="从 SoT 和记忆开始，再进入 Codex 操作。" accent={colors.red}>
		<Table size={21} widths="1fr 1.8fr 1.5fr" head={["环节", "内容", "时间"]} rows={[["企业成果", "打开完整企业介绍与项目简报", "10 分钟"], ["SoT", "当前版本、事实来源、确认状态与更新", "25 分钟"], ["记忆", "对话、文件、SoT 与工作规则的关系", "15 分钟"], ["Workspace", "建立项目目录，配置资料与规则", "20 分钟"], ["Codex 实操", "企业介绍、项目简报、变更更新", "35 分钟"], ["继续使用", "新任务读取资料、整理自己的工作空间", "15 分钟"]]} />
	</DeckFrame>;
}
