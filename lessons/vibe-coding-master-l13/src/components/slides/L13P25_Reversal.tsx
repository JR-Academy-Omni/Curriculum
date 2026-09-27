import { motion } from 'framer-motion';
import { ActBadge, BigLine, colors, fonts, border } from '../deck';

// P20 · 看它留不留空 🎬⭐⭐ 反转
// 🚨 P20 到 P22 一口气到底。中间不许喝水不许答疑。
// 🚨 顺序：先验证 → 再翻转 → 最后才给对照清单（P21 前半）。
//    早先版本把对照答案放在验证之前，反转的意外感就没了。
export default function L13P25_Reversal() {
	return (
		<div style={{ width: '100%', height: '100%', position: 'relative' }}>
			<ActBadge act={5} mode="🎬 当场验" />
			<BigLine
				bg={colors.dark}
				color={colors.white}
				sub={
					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
						style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}
					>
						<div style={{ fontSize: 26, lineHeight: 1.7 }}>
							跑一次。<b style={{ color: colors.yellow }}>故意不告诉它审批额度是多少。</b>
							<br />
							看它写 <code style={{ fontFamily: fonts.mono, color: colors.green }}>[to supply]</code>，还是写一个数字。
						</div>
						<div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
							<code style={{
								fontFamily: fonts.mono, fontSize: 19, fontWeight: 700,
								padding: '6px 16px', background: colors.red, color: colors.white, border,
							}}>写了数字的 → 打 1</code>
							<span style={{ fontSize: 19, color: 'rgba(255,255,255,0.45)' }}>
								然后把那个数字删掉，回去改你的约束
							</span>
						</div>
					</motion.div>
				}
			>
				生成器的好坏，
				<br />
				看它<span style={{ color: colors.yellow }}>留了多少空</span>。
				<br />
				<span style={{ fontSize: '0.55em', color: 'rgba(255,255,255,0.55)', fontWeight: 400 }}>
					,跟刚才那条反转是同一条道理，换了个对象。
				</span>
			</BigLine>
		</div>
	);
}
