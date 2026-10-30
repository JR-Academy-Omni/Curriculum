import { colors } from '../ui';
import { PartFrame, Side, Terminal, Punch, Mark, RunLine, DEMO_RUN } from './_shared';

// 不经过模型：fastmcp list 看清单（tool discovery），fastmcp call 手动试一单（实测输出节选）
export default function S21_ManualCall() {
	return (
		<PartFrame part="fastmcp" title="不用模型，也能先试一单">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
				<Side label="看这个部门能办什么" labelBg={colors.purple}>
					<Terminal fontSize={16} lines={[
						'$ fastmcp list mcp-config.json --resources --prompts',
						'Tools (2)',
						'  get_order(order_id: str, customer_id: str) -> dict',
						'  send_refund_email(order_id: str) -> dict',
						'Resources (1)',
						'  policy://refund',
						'Prompts (1)',
						'  refund_reply(customer_name)',
					]} />
				</Side>
				<Side label="亲手派一张单" labelBg={colors.green} delay={0.3}>
					<Terminal fontSize={16} lines={[
						'$ fastmcp call mcp-config.json get_order \\',
						'    order_id=A1024 customer_id=C001',
						'{',
						'  "status": "ok",',
						'  "data": { "order_id": "A1024",',
						'            "state": "已签收", "amount": 129 }',
						'}',
					]} />
				</Side>
			</div>
			<Punch delay={0.8} size={28}>先确认<Mark>窗口本身没问题</Mark>，再交给模型。出了错，就少猜一层。</Punch>
			<RunLine>{DEMO_RUN}</RunLine>
		</PartFrame>
	);
}
