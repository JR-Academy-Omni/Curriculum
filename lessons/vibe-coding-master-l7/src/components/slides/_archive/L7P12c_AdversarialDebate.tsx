import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P12c：对抗辩论 —— Team 唯一真正不可替代的场景
// SoT：蓝图 §9.6 三个竞争假设 + §6.8「成员『已经达成一致』不是外部判据」
// 核心纠错：对抗 ≠ 分工。分工拿覆盖，对抗拿收敛。
const VS = [
	{
		k: '分工', bad: true,
		setup: 'A 查前端 · B 查后端 · C 查配置',
		out: '三份互不冲突的报告',
		note: '没人有动机推翻别人 —— 这是 Subagent，只是更贵',
	},
	{
		k: '对抗', bad: false,
		setup: 'A、B 各认领一个假设 · C 专职找反例',
		out: '一个被证伪不掉的结论',
		note: '每个人都有动机推翻别人，活下来的才算数',
	},
];

const FAILS = [
	{ t: '退化成分工', d: '三个人各写各的，一条 CONFLICT 都没有 —— 最常见的失败' },
	{ t: '虚假共识', d: '都同意了，但都错。「达成一致」不是外部判据' },
	{ t: 'Lead 抢活', d: 'Lead 自己下场做，没人裁决，辩论没发生' },
];

export default function L7P12c_AdversarialDebate() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<div style={{ flex: '0 0 44%' }}>
					<div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
						<Tag bg={colors.purple}>结构 B · Agent Team</Tag>
						<Tag bg={colors.red}>Team 不可替代的场景</Tag>
					</div>
					<Title size="36px" style={{ marginBottom: 10 }}>
						对抗辩论：<span style={{ background: colors.yellow, padding: '0 8px' }}>为什么要让它们吵</span>
					</Title>

					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#888', letterSpacing: 1.4, fontWeight: 700, marginBottom: 8 }}>
						它治的是一种具体的病：锚定
					</div>

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.15 }}
						style={{ border, boxShadow: shadow, background: colors.white, marginBottom: 14 }}
					>
						<div style={{ background: '#fff2f2', padding: '12px 15px', borderBottom: '2px solid #eee' }}>
							<div style={{ fontSize: 13, fontWeight: 700, color: colors.red, marginBottom: 6 }}>单个 Agent 查根因</div>
							<div style={{ fontFamily: fonts.mono, fontSize: 12.5, color: '#555', lineHeight: 1.9 }}>
								试假设 1 → <span style={{ color: colors.green, fontWeight: 700 }}>说得通</span> → <strong style={{ color: colors.red }}>停</strong><br />
								<span style={{ color: '#aaa' }}>假设 2、3 从此再没被认真查过</span>
							</div>
						</div>
						<div style={{ background: '#f4fff4', padding: '12px 15px' }}>
							<div style={{ fontSize: 13, fontWeight: 700, color: colors.green, marginBottom: 6 }}>三个 Agent 互相证伪</div>
							<div style={{ fontFamily: fonts.mono, fontSize: 12.5, color: '#555', lineHeight: 1.9 }}>
								假设 1 ↔ 假设 2 ↔ 假设 3<br />
								<span style={{ color: '#888' }}>各自被另外两个攻击 →</span> <strong style={{ color: colors.dark }}>活下来的那个</strong>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
						style={{ fontSize: 15, color: '#444', lineHeight: 1.65 }}
					>
						顺序调查有个固有毛病：<strong style={{ color: colors.dark }}>第一个说得通的解释会污染后面所有判断</strong>。
						辩论不是为了热闹，是为了<strong>不让第一个答案自动胜出</strong>。
					</motion.div>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.red, letterSpacing: 1.4, fontWeight: 700, marginBottom: 9 }}>
						最容易做错的一步：把对抗做成了分工
					</div>

					{VS.map((v, i) => (
						<motion.div
							key={v.k}
							initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.38, delay: 0.2 + i * 0.15 }}
							style={{ border, boxShadow: shadow, background: colors.white, marginBottom: 12 }}
						>
							<div style={{
								display: 'flex', alignItems: 'center', gap: 10,
								background: v.bad ? '#ddd' : colors.purple, padding: '7px 14px',
							}}>
								<span style={{
									fontSize: 17, fontWeight: 900,
									color: v.bad ? '#888' : colors.white,
								}}>{v.bad ? '✕' : '✓'}</span>
								<span style={{
									fontSize: 16.5, fontWeight: 800,
									color: v.bad ? '#666' : colors.white,
								}}>{v.k}</span>
								<span style={{
									marginLeft: 'auto', fontFamily: fonts.mono, fontSize: 12,
									color: v.bad ? '#888' : colors.white, opacity: 0.9,
								}}>{v.bad ? '拿到覆盖' : '拿到收敛'}</span>
							</div>
							<div style={{ padding: '10px 14px' }}>
								<div style={{ display: 'flex', gap: 8, alignItems: 'baseline', marginBottom: 5 }}>
									<span style={{ flex: '0 0 46px', fontFamily: fonts.mono, fontSize: 11, color: '#aaa' }}>怎么派</span>
									<span style={{ fontSize: 14, color: colors.dark, fontWeight: 600 }}>{v.setup}</span>
								</div>
								<div style={{ display: 'flex', gap: 8, alignItems: 'baseline', marginBottom: 6 }}>
									<span style={{ flex: '0 0 46px', fontFamily: fonts.mono, fontSize: 11, color: '#aaa' }}>拿回来</span>
									<span style={{ fontSize: 14, color: colors.dark, fontWeight: 600 }}>{v.out}</span>
								</div>
								<div style={{
									fontSize: 13, lineHeight: 1.5, paddingTop: 7, borderTop: '2px solid #f0f0f0',
									color: v.bad ? colors.red : colors.green, fontWeight: 700,
								}}>{v.note}</div>
							</div>
						</motion.div>
					))}

					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#888', letterSpacing: 1.4, fontWeight: 700, margin: '14px 0 8px' }}>
						三个失败模式
					</div>
					<div style={{ display: 'flex', gap: 10 }}>
						{FAILS.map((f, i) => (
							<motion.div
								key={f.t}
								initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.33, delay: 0.6 + i * 0.1 }}
								style={{ flex: 1, border, boxShadow: '3px 3px 0 #000', background: '#fff8f8', padding: '10px 12px' }}
							>
								<div style={{ fontSize: 14, fontWeight: 800, color: colors.red, marginBottom: 4 }}>{f.t}</div>
								<div style={{ fontSize: 12, color: '#666', lineHeight: 1.45 }}>{f.d}</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.95 }}
						style={{
							marginTop: 14, padding: '13px 18px', background: colors.dark, color: colors.white,
							border, boxShadow: shadow,
						}}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 11.5, color: colors.yellow, letterSpacing: 1.3, fontWeight: 700, marginBottom: 6 }}>
							什么时候辩论才值
						</div>
						<div style={{ fontSize: 16.5, fontWeight: 800, lineHeight: 1.5 }}>
							当这件事<span style={{ color: colors.yellow }}>没有廉价判据</span>的时候。
						</div>
						<div style={{ marginTop: 5, fontSize: 13.5, opacity: 0.85, lineHeight: 1.55 }}>
							跑个测试就能证伪的假设，直接跑测试 —— 别开三个 Agent 辩论。
							辩论换的是「拿不到确定判据时，怎么让结论更可信」。
						</div>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
