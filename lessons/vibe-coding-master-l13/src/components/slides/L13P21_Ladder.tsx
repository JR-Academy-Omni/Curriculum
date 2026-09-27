import { motion } from 'framer-motion';
import { ActBadge, Page, Head, LADDER, colors, fonts, border, FS } from '../deck';

// P16 · 它还是要你记得跑 ⭐⭐ 全节视觉重心
// 🚨 deck 纪律 3：强制力阶梯只能从这一页开始出现。在那之前不许出现「第几级」。
// 🔴 立论在这一页点出，全节唯一一次。
// 🔥 回收埋点 3（P05 那句「目前没有任何东西自动跑它」）。
export default function L13P21_Ladder() {
	return (
		<Page bg={colors.dark}>
			<ActBadge act={4} />
			<Head color={colors.white} sub={<span style={{ color: 'rgba(255,255,255,0.55)' }}>你有六条检查了。但它还是要你记得跑。</span>}>
				它还是要你<span style={{ color: colors.yellow }}>记得跑</span>
			</Head>

			<div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginTop: 4 }}>
				{LADDER.map((l, i) => (
					<motion.div key={l.lv}>
						{l.lv === 'L3' && (
							<div style={{
								display: 'flex', alignItems: 'center', gap: 14, margin: '10px 0',
								fontFamily: fonts.mono, fontSize: 15, color: colors.yellow, letterSpacing: 2,
							}}>
								<div style={{ flex: 1, height: 2, background: colors.yellow, opacity: 0.6 }} />
								上面不在你机器上，下面在你机器上
								<div style={{ flex: 1, height: 2, background: colors.yellow, opacity: 0.6 }} />
							</div>
						)}
						<motion.div
							initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.35, delay: 0.1 + i * 0.07 }}
							style={{
								display: 'flex', alignItems: 'center', gap: 18,
								padding: '9px 18px',
								background: l.first ? colors.teal : l.hard ? 'rgba(16,185,129,0.14)' : 'rgba(255,255,255,0.05)',
								border: l.you || l.first ? `3px solid ${l.first ? colors.black : colors.yellow}` : '2px solid rgba(255,255,255,0.12)',
							}}
						>
							<span style={{
								fontFamily: fonts.mono, fontSize: 21, fontWeight: 700, width: 38,
								color: l.first ? colors.black : l.hard ? colors.teal : 'rgba(255,255,255,0.5)',
							}}>{l.lv}</span>
							<span style={{
								fontSize: 25, fontWeight: l.first || l.you ? 700 : 400, minWidth: 320,
								color: l.first ? colors.black : colors.white,
							}}>{l.t}</span>
							<span style={{ fontSize: 19, color: l.first ? 'rgba(0,0,0,0.65)' : 'rgba(255,255,255,0.4)' }}>{l.note}</span>
							{l.first && <span style={{ marginLeft: 'auto', fontFamily: fonts.mono, fontSize: 15, fontWeight: 700 }}>← 第一道真正的硬政策</span>}
							{l.you && <span style={{ marginLeft: 'auto', fontFamily: fonts.mono, fontSize: 15, color: colors.yellow, fontWeight: 700 }}>← 你现在在这</span>}
							{l.start && <span style={{ marginLeft: 'auto', fontFamily: fonts.mono, fontSize: 15, color: 'rgba(255,255,255,0.35)' }}>← 开场那条规矩在这</span>}
						</motion.div>
					</motion.div>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}
				style={{ marginTop: 'auto', paddingTop: 20 }}
			>
				<div style={{
					fontFamily: fonts.heading, fontSize: 40, fontWeight: 900, color: colors.white, lineHeight: 1.3,
				}}>
					规矩的力量，不在它写了什么，<span style={{ background: colors.yellow, color: colors.black, padding: '2px 12px' }}>在谁改得了它。</span>
				</div>
				<div style={{ fontSize: FS.note, color: 'rgba(255,255,255,0.45)', marginTop: 12, lineHeight: 1.6 }}>
					L0 到 L3 有一个共同点：<b style={{ color: colors.yellow }}>它们全在你本地，全可以被改掉。</b>
					　这就是那条线为什么在那儿 ,区别不是谁记得，<b style={{ color: colors.yellow }}>是谁改得了。</b>
					<br />
					　⭐ 顺带把第一幕那张图缺的一层填上：<b style={{ color: colors.white }}>L6 执行层，就是这个阶梯。</b>
					<br />
					　⭐ 还记得兜底三级最后那条吗 ,<b style={{ color: colors.white }}>「只能靠人记得」</b>。
					<b style={{ color: colors.yellow }}>那就是最底下那一层。</b>
				</div>
			</motion.div>
		</Page>
	);
}
