import { motion } from 'framer-motion';
import { Page, Head, ActBadge, colors, fonts, border, radii } from '../deck';

/**
 * P04 · 三层 scope（⭐ 独占一屏）
 * 🔴 视觉要点：第三列「进不进 git」最重 —— 它决定了别人能不能拿到。
 * 但这一页【不解释为什么它最重】。这是埋点，P28 收口回收。
 */
const LAYERS = [
	{ k: 'user', zh: '第一层 · 装给你自己的', desc: '不属于任何一个项目。你在哪儿干活它都跟着你，换一个项目它还在。', git: false, c: colors.blue },
	{ k: 'project', zh: '第二层 · 装给这个项目的', desc: '跟着项目走。换一个人来做这个项目，它不该变。', git: true, c: colors.teal },
	{ k: 'local', zh: '第三层 · 只在这台机器的这个项目', desc: '你在这台机器上的临时偏好。别人拿不到，你换台机器也拿不到。', git: false, c: colors.orange },
];

export default function L15P04_ThreeScopes() {
	return (
		<Page>
			<ActBadge act={1} />
			<Head sub="你刚才看到的三段，对应三层。这三层的区别有很多条 —— 今天我们只看一条。">
				三层，不是一个文件
			</Head>

			<div style={{ display: 'flex', gap: 20, flex: 1 }}>
				{LAYERS.map((l, i) => (
					<motion.div
						key={l.k}
						initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.15 + i * 0.14, duration: 0.45 }}
						style={{
							flex: 1, display: 'flex', flexDirection: 'column',
							background: colors.white, border, borderRadius: radii.panel,
							boxShadow: `6px 6px 0 ${l.c}`, overflow: 'hidden',
						}}
					>
						<div style={{
							padding: '13px 20px', background: l.c, borderBottom: border,
							fontFamily: fonts.mono, fontSize: 17, fontWeight: 800, letterSpacing: 1,
							color: colors.black,
						}}>{l.k}</div>

						<div style={{ padding: '18px 20px', flex: 1 }}>
							<div style={{ fontSize: 23, fontWeight: 800, lineHeight: 1.4 }}>{l.zh}</div>
							<p style={{ fontSize: 19, color: '#555', lineHeight: 1.65, marginTop: 12 }}>{l.desc}</p>
						</div>

						{/* 第三列 —— 视觉上最重的一格 */}
						<div style={{
							padding: '16px 20px', borderTop: border,
							background: l.git ? colors.yellow : '#f0ece9',
							display: 'flex', alignItems: 'center', justifyContent: 'space-between',
						}}>
							<span style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, letterSpacing: 1, color: '#555' }}>
								进 git 吗
							</span>
							<span style={{
								fontFamily: fonts.heading, fontSize: 30, fontWeight: 900,
								color: l.git ? colors.black : '#b8b0ab',
							}}>
								{l.git ? '进' : '不进'}
							</span>
						</div>
					</motion.div>
				))}
			</div>

			<motion.p
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95, duration: 0.6 }}
				style={{ marginTop: 22, fontSize: 24, lineHeight: 1.6 }}
			>
				进 git 的东西，别人把仓库 clone 下来就有了。
				<strong>不进 git 的东西，只有你这台机器上有。</strong>
			</motion.p>
		</Page>
	);
}
