// Migrated teaching page; original source: lessons/vibe-coding-master-l2/src/components/slides/L2P02c_UserBehavior.tsx
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, springIn } from '../courseUi';
import { motion } from 'framer-motion';
const rows = [
    { left: '做一个 AI 简历优化工具', right: '让投 entry-level IT 岗的学生，15 分钟内把泛泛简历改成匹配某个 JD 的版本，并敢拿去投递' },
    { left: '做一个 AI 学习助手', right: '让 Python 初学者每天学完后，生成 3 道复习题 + 明天 1 个任务，并第二天真的回来做' },
    { left: '做一个客户管理 dashboard', right: '让销售每天少漏跟进 5 个客户，并在打开页面 30 秒内知道今天先联系谁' },
];
// 产品不是功能集合，是用户行为改变
export default function L2P02c_UserBehavior() {
    return (<Slide bg={colors.dark}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.yellow} color={colors.black}>Product Thinking · 行为视角</Tag>
					<Title white size="48px" style={{ marginTop: 12 }}>
						产品不是功能集合，<span style={{ color: colors.yellow }}>是用户行为改变</span>
					</Title>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '0.72fr 1.28fr', gap: 16, marginTop: 26 }}>
					<motion.div {...springIn} style={{ borderRadius: 18, background: colors.red, border, boxShadow: shadow, padding: '16px 20px', fontFamily: fonts.heading, fontSize: 26, fontWeight: 900, color: colors.white }}>
						功能视角
					</motion.div>
					<motion.div {...springIn} transition={{ ...springIn.transition, delay: 0.08 }} style={{ borderRadius: 18, background: colors.green, border, boxShadow: shadow, padding: '16px 20px', fontFamily: fonts.heading, fontSize: 26, fontWeight: 900, color: colors.black }}>
						产品视角
					</motion.div>
					{rows.map((row, i) => (<motion.div key={row.left} style={{ display: 'contents' }}>
							<div style={{ borderRadius: 18, background: '#1f2937', border: `3px solid ${colors.red}`, padding: '18px 20px', fontSize: 21, fontWeight: 800, color: '#f8fafc', lineHeight: 1.35 }}>
								{row.left}
							</div>
							<div style={{ borderRadius: 18, background: colors.white, border, boxShadow: shadow, padding: '18px 20px', fontSize: 21, fontWeight: 850, color: colors.black, lineHeight: 1.35 }}>
								{row.right}
							</div>
						</motion.div>))}
				</div>

				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} style={{ borderRadius: 18, marginTop: 24, background: colors.yellow, color: colors.black, border, boxShadow: shadow, padding: '16px 24px', fontSize: 22, fontWeight: 900 }}>
					问自己：这个产品让用户从什么旧行为，变成什么新行为？
				</motion.div>
			</Inner>
		</Slide>);
}
