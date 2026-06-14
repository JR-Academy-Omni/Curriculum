import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { motion } from 'framer-motion';

const steps = [
	{ n: '今天', t: '写下你的第一份 CLAUDE.md', d: '挑一个项目，把「最常重复教 AI 的 5 件事」写成铁律。明天就省力。', color: '#ff5757' },
	{ n: '这周', t: '建一条记忆 + 跑一个 skill', d: '把一次踩坑沉淀成 auto-memory；找一件团队反复做的事，做成 skill。', color: '#FFDE59' },
	{ n: '这月', t: '用 ADLC 跑完一个真任务', d: '挑个复杂任务：写 PRD → 配上下文 → 让 AI 建 → 验收 → 上线 → 回流记忆。', color: '#7ED957' },
];

// 你的三步走
export default function S27_ThreeSteps() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.dark}>行动</Tag>
					<Title size="54px" style={{ marginTop: 12 }}>
						下课别只是「学过」——<span style={{ color: colors.red }}>三步走起来</span>
					</Title>
				</motion.div>

				<div style={{ display: 'flex', gap: 18, marginTop: 32 }}>
					{steps.map((s, i) => (
						<motion.div key={s.n}
							initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 + i * 0.16, duration: 0.5 }}
							style={{ flex: 1, background: colors.white, border, boxShadow: shadow, padding: '24px 22px', display: 'flex', flexDirection: 'column' }}>
							<div style={{ display: 'inline-block', alignSelf: 'flex-start', background: s.color, color: colors.black, fontFamily: fonts.mono, fontSize: 16, fontWeight: 900, padding: '6px 16px', border }}>{s.n}</div>
							<div style={{ fontSize: 23, fontWeight: 900, marginTop: 14, lineHeight: 1.2 }}>{s.t}</div>
							<div style={{ fontSize: 16, color: '#555', marginTop: 10, lineHeight: 1.55 }}>{s.d}</div>
						</motion.div>
					))}
				</div>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
					style={{ marginTop: 26, fontSize: 20, color: colors.red, fontWeight: 800, textAlign: 'center' }}>
					大师不是会更多技巧的人，是给 AI 建好了记忆和真相的人。
				</motion.p>
			</Inner>
		</Slide>
	);
}
