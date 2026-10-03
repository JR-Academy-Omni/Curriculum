// Migrated teaching page; original source: lessons/vibe-coding-master-l2/src/components/slides/L2P01f_Flows.tsx
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../courseUi';
import { motion } from 'framer-motion';
// 流程一步（横向）
function FlowStep({ text, hint, color, last }: {
    text: string;
    hint?: string;
    color: string;
    last?: boolean;
}) {
    return (<div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
			<div style={{ borderRadius: 18, background: color, border, boxShadow: shadow, padding: '12px 16px', color: colors.white, whiteSpace: 'nowrap', minWidth: 132, textAlign: 'center' }}>
				<div style={{ fontSize: 15.5, fontWeight: 900 }}>{text}</div>
				{hint && <div style={{ marginTop: 2, fontSize: 11.5, fontWeight: 760, opacity: 0.86 }}>{hint}</div>}
			</div>
			{!last && <span style={{ fontSize: 22, fontWeight: 900, color: colors.dark }}>→</span>}
		</div>);
}
// 光有页面不够，还要有 Flow（notes/03-product-and-prd.md 3.4）
export default function L2P01f_Flows() {
    return (<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.dark}>拆产品 · 第四刀</Tag>
					<Title size="46px" style={{ marginTop: 12 }}>
						光有页面不够，还要有<span style={{ background: colors.yellow, padding: '0 8px' }}>Flow</span>
					</Title>
					<p style={{ fontSize: 17, color: '#555', marginTop: 8, fontWeight: 700 }}>
						Flow = 用户从 Page A 到 Page B 的路径 + 触发条件。没有 Flow，AI 只会做静态页面，不会做"会动的产品"。
					</p>
				</motion.div>

				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.45 }} style={{ marginTop: 26 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 14, color: '#777', fontWeight: 800, marginBottom: 10 }}>Order Flow · Mini CRM example</div>
					<div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
						<FlowStep text="Customer Detail" hint="客户详情" color={colors.blue}/>
						<FlowStep text="Create Order" hint="新建订单" color={colors.purple}/>
						<FlowStep text="Select Product" hint="选择产品" color={colors.orange}/>
						<FlowStep text="Confirm" hint="确认" color={colors.red}/>
						<FlowStep text="Order Success" hint="订单成功" color={colors.green} last/>
					</div>
				</motion.div>

				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} style={{ marginTop: 22, display: 'flex', gap: 14 }}>
					<div style={{ borderRadius: 18, flex: 1, background: '#fff', border, padding: '12px 16px', fontSize: 14.5, fontWeight: 700, color: '#444' }}>
						<b style={{ color: colors.dark }}>Login Flow:</b> Guest → Login Page → Input → Verify → Home
					</div>
					<div style={{ borderRadius: 18, flex: 1, background: '#fff', border, padding: '12px 16px', fontSize: 14.5, fontWeight: 700, color: '#444' }}>
						<b style={{ color: colors.dark }}>Approval Flow:</b> Submit → Pending → Approved / Rejected → Notify
					</div>
				</motion.div>

				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95, duration: 0.45 }} style={{ borderRadius: 18, marginTop: 22, background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '16px 22px' }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 14, color: colors.yellow, fontWeight: 900 }}>讲师提示 · </span>
					<span style={{ fontSize: 17, fontWeight: 700 }}>
						流程图工具推荐 Mermaid（Markdown 直接写）——AI 看得懂，人也看得懂，写 PRD 时直接贴进去。
					</span>
				</motion.div>
			</Inner>
		</Slide>);
}
