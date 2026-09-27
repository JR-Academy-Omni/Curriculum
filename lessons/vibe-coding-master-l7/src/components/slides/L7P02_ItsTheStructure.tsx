import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { PromptBox } from '../PromptBox';

// P02：问题在结构，不在你交得不好
// SoT：蓝图 v1.0 §1「问题不在你交得不好，在结构」
const GOOD = [
	'目标写清楚了',
	'边界划了：只动 src/api/',
	'验证点给了：typecheck + 测试要过',
	'里程碑也留了：先给计划再动手',
];

export default function L7P02_ItsTheStructure() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<div style={{ flex: '0 0 46%' }}>
					<Tag bg={colors.dark}>先别改指令</Tag>
					<Title size="44px" style={{ marginTop: 14, marginBottom: 16, lineHeight: 1.2 }}>
						这次你<br />
						<span style={{ background: colors.yellow, padding: '0 10px' }}>交得很好</span>
					</Title>

					<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.12 }}>
						<PromptBox
							label="你按 L6 学的四格交出去"
							accent={colors.green}
							text="这个 bug 到底是哪个模块引起的？先给我一份计划，只动 src/ 下的文件，改完 typecheck 要过。"
						/>
					</motion.div>

					<div style={{ marginTop: 16 }}>
						{GOOD.map((g, i) => (
							<motion.div
								key={g}
								initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.3, delay: 0.35 + i * 0.09 }}
								style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8 }}
							>
								<span style={{ color: colors.green, fontWeight: 900, fontSize: 16 }}>✓</span>
								<span style={{ fontSize: 16, color: '#444' }}>{g}</span>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
						style={{ marginTop: 18, fontSize: 19, fontWeight: 800, color: colors.dark }}>
						然后它还是跑歪了。
					</motion.div>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.red, letterSpacing: 1.4, fontWeight: 700, marginBottom: 10 }}>
						因为它得干两件事，而这两件事在同一个 context 里
					</div>

					<div style={{ display: 'flex', gap: 14, alignItems: 'stretch', marginBottom: 16 }}>
						{[
							{ t: '到处翻', d: '读 50 个文件 · 试七八个假设 · 走一堆弯路', c: colors.orange, note: '产生大量噪音' },
							{ t: '下结论', d: '在读过的东西里挑出真正相关的那几条', c: colors.blue, note: '需要干净的判断' },
						].map((b, i) => (
							<motion.div
								key={b.t}
								initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.38, delay: 0.25 + i * 0.14 }}
								style={{ flex: 1, border, boxShadow: shadow, background: colors.white }}
							>
								<div style={{ background: b.c, padding: '9px 14px', fontSize: 17, fontWeight: 800, color: colors.white }}>
									{b.t}
								</div>
								<div style={{ padding: '12px 14px' }}>
									<div style={{ fontSize: 14, color: '#555', lineHeight: 1.55, marginBottom: 8 }}>{b.d}</div>
									<div style={{ fontSize: 13, fontWeight: 700, color: b.c, paddingTop: 8, borderTop: '2px solid #f0f0f0' }}>
										{b.note}
									</div>
								</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.4, delay: 0.6 }}
						style={{
							border, boxShadow: shadow, background: '#fff2f2',
							padding: '16px 20px', textAlign: 'center', marginBottom: 16,
						}}
					>
						<div style={{ fontSize: 15, color: '#666', marginBottom: 6 }}>把它们塞进同一个 context =</div>
						<div style={{ fontSize: 20, fontWeight: 800, color: colors.red, lineHeight: 1.5 }}>
							让「下结论」的那一轮，<br />读到「到处翻」留下的全部垃圾
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.45, delay: 0.85 }}
						style={{
							padding: '16px 22px', background: colors.dark, color: colors.white,
							border, boxShadow: shadow, textAlign: 'center',
						}}
					>
						<div style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.5 }}>
							问题不在你交得不好，<br />
							<span style={{ color: colors.yellow }}>在结构。</span>
						</div>
						<div style={{ marginTop: 8, fontSize: 15, opacity: 0.85 }}>
							指令再调也治不了——今天换的是结构。
						</div>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
