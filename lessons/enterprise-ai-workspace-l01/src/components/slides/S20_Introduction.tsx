import { DeckFrame, Panel, Label, colors, fonts } from '../kit';

export default function P07_Write() {
	return <DeckFrame tag="CODEX · 企业介绍" title="根据企业资料生成完整介绍" subtitle="读取企业 SoT 与任务模板，完成后打开全文修改。" accent={colors.blue}>
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
			<Panel style={{ borderTop: `14px solid ${colors.yellow}` }}>
				<Label bg={colors.yellow} color={colors.dark}>任务说明</Label>
				<div style={{ fontFamily: fonts.mono, fontSize: 18, marginTop: 14 }}>tasks/company-introduction.md</div>
				<div style={{ fontSize: 22, lineHeight: 1.6, marginTop: 12 }}>请根据企业资料，生成 100–140 个英文单词的企业介绍。说明服务、受众与业务范围；不新增资质、价格和客户证明。</div>
			</Panel>
			<Panel style={{ borderTop: `14px solid ${colors.green}` }}>
				<Label bg={colors.green} color={colors.dark}>输出文稿</Label>
				<div style={{ fontFamily: fonts.mono, fontSize: 18, marginTop: 14 }}>outputs/company-introduction-v1.md</div>
				<div style={{ fontSize: 22, lineHeight: 1.6, marginTop: 12 }}>· 完整英文正文<br />· 正文之后列事实依据<br />· 缺失信息交负责人确认<br />· 调整表达时保留原有事实</div>
			</Panel>
		</div>
	</DeckFrame>;
}
