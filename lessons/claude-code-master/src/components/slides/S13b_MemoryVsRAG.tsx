import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { motion } from 'framer-motion';

// 辨析 —— Memory（常驻原则）vs RAG（按需召回），侧重点不同
const rows = [
	{ dim: '体量', mem: '小而精，几十条', rag: '大而全，成千上万片' },
	{ dim: '何时进 context', mem: '每轮常驻 · always-on', rag: '命中 query 才召回' },
	{ dim: '装什么', mem: '原则 · 规则 · 决策 · 公司背景', rag: '事实 · 文档 · 历史片段' },
	{ dim: '作用', mem: '改变 AI 的默认行为', rag: '回答时补一段知识' },
	{ dim: '类比', mem: '价值观 / 肌肉记忆', rag: '图书馆查书' },
];

export default function S13b_MemoryVsRAG() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.dark}>辨析 · 别搞混</Tag>
					<Title size="46px" style={{ marginTop: 12, lineHeight: 1.16 }}>
						<span style={{ color: colors.red }}>Memory</span> ≠ <span style={{ color: colors.blue }}>RAG</span> —— 两种「喂真相」，侧重点不同
					</Title>
					<p style={{ fontSize: 17, color: '#555', marginTop: 8 }}>
						公司背景、业务原则也是一种 memory —— 把它搭好，等于给整个项目定了原则。但它和 RAG 不是一回事：
					</p>
				</motion.div>

				{/* 对比表 */}
				<div style={{ marginTop: 16, border, boxShadow: shadow, background: '#fff' }}>
					{/* 表头 */}
					<div style={{ display: 'flex', borderBottom: `2px solid ${colors.black}`, background: '#faf6ee' }}>
						<div style={{ width: 150, flexShrink: 0, padding: '10px 14px', fontFamily: fonts.mono, fontSize: 13, color: '#888', fontWeight: 800 }}>维度</div>
						<div style={{ flex: 1, padding: '10px 16px', fontSize: 17, fontWeight: 900, color: colors.red, borderLeft: '2px solid #eee' }}>Memory · 常驻原则</div>
						<div style={{ flex: 1, padding: '10px 16px', fontSize: 17, fontWeight: 900, color: colors.blue, borderLeft: '2px solid #eee' }}>RAG · 向量库语义检索</div>
					</div>
					{rows.map((r, i) => (
						<motion.div key={r.dim}
							initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.1 }}
							style={{ display: 'flex', borderBottom: i < rows.length - 1 ? '1px solid #eee' : 'none' }}>
							<div style={{ width: 150, flexShrink: 0, padding: '9px 14px', fontFamily: fonts.mono, fontSize: 13.5, fontWeight: 800, color: '#444' }}>{r.dim}</div>
							<div style={{ flex: 1, padding: '9px 16px', fontSize: 15.5, borderLeft: '2px solid #f4f4f4' }}>{r.mem}</div>
							<div style={{ flex: 1, padding: '9px 16px', fontSize: 15.5, borderLeft: '2px solid #f4f4f4', color: '#333' }}>{r.rag}</div>
						</motion.div>
					))}
				</div>

				{/* 决策判据 */}
				<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}
					style={{ marginTop: 16, display: 'flex', gap: 14 }}>
					<div style={{ flex: 1, background: colors.dark, color: colors.white, border, boxShadow: `5px 5px 0 ${colors.red}`, padding: '12px 18px', fontSize: 15, lineHeight: 1.5 }}>
						要影响<b style={{ color: colors.yellow }}>每个决策</b>、要每次都在 → <b style={{ color: colors.red }}>Memory</b><br />
						<span style={{ color: '#aab' }}>公司背景 · 业务原则 · 红线 · 编码规范</span>
					</div>
					<div style={{ flex: 1, background: '#fff', border, boxShadow: `5px 5px 0 ${colors.blue}`, padding: '12px 18px', fontSize: 15, lineHeight: 1.5 }}>
						海量、<b>偶尔才要查</b> → <b style={{ color: colors.blue }}>RAG</b><br />
						<span style={{ color: '#888' }}>整部会计法条 · API 文档 · 历史工单 · 长 PRD 库</span>
					</div>
				</motion.div>
			</Inner>
		</Slide>
	);
}
