import { colors } from '../ui';
import { PartFrame, TermTable, Punch, Mark } from './_shared';

// 定义（下）：同一套类比
export default function S08_Terms2() {
	return (
		<PartFrame part="basics" title="先认识 4 个词（下）">
			<TermTable color={colors.green} rows={[
				{ term: 'MCP', say: '一套统一的连接规范：任何 AI 应用都用同一种方式接任何工具', co: '全公司统一的工单规范' },
				{ term: 'MCP server', say: '我们写的、提供工具的那个小程序', co: '按规范接单的后台部门（订单组）' },
				{ term: 'MCP client', say: '使用工具的一方，在 Claude Code 这类应用里', co: '派单的客服系统' },
				{ term: 'stdio', say: '两个程序之间最简单的传话管道：一边写，一边读', co: '客服系统和后台之间的一条专用内线' },
			]} />
			<Punch delay={0.8} size={27}>注意：后台是<Mark>只认格式的自动窗口</Mark>，不是会变通的同事。栏位填错，它就退单。</Punch>
		</PartFrame>
	);
}
