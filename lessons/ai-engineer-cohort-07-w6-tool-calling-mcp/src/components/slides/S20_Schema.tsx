import { motion } from 'framer-motion';
import { colors, fonts } from '../ui';
import { PartFrame, Code, Terminal, Punch, Mark, RunLine, DEMO_RUN } from './_shared';

// type hint → inputSchema，docstring → description（fastmcp list --json 实测输出，research/demo-runs.md 第 1 节）
export default function S20_Schema() {
	return (
		<PartFrame part="fastmcp" title="类型注解，自动变成工单栏位">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 70px 1fr', gap: 10, alignItems: 'center' }}>
				<motion.div initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, delay: 0.15 }}>
					<Code fontSize={19} lines={['def get_order(', '    order_id: str,', '    customer_id: str,', ') -> dict:', '    """查一张订单的状态。', '    只读，不改任何数据。"""']} hot={[1, 2, 4, 5]} />
				</motion.div>
				<div style={{ fontFamily: fonts.heading, fontSize: 44, fontWeight: 900, textAlign: 'center' }}>→</div>
				<motion.div initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, delay: 0.4 }}>
					<Terminal fontSize={17} title="FastMCP 自动生成，client 看到的是这个" lines={[
						'"description": "查一张订单的状态。只读，不改任何数据。"',
						'"inputSchema": {',
						'  "properties": {',
						'    "order_id": { "type": "string" },',
						'    "customer_id": { "type": "string" }',
						'  },',
						'  "required": ["order_id", "customer_id"]',
						'}',
					]} />
				</motion.div>
			</div>
			<Punch delay={0.9} size={27}>没有默认值的参数就是必填。docstring 写给模型看，<Mark color={colors.yellow}>要写清楚这个窗口办什么</Mark>。</Punch>
			<RunLine>{DEMO_RUN}</RunLine>
		</PartFrame>
	);
}
