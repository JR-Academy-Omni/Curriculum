// Migrated teaching page; original source: lessons/vibe-coding-master-l2/src/components/slides/L2P05_Unstuck.tsx
import { Slide, Inner, Tag, colors, fonts, border, shadow, springIn } from '../courseUi';
import { motion } from 'framer-motion';
// 破局 5 招 —— 每条一行卡片
const moves: {
    n: string;
    bad: string;
    good: string;
    color: string;
}[] = [
    { n: '1', bad: '别在烂状态上叠 prompt', good: '先保存当前工作，确认回退范围；或从最小复现重新描述', color: colors.red },
    { n: '2', bad: '禁止它瞎改', good: '让 agent 先讲清根因，再动手改', color: colors.orange },
    { n: '3', bad: '一整坨问题喂过去', good: '缩小范围：隔离成最小复现再喂', color: colors.blue },
    { n: '4', bad: '同一个坑反复踩', good: '修好后把教训写进 CLAUDE.md / rules', color: colors.purple },
    { n: '5', bad: '别盲信它说"好了"', good: '让它写个测试 / 解释为什么这么改有效', color: colors.green },
];
// 破局清单：Agent 卡住 / 改不动死循环
export default function L2P05_Unstuck() {
    return (<Slide bg={colors.dark}>
			<Inner style={{ flexDirection: 'column', height: '88%' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
					<Tag bg={colors.red}>🚨 破局清单</Tag>
					<span style={{ borderRadius: 18, fontSize: 14, fontWeight: 800, fontFamily: fonts.mono, color: colors.dark, background: colors.yellow, padding: '8px 14px', border }}>工作坊最高频卡点</span>
				</motion.div>

				<motion.h2 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ fontFamily: fonts.heading, fontSize: 38, fontWeight: 900, color: colors.white, marginTop: 14, lineHeight: 1.1 }}>
					Agent 卡住 / 改不动<span style={{ background: colors.red, color: colors.white, padding: '0 8px' }}>死循环</span>
				</motion.h2>

				{/* 顶部框定 */}
				<motion.div {...springIn} style={{ borderRadius: 18, marginTop: 12, background: '#0b0f1e', border: `2px solid ${colors.yellow}`, padding: '11px 18px', fontSize: 16.5, color: '#dfe3f0', lineHeight: 1.45 }}>
					这是工作坊<span style={{ color: colors.yellow, fontWeight: 800 }}>最高频的卡点</span>—— 卡住时别慌、别死磕，记住这 <span style={{ color: colors.yellow, fontWeight: 800 }}>5 招</span>。
				</motion.div>

				{/* 5 行卡片清单 */}
				<div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginTop: 16, flex: 1, minHeight: 0 }}>
					{moves.map((m, i) => (<motion.div key={m.n} initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45, delay: 0.25 + i * 0.1, ease: [0.16, 1, 0.3, 1] }} style={{ borderRadius: 18, display: 'flex', alignItems: 'stretch', gap: 14, background: colors.white, border, boxShadow: shadow, padding: '13px 18px' }}>
							<span style={{ borderRadius: 18, flexShrink: 0, width: 40, height: 40, alignSelf: 'center', background: m.color, border, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 19, fontWeight: 900, fontFamily: fonts.mono, color: m.color === colors.yellow || m.color === colors.green ? colors.black : colors.white }}>{m.n}</span>
							<div style={{ display: 'flex', alignItems: 'center', gap: 14, flex: 1, minWidth: 0 }}>
								<span style={{ flexShrink: 0, fontSize: 14.5, fontWeight: 700, fontFamily: fonts.mono, color: '#b0334a', textDecoration: 'line-through', textDecorationColor: '#e08' }}>{m.bad}</span>
								<span style={{ flexShrink: 0, fontSize: 20, fontWeight: 900, color: m.color }}>→</span>
								<span style={{ fontSize: 17, fontWeight: 800, color: '#1a1a2e', lineHeight: 1.25 }}>{m.good}</span>
							</div>
						</motion.div>))}
				</div>
			</Inner>
		</Slide>);
}
