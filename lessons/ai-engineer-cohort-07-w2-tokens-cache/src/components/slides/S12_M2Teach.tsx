import { motion } from 'framer-motion';
import { colors, fonts, radii } from '../ui';
import { ModuleFrame, Source, line, softShadow } from './_shared';

const rows = [
	{ k: 'information density', cc: 'MCP tools 默认只列名字，用 tool search 按需加载完整定义', app: '只挂这次任务用得上的 tools' },
	{ k: 'relevance', cc: 'Skills 平时只放一行描述，被调用时才加载全文', app: 'RAG 只取和问题相关的片段' },
	{ k: 'isolation', cc: 'Subagent 用自己的 context 读大量文件，只把总结交回主对话', app: '大量阅读交给子任务，主流程只收结论' },
	{ k: 'recency', cc: '/compact 用摘要替换旧历史', app: '旧对话做摘要，保留关键状态' },
	{ k: 'authority', cc: 'CLAUDE.md 作为项目规则，在会话开始时读入', app: '只放现行、权威的政策和规则' },
	{ k: 'permission · provenance', cc: '—（应用层要自己做）', app: '进 context 之前先过滤：模型看到了，就别指望它「假装没看到」' },
];

const cell = { borderBottom: '1px solid rgba(16,22,47,.18)', padding: '10px 14px', fontSize: 19, fontWeight: 600, lineHeight: 1.4, verticalAlign: 'middle' } as const;

// M2 讲：Claude Code 自己怎么做 context governance，对应到你的应用
export default function S12_M2Teach() {
	return (
		<ModuleFrame id="M2" phase="teach" title="看 Claude Code 怎么管自己的 context">
			<div style={{ border: line, borderRadius: radii.card, overflow: 'hidden', background: colors.white, boxShadow: softShadow }}>
				<table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
					<colgroup>
						<col style={{ width: '22%' }} />
						<col style={{ width: '42%' }} />
						<col style={{ width: '36%' }} />
					</colgroup>
					<thead>
						<tr>
							{['选择标准', 'Claude Code 怎么做', '放到你的应用里'].map((h, i) => (
								<th key={h} style={{ ...cell, textAlign: 'left', fontSize: 17, fontFamily: fonts.mono, background: i === 1 ? colors.blue : i === 2 ? colors.yellow : colors.warmBg }}>{h}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{rows.map((r, i) => (
							<motion.tr key={r.k} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.15 + i * 0.1 }}>
								<td style={{ ...cell, fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, background: '#fff8f2' }}>{r.k}</td>
								<td style={cell}>{r.cc}</td>
								<td style={{ ...cell, fontWeight: 700 }}>{r.app}</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>
			<Source>Claude Code 的做法出自官方文档 Explore the context window 和 How Claude Code uses prompt caching。</Source>
		</ModuleFrame>
	);
}
