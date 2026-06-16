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

				{/* 质量随填充度下降的曲线图（SVG 画形 + HTML 叠字，不变形） */}
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
					style={{ position: 'relative', marginTop: 14, alignSelf: 'center', width: '74%', height: 178, background: '#fff', border, boxShadow: shadow }}>
					<svg viewBox="0 0 700 200" width="100%" height="100%" preserveAspectRatio="none" style={{ display: 'block', position: 'absolute', inset: 0 }}>
						<defs>
							<linearGradient id="rotFill" x1="0" y1="0" x2="1" y2="0">
								<stop offset="0%" stopColor="#7ED957" stopOpacity="0.55" />
								<stop offset="55%" stopColor="#FFDE59" stopOpacity="0.5" />
								<stop offset="100%" stopColor="#ff5757" stopOpacity="0.55" />
							</linearGradient>
						</defs>
						{/* 80% 后塌方区底色 */}
						<rect x="555" y="0" width="145" height="178" fill="#ff5757" opacity="0.1" />
						<line x1="555" y1="0" x2="555" y2="178" stroke="#ff5757" strokeWidth="2.5" strokeDasharray="6 5" opacity="0.7" />
						{/* 网格 */}
						{[26, 64, 102, 140, 178].map((y) => <line key={y} x1="0" y1={y} x2="700" y2={y} stroke="#eee" strokeWidth="1.5" />)}
						{/* 面积填充：前 80% 平缓，80% 后断崖 */}
						<path d="M 8 30 C 230 33, 420 40, 555 48 C 600 54, 628 150, 692 192 L 692 178 L 8 178 Z" fill="url(#rotFill)" />
						{/* 质量曲线：0→80% 微降，~80% 断崖跳水 */}
						<motion.path d="M 8 30 C 230 33, 420 40, 555 48 C 600 54, 628 150, 692 192" fill="none" stroke="#ff3b3b" strokeWidth="7"
							strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.1, ease: 'easeInOut', delay: 0.3 }} />
						{/* 甜区点（平缓段）/ 断崖点 */}
						<circle cx="260" cy="36" r="8" fill="#7ED957" stroke="#000" strokeWidth="2.5" />
						<circle cx="640" cy="172" r="8" fill="#ff3b3b" stroke="#000" strokeWidth="2.5" />
					</svg>
					{/* HTML 叠字（不被 SVG 拉伸） */}
					<div style={{ position: 'absolute', left: 12, top: 8, fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, color: '#0a8a3a' }}>🟢 前 80% · 又快又准（几乎不掉）</div>
					<div style={{ position: 'absolute', right: 14, top: 8, fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, color: colors.red }}>🔴 过 ~80% · 断崖跳水</div>
					<div style={{ position: 'absolute', left: '79%', top: 30, fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, color: colors.red }}>~80%</div>
					<div style={{ position: 'absolute', left: 10, top: 30, fontFamily: fonts.mono, fontSize: 11, color: '#aaa', writingMode: 'vertical-rl' }}>质量 高→低</div>
					<div style={{ position: 'absolute', left: '46%', bottom: 6, transform: 'translateX(-50%)', fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: '#666' }}>context 占用：空 ——————→ 塞满</div>
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
