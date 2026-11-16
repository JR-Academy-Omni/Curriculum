import { DeckFrame, Table } from '../kit';

export default function S22_TaskBook() {
	return <DeckFrame tag="CODEX · 项目规则" title="用 AGENTS.md 说明项目工作方式" subtitle="规则说明怎样处理资料；业务事实保存在对应 SoT。">
		<Table size={21} widths="1fr 2.4fr" head={['项目规则', '内容']} rows={[["开始任务", "读取企业资料、当前项目状态和任务模板"], ["事实", "未知不补写；关键结论注明文件与记录编号"], ["语言", "内部简报使用中文；对外文稿按任务要求"], ["修改", "先列事实变更建议，确认后再写回"], ["保存", "输出保留不同版本，不覆盖已审核成果"], ["权限", "发送、承诺、付款、删除和外部写入需明确授权"]]} />
	</DeckFrame>;
}
