import { colors } from '../ui';
import { PartFrame, Side, Terminal, Punch, Mark, RunLine, DEMO_RUN, muted } from './_shared';

// 模拟写操作返回 simulated，不返回假的 sent（W6 正文范围）。左为实测原文，右为反例（教学示例）
export default function S28_Simulated() {
	return (
		<PartFrame part="safety" title="演练单，就写“演练”">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
				<Side label="对：说清楚是模拟" labelBg={colors.green} minHeight={300}>
					<Terminal fontSize={17} lines={['$ fastmcp call … send_refund_email order_id=A1024', '{', '  "status": "simulated",', '  "data": {', '    "order_id": "A1024",', '    "note": "演练：没有真的发出邮件"', '  }', '}']} />
				</Side>
				<Side label="错：假装成功了" labelBg={colors.red} delay={0.3} minHeight={300}>
					<Terminal fontSize={17} lines={['{', '  "status": "sent"', '}']} />
					<div style={{ fontSize: 21, fontWeight: 800, lineHeight: 1.5 }}>模型会告诉客户“邮件已发送”。客户等了一天，什么都没收到。</div>
					<div style={{ fontSize: 18, fontWeight: 700, color: muted }}>反例，教学示例</div>
				</Side>
			</div>
			<Punch delay={0.8} size={27}>回执说谎，后面的日志和排错<Mark>全都跟着说谎</Mark>。W10 讲 harness 时要靠它们。</Punch>
			<RunLine>{DEMO_RUN}</RunLine>
		</PartFrame>
	);
}
