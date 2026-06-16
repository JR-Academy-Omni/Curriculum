import { Slide, Inner, Title, colors, fonts, border, shadow } from '../ui';
import { motion } from 'framer-motion';

// 收尾 mic-drop —— AI Coding for Everyone
export default function S28b_ForEveryone() {
	return (
		<Slide bg={colors.dark}>
			<Inner center>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
					style={{ display: 'inline-block', padding: '8px 20px', background: colors.yellow, color: colors.black, fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, letterSpacing: 3, marginBottom: 26 }}>
					最后一句
				</motion.div>

				<Title white size="86px" style={{ textAlign: 'center', lineHeight: 1.04 }}>
					<motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} style={{ display: 'block' }}>
						AI Coding for
					</motion.span>
					<motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
						style={{ display: 'inline-block', background: colors.yellow, color: colors.black, padding: '0 18px', marginTop: 8 }}>
						Everyone
					</motion.span>
				</Title>

				<motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
					style={{ fontSize: 23, color: '#cfd3e6', marginTop: 28, maxWidth: 980, textAlign: 'center', lineHeight: 1.55 }}>
					门槛<b style={{ color: colors.white }}>不是会不会编程</b> —— 是会不会给 AI 建好真相、把活说清楚。
					运营、marketing、老师、HR…… 用中文说人话,人人都能指挥 AI。
				</motion.p>

				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
					style={{ marginTop: 26, background: colors.white, color: colors.black, border, boxShadow: `6px 6px 0 ${colors.red}`, padding: '14px 24px', fontSize: 18, fontWeight: 800 }}>
见过运营、marketing 同事一行代码不写,照样天天用 Claude 建页面、发任务、跑数据 —— 今天的 6 个动手,你也已经做到了。
				</motion.div>
			</Inner>
		</Slide>
	);
}
