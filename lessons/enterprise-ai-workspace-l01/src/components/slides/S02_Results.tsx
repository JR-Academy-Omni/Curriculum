import { DeckFrame, Table, colors } from '../kit';

export default function S17_Failures() {
	return <DeckFrame tag="本节内容" title="企业资料、工作空间与两项工作成果" subtitle="用企业资料完成介绍和项目简报，再学习怎样维护后续任务使用的上下文。" accent={colors.red}>
		<Table size={21} widths="1fr 1.8fr 1.5fr" head={["内容", "本节会做什么", "保存的文件"]} rows={[["企业与项目 SoT", "整理服务、项目范围、日期和确认状态", "企业资料与项目当前状态"], ["企业 Workspace", "配置资料入口、工作规则与任务模板", "AGENTS.md、任务模板"], ["工作成果", "生成企业介绍和项目简报，加入新通知后更新", "企业介绍、项目简报 v1 / v2"]]} />
	</DeckFrame>;
}
