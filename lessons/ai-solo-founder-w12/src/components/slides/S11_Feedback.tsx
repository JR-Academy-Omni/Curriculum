import { motion } from 'framer-motion';
import { DeckFrame, Panel, Label, colors } from '../kit';

const loop = [['发出去', colors.yellow], ['24 小时后读数据', colors.white], ['对照当时的打分', colors.white], ['提出改规则的建议', colors.orange], ['你决定改不改', colors.dark]] as const;

export default function S11_Feedback() {
	return <DeckFrame tag="02 · 形态 6 · 反馈闭环" title="今天的结果，影响明天的选择" subtitle="打分高、实际没人看的选题，说明你的打分规则哪里不对。让 Agent 把这件事每周查一遍。" accent={colors.orange}>
		<div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 8, flexWrap: 'nowrap' }}>
			{loop.map(([t, c], i) => <motion.div key={t} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 + i * .12 }} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
				<div style={{ background: c, color: c === colors.dark ? colors.white : colors.dark, border: `2px solid ${colors.dark}`, borderRadius: 18, padding: '18px 20px', fontSize: 25, fontWeight: 900, whiteSpace: 'nowrap' }}>{t}</div>
				{i < loop.length - 1 && <span style={{ fontSize: 30, fontWeight: 900 }}>→</span>}
			</motion.div>)}
		</div>
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, marginTop: 30 }}>
			<Panel><Label>为什么只提建议</Label><div style={{ fontSize: 24, lineHeight: 1.55, marginTop: 14 }}>规则是你对生意的判断。让它自己改规则，几周之后你就不知道它为什么这样选题了。</div></Panel>
			<Panel bg="#ffe9e9"><Label bg={colors.red}>它怎么失败</Label><div style={{ fontSize: 24, lineHeight: 1.55, marginTop: 14 }}>只有两三条数据，它也硬给你一份「规律」。数据不够时，正确的回答是：数据不足，下周再看。</div></Panel>
		</div>
	</DeckFrame>;
}
