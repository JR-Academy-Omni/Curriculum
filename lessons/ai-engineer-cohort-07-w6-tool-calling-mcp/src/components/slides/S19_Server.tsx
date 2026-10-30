import { motion } from 'framer-motion';
import { colors } from '../ui';
import { PartFrame, Code, Rows, RunLine, DEMO_RUN } from './_shared';

// 一个只读 server 的关键几行（demo/refund_server.py 节选，省略了数据读取和其余两个函数）。只用 FastMCP 一种写法
const lines = [
	'from fastmcp import FastMCP',
	'',
	'mcp = FastMCP("refund-desk")',
	'',
	'@mcp.tool',
	'def get_order(order_id: str, customer_id: str) -> dict:',
	'    """查一张订单的状态。只读，不改任何数据。"""',
	'    ...',
	'',
	'@mcp.resource("policy://refund")',
	'def refund_policy() -> str:',
	'    """退款政策（只看不办）。"""',
	'    ...',
	'',
	'if __name__ == "__main__":',
	'    mcp.run()',
];

export default function S19_Server() {
	return (
		<PartFrame part="fastmcp" title="一个只读的后台部门，十几行" subtitle="FastMCP：用 Python 快速写 MCP server 的工具包。">
			<div style={{ display: 'grid', gridTemplateColumns: '1.25fr .75fr', gap: 22, alignItems: 'start' }}>
				<motion.div initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, delay: 0.15 }}>
					<Code fontSize={19} lines={lines} hot={[2, 4, 9]} />
				</motion.div>
				<Rows color={colors.purple} fontSize={22} pad={12} gap={10} items={[
					{ say: '开一个部门', term: 'FastMCP(…)' },
					{ say: '登记一个窗口', term: '@mcp.tool' },
					{ say: '放一本手册', term: '@mcp.resource' },
					{ say: '开门接单', term: 'mcp.run()' },
				]} />
			</div>
			<RunLine>{DEMO_RUN} · 只用 FastMCP 这一种写法，不混用底层 Server API</RunLine>
		</PartFrame>
	);
}
