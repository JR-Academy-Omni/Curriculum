import { motion } from 'framer-motion';
import { colors, fonts, radii } from '../ui';
import { PartFrame, Evidence, Bubble, Punch, Mark, card, RunLine, FULL_RUN } from './_shared';

// 裁判错判：G19、G12 回答都有据，faithfulness 却低于 0.7 阈值，被标成 grounding 失败（回答原文）
const cases = [
	{ id: 'G19', q: '可以把吃剩的饭菜放在我妈房间里吗？', ev: '易腐食品不得存放在住户房间内，可放在楼层公共冰箱，最多存放 48 小时。', a: '不可以，易腐食品不得存放在住户房间内。', score: '0.5' },
	{ id: 'G12', q: '我妈吞咽困难，我能给她带生日蛋糕吗？', ev: '如果住户有吞咽困难……家属带任何食物前需先咨询当班护士。', a: '如果您的母亲有吞咽困难，带入蛋糕前需先咨询当班护士。……', score: '0.2' },
];

export default function S18_JudgeWrong() {
	return (
		<PartFrame part="report" title="裁判，也会判错" subtitle="faithfulness 低于 0.7，就记作 grounding 失败。下面两条都被记了。">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
				{cases.map((c, i) => (
					<motion.div key={c.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.32, delay: 0.15 + i * 0.25 }}
						style={{ ...card, padding: '14px 18px', display: 'grid', gap: 10, alignContent: 'start' }}>
						<div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
							<span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700 }}>{c.id}</span>
							<span style={{ flex: 1 }} />
							<span style={{ fontSize: 18, fontWeight: 800 }}>faithfulness</span>
							<span style={{ fontFamily: fonts.mono, fontSize: 26, fontWeight: 700, background: colors.red, color: colors.white, borderRadius: radii.pill, padding: '0 14px' }}>{c.score}</span>
						</div>
						<Bubble who="家属">{c.q}</Bubble>
						<Evidence id="检索到的原文" gold>{c.ev}</Evidence>
						<Bubble who="助手" bg="#e6f6dd">{c.a}</Bubble>
					</motion.div>
				))}
			</div>
			<Punch delay={0.9} size={27}>5 条 grounding 失败里，抽检至少 2 条是裁判错。<Mark>先抽检，再相信</Mark>。</Punch>
			<RunLine>{FULL_RUN}</RunLine>
		</PartFrame>
	);
}
