import { AnimatedGroup, DeckFrame, Label, Panel, colors } from '../kit';

export default function S07_Capacity() {
	return <DeckFrame tag="P07 · SYSTEM DESIGN" title="估算万人同时观看的带宽" subtitle="先算观众侧出口，再谈源站。">
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
			<AnimatedGroup delay={0.15}>
				<Panel>
					<Label>观众侧</Label>
					<p style={{ marginTop: 18, fontSize: 29, lineHeight: 1.55 }}>平均 2.5 Mb/s × 10,000 人 ≈ 25 Gb/s。另计音频、协议开销和峰值余量。</p>
				</Panel>
			</AnimatedGroup>
			<AnimatedGroup delay={0.23}>
				<Panel bg={colors.dark} style={{ color: colors.white }}>
					<Label bg={colors.yellow} color={colors.black}>源站</Label>
					<p style={{ marginTop: 18, fontSize: 29, lineHeight: 1.55 }}>回源受缓存命中率、缓存键与边缘位置影响。先定义请求模型，再计算回源流量。</p>
				</Panel>
			</AnimatedGroup>
		</div>
	</DeckFrame>;
}
