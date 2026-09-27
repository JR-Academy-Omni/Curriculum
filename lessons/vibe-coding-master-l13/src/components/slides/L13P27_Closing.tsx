import { motion } from 'framer-motion';
import { ActBadge, colors, fonts, border, FS } from '../deck';

// P22 · 留白在等的那个人 ⭐⭐⭐ 收口 · 一秒不能少
// 🔥 回收埋点 1（开场那条症状）和埋点 2（标 approved 那次红）。
// 🔴 链条必须完整走一遍，不能只念最后那句话。
// 🔴 执行岗分支：看聊天框有没有人问「那不归我管怎么办」，有就加，没有就跳。
// 🔴 最后一句话必须是收口。下一节的接口已经在 P21 讲过，这里不重复。
const CHAIN = [
	'你回去做真的那个会卡住',
	'不是卡在代码上，是卡在留白那一步',
	'你会写下一堆 [to supply]，然后发现自己一个都填不了',
	'因为那些额度、那些审批人、那些「谁有权说不行」',
	'从来没有人跟你谈妥过',
];

export default function L13P27_Closing() {
	return (
		<div style={{
			width: '100%', height: '100%', background: colors.dark, position: 'relative',
			padding: '70px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 30,
		}}>
			<ActBadge act={5} />

			<div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
				{CHAIN.map((l, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: i * 0.18 }}
						style={{
							fontSize: i === CHAIN.length - 1 ? 32 : 24,
							fontWeight: i === CHAIN.length - 1 ? 700 : 400,
							color: i === CHAIN.length - 1 ? colors.yellow : 'rgba(255,255,255,0.6)',
							lineHeight: 1.5,
							paddingLeft: i * 16,
						}}
					>
						{l}
					</motion.div>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.15 }}
				style={{
					border: `2px solid rgba(255,255,255,0.2)`, padding: '14px 20px',
					fontSize: 21, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6,
				}}
			>
				而你已经撞过一次了 —— 你给一份文件标了 <code style={{ fontFamily: fonts.mono, color: colors.white }}>approved</code>，
				它红了，它说：<b style={{ color: colors.white }}>你还没写完。</b>
				<br />
				这套东西会一直这么堵着你，<b style={{ color: colors.white }}>直到你去把那几场话谈完。</b>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }}
				transition={{ duration: 0.7, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
				style={{
					fontFamily: fonts.heading, fontSize: 54, fontWeight: 900, lineHeight: 1.3,
					color: colors.white, letterSpacing: -1.5,
				}}
			>
				留白在等的那个人，
				<br />
				<span style={{ background: colors.yellow, color: colors.black, padding: '2px 16px' }}>
					就是你该去谈的那场话。
				</span>
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }}
				style={{ fontSize: FS.body, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}
			>
				这个仓库最大的产出不是那些文件，
				<b style={{ color: 'rgba(255,255,255,0.85)' }}>是它逼着你去开的那几场，你一直没开的会。</b>
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.9 }}
				style={{
					marginTop: 6, border, background: colors.white, padding: '14px 20px',
					fontSize: 21, lineHeight: 1.6,
				}}
			>
				<b style={{ fontFamily: fonts.mono, color: colors.red, marginRight: 10 }}>作业</b>
				这周就一件事：把你那几个 <code style={{ fontFamily: fonts.mono }}>[to supply]</code> 拿去问真人。
				填得了的填上。<b>填不了的留着，但要写清楚在等谁。</b>
			</motion.div>
		</div>
	);
}
