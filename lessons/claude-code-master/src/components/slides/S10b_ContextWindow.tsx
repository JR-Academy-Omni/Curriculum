import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { motion } from 'framer-motion';

// 原理 —— 每次对话 Claude 看见的那一整个 context window，CLAUDE.md 在里面的占比
const segs = [
	{ label: '系统提示 + 工具定义', pct: 10, bg: '#9aa0ad', note: 'Claude Code 的固定开销' },
	{ label: 'CLAUDE.md 规则', pct: 9, bg: colors.red, note: '每轮自动塞回 · 你唯一能预先掌控的一块', star: true },
	{ label: '对话历史', pct: 20, bg: colors.blue, note: '越聊越长' },
	{ label: '读进来的文件 / 命令输出 / 搜索结果', pct: 46, bg: colors.orange, note: '最吃空间的变量' },
	{ label: '留给本轮回答', pct: 15, bg: colors.green, note: '窗口满了它先被挤掉' },
];

const laws = [
	{ k: '每轮都重新装一遍', v: 'Claude 本身没记忆，它只看见这一窗。CLAUDE.md「记得」，是因为每轮都被自动塞回去。' },
	{ k: '窗口大小固定', v: '200K~1M tokens 不等（看模型）。装满就压缩 / 丢历史 —— 占位越多，能干活的越少。' },
	{ k: 'CLAUDE.md = 每轮固定税', v: '它是窗口里唯一「写一次、每轮都在」的部分。臃肿一行，每轮都重复付费 —— 所以上一页要你精炼。' },
];

export default function S10b_ContextWindow() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.dark}>原理 · 看不见的那一半</Tag>
					<Title size="46px" style={{ marginTop: 12, lineHeight: 1.16 }}>
						每次对话，Claude 到底<span style={{ background: colors.yellow, padding: '0 8px' }}>「看见」</span>了什么？
					</Title>
					<p style={{ fontSize: 17, color: '#555', marginTop: 8 }}>
						每问一句，Claude Code 都把这些东西拼进<b>同一个固定大小的 context window</b>，连同你的问题一起发给模型。CLAUDE.md 就是其中每轮常驻的那一块 ——
					</p>
				</motion.div>

				{/* context window 示意条 */}
				<div style={{ marginTop: 18 }}>
					<div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: fonts.mono, fontSize: 12.5, color: '#888', fontWeight: 700, marginBottom: 5 }}>
						<span>← 1 个 context window（示意 · 不同项目比例不同）→</span>
						<span>token 用满 = 开始遗忘</span>
					</div>
					<div style={{ display: 'flex', width: '100%', height: 56, border, boxShadow: shadow, overflow: 'hidden' }}>
						{segs.map((s, i) => (
							<motion.div key={s.label}
								initial={{ width: 0 }} animate={{ width: `${s.pct}%` }} transition={{ delay: 0.2 + i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
								style={{ background: s.bg, borderRight: i < segs.length - 1 ? `2px solid ${colors.black}` : 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
								{s.star && <span style={{ position: 'absolute', top: -1, left: 4, fontSize: 13 }}>⭐</span>}
								<span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: s.bg === colors.green || s.bg === '#9aa0ad' ? colors.black : colors.white }}>{s.pct}%</span>
							</motion.div>
						))}
					</div>
					{/* 图例 */}
					<div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 18px', marginTop: 10 }}>
						{segs.map((s) => (
							<div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13.5 }}>
								<span style={{ width: 13, height: 13, background: s.bg, border: '1.5px solid #000', flexShrink: 0 }} />
								<b style={{ color: s.star ? colors.red : colors.black }}>{s.label}</b>
								<span style={{ color: '#888' }}>· {s.note}</span>
							</div>
						))}
					</div>
				</div>

				{/* 每次对话的逻辑 3 条 */}
				<div style={{ marginTop: 18, display: 'flex', gap: 14 }}>
					{laws.map((l, i) => (
						<motion.div key={l.k}
							initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 + i * 0.15 }}
							style={{ flex: 1, background: colors.white, border, boxShadow: shadow, padding: '13px 16px' }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.red, fontWeight: 800 }}>原理 {i + 1}</div>
							<div style={{ fontSize: 17, fontWeight: 900, marginTop: 4 }}>{l.k}</div>
							<div style={{ fontSize: 14, color: '#555', marginTop: 6, lineHeight: 1.5 }}>{l.v}</div>
						</motion.div>
					))}
				</div>
			</Inner>
		</Slide>
	);
}
