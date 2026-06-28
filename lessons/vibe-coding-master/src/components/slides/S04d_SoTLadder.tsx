import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { motion } from 'framer-motion';

// SoT 往上走的阶梯 —— 个人 PRD → 企业 SoT → 文档群聚合成企业 AI OS
const rungs = [
	{ scope: '个人', sot: '一份代码 PRD', detail: '你和你的 AI 对齐这一件事', w: 52, bg: colors.white, fg: colors.black, bar: colors.blue },
	{ scope: '团队', sot: '一份团队共享 SoT', detail: '各 team 各维护各的 = 违反 SoT，必须收敛成一份', w: 68, bg: colors.white, fg: colors.black, bar: colors.purple },
	{ scope: '企业', sot: '一份企业级真相源', detail: '规范 / 流程 / 内容全部从它派生，不再各写各的', w: 84, bg: colors.white, fg: colors.black, bar: colors.orange },
	{ scope: '企业 ×N 份文档', sot: '= 企业 AI OS / 组织记忆系统', detail: '规则 + 流程 + 决策 + 记忆 互相引用，聚合成一套系统', w: 100, bg: colors.dark, fg: colors.white, bar: colors.green },
];

export default function S04d_SoTLadder() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.green} color={colors.black}>往上走一层</Tag>
					<Title size="48px" style={{ marginTop: 12, lineHeight: 1.16 }}>
						一份 PRD 往上长 —— 企业文档多了，就<span style={{ background: colors.yellow, padding: '0 8px' }}>聚成 AI OS</span>
					</Title>
					<p style={{ fontSize: 18, color: '#555', marginTop: 10 }}>
						SoT 不是只在代码这一层。规模每往上一级，真相源也跟着往上收敛 —— 到企业级，文档群本身就是一套操作系统。
					</p>
				</motion.div>

				<div style={{ marginTop: 22, display: 'flex', flexDirection: 'column-reverse', gap: 10 }}>
					{rungs.map((r, i) => (
						<motion.div key={r.scope}
							initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.18, type: 'spring', stiffness: 150, damping: 18 }}
							style={{ display: 'flex', alignItems: 'stretch', width: `${r.w}%`, background: r.bg, color: r.fg, border, boxShadow: i === rungs.length - 1 ? `6px 6px 0 ${r.bar}` : shadow }}>
							<div style={{ flexShrink: 0, width: 8, background: r.bar }} />
							<div style={{ flexShrink: 0, width: 150, padding: '12px 14px', display: 'flex', alignItems: 'center', fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, borderRight: `2px solid ${r.fg === colors.white ? '#444' : '#ddd'}` }}>
								{r.scope}
							</div>
							<div style={{ flex: 1, padding: '12px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
								<div style={{ fontSize: 21, fontWeight: 900, color: r.fg === colors.white ? colors.yellow : r.bar }}>{r.sot}</div>
								<div style={{ fontSize: 14.5, color: r.fg === colors.white ? '#cfd3e6' : '#666', marginTop: 3 }}>{r.detail}</div>
							</div>
						</motion.div>
					))}
				</div>

				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}
					style={{ marginTop: 18, alignSelf: 'flex-start', fontFamily: fonts.mono, fontSize: 16, color: '#333', fontWeight: 700 }}>
					// 所以「AI OS」不是玄学 —— 它就是 SoT 往上长出来的必然。下一页，我们正式拆开它。
				</motion.div>
			</Inner>
		</Slide>
	);
}
