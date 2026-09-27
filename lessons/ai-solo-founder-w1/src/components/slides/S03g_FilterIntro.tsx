import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const steps = [
	['01', '写下 3 个候选机会', '不要急着只留下自己最喜欢的那个', '#FFE6DF'],
	['02', '按 7 个维度打 1—5 分', '每一分都要能说出理由', '#FFF2B8'],
	['03', '检查三个一票否决', '硬门槛优先于总分', '#DFF3E7'],
];

export default function S03g_FilterIntro() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="第四部分 · 机会筛选模型"
					tagBg={colors.red}
					title="三个想法放在一起，哪个值得先验证？"
					sub="评分不是为了算出标准答案，而是逼你看清每个想法背后的假设。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
					{steps.map(([n, title, copy, bg], index) => (
						<motion.div key={title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * index }} style={{ border, boxShadow: shadow, background: bg, padding: '24px 22px', minHeight: 205 }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 32, fontWeight: 900, color: colors.red }}>{n}</div>
							<div style={{ marginTop: 18, fontSize: 25, lineHeight: 1.25, fontWeight: 900 }}>{title}</div>
							<div style={{ marginTop: 12, fontSize: 18, lineHeight: 1.45 }}>{copy}</div>
						</motion.div>
					))}
				</div>

				<Punchline>总分高，不代表现在适合做。能找到用户、说清付款人、快速测试，才有资格进入下一轮。</Punchline>
			</Body>
		</Slide>
	);
}
