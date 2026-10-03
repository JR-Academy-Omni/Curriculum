// Migrated teaching page; original source: lessons/vibe-coding-master-l2/src/components/slides/L2P01e_Components.tsx
import { useState } from 'react';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, Grid, CardSm, Stagger, StaggerItem } from '../courseUi';
import { motion } from 'framer-motion';
// 页面拆完 → 拆组件（notes/03-product-and-prd.md 3.3）
const components: {
    icon: string;
    label: string;
}[] = [
    { icon: '🧭', label: 'Header' },
    { icon: '📋', label: 'Sidebar' },
    { icon: '🃏', label: 'Card' },
    { icon: '📊', label: 'Table' },
    { icon: '📝', label: 'Form' },
    { icon: '🪟', label: 'Modal' },
    { icon: '🔽', label: 'Dropdown' },
    { icon: '🏷️', label: 'Tag' },
    { icon: '👤', label: 'Avatar' },
    { icon: '☰', label: 'Hamburger Menu' },
    { icon: '🪗', label: 'Accordion' },
    { icon: '🔔', label: 'Toast' },
    { icon: '📭', label: 'Empty State' },
    { icon: '🗂️', label: 'Tabs' },
    { icon: '🔘', label: 'Toggle' },
];
// 每个组件的实际长相 —— 不是线框图，是真的渲染出来的样子
function ComponentSample({ label }: {
    label: string;
}) {
    switch (label) {
        case 'Header':
            return (<div style={{ borderRadius: 18, width: 300, background: colors.white, border, boxShadow: shadow, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
					<div style={{ width: 22, height: 22, background: colors.dark }}/>
					<div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
						{[1, 2, 3].map((i) => <div key={i} style={{ width: 32, height: 8, background: '#ddd' }}/>)}
					</div>
				</div>);
        case 'Sidebar':
            return (<div style={{ borderRadius: 18, width: 160, background: colors.white, border, boxShadow: shadow, padding: '10px' }}>
					{['Dashboard', 'Customers', 'Orders', 'Settings'].map((t, i) => (<div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 8px', background: i === 0 ? colors.yellow : 'transparent', marginBottom: 4 }}>
							<div style={{ width: 12, height: 12, background: i === 0 ? colors.black : '#ccc' }}/>
							<span style={{ fontSize: 12, fontWeight: 800 }}>{t}</span>
						</div>))}
				</div>);
        case 'Card':
            return (<div style={{ borderRadius: 18, width: 200, background: colors.white, border, boxShadow: shadow }}>
					<div style={{ height: 70, background: '#eee' }}/>
					<div style={{ padding: 12 }}>
						<div style={{ fontSize: 14, fontWeight: 900 }}>产品标题</div>
						<div style={{ fontSize: 11, color: '#888', marginTop: 6 }}>一句话描述这个卡片是干什么的</div>
						<div style={{ marginTop: 8, display: 'inline-block', background: colors.blue, color: colors.white, fontSize: 10, fontWeight: 900, padding: '2px 8px' }}>标签</div>
					</div>
				</div>);
        case 'Table':
            return (<div style={{ borderRadius: 18, width: 260, background: colors.white, border, boxShadow: shadow, padding: 10 }}>
					<div style={{ display: 'flex', fontSize: 11, fontWeight: 900, color: '#888', borderBottom: '2px solid #000', paddingBottom: 6 }}>
						<span style={{ width: 90 }}>姓名</span><span style={{ width: 90 }}>电话</span><span>状态</span>
					</div>
					{[1, 2, 3].map((i) => (<div key={i} style={{ display: 'flex', fontSize: 12, padding: '6px 0', borderBottom: '1px solid #eee' }}>
							<span style={{ width: 90 }}>客户 {i}</span><span style={{ width: 90 }}>138****</span><span style={{ color: colors.green, fontWeight: 800 }}>正常</span>
						</div>))}
				</div>);
        case 'Form':
            return (<div style={{ borderRadius: 18, width: 200, background: colors.white, border, boxShadow: shadow, padding: 14 }}>
					{['姓名', '电话'].map((l) => (<div key={l} style={{ marginBottom: 10 }}>
							<div style={{ fontSize: 10, color: '#999', marginBottom: 3 }}>{l}</div>
							<div style={{ borderRadius: 18, height: 20, background: '#f0f0f0', border: '1px solid #ddd' }}/>
						</div>))}
					<div style={{ background: colors.green, textAlign: 'center', fontSize: 12, fontWeight: 900, padding: '6px 0', marginTop: 4 }}>提交</div>
				</div>);
        case 'Modal':
            return (<div style={{ borderRadius: 18, width: 260, height: 170, background: '#00000022', border, boxShadow: shadow, position: 'relative' }}>
					<div style={{ borderRadius: 18, position: 'absolute', inset: '20px 30px', background: colors.white, border, boxShadow: shadow, padding: 14, textAlign: 'center' }}>
						<div style={{ fontSize: 14, fontWeight: 900 }}>确定删除？</div>
						<div style={{ fontSize: 11, color: '#888', marginTop: 6 }}>此操作无法撤销</div>
						<div style={{ display: 'flex', gap: 8, marginTop: 10, justifyContent: 'center' }}>
							<div style={{ borderRadius: 18, border, padding: '4px 12px', fontSize: 11 }}>取消</div>
							<div style={{ borderRadius: 18, background: colors.red, color: colors.white, border, padding: '4px 12px', fontSize: 11, fontWeight: 900 }}>确定</div>
						</div>
					</div>
				</div>);
        case 'Dropdown':
            return (<div style={{ width: 180 }}>
					<div style={{ borderRadius: 18, background: colors.white, border, boxShadow: shadow, padding: '9px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
						<span style={{ fontSize: 13, fontWeight: 800 }}>请选择状态</span><span>▾</span>
					</div>
					<div style={{ borderRadius: 18, background: colors.white, border: `3px solid ${colors.black}`, borderTop: 'none' }}>
						{['进行中', '已完成', '已取消'].map((o, i) => (<div key={o} style={{ padding: '7px 12px', fontSize: 12, fontWeight: 700, background: i === 0 ? colors.yellow : 'transparent', borderBottom: i < 2 ? '1px solid #eee' : 'none' }}>{o}</div>))}
					</div>
				</div>);
        case 'Tag':
            return (<div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', maxWidth: 220 }}>
					{[{ t: '进行中', c: colors.blue }, { t: '已完成', c: colors.green }, { t: '已取消', c: colors.red }, { t: 'VIP', c: colors.purple }].map((tag) => (<div key={tag.t} style={{ background: tag.c, color: colors.white, fontSize: 12, fontWeight: 900, padding: '5px 12px', borderRadius: 999, border }}>{tag.t}</div>))}
				</div>);
        case 'Avatar':
            return (<div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
					{[{ t: '张', c: colors.red }, { t: '李', c: colors.blue }, { t: '王', c: colors.green }].map((a) => (<div key={a.t} style={{ width: 48, height: 48, borderRadius: 999, background: a.c, border, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 900, color: colors.white }}>{a.t}</div>))}
				</div>);
        case 'Hamburger Menu':
            return (<div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
					<div style={{ borderRadius: 18, width: 44, height: 44, background: colors.white, border, boxShadow: shadow, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
						{[1, 2, 3].map((i) => <div key={i} style={{ width: 22, height: 3, background: colors.black }}/>)}
					</div>
					<div style={{ fontSize: 20 }}>→</div>
					<div style={{ borderRadius: 18, width: 130, background: colors.white, border, boxShadow: shadow, padding: 10 }}>
						{['首页', '课程', '我的'].map((t, i) => (<div key={t} style={{ padding: '6px 8px', fontSize: 12, fontWeight: 800, background: i === 0 ? colors.yellow : 'transparent' }}>{t}</div>))}
					</div>
				</div>);
        case 'Accordion':
            return (<div style={{ width: 260 }}>
					{['这个多少钱？', '怎么退款？'].map((q, i) => (<div key={q} style={{ borderRadius: 18, border, boxShadow: i === 0 ? shadow : undefined, marginBottom: 6, background: colors.white }}>
							<div style={{ display: 'flex', justifyContent: 'space-between', padding: '9px 12px', background: i === 0 ? colors.yellow : '#fff', fontWeight: 800, fontSize: 12 }}>
								<span>{q}</span><span>{i === 0 ? '−' : '+'}</span>
							</div>
							{i === 0 && <div style={{ padding: '9px 12px', fontSize: 11, color: '#555', borderTop: '1px solid #eee' }}>点开才展开——省空间，一次只看一条。</div>}
						</div>))}
				</div>);
        case 'Toast':
            return (<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
					<div style={{ borderRadius: 18, display: 'flex', alignItems: 'center', gap: 10, background: colors.green, color: colors.black, border, boxShadow: shadow, padding: '10px 16px' }}>
						<span style={{ fontSize: 18 }}>✓</span>
						<span style={{ fontSize: 13, fontWeight: 900 }}>客户保存成功</span>
					</div>
					<div style={{ borderRadius: 18, display: 'flex', alignItems: 'center', gap: 10, background: colors.red, color: colors.white, border, boxShadow: shadow, padding: '10px 16px' }}>
						<span style={{ fontSize: 18 }}>✕</span>
						<span style={{ fontSize: 13, fontWeight: 900 }}>保存失败，请重试</span>
					</div>
				</div>);
        case 'Empty State':
            return (<div style={{ borderRadius: 18, width: 260, background: colors.white, border, boxShadow: shadow, padding: '30px 20px', textAlign: 'center' }}>
					<div style={{ fontSize: 36 }}>📭</div>
					<div style={{ marginTop: 10, fontSize: 14, fontWeight: 900, color: colors.black }}>还没有客户</div>
					<div style={{ marginTop: 4, fontSize: 11.5, color: '#888' }}>新增第一个客户开始使用</div>
					<div style={{ borderRadius: 18, marginTop: 12, display: 'inline-block', background: colors.green, border, padding: '6px 16px', fontSize: 12, fontWeight: 900 }}>+ 新建客户</div>
				</div>);
        case 'Tabs':
            return (<div style={{ borderRadius: 18, width: 300, background: colors.white, border, boxShadow: shadow }}>
					<div style={{ display: 'flex', borderBottom: `3px solid ${colors.black}` }}>
						{['基本信息', '订单', '跟进记录'].map((t, i) => (<div key={t} style={{ flex: 1, textAlign: 'center', padding: '10px 6px', fontSize: 12.5, fontWeight: 900, background: i === 0 ? colors.yellow : '#fff', borderRight: i < 2 ? '2px solid #000' : 'none' }}>
								{t}
							</div>))}
					</div>
					<div style={{ padding: 16, fontSize: 12, color: '#555' }}>当前显示"基本信息" tab 的内容...</div>
				</div>);
        case 'Toggle':
            return (<div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
						<div style={{ width: 52, height: 28, background: colors.green, border, borderRadius: 999, position: 'relative' }}>
							<div style={{ position: 'absolute', right: 2, top: 2, width: 20, height: 20, borderRadius: 999, background: colors.white, border: `2px solid ${colors.black}` }}/>
						</div>
						<span style={{ fontSize: 12, fontWeight: 900 }}>启用</span>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
						<div style={{ width: 52, height: 28, background: '#ddd', border, borderRadius: 999, position: 'relative' }}>
							<div style={{ position: 'absolute', left: 2, top: 2, width: 20, height: 20, borderRadius: 999, background: colors.white, border: `2px solid ${colors.black}` }}/>
						</div>
						<span style={{ fontSize: 12, fontWeight: 900 }}>禁用</span>
					</div>
				</div>);
        default:
            return null;
    }
}
export default function L2P01e_Components() {
    const [selected, setSelected] = useState(0);
    return (<Slide bg={colors.dark}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.yellow} color={colors.black}>拆产品 · 第三刀</Tag>
					<Title white size="42px" style={{ marginTop: 12 }}>
						页面拆完 → 拆<span style={{ color: colors.yellow }}>组件</span>
					</Title>
					<p style={{ fontSize: 15.5, color: '#dfe3f0', marginTop: 6, fontWeight: 700 }}>
						组件 = 可复用的 UI 砖块。<b style={{ color: colors.yellow }}>点一下卡片看真实长相</b>，跟 AI 沟通时报这些名词，比"做个好看的"精准 10 倍。
					</p>
				</motion.div>

				<div style={{ display: 'flex', gap: 22, marginTop: 18, alignItems: 'flex-start' }}>
					<Stagger style={{ flex: 1 }}>
						<Grid cols={4} gap={9}>
							{components.map((c, i) => (<StaggerItem key={c.label}>
									<div onClick={() => setSelected(i)} style={{ cursor: 'pointer' }}>
										<CardSm bg={selected === i ? colors.yellow : colors.white} style={{ textAlign: 'center', minHeight: 78, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
											<div style={{ fontSize: 22, lineHeight: 1 }}>{c.icon}</div>
											<div style={{ fontSize: 11.5, fontWeight: 800, color: colors.black }}>{c.label}</div>
										</CardSm>
									</div>
								</StaggerItem>))}
						</Grid>
					</Stagger>

					<motion.div key={selected} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} style={{ minWidth: 260, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#8890b0', fontWeight: 800 }}>
							{components[selected].label} 长这样 ↓
						</div>
						<ComponentSample label={components[selected].label}/>
					</motion.div>
				</div>
			</Inner>
		</Slide>);
}
