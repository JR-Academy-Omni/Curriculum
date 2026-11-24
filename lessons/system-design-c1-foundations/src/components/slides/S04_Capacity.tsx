import { AnimatedGroup, DeckFrame, Label, Panel, colors } from '../kit';

export default function S04_Capacity() {
	return <DeckFrame tag="P04 · SYSTEM DESIGN" title="从已知量估出数量级" subtitle="课堂负载设为每小时 1,200 个任务，单任务平均 90 秒。">
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
			<AnimatedGroup delay={0.15}>
				<Panel>
					<Label>平均执行并发</Label>
					<p style={{ marginTop: 18, fontSize: 29, lineHeight: 1.55 }}>1,200 ÷ 3,600 ≈ 0.33 个/秒。0.33 × 90 ≈ 30 个任务正在执行。</p>
				</Panel>
			</AnimatedGroup>
			<AnimatedGroup delay={0.23}>
				<Panel bg={colors.dark} style={{ color: colors.white }}>
					<Label bg={colors.yellow} color={colors.black}>队列与余量</Label>
					<p style={{ marginTop: 18, fontSize: 29, lineHeight: 1.55 }}>30 是均值。突发、长尾和下游限额要另外验证。记录最老任务等待时间、完成速率与失败率。</p>
				</Panel>
			</AnimatedGroup>
		</div>
	</DeckFrame>;
}
