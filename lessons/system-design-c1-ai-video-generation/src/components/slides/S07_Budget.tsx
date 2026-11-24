import { AnimatedGroup, DeckFrame, Label, Panel, colors } from '../kit';

export default function S07_Budget() {
	return <DeckFrame tag="P07 · SYSTEM DESIGN" title="按可用成片计算单位成本" subtitle="把失败尝试与再次合成也算进去。">
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
			<AnimatedGroup delay={0.15}>
				<Panel>
					<Label>课堂输入</Label>
					<p style={{ marginTop: 18, fontSize: 29, lineHeight: 1.55 }}>一次整段生成为 3 单位，首次失败后重做一次，共 6 单位。</p>
				</Panel>
			</AnimatedGroup>
			<AnimatedGroup delay={0.23}>
				<Panel bg={colors.dark} style={{ color: colors.white }}>
					<Label bg={colors.yellow} color={colors.black}>逐镜头</Label>
					<p style={{ marginTop: 18, fontSize: 29, lineHeight: 1.55 }}>每镜尝试为 1 单位，三镜中一镜重做，共 4 单位，再计 2 次各 0.25 单位的合成，合计 4.5 单位。</p>
				</Panel>
			</AnimatedGroup>
		</div>
	</DeckFrame>;
}
