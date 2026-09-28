import { motion } from 'framer-motion';
import { colors, border, shadow } from '../ui';
import { TopoSubagent, TopoTeam } from '../TopoDiagram';
import { Page, PageHead, Note } from '../deck';

// P03 · Subagent vs Team：两张拓扑（蓝图 §11.2）
// ⚠️ 讲法纪律：不要说「Team 更高级」。只强调 Team 多了成员间通信和共享协调，因此门槛更高。

export default function L8P03_Topologies() {
	return (
		<Page>
			<PageHead phase="talk" time="5–15 min" title="两种拓扑：信息怎么流动" />

			<div style={{ display: 'flex', gap: 24, flex: 1, minHeight: 0 }}>
				{[
					{
						name: 'Subagent', color: colors.blue, Topo: TopoSubagent,
						foot: <>协调集中在 Hub。分工 = <strong>覆盖</strong>。</>,
					},
					{
						name: 'Agent Team', color: colors.purple, Topo: TopoTeam,
						foot: <>协调分布在成员之间。互通 = <strong>共同收敛</strong>。</>,
					},
				].map((c, i) => (
					<motion.div
						key={c.name}
						initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.1 + i * 0.12 }}
						style={{ flex: 1, border, boxShadow: shadow, background: colors.white, display: 'flex', flexDirection: 'column' }}
					>
						<div style={{
							background: c.color, color: colors.white, padding: '10px 22px',
							borderBottom: border, fontSize: 24, fontWeight: 900,
						}}>{c.name}</div>
						<div style={{ flex: 1, padding: '14px 16px', display: 'flex', alignItems: 'center' }}>
							<c.Topo height={286} />
						</div>
						<div style={{
							borderTop: '2px dashed #ddd', padding: '14px 22px',
							fontSize: 23, color: '#555', lineHeight: 1.45,
						}}>{c.foot}</div>
					</motion.div>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, delay: 0.5 }}
				style={{ border: `3px solid ${colors.red}`, background: '#fff2f2', padding: '16px 24px' }}
			>
				<div style={{ fontSize: 26, fontWeight: 800, color: colors.dark, lineHeight: 1.5 }}>
					🚫 不要说「Team 更高级」。Team 只是多了<strong>成员间通信</strong>和<strong>共享协调</strong> ——
					<span style={{ background: colors.red, color: colors.white, padding: '0 10px' }}>所以它的门槛更高，不是更强</span>。
				</div>
			</motion.div>

			<Note>右图紫线就是 L7 那张图里<strong style={{ color: colors.dark }}>不存在</strong>的连线；橙色虚线是全队共享的任务状态。</Note>
		</Page>
	);
}
