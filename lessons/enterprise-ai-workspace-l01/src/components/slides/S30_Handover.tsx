import { DeckFrame, Panel, Label, colors } from '../kit';

export default function S23_Closing() {
	return <DeckFrame tag="企业 Workspace · 继续使用" title="后续工作，从当前资料继续" subtitle="保留企业资料、任务模板和完整成果，在新任务中读取并更新。" bg={colors.dark}>
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 22, height: '100%' }}>
			<Panel><Label bg={colors.yellow} color={colors.dark}>当前资料</Label><div style={{ fontSize: 24, lineHeight: 1.55, marginTop: 16 }}>维护企业服务、项目范围、日期和确认状态；保留来源与变更记录。</div></Panel>
			<Panel><Label bg={colors.green} color={colors.dark}>工作规则</Label><div style={{ fontSize: 24, lineHeight: 1.55, marginTop: 16 }}>沿用资料入口、输出结构和人工审核要求；按具体任务选择模板。</div></Panel>
			<Panel><Label bg={colors.red}>已有成果</Label><div style={{ fontSize: 24, lineHeight: 1.55, marginTop: 16 }}>保留企业介绍、项目简报与不同版本，按确认后的新资料继续修改。</div></Panel>
		</div>
	</DeckFrame>;
}
