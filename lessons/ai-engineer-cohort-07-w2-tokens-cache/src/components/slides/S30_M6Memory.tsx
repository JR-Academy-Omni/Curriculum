import { motion } from 'framer-motion';
import { Slide, Inner, Title, Highlight, colors, fonts, border } from '../ui';
import { col, ModuleTag, Source } from './_shared';

const rows = [
	{ k: '省的是什么', a: 'KV：decode 的重复计算', b: 'Prefix：重复的 prefill', c: 'Response：整次调用', d: '不省计算，提供信息' },
	{ k: '在哪一层', a: '推理引擎内部', b: '模型服务，跨请求', c: '你的应用', d: '你的应用，跨会话' },
	{ k: '怎么失效', a: '请求结束就释放', b: '前缀变化 · TTL', c: 'TTL · 版本 · 主动清除', d: '用户修改 / 删除' },
	{ k: 'Claude Code 里', a: '看不到', b: 'cache_read_input_tokens', c: '没有（每次都调模型）', d: 'CLAUDE.md · auto memory' },
];
const heads = ['', 'KV Cache', 'Prefix Cache', 'Response Cache', 'Memory'];
const headBg = [colors.warmBg, colors.orange, colors.purple, colors.red, colors.blue];
const cell = { border, padding: '10px 12px', fontSize: 18, fontWeight: 600, lineHeight: 1.4, verticalAlign: 'middle' } as const;

// M6 讲：四种「复用」放在一起 + Memory ≠ Cache
export default function S30_M6Memory() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={col}>
				<ModuleTag id="M6" phase="teach" />
				<Title size="46px" style={{ marginBottom: 18 }}>四种「复用」放一起看：Memory 不是 Cache</Title>
				<table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed', background: colors.white }}>
					<thead>
						<tr>{heads.map((h, i) => <th key={i} style={{ ...cell, background: headBg[i], color: i === 3 ? colors.white : colors.black, textAlign: 'left', fontFamily: fonts.mono, fontSize: 18 }}>{h}</th>)}</tr>
					</thead>
					<tbody>
						{rows.map((r, i) => (
							<motion.tr key={r.k} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.15 + i * 0.1 }}>
								<td style={{ ...cell, background: colors.warmBg, fontWeight: 800 }}>{r.k}</td>
								<td style={cell}>{r.a}</td>
								<td style={cell}>{r.b}</td>
								<td style={cell}>{r.c}</td>
								<td style={cell}>{r.d}</td>
							</motion.tr>
						))}
					</tbody>
				</table>
				<p style={{ marginTop: 22, fontSize: 22, fontWeight: 700, lineHeight: 1.6 }}>
					试一下：会话中途改 CLAUDE.md，Claude 不会马上照做 —— 它在会话开始时就读进 context 了，要等 <code>/clear</code> 或重启。
					Memory 读进来以后，就是 <Highlight color={colors.blue}>Context 的一部分</Highlight>，照样要经过 M2 的治理
				</p>
				<Source>CLAUDE.md 的加载时机出自 Claude Code 官方文档 How Claude Code uses prompt caching。</Source>
			</Inner>
		</Slide>
	);
}
