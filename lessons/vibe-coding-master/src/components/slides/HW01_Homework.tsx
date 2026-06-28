import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

// 第一节课作业：自己想清楚要做什么 AI 产品（下节课写它的 PRD，整门课把它做出来）
const STEPS = [
	{ n: '1', t: '你/你公司哪件重复的事最烦？', d: '每天/每周都要手动干、一干就烦的那件', c: colors.red },
	{ n: '2', t: '如果有个 AI 替你干，它该干什么？', d: '输入什么、产出什么、帮你省下什么', c: colors.blue },
	{ n: '3', t: '一句话描述这个 AI 产品', d: '“一个能帮我 ___ 的 ___”', c: colors.purple },
];

export default function HW01_Homework() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
				<div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8 }}>
					<Tag bg={colors.red} color={colors.white}>第一节课 · 作业</Tag>
					<Title size="46px">想清楚：<span style={{ background: colors.yellow, padding: '0 8px' }}>你要做什么 AI 产品</span></Title>
				</div>
				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
					style={{ fontSize: 19, color: '#555', marginBottom: 22, lineHeight: 1.5 }}>
					不是练习题 —— 是<b style={{ color: colors.black }}>你真正想要</b>的一个 AI 产品/工具（解决你自己或公司一个真问题）。它就是你下节课要写 PRD 的对象，整门课你会把它一步步做出来。
				</motion.p>

				<div style={{ display: 'flex', gap: 16 }}>
					{STEPS.map((s, i) => (
						<motion.div key={s.n}
							initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
							style={{ flex: 1, background: colors.white, border, boxShadow: shadow, padding: '18px 18px' }}>
							<div style={{ display: 'inline-block', fontFamily: fonts.mono, fontWeight: 800, fontSize: 20, background: s.c, color: colors.white, padding: '3px 12px', border }}>{s.n}</div>
							<div style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 20, marginTop: 12, lineHeight: 1.3 }}>{s.t}</div>
							<div style={{ fontSize: 15, color: '#666', marginTop: 8, lineHeight: 1.4 }}>{s.d}</div>
						</motion.div>
					))}
				</div>

				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
					style={{ marginTop: 22, display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
					<span style={{ background: colors.dark, color: colors.yellow, border, boxShadow: shadowSm, padding: '8px 14px', fontWeight: 800, fontSize: 15, fontFamily: fonts.mono }}>⚠ 别选太大的</span>
					<span style={{ fontSize: 16, color: '#444' }}>选一个<b style={{ color: colors.black }}>你下周就想用</b>的小产品 —— 越具体越好做。</span>
				</motion.div>
			</Inner>
		</Slide>
	);
}
