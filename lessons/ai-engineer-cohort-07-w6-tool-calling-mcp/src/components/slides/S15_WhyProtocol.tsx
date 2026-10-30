import { motion } from 'framer-motion';
import { colors, fonts, radii } from '../ui';
import { PartFrame, Side, Punch, Mark, muted } from './_shared';

// 为什么要统一规范：没有规范要两两对接（N×M），有规范各对齐一次（N+M）
const fronts = ['Claude Code', 'Cursor', '你的 App'];
const backs = ['订单组', '财务组', '物流组', '知识库'];

function Grid({ pairs }: { pairs: boolean }) {
	return (
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 80px 1fr', alignItems: 'center', gap: 8 }}>
			<div style={{ display: 'grid', gap: 8 }}>{fronts.map((f) => <span key={f} style={{ border: '2px solid #10162f', borderRadius: radii.label + 2, padding: '4px 10px', fontSize: 19, fontWeight: 800, textAlign: 'center', background: colors.white }}>{f}</span>)}</div>
			<div style={{ textAlign: 'center', fontFamily: fonts.mono, fontSize: pairs ? 30 : 18, fontWeight: 700, color: pairs ? colors.red : colors.black, lineHeight: 1.2 }}>
				{pairs ? '×' : <span style={{ display: 'inline-block', background: colors.green, borderRadius: radii.pill, padding: '6px 8px' }}>统一<br />规范</span>}
			</div>
			<div style={{ display: 'grid', gap: 8 }}>{backs.map((b) => <span key={b} style={{ border: '2px solid #10162f', borderRadius: radii.label + 2, padding: '4px 10px', fontSize: 19, fontWeight: 800, textAlign: 'center', background: colors.white }}>{b}</span>)}</div>
		</div>
	);
}

export default function S15_WhyProtocol() {
	return (
		<PartFrame part="mcp" title="为什么要一个统一规范">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
				<Side label="没有规范" labelBg={colors.red} minHeight={330}>
					<Grid pairs />
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.5 }}>
						3 个客服系统 × 4 个部门 = <span style={{ color: colors.red }}>12 套</span>工单格式要谈。
					</motion.div>
				</Side>
				<Side label="有了 MCP" labelBg={colors.green} delay={0.3} minHeight={330}>
					<Grid pairs={false} />
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.5 }}>
						每一方只对齐一次规范：<span style={{ color: colors.green }}>3 + 4 = 7 次</span>。
					</motion.div>
				</Side>
			</div>
			<Punch delay={1} size={28}>新开一个部门，按规范接单，<Mark>所有客服系统马上都能派单给它</Mark>。</Punch>
			<div style={{ marginTop: 6, fontSize: 17, fontWeight: 700, color: muted }}>数字是教学示例。</div>
		</PartFrame>
	);
}
