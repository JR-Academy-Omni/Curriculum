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

				{/* 质量随填充度下降的曲线图 */}
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
					style={{ marginTop: 14, background: '#fff', border, boxShadow: shadow, padding: '12px 16px 6px' }}>
					<svg viewBox="0 0 700 190" width="100%" height="150" preserveAspectRatio="none" style={{ display: 'block' }}>
						{/* 塌方区底色 */}
						<rect x="470" y="20" width="200" height="130" fill="#ff5757" opacity="0.08" />
						{/* 网格 */}
						{[20, 53, 86, 119, 150].map((y) => <line key={y} x1="48" y1={y} x2="670" y2={y} stroke="#eee" strokeWidth="1" />)}
						{/* 轴 */}
						<line x1="48" y1="20" x2="48" y2="150" stroke="#999" strokeWidth="2" />
						<line x1="48" y1="150" x2="670" y2="150" stroke="#999" strokeWidth="2" />
						{/* 质量曲线（高 → 塌） */}
						<motion.path d="M 48 34 C 200 38, 320 48, 430 78 S 600 142, 670 150" fill="none" stroke="#ff5757" strokeWidth="4"
							strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.1, ease: 'easeInOut', delay: 0.3 }} />
						{/* 甜区点 */}
						<circle cx="150" cy="37" r="5" fill="#7ED957" stroke="#000" strokeWidth="1.5" />
						{/* 塌方点 */}
						<circle cx="560" cy="120" r="5" fill="#ff5757" stroke="#000" strokeWidth="1.5" />
						{/* 标注 */}
						<text x="90" y="28" fontFamily="'Space Mono', monospace" fontSize="13" fontWeight="800" fill="#0a8a3a">甜区 · 又快又准</text>
						<text x="490" y="44" fontFamily="'Space Mono', monospace" fontSize="13" fontWeight="800" fill="#ff5757">塌方区 · 慢 + 漂 + 漏</text>
						{/* 轴标签 */}
						<text x="6" y="30" fontFamily="'Space Mono', monospace" fontSize="11" fill="#888">质量</text>
						<text x="6" y="148" fontFamily="'Space Mono', monospace" fontSize="11" fill="#888">低</text>
						<text x="300" y="175" fontFamily="'Space Mono', monospace" fontSize="12" fontWeight="700" fill="#666">context 占用：空 ————————→ 塞满</text>
					</svg>
				</motion.div>

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
