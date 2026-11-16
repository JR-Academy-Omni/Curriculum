import { DeckFrame, Panel, Label, colors, fonts } from '../kit';

const tree = [["company/", "企业的长期资料", true], ["  company-profile.md", "服务、受众、已确认条款", false], ["project/", "当前项目的事实与状态", true], ["  current-status.md", "范围、日期、待办与来源", false], ["source/", "通知、Brief 与会议纪要", true], ["tasks/", "可重复使用的任务说明", true], ["outputs/", "企业介绍、简报与不同版本", true], ["AGENTS.md", "必读资料、语言、权限和审核要求", true]] as const;

export default function P05_Memory() {
	return <DeckFrame tag="MEMORY · 企业工作空间" title="把企业上下文保存在项目文件里" subtitle="在开始新任务时，明确指定需要读取的资料。" accent={colors.dark}>
		<div style={{ display: 'grid', gridTemplateColumns: '1.25fr .75fr', gap: 24 }}>
			<div style={{ background: '#0f1428', color: '#f3f0e8', borderRadius: 22, padding: '22px 26px' }}>
				{tree.map(([p, d, top]) => <div key={p} style={{ display: 'grid', gridTemplateColumns: '430px 1fr', gap: 12, padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 20, color: top ? colors.yellow : '#f3f0e8', whiteSpace: 'pre' }}>{p}</span>
					<span style={{ fontSize: 19, lineHeight: 1.45 }}>{d}</span>
				</div>)}
			</div>
			<div style={{ display: 'grid', gap: 18, alignContent: 'start' }}>
				<Panel><Label>怎样保留上下文</Label><div style={{ fontSize: 22, lineHeight: 1.55, marginTop: 12 }}>将企业资料、项目状态和任务文件保存在固定工作空间。资料变化后更新文件，之后的任务再读取当前版本。</div></Panel>
				<Panel bg={colors.yellow}><Label>先读，再工作</Label><div style={{ fontSize: 22, lineHeight: 1.55, marginTop: 12, fontWeight: 700 }}>保存文件不等于每次自动读到。先让 Codex 复述当前信息，再开始生成成果。</div></Panel>
			</div>
		</div>
	</DeckFrame>;
}
