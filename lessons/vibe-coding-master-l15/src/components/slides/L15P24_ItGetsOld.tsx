import { motion } from 'framer-motion';
import { Page, Head, ActBadge, colors, fonts, border, radii } from '../deck';

/**
 * P24 · 它会变旧 —— 第五幕的坡道，节奏放慢
 * 接第十四节的漂移。落点那句是埋点，P25 回收。
 */
const DRIFT = [
	{ t: '包依赖的东西会升级', c: colors.blue },
	{ t: '包接的外部系统会改接口', c: colors.orange },
	{ t: '你写下的那个默认，半年之后可能已经不对了', c: colors.purple },
];

export default function L15P24_ItGetsOld() {
	return (
		<Page>
			<ActBadge act={5} />
			<Head sub="你的包做好了，也交出去了。然后呢？">你的包会变旧</Head>

			<div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
				{DRIFT.map((d, i) => (
					<motion.div
						key={d.t}
						initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.15 + i * 0.14, duration: 0.45 }}
						style={{
							display: 'flex', alignItems: 'center', gap: 16,
							background: colors.white, border, borderRadius: radii.card,
							boxShadow: `5px 5px 0 ${d.c}`, padding: '16px 22px',
						}}
					>
						<span style={{ width: 12, height: 12, borderRadius: radii.pill, background: d.c, border, flexShrink: 0 }} />
						<span style={{ fontSize: 25, lineHeight: 1.5 }}>{d.t}</span>
					</motion.div>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.5 }}
				style={{ marginTop: 26, fontSize: 23, color: '#555', lineHeight: 1.7 }}
			>
				第十四节我们讲过漂移，讲过权限会漂、配置会漂。包也一样，<strong>而且更安静。</strong>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.95, type: 'spring', stiffness: 170, damping: 17 }}
				style={{
					marginTop: 'auto', padding: '24px 32px', background: colors.dark,
					borderRadius: radii.panel, boxShadow: `8px 8px 0 ${colors.purple}`,
				}}
			>
				<div style={{ fontFamily: fonts.heading, fontSize: 34, fontWeight: 900, color: colors.white, lineHeight: 1.45 }}>
					一个没有复审日期的包，等于一个<span style={{ color: colors.yellow }}>没有维护者</span>的包。<br />
					<span style={{ fontSize: 28, color: 'rgba(255,255,255,.72)' }}>
						它不会报错，它只会慢慢变得不对。而因为它不报错，所以没有人会去看它。
					</span>
				</div>
			</motion.div>
		</Page>
	);
}
