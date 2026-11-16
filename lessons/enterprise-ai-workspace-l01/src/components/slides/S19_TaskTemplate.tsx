import { DeckFrame, Panel, Label, colors, fonts } from '../kit';

export default function P07_Write() {
	return <DeckFrame tag="CODEX · 任务模板" title="把常用工作保存为任务模板" subtitle="同一种任务读取当前输入，按固定方法生成新版本。" accent={colors.blue}>
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
			<Panel style={{ borderTop: `14px solid ${colors.yellow}` }}>
				<Label bg={colors.yellow} color={colors.dark}>输入与目标</Label>
				<div style={{ fontFamily: fonts.mono, fontSize: 18, marginTop: 14 }}>tasks/company-introduction.md</div>
				<div style={{ fontSize: 22, lineHeight: 1.6, marginTop: 12 }}>· 给谁看、用来做什么<br />· 读取哪些企业资料<br />· 使用什么语言<br />· 哪些内容不自行补写</div>
			</Panel>
			<Panel style={{ borderTop: `14px solid ${colors.green}` }}>
				<Label bg={colors.green} color={colors.dark}>步骤与输出</Label>
				<div style={{ fontFamily: fonts.mono, fontSize: 18, marginTop: 14 }}>outputs/</div>
				<div style={{ fontSize: 22, lineHeight: 1.6, marginTop: 12 }}>· 先读取并核对资料<br />· 完成全文，附事实依据<br />· 按指定结构保存<br />· 保留已有文件的不同版本</div>
			</Panel>
		</div>
	</DeckFrame>;
}
