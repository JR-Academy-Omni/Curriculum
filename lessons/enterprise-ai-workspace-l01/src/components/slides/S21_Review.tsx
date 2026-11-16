import { DeckFrame, Table, colors } from '../kit';

export default function S17_Failures() {
	return <DeckFrame tag="CODEX · 修改文件" title="修改表达，还是更新业务事实" subtitle="不同修改对应不同文件。" accent={colors.red}>
		<Table size={21} widths="1fr 1.8fr 1.5fr" head={["修改要求", "改哪里", "处理方式"]} rows={[["介绍缩短一些", "输出文稿", "调整措辞与长度，保留原有事实"], ["改成更直接的英文", "输出文稿", "修改语气，不新增承诺"], ["客户确认新范围", "项目 SoT，再改文稿", "核查来源，确认后更新"], ["收到新的期望开工日", "先列变更建议", "核对条件与状态后写回"], ["AI 提出新增服务", "讨论记录", "负责人确认前不加入企业事实"]]} />
	</DeckFrame>;
}
