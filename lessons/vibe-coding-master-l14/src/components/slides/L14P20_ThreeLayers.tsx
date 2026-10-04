import { motion } from 'framer-motion';
import { Page, Head, ActBadge, colors, fonts, radii } from '../deck';

/**
 * P20 · 三层自动化 + 翻车③
 * 🔴 中间那层要标「唯一真正的硬政策」—— 钩子是提醒，巡检是巡检，
 *   只有中间那层能让一个改动进不来。
 */
const LAYERS = [
	{ when: '每次开会话', what: '会话启动钩子', how: '只报告这份检出落后多少。永不自动拉取，永远正常退出。', note: '一个会阻塞会话的新鲜度警告，比它警告的陈旧本身更糟' },
	{ when: '每次提改动', what: '一致性检查', how: '绿了才能合。顺便把缺口总数贴在改动摘要上。', hard: true },
	{ when: '每周一次', what: '权限漂移检查', how: '比对实际权限和规则里写的权限。', note: '这一层必须用服务凭据，不能用点一下同意的那种连接' },
];

export default function L14P20_ThreeLayers() {
	return (
		<Page>
			<ActBadge act={5} />
			<Head sub="三层各管各的。注意中间那层和两边的差别 —— 只有它能让一个改动进不来。">
				谁在替你盯着
			</Head>

			<div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1, minHeight: 0 }}>
				{LAYERS.map((l, i) => (
					<motion.div
						key={l.what}
						initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.15 + i * 0.14, duration: 0.4 }}
						style={{
							flex: l.hard ? 1.25 : 1, display: 'grid', gridTemplateColumns: '150px 220px 1fr',
							alignItems: 'center', padding: '0 22px', gap: 18,
							background: l.hard ? colors.dark : colors.white,
							color: l.hard ? colors.white : colors.black,
							border: `2px solid ${colors.dark}`, borderRadius: radii.card,
							boxShadow: l.hard ? `10px 10px 0 rgba(203,108,230,.6)` : `6px 6px 0 rgba(255,222,89,.9)`,
							position: 'relative',
						}}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 17, fontWeight: 800, opacity: .72 }}>{l.when}</div>
						<div style={{ fontFamily: fonts.heading, fontSize: l.hard ? 29 : 25, fontWeight: 900 }}>{l.what}</div>
						<div>
							<div style={{ fontSize: 20, lineHeight: 1.45, opacity: .82 }}>{l.how}</div>
							{l.note && <div style={{ fontSize: 17, lineHeight: 1.4, color: colors.red, marginTop: 6, fontWeight: 700 }}>⚠️ {l.note}</div>}
						</div>
						{l.hard && (
							<div style={{
								position: 'absolute', top: -12, right: 22,
								fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, letterSpacing: 1,
								padding: '5px 12px', borderRadius: radii.label,
								background: colors.yellow, color: colors.black, border: `2px solid ${colors.black}`,
							}}>唯一真正的硬政策</div>
						)}
					</motion.div>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.5 }}
				style={{
					marginTop: 22, padding: '16px 22px', borderRadius: radii.card,
					border: `2px dashed ${colors.red}`, background: 'rgba(255,87,87,.07)',
					fontSize: 21, lineHeight: 1.55,
				}}
			>
				🎬 <strong>现在试一下第一层：把你那个钩子改成「没通过就卡住，不让你继续」，然后开一个会话。</strong>
				<br />跑完在聊天框打 <strong>1</strong>。然后问自己一句：<strong>这东西你能忍几天？</strong>
			</motion.div>
		</Page>
	);
}
