import { DeckFrame, AnimatedGroup, Panel, Label, colors, fonts } from '../deck';
import { muted, Takeaway } from '../lesson';

// 四阶段名称、选股层各框的规则和分工出自 research/framework.yaml（流程图的文字版）
const pick = [
	{ name: '批量入口', who: '程序', text: '每季度财报出来后，全部 A 股（本期 5569 只）一起跑：单季营业收入同比增长 ≥20%' },
	{ name: '准备行业清单', who: 'AI', text: '只从十五五规划纲要、国务院和各部委文件、赛迪研究院、官方媒体里找年均增长 ≥10% 的行业' },
	{ name: '行业筛选', who: 'AI', text: '逐家核对主营业务在不在清单里，每家附官方文件出处；不在的写明理由淘汰' },
	{ name: '五项核验', who: 'AI', text: '主营、行业前三、技术领先、供不应求、替代进口；每条给结论和出处，查不到就写查不到' },
	{ name: '通过线', who: '人', text: '五项全过才继续跟踪，缺一项就淘汰；AI 只出汇总，由我来定' },
];

const later = [
	{ name: '建仓层', who: '程序算条件 · 人定买不买', c: colors.green },
	{ name: '仓位管理', who: 'AI 盯信号 · 人定加减', c: colors.yellow },
	{ name: '账户出清', who: '程序预警 · 人定出不出', c: colors.red },
];

const whoColor: Record<string, string> = { 程序: colors.dark, AI: colors.blue, 人: colors.red };

export default function S04_Flowchart() {
	return (
		<DeckFrame tag="01 · 先画图，再让 AI 动手" title="把规则画成一张图，这张图说了算" subtitle="规则散在聊天记录里，AI 每次读到的版本都不一样。画成流程图后，程序、页面、文档都照这张图抄。" accent={colors.blue}>
			<div style={{ display: 'flex', flexDirection: 'column', gap: 16, height: '100%' }}>
				<div style={{ display: 'grid', gridTemplateColumns: '1.5fr .9fr', gap: 26, flex: 1, minHeight: 0 }}>
					<AnimatedGroup delay={.15} style={{ display: 'flex', minHeight: 0 }}>
						<div style={{ flex: 1, background: colors.white, border: `2px solid ${colors.dark}`, borderLeft: `16px solid ${colors.blue}`, borderRadius: 20, padding: '12px 22px', display: 'flex', flexDirection: 'column', gap: 4 }}>
							<div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
								<span style={{ fontFamily: fonts.mono, fontWeight: 800, fontSize: 18 }}>01</span>
								<span style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 34 }}>选股层</span>
								<span style={{ fontSize: 18, color: muted, fontWeight: 700 }}>本课的重点，五个框照流程图抄</span>
							</div>
							<div style={{ display: 'grid', gap: 0, flex: 1, alignContent: 'space-evenly' }}>
								{pick.map((s, i) => (
									<div key={s.name} style={{ display: 'grid', gridTemplateColumns: '30px 200px 1fr', alignItems: 'center', gap: 12, padding: '5px 0', borderTop: i ? `1px dashed rgba(0,0,0,.18)` : 'none' }}>
										<span style={{ width: 30, height: 30, borderRadius: '50%', background: colors.blue, color: colors.white, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.mono, fontSize: 15, fontWeight: 800 }}>{i + 1}</span>
										<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
											<span style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 21 }}>{s.name}</span>
											<span style={{ flexShrink: 0, fontSize: 14, fontWeight: 800, color: colors.white, background: whoColor[s.who], borderRadius: 999, padding: '1px 10px' }}>{s.who}</span>
										</div>
										<div style={{ fontSize: 17, lineHeight: 1.35, fontWeight: 600 }}>{s.text}</div>
									</div>
								))}
							</div>
						</div>
					</AnimatedGroup>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 12, minHeight: 0 }}>
						<AnimatedGroup delay={.25} style={{ display: 'grid', gap: 6 }}>
							<div style={{ fontSize: 15, color: muted, fontWeight: 700 }}>后面三层，本课不展开 · AI 不预测股价、不给买卖指令</div>
							{later.map((s, i) => (
								<div key={s.name} style={{ background: colors.white, border: `2px solid ${colors.dark}`, borderLeft: `10px solid ${s.c}`, borderRadius: 14, padding: '5px 14px', display: 'flex', alignItems: 'baseline', gap: 12 }}>
									<span style={{ fontFamily: fonts.mono, fontWeight: 800, fontSize: 14 }}>0{i + 2}</span>
									<span style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 19 }}>{s.name}</span>
									<span style={{ fontSize: 15, color: muted, fontWeight: 700 }}>{s.who}</span>
								</div>
							))}
						</AnimatedGroup>
						<AnimatedGroup delay={.35} style={{ display: 'flex', flex: 1, minHeight: 0 }}><Panel bg={colors.dark} style={{ flex: 1, color: colors.white, padding: '12px 18px' }}>
							<Label bg={colors.yellow} color={colors.dark}>改规则的顺序</Label>
							<div style={{ display: 'grid', gap: 7, marginTop: 10 }}>
								{['先改流程图', '再改规则文件（AI 读这个）', '把这次决定写进数据库', '最后重新生成页面'].map((t, i) => (
									<div key={t} style={{ display: 'flex', gap: 12, alignItems: 'center', fontSize: 18, fontWeight: 700 }}>
										<span style={{ width: 28, height: 28, borderRadius: '50%', background: colors.yellow, color: colors.dark, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.mono, fontSize: 14, flexShrink: 0 }}>{i + 1}</span>{t}
									</div>
								))}
							</div>
							<div style={{ fontSize: 15, lineHeight: 1.4, marginTop: 8, opacity: .8 }}>程序做法和图不一样时，页面上单独标出来。</div>
						</Panel></AnimatedGroup>
					</div>
				</div>
				<div><Takeaway>规则写入数据库</Takeaway></div>
			</div>
		</DeckFrame>
	);
}
