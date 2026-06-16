import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Slide, Inner, colors, fonts, border, shadow } from '../ui';

type Line = { kind: 'say' | 'cmd' | 'note'; text: string };

// 动手环节统一版式 —— 左「老师带你敲」 + 右「你跟着做」 + 底部验证
// 用于现场带做：老师演示左侧，学员照右侧 checklist 跟上
export function Lab({
	n, min, title, sub, demo, todo, verify,
}: {
	n: string; min: string; title: ReactNode; sub?: string;
	demo: Line[]; todo: string[]; verify: string;
}) {
	return (
		<Slide bg={colors.dark}>
			<Inner style={{ flexDirection: 'column', height: '88%' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}
					style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
					<span style={{ fontSize: 15, fontWeight: 900, fontFamily: fonts.mono, color: colors.black, background: colors.yellow, padding: '8px 16px', border, letterSpacing: 1 }}>🔨 动手 {n}</span>
					<span style={{ fontSize: 14, fontWeight: 800, fontFamily: fonts.mono, color: colors.dark, background: colors.green, padding: '8px 14px', border }}>⏱ {min}</span>
				</motion.div>
				<motion.h2 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
					style={{ fontFamily: fonts.heading, fontSize: 40, fontWeight: 900, color: colors.white, marginTop: 14, lineHeight: 1.1 }}>
					{title}
				</motion.h2>
				{sub && <p style={{ fontSize: 17, color: '#aab0cc', marginTop: 4 }}>{sub}</p>}

				<div style={{ display: 'flex', gap: 18, marginTop: 18, flex: 1, minHeight: 0 }}>
					{/* 左：老师演示 */}
					<motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
						style={{ flex: 1.15, background: '#0b0f1e', border: `2px solid ${colors.green}`, padding: '16px 18px', overflow: 'hidden' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.green, fontWeight: 800, marginBottom: 10 }}>▸ 老师带你敲（学员看大屏）</div>
						{demo.map((l, i) => (
							<div key={i} style={{ marginBottom: 9, fontSize: 15, lineHeight: 1.45 }}>
								{l.kind === 'cmd' && <span style={{ fontFamily: fonts.mono, color: colors.yellow }}><span style={{ color: '#5a6488' }}>$ </span>{l.text}</span>}
								{l.kind === 'say' && <span style={{ color: '#dfe3f0' }}><span style={{ color: colors.green, fontWeight: 800 }}>对 Claude 说：</span>「{l.text}」</span>}
								{l.kind === 'note' && <span style={{ color: '#8890b0', fontFamily: fonts.mono, fontSize: 13.5 }}>// {l.text}</span>}
							</div>
						))}
					</motion.div>
					{/* 右：学员跟做 */}
					<motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
						style={{ flex: 1, background: colors.white, border, boxShadow: shadow, padding: '16px 18px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.red, fontWeight: 800, marginBottom: 10 }}>☐ 你跟着做</div>
						{todo.map((t, i) => (
							<div key={i} style={{ display: 'flex', gap: 10, marginBottom: 10, fontSize: 15.5, lineHeight: 1.4 }}>
								<span style={{ flexShrink: 0, width: 22, height: 22, border, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 900, fontFamily: fonts.mono }}>{i + 1}</span>
								<span style={{ color: '#222' }}>{t}</span>
							</div>
						))}
					</motion.div>
				</div>

				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
					style={{ marginTop: 16, background: colors.yellow, color: colors.black, border, padding: '12px 20px', fontSize: 16, fontWeight: 800 }}>
					✅ 验证你成了：{verify}
				</motion.div>
			</Inner>
		</Slide>
	);
}
