import { motion } from 'framer-motion';
import { colors, fonts } from '../ui';
import { Label } from '../deck';
import { PartFrame, Bubble, Punch, Mark, card, line } from './_shared';

// 开放问题：模型不知道 CareKind 的政策，怎么办（学员的办法引出第 5 页；「拿去训练」指回第 3 页的测试）
export default function S04_Question() {
	return (
		<PartFrame part="position" title="模型没见过 CareKind 的政策，怎么办？">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30, alignItems: 'center' }}>
				<motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.15 }}
					style={{ ...card, background: colors.dark, border: line, padding: '22px 24px', display: 'grid', gap: 16 }}>
					<div><Label bg={colors.yellow} color={colors.black}>CareKind 的照护助手</Label></div>
					<Bubble who="家属">这周末能带孩子来探视吗？</Bubble>
					<Bubble who="助手" bg="#ffd9d9">可以，周末全天开放，欢迎带孩子来。</Bubble>
					<div style={{ color: colors.white, fontSize: 21, fontWeight: 700, lineHeight: 1.5 }}>真实的政策是：周末探视要提前 24 小时预约。</div>
				</motion.div>
				<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.5 }}>
					<div style={{ fontSize: 40, fontWeight: 900, lineHeight: 1.45 }}>模型没见过这份政策，<br />只能 <Mark color={colors.red}>猜</Mark>。</div>
					<div style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.5, marginTop: 26 }}>怎么让它答对？</div>
					<div style={{ fontFamily: fonts.mono, fontSize: 22, fontWeight: 700, marginTop: 14 }}>在聊天框写一个办法。</div>
				</motion.div>
			</div>
			<Punch delay={0.9} size={24} mt={30}><span style={{ color: '#514c48' }}>下一页，把大家的办法逐个过一遍。</span></Punch>
		</PartFrame>
	);
}
