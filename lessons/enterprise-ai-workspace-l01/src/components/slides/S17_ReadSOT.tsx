import { DeckFrame, Panel, Label, Node, Arrow, colors } from '../kit';

export default function S05_SingleStep() {
	return <DeckFrame tag="CODEX · 读取资料" title="先让 Codex 读懂当前项目" subtitle="读取企业资料、项目 SoT 和相关来源，再执行具体任务。" accent={colors.yellow}>
		<div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 6 }}>
			<Node bg={colors.yellow} title="选择项目" sub="打开工作文件夹" style={{ width: 230 }} />
			<Arrow />
			<Node title="读取输入文件" sub="企业资料、项目状态、原始记录" style={{ width: 290 }} />
			<Arrow />
			<Node title="复述关键事实" sub="范围、日期、状态和未知事项" style={{ width: 390 }} />
			<Arrow />
			<Node bg={colors.green} title="执行任务" sub="按模板生成成果" style={{ width: 230 }} />
		</div>
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, marginTop: 30 }}>
			<Panel><Label>先核对什么</Label><div style={{ fontSize: 24, lineHeight: 1.55, marginTop: 14 }}>是否读到了正确文件，日期和批准状态是否与当前资料一致。</div></Panel>
			<Panel bg="#ffe9e9"><Label bg={colors.red}>资料不完整时</Label><div style={{ fontSize: 24, lineHeight: 1.55, marginTop: 14 }}>列出缺失文件、冲突与待确认事项；先处理这些缺口，不让 Codex 自行补写。</div></Panel>
		</div>
	</DeckFrame>;
}
