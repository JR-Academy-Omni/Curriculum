import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { motion } from 'framer-motion';

const parts = [
	{ time: 'Part 1', t: '为什么 & 记忆系统基础', items: 'Source of Truth · AI OS · 记忆系统四层 · 动手① 写 CLAUDE.md', color: '#ff5757', lab: '🔨①' },
	{ time: '☕ 中场休息', t: '', items: '', color: '#aaa', lab: '' },
	{ time: 'Part 2', t: '记忆进阶 + 第一个武器 Skills', items: 'auto-memory · 团队记忆 · RAG · 动手② 建记忆 · 动手③ 写 skill', color: '#FF914D', lab: '🔨②③' },
	{ time: '☕ 中场休息', t: '', items: '', color: '#aaa', lab: '' },
	{ time: 'Part 3', t: 'ADLC + 编排武器', items: 'ADLC 六阶段 · PRD · Workflow · MCP · Hooks · 动手④ PRD · 动手⑤ subagent', color: '#38B6FF', lab: '🔨④⑤' },
	{ time: 'Part 4', t: '实战闭环 + 收尾', items: '课程 pipeline · 动手⑥ Capstone · 三心法 · 三步走', color: '#CB6CE6', lab: '🔨⑥' },
];

// 3 小时节奏表
export default function A01_Agenda() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.dark}>下午 2:00 – 5:00 · 边讲边做</Tag>
					<Title size="46px" style={{ marginTop: 10 }}>
						今天的节奏 —— <span style={{ background: colors.yellow, padding: '0 8px' }}>6 个动手环节</span>，跟着敲
					</Title>
				</motion.div>

				<div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginTop: 22 }}>
					{parts.map((p, i) => (
						<motion.div key={i}
							initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 + i * 0.1 }}
							style={{ display: 'flex', alignItems: 'center', gap: 16, background: p.t ? colors.white : 'transparent', border: p.t ? border : 'none', boxShadow: p.t ? shadow : 'none', padding: p.t ? '12px 18px' : '2px 18px' }}>
							<div style={{ width: 168, flexShrink: 0, fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: p.t ? colors.black : '#999' }}>{p.time}</div>
							{p.t ? (
								<>
									<div style={{ width: 5, alignSelf: 'stretch', background: p.color }} />
									<div style={{ flex: 1 }}>
										<div style={{ fontSize: 19, fontWeight: 900 }}>{p.t}</div>
										<div style={{ fontSize: 14, color: '#666', marginTop: 2 }}>{p.items}</div>
									</div>
									<div style={{ flexShrink: 0, fontSize: 15, fontWeight: 900, color: colors.red }}>{p.lab}</div>
								</>
							) : null}
						</motion.div>
					))}
				</div>
			</Inner>
		</Slide>
	);
}
