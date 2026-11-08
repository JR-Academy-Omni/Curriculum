import { motion } from 'framer-motion';
import { DeckFrame, Panel, Label, colors } from '../kit';

const chain = ['触发', '判断', '产出', '交接', '回读'];

export default function S03_RealVsFake() {
	return <DeckFrame tag="01 · 先分清楚" title="真自动化和伪自动化，差在「判断」那一步" subtitle="把 A 应用的数据搬到 B 应用，每一步还要你来想，这只是搬运。">
		<div style={{ display: 'grid', gridTemplateColumns: '.85fr 1.15fr', gap: 26, height: '100%' }}>
			<Panel bg="#f4f1ec">
				<Label bg="#8a847c">搬运</Label>
				<div style={{ fontSize: 26, lineHeight: 1.55, marginTop: 20 }}>表单提交 → 抄进表格 → 发一封固定模板的邮件</div>
				<div style={{ fontSize: 22, lineHeight: 1.55, marginTop: 18, color: '#514c48' }}>该回什么、要不要跟进、这个客户重不重要，还是你自己判断。省掉的只是复制粘贴。</div>
			</Panel>
			<Panel>
				<Label bg={colors.red}>真自动化</Label>
				<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 24 }}>
					{chain.map((c, i) => <motion.div key={c} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 + i * .12 }} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
						<div style={{ background: c === '判断' ? colors.yellow : colors.white, border: `2px solid ${colors.dark}`, borderRadius: 16, padding: '14px 20px', fontSize: 28, fontWeight: 900 }}>{c}</div>
						{i < chain.length - 1 && <span style={{ fontSize: 30, fontWeight: 900 }}>→</span>}
					</motion.div>)}
				</div>
				<div style={{ fontSize: 23, lineHeight: 1.6, marginTop: 26 }}>
					例子：每天 9 点读完行业新闻，<b>挑出最值得我写的 3 个题目，并说清楚为什么</b>；10 点用排第一的那个写文章；发出去之后看数据，影响下周怎么挑。
				</div>
				<div style={{ fontSize: 22, lineHeight: 1.55, marginTop: 16, fontWeight: 700 }}>判断交给 Agent，你只看结果和例外。</div>
			</Panel>
		</div>
	</DeckFrame>;
}
