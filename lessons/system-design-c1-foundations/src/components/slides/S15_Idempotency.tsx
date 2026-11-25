import { AnimatedGroup, DeckFrame, Label, Panel, Takeaway, colors } from '../kit';

export default function S15_Idempotency() {
	return <DeckFrame tag="P15 · 第 5 步" title="重试会重复，所以操作必须幂等" subtitle="超时以后你不知道对方做没做完，只能再试一次。幂等 = 做一次和做多次，结果一样。">
		<div style={{ display: 'grid', gap: 24 }}>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 26 }}>
				<AnimatedGroup delay={.15} style={{ display: 'flex' }}><Panel style={{ flex: 1 }}>
					<Label>用户点了两次「开始处理」</Label>
					<p style={{ marginTop: 16, fontSize: 25, lineHeight: 1.5 }}>请求带上一个唯一编号。服务端发现同一个编号已经建过任务，就直接返回原来那个任务，不再新建。</p>
				</Panel></AnimatedGroup>
				<AnimatedGroup delay={.23} style={{ display: 'flex' }}><Panel bg={colors.dark} style={{ flex: 1, color: colors.white }}>
					<Label bg={colors.yellow} color={colors.black}>同一条消息投递了两次</Label>
					<p style={{ marginTop: 16, fontSize: 25, lineHeight: 1.5 }}>Worker 把成品写到固定位置。开工前先看成品是否已经存在且完好，存在就只补上「已完成」状态。</p>
				</Panel></AnimatedGroup>
			</div>
			<Takeaway>先更新任务状态，再告诉队列「做完了」。顺序反过来，Worker 一挂，任务就永远卡住。</Takeaway>
		</div>
	</DeckFrame>;
}
