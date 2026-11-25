import { AnimatedGroup, DeckFrame, Label, Panel, colors } from '../kit';

const steps = ['澄清需求', '估算', '高层架构', '深挖关键点', '故障与瓶颈'];
const added: [string, string][] = [
					['CDN', '把内容缓存到离观众近的节点，源站只供给 CDN'],
					['实时连麦', 'WebRTC + SFU，延迟低但每路成本高'],
					['一致性', '观看人数、弹幕、打赏，对「准」的要求各不一样'],
					['带宽估算', '人数 × 码率，决定成本和架构']
];

export default function S01b_Recap() {
	return <DeckFrame tag="P02 · 复习 L01" title="还是 5 步，地图上再加几块" subtitle="视频上传换成直播：观众多、要实时，带宽和一致性成了难点。">
		<div style={{ display: 'grid', gridTemplateColumns: '.8fr 1.2fr', gap: 28 }}>
			<AnimatedGroup delay={.12} style={{ display: 'flex' }}><Panel style={{ flex: 1 }}>
				<Label>L01 的 5 步</Label>
				<div style={{ display: 'grid', gap: 14, marginTop: 20 }}>{steps.map((t, i) => <div key={t} style={{ display: 'flex', gap: 14, alignItems: 'center', fontSize: 25, fontWeight: 700 }}>
					<span style={{ width: 40, height: 40, borderRadius: '50%', background: colors.yellow, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 19, fontWeight: 900, flexShrink: 0 }}>{i + 1}</span>{t}
				</div>)}</div>
			</Panel></AnimatedGroup>
			<AnimatedGroup delay={.22} style={{ display: 'flex' }}><Panel bg={colors.dark} style={{ flex: 1, color: colors.white }}>
				<Label bg={colors.yellow} color={colors.black}>L02 新加的组件</Label>
				<div style={{ display: 'grid', gap: 16, marginTop: 20 }}>{added.map(([k, v]) => <div key={k} style={{ display: 'grid', gridTemplateColumns: '190px 1fr', gap: 14, fontSize: 22, lineHeight: 1.45 }}>
					<strong style={{ color: colors.yellow }}>{k}</strong><span>{v}</span>
				</div>)}</div>
			</Panel></AnimatedGroup>
		</div>
	</DeckFrame>;
}
