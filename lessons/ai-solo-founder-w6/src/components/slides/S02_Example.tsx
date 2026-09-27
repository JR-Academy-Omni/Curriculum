import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadowSm } from '../ui';

export default function S02_TheWeekSixTrap() {
	const steps = [
		['01', '明确问题', '谁遇到了什么困难？', colors.red],
		['02', '小批量计划', '只选本轮能完成的工作', colors.yellow],
		['03', '交付结果', '拿出可以看、可以用的增量', colors.green],
		['04', '获得反馈', '让用户与团队检验结果', colors.blue],
		['05', '调整方向', '保留有效做法，修正下一轮', colors.purple],
	];

	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
				<Tag bg={colors.dark}>PART 1 · AGILE 基础</Tag>
				<Title size="54px" style={{ margin: '14px 0 10px' }}>敏捷不是少做计划，而是持续学习</Title>
				<p style={{ fontSize: 19, marginBottom: 32, color: colors.dark }}>增量交付 · 团队协作 · 持续规划 · 持续学习</p>
				<div style={{ display: 'flex', alignItems: 'stretch', width: '100%' }}>
					{steps.map(([number, title, body, color], index) => (
						<div key={title} style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 0 }}>
							<motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 + index * 0.14 }} style={{ flex: 1, minHeight: 190, background: color, border, boxShadow: shadowSm, padding: '20px 16px' }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900 }}>{number}</div>
								<h3 style={{ fontSize: 24, margin: '22px 0 12px' }}>{title}</h3>
								<p style={{ fontSize: 17, lineHeight: 1.45 }}>{body}</p>
							</motion.div>
							{index < steps.length - 1 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + index * 0.14 }} style={{ fontSize: 30, fontWeight: 900, padding: '0 8px' }}>→</motion.div>}
						</div>
					))}
				</div>
				<motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: 1, duration: 0.5 }} style={{ alignSelf: 'stretch', transformOrigin: 'right', marginTop: 30, padding: '13px 20px', border, background: colors.white, textAlign: 'center', fontSize: 19, fontWeight: 800 }}>
					↖ 反馈不是终点：它会改变下一轮的问题、优先级与计划
				</motion.div>
			</Inner>
		</Slide>
	);
}
