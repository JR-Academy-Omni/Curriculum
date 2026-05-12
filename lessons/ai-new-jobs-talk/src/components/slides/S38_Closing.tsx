import { motion } from 'framer-motion';
import { Slide, Inner, Title, colors, fonts, border, shadow } from '../ui';

const LINKS = [
	{ label: '23 个新岗位完整库', url: 'jiangren.com.au/ai-new-jobs', note: '每个岗位的薪资、核心技能、典型雇主、推荐学习路径' },
	{ label: '自检你现在的岗位', url: 'jiangren.com.au/career-impact-map', note: '78 个传统岗位 AI 风险评级 + 转型建议' },
	{ label: '加微信社群', url: 'WeChat: jracademy_official', note: '1 对 1 学习咨询 / 课程详情 / 转型路径建议' },
];

export default function S38_Closing() {
	return (
		<Slide bg={colors.dark}>
			<Inner style={{ flexDirection: 'column', gap: 32 }}>
				<div style={{ textAlign: 'center', width: '100%', marginBottom: 12 }}>
					<motion.div
						initial={{ opacity: 0, y: -16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4 }}
						style={{
							display: 'inline-block', padding: '8px 18px', background: colors.yellow,
							color: colors.black, fontFamily: fonts.mono, fontSize: 14, fontWeight: 700,
							letterSpacing: 3, marginBottom: 24,
						}}
					>Q & A · 接下来怎么走</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
					>
						<Title white size="80px" style={{ lineHeight: 1.1 }}>
							你今天<motion.span
								initial={{ background: 'rgba(255,222,89,0)' }}
								animate={{ background: 'rgba(255,222,89,1)' }}
								transition={{ duration: 0.5, delay: 0.9 }}
								style={{ color: colors.black, padding: '0 16px', display: 'inline-block' }}
							>只需要做一件事</motion.span>：
						</Title>
					</motion.div>
					<motion.p
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 1.3 }}
						style={{
							fontSize: 28, color: 'rgba(255,255,255,0.7)', marginTop: 20,
							maxWidth: 1100, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.5,
						}}
					>
						去 career-impact-map 查一下你现在的岗位 · 看它 AI 风险评级 · 看它对应的转型 role
					</motion.p>
				</div>

				<motion.div
					initial="hidden"
					animate="visible"
					variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 1.6 } } }}
					style={{ display: 'flex', gap: 20, width: '100%' }}
				>
					{LINKS.map(l => (
						<motion.div
							key={l.url}
							variants={{
								hidden: { opacity: 0, y: 28, scale: 0.95 },
								visible: { opacity: 1, y: 0, scale: 1 },
							}}
							transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
							style={{
								flex: 1, background: colors.white, border, boxShadow: shadow,
								padding: 24, minHeight: 180,
							}}
						>
							<div style={{
								fontFamily: fonts.mono, fontSize: 11, color: '#888', letterSpacing: 2, marginBottom: 8,
							}}>RESOURCE</div>
							<div style={{ fontSize: 22, fontWeight: 900, marginBottom: 10, lineHeight: 1.2 }}>{l.label}</div>
							<div style={{
								padding: '6px 10px', background: colors.dark, color: colors.yellow,
								fontFamily: fonts.mono, fontSize: 12, marginBottom: 12, wordBreak: 'break-all',
							}}>{l.url}</div>
							<div style={{ fontSize: 13, color: '#555', lineHeight: 1.5 }}>{l.note}</div>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.4, delay: 2.3 }}
					style={{ textAlign: 'center', width: '100%' }}
				>
					<div style={{
						fontFamily: fonts.mono, fontSize: 12, color: 'rgba(255,255,255,0.4)',
						letterSpacing: 3,
					}}>
						JR ACADEMY · 全球华人学习 AI 第一站 · jiangren.com.au · 数据截至 2026-05
					</div>
				</motion.div>
			</Inner>
		</Slide>
	);
}
