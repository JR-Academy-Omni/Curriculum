import { AnimatedGroup, DeckFrame, Label, Panel, Table, colors } from '../kit';

export default function S06_Numbers() {
	return <DeckFrame tag="P06 · 第 2 步" title="估算时要记住的数字" subtitle="只记数量级。具体值随硬件和云厂商变化。">
		<div style={{ display: 'grid', gridTemplateColumns: '1.15fr .85fr', gap: 28 }}>
			<Table size={22} widths="1.3fr 1fr" head={['操作', '大约耗时']} rows={[
				['读一次内存', '100 纳秒'],
				['SSD 随机读一次', '0.1 毫秒'],
				['同一机房内网络往返', '0.5 毫秒'],
				['跨洲网络往返', '150 毫秒'],
			]} />
			<AnimatedGroup delay={.2} style={{ display: 'flex' }}><Panel bg={colors.dark} style={{ flex: 1, color: colors.white }}>
				<Label bg={colors.yellow} color={colors.black}>换算</Label>
				<div style={{ display: 'grid', gap: 16, marginTop: 18, fontSize: 24, lineHeight: 1.45 }}>
					<div>一天 86,400 秒，估算时当 <strong style={{ color: colors.yellow }}>10 万秒</strong></div>
					<div>每天 100 万次请求 ≈ <strong style={{ color: colors.yellow }}>12 次/秒</strong></div>
					<div>峰值通常按平均值的几倍预留</div>
					<div>内存比磁盘快千倍，所以才有缓存</div>
				</div>
			</Panel></AnimatedGroup>
		</div>
	</DeckFrame>;
}
