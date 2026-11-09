import { DeckFrame, AnimatedGroup, colors, fonts } from '../deck';
import { Code, muted, Takeaway } from '../lesson';

// 条目改写自项目里的 CLAUDE.md「先记住的规则」一节
const rules = [
	{ rule: '所有回复用中文', why: '它中途切过英文' },
	{ rule: '给我的命令一律写完整路径', why: '我在别的目录点运行，找不到文件' },
	{ rule: '动手前先核实，做完要实际跑一遍', why: '它凭旧文件说「部署好了」' },
	{ rule: '没有同意，不登录任何服务器', why: '权限只给到一台数据机' },
	{ rule: '框架以流程图为准，改规则先问我', why: '它悄悄删过一条规则' },
];

export default function S05_ClaudeMd() {
	return (
		<DeckFrame tag="01 · 先画图，再让 AI 动手" title="给 AI 写一份「上岗说明」" subtitle="Claude 每次开工都会先读项目根目录的 CLAUDE.md。里面每一条，都是它犯过一次错以后加上的。" accent={colors.blue}>
			<div style={{ display: 'flex', flexDirection: 'column', gap: 18, height: '100%' }}>
				<div style={{ display: 'grid', gridTemplateColumns: '.95fr 1.05fr', gap: 30, flex: 1, minHeight: 0 }}>
					<AnimatedGroup delay={.15}>
						<Code title="CLAUDE.md · 先记住的规则">{rules.map(r => `- ${r.rule}\n`).join('')}{'\n'}## 仓库关系{'\n'}公开仓库：只放代码和导出表{'\n'}私有分支：数据库、公告原件{'\n\n'}## 每天自动做的事{'\n'}21:15 取行情 → 更新底账 → …</Code>
					</AnimatedGroup>
					<AnimatedGroup delay={.3} style={{ display: 'grid', gap: 12, alignContent: 'start' }}>
						{rules.map((r, i) => (
							<div key={r.rule} style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 14, alignItems: 'center', background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 16, padding: '12px 18px' }}>
								<span style={{ fontWeight: 800, fontSize: 20 }}>{r.rule}</span>
								<span style={{ fontFamily: fonts.mono, color: [colors.red, colors.blue, colors.green, colors.purple, colors.orange][i], fontWeight: 800 }}>←</span>
								<span style={{ fontSize: 19, color: muted }}>因为 {r.why}</span>
							</div>
						))}
					</AnimatedGroup>
				</div>
				<div><Takeaway>每犯一次错，就往说明书里加一条</Takeaway></div>
			</div>
		</DeckFrame>
	);
}
