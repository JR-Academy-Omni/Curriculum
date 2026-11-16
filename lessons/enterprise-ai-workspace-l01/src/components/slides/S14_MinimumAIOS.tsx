import { DeckFrame, Panel, Label, colors, fonts } from '../kit';

const tree = [["company/", "企业的长期资料", true], ["  company-profile.md", "服务、受众、已确认条款", false], ["project/", "当前项目的事实与状态", true], ["  current-status.md", "范围、日期、待办与来源", false], ["source/", "通知、Brief 与会议纪要", true], ["tasks/", "可重复使用的任务说明", true], ["outputs/", "企业介绍、简报与不同版本", true], ["AGENTS.md", "必读资料、语言、权限和审核要求", true]] as const;

export default function P05_Memory() {
	return <DeckFrame tag="MEMORY · 企业工作空间" title="建立企业 Workspace 的资料结构" subtitle="在固定目录组织资料、任务与已有成果。" accent={colors.dark}>
		<div style={{ display: 'grid', gridTemplateColumns: '1.25fr .75fr', gap: 24 }}>
			<div style={{ background: '#0f1428', color: '#f3f0e8', borderRadius: 22, padding: '22px 26px' }}>
				{tree.map(([p, d, top]) => <div key={p} style={{ display: 'grid', gridTemplateColumns: '430px 1fr', gap: 12, padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 20, color: top ? colors.yellow : '#f3f0e8', whiteSpace: 'pre' }}>{p}</span>
					<span style={{ fontSize: 19, lineHeight: 1.45 }}>{d}</span>
				</div>)}
			</div>
			<div style={{ display: 'grid', gap: 18, alignContent: 'start' }}>
				<Panel><Label>企业资料维护</Label><div style={{ fontSize: 22, lineHeight: 1.55, marginTop: 12 }}>指定谁负责更新企业信息与项目状态；修改时记录来源和日期。</div></Panel>
				<Panel bg={colors.yellow}><Label>多人使用</Label><div style={{ fontSize: 22, lineHeight: 1.55, marginTop: 12, fontWeight: 700 }}>每个人的本地副本不会自动同步。公司使用时需要约定统一资料位置和维护人。</div></Panel>
			</div>
		</div>
	</DeckFrame>;
}
