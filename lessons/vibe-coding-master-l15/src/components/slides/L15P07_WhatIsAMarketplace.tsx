import { motion } from 'framer-motion';
import { Page, Head, ActBadge, colors, fonts, border, radii } from '../deck';

/**
 * P07 · 市场是什么 —— 去神秘化
 * 这一页的任务是把「市场」这个词拆掉：一个 git 仓库 + 一份清单，没有别的。
 */
export default function L15P07_WhatIsAMarketplace() {
	const box = (label: string, sub: string, c: string) => (
		<div style={{
			padding: '18px 22px', background: colors.white, border, borderRadius: radii.card,
			boxShadow: `5px 5px 0 ${c}`, minWidth: 236,
		}}>
			<div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 800, letterSpacing: 1, color: '#888' }}>{sub}</div>
			<div style={{ fontSize: 25, fontWeight: 800, marginTop: 7 }}>{label}</div>
		</div>
	);

	return (
		<Page>
			<ActBadge act={2} />
			<Head sub="你一定装过别人做的插件。它是怎么跑到你机器上来的？答案比大多数人想的简单。">
				别人做的东西，是怎么到你机器上的
			</Head>

			<motion.div
				initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
				style={{
					display: 'flex', alignItems: 'center', gap: 20, marginTop: 10,
					padding: '26px 28px', background: '#fffaf3', border, borderRadius: radii.panel,
				}}
			>
				{box('一个 git 仓库', 'REPO', colors.blue)}
				<span style={{ fontFamily: fonts.heading, fontSize: 36, fontWeight: 900, color: '#bbb' }}>+</span>
				{box('一份清单', 'MANIFEST', colors.teal)}
				<span style={{ fontFamily: fonts.heading, fontSize: 36, fontWeight: 900, color: '#bbb' }}>=</span>
				<div style={{
					padding: '18px 26px', background: colors.yellow, border, borderRadius: radii.card,
					boxShadow: `5px 5px 0 ${colors.black}`,
				}}>
					<div style={{ fontSize: 28, fontWeight: 900 }}>一个插件市场</div>
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }}
				style={{ marginTop: 30, fontSize: 24, lineHeight: 1.75 }}
			>
				仓库里放着若干个目录，每个目录是一个插件。根目录有一份清单，写着这个市场叫什么、
				里面有哪些插件、每个插件在哪个目录。
			</motion.div>

			<motion.div
				initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.95, type: 'spring', stiffness: 170, damping: 17 }}
				style={{
					marginTop: 'auto', alignSelf: 'flex-start', padding: '20px 30px',
					background: colors.dark, borderRadius: radii.panel, boxShadow: `8px 8px 0 ${colors.yellow}`,
				}}
			>
				<div style={{ fontFamily: fonts.heading, fontSize: 34, fontWeight: 900, color: colors.white, lineHeight: 1.4 }}>
					没有服务器，没有审核流程，没有商店。<span style={{ color: colors.yellow }}>它就是一个仓库。</span>
				</div>
			</motion.div>
		</Page>
	);
}
