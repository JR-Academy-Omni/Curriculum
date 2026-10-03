// Migrated teaching page; original source: lessons/vibe-coding-master-l2/src/components/slides/L2P04e_RulesList.tsx
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, springIn } from '../courseUi';
import { motion } from 'framer-motion';
const principles = [
    {
        t: 'SOLID',
        d: '职责清楚，模块边界清楚；不要把 UI、数据、业务规则塞进一个函数。',
        c: colors.blue,
    },
    {
        t: 'DRY',
        d: 'Don\'t Repeat Yourself：同一份知识只能有一个权威表达，重复逻辑抽成函数 / 常量 / 配置。',
        c: colors.red,
    },
    {
        t: 'KISS',
        d: 'Keep It Simple：先要最简单能跑的设计，不要炫技 one-liner、过早抽象、没必要的模式。',
        c: colors.green,
    },
    {
        t: 'Readability',
        d: '今天的读者通常是未来的你，或者下一个 LLM；变量名、函数名、文件边界都要一眼能懂。',
        c: colors.orange,
    },
];
const loop = [
    ['Prompt it in', 'Follow SOLID, DRY, KISS, and readability rules above.'],
    ['Audit output', '按 10-point readability checklist 检查每个 PR / 每次 agent 输出。'],
    ['Refine rules', '如果 LLM 违反规则，把规则写得更具体，或加一条小 inline comment 后重试。'],
];
// Rules List：PRD 之后，给 agent 的编码与可读性约束
export default function L2P04e_RulesList() {
    return (<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', gap: 22 }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
					<Tag bg={colors.red}>Rules List</Tag>
					<Title size="46px" style={{ marginTop: 10 }}>
						PRD 告诉 agent 做什么，<span style={{ color: colors.red }}>Rules 告诉它怎么做才算好</span>
					</Title>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 20, alignItems: 'stretch', minHeight: 0 }}>
					<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
						{principles.map((p, i) => (<motion.div key={p.t} {...springIn} transition={{ ...springIn.transition, delay: 0.08 + i * 0.08 }} style={{ borderRadius: 18, background: colors.white, border, boxShadow: shadow, padding: '19px 20px', minHeight: 190 }}>
								<div style={{ borderRadius: 18, display: 'inline-block', background: p.c, color: p.c === colors.green ? colors.black : colors.white, border, padding: '6px 12px', fontFamily: fonts.mono, fontSize: 18, fontWeight: 900 }}>
									{p.t}
								</div>
								<div style={{ marginTop: 14, fontSize: 18, fontWeight: 780, lineHeight: 1.42, color: '#1f2937' }}>{p.d}</div>
							</motion.div>))}
					</div>

					<motion.div initial={{ opacity: 0, x: 36 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.45 }} style={{ borderRadius: 18, background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '22px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
						<div>
							<div style={{ fontFamily: fonts.heading, fontSize: 30, fontWeight: 900, color: colors.yellow }}>Rules 的使用循环</div>
							<div style={{ marginTop: 10, fontSize: 17, color: '#d1d5db', fontWeight: 750, lineHeight: 1.45 }}>
								不是写一次就完。每次 agent 写坏了，都要把坏法沉淀成下一条规则。
							</div>
						</div>

						<div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 20 }}>
							{loop.map(([t, d], i) => (<div key={t} style={{ borderRadius: 18, background: '#050816', border: `2px solid ${colors.white}`, padding: '14px 16px' }}>
									<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, color: colors.green }}>0{i + 1} · {t}</div>
									<div style={{ marginTop: 5, fontSize: 16, fontWeight: 800, lineHeight: 1.4 }}>{d}</div>
								</div>))}
						</div>

						<div style={{ borderRadius: 18, marginTop: 18, background: colors.yellow, color: colors.black, border, padding: '14px 16px', fontSize: 18, fontWeight: 900, lineHeight: 1.35 }}>
							课堂口令：先把 rules 贴进去，再让 agent 出 plan；不按 rules 写，就修 rules 后重跑。
						</div>
					</motion.div>
				</div>
			</Inner>
		</Slide>);
}
