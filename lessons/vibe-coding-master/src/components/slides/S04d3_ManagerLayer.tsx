import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { motion } from 'framer-motion';

// 往下想一步（思考题）—— 企业 AI OS 会不会变成 manager 层
export default function S04d3_ManagerLayer() {
	return (
		<Slide bg={colors.dark}>
			<Inner style={{ flexDirection: 'column', gap: 0, justifyContent: 'center' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.purple} color={colors.white}>往下想一步 · 思考题</Tag>
					<Title white size="42px" style={{ marginTop: 12, lineHeight: 1.16 }}>
						当真相都进了 AI OS —— 它会不会变成<span style={{ color: colors.yellow }}>「manager 层」</span>？
					</Title>
				</motion.div>

				{/* 流程：员工 → AI OS → 派活 */}
				<div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 24 }}>
					<div style={{ flex: 1, background: '#16203a', border, boxShadow: shadow, padding: '16px 14px', textAlign: 'center' }}>
						<div style={{ fontSize: 30 }}>🧑‍💻🧑‍🎨🧑‍🔧</div>
						<div style={{ fontSize: 17, fontWeight: 900, color: colors.white, marginTop: 6 }}>人类员工</div>
						<div style={{ fontSize: 13, color: '#8890b0', marginTop: 2 }}>汇报进度 / 提问 / 交付</div>
					</div>

					<div style={{ flexShrink: 0, textAlign: 'center', color: colors.yellow, fontFamily: fonts.mono, fontSize: 13, fontWeight: 800 }}>
						汇报 →<br /><span style={{ color: '#8890b0' }}>← 派活</span>
					</div>

					<div style={{ flex: 1.2, background: colors.white, border, boxShadow: `6px 6px 0 ${colors.purple}`, padding: '16px 18px', textAlign: 'center' }}>
						<div style={{ fontSize: 30 }}>🧠</div>
						<div style={{ fontSize: 19, fontWeight: 900, marginTop: 4 }}>AI OS = 企业记忆 + 决策逻辑</div>
						<div style={{ fontSize: 13.5, color: '#666', marginTop: 4, lineHeight: 1.4 }}>读全局真相 → 对齐目标 → 拆解 + 分配 + 追踪状态</div>
					</div>

					<div style={{ flexShrink: 0, fontSize: 24, color: colors.purple, fontWeight: 900 }}>→</div>

					<div style={{ flex: 1, background: '#16203a', border, boxShadow: shadow, padding: '16px 14px', textAlign: 'center' }}>
						<div style={{ fontSize: 30 }}>📋</div>
						<div style={{ fontSize: 17, fontWeight: 900, color: colors.white, marginTop: 6 }}>任务回到人 / 子 agent</div>
						<div style={{ fontSize: 13, color: '#8890b0', marginTop: 2 }}>谁擅长什么，派给谁</div>
					</div>
				</div>

				{/* 平衡：开放问题，不下定论 */}
				<div style={{ display: 'flex', gap: 14, marginTop: 22 }}>
					<div style={{ flex: 1, background: '#1a2440', border, boxShadow: `5px 5px 0 ${colors.purple}`, padding: '13px 18px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 12.5, color: colors.purple, fontWeight: 800 }}>正在发生的</div>
						<div style={{ fontSize: 14.5, color: '#dfe3f0', marginTop: 5, lineHeight: 1.5 }}>「协调 + 分配 + 状态追踪」这层，AI 确实在往里渗 —— 看板、派单、进度回收已经能自动跑。</div>
					</div>
					<div style={{ flex: 1, background: '#1a2440', border, boxShadow: `5px 5px 0 ${colors.red}`, padding: '13px 18px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 12.5, color: colors.red, fontWeight: 800 }}>人还守着的</div>
						<div style={{ fontSize: 14.5, color: '#dfe3f0', marginTop: 5, lineHeight: 1.5 }}>拍板、担责、对人的判断与信任 —— 这些 AI 接不了。manager 的「人味」部分还在人手里。</div>
					</div>
				</div>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
					style={{ marginTop: 16, fontSize: 16, color: colors.yellow, fontWeight: 800, textAlign: 'center', fontFamily: fonts.mono }}>
					// 开放题，没标准答案 —— 但前提都一样：先有那份可信的企业 SoT
				</motion.p>
			</Inner>
		</Slide>
	);
}
