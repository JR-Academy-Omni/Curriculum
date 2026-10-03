// Migrated teaching page; original source: lessons/vibe-coding-master-l2/src/components/slides/L2P02f_ToPRD.tsx
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, springIn } from '../courseUi';
import { motion } from 'framer-motion';
const analysis = [
    {
        t: 'Product Thinking',
        q: '这个产品到底在改变谁的什么行为？',
        out: '用户、场景、真痛、成功标准',
        color: colors.red,
    },
    {
        t: 'Business Model',
        q: '这个东西为什么值得存在？',
        out: '谁用、谁付钱、为什么现在、从哪里来',
        color: colors.green,
    },
    {
        t: 'Business Logic',
        q: '产品运行时必须遵守什么规则？',
        out: '允许/禁止、状态流转、异常处理、数据边界',
        color: colors.blue,
    },
];
// 从 Product Thinking 到 PRD 的翻译表
export default function L2P02f_ToPRD() {
    return (<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.dark}>工程师的新能力</Tag>
					<Title size="48px" style={{ marginTop: 12 }}>
						你要会分析产品，<span style={{ color: colors.red }}>因为需求文档现在要你自己产出</span>
					</Title>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginTop: 26 }}>
					{analysis.map((item, i) => (<motion.div key={item.t} {...springIn} transition={{ ...springIn.transition, delay: 0.1 + i * 0.1 }} style={{ borderRadius: 18, background: colors.white, border, boxShadow: shadow, padding: '20px 20px 18px', minHeight: 260 }}>
							<div style={{ borderRadius: 18, width: 48, height: 48, background: item.color, border, marginBottom: 14 }}/>
							<div style={{ fontFamily: fonts.heading, fontSize: 26, fontWeight: 900, color: colors.black }}>{item.t}</div>
							<div style={{ marginTop: 10, fontSize: 18, fontWeight: 850, color: '#111827', lineHeight: 1.35 }}>{item.q}</div>
							<div style={{ borderRadius: 18, marginTop: 14, background: colors.warmBg, border, padding: '12px 13px', fontSize: 15.5, fontWeight: 800, color: '#374151', lineHeight: 1.35 }}>
								落到 PRD：{item.out}
							</div>
						</motion.div>))}
				</div>

				<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.52 }} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 22 }}>
					<div style={{ borderRadius: 18, background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '16px 20px', fontSize: 20, fontWeight: 900, lineHeight: 1.35 }}>
						过去：PM / BA 给你 ticket，你负责实现
					</div>
					<div style={{ borderRadius: 18, background: colors.yellow, color: colors.black, border, boxShadow: shadow, padding: '16px 20px', fontSize: 20, fontWeight: 900, lineHeight: 1.35 }}>
						现在：你要把问题分析清楚，写成 Agent 能执行的 PRD
					</div>
				</motion.div>

				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.68 }} style={{ borderRadius: 18, marginTop: 22, background: colors.red, color: colors.white, border, boxShadow: shadow, padding: '18px 24px', fontSize: 22, fontWeight: 900 }}>
					工程师会不会写代码不再够；你要能把「模糊问题」变成「清楚需求」。
				</motion.div>
			</Inner>
		</Slide>);
}
