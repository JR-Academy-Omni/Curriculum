// Migrated teaching page; original source: lessons/vibe-coding-master-l2/src/components/slides/L2P01g_PageAnatomy.tsx
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../courseUi';
import { motion } from 'framer-motion';
// 一个页面内部怎么叠出来的（营销型首页的典型结构）
const sections = [
    { t: 'Header', zh: '顶部导航', h: 40, color: colors.dark, d: 'Logo + 导航菜单 + 登录/CTA 按钮' },
    { t: 'Hero', zh: '首屏主视觉', h: 80, color: colors.red, d: '大标题 + 一句话卖点 + 主 CTA 按钮' },
    { t: '金刚区', zh: 'Icon Grid', h: 44, color: colors.yellow, d: '6-8 个图标格，直达高频功能。英文没有统一叫法，常说 Icon Grid / Quick Access Grid（淘宝/支付宝/小程序都有）' },
    { t: 'Feature Section', zh: '功能/卖点区块', h: 68, color: colors.blue, d: '图文交替或卡片网格，逐条讲清楚能做什么' },
    { t: 'Social Proof', zh: '信任背书', h: 44, color: colors.purple, d: '"已服务 10 万+ 用户" 数字 + logo 墙 + 用户评价' },
    { t: 'CTA Section', zh: '行动号召', h: 44, color: colors.green, d: '深色/高对比背景 + 一个大按钮，逼用户做决定' },
    { t: 'Footer', zh: '页脚', h: 56, color: colors.dark, d: '链接列 + 版权 + 联系方式 + 社交媒体图标' },
];
export default function L2P01g_PageAnatomy() {
    return (<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.dark}>拆产品 · 页面内部</Tag>
					<Title size="42px" style={{ marginTop: 12 }}>
						一个页面怎么叠出来：<span style={{ background: colors.yellow, padding: '0 8px' }}>Page Anatomy</span>
					</Title>
					<p style={{ fontSize: 15.5, color: '#555', marginTop: 6, fontWeight: 700 }}>
						拆完"有哪些页面"，每个页面内部还要拆"从上到下有哪些区块"——这样跟 AI 说"做个 Hero + 金刚区 + 3 个 Feature Section"，它秒懂结构。
					</p>
				</motion.div>

				<div style={{ display: 'flex', gap: 24, marginTop: 18, alignItems: 'flex-start' }}>
					{/* 左：叠起来的页面线框 */}
					<div style={{ borderRadius: 18, width: 420, background: colors.white, border, boxShadow: shadow, flexShrink: 0 }}>
						<div style={{ display: 'flex', gap: 6, padding: '8px 10px', borderBottom: `2px solid ${colors.black}`, background: '#f4f4f4' }}>
							<span style={{ width: 9, height: 9, borderRadius: 99, background: colors.red, display: 'inline-block' }}/>
							<span style={{ width: 9, height: 9, borderRadius: 99, background: colors.yellow, display: 'inline-block' }}/>
							<span style={{ width: 9, height: 9, borderRadius: 99, background: colors.green, display: 'inline-block' }}/>
						</div>
						<div style={{ display: 'flex', flexDirection: 'column' }}>
							{sections.map((s, i) => {
            const darkText = s.color === colors.yellow || s.color === colors.green;
            return (<motion.div key={s.t} initial={{ opacity: 0, scaleY: 0 }} animate={{ opacity: 1, scaleY: 1 }} transition={{ delay: 0.1 + i * 0.08, duration: 0.3 }} style={{
                    height: s.h,
                    background: s.color,
                    borderBottom: i < sections.length - 1 ? `2px solid ${colors.black}` : 'none',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transformOrigin: 'top',
                }}>
										<span style={{ fontSize: 13, fontWeight: 900, color: darkText ? colors.black : colors.white, fontFamily: fonts.mono }}>{s.t}</span>
									</motion.div>);
        })}
						</div>
					</div>

					{/* 右：逐条说明 */}
					<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
						{sections.map((s, i) => (<motion.div key={s.t} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.08 }} style={{ borderRadius: 18, display: 'flex', gap: 12, alignItems: 'center', background: colors.white, border, padding: '9px 14px' }}>
								<div style={{ borderRadius: 18, width: 14, height: 14, background: s.color, border: `2px solid ${colors.black}`, flexShrink: 0 }}/>
								<div style={{ flexShrink: 0, width: 76, fontSize: 13, fontWeight: 900, fontFamily: fonts.mono }}>{s.t}</div>
								<div style={{ flexShrink: 0, width: 76, fontSize: 12, fontWeight: 800, color: '#666' }}>{s.zh}</div>
								<div style={{ fontSize: 12.5, color: '#444', fontWeight: 650 }}>{s.d}</div>
							</motion.div>))}
					</div>
				</div>

				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.45 }} style={{ borderRadius: 18, marginTop: 16, background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '13px 20px' }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.yellow, fontWeight: 900 }}>系统页面不一样 · </span>
					<span style={{ fontSize: 15, fontWeight: 700 }}>
						客户列表这类 CRUD/Admin 页面没有 Hero / 金刚区这些营销区块——结构是「工具栏 + 筛选区 + 列表/表格 + 翻页」，更简单，别照搬营销页那一套。
					</span>
				</motion.div>
			</Inner>
		</Slide>);
}
