import { Page, Head, AppendixBadge, colors, radii } from '../deck';
import { motion } from 'framer-motion';

/** A3 · 诚实是一种维护手段 */
const RULES = [
	{ t: '缺口不许用合理的猜测去填', s: '一个看起来完整的文件，比一个明说「这里还没定」的文件危险得多。' },
	{ t: '每次把缺口总数贴在改动摘要上，后面跟一句「这是故意的」', s: '让缺口可见，而不是让它看起来像疏忽。' },
	{ t: '文件状态标成「生效」之前，不许残留任何缺口', s: '这是这套东西唯一一个会堵住人的地方，也是它真正的产出所在。', key: true },
];

export default function L14A3_Honesty() {
	return (
		<Page>
			<AppendixBadge label="A3 · 诚实是一种维护手段" />
			<Head sub="这三条看起来像态度，其实是机制。">三条，第三条是会堵住人的那条</Head>

			<div style={{ display: 'flex', flexDirection: 'column', gap: 16, flex: 1, minHeight: 0 }}>
				{RULES.map((r, i) => (
					<motion.div
						key={r.t}
						initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.15 + i * 0.14, duration: 0.4 }}
						style={{
							flex: r.key ? 1.3 : 1, padding: '22px 26px', borderRadius: radii.panel,
							border: `2px solid ${colors.dark}`,
							background: r.key ? colors.dark : colors.white,
							color: r.key ? colors.white : colors.black,
							boxShadow: r.key ? `10px 10px 0 rgba(255,222,89,.95)` : `6px 6px 0 rgba(255,222,89,.78)`,
							display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10,
						}}
					>
						<div style={{ fontSize: r.key ? 29 : 25, fontWeight: 900, lineHeight: 1.35 }}>{r.t}</div>
						<div style={{ fontSize: 20, lineHeight: 1.55, opacity: .78 }}>{r.s}</div>
					</motion.div>
				))}
			</div>
		</Page>
	);
}
