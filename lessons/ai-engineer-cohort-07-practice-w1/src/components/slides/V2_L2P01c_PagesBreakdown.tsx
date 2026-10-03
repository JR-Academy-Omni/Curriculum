// Migrated teaching page; original source: lessons/vibe-coding-master-l2/src/components/slides/L2P01c_PagesBreakdown.tsx
import { useState } from 'react';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, Grid, CardSm, Stagger, StaggerItem } from '../courseUi';
import { PageMock, type MockKind } from '../PageMock';
import { motion } from 'framer-motion';
// 常见页面类型 —— 拆解任意 Digital Product 的第一刀
const pages: {
    icon: string;
    label: string;
    kind: MockKind;
}[] = [
    { icon: '📝', label: 'Blog', kind: 'list' },
    { icon: '✉️', label: 'Contact Us', kind: 'form' },
    { icon: '💼', label: 'Careers', kind: 'list' },
    { icon: '👥', label: 'Team', kind: 'grid' },
    { icon: '🚫', label: '404', kind: 'error' },
    { icon: '📰', label: 'Blog Post', kind: 'detail' },
    { icon: '✋', label: 'Sign up', kind: 'form' },
    { icon: '❓', label: 'FAQ', kind: 'accordion' },
    { icon: '💰', label: 'Pricing', kind: 'grid' },
    { icon: '🛒', label: 'Cart', kind: 'cart' },
    { icon: '🔑', label: 'Login', kind: 'form' },
    { icon: '🔍', label: 'Search', kind: 'search' },
];
// 分析一个 Digital Product：本质就是一堆 Pages（notes/03-product-and-prd.md 3.1）
export default function L2P01c_PagesBreakdown() {
    const [selected, setSelected] = useState(0);
    return (<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.dark}>拆产品 · 第一刀</Tag>
					<Title size="42px" style={{ marginTop: 12 }}>
						分析一个 Digital Product：本质就是<span style={{ background: colors.yellow, padding: '0 8px' }}>一堆 Pages</span>
					</Title>
					<p style={{ fontSize: 15.5, color: '#555', marginTop: 6, fontWeight: 700 }}>
						不要把"产品"想得太玄——它就是浏览器里的一堆 URL。<b>点一下卡片看例子</b>，更直观。
					</p>
				</motion.div>

				<div style={{ display: 'flex', gap: 22, marginTop: 16, alignItems: 'flex-start' }}>
					<Stagger style={{ flex: 1 }}>
						<Grid cols={4} gap={10}>
							{pages.map((p, i) => (<StaggerItem key={p.label}>
									<div onClick={() => setSelected(i)} style={{ cursor: 'pointer' }}>
										<CardSm bg={selected === i ? colors.yellow : colors.white} style={{ textAlign: 'center', minHeight: 84, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
											<div style={{ fontSize: 26, lineHeight: 1 }}>{p.icon}</div>
											<div style={{ fontSize: 14, fontWeight: 800, color: colors.black }}>{p.label}</div>
										</CardSm>
									</div>
								</StaggerItem>))}
						</Grid>
					</Stagger>

					<motion.div key={selected} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#888', fontWeight: 800, marginBottom: 8, textAlign: 'center' }}>
							{pages[selected].label} 长这样 ↓
						</div>
						<PageMock kind={pages[selected].kind}/>
					</motion.div>
				</div>

				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.45 }} style={{ borderRadius: 18, marginTop: 16, background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '14px 20px' }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.yellow, fontWeight: 900 }}>电商例子 · </span>
					<span style={{ fontSize: 15.5, fontWeight: 700 }}>
						首页 + 商品列表 + 商品详情 + 购物车 + 下单 + 订单列表 + 个人中心 —— 7 个页面就是一份 PRD 的骨架。
					</span>
				</motion.div>
			</Inner>
		</Slide>);
}
