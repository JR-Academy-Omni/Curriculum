import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { motion } from 'framer-motion';

const steps = [
	{ n: '1', t: 'Claude 创建内容', d: 'curriculum/ 是 source of truth，AI 写大纲 + 内容', color: '#ff5757' },
	{ n: '2', t: '本地预览确认', d: '静态页面先看一眼，本地没确认绝不动 prod', color: '#FF914D' },
	{ n: '3', t: '转 JSON 中转', d: 'curriculum → skills-data/training-outlines/*.json', color: '#FFDE59' },
	{ n: '4', t: 'SDM Diff 对比', d: 'Skills Data Manager 对比 local vs production', color: '#7ED957' },
	{ n: '5', t: '一键同步上线', d: '确认 diff 后 sync 到 production', color: '#38B6FF' },
];

// 实战闭环 —— AI 驱动课程 pipeline
export default function S24_Pipeline() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.dark}>第 5 章 · 实战闭环</Tag>
					<Title size="48px" style={{ marginTop: 12 }}>
						全部串起来：匠人的 <span style={{ color: colors.red }}>AI 驱动课程 pipeline</span>
					</Title>
					<p style={{ fontSize: 19, color: '#555', marginTop: 8, maxWidth: 1080 }}>
						SoT（本地是真相）+ ADLC（建→验→上线）+ Skills（每步一个）—— 这套课件本身就是产物之一。
					</p>
				</motion.div>

				<div style={{ display: 'flex', gap: 8, marginTop: 30, alignItems: 'stretch' }}>
					{steps.map((s, i) => (
						<motion.div key={s.n} style={{ display: 'flex', alignItems: 'stretch', flex: 1 }}
							initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.13, duration: 0.45 }}>
							<div style={{ flex: 1, background: colors.white, border, boxShadow: shadow, padding: '16px 14px', display: 'flex', flexDirection: 'column' }}>
								<div style={{ width: 40, height: 40, background: s.color, border, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 900, color: colors.white, fontFamily: fonts.mono }}>{s.n}</div>
								<div style={{ fontSize: 18, fontWeight: 900, marginTop: 10 }}>{s.t}</div>
								<div style={{ fontSize: 14, color: '#666', marginTop: 6, lineHeight: 1.45 }}>{s.d}</div>
							</div>
							{i < steps.length - 1 && <div style={{ alignSelf: 'center', fontSize: 26, color: '#bbb', padding: '0 2px' }}>→</div>}
						</motion.div>
					))}
				</div>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
					style={{ marginTop: 24, fontSize: 19, color: colors.red, fontWeight: 800 }}>
					核心原则：本地是 source of truth，本地没确认，production 一个字都不动。
				</motion.p>
			</Inner>
		</Slide>
	);
}
