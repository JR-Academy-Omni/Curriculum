import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { slideFromLeft } from '../ui';
import { motion } from 'framer-motion';

const steps = [
	{ label: '被替代', sub: '同样的活，别人用 AI 半天干完' },
	{ label: '被挤出去', sub: '岗位需求变了，你的技能不再被要' },
	{ label: '告别 AI / IT 行业', sub: '门槛抬高，连入场券都拿不到' },
];

// 下场：不会 AI coding 的代价
export default function S02d_Stakes() {
	return (
		<Slide bg={colors.darkBg}>
			<Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
				<motion.div {...slideFromLeft}>
					<Tag bg={colors.red}>第 0 章 · 代价</Tag>
					<Title size="56px" white style={{ marginTop: 14 }}>
						不会 AI coding 的<span style={{ color: colors.red }}>下场</span>
					</Title>
				</motion.div>

				<div style={{ display: 'flex', gap: 20, marginTop: 40, alignItems: 'stretch' }}>
					{steps.map((s, i) => (
						<div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 20, flex: 1 }}>
							<motion.div
								initial={{ opacity: 0, scale: 0.5, y: 30 }}
								animate={{ opacity: 1, scale: 1, y: 0 }}
								transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.3 + i * 0.35 }}
								style={{ flex: 1, background: i === 2 ? colors.red : colors.white, border, boxShadow: shadow, padding: '26px 22px', textAlign: 'center' }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 13, color: i === 2 ? '#ffffffcc' : '#999', marginBottom: 8 }}>
									0{i + 1}
								</div>
								<div style={{ fontFamily: fonts.heading, fontSize: 30, fontWeight: 900, color: i === 2 ? colors.white : colors.black, lineHeight: 1.2 }}>
									{s.label}
								</div>
								<div style={{ fontSize: 15, color: i === 2 ? '#ffffffdd' : '#666', marginTop: 10, lineHeight: 1.45 }}>
									{s.sub}
								</div>
							</motion.div>
							{i < steps.length - 1 && (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.5 + i * 0.35 }}
									style={{ fontFamily: fonts.heading, fontSize: 40, fontWeight: 900, color: colors.yellow }}>
									→
								</motion.div>
							)}
						</div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.5 }}
					style={{ marginTop: 44, alignSelf: 'flex-start', fontSize: 18, color: '#ffffffaa', fontStyle: 'italic' }}>
					不是吓你 —— 这是我这一年带 300 个人，亲眼看到的趋势。
				</motion.div>
			</Inner>
		</Slide>
	);
}
