import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P07：两问决策树 —— 本节的操作核心
// SoT：蓝图 §1 的选择闭环 + §6.1 两个连续问题
function QBox({ n, q, color: c, delay }: { n: string; q: string; color: string; delay: number }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, delay }}
			style={{ border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 14 }}
		>
			<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, background: c, color: colors.white, padding: '4px 10px', letterSpacing: 1 }}>{n}</span>
			<span style={{ fontSize: 20, fontWeight: 800 }}>{q}</span>
		</motion.div>
	);
}

function Branch({ cond, out, color: c, delay, strong }: { cond: string; out: string; color: string; delay: number; strong?: boolean }) {
	return (
		<motion.div
			initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.35, delay }}
			style={{ display: 'flex', alignItems: 'stretch', gap: 0, border, boxShadow: shadow, background: colors.white }}
		>
			<div style={{ flex: 1, padding: '11px 16px', fontSize: 16, fontWeight: 600, color: '#333', display: 'flex', alignItems: 'center', lineHeight: 1.4 }}>
				{cond}
			</div>
			<div style={{ flex: '0 0 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#bbb', fontWeight: 900 }}>→</div>
			<div style={{
				flex: '0 0 168px', background: c, color: strong === false ? colors.black : colors.white,
				display: 'flex', alignItems: 'center', justifyContent: 'center',
				fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, borderLeft: border,
			}}>
				{out}
			</div>
		</motion.div>
	);
}

export default function L7P07_TwoQuestionTree() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', justifyContent: 'center', gap: 0 }}>
				<div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
					<Tag bg={colors.red}>全课操作核心</Tag>
					<Tag bg={colors.dark}>带走这一页</Tag>
				</div>
				<Title size="42px" style={{ marginBottom: 16 }}>
					两问<span style={{ background: colors.yellow, padding: '0 10px' }}>决策树</span>
				</Title>

				<div style={{ display: 'flex', gap: 26 }}>
					{/* 第一问 */}
					<div style={{ flex: 1 }}>
						<QBox n="第一问" q="值得开多个 context 吗？" color={colors.red} delay={0.1} />
						<div style={{ height: 14 }} />
						<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
							<Branch cond="单 Agent 能直接完成，或没有强收益" out="直接做" color={colors.yellow} delay={0.3} strong={false} />
							<Branch cond="不能 / 不划算 —— 至少命中一项强收益，且四条就绪条件全过" out="进第二问" color={colors.dark} delay={0.45} />
						</div>
						<motion.div
							initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
							style={{ marginTop: 12, padding: '10px 14px', background: '#fff', border: '2px dashed #ccc', fontSize: 14.5, color: '#666', lineHeight: 1.5 }}
						>
							<strong style={{ color: colors.dark }}>四条就绪条件：</strong>
							边界一句话说清 · context 能一次给齐 · 产出格式与判据明确 · 没有未处理的写入重叠或前后依赖
						</motion.div>
					</div>

					{/* 第二问 */}
					<div style={{ flex: 1 }}>
						<QBox n="第二问" q="成员之间需要持续通信吗？" color={colors.purple} delay={0.2} />
						<div style={{ height: 14 }} />
						<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
							<Branch cond="每个任务可独立完成，只需把结果交回中心" out="Subagent" color={colors.blue} delay={0.55} />
							<Branch cond="新发现会改变别人的下一步；有依赖、冲突或竞争假设要共同处理" out="Agent Team" color={colors.purple} delay={0.7} />
						</div>
						<motion.div
							initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
							style={{ marginTop: 12, padding: '10px 14px', background: '#faf4ff', border: `2px solid ${colors.purple}`, fontSize: 14.5, color: '#553', lineHeight: 1.5 }}
						>
							<strong style={{ color: colors.purple }}>Team 的门槛更高：</strong>
							只有当<strong>成员通信会改变任务分工或结论质量</strong>时，它才值得。
						</motion.div>
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.45, delay: 1.05 }}
					style={{
						marginTop: 20, padding: '14px 24px', background: colors.dark, color: colors.white,
						border, boxShadow: shadow, display: 'flex', alignItems: 'center', gap: 18, justifyContent: 'center',
					}}
				>
					<span style={{ fontFamily: fonts.mono, fontSize: 12.5, color: colors.yellow, letterSpacing: 1.5, fontWeight: 700, flex: '0 0 auto' }}>
						无论选哪种
					</span>
					{['划边界', '传 context', '收证据', '独立验收'].map((s, i) => (
						<span key={s} style={{ display: 'inline-flex', alignItems: 'center', gap: 16 }}>
							<span style={{ fontSize: 19, fontWeight: 800 }}>{s}</span>
							{i < 3 && <span style={{ color: colors.red, fontWeight: 900 }}>→</span>}
						</span>
					))}
				</motion.div>
			</Inner>
		</Slide>
	);
}
