// Migrated teaching page; original source: lessons/vibe-coding-master-l2/src/components/slides/L2P01b_IdeaVsNeed.tsx
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, springIn } from '../courseUi';
import { motion } from 'framer-motion';
const layers = [
    { n: '01', t: '想法', bad: '我想做一个 AI dashboard', good: '只是一个方向，还不是需求', color: colors.red },
    { n: '02', t: '功能', bad: '要登录、列表、图表、聊天框', good: '只是实现清单，还不知道值不值', color: colors.orange },
    { n: '03', t: '需求', bad: '用户每天手工整理 30 条咨询记录', good: '有用户、场景、痛点、成功标准', color: colors.blue },
    { n: '04', t: 'MVP', bad: '今晚先做 12 个模块', good: '今晚只跑通 1 条主流程', color: colors.green },
];
// 产品思维第一刀：想法不是需求
export default function L2P01b_IdeaVsNeed() {
    return (<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.dark}>Product Thinking · 第一刀</Tag>
					<Title size="48px" style={{ marginTop: 12 }}>
						<span style={{ color: colors.red }}>想法</span>不是需求，<span style={{ background: colors.yellow, padding: '0 8px' }}>功能</span>也不是需求
					</Title>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 24 }}>
					{layers.map((x, i) => (<motion.div key={x.n} {...springIn} transition={{ ...springIn.transition, delay: 0.1 + i * 0.09 }} style={{ borderRadius: 18, background: colors.white, border, boxShadow: shadow, padding: '18px 20px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
							<div style={{ borderRadius: 18, flexShrink: 0, width: 54, height: 54, background: x.color, border, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.mono, fontSize: 18, fontWeight: 900, color: x.color === colors.green ? colors.black : colors.white }}>
								{x.n}
							</div>
							<div style={{ flex: 1 }}>
								<div style={{ fontFamily: fonts.heading, fontSize: 24, fontWeight: 900, color: colors.black }}>{x.t}</div>
								<div style={{ marginTop: 8, fontSize: 15, fontWeight: 750, color: '#9f1239', textDecoration: 'line-through', lineHeight: 1.35 }}>{x.bad}</div>
								<div style={{ marginTop: 6, fontSize: 16, fontWeight: 800, color: '#111827', lineHeight: 1.35 }}>{x.good}</div>
							</div>
						</motion.div>))}
				</div>

				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.45 }} style={{ borderRadius: 18, marginTop: 22, background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '18px 24px', fontSize: 22, fontWeight: 900 }}>
					需求句式：为【谁】在【什么场景】解决【什么真痛】，做到【什么】算成功。
				</motion.div>
			</Inner>
		</Slide>);
}
