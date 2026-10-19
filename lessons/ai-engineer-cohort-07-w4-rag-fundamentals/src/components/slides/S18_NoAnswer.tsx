import { motion } from 'framer-motion';
import { colors } from '../ui';
import { Label } from '../deck';
import { PartFrame, Bubble, Punch, Mark, card, line, muted } from './_shared';

// 兜底：答「不知道」是正确行为
export default function S18_NoAnswer() {
	return (
		<PartFrame part="fallback" title="答「不知道」，是正确行为" subtitle="家属问：「能带狗来探视吗？」检索返回空。">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
				{[
					{ label: '编一个', bg: colors.red, a: '可以，小型犬都欢迎。' },
					{ label: 'No-answer', bg: colors.green, a: '现有探视政策里没有提到宠物。我帮你转给前台确认。' },
				].map((c, i) => (
					<motion.div key={c.label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.15 + i * 0.3 }}
						style={{ ...card, background: colors.dark, border: line, padding: '20px 22px', display: 'grid', gap: 14, alignContent: 'start', minHeight: 250 }}>
						<div><Label bg={c.bg} color={c.bg === colors.red ? colors.white : colors.black}>{c.label}</Label></div>
						<Bubble who="家属">能带狗来探视吗？</Bubble>
						<Bubble who="助手" bg={i === 0 ? '#ffd9d9' : colors.white}>{c.a}</Bubble>
					</motion.div>
				))}
			</div>
			<Punch delay={0.9} size={29} mt={24}>没有证据，就 <Mark>说没有，再交出去</Mark>。</Punch>
			<Punch delay={1.1} size={22} mt={8}><span style={{ color: muted }}>上节课的四条路：Fail、Ask、Retrieve、Escalate。检索过了还没有，走 Fail 或 Escalate。</span></Punch>
		</PartFrame>
	);
}
