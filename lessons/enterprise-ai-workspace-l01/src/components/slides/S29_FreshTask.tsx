import { DeckFrame, Panel, Label, colors, fonts } from '../kit';

export default function P07_Write() {
	return <DeckFrame tag="CODEX · 继续工作" title="新任务读取更新后的项目状态" subtitle="明确指定当前文件，再继续生成工作成果。" accent={colors.blue}>
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
			<Panel style={{ borderTop: `14px solid ${colors.yellow}` }}>
				<Label bg={colors.yellow} color={colors.dark}>本次读取</Label>
				<div style={{ fontFamily: fonts.mono, fontSize: 18, marginTop: 14 }}>AGENTS.md · company/ · project/</div>
				<div style={{ fontSize: 22, lineHeight: 1.6, marginTop: 12 }}>请读取项目工作规则与当前项目状态，列出当前目标开工日期、确认状态、报价批准状态和资料来源。</div>
			</Panel>
			<Panel style={{ borderTop: `14px solid ${colors.green}` }}>
				<Label bg={colors.green} color={colors.dark}>继续执行</Label>
				<div style={{ fontFamily: fonts.mono, fontSize: 18, marginTop: 14 }}>tasks/project-brief.md</div>
				<div style={{ fontSize: 22, lineHeight: 1.6, marginTop: 12 }}>· 核对读取的文件与版本<br />· 纠正误用的旧日期<br />· 按模板生成新的简报<br />· 保留已有成果版本</div>
			</Panel>
		</div>
	</DeckFrame>;
}
