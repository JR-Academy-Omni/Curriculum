import { motion } from 'framer-motion';
import { Slide, Inner, colors, fonts, border, shadow } from '../ui';

export default function S32_Closing() {
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
						W3 · 过关线
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
						从「我觉得」
						<span style={{ background: colors.red, padding: '0 16px' }}>到「我算过」</span>
					</motion.h2>

					<motion.div
						initial={{ opacity: 0, y: 18 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, maxWidth: 1080, margin: '0 auto 32px' }}
					>
						{[
							{ t: '一条算式', d: '四个数字都填得出来，知道单量从哪来' },
							{ t: '一个形态 + 一个价', d: '两者对得上，不会当场被叫停' },
							{ t: '一个裁决', d: '继续 / 调整 / 换，白纸黑字' },
						].map((x) => (
							<div key={x.t} style={{ background: colors.white, border, boxShadow: shadow, padding: '18px 16px' }}>
								<div style={{ fontFamily: fonts.heading, fontSize: 23, fontWeight: 900, marginBottom: 8 }}>{x.t}</div>
								<div style={{ fontSize: 15.5, lineHeight: 1.45, color: '#444' }}>{x.d}</div>
							</div>
						))}
					</motion.div>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.7 }}
						style={{ fontSize: 21, color: '#c8d0d8', lineHeight: 1.6, maxWidth: 940, margin: '0 auto' }}
					>
						今天没做出任何一样能给人看的东西。
						<b style={{ color: colors.yellow }}>但你少走的那些路，才是这三小时真正的产出。</b>
						<br />
						做错方向的人，通常不是不努力——是没有人在第三周逼他算这笔账。
					</motion.p>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.95 }}
						style={{ marginTop: 30, fontFamily: fonts.mono, fontSize: 14, color: '#7a8590', letterSpacing: 1.5 }}
					>
						JR ACADEMY · AI 一人创业营 · W3
					</motion.p>
				</div>
			</Inner>
		</Slide>
	);
}
