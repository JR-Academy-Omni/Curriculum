import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

export default function S05c_OneMainline() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="① 选型 · 现场定"
					tagBg={colors.red}
					title="每人只装一条主线，写下来再动手"
					sub="装两个的人，今天两个都配不完，下周两个都不会用。"
				/>
				<div style={{ display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 20 }}>
					<motion.div
						initial={{ opacity: 0, y: 18 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.35, delay: 0.12 }}
						style={{ border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '26px 28px' }}
					>
						<div style={{ fontFamily: fonts.mono, color: colors.yellow, fontWeight: 900, fontSize: 15, letterSpacing: 1 }}>现在写在你的 SoT 旁边</div>
						<div style={{ marginTop: 20, fontSize: 27, lineHeight: 1.75, fontWeight: 850 }}>
							我选 <span style={{ background: colors.yellow, color: colors.black, padding: '2px 26px' }}>　　　　　</span><br />
							因为我要它每周替我做完 <span style={{ background: colors.yellow, color: colors.black, padding: '2px 26px' }}>　　　　　</span><br />
							结果送到 <span style={{ background: colors.yellow, color: colors.black, padding: '2px 26px' }}>　　　　　</span>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 18 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.35, delay: 0.24 }}
						style={{ border, boxShadow: shadow, background: colors.white, padding: '24px 24px' }}
					>
						<div style={{ fontFamily: fonts.mono, color: colors.red, fontWeight: 900, fontSize: 15, letterSpacing: 1 }}>本节课的三条约束</div>
						<ol style={{ marginTop: 18, paddingLeft: 22, fontSize: 20, lineHeight: 1.85, fontWeight: 650 }}>
							<li>只装一条主线，装完再想第二个</li>
							<li>选完不许中途换——换了今天就配不完</li>
							<li>装不上先举手，不要一个人闷头装到下课</li>
						</ol>
					</motion.div>
				</div>
				<Punchline bg={colors.red}>
					以后想补第二个 agent 是<u>后面课程的内容</u>，不是今天的任务。
				</Punchline>
			</Body>
		</Slide>
	);
}
