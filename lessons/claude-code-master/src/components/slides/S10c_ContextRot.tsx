import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { motion } from 'framer-motion';

const effects = [
	{ icon: '⏳', t: '更慢 + 更贵', d: 'token 越多，每一轮算得越久、花得越多。塞满 = 每次对话都在交重税。', color: colors.orange },
	{ icon: '🎯', t: '准确率掉', d: '噪音越多，模型越抓不住重点 —— 该遵守的规则被淹没，容易跑偏。', color: colors.red },
	{ icon: '🕳️', t: '召回变差', d: '「迷失在中间」：塞太多时，中间那段它看过却记不牢，该用的信息没用上。', color: colors.purple },
];

// 原理（续）—— context window 越满，越慢 + 越容易错
export default function S10c_ContextRot() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', gap: 0, justifyContent: 'center' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.dark}>原理 · 越满越糟（接上页）</Tag>
					<Title size="44px" style={{ marginTop: 10, lineHeight: 1.16 }}>
						窗口越满 —— 不只是<span style={{ background: colors.yellow, padding: '0 8px' }}>更慢</span>，还<span style={{ color: colors.red }}>更容易错</span>
					</Title>
					<p style={{ fontSize: 17, color: '#555', marginTop: 8 }}>
						很多人以为「能塞 1M token 就尽量塞满」—— 恰恰相反，越接近塞满，质量越往下掉：
					</p>
				</motion.div>

				{/* 越满 → 质量下降 示意 */}
				<div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 14 }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 13, color: '#888', fontWeight: 800, flexShrink: 0 }}>空 · 准</span>
					<div style={{ flex: 1, height: 22, border, background: 'linear-gradient(90deg, #7ED957 0%, #FFDE59 45%, #FF914D 72%, #ff5757 100%)', position: 'relative' }}>
						<div style={{ position: 'absolute', right: 8, top: 2, fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, color: '#fff' }}>塞满 → 慢 + 漂</div>
					</div>
					<span style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.red, fontWeight: 800, flexShrink: 0 }}>满 · 糟</span>
				</div>

				<div style={{ display: 'flex', gap: 16, marginTop: 18 }}>
					{effects.map((e, i) => (
						<motion.div key={e.t}
							initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.13 }}
							style={{ flex: 1, background: '#fff', border, boxShadow: `6px 6px 0 ${e.color}`, padding: '16px 18px' }}>
							<div style={{ fontSize: 30 }}>{e.icon}</div>
							<div style={{ fontSize: 19, fontWeight: 900, marginTop: 6, color: e.color }}>{e.t}</div>
							<div style={{ fontSize: 14.5, color: '#555', marginTop: 7, lineHeight: 1.5 }}>{e.d}</div>
						</motion.div>
					))}
				</div>

				<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
					style={{ marginTop: 18, alignSelf: 'flex-start', background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '12px 22px', fontSize: 16, lineHeight: 1.5 }}>
					所以「<b style={{ color: colors.yellow }}>按需加载</b>」不是抠门，是保命 —— CLAUDE.md 精炼、大文件别一次性灌、用子 agent / 检索把活外包出去，让主窗口始终清爽。
				</motion.div>
			</Inner>
		</Slide>
	);
}
