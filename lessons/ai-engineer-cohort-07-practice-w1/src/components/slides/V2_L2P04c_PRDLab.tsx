// Migrated teaching page; original source: lessons/vibe-coding-master-l2/src/components/slides/L2P04c_PRDLab.tsx
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, springIn } from '../courseUi';
import { motion } from 'framer-motion';
const steps = [
    { n: '01', t: '先写一句话需求', d: '为谁 / 解决什么痛 / 成功标准 / 不做什么', color: colors.red },
    { n: '02', t: '再填 PRD 六块', d: '目标&范围、页面&流程、数据&输入、模块拆解、红线验收、Action', color: colors.blue },
    { n: '03', t: '独立自查 2 分钟', d: '检查 Agent 是否需要猜测；将一处疑问贴到聊天区', color: colors.green },
];
const worksheet = `## Lab: 我的 PRD

我为【谁】解决【什么真痛】。
Must-have【一个核心动作】。Nice-to-have【锦上添花】。

Pages【列出页面，标 CRUD 类型】。
核心 Flow【A → B → C】。

数据字段【需要哪些字段】+ 关系【1对1/1对多/多对多】。
真实资料 / SoT: 【文件 / 链接 / 数据来源】。

这版明确不做:
- 【砍掉的功能】

验收方式:
打开【页面】 -> 点击【按钮】 -> 看到【结果】。`;
// Lab：学生自己写 PRD
export default function L2P04c_PRDLab() {
    return (<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', gap: 22 }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.red}>动手 Lab · 15 min</Tag>
					<Title size="48px" style={{ marginTop: 10 }}>
						现在不是听课：<span style={{ color: colors.red }}>每个人写自己的 PRD</span>
					</Title>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '0.82fr 1.18fr', gap: 20, alignItems: 'stretch', minHeight: 0 }}>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
						{steps.map((step, i) => (<motion.div key={step.n} {...springIn} transition={{ ...springIn.transition, delay: 0.12 + i * 0.1 }} style={{ borderRadius: 18, background: colors.white, border, boxShadow: shadow, padding: '18px 20px', display: 'flex', gap: 16, alignItems: 'center' }}>
								<div style={{ borderRadius: 18, flexShrink: 0, width: 52, height: 52, background: step.color, border, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.mono, fontSize: 18, fontWeight: 900, color: step.color === colors.green ? colors.black : colors.white }}>
									{step.n}
								</div>
								<div>
									<div style={{ fontFamily: fonts.heading, fontSize: 22, fontWeight: 900, color: colors.black }}>{step.t}</div>
									<div style={{ fontSize: 15, color: '#444', lineHeight: 1.45, marginTop: 4, fontWeight: 650 }}>{step.d}</div>
								</div>
							</motion.div>))}

						<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.45 }} style={{ borderRadius: 18, background: colors.yellow, border, boxShadow: shadow, padding: '18px 20px', fontSize: 20, fontWeight: 900, color: colors.black, lineHeight: 1.35 }}>
							过关标准：你能把这份 PRD 直接贴给 Claude Code / Codex，让它先出实现计划。
						</motion.div>
					</div>

					<motion.div initial={{ opacity: 0, x: 36 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.22, duration: 0.5, ease: [0.16, 1, 0.3, 1] }} style={{ borderRadius: 18, background: '#111827', border, boxShadow: shadow, padding: '16px 18px', display: 'flex', flexDirection: 'column' }}>
						<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 15, color: colors.yellow, fontWeight: 900 }}>worksheet.md</div>
							<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#d1d5db', fontWeight: 800 }}>现场照填，不要写长文</div>
						</div>
						<pre style={{
            borderRadius: 18,
            margin: 0,
            background: '#050816',
            border: `2px solid ${colors.white}`,
            color: '#f8fafc',
            padding: '18px 20px',
            fontFamily: fonts.mono,
            fontSize: 17,
            lineHeight: 1.55,
            whiteSpace: 'pre-wrap',
            flex: 1
        }}>
							{worksheet}
						</pre>
					</motion.div>
				</div>
			</Inner>
		</Slide>);
}
