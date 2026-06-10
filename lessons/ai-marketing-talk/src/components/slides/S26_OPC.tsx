import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

const au = ['澳洲华人 + AI 工具栈', '拿澳洲 Grant 补助', '墨 / 悉 / 布三城线下 networking'];

export default function S26_OPC() {
	return (
		<Slide bg={colors.dark}>
			<div style={{ width: '90%', maxWidth: 1320, height: '85%', padding: '38px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
				<motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
					style={{ fontFamily: fonts.heading, fontSize: '53px', fontWeight: 900, color: colors.white, letterSpacing: -1, lineHeight: 1.15, marginBottom: 20 }}>
					一个人 + 一套<span style={{ color: colors.rose }}>有记忆的 AI 系统</span><br />把营销 + 产品 + 运营全转起来
				</motion.h2>

				<motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
					style={{ display: 'inline-block', background: colors.rose, color: colors.white, padding: '14px 32px', border, boxShadow: `7px 7px 0 ${colors.yellow}`, fontFamily: fonts.heading, fontSize: 27.5, fontWeight: 900, marginBottom: 30 }}>
					这已经不是「做营销」—— 是经营一家自己的公司
				</motion.div>

				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} style={{ fontFamily: fonts.mono, fontSize: 16.5, fontWeight: 700, color: colors.yellow, marginBottom: 14 }}>
					而澳洲，给了一个全世界独一份的组合：
				</motion.div>
				<div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
					{au.map((a, i) => (
						<motion.div key={a} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.12 }}
							style={{ background: colors.white, border, boxShadow: shadow, padding: '14px 22px', fontFamily: fonts.heading, fontSize: 21, fontWeight: 800, color: colors.black }}>
							{a}
						</motion.div>
					))}
				</div>
			</div>
		</Slide>
	);
}
