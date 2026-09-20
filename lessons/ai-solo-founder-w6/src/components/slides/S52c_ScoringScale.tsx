import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, CardSm, Tag, colors, border } from '../ui';

const levels = [
	['0 分', '没做到', '仍是一句大词，无法执行', colors.red],
	['1 分', '部分做到', '写了，但别人仍要追问细节', colors.yellow],
	['2 分', '完全做到', '组外的人可以直接接手执行', colors.green],
];

export default function S52c_ScoringScale() {
	return <Slide bg={colors.darkBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
		<Tag bg={colors.yellow} color={colors.black}>SCORING · 每项 0–2 分，满分 10</Tag>
		<Title white size="50px" style={{ margin: '14px 0 24px' }}>8 分及格：能被别人执行才算过</Title>
		<Grid cols={3} gap={20}>{levels.map(([score, label, body, color], index) => <motion.div key={score} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 + index * 0.14 }}><CardSm bg={color} style={{ minHeight: 175 }}><div style={{ fontSize: 34, fontWeight: 900 }}>{score}</div><h3 style={{ fontSize: 23, margin: '10px 0' }}>{label}</h3><p style={{ fontSize: 16, lineHeight: 1.45 }}>{body}</p></CardSm></motion.div>)}</Grid>
		<div style={{ marginTop: 26, padding: '16px 20px', border, background: colors.white, fontSize: 18, fontWeight: 900 }}>评分五项：目标可观察 · 按交付流拆解 · 任务有 Owner 与依赖 · 验收可判断 · 真实 Trim 并排了 Review</div>
		<p style={{ color: colors.white, fontSize: 18, marginTop: 18 }}>低于 8 分：现场指出缺哪一项，当场补齐后重评。</p>
	</Inner></Slide>;
}
