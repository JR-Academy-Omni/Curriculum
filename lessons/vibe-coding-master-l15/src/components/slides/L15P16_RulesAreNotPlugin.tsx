import { motion } from 'framer-motion';
import { Page, Head, ActBadge, colors, fonts, border, radii } from '../deck';

/**
 * P16 · 有些东西不该进包（⭐）
 * 🔴 这一刀必须切清楚，否则第十三节的规则仓会被错放进个人包。
 * 落点那句是 P28 收口的半截 —— 说完就往下，不要说破。
 */
const LEFT = ['你的技能', '你的助手', '你的钩子', '你的工作习惯'];
const RIGHT = ['这个项目的规则', '这个团队的角色', '谁说了算', '什么不许做'];

export default function L15P16_RulesAreNotPlugin() {
	const col = (
		title: string, sub: string, items: string[], dest: string, c: string, delay: number,
	) => (
		<motion.div
			initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, duration: 0.45 }}
			style={{
				flex: 1, padding: '24px 26px', background: colors.white,
				border, borderRadius: radii.panel, boxShadow: `6px 6px 0 ${c}`,
				display: 'flex', flexDirection: 'column',
			}}
		>
			<div style={{
				display: 'inline-block', alignSelf: 'flex-start', fontFamily: fonts.mono, fontSize: 15,
				fontWeight: 800, letterSpacing: 1, background: c, color: colors.black,
				border: `2px solid ${colors.black}`, borderRadius: radii.label, padding: '4px 12px',
			}}>{title}</div>
			<div style={{ fontSize: 27, fontWeight: 900, marginTop: 14, lineHeight: 1.35 }}>{sub}</div>
			<ul style={{ margin: '16px 0 0', paddingLeft: 22 }}>
				{items.map(t => <li key={t} style={{ fontSize: 21, lineHeight: 1.8, color: '#444' }}>{t}</li>)}
			</ul>
			<div style={{
				marginTop: 'auto', paddingTop: 18, borderTop: `2px dashed #ccc`,
				fontFamily: fonts.heading, fontSize: 25, fontWeight: 900,
			}}>
				→ {dest}
			</div>
		</motion.div>
	);

	return (
		<Page>
			<ActBadge act={3} />
			<Head sub="包里能放什么讲完了。现在讲不该放进去的 —— 你第十三节课造的那个规则仓库，不进包。">
				有些东西不该进包
			</Head>

			<div style={{ display: 'flex', gap: 22, flex: 1 }}>
				{col('跟着人走', '这些是【你】的', LEFT, '进包', colors.teal, 0.18)}
				{col('跟着项目走', '这些是【项目】的', RIGHT, '留在仓库里，进 git', colors.blue, 0.36)}
			</div>

			<motion.div
				initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.9, type: 'spring', stiffness: 170, damping: 17 }}
				style={{
					marginTop: 24, padding: '20px 30px', background: colors.dark,
					borderRadius: radii.panel, boxShadow: `8px 8px 0 ${colors.red}`,
				}}
			>
				<div style={{ fontFamily: fonts.heading, fontSize: 31, fontWeight: 900, color: colors.white, lineHeight: 1.45 }}>
					把项目的规则塞进你的个人包，等于把<span style={{ color: colors.yellow }}>团队的规矩</span>变成了
					<span style={{ color: colors.yellow }}>你的个人习惯</span>。<br />
					然后你走了，规矩跟着你一起走了。
				</div>
			</motion.div>
		</Page>
	);
}
