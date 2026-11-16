import { DeckFrame, Table, colors } from '../kit';

export default function S17_Failures() {
	return <DeckFrame tag="WORKSPACE · 文件目录" title="建立企业项目目录" subtitle="在 Codex 中选择这个项目文件夹，再查看已有文件。" accent={colors.red}>
		<Table size={21} widths="1fr 1.8fr 1.5fr" head={["文件或目录", "用途", "本节使用"]} rows={[["AGENTS.md", "项目工作规则", "必读资料、语言和修改边界"], ["company/", "企业 SoT", "company-profile.md"], ["project/", "项目当前 SoT", "current-status.md"], ["source/", "原始资料", "Project Brief、会议纪要、更新通知"], ["tasks/", "任务模板", "企业介绍、项目简报"], ["outputs/", "完整成果", "文稿和简报的不同版本"]]} />
	</DeckFrame>;
}
