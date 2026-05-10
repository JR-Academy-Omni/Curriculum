import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import VideoFrame from './VideoFrame';

export default function L30_WelcomeClose() {
	return (
		<Slide bg={colors.dark} style={{ position: 'relative', overflow: 'hidden' }}>
			<div style={{
				position: 'absolute', inset: 0,
				backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.025) 0 2px, transparent 2px 24px)`,
				zIndex: 0,
			}} />

			{/* 左侧装饰：黄色色块 */}
			<motion.div
				initial={{ scale: 0, rotate: 0 }}
				animate={{ scale: 1, rotate: 12 }}
				transition={{ duration: 0.6, delay: 0.1 }}
				style={{
					position: 'absolute', top: -100, left: -60, width: 240, height: 240,
					background: colors.yellow, border: `6px solid ${colors.black}`, zIndex: 0,
				}}
			/>

			{/* 右侧 9:16 竖屏视频 card */}
			<VideoFrame
				src="videos/vertical.mp4"
				width={300} height={533}
				position={{ top: 110, right: 80 }}
				rotate={3}
				border={`5px solid ${colors.black}`}
				shadow={`10px 10px 0 ${colors.yellow}`}
				caption="STARTS APR 12 · 2026"
			/>

			<div style={{ position: 'relative', zIndex: 1, width: '70%', maxWidth: 1180, marginRight: 'auto', marginLeft: '120px', textAlign: 'left' }}>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					style={{
						display: 'inline-block', padding: '8px 20px',
						background: colors.yellow, color: colors.black,
						fontFamily: fonts.mono, fontSize: 19, fontWeight: 900, letterSpacing: 2,
						border: `4px solid ${colors.black}`, boxShadow: `5px 5px 0 ${colors.white}`,
						marginBottom: 30,
					}}
				>
					LECTURE 01 · END
				</motion.div>

				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					style={{
						fontFamily: fonts.heading, fontSize: 116, fontWeight: 900,
						lineHeight: 0.95, letterSpacing: -3, color: colors.white,
						textShadow: `6px 6px 0 ${colors.indigo}`,
					}}
				>
					接下来 <span style={{ color: colors.yellow }}>178 天</span><br />
					<span style={{
						display: 'inline-block', background: colors.white, color: colors.dark,
						padding: '0 22px', border: `5px solid ${colors.black}`,
						boxShadow: `8px 8px 0 ${colors.indigo}`,
						transform: 'rotate(-0.5deg)', marginTop: 12,
					}}>
						造出 CareerMate AI
					</span>
				</motion.h1>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 1.0 }}
					style={{
						marginTop: 36, display: 'flex', gap: 12, flexWrap: 'wrap',
					}}
				>
					{[
						{ k: 'jiangren.com.au', v: '所有内容入口' },
						{ k: '微信群', v: '日常 Q&A · 同期 connection' },
						{ k: '直播 #1 · 4-12 周日', v: '7pm AEST' },
					].map((m) => (
						<div key={m.k} style={{
							background: colors.white, border, boxShadow: shadow,
							padding: '12px 18px', minWidth: 200,
						}}>
							<div style={{ fontFamily: fonts.mono, fontSize: 15, color: '#666', fontWeight: 800, letterSpacing: 1 }}>
								{m.v}
							</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 18, color: colors.black, fontWeight: 900, letterSpacing: -0.4 }}>
								{m.k}
							</div>
						</div>
					))}
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 1.4 }}
					style={{
						marginTop: 40, fontFamily: fonts.mono, fontSize: 17,
						color: 'rgba(255,255,255,0.5)', fontWeight: 700, letterSpacing: 3,
					}}
				>
					LIGHTMAN WANG · JR ACADEMY · 第 30 期 · 2026
				</motion.div>
			</div>
		</Slide>
	);
}
