// Migrated teaching page; original source: lessons/vibe-coding-master/src/components/slides/S05a_TwoLayers.tsx
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../courseUi';
import { motion } from 'framer-motion';
// 项目事实与执行闭环
export default function S05a_TwoLayers() {
    return (<Slide bg={colors.dark}>
			<Inner style={{ flexDirection: 'column', gap: 0, justifyContent: 'center' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ textAlign: 'center' }}>
					<Tag bg={colors.blue} color={colors.white}>AI ENGINEER · 管理项目</Tag>
					<Title white size="48px" style={{ marginTop: 12 }}>
						事实与执行，<span style={{ color: colors.blue }}>互相校验</span>
					</Title>
				</motion.div>

				{/* 上层：项目执行 */}
				<motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} style={{ borderRadius: 18, marginTop: 26, alignSelf: 'center', width: '78%', background: '#13251a', border: `3px solid ${colors.green}`, boxShadow: `6px 6px 0 ${colors.green}`, padding: '16px 22px' }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 18, color: colors.green, fontWeight: 800, letterSpacing: 1, textAlign: 'center' }}>执行层 · 实现 → 评审 → 验证 → 交接</div>
					<div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 10 }}>
						{['任务 owner', '代码 / PR', '测试 / 演示', '交接 / 回滚'].map((x) => (<span key={x} style={{ borderRadius: 18, background: colors.green, color: colors.black, border, fontFamily: fonts.mono, fontSize: 18, fontWeight: 800, padding: '6px 14px' }}>{x}</span>))}
					</div>
				</motion.div>

				{/* 向上箭头 */}
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} style={{ alignSelf: 'center', display: 'flex', gap: 90, color: colors.blue, fontSize: 28, fontWeight: 900, margin: '6px 0' }}>
					<span>↑</span><span>↑</span><span>↑</span>
				</motion.div>

				{/* 下层：项目事实 */}
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} style={{ borderRadius: 18, alignSelf: 'center', width: '78%', background: '#0f1f33', border: `3px solid ${colors.blue}`, boxShadow: `6px 6px 0 ${colors.blue}`, padding: '16px 22px' }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 18, color: colors.blue, fontWeight: 800, letterSpacing: 1, textAlign: 'center' }}>事实层 · 项目 SoT —— 需求与决定落在仓库</div>
					<div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 10 }}>
						{['PRD / 验收', '接口 / 数据模型', '决策记录', 'CLAUDE.md 规则'].map((x) => (<span key={x} style={{ borderRadius: 18, background: colors.white, color: colors.black, border, fontFamily: fonts.mono, fontSize: 18, fontWeight: 800, padding: '6px 14px' }}>{x}</span>))}
					</div>
				</motion.div>

				{/* 两句定义 */}
				<div style={{ display: 'flex', gap: 14, marginTop: 22, width: '78%', alignSelf: 'center' }}>
					<div style={{ borderRadius: 18, flex: 1, background: '#0f1f33', border, padding: '11px 16px', fontSize: 18, color: '#cfd3e6', lineHeight: 1.5 }}>
						<b style={{ color: colors.blue }}>项目 SoT</b> = 当前确认的需求、约束与版本
					</div>
					<div style={{ borderRadius: 18, flex: 1, background: '#13251a', border, padding: '11px 16px', fontSize: 18, color: '#cfd3e6', lineHeight: 1.5 }}>
						<b style={{ color: colors.green }}>执行闭环</b> = 每项任务都有验收证据和确认人
					</div>
				</div>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }} style={{ marginTop: 16, fontSize: 16, color: colors.yellow, fontWeight: 800, textAlign: 'center', fontFamily: fonts.mono }}>
					CareKind 例：需求写「主管确认」→ 接口做权限校验 → 用测试和演示证明。
				</motion.p>
			</Inner>
		</Slide>);
}
