import { motion } from 'framer-motion';
import { colors } from '../ui';
import { PartFrame, Side, Terminal, Rows, muted } from './_shared';

// 五样配置；左：Claude Code（claude mcp --help 原文写法，无 cwd 字段）；右：标准 mcpServers 配置（FastMCP CLI 支持 cwd，实测）
export default function S22_Config() {
	return (
		<PartFrame part="cli" title="让部门开工，要讲清五样" titleSize={48}>
			<div style={{ display: 'grid', gridTemplateColumns: '.8fr 1.2fr', gap: 20, alignItems: 'start' }}>
				<Rows color={colors.orange} fontSize={21} pad={10} gap={8} items={[
					{ say: '用哪个程序启动', term: 'command' },
					{ say: '交给它什么参数', term: 'args' },
					{ say: '密钥放这里（门禁卡）', term: 'env' },
					{ say: '从哪个目录启动（哪间办公室）', term: 'cwd' },
					{ say: '用专用内线通话', term: 'stdio' },
				]} />
				<div style={{ display: 'grid', gap: 12 }}>
					<Side label="Claude Code：没有 cwd，路径写全" labelBg={colors.blue}>
						<Terminal fontSize={16} lines={['$ claude mcp add refund-desk \\', '    -e ORDERS_API_TOKEN=demo-token \\', '    -- /完整路径/.venv/bin/python /完整路径/refund_server.py']} />
					</Side>
					<Side label="通用 mcpServers 配置：可以写 cwd" labelBg={colors.green} delay={0.3}>
						<Terminal fontSize={16} lines={['"refund-desk": {', '  "command": "/完整路径/.venv/bin/python",', '  "args": ["refund_server.py"],', '  "env": { "ORDERS_API_TOKEN": "demo-token" },', '  "cwd": "/完整路径/demo"', '}']} />
					</Side>
				</div>
			</div>
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} style={{ marginTop: 10, fontSize: 18, fontWeight: 700, color: muted }}>
				command 和 args 的区别，类比到此为止：直接看配置最清楚。
			</motion.div>
		</PartFrame>
	);
}
