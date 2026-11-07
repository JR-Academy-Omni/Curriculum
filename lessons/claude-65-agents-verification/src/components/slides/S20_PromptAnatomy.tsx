import { DeckFrame, AnimatedGroup, colors, fonts } from '../deck';
import { muted, Takeaway } from '../lesson';

// 结构出自项目整理的「系统搭建提示词」八个部分
const parts = [
	{ t: '工作纪律', d: '先看事实、只追加、做完验证、不擅自登录', c: colors.red },
	{ t: '规则全文', d: '流程图逐框抄进来，没定的标红', c: colors.blue },
	{ t: '取数', d: '只认哪些来源，文件怎么读，怎么和原文对', c: colors.green },
	{ t: '核验口径', d: '每项怎样算满足，什么证据不算', c: colors.yellow },
	{ t: '并行和复核', d: '怎么切组、派活单、结果格式、校验、复核', c: colors.purple },
	{ t: '底账', d: '表结构、只能通过一个脚本写库', c: colors.orange },
	{ t: '每日自动化', d: '每天几点、跑哪几步、失败怎么记', c: colors.teal },
	{ t: '验收和踩坑', d: '每一步交什么证据，踩过的坑列出来', c: colors.indigo },
];

export default function S20_PromptAnatomy() {
	return (
		<DeckFrame tag="07 · 带走你的第一个 AI 系统" title="一份能用的系统提示词，长这样" subtitle="只说一句「帮我做个挑公司的系统」不够。能用的提示词有八个部分，别人照着它，就能让 AI 搭出同一套东西。" accent={colors.indigo}>
			<div style={{ display: 'flex', flexDirection: 'column', gap: 18, height: '100%' }}>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: '1fr 1fr', gap: 18, flex: 1, minHeight: 0 }}>
					{parts.map((p, i) => (
						<AnimatedGroup key={p.t} delay={.08 + i * .07} style={{ display: 'flex' }}>
							<div style={{ flex: 1, background: colors.white, border: `2px solid ${colors.dark}`, borderTop: `12px solid ${p.c}`, borderRadius: 20, padding: '18px 20px' }}>
								<div style={{ fontFamily: fonts.mono, fontWeight: 800, fontSize: 16, color: muted }}>第 {i + 1} 部分</div>
								<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 28, marginTop: 6 }}>{p.t}</div>
								<div style={{ fontSize: 19, lineHeight: 1.5, color: muted, marginTop: 8 }}>{p.d}</div>
							</div>
						</AnimatedGroup>
					))}
				</div>
				<div><Takeaway>好提示词 = 规则 + 边界 + 格式 + 验收</Takeaway></div>
			</div>
		</DeckFrame>
	);
}
