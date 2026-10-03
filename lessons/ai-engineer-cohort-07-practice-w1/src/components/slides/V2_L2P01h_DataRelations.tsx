// Migrated teaching page; original source: lessons/vibe-coding-master-l2/src/components/slides/L2P01h_DataRelations.tsx
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../courseUi';
import { motion } from 'framer-motion';
// 一个实体框
function Entity({ name, en, fields, color }: {
    name: string;
    en: string;
    fields: string[];
    color: string;
}) {
    return (<div style={{ borderRadius: 18, width: 200, background: colors.white, border, boxShadow: shadow, flexShrink: 0 }}>
			<div style={{ background: color, borderBottom: `3px solid ${colors.black}`, padding: '8px 12px' }}>
				<div style={{ fontSize: 16, fontWeight: 900, color: colors.white }}>{name}</div>
				<div style={{ fontSize: 11, fontFamily: fonts.mono, color: '#ffffffcc', fontWeight: 700 }}>{en}</div>
			</div>
			<div style={{ padding: '10px 12px' }}>
				{fields.map((f) => (<div key={f} style={{ fontSize: 12.5, fontFamily: fonts.mono, color: '#374151', padding: '3px 0', borderBottom: '1px dashed #eee' }}>{f}</div>))}
			</div>
		</div>);
}
// 数据关系：先画关系，再定字段（notes/03-product-and-prd.md 3.3 数据层的自然延伸）
export default function L2P01h_DataRelations() {
    return (<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', gap: 0 }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.dark}>拆产品 · 数据层</Tag>
					<Title size="42px" style={{ marginTop: 12 }}>
						数据怎么想：<span style={{ background: colors.yellow, padding: '0 8px' }}>先画关系</span>，再定字段
					</Title>
					<p style={{ fontSize: 15.5, color: '#555', marginTop: 6, fontWeight: 700 }}>
						顺序反了，AI 会给你建一堆乱七八糟对不上的表。用 Mini CRM 举例：
					</p>
				</motion.div>

				<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 26, justifyContent: 'center' }}>
					<Entity name="客户" en="Customer" color={colors.blue} fields={['id', '姓名', '电话', '状态']}/>

					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, flexShrink: 0, padding: '0 6px' }}>
						<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, color: colors.dark }}>1</span>
						<span style={{ fontSize: 22, fontWeight: 900, color: colors.dark }}>──→</span>
						<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, color: colors.dark }}>N</span>
					</div>

					<Entity name="订单" en="Order" color={colors.purple} fields={['id', 'customer_id', '商品', '金额', '状态']}/>
				</div>

				<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 16, justifyContent: 'center' }}>
					<div style={{ width: 200, flexShrink: 0 }}/>
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, flexShrink: 0, padding: '0 6px', transform: 'rotate(90deg)' }}>
						<span style={{ fontSize: 22, fontWeight: 900, color: colors.dark }}>──→</span>
					</div>
					<div style={{ width: 200, flexShrink: 0 }}/>
				</div>

				<div style={{ display: 'flex', justifyContent: 'center', marginTop: -6 }}>
					<Entity name="跟进记录" en="Note" color={colors.green} fields={['id', 'customer_id', '内容', '时间']}/>
				</div>

				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.45 }} style={{ marginTop: 22, display: 'flex', gap: 12 }}>
					<div style={{ borderRadius: 18, flex: 1, background: '#fff', border, padding: '12px 16px', fontSize: 13.5, fontWeight: 700, color: '#444' }}>
						<b style={{ color: colors.dark }}>1 对 1</b>（少见）：一个客户一份合同
					</div>
					<div style={{ borderRadius: 18, flex: 1, background: colors.yellow, border, padding: '12px 16px', fontSize: 13.5, fontWeight: 900, color: colors.black }}>
						<b>1 对多</b>（最常见）：外键放在"多"的一方（客户id 放在订单表里）
					</div>
					<div style={{ borderRadius: 18, flex: 1, background: '#fff', border, padding: '12px 16px', fontSize: 13.5, fontWeight: 700, color: '#444' }}>
						<b style={{ color: colors.dark }}>多对多</b>：需要一张中间表（如"订单-商品"）
					</div>
				</motion.div>

				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.45 }} style={{ borderRadius: 18, marginTop: 12, background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '13px 20px' }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.yellow, fontWeight: 900 }}>跟 AI 这么说 · </span>
					<span style={{ fontSize: 15, fontWeight: 700 }}>
						"客户和订单是一对多，订单表里存 customer_id 外键" —— 关系讲清楚了，字段和表结构 AI 自己就能推出来。
					</span>
				</motion.div>
			</Inner>
		</Slide>);
}
