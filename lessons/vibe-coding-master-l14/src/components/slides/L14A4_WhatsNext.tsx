import { Page, Head, AppendixBadge, colors, radii } from '../deck';
import { motion } from 'framer-motion';

/**
 * A4 · 然后呢（附录，课上不讲）
 * 🔴 这一页只在学员主动问「后面还有什么」时翻。
 *   不许在正课里提前出现 —— 正课的收口必须自己站住。
 */
export default function L14A4_WhatsNext() {
	return (
		<Page>
			<AppendixBadge label="A4 · 然后呢" />
			<Head sub="今天这一整节，给的全部是「事前的批准」。">今天只回答了一半</Head>

			<div style={{ display: 'flex', gap: 22, flex: 1, minHeight: 0 }}>
				<motion.div
					initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.42 }}
					style={{
						flex: 1, padding: '28px 30px', borderRadius: radii.panel,
						border: `2px solid ${colors.dark}`, background: colors.white,
						boxShadow: `7px 7px 0 rgba(255,222,89,.9)`,
						display: 'flex', flexDirection: 'column', gap: 16,
					}}
				>
					<div style={{ fontSize: 32, fontWeight: 900 }}>今天：事前的批准</div>
					<div style={{ fontSize: 22, lineHeight: 1.7, opacity: .8 }}>
						谁批的 · 批准立在什么上面 · 哪些不可批准 ·
						它够不够得着外面 · 它会干什么活 · 谁来维护
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35, duration: 0.42 }}
					style={{
						flex: 1, padding: '28px 30px', borderRadius: radii.panel,
						border: `2px solid ${colors.dark}`, background: colors.dark, color: colors.white,
						boxShadow: `10px 10px 0 rgba(255,87,87,.6)`,
						display: 'flex', flexDirection: 'column', gap: 16,
					}}
				>
					<div style={{ fontSize: 32, fontWeight: 900, color: colors.yellow }}>还欠着：事后的证据</div>
					<div style={{ fontSize: 22, lineHeight: 1.7, opacity: .85 }}>
						今天这套设计里，<strong>一样「证据」都没有</strong>。<br /><br />
						而今天最值钱的那一格 —— 第三列「批准立在什么上面」——
						讲的恰恰是<strong style={{ color: colors.yellow }}>能不能被重新打开来读</strong>。
						<br /><br />
						<strong>同一把尺子，还没用在「它到底干了什么」上面。</strong>
					</div>
				</motion.div>
			</div>
		</Page>
	);
}
