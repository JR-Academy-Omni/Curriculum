import { Slide, Inner, Half, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { slideFromLeft, slideFromRight } from '../ui';
import { motion } from 'framer-motion';

// 如何规划一个 memory 系统 —— 把匠人那套抽象成通用框架（逻辑分层）
const questions = [
	{ q: '记什么？', d: '规则 / 决策 / 偏好 / 背景' },
	{ q: '要每次都在吗？', d: '常驻 vs 用时再取' },
	{ q: '谁共享？', d: '只有我 / 整个团队' },
	{ q: '怎么取回？', d: '自动注入 / 召回 / 检索' },
];

const layers = [
	{ n: 'L1', name: '常驻规则层', when: '每轮自动注入', eg: '铁律 · 红线 · 编码规范', color: '#ff5757', w: 58 },
	{ n: 'L2', name: '持久记忆层', when: '写盘 · 相关时召回', eg: '决策 · 踩坑 · 个人偏好', color: '#FF914D', w: 72 },
	{ n: 'L3', name: '共享记忆层', when: '跨人 · 跨 agent', eg: '团队 SOP · 业务背景', color: '#7ED957', w: 86 },
	{ n: 'L4', name: '检索召回层', when: '海量 · 按需 query', eg: '长文档 · 法条 · 历史', color: '#38B6FF', w: 100 },
];

export default function S13_MemoryPlanning() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div {...slideFromLeft}>
					<Tag bg={colors.dark}>通用方法 · 抽象成框架</Tag>
					<Title size="46px" style={{ marginTop: 10, lineHeight: 1.16 }}>
						如何规划一个 <span style={{ background: colors.yellow, padding: '0 8px' }}>memory 系统</span>
					</Title>
					<p style={{ fontSize: 17, color: '#555', marginTop: 8 }}>
						别只盯着匠人怎么做 —— 把它抽象成你能复用的框架：先问 4 个问题，再决定分几层。
					</p>
				</motion.div>

				<motion.div {...slideFromRight} style={{ marginTop: 18, display: 'flex', gap: 22 }}>
					{/* 左：4 个规划问题 */}
					<Half style={{ flex: 0.78, gap: 9 }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 12.5, color: '#999', fontWeight: 800, marginBottom: 2 }}>先问自己 4 个问题</div>
						{questions.map((x, i) => (
							<motion.div key={x.q}
								initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.1 }}
								style={{ background: '#fff', border, boxShadow: shadow, padding: '9px 14px' }}>
								<div style={{ fontSize: 16, fontWeight: 900 }}>{x.q}</div>
								<div style={{ fontSize: 13, color: '#777', marginTop: 1 }}>{x.d}</div>
							</motion.div>
						))}
					</Half>

					{/* 右：逻辑分层 */}
					<Half style={{ flex: 1.22 }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 12.5, color: '#999', fontWeight: 800, marginBottom: 7 }}>→ 答案落成 4 个逻辑层（越往下越持久 / 越共享）</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
							{layers.map((l, i) => (
								<motion.div key={l.n}
									initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.12 }}
									style={{ display: 'flex', alignItems: 'stretch', width: `${l.w}%`, background: '#fff', border, boxShadow: shadow }}>
									<div style={{ flexShrink: 0, width: 8, background: l.color }} />
									<div style={{ flexShrink: 0, width: 52, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.mono, fontSize: 16, fontWeight: 900, color: l.color }}>{l.n}</div>
									<div style={{ flex: 1, padding: '8px 6px' }}>
										<div style={{ fontSize: 16, fontWeight: 900 }}>{l.name}</div>
										<div style={{ fontSize: 12.5, color: '#888' }}>{l.eg}</div>
									</div>
									<div style={{ flexShrink: 0, padding: '8px 12px', display: 'flex', alignItems: 'center', fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: '#555' }}>{l.when}</div>
								</motion.div>
							))}
						</div>
					</Half>
				</motion.div>

				<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}
					style={{ marginTop: 16, alignSelf: 'flex-start', background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '11px 22px', fontSize: 15.5, lineHeight: 1.5 }}>
					匠人只是把这 4 层填成了具体工具（CLAUDE.md / memory 文件 / 共享 repo / 向量库）—— <b style={{ color: colors.yellow }}>同一套逻辑，工具随你换</b>。
				</motion.div>
			</Inner>
		</Slide>
	);
}
