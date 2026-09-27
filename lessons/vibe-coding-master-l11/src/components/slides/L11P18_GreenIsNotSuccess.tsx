import { motion } from 'framer-motion';
import { colors, fonts, border, shadow } from '../ui';
import { Page, PageHead, Note } from '../deck';

/**
 * P18 · 绿灯不等于成功
 * 🔴 §10.1 铁律 5：P18 和 P19 必须连着讲，中间不许休息、不许插问答。
 *    这两页是一个论证的两半：P18 是问题，P19 是解法。拆开就变成两个孤立知识点。
 */
export default function L11P18_GreenIsNotSuccess() {
	return (
		<Page>
			<PageHead phase="talk" title="那个绿灯，是什么意思" />

			<div style={{ display: 'flex', gap: 24, alignItems: 'center', flexShrink: 0 }}>
				<motion.div
					initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 0.4 }}
					style={{
						flexShrink: 0, width: 128, height: 128, borderRadius: '50%',
						background: colors.green, border: `4px solid ${colors.black}`,
						boxShadow: `7px 7px 0 ${colors.black}`,
						display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 62,
					}}
				>✓</motion.div>

				<div style={{ flex: 1 }}>
					<div style={{ fontSize: 32, fontWeight: 900, color: colors.dark, lineHeight: 1.45 }}>
						它的意思是：<span style={{ background: colors.yellow, padding: '0 8px' }}>进程正常退出了。</span>
					</div>
					<div style={{ fontSize: 32, fontWeight: 900, color: colors.red, lineHeight: 1.45, marginTop: 10 }}>
						它不意味着你的任务做成了。
					</div>
				</div>
			</div>

			<div style={{ display: 'flex', gap: 14, flex: 1, minHeight: 0 }}>
				{['网络被挡', '凭证过期', '它绕过去了', '额度没了'].map((t, i) => (
					<motion.div
						key={t}
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: 0.3 + i * 0.09 }}
						style={{
							flex: 1, border, background: colors.white, boxShadow: '4px 4px 0 #000',
							display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12,
						}}
					>
						<div style={{ fontSize: 23, fontWeight: 800, color: colors.dark }}>{t}</div>
						<div style={{ fontFamily: fonts.mono, fontSize: 18, color: '#999' }}>▼</div>
						<div style={{
							background: colors.green, color: colors.black, padding: '5px 16px',
							border: `2px solid ${colors.black}`, fontSize: 20, fontWeight: 900,
						}}>绿灯</div>
					</motion.div>
				))}
			</div>

			<div style={{
				border, boxShadow: shadow, background: colors.dark, color: colors.white,
				padding: '18px 26px', fontSize: 27, fontWeight: 800, lineHeight: 1.45, flexShrink: 0,
			}}>
				刚才演示里那一次，如果它是在<span style={{ color: colors.yellow }}>凌晨三点</span>跑的 ——
				你早上看到的，就是一个绿灯。
			</div>

			<Note>下一页不要停：绿灯是<strong>它给你的</strong>，接下来要谈的是<strong>你自己定的那个信号</strong>。</Note>
		</Page>
	);
}
