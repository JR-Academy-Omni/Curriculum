import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

interface Column {
	tag: string;
	tagBg: string;
	title: string;
	bullets: string[];
	bg: string;
	rotate: number;
}

const columns: Column[] = [
	{
		tag: 'A 半对',
		tagBg: colors.green,
		title: 'LLM 比 P50 工程师强',
		bullets: [
			'P50 = 中位数水平的工程师（前 50%）',
			'SWE-bench Verified 49%+（顶尖 LLM 已达到）',
			'HumanEval 90%+ / LeetCode Easy ≈ 95% 通过',
			'CRUD / API / 单元测试，全部碾压',
		],
		bg: colors.yellow,
		rotate: -2,
	},
	{
		tag: 'B 半对',
		tagBg: colors.orange,
		title: 'LLM 比 P95 工程师弱',
		bullets: [
			'P95 = 前 5% 的顶尖工程师（百分位术语）',
			'复杂系统 design — 拆不清模块边界',
			'业务对齐 — 听不懂"客户其实想要什么"',
			'Debug 模糊问题 / Cost / Safety — 全不管',
		],
		bg: colors.red,
		rotate: 0,
	},
	{
		tag: '结论',
		tagBg: colors.dark,
		title: '企业不缺 P50',
		bullets: [
			'缺的是 P95',
			'而且要 "P95 + 会驾驭 LLM" 的人',
			'AI Engineer = 这种人的新名字',
			'不是被替代，是被需要',
		],
		bg: colors.dark,
		rotate: 2,
	},
];

export default function S05_Poll2Reveal() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '92%', maxWidth: 1400, height: '88%', padding: '28px 40px', display: 'flex', flexDirection: 'column' }}>
				{/* 顶部 REVEAL */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}
				>
					<span style={{ padding: '6px 16px', background: colors.green, color: colors.black, fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, border, boxShadow: `3px 3px 0 ${colors.black}` }}>
						REVEAL · 02
					</span>
					<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: '#666' }}>
						两边都对了一半
					</span>
				</motion.div>

				{/* 标题 */}
				<motion.h2
					initial={{ opacity: 0, x: -40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.15 }}
					style={{
						fontFamily: fonts.heading,
						fontSize: '52px',
						fontWeight: 900,
						lineHeight: 1.15,
						letterSpacing: -1.5,
						marginBottom: 22,
					}}
				>
					两边都对了
					<span style={{ display: 'inline-block', background: colors.red, color: colors.white, padding: '0 16px', marginLeft: 10, transform: 'rotate(-1.5deg)', border, boxShadow: shadow }}>
						一半
					</span>
				</motion.h2>

				{/* 三栏数据 */}
				<div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
					{columns.map((c, i) => {
						const textColor = c.bg === colors.dark || c.bg === colors.red ? colors.white : colors.black;
						const accentColor = c.bg === colors.dark ? colors.yellow : c.bg === colors.red ? colors.yellow : colors.red;
						const tagTextColor = c.tagBg === colors.dark || c.tagBg === colors.red ? colors.white : colors.black;
						return (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 40, rotate: 0 }}
								animate={{ opacity: 1, y: 0, rotate: c.rotate }}
								transition={{ delay: 0.3 + i * 0.12, duration: 0.45 }}
								style={{
									background: c.bg,
									border,
									boxShadow: shadow,
									padding: '24px 22px',
									minHeight: 360,
									display: 'flex',
									flexDirection: 'column',
									color: textColor,
								}}
							>
								<span style={{ alignSelf: 'flex-start', padding: '4px 12px', background: c.tagBg, color: tagTextColor, fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, border: `2px solid ${colors.black}`, marginBottom: 14 }}>
									{c.tag}
								</span>
								<div style={{ fontFamily: fonts.heading, fontSize: 26, fontWeight: 900, lineHeight: 1.2, marginBottom: 18 }}>
									{c.title}
								</div>
								<ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: fonts.body, fontSize: 15.5, lineHeight: 1.6, fontWeight: 500 }}>
									{c.bullets.map((b, bi) => (
										<li key={bi} style={{ marginBottom: 10, paddingLeft: 18, position: 'relative' }}>
											<span style={{ position: 'absolute', left: 0, color: accentColor, fontWeight: 900 }}>→</span>
											{b}
										</li>
									))}
								</ul>
							</motion.div>
						);
					})}
				</div>

				{/* 大字落点 */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.95 }}
					style={{ marginTop: 22, textAlign: 'center' }}
				>
					<div style={{ display: 'inline-block', padding: '16px 32px', background: colors.dark, color: colors.white, border, boxShadow: `6px 6px 0 ${colors.yellow}`, fontFamily: fonts.heading, fontSize: 28, fontWeight: 900, lineHeight: 1.25, letterSpacing: -0.5 }}>
						你的简历凭什么让企业相信
						<br />
						你是那 <span style={{ background: colors.red, color: colors.white, padding: '0 12px', display: 'inline-block', marginTop: 6 }}>P95</span>？
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
