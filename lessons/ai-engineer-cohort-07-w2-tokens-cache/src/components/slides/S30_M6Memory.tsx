import { motion } from 'framer-motion';
import { colors, fonts, radii } from '../ui';
import { ModuleFrame, Source, Mark, line, softShadow } from './_shared';

const rows = [
	{ k: '省的是什么', a: 'KV：decode 的重复计算', b: 'Prefix：重复的 prefill', c: 'Response：整次调用', d: '不省计算，提供信息' },
	{ k: '在哪一层', a: '推理引擎内部', b: '模型服务，跨请求', c: '你的应用', d: '你的应用，跨会话' },
	{ k: '怎么失效', a: '请求结束就释放', b: '前缀变化 · TTL', c: 'TTL · 版本 · 主动清除', d: '用户修改 / 删除' },
	{ k: 'Claude Code 里', a: '看不到', b: 'cache_read_input_tokens', c: '没有（每次都调模型）', d: 'CLAUDE.md · auto memory' },
];
const heads = ['', 'KV Cache', 'Prefix Cache', 'Response Cache', 'Memory'];
const headBg = ['#fff8f2', colors.orange, colors.purple, colors.red, colors.blue];
const cell = { borderBottom: '1px solid rgba(16,22,47,.18)', padding: '10px 12px', fontSize: 17, fontWeight: 600, lineHeight: 1.4, verticalAlign: 'middle' } as const;

// M6 讲：四种「复用」放在一起 + Memory ≠ Cache
export default function S30_M6Memory() {
	return (
		<ModuleFrame id="M6" phase="teach" title="四种「复用」放一起看：Memory 不是 Cache" titleSize={46}>
			<div style={{ border: line, borderRadius: radii.card, overflow: 'hidden', background: colors.white, boxShadow: softShadow }}>
				<table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
					<thead>
						<tr>{heads.map((h, i) => <th key={i} style={{ ...cell, background: headBg[i], color: i === 2 || i === 3 ? colors.white : colors.black, textAlign: 'left', fontFamily: fonts.mono, fontSize: 17 }}>{h}</th>)}</tr>
					</thead>
					<tbody>
						{rows.map((r, i) => (
							<motion.tr key={r.k} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.15 + i * 0.1 }}>
								<td style={{ ...cell, background: '#fff8f2', fontWeight: 800 }}>{r.k}</td>
								<td style={cell}>{r.a}</td>
								<td style={cell}>{r.b}</td>
								<td style={cell}>{r.c}</td>
								<td style={cell}>{r.d}</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>
			<p style={{ marginTop: 20, fontSize: 21, fontWeight: 700, lineHeight: 1.65 }}>
				试一下：会话中途改 CLAUDE.md，Claude 不会马上照做 —— 它在会话开始时就读进 context 了，要等 <code>/clear</code> 或重启。
				Memory 读进来以后，就是 <Mark color={colors.blue}>Context 的一部分</Mark>，照样要经过 M2 的治理
			</p>
			<Source>CLAUDE.md 的加载时机出自 Claude Code 官方文档 How Claude Code uses prompt caching。</Source>
		</ModuleFrame>
	);
}
