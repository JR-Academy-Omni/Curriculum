import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, assetPath, colors, fonts, border, shadowSm } from '../ui';
import { DIAGNOSTIC_ROLES } from '../../data/diagnosticRoles';

export default function S35a_DiagnosticRoles() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', height: '90%' }}>
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 18, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}
				>
					<div>
						<div style={{
							display: 'inline-block', padding: '5px 12px', background: colors.red,
							color: colors.white, fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, letterSpacing: 2, marginBottom: 10,
						}}>
							CHAPTER 5 · 测完会知道
						</div>
						<Title size="44px">
							你是<span style={{ color: colors.red }}> 9 种角色 </span>里的哪一种？
						</Title>
					</div>
					<div style={{
						padding: '8px 14px', background: colors.dark, color: colors.yellow,
						fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, letterSpacing: 1,
					}}>
						3 分钟 · 9 道题
					</div>
				</motion.div>

				<motion.div
					initial="hidden"
					animate="visible"
					variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } } }}
					style={{ width: '100%', flex: 1 }}
				>
					<Grid cols={3} gap={14}>
						{DIAGNOSTIC_ROLES.map(role => (
							<motion.div
								key={role.key}
								variants={{
									hidden: { opacity: 0, y: 20, scale: 0.94 },
									visible: { opacity: 1, y: 0, scale: 1 },
								}}
								transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
								style={{
									background: colors.white, border, boxShadow: shadowSm,
									padding: 14, display: 'flex', gap: 12, alignItems: 'center',
									minHeight: 142,
								}}
							>
								<div style={{
									width: 110, height: 110, flexShrink: 0,
									background: role.color + '20', // 20 = 12% alpha
									border: '2px solid #000', display: 'flex',
									alignItems: 'center', justifyContent: 'center',
									overflow: 'hidden',
								}}>
									<img
										src={assetPath(role.imagePath)}
										alt={role.displayName}
										style={{ width: '100%', height: '100%', objectFit: 'cover' }}
									/>
								</div>
								<div style={{ flex: 1, minWidth: 0 }}>
									<div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
										<span style={{ fontSize: 20 }}>{role.emoji}</span>
										<span style={{ fontSize: 17, fontWeight: 900, color: colors.dark }}>{role.displayName}</span>
									</div>
									<div style={{
										fontFamily: fonts.mono, fontSize: 10, color: '#888', letterSpacing: 1, marginBottom: 6,
									}}>{role.englishName}</div>
									<div style={{ fontSize: 11, lineHeight: 1.45, color: '#333' }}>
										{role.tagline}
									</div>
								</div>
							</motion.div>
						))}
					</Grid>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 1.2 }}
					style={{
						marginTop: 14, padding: '14px 22px', background: colors.dark, color: colors.white,
						width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
					}}
				>
					<div>
						<span style={{ fontFamily: fonts.mono, fontSize: 11, color: colors.yellow, letterSpacing: 2 }}>立刻测试 →</span>
						<span style={{ marginLeft: 12, fontSize: 18, fontWeight: 700 }}>jiangren.com.au/career-impact-map/diagnostic</span>
					</div>
					<div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>
						免费 · 不收邮箱 · 当场出结果
					</div>
				</motion.div>
			</Inner>
		</Slide>
	);
}
