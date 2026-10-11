import { motion } from 'framer-motion';
import { Page, Head, ActBadge, colors, fonts, border, radii } from '../deck';

/**
 * P09 · 刚才那一下，东西去哪了
 * 三个落点横排。强调：三处都是【可读的纯文本】—— 没有黑盒。
 */
const SPOTS = [
	{ n: '一', t: '那个市场的仓库', d: '被整个克隆到你本地。它就躺在那儿，你现在就能打开看。', c: colors.blue },
	{ n: '二', t: '插件本身', d: '被放进一个缓存目录，按市场、插件、版本分三层放好。', c: colors.teal },
	{ n: '三', t: '一份记录文件', d: '记下你装了什么、装在哪一层、哪个版本、什么时候装的、对应哪一次提交。', c: colors.orange },
];

export default function L15P09_WhereItWent() {
	return (
		<Page>
			<ActBadge act={2} />
			<Head sub="装完了。我们看看东西去哪了。">刚才那一下，东西去哪了</Head>

			<div style={{ display: 'flex', gap: 20 }}>
				{SPOTS.map((s, i) => (
					<motion.div
						key={s.n}
						initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.15 + i * 0.14, duration: 0.45 }}
						style={{
							flex: 1, padding: '22px 24px', background: colors.white,
							border, borderRadius: radii.panel, boxShadow: `6px 6px 0 ${s.c}`,
						}}
					>
						<span style={{
							display: 'inline-block', width: 40, height: 40, borderRadius: radii.pill, border,
							background: s.c, color: colors.black, textAlign: 'center', lineHeight: '36px',
							fontFamily: fonts.heading, fontSize: 22, fontWeight: 900,
						}}>{s.n}</span>
						<div style={{ fontSize: 26, fontWeight: 800, marginTop: 14 }}>{s.t}</div>
						<p style={{ fontSize: 19, color: '#555', lineHeight: 1.65, marginTop: 10 }}>{s.d}</p>
					</motion.div>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75, duration: 0.5 }}
				style={{ marginTop: 28, fontSize: 25, lineHeight: 1.7 }}
			>
				这三处都是<strong>纯文本</strong>。你现在打开任何一个，都能看懂。
			</motion.div>

			<motion.div
				initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 1, type: 'spring', stiffness: 170, damping: 17 }}
				style={{
					marginTop: 'auto', padding: '22px 30px', background: colors.dark,
					borderRadius: radii.panel, boxShadow: `8px 8px 0 ${colors.yellow}`,
				}}
			>
				<div style={{ fontFamily: fonts.heading, fontSize: 32, fontWeight: 900, color: colors.white, lineHeight: 1.45 }}>
					这里<span style={{ color: colors.yellow }}>没有黑盒</span>。装一个插件，从头到尾就是三个动作：
					把一个仓库拉下来，把一个目录放到约定好的位置，在一份清单上记一笔。
				</div>
			</motion.div>
		</Page>
	);
}
