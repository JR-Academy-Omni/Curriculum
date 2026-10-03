// Migrated teaching page; original source: lessons/vibe-coding-master-l2/src/components/slides/L2P04b_PRDQuality.tsx
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, springIn } from '../courseUi';
import { motion } from 'framer-motion';
const checks = [
    { n: '1', t: '用户 + 场景', d: '谁在什么时刻用；不是泛泛写“用户需要”。', color: colors.red },
    { n: '2', t: '真痛 + 成功标准', d: '痛点能复述，成功能判断；最好有动作或数字。', color: colors.orange },
    { n: '3', t: '输入事实', d: '数据、素材、现有系统、限制条件都指向 SoT。', color: colors.purple },
    { n: '4', t: '输出形态', d: '用户看到哪些页面、按钮、结果、提示和状态。', color: colors.blue },
    { n: '5', t: '范围边界', d: 'MVP 必做、可选、明确不做；今晚只留一条主流程。', color: colors.green },
    { n: '6', t: '验收方式', d: '怎么打开、点什么、看到什么，才算 agent 做对。', color: colors.dark },
];
// 合格 PRD 的 6 个硬指标
export default function L2P04b_PRDQuality() {
    return (<Slide bg={colors.dark}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.yellow} color={colors.black}>PRD 自检表</Tag>
					<Title white size="48px" style={{ marginTop: 12 }}>
						一个能交给 Agent 的 PRD，<span style={{ color: colors.yellow }}>必须具备什么？</span>
					</Title>
					<p style={{ fontSize: 18, color: '#dfe3f0', marginTop: 8, fontWeight: 700 }}>
						写完以后逐条打钩。少一条，agent 就会替你脑补。
					</p>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, marginTop: 24 }}>
					{checks.map((item, i) => (<motion.div key={item.n} {...springIn} transition={{ ...springIn.transition, delay: 0.12 + i * 0.08 }} style={{ borderRadius: 18, background: colors.white, border, boxShadow: shadow, padding: '18px 18px 16px', minHeight: 138 }}>
							<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
								<div style={{
                borderRadius: 18,
                width: 44,
                height: 44,
                background: item.color,
                border,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: item.color === colors.green ? colors.black : colors.white,
                fontFamily: fonts.mono,
                fontSize: 18,
                fontWeight: 900
            }}>
									{item.n}
								</div>
								<div style={{ fontFamily: fonts.heading, fontSize: 21, fontWeight: 900, color: colors.black }}>
									{item.t}
								</div>
							</div>
							<div style={{ fontSize: 15, color: '#333', lineHeight: 1.45, marginTop: 12, fontWeight: 650 }}>
								{item.d}
							</div>
						</motion.div>))}
				</div>

				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75, duration: 0.45 }} style={{ borderRadius: 18, marginTop: 22, background: colors.red, border, boxShadow: shadow, padding: '16px 24px', color: colors.white, fontSize: 22, fontWeight: 900 }}>
					现场口令：把 PRD 读完，agent 不需要追问就能开工；你也知道怎么验收。
				</motion.div>
			</Inner>
		</Slide>);
}
