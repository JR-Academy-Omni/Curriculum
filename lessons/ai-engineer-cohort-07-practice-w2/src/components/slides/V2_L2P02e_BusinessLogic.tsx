// Migrated teaching page; original source: lessons/vibe-coding-master-l2/src/components/slides/L2P02e_BusinessLogic.tsx
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, springIn } from '../courseUi';
import { motion } from 'framer-motion';
const rules = [
    '如果 JD 为空，不允许生成分析',
    '如果简历为空，提示先上传',
    '如果匹配度低于 60%，输出 3 个最优先修改项',
    '如果用户点击“生成版本”，必须保留原简历，不覆盖',
    '如果 AI 没有证据，不允许编造项目经历',
];
const buckets = ['允许什么', '不允许什么', '状态怎么变', '异常怎么处理'];
// Business Logic：业务规则才是产品骨架
export default function L2P02e_BusinessLogic() {
    return (<Slide bg={colors.dark}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.red}>Business Logic</Tag>
					<Title white size="48px" style={{ marginTop: 12 }}>
						UI 是皮，<span style={{ color: colors.yellow }}>业务规则</span>才是产品骨架
					</Title>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '0.72fr 1.28fr', gap: 20, marginTop: 26, alignItems: 'stretch' }}>
					<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
						{buckets.map((b, i) => (<motion.div key={b} {...springIn} transition={{ ...springIn.transition, delay: 0.12 + i * 0.08 }} style={{ borderRadius: 18, background: colors.white, border, boxShadow: shadow, padding: '18px 16px', fontFamily: fonts.heading, fontSize: 25, fontWeight: 900, color: colors.black, display: 'flex', alignItems: 'center' }}>
								{b}
							</motion.div>))}
					</div>

					<motion.div {...springIn} transition={{ ...springIn.transition, delay: 0.24 }} style={{ borderRadius: 18, background: '#050816', border: `3px solid ${colors.white}`, boxShadow: shadow, padding: '20px 24px' }}>
						<div style={{ color: colors.yellow, fontFamily: fonts.mono, fontSize: 15, fontWeight: 900, marginBottom: 12 }}>例：AI 简历匹配器规则</div>
						<ul style={{ margin: 0, paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
							{rules.map((rule) => (<li key={rule} style={{ color: '#f8fafc', fontSize: 20, fontWeight: 750, lineHeight: 1.35 }}>{rule}</li>))}
						</ul>
					</motion.div>
				</div>

				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} style={{ borderRadius: 18, marginTop: 24, background: colors.yellow, color: colors.black, border, boxShadow: shadow, padding: '16px 24px', fontSize: 22, fontWeight: 900 }}>
					给 agent 写 PRD，不只写页面；必须写规则、状态、边界、异常。
				</motion.div>
			</Inner>
		</Slide>);
}
