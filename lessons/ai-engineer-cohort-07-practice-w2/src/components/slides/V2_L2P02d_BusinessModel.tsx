// Migrated teaching page; original source: lessons/vibe-coding-master-l2/src/components/slides/L2P02d_BusinessModel.tsx
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, springIn } from '../courseUi';
import { motion } from 'framer-motion';
const questions = [
    { q: '谁会用？', a: '真实使用者，不是“所有人”', color: colors.red },
    { q: '谁会付钱？', a: '用户本人 / 老板 / 家长 / 公司', color: colors.orange },
    { q: '为什么现在付？', a: '截止日期、损失、机会、强痛点', color: colors.blue },
    { q: '从哪里来？', a: '群、SEO、小红书、学校、内部流程', color: colors.green },
];
// Business Model 四问
export default function L2P02d_BusinessModel() {
    return (<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.dark}>Business Model · 极简版</Tag>
					<Title size="48px" style={{ marginTop: 12 }}>
						这个产品凭什么存在？<span style={{ color: colors.red }}>4 个问题</span>先问清
					</Title>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 14, marginTop: 28 }}>
					{questions.map((item, i) => (<motion.div key={item.q} {...springIn} transition={{ ...springIn.transition, delay: 0.12 + i * 0.1 }} style={{ borderRadius: 18, background: colors.white, border, boxShadow: shadow, padding: '22px 18px', minHeight: 210 }}>
							<div style={{ borderRadius: 18, width: 46, height: 46, background: item.color, border, marginBottom: 16 }}/>
							<div style={{ fontFamily: fonts.heading, fontSize: 29, fontWeight: 900, color: colors.black }}>{item.q}</div>
							<div style={{ marginTop: 12, fontSize: 17, fontWeight: 750, color: '#374151', lineHeight: 1.45 }}>{item.a}</div>
						</motion.div>))}
				</div>

				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }} style={{ borderRadius: 18, marginTop: 24, background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '18px 24px', fontSize: 20, fontWeight: 850, lineHeight: 1.45 }}>
					例：AI Assignment Debug 助手 = CS 一年级学生用；学生/家长付；due 前 48 小时最急；从课程群、学校论坛、小红书“作业 debug”获客。
				</motion.div>
			</Inner>
		</Slide>);
}
