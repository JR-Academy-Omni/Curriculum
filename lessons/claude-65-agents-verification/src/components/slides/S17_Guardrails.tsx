import { DeckFrame, AnimatedGroup, colors, fonts } from '../deck';
import { muted, Takeaway } from '../lesson';

// 42 个决定：底账 decisions 表，见 SOURCE_MAP #2
const tools = [
	{ t: '记忆文件', d: '跨对话也记得：我是谁、踩过什么坑、数据在哪。一条一个文件，新对话开头自动读。', c: colors.blue },
	{ t: '上岗说明 CLAUDE.md', d: '项目级硬规则：语言、路径、权限、规则来源。', c: colors.green },
	{ t: '做完必须验证', d: '跑一遍、看输出、抽样核对，附证据才能说「完成」。', c: colors.yellow },
	{ t: '底账只追加不覆盖', d: '结论变了就新写一行，旧行指向新行，永远不删。哪天发现错了，能查到是哪一步错的。', c: colors.purple },
	{ t: '每个决定都记下来', d: '我定下的事写进决定表：日期、决定、理由。一共 42 条。', c: colors.red },
];

export default function S17_Guardrails() {
	return (
		<DeckFrame tag="04 · AI 会犯错，怎么管住它" title="管住 AI 的五件工具" subtitle="提示词不用一次写完美。下面五样东西，用得越久越管用。" accent={colors.purple}>
			<div style={{ display: 'flex', flexDirection: 'column', gap: 18, height: '100%' }}>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 18, flex: 1, minHeight: 0 }}>
					{tools.map((x, i) => (
						<AnimatedGroup key={x.t} delay={.12 + i * .1} style={{ display: 'flex' }}>
							<div style={{ flex: 1, background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 22, boxShadow: `7px 7px 0 ${x.c}`, padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
								<span style={{ width: 54, height: 54, borderRadius: '50%', background: x.c, border: `2px solid ${colors.dark}`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.mono, fontWeight: 800, fontSize: 22 }}>{i + 1}</span>
								<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 27, lineHeight: 1.2 }}>{x.t}</div>
								<div style={{ fontSize: 19, lineHeight: 1.55, color: muted }}>{x.d}</div>
							</div>
						</AnimatedGroup>
					))}
				</div>
				<div><Takeaway>错一次补一条，系统会越来越稳</Takeaway></div>
			</div>
		</DeckFrame>
	);
}
