import { motion } from 'framer-motion';
import { DeckFrame, colors, fonts } from '../deck';

const lines = [
	{ t: '先口述，再画成流程图，规则只写在一个地方', c: colors.blue },
	{ t: '开工前写清楚 AI 能碰什么、不能碰什么', c: colors.green },
	{ t: '算数交给程序，AI 负责对原文', c: colors.yellow },
	{ t: '活拆小了一起查，格式定死让程序检查，再换一个 AI 复查', c: colors.red },
	{ t: '出一次错记一条规矩；说「完成」，要拿出证据', c: colors.purple },
];

export default function S22_Takeaways() {
	return (
		<DeckFrame tag="总结" title="五句话带走" accent={colors.yellow}>
			<div style={{ display: 'grid', gap: 18, alignContent: 'center', height: '100%' }}>
				{lines.map((l, i) => (
					<motion.div key={l.t} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .4, delay: .15 + i * .12 }}
						style={{ display: 'flex', alignItems: 'center', gap: 22, background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 20, boxShadow: `6px 6px 0 ${l.c}`, padding: '16px 26px' }}>
						<span style={{ fontFamily: fonts.mono, fontWeight: 800, fontSize: 24, width: 34 }}>{i + 1}</span>
						<span style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 32 }}>{l.t}</span>
					</motion.div>
				))}
			</div>
		</DeckFrame>
	);
}
