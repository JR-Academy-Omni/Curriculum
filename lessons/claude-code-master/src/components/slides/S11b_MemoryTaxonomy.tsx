import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { motion } from 'framer-motion';

const rows = [
	{ type: 'Rules', zh: '规则 / 铁律', eg: '永远用 ObjectId 不用 slug', land: 'CLAUDE.md', when: '每次都加载', color: '#ff5757' },
	{ type: 'Workflows', zh: '工作流 / SOP', eg: '发布流程 A→B→C、审稿 9 维度', land: 'Skill', when: '按需调用', color: '#FF914D' },
	{ type: 'Projects', zh: '项目状态 / 决策', eg: 'X 正迁到 Y,因为 Z', land: 'memory · project', when: '相关时 recall', color: '#7ED957' },
	{ type: 'Feedback', zh: '纠正 / 偏好', eg: '回复先给结论再给细节', land: 'memory · feedback', when: '相关时 recall', color: '#38B6FF' },
	{ type: 'User', zh: '你是谁', eg: '资深工程师 + 管运营', land: 'memory · user', when: '相关时 recall', color: '#CB6CE6' },
	{ type: 'Reference', zh: '外部资源指针', eg: 'dashboard / ticket URL', land: 'memory · reference', when: '相关时 recall', color: '#10b981' },
];

// 记忆的分类法 —— 类型 → 落点
export default function S11b_MemoryTaxonomy() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', gap: 0, justifyContent: 'center' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.dark}>怎么组织记忆</Tag>
					<Title size="38px" style={{ marginTop: 8 }}>
						记忆要<span style={{ background: colors.yellow, padding: '0 8px' }}>分类</span>—— 不同类型,落到不同地方
					</Title>
					<p style={{ fontSize: 16, color: '#555', marginTop: 5 }}>分类不是洁癖,是决定它「<b>什么时候被加载</b>」—— 错放要么烧 token,要么 AI 摸不到。</p>
				</motion.div>

				{/* 表头 */}
				<div style={{ display: 'flex', gap: 12, marginTop: 12, padding: '0 14px', fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 800, color: '#999' }}>
					<div style={{ width: 150 }}>类型</div>
					<div style={{ flex: 1 }}>例子</div>
					<div style={{ width: 168 }}>落到哪</div>
					<div style={{ width: 110 }}>何时加载</div>
				</div>

				<div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginTop: 8 }}>
					{rows.map((r, i) => (
						<motion.div key={r.type}
							initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 + i * 0.08 }}
							style={{ display: 'flex', gap: 12, alignItems: 'center', background: colors.white, border, boxShadow: shadow, padding: '10px 14px' }}>
							<div style={{ width: 150, flexShrink: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
								<span style={{ width: 8, height: 30, background: r.color, flexShrink: 0 }} />
								<div>
									<div style={{ fontSize: 16, fontWeight: 900, fontFamily: fonts.mono }}>{r.type}</div>
									<div style={{ fontSize: 12, color: '#888' }}>{r.zh}</div>
								</div>
							</div>
							<div style={{ flex: 1, fontSize: 15, color: '#444' }}>{r.eg}</div>
							<div style={{ width: 168, flexShrink: 0 }}>
								<span style={{ fontSize: 13, fontWeight: 800, fontFamily: fonts.mono, color: colors.white, background: r.color, padding: '4px 10px' }}>{r.land}</span>
							</div>
							<div style={{ width: 110, flexShrink: 0, fontSize: 13, color: '#666', fontWeight: 700 }}>{r.when}</div>
						</motion.div>
					))}
				</div>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
					style={{ marginTop: 14, fontSize: 16, color: colors.red, fontWeight: 800 }}>
					铁律放 memory = 该强制的没强制;规则散在对话里 = 每次重讲。先问「这条是哪一类」,再决定落哪。
				</motion.p>
			</Inner>
		</Slide>
	);
}
