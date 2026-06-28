import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// 对照 ai-builder/public/outline.json：Vibe Coding 大师课 · 8 周 · 110 节 · 4 Phase
const stages = [
	{
		num: '①',
		t: 'Phase 1 · 入门 & PRD',
		sub: '立意图打地基：PRD / SoT / Context 内核',
		count: '32 节',
		color: colors.red,
		now: true,
	},
	{
		num: '②',
		t: 'Phase 2 · Skills / MCP / Agent',
		sub: '造能力组件：给系统装上各种本事',
		count: '36 节',
		color: colors.orange,
	},
	{
		num: '③',
		t: 'Phase 3 · 多模型 & 精调',
		sub: '选引擎调优：跑得又准又省',
		count: '16 节',
		color: colors.blue,
	},
	{
		num: '④',
		t: 'Phase 4 · 全栈 & 交付',
		sub: '组装上线：变成真能用的系统',
		count: '26 节',
		color: colors.purple,
	},
];

// 8 周路线图 —— 4 阶段横向递进，能力一层层叠加
export default function S00b_Roadmap() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.dark}>Vibe Coding 大师课 · 8 周 · 110 节 · 4 阶段</Tag>
					<Title size="46px" style={{ marginTop: 10 }}>
						8 周怎么走 —— <span style={{ background: colors.yellow, padding: '0 8px' }}>搭你自己的 AI OS</span>
					</Title>
				</motion.div>

				<div style={{ display: 'flex', alignItems: 'stretch', gap: 14, marginTop: 30 }}>
					{stages.map((s, i) => (
						<motion.div key={i}
							initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.13, type: 'spring', stiffness: 150, damping: 17 }}
							style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 0 }}>
							<div style={{
								flex: 1, minWidth: 0, position: 'relative',
								background: s.now ? colors.dark : colors.white,
								border, boxShadow: s.now ? `6px 6px 0 ${colors.red}` : shadow,
								padding: '22px 18px',
							}}>
								{s.now && (
									<span style={{
										position: 'absolute', top: -14, right: 14, padding: '4px 12px',
										background: colors.red, color: colors.white, border: '2px solid #000',
										fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, letterSpacing: 1,
									}}>今晚在这</span>
								)}
								<div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
									<div style={{ fontSize: 40, fontWeight: 900, lineHeight: 1, color: s.color }}>{s.num}</div>
									<span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: s.now ? '#cfd3e6' : '#999' }}>{s.count}</span>
								</div>
								<div style={{ fontSize: 18, fontWeight: 900, marginTop: 12, color: s.now ? colors.white : colors.black, lineHeight: 1.25 }}>{s.t}</div>
								<div style={{ fontSize: 14, marginTop: 7, color: s.now ? '#cfd3e6' : '#666', lineHeight: 1.4 }}>{s.sub}</div>
								{s.now && (
									<div style={{ marginTop: 12, display: 'inline-block', padding: '4px 10px', background: colors.yellow, color: colors.black, fontFamily: fonts.mono, fontSize: 12, fontWeight: 800 }}>
										今晚 = 第一步 PRD
									</div>
								)}
							</div>
							{i < stages.length - 1 && (
								<div style={{ flexShrink: 0, width: 22, textAlign: 'center', fontSize: 26, fontWeight: 900, color: '#bbb' }}>→</div>
							)}
						</motion.div>
					))}
				</div>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
					style={{ fontSize: 18, color: '#555', marginTop: 32, textAlign: 'center', lineHeight: 1.55 }}>
					从「<b style={{ color: colors.black }}>想清楚</b>」到「<b style={{ color: colors.red }}>能交付</b>」 —— 每周你能自己搭的东西，都大一圈。
				</motion.p>
			</Inner>
		</Slide>
	);
}
