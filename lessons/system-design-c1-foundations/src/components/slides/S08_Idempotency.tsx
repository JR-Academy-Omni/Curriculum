import { AnimatedGroup, DeckFrame, Label, Panel, colors } from '../kit';

export default function S08_Idempotency() {
	return <DeckFrame tag="P08 · SYSTEM DESIGN" title="同一次操作可安全重试" subtitle="重复 HTTP 请求和队列重复投递分别处理。">
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
			<AnimatedGroup delay={0.15}>
				<Panel>
					<Label>创建 Job</Label>
					<p style={{ marginTop: 18, fontSize: 29, lineHeight: 1.55 }}>唯一键为所有者与 Idempotency-Key。同键同输入返回旧 Job，同键不同输入返回冲突。</p>
				</Panel>
			</AnimatedGroup>
			<AnimatedGroup delay={0.23}>
				<Panel bg={colors.dark} style={{ color: colors.white }}>
					<Label bg={colors.yellow} color={colors.black}>处理 Job</Label>
					<p style={{ marginTop: 18, fontSize: 29, lineHeight: 1.55 }}>固定输出位置，核对来源版本和媒体完整性。Job 条件更新成功后才确认消息。</p>
				</Panel>
			</AnimatedGroup>
		</div>
	</DeckFrame>;
}
