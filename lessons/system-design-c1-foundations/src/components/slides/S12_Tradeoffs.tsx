import { AnimatedGroup, DeckFrame, Label, Panel, colors } from '../kit';

export default function S12_Tradeoffs() {
	return <DeckFrame tag="P12 · SYSTEM DESIGN" title="按约束选择同步或异步" subtitle="写下会改变选型的条件。">
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
			<AnimatedGroup delay={0.15}>
				<Panel>
					<Label>同步</Label>
					<p style={{ marginTop: 18, fontSize: 29, lineHeight: 1.55 }}>耗时短且可预测，用户能够直接等待，状态和运维复杂度较低。</p>
				</Panel>
			</AnimatedGroup>
			<AnimatedGroup delay={0.23}>
				<Panel bg={colors.dark} style={{ color: colors.white }}>
					<Label bg={colors.yellow} color={colors.black}>异步</Label>
					<p style={{ marginTop: 18, fontSize: 29, lineHeight: 1.55 }}>用户需要后续查询，处理有长尾或要削峰。代价是额外维护任务状态和重试。</p>
				</Panel>
			</AnimatedGroup>
		</div>
	</DeckFrame>;
}
