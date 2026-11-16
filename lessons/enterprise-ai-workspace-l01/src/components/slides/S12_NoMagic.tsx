import { DeckFrame, Panel, Label, colors } from '../kit';

export default function S19_Rerun() {
	return <DeckFrame tag="MEMORY · 新任务" title="开始新任务时，怎样读取已有资料" subtitle="选择项目文件夹，明确指定当前资料，再核对读到的版本。">
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 22, height: '100%' }}>
			<Panel style={{ borderTop: `14px solid ${colors.green}` }}><Label bg={colors.green} color={colors.dark}>当前对话</Label><div style={{ fontSize: 24, lineHeight: 1.55, marginTop: 16 }}>用于当前需求与修改。不能仅凭上次聊过，就认定新任务采用了同样的信息。</div></Panel>
			<Panel style={{ borderTop: `14px solid ${colors.yellow}` }}><Label bg={colors.yellow} color={colors.dark}>项目文件</Label><div style={{ fontSize: 24, lineHeight: 1.55, marginTop: 16 }}>明确读取 AGENTS.md、企业资料与项目状态，先列出关键事实及来源。</div></Panel>
			<Panel style={{ borderTop: `14px solid ${colors.red}` }}><Label bg={colors.red}>当前 SoT</Label><div style={{ fontSize: 24, lineHeight: 1.55, marginTop: 16 }}>核对日期、范围和批准状态；纠正后再生成文件。</div></Panel>
		</div>
	</DeckFrame>;
}
