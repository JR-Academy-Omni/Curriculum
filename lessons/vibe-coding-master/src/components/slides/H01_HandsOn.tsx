import { Slide, Inner, colors, fonts, border, shadow, springIn, slideFromLeft, slideFromRight } from '../ui';
import { motion } from 'framer-motion';

// 左侧 5 步 —— 现场带做
const steps: { t: string; note?: string }[] = [
	{ t: '打开 ChatGPT / Claude 网页版，新开一个对话' },
	{ t: '照 4 要素写自己的简历 mini-PRD', note: '重点写「输入」（2-3 件真实做过的事，每件配真实数字）和「红线」（≥2 条，必含『不准编造』）' },
	{ t: '整段粘进 AI，发送' },
	{ t: '真相校验：逐条问「这是不是我真做过？」', note: '发现 AI 自己加的，就让它删掉' },
	{ t: '截图 PRD + 草稿，准备点评' },
];

// 右侧完成 checklist —— 打勾自检
const checks: string[] = [
	'4 要素都写了',
	'输入 ≥ 2 件真实具体的事',
	'至少 1 个真实数字',
	'红线含一条「禁编造」',
	'草稿里没有一条你没做过的',
];

// 动手：写你第二大脑的第一个文件（~14 min）
export default function H01_HandsOn() {
	return (
		<Slide bg={colors.dark}>
			<Inner style={{ flexDirection: 'column', height: '88%' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}
					style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
					<span style={{ fontSize: 15, fontWeight: 900, fontFamily: fonts.mono, color: colors.black, background: colors.yellow, padding: '8px 16px', border, letterSpacing: 1 }}>🔨 动手</span>
					<span style={{ fontSize: 14, fontWeight: 800, fontFamily: fonts.mono, color: colors.dark, background: colors.green, padding: '8px 14px', border }}>⏱ ~14 min</span>
				</motion.div>
				<motion.h2 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
					style={{ fontFamily: fonts.heading, fontSize: 40, fontWeight: 900, color: colors.white, marginTop: 14, lineHeight: 1.1 }}>
					写你第二大脑的<span style={{ background: colors.yellow, color: colors.black, padding: '0 8px' }}>第一个文件</span>
				</motion.h2>

				{/* 顶部框定 */}
				<motion.div {...springIn} style={{ marginTop: 14, background: '#0b0f1e', border: `2px solid ${colors.green}`, padding: '11px 18px', fontSize: 16.5, color: '#dfe3f0', lineHeight: 1.45 }}>
					<span style={{ color: colors.green, fontWeight: 800 }}>就用你刚才那句：</span>你刚自我介绍说的那件事，原样写进「输入」—— 你三十秒前已经说过一遍了，现在只是<span style={{ color: colors.yellow, fontWeight: 800 }}>落成字</span>。
				</motion.div>

				<div style={{ display: 'flex', gap: 18, marginTop: 16, flex: 1, minHeight: 0 }}>
					{/* 左：Steps */}
					<motion.div {...slideFromLeft} style={{ flex: 1.25, background: '#0b0f1e', border: `2px solid ${colors.green}`, padding: '16px 18px', overflow: 'hidden' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.green, fontWeight: 800, marginBottom: 12 }}>▸ 跟着这 5 步走</div>
						{steps.map((s, i) => (
							<div key={i} style={{ display: 'flex', gap: 11, marginBottom: 11, lineHeight: 1.4 }}>
								<span style={{ flexShrink: 0, width: 24, height: 24, border: `2px solid ${colors.yellow}`, color: colors.yellow, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 900, fontFamily: fonts.mono }}>{i + 1}</span>
								<div>
									<div style={{ fontSize: 15.5, color: '#eef1fa', fontWeight: 600 }}>{s.t}</div>
									{s.note && <div style={{ fontSize: 13.5, color: '#8890b0', fontFamily: fonts.mono, marginTop: 2, lineHeight: 1.4 }}>// {s.note}</div>}
								</div>
							</div>
						))}
					</motion.div>

					{/* 右：完成 Checklist */}
					<motion.div {...slideFromRight} style={{ flex: 1, background: colors.white, border, boxShadow: shadow, padding: '16px 18px', display: 'flex', flexDirection: 'column' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.red, fontWeight: 800, marginBottom: 12 }}>☑ 完成 Checklist</div>
						{checks.map((c, i) => (
							<motion.div key={i} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, delay: 0.5 + i * 0.1 }}
								style={{ display: 'flex', gap: 11, alignItems: 'center', marginBottom: 13, fontSize: 15.5, lineHeight: 1.3 }}>
								<span style={{ flexShrink: 0, width: 24, height: 24, border, background: colors.green, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 900, color: colors.black }}>✓</span>
								<span style={{ color: '#222', fontWeight: 600 }}>{c}</span>
							</motion.div>
						))}
						<div style={{ marginTop: 'auto', fontFamily: fonts.mono, fontSize: 12.5, color: '#999', fontWeight: 700 }}>五个都打勾 = 这份真相能用了</div>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
