import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { motion } from 'framer-motion';

const rows = [
	{ dim: '核心单位', a: '人（team / sprint）', b: 'agent + 你编排' },
	{ dim: '一轮节奏', a: '1–2 周 sprint', b: '一次对话 / 一个 workflow' },
	{ dim: '需求载体', a: 'user story', b: 'PRD（Goal + Context）' },
	{ dim: '复盘迭代', a: '站会 + retro', b: 'Eval + 记忆回流' },
	{ dim: '知识沉淀', a: 'wiki / 文档（常过时）', b: 'CLAUDE.md / 记忆（每次自动加载）' },
	{ dim: '扩张方式', a: '加人', b: '加 agent（并行）' },
];

// Agile vs ADLC —— ADLC 是 Agile 的 AI 原生版
export default function S16b_AgileVsADLC() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', gap: 0, justifyContent: 'center' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.dark}>对照 · 别从零学</Tag>
					<Title size="44px" style={{ marginTop: 10, lineHeight: 1.16 }}>
						ADLC = Agile 的<span style={{ background: colors.yellow, padding: '0 8px' }}>「AI 原生」版</span>
					</Title>
					<p style={{ fontSize: 17, color: '#555', marginTop: 8 }}>
						你已经会 Agile 的那套「小步快跑 + 持续迭代」—— ADLC 就是把它搬到「人 + agent」上：
					</p>
				</motion.div>

				<div style={{ marginTop: 16, border, boxShadow: shadow, background: '#fff' }}>
					<div style={{ display: 'flex', borderBottom: `2px solid ${colors.black}`, background: '#faf6ee' }}>
						<div style={{ width: 140, flexShrink: 0, padding: '9px 14px', fontFamily: fonts.mono, fontSize: 13, color: '#888', fontWeight: 800 }}>维度</div>
						<div style={{ flex: 1, padding: '9px 16px', fontSize: 16, fontWeight: 900, color: '#666', borderLeft: '2px solid #eee' }}>Agile（人协作）</div>
						<div style={{ flex: 1, padding: '9px 16px', fontSize: 16, fontWeight: 900, color: colors.red, borderLeft: '2px solid #eee' }}>ADLC（人 + agent）</div>
					</div>
					{rows.map((r, i) => (
						<motion.div key={r.dim}
							initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 + i * 0.09 }}
							style={{ display: 'flex', borderBottom: i < rows.length - 1 ? '1px solid #eee' : 'none' }}>
							<div style={{ width: 140, flexShrink: 0, padding: '8px 14px', fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: '#444' }}>{r.dim}</div>
							<div style={{ flex: 1, padding: '8px 16px', fontSize: 15, color: '#777', borderLeft: '2px solid #f4f4f4' }}>{r.a}</div>
							<div style={{ flex: 1, padding: '8px 16px', fontSize: 15, fontWeight: 700, color: '#222', borderLeft: '2px solid #f4f4f4' }}>{r.b}</div>
						</motion.div>
					))}
				</div>

				<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}
					style={{ marginTop: 16, alignSelf: 'flex-start', background: colors.dark, color: colors.white, border, boxShadow: `5px 5px 0 ${colors.red}`, padding: '12px 22px', fontSize: 16, lineHeight: 1.5 }}>
					同样是「小步快跑 + 持续迭代」—— 只是循环从<b style={{ color: colors.yellow }}>周级压到对话级</b>，知识<b style={{ color: colors.yellow }}>自动回流</b>不靠翻 wiki。
				</motion.div>
			</Inner>
		</Slide>
	);
}
