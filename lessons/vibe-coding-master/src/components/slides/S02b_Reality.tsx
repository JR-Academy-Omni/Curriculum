import { Slide, Inner, Half, Title, Tag, Card, CountUp, colors, fonts, border, shadow } from '../ui';
import { slideFromLeft, slideFromRight } from '../ui';
import { motion } from 'framer-motion';

// 现实：绝大多数人不会 AI coding，只是会 AI chat
export default function S02b_Reality() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.red}>第 0 章 · 现实</Tag>
						<Title size="54px" style={{ marginTop: 20, lineHeight: 1.14 }}>
							绝大多数人<br />不会 <span style={{ background: colors.yellow, padding: '0 10px' }}>AI coding</span>，<br />只是会 <span style={{ color: colors.red }}>AI chat</span>
						</Title>
						<p style={{ fontSize: 21, color: '#444', marginTop: 24, lineHeight: 1.6 }}>
							我做 AI coding 整整 <b>1 年</b>，带了 <b>15 场</b>，
							面对 <b>300 名同学</b> —— 数据很扎心。
						</p>
					</motion.div>
				</Half>
				<Half>
					<motion.div {...slideFromRight} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
						<div style={{ display: 'flex', gap: 12 }}>
							<Card bg={colors.white} style={{ flex: 1, textAlign: 'center', padding: '18px 12px' }}>
								<div style={{ fontFamily: fonts.heading, fontSize: 44, fontWeight: 900 }}>
									<CountUp value={1} />
								</div>
								<div style={{ fontSize: 14, color: '#777', marginTop: 2 }}>年做 AI coding</div>
							</Card>
							<Card bg={colors.white} style={{ flex: 1, textAlign: 'center', padding: '18px 12px' }}>
								<div style={{ fontFamily: fonts.heading, fontSize: 44, fontWeight: 900 }}>
									<CountUp value={15} />
								</div>
								<div style={{ fontSize: 14, color: '#777', marginTop: 2 }}>场分享</div>
							</Card>
							<Card bg={colors.white} style={{ flex: 1, textAlign: 'center', padding: '18px 12px' }}>
								<div style={{ fontFamily: fonts.heading, fontSize: 44, fontWeight: 900 }}>
									<CountUp value={300} />
								</div>
								<div style={{ fontSize: 14, color: '#777', marginTop: 2 }}>名同学</div>
							</Card>
						</div>
						<Card bg={colors.dark}>
							<div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
								<div style={{ fontFamily: fonts.heading, fontSize: 56, fontWeight: 900, color: colors.red }}>
									<CountUp value={10} suffix="%" duration={1.6} />
								</div>
								<div style={{ fontSize: 18, fontWeight: 800, color: colors.white }}>
									真正<span style={{ color: colors.yellow }}>会</span> AI coding 的人 &lt; 10%
								</div>
							</div>
						</Card>
						<Card bg={colors.dark}>
							<div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
								<div style={{ fontFamily: fonts.heading, fontSize: 56, fontWeight: 900, color: colors.yellow }}>
									<CountUp value={3} suffix="%" duration={1.6} />
								</div>
								<div style={{ fontSize: 18, fontWeight: 800, color: colors.white }}>
									能<span style={{ color: colors.yellow }}>高效</span>用起来的 &lt; 3%
								</div>
							</div>
						</Card>
					</motion.div>
				</Half>
			</Inner>

			<motion.div
				initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }}
				style={{ position: 'absolute', bottom: 60, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 14, alignItems: 'stretch' }}>
				<div style={{ background: '#fff', border, boxShadow: shadow, padding: '14px 22px', fontSize: 17, color: '#444' }}>
					<b style={{ color: colors.red }}>AI chat</b> = 你问它答，把 AI 当聊天机器人
				</div>
				<div style={{ background: colors.yellow, border, boxShadow: shadow, padding: '14px 22px', fontSize: 17, fontWeight: 700 }}>
					<b>AI coding</b> = 用结构化的规则·流程·真相「指挥」AI 替你把事干成
				</div>
			</motion.div>
		</Slide>
	);
}
