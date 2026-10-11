import { Page, AppendixBadge, Head, Code, colors, fonts, border, radii } from '../deck';

/** A1 · 一个包的完整解剖（课上不讲） */
const DIRS = [
	['.claude-plugin/plugin.json', '四个字段：name / version / description / author'],
	['skills/', '一个技能一个目录，目录名即技能名，内含 SKILL.md'],
	['agents/', '助手'],
	['commands/', '斜杠命令'],
	['hooks/hooks.json', '钩子：什么时机触发 + 触发后跑什么'],
	['scripts/', '钩子要跑的脚本。路径一律用占位符引用，不写死'],
];

export default function L15A1_PluginAnatomy() {
	return (
		<Page>
			<AppendixBadge label="A1 · 一个包的完整解剖" />
			<Head sub="目录名是约定好的。放对位置就会被认出来，不需要额外声明。">包的结构</Head>

			<div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
				<div style={{ flex: 1.1, display: 'flex', flexDirection: 'column', gap: 9 }}>
					{DIRS.map(([d, t]) => (
						<div key={d} style={{
							display: 'flex', alignItems: 'center', gap: 14,
							background: colors.white, border, borderRadius: radii.card, padding: '10px 16px',
						}}>
							<span style={{
								fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, minWidth: 250,
								background: '#fdf6ec', border: `2px solid ${colors.black}`, borderRadius: radii.label,
								padding: '3px 10px',
							}}>{d}</span>
							<span style={{ fontSize: 17, color: '#555', lineHeight: 1.5 }}>{t}</span>
						</div>
					))}
				</div>

				<div style={{ flex: 1 }}>
					<Code
						label="做完先验证再交"
						size={20}
						code={`claude plugin validate p13-my-package`}
					/>
					<div style={{
						marginTop: 16, padding: '18px 22px', background: colors.yellow,
						border, borderRadius: radii.panel,
					}}>
						<div style={{ fontSize: 23, fontWeight: 900, lineHeight: 1.45 }}>
							脚本路径永远用占位符
						</div>
						<p style={{ fontSize: 19, lineHeight: 1.65, marginTop: 9, color: '#4a4320' }}>
							写死的路径只在你这台机器上成立。别人装上之后钩子静默失败 ——
							不报错、不提示，而他不会知道。
						</p>
					</div>
				</div>
			</div>
		</Page>
	);
}
