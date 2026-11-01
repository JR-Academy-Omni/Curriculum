import { motion } from 'framer-motion';
import { colors } from '../ui';
import { PartFrame, Flow, Punch, Mark, SourceLine, muted } from './_shared';

// stdio 的一生。实测：FastMCP 4.1.4 回 initialize（protocolVersion 2025-11-25），server/discover 返回 Method not found（research/demo-runs.md 第 6 节）
export default function S23_Lifecycle() {
	return (
		<PartFrame part="cli" title="stdio 的一生">
			<Flow color={colors.orange} minHeight={240} zhSize={24} steps={[
				{ en: '① 启动', zh: 'client 拉起 server 进程', d: '按刚才那五样配置' },
				{ en: '② initialize', zh: '互相报版本和能力', d: '我能办工单、有手册、有模板' },
				{ en: '③ tools/list', zh: '领取窗口清单', d: '这就是 tool discovery' },
				{ en: '④ tools/call', zh: '派单、收回执', d: '可以来回很多次' },
				{ en: '⑤ 关闭', zh: 'client 退出', d: 'server 跟着结束' },
			]} />
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} style={{ marginTop: 16, fontSize: 21, fontWeight: 700, color: muted }}>
				类比到此为止：公司部门一直都在，而 stdio 的 server 是 client <b style={{ color: colors.black }}>临时叫起来</b>的，client 一走它就散。
			</motion.div>
			<Punch delay={1.1} size={27}>接不上的时候，先问：<Mark>卡在第几步</Mark>？</Punch>
			<SourceLine>2026-07 版 MCP 规范把 ② 改成了 server/discover；我们用的 FastMCP 4.1.4 还是 initialize（本机实测）。</SourceLine>
		</PartFrame>
	);
}
