import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { motion } from 'framer-motion';

const principles = [
	{ n: '心法 1', t: '先建真相，再让 AI 干活', d: '别急着 prompt。先把规则、数据、决策落成 SoT —— AI 的天花板由真相质量决定。', color: '#ff5757' },
	{ n: '心法 2', t: '记忆要沉淀，更要维护', d: '踩坑写进记忆，治本不治标；同时查重、纠错、删过时 —— 记忆系统不是只进不出的垃圾桶。', color: '#7ED957' },
	{ n: '心法 3', t: '把流程工程化（ADLC）', d: '复杂任务走 目标→上下文→PRD→建→验→上线→回流。让 AI 干活也能被规划、复现、验收。', color: '#38B6FF' },
];

// 大师三心法
export default function S25_Principles() {
	return (
		<Slide bg={colors.dark}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.yellow} color={colors.black}>第 6 章 · 收束</Tag>
					<Title white size="54px" style={{ marginTop: 12 }}>
						大师的<span style={{ color: colors.yellow }}>三条心法</span>
					</Title>
				</motion.div>

				<div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 30 }}>
					{principles.map((p, i) => (
						<motion.div key={p.n}
							initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
							style={{ display: 'flex', alignItems: 'center', gap: 22, background: colors.white, border, boxShadow: shadow, padding: '18px 24px' }}>
							<div style={{ flexShrink: 0, fontFamily: fonts.mono, fontSize: 15, fontWeight: 900, color: colors.white, background: p.color, padding: '8px 14px' }}>{p.n}</div>
							<div>
								<div style={{ fontSize: 26, fontWeight: 900 }}>{p.t}</div>
								<div style={{ fontSize: 17, color: '#555', marginTop: 4, lineHeight: 1.5 }}>{p.d}</div>
							</div>
						</motion.div>
					))}
				</div>
			</Inner>
		</Slide>
	);
}
