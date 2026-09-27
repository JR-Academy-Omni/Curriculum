import { motion } from 'framer-motion';
import { Slide, Inner, colors, fonts, border, shadow } from '../ui';

export default function S25_Closing() {
	return (
		<Slide bg={colors.dark}>
			<Inner center>
				<div style={{ textAlign: 'center', width: '100%' }}>
					<motion.div
						initial={{ opacity: 0, y: -14 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4 }}
						style={{
							display: 'inline-block',
							padding: '7px 18px',
							background: colors.yellow,
							color: colors.black,
							fontFamily: fonts.mono,
							fontSize: 14,
							fontWeight: 700,
							letterSpacing: 2.5,
							marginBottom: 30,
						}}
					>
						W4 · 过关线
					</motion.div>

					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.15 }}
						style={{
							fontFamily: fonts.heading,
							fontSize: 'clamp(40px, 4vw, 62px)',
							fontWeight: 900,
							color: colors.white,
							lineHeight: 1.18,
							marginBottom: 34,
						}}
					>
						一份说明，
						<span style={{ background: colors.red, padding: '0 16px' }}>控制所有产物</span>
					</motion.h2>

					<motion.div
						initial={{ opacity: 0, y: 18 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(3, 1fr)',
							gap: 18,
							maxWidth: 1080,
							margin: '0 auto 32px',
						}}
					>
						{[
							{ t: '一份说明', d: '七个问题答满，没定的写没定' },
							{ t: '一套品牌', d: '规范 + logo + 吉祥物 + 周边' },
							{ t: '一个网页', d: '手机上点开就能看' },
						].map((x) => (
							<div key={x.t} style={{ background: colors.white, border, boxShadow: shadow, padding: '18px 16px' }}>
								<div style={{ fontFamily: fonts.heading, fontSize: 24, fontWeight: 900, marginBottom: 8 }}>{x.t}</div>
								<div style={{ fontSize: 15.5, lineHeight: 1.45, color: '#444' }}>{x.d}</div>
							</div>
						))}
					</motion.div>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.7 }}
						style={{ fontSize: 21, color: '#c8d0d8', lineHeight: 1.6, maxWidth: 900, margin: '0 auto' }}
					>
						今天你看到的不是「AI 好厉害」。是<b style={{ color: colors.yellow }}>把一件复杂的事拆清楚之后，AI 才能接手</b>。
						<br />
						拆不清楚的事，给它再强的模型也做不出来。
					</motion.p>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.95 }}
						style={{ marginTop: 30, fontFamily: fonts.mono, fontSize: 14, color: '#7a8590', letterSpacing: 1.5 }}
					>
						JR ACADEMY · AI 一人创业营 · W4
					</motion.p>
				</div>
			</Inner>
		</Slide>
	);
}
