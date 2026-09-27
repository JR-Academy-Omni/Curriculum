import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { Body, SlideHead } from '../DeckTable';

const signals = [
	['01', '熟悉的行业', '哪一步总在救火？', '#FFE6DF'],
	['02', '反复遇到的麻烦', '最近一次发生在什么时候？', '#FFF2B8'],
	['03', '仍靠人工的工作', '谁每天在复制、整理、催促？', '#DFF3E7'],
	['04', '已经付钱的差体验', '钱花在哪里，为什么仍不满意？', '#E7E0FF'],
];

const questions = [
	'最近一次，具体发生了什么？',
	'谁最受影响，现在怎么处理？',
	'已经付出多少时间、人工或钱？',
];

export default function S03f_OpportunityScan() {
	return (
		<Slide bg={colors.white}>
			<Body style={{ padding: '28px 54px 22px' }}>
				<SlideHead
					tag="15 分钟 · AI 机会扫描"
					tagBg={colors.red}
					title="让 AI 帮你追问，不让 AI 替你编机会"
					sub="真实经历由你提供；AI 只把模糊抱怨追问成可验证的问题。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: '0.92fr 1.16fr 0.78fr', gap: 18, alignItems: 'stretch' }}>
					<div style={{ display: 'grid', gap: 9 }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, letterSpacing: 1.5 }}>YOU · 提供真实信号</div>
						{signals.map(([n, title, cue, bg], index) => (
							<motion.div
								key={title}
								initial={{ opacity: 0, x: -28 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.38, delay: 0.08 * index }}
								style={{ border, boxShadow: shadowSm, background: bg, padding: '11px 14px', display: 'grid', gridTemplateColumns: '42px 1fr', gap: 10, alignItems: 'center' }}
							>
								<div style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 900, color: colors.red }}>{n}</div>
								<div>
									<div style={{ fontSize: 18, fontWeight: 900 }}>{title}</div>
									<div style={{ marginTop: 2, fontSize: 14, lineHeight: 1.35, color: '#4b4b4b', fontWeight: 600 }}>{cue}</div>
								</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, scale: 0.94 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.28 }}
						style={{ position: 'relative', overflow: 'hidden', border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '18px 22px' }}
					>
						<motion.div
							initial={{ x: '-120%' }}
							animate={{ x: '520%' }}
							transition={{ duration: 2.8, delay: 0.7, ease: 'easeInOut' }}
							style={{ position: 'absolute', top: 0, bottom: 0, width: 54, background: 'linear-gradient(90deg, transparent, rgba(255,91,91,0.34), transparent)', transform: 'skewX(-12deg)' }}
						/>
						<div style={{ position: 'relative' }}>
							<div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16 }}>
								<div style={{ fontFamily: fonts.heading, fontSize: 46, lineHeight: 1, fontWeight: 900, color: colors.red }}>AI</div>
								<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: colors.yellow, letterSpacing: 1.2 }}>只追问 · 不代填</div>
							</div>
							<div style={{ marginTop: 10, fontSize: 23, lineHeight: 1.18, fontWeight: 900 }}>把每条经历追问到<br />能被验证</div>
							<div style={{ marginTop: 14, display: 'grid', gap: 10 }}>
								{questions.map((question, index) => (
									<div key={question} style={{ display: 'grid', gridTemplateColumns: '26px 1fr', gap: 9, alignItems: 'start', fontSize: 16, lineHeight: 1.35, fontWeight: 750 }}>
										<span style={{ color: colors.yellow, fontFamily: fonts.mono, fontWeight: 900 }}>{index + 1}</span>
										<span>{question}</span>
									</div>
								))}
							</div>
							<div style={{ marginTop: 14, paddingTop: 10, borderTop: '2px solid rgba(255,255,255,0.28)', fontFamily: fonts.mono, fontSize: 13, lineHeight: 1.4, color: '#cfd3e6' }}>
								禁止：发明用户、数据、痛点或付费意愿
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 28 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.45, delay: 0.48 }}
						style={{ border, boxShadow: shadowSm, background: '#FFF4EE', padding: '18px 17px', display: 'flex', flexDirection: 'column' }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, letterSpacing: 1.4 }}>OUTPUT · 留下三个</div>
						<div style={{ marginTop: 6, fontFamily: fonts.heading, fontSize: 54, lineHeight: 1, fontWeight: 900, color: colors.red }}>3</div>
						<div style={{ marginTop: 2, fontSize: 18, lineHeight: 1.3, fontWeight: 900 }}>本周能找到真人验证的问题</div>
						<div style={{ marginTop: 'auto', display: 'grid', gap: 16 }}>
							{['问题 A', '问题 B', '问题 C'].map((item) => (
								<div key={item} style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: '#555' }}>
									{item}<div style={{ marginTop: 5, borderBottom: '3px solid #111' }} />
								</div>
							))}
						</div>
					</motion.div>
				</div>

				<div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: '1fr 1.75fr 1fr', border, boxShadow: shadowSm, background: colors.yellow }}>
					{[['4 分钟', '独立写四条真实经历'], ['7 分钟', '让 AI 逐条追问，你自己补事实'], ['4 分钟', '留下三个可验证问题']].map(([time, action], index) => (
						<div key={time} style={{ padding: '9px 12px', textAlign: 'center', borderRight: index === 2 ? 'none' : '2px solid #111' }}>
							<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, color: colors.red }}>{time}</span>
							<span style={{ marginLeft: 9, fontSize: 15, fontWeight: 850 }}>{action}</span>
						</div>
					))}
				</div>
			</Body>
		</Slide>
	);
}
