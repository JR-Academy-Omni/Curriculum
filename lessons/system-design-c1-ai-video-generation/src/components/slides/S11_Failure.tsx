import { DeckFrame, Table } from '../kit';

export default function S11_Failure() {
	return <DeckFrame tag="P11 · SYSTEM DESIGN" title="哪种失败要重跑模型" subtitle="把生成失败、审核拒绝和合成失败拆开处理。">
		<Table size={24} head={["故障", "先查什么", "行动"]} rows={[
			["模型接口超时", "是否已有 operation ID", "查询状态后决定是否重试"],
			["外观错误", "审核理由与镜头版本", "只重做该镜，再审核"],
			["FFmpeg 合成失败", "清单、路径、规格、字幕", "修复合成输入并重用镜头"],
			["新版未通过", "当前发布指针", "保留稳定成片，验证新版本"]
		]} />
	</DeckFrame>;
}
