// Migrated teaching page; original source: lessons/vibe-coding-master-l2/src/components/slides/L2P01_Ceiling.tsx
import { Slide, Inner, Half, Title, Tag, colors, fonts, border, shadow } from '../courseUi';
import { slideFromLeft, slideFromRight } from '../courseUi';
import { motion } from 'framer-motion';
// 会写代码是底牌，会定义需求是护城河
export default function L2P01_Ceiling() {
    return (<Slide bg={colors.warmBg}>
			<Inner split>
				<Half>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.red}>第 2 课 · 天花板</Tag>
						<Title size="46px" style={{ marginTop: 20, lineHeight: 1.16 }}>
							会写代码是<span style={{ color: colors.red }}>底牌</span>，<br />
							会<span style={{ background: colors.yellow, padding: '0 10px' }}>定义需求</span>是护城河
						</Title>
						<div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>
							<div style={{ borderRadius: 18, background: '#fff', border, boxShadow: shadow, padding: '16px 20px' }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: colors.red }}>价值上移</div>
								<p style={{ fontSize: 18, color: '#333', marginTop: 6, lineHeight: 1.55 }}>
									工程师只会「实现」是天花板；AI 把「实现」打到<b>地板价</b> ——
									从「你能不能<b>写出来</b>」变成「你能不能<b>定义出对的东西</b>让它写」。
								</p>
							</div>
							<div style={{ borderRadius: 18, background: colors.dark, border, boxShadow: shadow, padding: '16px 20px' }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: colors.yellow }}>GIGO · 职业天花板</div>
								<p style={{ fontSize: 18, color: '#fff', marginTop: 6, lineHeight: 1.55 }}>
									Garbage in, garbage out 在 AI 时代是你的<span style={{ color: colors.yellow }}>职业天花板</span> ——
									需求错，AI 执行越快，你错得越彻底。
								</p>
							</div>
						</div>
					</motion.div>
				</Half>
				<Half>
					<motion.div {...slideFromRight} style={{ borderRadius: 18, background: colors.yellow, border, boxShadow: shadow, padding: '36px 32px' }}>
						<div style={{ fontFamily: fonts.heading, fontSize: 80, fontWeight: 900, lineHeight: 0.8, color: colors.black }}>“</div>
						<p style={{ fontSize: 27, fontWeight: 800, color: colors.black, lineHeight: 1.5, marginTop: -10 }}>
							过去工程师的价值是
							<span style={{ background: colors.black, color: colors.white, padding: '0 8px', margin: '0 2px' }}>把需求写成代码</span>；
							AI 时代是
							<span style={{ background: colors.red, color: colors.white, padding: '0 8px', margin: '0 2px' }}>把问题定义成需求</span>。
						</p>
						<div style={{ height: 3, background: colors.black, margin: '22px 0' }}/>
						<p style={{ fontSize: 22, fontWeight: 700, color: colors.black, lineHeight: 1.5 }}>
							代码 AI 替你写，但<b>要解决什么问题</b>，只能你自己看见。
						</p>
					</motion.div>
				</Half>
			</Inner>
		</Slide>);
}
