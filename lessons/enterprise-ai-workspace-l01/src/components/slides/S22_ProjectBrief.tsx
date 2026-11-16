import { DeckFrame, Panel, Label, colors, fonts } from '../kit';

export default function P07_Write() {
	return <DeckFrame tag="CODEX · 项目简报" title="从项目资料生成一份工作简报" subtitle="把 Brief 和会议纪要里的信息整理为完整文档。" accent={colors.blue}>
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
			<Panel style={{ borderTop: `14px solid ${colors.yellow}` }}>
				<Label bg={colors.yellow} color={colors.dark}>输入资料</Label>
				<div style={{ fontFamily: fonts.mono, fontSize: 18, marginTop: 14 }}>company/ · project/ · source/</div>
				<div style={{ fontSize: 22, lineHeight: 1.6, marginTop: 12 }}>· 企业资料<br />· Project Brief<br />· 会议纪要<br />· 当前项目状态<br />初始任务不读取后续更新通知。</div>
			</Panel>
			<Panel style={{ borderTop: `14px solid ${colors.green}` }}>
				<Label bg={colors.green} color={colors.dark}>项目简报</Label>
				<div style={{ fontFamily: fonts.mono, fontSize: 18, marginTop: 14 }}>outputs/project-brief-v1.md</div>
				<div style={{ fontSize: 22, lineHeight: 1.6, marginTop: 12 }}>· 项目概况与范围<br />· 日期及确认状态<br />· 行动项与责任人<br />· 未决事项及来源</div>
			</Panel>
		</div>
	</DeckFrame>;
}
