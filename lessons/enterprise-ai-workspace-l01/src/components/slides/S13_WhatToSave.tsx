import { DeckFrame, Table, colors } from '../kit';

export default function S17_Failures() {
	return <DeckFrame tag="MEMORY · 保存位置" title="哪些信息写到哪里" subtitle="业务事实、工作规则、原始资料和输出文件分别保存。" accent={colors.red}>
		<Table size={21} widths="1fr 1.8fr 1.5fr" head={["信息", "保存位置", "内容"]} rows={[["企业长期信息", "企业资料", "服务、受众、联系方式及已确认条款"], ["项目当前状态", "项目 SoT", "范围、日期、待办、确认状态"], ["稳定工作偏好", "AGENTS.md", "语言、格式、必读资料和操作边界"], ["通知与会议原文", "source", "来源文件、记录日期与编号"], ["生成的文稿与简报", "outputs", "企业介绍、简报及修改版本"], ["尚未确认的想法", "讨论记录", "保留为待讨论事项，不写成确定事实"]]} />
	</DeckFrame>;
}
