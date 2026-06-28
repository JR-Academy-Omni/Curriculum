import { motion } from 'framer-motion';
import { Slide, Inner, Title, colors, fonts, border } from '../ui';

const options = [
	{ key: '同意', sub: '已经超过了 —— 我写不过它', color: colors.green, emoji: '🙋' },
	{ key: '不同意', sub: '还没有 —— 关键地方它会错', color: colors.red, emoji: '🙅' },
];

// 全课程第一个互动调查 —— AI coding 的前提之问
export default function P01_Poll() {
	return (
		<Slide bg={colors.dark}>
			<Inner center style={{ height: '88%' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
					style={{ display: 'inline-block', padding: '7px 18px', background: colors.yellow, color: colors.black, fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, letterSpacing: 2, marginBottom: 22 }}>
					互动调查 ① · 现场举手
				</motion.div>

				<Title white size="56px" style={{ textAlign: 'center', lineHeight: 1.18, maxWidth: 1120 }}>
					<motion.span initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} style={{ display: 'block' }}>
						你认为大模型，已经
						<span style={{ background: colors.red, color: colors.white, padding: '0 12px', margin: '0 4px' }}>超过了全部人类</span>
						的代码能力了吗？
					</motion.span>
				</Title>

				<div style={{ display: 'flex', gap: 28, marginTop: 40 }}>
					{options.map((o, i) => (
						<motion.div key={o.key}
							initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 + i * 0.15, type: 'spring', stiffness: 160, damping: 16 }}
							style={{ width: 360, background: colors.white, border, boxShadow: `7px 7px 0 ${o.color}`, padding: '26px 24px', textAlign: 'center' }}>
							<div style={{ fontSize: 48 }}>{o.emoji}</div>
							<div style={{ fontSize: 36, fontWeight: 900, marginTop: 6, color: o.color }}>{o.key}</div>
							<div style={{ fontSize: 16, color: '#555', marginTop: 8, lineHeight: 1.45 }}>{o.sub}</div>
						</motion.div>
					))}
				</div>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
					style={{ fontSize: 19, color: '#cfd3e6', marginTop: 36, maxWidth: 940, textAlign: 'center', lineHeight: 1.55 }}>
					不管你站哪边 —— <b style={{ color: colors.yellow }}>今天整门课，都建立在你对这一题的答案上</b>。
					这正是「AI coding」能不能成立的<b style={{ color: colors.white }}>第一前提</b>。
				</motion.p>
			</Inner>
		</Slide>
	);
}
