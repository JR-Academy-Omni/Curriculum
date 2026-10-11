import { motion } from 'framer-motion';
import { Page, ActBadge, colors, fonts, border, radii } from '../deck';

/**
 * P26 · 你今天走，留下什么（⭐ 独占一屏）
 * 四类。🔴 第四格最扎人，视觉上要比前三格重。
 * 第三类回收 P11 的埋点（包交得出去，钥匙交不出去）。
 * 第四类回收第十一节的定时任务 —— 它不会停，而现在没有任何一张表上有它。
 */
const KINDS = [
	{ n: '一', t: '人', d: '流程是现成的', c: colors.blue },
	{ n: '二', t: '你的助手', d: '还在你的账号下面跑着', c: colors.teal },
	{ n: '三', t: '服务凭据', d: '包交得出去，钥匙交不出去', c: colors.orange },
];

export default function L15P26_WhatYouLeaveBehind() {
	return (
		<Page bg={colors.dark}>
			<ActBadge act={5} />

			<motion.h2
				initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
				style={{
					fontFamily: fonts.heading, fontSize: 54, fontWeight: 900, letterSpacing: -2,
					color: colors.white, lineHeight: 1.2, margin: '4px 0 24px',
				}}
			>
				你今天走。<span style={{ color: colors.yellow }}>你留下什么？</span>
			</motion.h2>

			<div style={{ display: 'flex', gap: 14 }}>
				{KINDS.map((k, i) => (
					<motion.div
						key={k.n}
						initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 + i * 0.12, duration: 0.42 }}
						style={{
							flex: 1, padding: '18px 20px', background: 'rgba(255,255,255,.07)',
							border: `2px solid rgba(255,255,255,.28)`, borderRadius: radii.card,
						}}
					>
						<span style={{
							display: 'inline-block', fontFamily: fonts.mono, fontSize: 14, fontWeight: 800,
							padding: '3px 10px', borderRadius: radii.label, background: k.c, color: colors.black,
						}}>第{k.n}类</span>
						<div style={{ fontSize: 25, fontWeight: 800, color: colors.white, marginTop: 11 }}>{k.t}</div>
						<p style={{ fontSize: 18, color: 'rgba(255,255,255,.6)', lineHeight: 1.6, marginTop: 8 }}>{k.d}</p>
					</motion.div>
				))}
			</div>

			{/* 第四类 —— 视觉上必须比前三格重 */}
			<motion.div
				initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.72, type: 'spring', stiffness: 160, damping: 17 }}
				style={{
					marginTop: 20, padding: '24px 30px', background: colors.red,
					border, borderRadius: radii.panel, boxShadow: `8px 8px 0 ${colors.yellow}`,
				}}
			>
				<span style={{
					display: 'inline-block', fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, letterSpacing: 2,
					padding: '4px 12px', borderRadius: radii.label, background: colors.yellow, color: colors.black, border,
				}}>第四类</span>
				<div style={{ fontFamily: fonts.heading, fontSize: 38, fontWeight: 900, color: colors.white, marginTop: 13, lineHeight: 1.3 }}>
					还在跑的定时任务
				</div>
				<p style={{ fontSize: 23, color: 'rgba(255,255,255,.92)', lineHeight: 1.65, marginTop: 12 }}>
					<strong>你走了，它不会停。</strong><br />
					它会继续按你几个月前定的规矩，以你的名义，继续做事。
				</p>
				<p style={{ fontFamily: fonts.heading, fontSize: 30, fontWeight: 900, color: colors.yellow, marginTop: 14 }}>
					而现在，没有任何一张表上有它。
				</p>
			</motion.div>
		</Page>
	);
}
