import { Slide, Inner, Half, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { slideFromLeft, slideFromRight } from '../ui';
import { motion } from 'framer-motion';

// 互动判断 ②（答案页）—— 判据：谁说了算 + 改了会不会自动同步
export default function S04c2_SoTCaseAnswer() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div {...slideFromLeft}>
					<Tag bg={colors.dark}>互动判断 ② · 揭晓</Tag>
					<Title size="40px" style={{ marginTop: 10, lineHeight: 1.16 }}>
						答案是「<span style={{ background: colors.yellow, padding: '0 8px' }}>看情况</span>」—— 不看有几份，看这两点
					</Title>
				</motion.div>

				{/* 判据 */}
				<motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
					style={{ marginTop: 14, alignSelf: 'flex-start', background: colors.dark, color: colors.white, padding: '10px 22px', fontSize: 18, fontWeight: 800 }}>
					👉 <span style={{ color: colors.yellow }}>谁说了算 + 改了会不会自动同步</span>
				</motion.div>

				<motion.div {...slideFromRight} style={{ marginTop: 16, display: 'flex', gap: 18 }}>
					<Half>
						<div style={{ background: '#fff', border, boxShadow: `6px 6px 0 ${colors.red}`, padding: '16px 20px', height: '100%' }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.red, fontWeight: 800, marginBottom: 8 }}>❌ 两份各自能改 = 两个真相</div>
							<ul style={{ listStyle: 'none', fontSize: 16, lineHeight: 1.8, color: '#444' }}>
								<li>→ 没规定谁为准，两边各改各的</li>
								<li>→ 云端改了需求，代码还按旧那份做</li>
								<li>→ AI 读到的是哪份？没人知道 → <b style={{ color: colors.red }}>经典 SoT 漂移</b></li>
							</ul>
						</div>
					</Half>
					<Half>
						<div style={{ background: colors.dark, color: colors.white, border, boxShadow: `6px 6px 0 ${colors.green}`, padding: '16px 20px', height: '100%' }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.green, fontWeight: 800, marginBottom: 8 }}>✅ 一个真相 + 单向派生 = 没问题</div>
							<ul style={{ listStyle: 'none', fontSize: 16, lineHeight: 1.8, color: '#dfe3f0' }}>
								<li><span style={{ color: colors.green }}>→</span> 云端 = 业务真相（给人对齐）</li>
								<li><span style={{ color: colors.green }}>→</span> 代码侧 = 从它<b>派生</b>，标来源 + 同步时间，只读不另改</li>
								<li><span style={{ color: colors.green }}>→</span> 离代码最近，给 AI 执行 —— 仍是<b style={{ color: colors.yellow }}>同一份真相</b></li>
							</ul>
						</div>
					</Half>
				</motion.div>

				<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
					style={{ marginTop: 14, alignSelf: 'flex-start', background: colors.green, color: colors.black, padding: '11px 22px', border, boxShadow: shadow, fontSize: 16, fontWeight: 800 }}>
					一种落地：PRD 直接进 git 和代码同仓，状态字段挂看板 → 人 + agent 读的永远是同一份；云端只放「不是 build 真相」的东西。
				</motion.div>
			</Inner>
		</Slide>
	);
}
