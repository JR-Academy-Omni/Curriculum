import { DeckFrame, AnimatedGroup, Panel, Label, colors } from '../deck';
import { Stat, muted, Takeaway } from '../lesson';

// 复核数字见 SOURCE_MAP #8；右侧三条出自复核提示.md 原文（略有删减）
const doubts = [
	'浪潮信息 ② 判满足：用的是 2024 年报摘要里的排名，2025 年报和半年报没有再引用第三方排名',
	'雷赛智能 ② 判满足：机构原文是「内资伺服品牌」第二，不是全国第二',
	'康强电子 ③ 判部分满足：牵头的是「行业标准」，按口径不算国家级',
];

export default function S12_Recheck() {
	return (
		<DeckFrame tag="03 · 一个人指挥 65 个 AI" title="换一个 AI 来挑刺" subtitle="格式对，不等于结论对。挑出最容易判松的「行业地位」，换一个没看过首查结果的助手，从头再查一遍。" accent={colors.red}>
			<div style={{ display: 'flex', flexDirection: 'column', gap: 18, height: '100%' }}>
				<div style={{ display: 'grid', gridTemplateColumns: '.8fr 1.2fr', gap: 30, flex: 1, minHeight: 0 }}>
					<AnimatedGroup delay={.15} style={{ display: 'flex' }}><Panel bg={colors.dark} style={{ flex: 1, color: colors.white, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 26 }}>
						<div style={{ fontSize: 24, fontWeight: 700, opacity: .8 }}>独立复核</div>
						<div style={{ display: 'flex', gap: 40, alignItems: 'flex-end' }}>
							<div><div style={{ fontSize: 88, fontWeight: 900, lineHeight: 1 }}>64</div><div style={{ fontSize: 21, opacity: .8 }}>家重查</div></div>
							<div style={{ fontSize: 48, opacity: .6 }}>→</div>
							<div style={{ color: colors.red }}><Stat value={15} label={<span style={{ color: colors.white, opacity: .8 }}>家结论被推翻</span>} color={colors.red} size={120} delay={.5} /></div>
						</div>
						<div style={{ fontSize: 20, lineHeight: 1.5, opacity: .85 }}>两次结论不一样，以证据更硬的一方为准，并写下改判理由。</div>
					</Panel></AnimatedGroup>
					<AnimatedGroup delay={.3} style={{ display: 'flex' }}><Panel style={{ flex: 1 }}>
						<Label bg={colors.yellow} color={colors.dark}>还让每个助手自己交代「哪里判得勉强」</Label>
						<div style={{ display: 'grid', gap: 16, marginTop: 20 }}>
							{doubts.map(d => <div key={d} style={{ fontSize: 21, lineHeight: 1.5, paddingLeft: 16, borderLeft: `6px solid ${colors.orange}` }}>{d}</div>)}
						</div>
						<div style={{ fontSize: 19, color: muted, marginTop: 16 }}>这些自我交代汇总成一页「复核提示」，人只需要看这一页。</div>
					</Panel></AnimatedGroup>
				</div>
				<div><Takeaway>让 AI 查 AI，还要让它说出自己哪里没把握</Takeaway></div>
			</div>
		</DeckFrame>
	);
}
