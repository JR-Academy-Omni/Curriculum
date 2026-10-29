import { colors, radii } from '../ui';
import { Label } from '../deck';
import { ModuleFrame, Terminal, Source, line, softShadow } from './_shared';

const ttl = [
	{ who: 'Claude 订阅（额度内）', main: '1 小时', other: '5 分钟（少数 helper 请求 1 小时）' },
	{ who: 'API key / 用量额度 / 云厂商', main: '5 分钟', other: '5 分钟' },
];
const cell = { borderBottom: '1px solid rgba(16,22,47,.18)', padding: '10px 14px', fontSize: 17, fontWeight: 700, lineHeight: 1.4 } as const;

// M5 跑 ③：TTL 和交互模式下的 /usage
export default function S25_M5TTL() {
	return (
		<ModuleFrame id="M5" phase="teach" title="实验 ③：cache 能活多久？命中率多少？" titleSize={46}>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
				<Terminal fontSize={16} lines={[
					'# 这次写入用的是哪种 TTL？',
					'$ claude -p "Reply OK" --output-format json | jq .usage.cache_creation',
					'#   ephemeral_1h_input_tokens / ephemeral_5m_input_tokens',
					'',
					'# 交互模式：聊两轮，再看命中率',
					'$ /usage      # 找 “Prompt cache (main)” 那一行',
					'$ /model      # 换个模型，再聊一句',
					'$ /usage      # 命中率掉了吗？写了什么原因？',
				]} />
				<div>
					<Label bg={colors.purple} color={colors.white}>Claude Code 默认的 TTL</Label>
					<div style={{ marginTop: 12, border: line, borderRadius: radii.card, overflow: 'hidden', background: colors.white, boxShadow: softShadow }}>
						<table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
							<thead><tr>{['计费方式', '主对话', '其他（subagent 等）'].map((h) => <th key={h} style={{ ...cell, background: colors.purple, color: colors.white, textAlign: 'left' }}>{h}</th>)}</tr></thead>
							<tbody>
								{ttl.map((r) => (
									<tr key={r.who}>
										<td style={{ ...cell, background: '#fff8f2' }}>{r.who}</td>
										<td style={cell}>{r.main}</td>
										<td style={{ ...cell, fontWeight: 600 }}>{r.other}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<p style={{ marginTop: 18, fontSize: 20, fontWeight: 700, lineHeight: 1.55 }}>
						每次命中都会把计时重置。写入 1 小时 TTL 比 5 分钟更贵，只有请求间隔常常超过 5 分钟时才划算
					</p>
					<Source>出自 Claude Code 官方文档 How Claude Code uses prompt caching。/usage 显示命中率需要 v2.1.251+，显示失效原因需要 v2.1.260+。</Source>
				</div>
			</div>
		</ModuleFrame>
	);
}
